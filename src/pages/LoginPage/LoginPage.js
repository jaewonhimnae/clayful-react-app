import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import clayful from "clayful/client-js";
import { AuthContext } from "../../context/AuthContext";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated } = useContext(AuthContext);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var Customer = clayful.Customer;

    var payload = {
      email,
      password,
    };

    Customer.authenticate(payload, function (err, result) {
      if (err) {
        // Error case
        console.log(err.code);
        return;
      }

      var data = result.data;
      localStorage.setItem("customerUid", data.customer);
      localStorage.setItem("accessToken", data.token);
      navigate("/");
      isAuthenticated();
    });
  };

  return (
    <div className="pageWrapper">
      <div className="auth-wrapper">
        <h1>로그인.</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleEmailChange}
            placeholder="Apple Id"
            type="email"
            name="email"
            value={email}
          />
          <input
            onChange={handlePasswordChange}
            placeholder="암호"
            type="password"
            name="password"
            value={password}
          />
          <p>
            Apple ID는 iTunes, App Store, iCloud에 로그인할 때 사용하는 이메일
            주소입니다.
          </p>

          <button type="submit">로그인.</button>
          <Link to="/register" style={{ color: "gray", textDecoration: "none" }}>
            {" "}
            Apple ID가 없으신가요? 지금 생성.
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
