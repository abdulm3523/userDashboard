import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { registerWithEmailandUser } from "../util/firebase";

export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();
  const [onSuccesM, setOnSuccesM] = useState("");

  const registerFormData = async (data) => {
    // data.preventDefault();
    console.log(data);
    // const username = data.username;
    const email = data.email;
    const password = data.password;
    setOnSuccesM("Congratulations!, SignUp Succesfull");
    // succesMessage = <p></p>;
    try {
      await registerWithEmailandUser(email, password);
    } catch (error) {
      setOnSuccesM(error.message);
      console.log(error.message);
    }
    reset();
  };
  return (
    <div className="wrapper">
      <div className="container">
        <img src="brand_logo.png" alt="" className="logo" />
        <form
          action=""
          onSubmit={handleSubmit((data) => registerFormData(data))}
        >
          <h2>Sign up</h2>
          <p className="subtitle">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
          {onSuccesM && <p>{onSuccesM}</p>}

          <div className="username_group">
            <label htmlFor="">Username</label>
            <div className="group">
              <span>idoz.me/</span>
              <input
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
          {/* <p>{formState.errors.email}</p> */}
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
          <button type="submit">Create account free</button>
        </form>
      </div>
    </div>
  );
};
