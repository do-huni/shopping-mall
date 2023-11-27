const express = require("express");
const app = express();
const homeRouter = require('./routes/homeRouter');
const cors = require('cors')

const port = 8080
//위치가 중요!! 라우터 밑에 있으면 작동 안함
app.use(cors({ origin: [
  'https://shopping-mall-fe.run.goorm.site'
]}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', homeRouter);

app.listen(port, function(){
	console.log("listening on " + port);
});


