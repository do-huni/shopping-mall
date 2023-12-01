const db = require("../utils/database");
const jwt = require("../utils/jwt-utils");
const bcrypt = require('bcryptjs');

class User {
    constructor(body) {
        this.body = body;
    };

    // async login(){
    //     // const body = this.body;
    //     // const data = await UserStorage.getUserInfo(body.id);

    //     // if (Object.keys(data).length) {
    //     //     if (data.id === body.id && data.passwd === body.passwd) {
    //     //         return { success: true };
    //     //     }
    //     //     return { success: false, message: "비밀번호가 일치하지 않습니다." };
    //     // }
    //     // return { success: false, message: "존재하지 않는 아이디입니다." };
    // };
	async signIn(){
		const body = this.body;
		try{
			// 반환할 객체
			let returnVal = {
				status: 201,
				message: "",
				jwtAccessToken: "accessToken",
				jwtRefreshToken: "refreshToken",
				ifSuccess: false
			};
			// mysql에 email이 일치하는 user를 찾는 쿼리를 한다.
			const [result, fields] = await db.execute(`SELECT * FROM USER WHERE email = "${body.email}";`);
			console.log(body);
			if(result.length == 0){
				returnVal.message = "아이디가 존재하지 않습니다."
				return returnVal;
			}			
			const check = await bcrypt.compare(body.pw, result[0].pw);
			// 비밀번호를 비교한다.
			if(!check){
				returnVal.message = "비밀번호가 틀렸습니다."
				return returnVal;
			}
			// 토큰 발행에 필요한 정보를 담은 객체 생성
			const userInfo = {
				id: result[0].id,
				email: result[0].email
			};
			// access token과 refresh token을 발급합니다.			
			const accessToken = jwt.sign(userInfo);
			const refreshToken = jwt.refresh();
			
			//db에 새로 발급된 refreshToken을 넣는다.
			const updateQuery = await db.execute(`UPDATE USER SET refreshToken = "${refreshToken}" WHERE email = "${body.email}";`);			
			
			returnVal.accessToken = accessToken;
			returnVal.refreshToken = refreshToken;
			returnVal.message = "로그인 성공!";
			returnVal.ifSuccess = true;
			return returnVal;
		} catch (err) {
			console.log(err);
			return({status: 400,
				   message: err});
        }
	}
    async signUp(){
        const body = this.body;
        try {
			console.log(body);
			const [result, fields] = await db.execute(`SELECT * FROM USER WHERE email="${body.email}";`);
			if(result.length === 0){
				const refreshToken = jwt.refresh();
				let pw = await bcrypt.hash(body.pw, 10);
				const postQuery = await db.execute(`INSERT INTO USER(name, email, pw, address_lv1, address_lv2, phone, refreshToken) VALUES("${body.name}", "${body.email}", "${pw}", "${body.address_lv1}", "${body.address_lv2}", "${body.phone}", "${refreshToken}");`);				
				return({status: 201,
				   message: "sign up success!",
				   refreshToken: refreshToken});
			};	
			return({
				status: 400,
				message: "already exists"				
			});

        } catch (err) {
			console.log(err);
			return({status: 400,
				   message: err});
        }
    };
};

module.exports = User;