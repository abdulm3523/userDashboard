import { Link } from "react-router-dom";
export const ResetForm = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <img src="brand_logo.png" alt="" className="logo" />
        <form action="">
          <h2>Forgot Password</h2>
          <label htmlFor="#email">Email address</label>
          <input required type="email" name="" id="email" placeholder="" />
          <button type="submit">Reset Password</button>
          <p className="footer_note">
            After send the request for reset password, you will get an link via
            your email to create new password
          </p>
          <p className="footer_text">
            <Link to="/login"> Sign in</Link> or{" "}
            <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
