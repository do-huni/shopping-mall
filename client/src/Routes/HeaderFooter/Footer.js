import axios from "axios";
import {useEffect} from "react";

function Footer() {
	
  return (
	  <>
	  
	  <footer id = "footer">
		  <div id = "footerContentsWrapper">
		  <nav id = "footerNav">
			  <ul>
				  <li>
					  About Company
				  <ul>
					  <li>
						  대표 이사: 김도훈
					  </li>
					  <li>
						  대표 전화: 010-3335-7862
					  </li>
					  <li>
						  주소: 서울시 성북구 종암동 54-442
					  </li>
				  </ul>					  
				  </li>
				  <li>
					  Bank Info
				  <ul>
					  <li>
						  하나은행: 540-910-260-23607
					  </li>
					  <li>
						  국민은행: 010-3335-7862
					  </li>
				  </ul>					  
				  </li>			
				  <li>
					  Customer Center
				  <ul>
					  <li>
						  call: 02-554-1213
					  </li>
					  <li>
						  운영시간: 08:00~18:00
					  </li>
				  </ul>					  
				  </li>
				  <li>
					  SNS
				  <ul>
					  <li>
						  Instagram						  
					  </li>
					  <li>
						  Facebook
					  </li>
					  <li>
						  X
					  </li>					  
				  </ul>					  
				  </li>				  
			  </ul>
		  </nav>			  
		  </div>
	  </footer>
	  </>
  );
}

export default Footer;
