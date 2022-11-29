import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from './../../Hooks/UseToken';
import { AuthContext } from './../../Context/UserContext';


const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const {signIn} = useContext(AuthContext);
  const [loginError, setLoginError] = useState('')
  const [loginUserEmail, setLoginUserEmail] = useState('')
  const [token] = useToken(loginUserEmail)
  let navigate = useNavigate();
  let location = useLocation();


  const from = location.state?.from?.pathname || '/';
  
  if(token){
    navigate(from, { replace: true });
  }

  const handleLogin = data => {
    setLoginError('')
    signIn(data.email, data.password)
    .then(result =>{
      const user = result.user;
      console.log(user)
      setLoginUserEmail(data.email)
    
    })
    .catch(error => setLoginError(error.message))
  }

  return (
    <div className="flex lg:flex-row flex-col-reverse  justify-center items-center bg-lime-100">
    <div className="flex h-screen xl:w-3/12 lg:w-6/12 w-11/12 md:w-8/12 mx-auto p-10 justify-center lg:-mt-0 md:-mt-52 -mt-40 items-center">
      <div className="w-full">
        <h2 className="text-xl font-bold uppercase text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <label className="label"><span className="label-text">Email</span></label>
          <input type='email'
            {...register("email", { required: "Email Address is required" })} 
            aria-invalid={errors.email ? "true" : "false"}
            placeholder="email"
            className="input input-bordered w-full"
          />
           {errors.email && <p className="text-red-600">{errors.email?.message}</p>}

           <label className="label"><span className="label-text">Password</span></label>
          <input type='password' {...register("password", { 
            required: "Password is required",
            minLength : {value : 6, message: 'Password must be 6 character or more'},
          })} 
             placeholder="password" className="input input-bordered w-full"/>
              {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
          <label className="label"><Link><span className="label-text hover:text-blue-500 font-semibold">Forgot Password?</span></Link></label>
         

          {/* <p>{data}</p> */}
          <input type="submit" value='LOGIN' className="input input-bordered w-full bg-accent text-white font-bold mt-3 hover:bg-slate-800"/>
        </form>
        <div>
          {
            loginError && <p className="text-center text-red-500">{loginError}</p>
          }
        </div>
        <p className="text-center text-1xl">Don't Have Account? <Link to='/signup'><span className="font-semibold text-primary hover:text-secondary">Create an account</span></Link></p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">SIGN IN WITH GOOGLE</button>
      </div>
    </div>
    <img className='xl:w-11/12 w-9/12' src="https://images.pexels.com/photos/4350208/pexels-photo-4350208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
  );
};

export default Login;
