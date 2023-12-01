const db = require("../utils/database");
const jwtUtil = require("../utils/jwt-utils");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class tokenManager {
    constructor(req) {
        this.req = req;
    };
	async refresh(){
		const req = this.req;
		try{
			if(req.headers.authorization && req.headers.refresh){
				const auth = req.headers.authorization;
				const refresh = req.headers.refresh;
				const authVerify = jwtUtil.verify(auth);
				const user = jwt.decode(auth);
// 				존재하지 않는 유저면 리턴
				if(user == null){
					return {
						status: 400,
						message: "user data don't exist"
					};
				}
				const isAuthExpired = !authVerify.ok;
// 				accessToken 만료 시 재발급 과정 돌입
				if(isAuthExpired){
					const refreshVerify = jwtUtil.refreshVerify(refresh, user.id);
					const isRefreshExpired = refreshVerify.ok;
// 					refreshToken 까지 만료 시 재발급 불가능 => 재로그인하기
					if(isRefreshExpired){
						return {
							status: 401,
							message: "you should re-sign-in"
						};
					} else{						
						const accessToken = jwtUtil.sign(user);
						return {
							status: 201,
							accessToken: accessToken,
							refreshToken: refresh,
							message: "success"
						};
					}						
				} else{
					return {
						status: 204,
						message: "you don't need to refresh"
					};
				}
			} else{
				return {
					status: 400,
					message: "no headers!"
				};
			}
		} catch (err){
			return {
				status: 400,
				message: err
			};
		}
	}
	async verify(){
		const req = this.req;
		try{
			if (req.headers.authorization){
				const auth = req.headers.authorization;			
				const data = await jwtUtil.verify(auth);
				if(data.ok){
					const [result, fields] = await db.execute(`SELECT * FROM USER WHERE id="${data.id}";`);
					result[0].status = 200;
					result[0]. message = "complete"
					return result[0];
				} else{
					return {
						status: 400,
						message: data.message
					};
				}
			} else{
				return {
					status: 400,
					message: "you don't have authToken"
				}
			}
			
		} catch (err) {
			console.log(err);
			return({status: 400,
				   message: err});
        }
	}
}
module.exports = tokenManager;