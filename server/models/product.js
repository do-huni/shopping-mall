const db = require("../utils/database");

class Product{
	constructor(req){
		this.req = req;
	}
	async addPost(){
		const req = this.req;
		try{
			const 
			const name = req.body.name;
			const description = req.body.description;
			const postQuery = await db.execute(`INSERT INTO PRODUCT(name, publisher_id, description) VALUES("${name}", ${id}, "${description});`);									
		} catch (err) {
			console.log(err);
			return {
				status: 400,
				message: "DB 내부 오류 발생"
			};
		}
	}
	
	async createCategory(){
		const req = this.req;
		try{
			const name = req.body.name;
			const postQuery = await db.execute(`INSERT INTO CATEGORY(name) VALUES("${name}");`);						
			return {
				status: 200,
				message: "postSuccess"
			};
		} catch (err) {
			console.log(err);
			return {
				status: 400,
				message: "DB Query에 오류가 발생했습니다. 중복되는 값인 지 확인해보세요."
			}
		}
	}
	async getCategories(){
		const req = this.req;
		try{
			const [result, fields] = await db.execute(`SELECT * FROM CATEGORY;`);
			console.log(result);
			return {
				status: 200,
				data: result
			};
			
		} catch (err){
			return {status: 400,
					data: null
				  };
		}
	}
	
}
module.exports = Product;