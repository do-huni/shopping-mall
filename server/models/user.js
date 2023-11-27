const db = require("../utils/database");
const jwt = require("../utils/jwt-utils");

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
	async getJWTToken(){
		
	}
    async signUp(){
        const body = this.body;
        try {
			console.log(body);
			const [result, fields] = await db.execute(`SELECT * FROM USER WHERE email="${body.email}";`);
			console.log(result);
			if(result.length === 0){
				const refreshToken = jwt.refresh();
				const postQuery = await db.execute(`INSERT INTO USER(name, email, pw, address_lv1, address_lv2, phone, refreshToken) VALUES("${body.name}", "${body.email}", "${body.pw}", "${body.address_lv1}", "${body.address_lv2}", "${body.phone}", "${refreshToken}");`);				
				return({status: 200,
				   message: "sign up success!",
				   jwtAccessToken: refreshToken});
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