import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
export const SignupForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const {
    register,
    handelSubmit,
    watch,
    formState: { error },
  } = useForm();

  const registerFormData = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className="wrapper">
      <div className="container">
        <img src="brand_logo.png" alt="" className="logo" />
        <form action="" onSubmit={(e) => handelSubmit(registerFormData(e))}>
          <h2>Sign up</h2>
          <p className="subtitle">
            Already have an account? <Link to="/login">Log in</Link>
          </p>

          <div className="username_group">
            <label htmlFor="">Username</label>
            <div className="group">
              <span>idoz.me/</span>
              <input
                required
                type="text"
                placeholder=""
                {...register("username", { required: "username is required" })}
              />
            </div>
          </div>
          <label htmlFor="#email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder=""
            {...register("email", { required: "Email is required" })}
          />
          <label htmlFor="#password">Password</label>
          <input
            type="password"
            id="password"
            placeholder=""
            {...register("password", { required: "P" })}
          />
          <div className="remember_me">
            <input type="checkbox" name="" id="" />
            <span>
              I have read and agree to <a href="">terms and conditions</a>,{" "}
              <a href="">privacy policy</a>
              and <a href="">cookie policy</a>{" "}
            </span>
          </div>
          <button type="submit" onClick={(e) => e.preventDefault()}>
            {" "}
            Create account free
          </button>
        </form>
      </div>
    </div>
  );
};
