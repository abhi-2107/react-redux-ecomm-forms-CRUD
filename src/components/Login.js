import React from "react";
import { Link } from "react-router-dom";

function Login({ home }) {
  return (
    <div className="bg-white  d-flex  flex-column align-items-center">
      <Link to="/">
        <span className="text-dark h2 fw-bold " onClick={home}>
          BAZAR
        </span>
        <span className="small text-dark fw-500">.in</span>
      </Link>

      <div className="border rounded-3 w-25  mt-2 p-4 ">
        <p className="h3 mb-3">Sign in</p>
        <div class=" mb-3">
          <label for="floatingInput " className="h6 mb-2">
            Email or mobile phone number
          </label>
          <input type="email" class="form-control py-1" id="floatingInput" />
          <button className="btn btn-warning w-100 mt-3 mb-1 py-1">
            Continue
          </button>
        </div>
        <p className="small">
          By continuing, you agree to Bazar's{" "}
          <a href="/" className="text-decoration-none">
            {" "}
            Conditions of Use{" "}
          </a>{" "}
          and{" "}
          <a href="/" className="text-decoration-none">
            {" "}
            Privacy Notice.{" "}
          </a>
        </p>
        <span>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-right-short"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
            />
          </svg>{" "}
          <a href="/ " className="small text-decoration-none">
            Forgot Password
          </a>
        </span>
        <hr />
        <p className="h6 small m-0">Buying for work?</p>
        <a href="/" className="small text-decoration-none">
          Shop on Bazar Business
        </a>
      </div>

      <div className="w-25 my-3">
        <div>
          {" "}
          <p className="text-center">New to Bazar</p>
          <button className="btn btn-small py-1 border w-100 shadow-sm">
            {" "}
            Create your Bazar account
          </button>
        </div>
      </div>

      <div
        className="border-top pt-3 pb-5 w-100 "
        style={{
          background: "linear-gradient(to right,#fff,rgba(255,255,255,0),#fff)",
        }}
      >
        <div className=" d-flex flex-column justify-content-center align-items-around border w-25">
          <div className=" ">
            {" "}
            <a href="/" className="text-decoration-none small">
              {" "}
              Conditions of Use{" "}
            </a>
            <a href="/" className="text-decoration-none small">
              {" "}
              Privacy Notice{" "}
            </a>
            <a href="/" className="text-decoration-none small">
              {" "}
              Help{" "}
            </a>
          </div>
          <p className="small ">
            © 1995-2023, Bazar.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
