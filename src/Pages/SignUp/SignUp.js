import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./../../Context/UserContext";
import useToken from "./../../Hooks/UseToken";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { createUser, updateUser } = useContext(AuthContext);
  const [signUperror, setSignUpError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate('/');
  }

  const handleSignUp = (data) => {
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast("user created successfully");
        const userInfo = {
          displayName: data.name,
          role: data.role,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.email, data.name, data.role);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => setSignUpError(error.message));
  };

  const saveUser = (email, name, role) => {
    const user = { email, name, role };
    fetch("https://flip-phone-server-towhid7667.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCreatedUserEmail(email);
      });
  };

  return (
    <div className="flex lg:flex-row flex-col-reverse  justify-center items-center bg-lime-100">
      <div className="flex h-screen xl:w-3/12 lg:w-6/12 w-11/12 md:w-8/12 mx-auto p-10 justify-center lg:-mt-0 md:-mt-52 -mt-40 items-center rounded-xl">
        <div className="w-full">
          <h2 className="text-xl font-bold uppercase text-center">Sign up</h2>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              aria-invalid={errors.name ? "true" : "false"}
              placeholder="name"
              className="input input-bordered w-full"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name?.message}</p>
            )}

            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email Address is required" })}
              aria-invalid={errors.email ? "true" : "false"}
              placeholder="email"
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}

            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 character or more",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[@#$&*])(?=.*[0-9])/,
                  message: "password must be Strong",
                },
              })}
              placeholder="password"
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}

            <select
              {...register("role", { required: "This is required" })}
              aria-invalid={errors.role ? "true" : "false"}
              className="select select-bordered w-full mt-8"
            >
              <option>Buyer</option>
              <option>Seller</option>
            </select>
            {errors.role && (
              <p className="text-red-600">{errors.message}</p>
            )}

            <input
              type="submit"
              value="SIGNUP"
              className="input input-bordered w-full bg-primary text-white font-bold mt-3 hover:bg-lime-500"
            />
          </form>
          {signUperror && <p className="text-red-600">{signUperror}</p>}
          <p className="text-center text-1xl">
            Have Account?{" "}
            <Link to="/login">
              <span className="font-semibold text-primary">Please Log in</span>
            </Link>
          </p>
          <div className="divider">OR</div>
          <button className="btn btn-secondary w-full">
            SIGN IN WITH GOOGLE
          </button>
        </div>
      </div>

      <img
        className="xl:w-11/12 w-9/12"
        src="https://images.pexels.com/photos/4350311/pexels-photo-4350311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </div>
  );
};

export default SignUp;
