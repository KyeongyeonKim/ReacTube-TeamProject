import React, { useState } from "react";
import { client } from "api/supbase";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  //   const loginHandler = async (event) => {
  //     event.preventDefault();

  //     setLoading(true);
  //     const { error } = await client.auth.signInWithOtp({ email });

  //     if (error) {
  //       alert(error.error_description || error.message);
  //     } else {
  //       alert("Check your email!");
  //     }
  //     setLoading(false);
  //   };
  //   const checkLogin = async () => {
  //     const authInfo = await client.auth.getSession();
  //     const session = authInfo.data.session;
  //   };

  return (
    <>
      <h2>Sign up </h2>
      <form
      //   onSubmit={loginHandler}
      >
        <div>
          <label>id </label>
          <input
            type="string"
            id="id"
            value={id}
            placeholder="id를 입력하세요."
            required
            onChange={(event) => {
              setId(event.target.value);
            }}
          />
        </div>
        <div>
          <label>password </label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="비밀번호를 입력하세요."
            required
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div>
          <label>nickname </label>
          <input
            type="string"
            id="nickname"
            value={nickname}
            placeholder="닉네임을 입력하세요."
            required
            onChange={(event) => {
              setNickname(event.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          onClick={() => navigate("/home")}
          //   disabled={loading}
        >
          Sign Up
        </button>
      </form>
    </>
  );
}
