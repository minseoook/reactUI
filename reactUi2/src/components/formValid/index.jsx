// FormValidation.js

import { useState } from "react";
import "./index.css";

function FormValidation() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    email: "",
  });

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateInput(name, value);
  }

  function validateInput(name, value) {
    const validations = {
      username: (val) =>
        val.length < 3 ? "Username must be at least 3 characters" : "",
      email: (val) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ? "" : "Invalid email address",
      password: (val) =>
        val.length < 5 ? "Password must be at least 5 characters" : "",
    };

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validations[name](value),
    }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    alert("로그인요청");
  }

  return (
    <div className="form-validation-container">
      <form onSubmit={handleFormSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">유저명</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="유저명을 입력하세요"
            value={formData.username}
            onChange={handleFormChange}
          />
          <span>{errors.username}</span>
        </div>
        <div className="input-wrapper">
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            placeholder="이메일 입력하세요"
            onChange={handleFormChange}
          />
          <span>{errors.email}</span>
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호 입력"
            value={formData.password}
            onChange={handleFormChange}
          />
          <span>{errors.password}</span>
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default FormValidation;
