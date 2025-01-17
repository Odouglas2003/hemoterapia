// components/LoginForm.js
import "./logins.css";

const LoginForm = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <a className="login">Hospital Militar</a>
          <div className="inputBoxx">
            <input type="text" required />
            <span className="user">email</span>
          </div>

          <div className="inputBox">
            <input type="password" required />
            <span>Password</span>
          </div>

          <button className="enter">Enter</button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
