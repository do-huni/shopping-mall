require('dotenv').config();
const express = require("express");
const app = express();
const homeRouter = require('./routes/homeRouter');
const userRouter = require('./routes/userRouter');

const cors = require('cors')

const port = 8080
//위치가 중요!! 라우터 밑에 있으면 작동 안함
app.use(cors({ origin: [
	process.env.FE_PATH
  ]}));
console.log(process.env.FE_PATH);
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', homeRouter);
app.use('/user', userRouter);

app.listen(port, function(){
	console.log("listening on " + port);
});


