import { useRef, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from '../api/axios';

const LOGIN_URL = '/api/users';

function Login() {

   const { setAuth } = useAuth();

   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/home";
   const auth = location.state?.from?.pathname || "/auth";

   const userRef = useRef();
   const errRef = useRef();

   const [user, setUser] = useState('');
   const [pwd, setPwd] = useState('');
   const [errMsg, setErrMsg] = useState('');

   useEffect(() => { userRef.current.focus(); }, [])

   useEffect(() => { setErrMsg(''); }, [user, pwd])

   const handleToAuth = (e) => {
      e.preventDefault();
      navigate(auth, { replace: true });
   }

   const handleSubmit = async (e) => {
      e.preventDefault();

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
         navigate(from, { replace: true });

      } catch (err) {
         if (!err?.response) { setErrMsg('No Server Response'); }
         else if (err.response?.status === 400) { setErrMsg('Missing Username or Password'); }
         else if (err.response?.status === 401) { setErrMsg('Unauthorized'); }
         else { setErrMsg('Login Failed'); }
         errRef.current.focus();
      }
   }


   return (
      <div className='body_login'>
         <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
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

               <button className='btn btn-success btn-block'>Sign In</button>
            </form>
            <hr />
            <button onClick={handleToAuth} className='btn btn-warning btn-block'>Seller Authorization</button>
         </div>
      </div>
   )
}

export default Login
