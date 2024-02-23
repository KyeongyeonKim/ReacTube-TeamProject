import { useState } from "react";
import { client } from "../api/supbase";
import { signInWithOAuth } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

export default function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const signInWithGithub = async () => {
    const { data, error } = await client.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/home",
      },
    });
  };

  const loginHandler = async (event) => {
    event.preventDefault();

    setLoading(true);
    const { error } = await client.auth.signInWithOtp({ email });

    if (error) {
      alert(error.error_description || error.message);
    } else {
      alert("Check your email!");
    }
    setLoading(false);
  };

  return (
    <>
      <h2>Sign in </h2>
      <form onSubmit={loginHandler}>
        {/* <input
      type="email"
      placeholder="Write your email"
      required
      onChange={(event) => {
        setEmail(event.target.value);
      }}
    /> */}

        {/* <button
      onClick={() =>  
      }
      disabled={loading}
    >
      {loading ? <span>Loading...</span> : <span>Log In</span>}
    </button> */}
        <button
          onClick={() => {
            signInWithGithub();
          }}
          disabled={loading}
        >
          login with github
        </button>
        <FaGithub onClick={() => signInWithGithub()} />
        <div>
          <button onClick={() => navigate("/signup")}>Go to SignUp page</button>
        </div>
      </form>
    </>
  );
}
