import { Link } from "react-router-dom";
import "../assets/style/authentications.css";
export const LoginForm = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <img src="brand_logo.png" alt="" className="logo" />
        <form action="">
          <h2>Sign In</h2>
          <p className="subtitle">
            {" Don't"} have an account yet <Link to="/signup">Signup Free</Link>
          </p>

          <label htmlFor="#email">Email address</label>
          <input required type="email" name="" id="email" placeholder="" />
          <label htmlFor="#password">Password</label>
          <input
            required
            type="password"
            name=""
            id="password"
            placeholder=""
          />
          <Link to="/reset-password" className="forgot_pass">
            Forgot Password?
          </Link>
          <div className="remember_me">
            <input type="checkbox" name="" id="" />
            <span>Remember Me</span>
          </div>
          <button type="submit"> Sign In</button>
        </form>
      </div>
    </div>
  );
};
