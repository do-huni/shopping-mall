import axios from "axios";
import {useEffect} from "react";

function Main() {
  const callApi = async () => {	  
    axios.get('https://shopping-mall-be.run.goorm.site/api')
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
  };
	
  useEffect(() => {
    callApi();
  }, []);
	
  return (
    <div>
		hello
    </div>
  );
}

export default Main;
