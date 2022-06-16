import { useRef, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from '../api/axios';
import Background from '../components/Background'
import LoaderButtons from '../components/LoaderButtons'

const LOGIN_URL = '/api/users';

function Login() {
   const { setAuth } = useAuth();
   const navigate = useNavigate();
   const location = useLocation();

   const [isButtonPress, setIsButtonPress] = useState(false);
   const [isButtonPress2, setIsButtonPress2] = useState(false);

   // const admin = location.state?.from?.pathname || "/admin";
   // const agent = location.state?.from?.pathname || "/agent";
   // const user__ = location.state?.from?.pathname || "/users";
   const from = location.state?.from?.pathname || "/home";
   // const auth_to = location.state?.from?.pathname || "/auth";

   const urlBase = 'https://global-selling.mercadolibre.com';
   const clientId = '3698739416306050';
   const redirectUri = 'https://auth.sellers-info.cl';
   const urlFinal = `${urlBase}/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;


   const userRef = useRef();
   const errRef = useRef();

   const [user, setUser] = useState('');
   const [pwd, setPwd] = useState('');
   // const [errMsg, setErrMsg] = useState('');

   useEffect(() => { userRef.current.focus(); }, [])

   // useEffect(() => { setErrMsg(''); }, [user, pwd])

   // const handleToAuth = (e) => {
   //    e.preventDefault();
   //    navigate(auth_to, { replace: true });
   // }

   const handleSubmit = async (e) => {
      e.preventDefault();
      setIsButtonPress(true);
      try {
         const response = await axios.post(LOGIN_URL,
            JSON.stringify({ user, pwd }),
            { headers: { 'Content-Type': 'application/json' }, }
         );

         const accessToken = response?.data.refresh_token;
         const roles = [response?.data.user_type];
         const name = response?.data.name;
         setAuth({ user, pwd, roles, accessToken, name });
         setUser('');
         setPwd('');

         // if (roles[0] === 221092534) { navigate(agent, { replace: true }); }
         // if (roles[0] === 334223112) { navigate(user__, { replace: true }); }
         // if (roles[0] === 558861093) { navigate(admin, { replace: true }); }
       
       
         navigate(from, { replace: true });
      } catch (err) {
         setIsButtonPress(false);
         // if (!err?.response) { setErrMsg('No Server Response'); }
         // else if (err.response?.status === 400) { setErrMsg('Missing Username or Password'); }
         // else if (err.response?.status === 401) { setErrMsg('Unauthorized'); }
         // else { setErrMsg('Login Failed'); }
         errRef.current.focus();
      }
   }

   return (
      <>
         <Background />
         {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
         <div className="loginbox">
            <div>
               <img src="../favicon.ico" alt="BL" className="avatar logo_login"></img>
               <h1 className='logo_login_title title_login'>Login</h1>
            </div>
            <form onSubmit={handleSubmit}>
               <hr />

               <input
                  placeholder='Username'
                  type="text"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
               />

               <input
                  placeholder='Password'
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
               />
               {isButtonPress ? <LoaderButtons /> : <></>}
               <button className='btn btn-success btn-block'>Sign In</button>
            </form>
            <hr />
            {isButtonPress2 ? <LoaderButtons /> : <></>}
            <a href={`${urlFinal}`} onClick={() => {
               setIsButtonPress2(true);
               setTimeout(() => setIsButtonPress2(false), 6000);
            }} className='btn btn-warning btn-block'><h5><sub>Seller Authorization</sub></h5></a>
         </div>
      </>
   )
}

export default Login
