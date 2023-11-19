const express = require("express");
const app = express();
const mainRouter = require('./Router/mainRouter');
const cors = require('cors')

const port = 8080
//위치가 중요!! 라우터 밑에 있으면 작동 안함
app.use(cors({ origin: [
  'https://shopping-mall-fe.run.goorm.site'
]}));

app.use('/api', mainRouter)

app.listen(port, function(){
	console.log("listening on " + port);
});


