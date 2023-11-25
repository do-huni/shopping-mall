import axios from "axios";
import {useEffect} from "react";
import "./Account.css";
function SignIn() {
  const callApi = async () => {	  	  
		// POST 요청 전송
		axios({
		  method: 'post',
		  url: '/signup',
		  data: {
			firstName: 'Fred',
			lastName: 'Flintstone'
		  }
		});
  };
	
  useEffect(() => {
    callApi();
  }, []);
	
  return (
    <div>		  
		  <div>Sign Up</div>
		  <div id = "formWrapper">
			  <form>
				  <label htmlfor = "idInput">id</label>
				  <input type ="text" id = "idInput"/>
			  </form>
		  </div>
		  
    </div>
  );
}

export default SignIn;
