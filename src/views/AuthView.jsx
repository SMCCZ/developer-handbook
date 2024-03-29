import { useNavigate } from "react-router-dom";

export default function AuthView() {
  
  const navigate = useNavigate();
  return (
    <div
      className="card"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "blue",
      }}
    >
      <div
        style={{
          background: "white",
          alignItems: "center",
          boxShadow: "8px 16px 32px 2px grey",
          borderRadius: "8px",
          padding: "16px",
          border: "1px solid black",
          display: "flex",
          flexDirection: "column",
          margin: "16px",
        }}
      >
        {/* <LikeButton  /> */}
        <p
          style={{
            fontSize: "16px",
            color: "#3498db",
            textShadow: "3px 3px 5px #2980b9",
            transform: "perspective(1000px) rotateY(-20deg)",
            textAlign: "center",
          }}
        >
          {Date()}
        </p>
        <input input="input" placeholder="User name" style={inputStyle}></input>
        <input
          input="password"
          placeholder="Password"
          style={inputStyle}
        ></input>

        <button
          style={buttonStyle}
          onClick={() => {
            console.log(Date());
            navigate("/home");
          }}
        >
          Login
        </button>

        <div style={googleButtonStyle}>Continue with Google</div>
      </div>{" "}
    </div>
  );
}
const inputStyle = {
  border: "1px solid grey",
  width: "320px",
  padding: "16px 8px",
  borderRadius: "8px",
  margin: "0px",
  marginBottom: "16px",
};

const buttonStyle = {
  width: "340px",
  background: "blue",
  border: "1px solid blue",
  padding: "16px 32px",
  color: "white",
  borderRadius: "8px",
  marginBottom: "16px",
  fontSize: "16px",
};
const googleButtonStyle = {
  border: "1px solid blue",
  padding: "16px 32px",
  color: "blue",
  width: "274px",
  borderRadius: "8px",
  marginBottom: "32px",
  fontSize: "16px",
};
