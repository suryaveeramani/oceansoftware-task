import { Box, Button, TextField, Toolbar, Typography } from "@mui/material";
import facebook from "../../asset/facebook.png";
import google from "../../asset/search.png";
import twitter from "../../asset/twitter.png";
import logo from "../../asset/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const height = window.innerHeight;
const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  return (
    <div
      style={{
        height: height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "silver",
      }}
    >
      <div
        style={{
          width: 350,
          padding: 30,
          background: "white",
          boxShadow: "5px 10px 18px #888",
        }}
      >
        <Header />
        <Body user={user} setUser={setUser} />
        <Footer />
      </div>
    </div>
  );
};
export default Login;

const Header = () => {
  return (
    <div>
      <Toolbar disableGutters={true}>
        <img src={logo} style={{ width: "100%" }} alt="Ocean software" />
      </Toolbar>
    </div>
  );
};
const Body = ({ user, setUser }) => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log("user", user);
    const { email, password } = user;
    setUser({ email: "", password: "" });
    console.log(typeof email, typeof password);
    if (email.toString() === "admin" && password.toString() === "12345") {
      navigate("/home");
    } else {
      alert("Failed Login");
    }
  };
  return (
    <div style={{ marginTop: 30, marginBottom: 30 }}>
      <Typography variant="h6" style={{ marginBottom: 30 }}>
        Login to your Account
      </Typography>
      <TextField
        type="name"
        value={user.email}
        placeholder="Email"
        style={{ width: "100%", marginBottom: 25, border: "none" }}
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
        }}
      />
      <TextField
        type="password"
        value={user.password}
        placeholder="Password"
        style={{ width: "100%", marginBottom: 25 }}
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
      />
      <br />
      <Button
        variant="contained"
        style={{
          width: "100%",
          background: "#1a0d8d",
          textTransform: "capitalize",
        }}
        onClick={handleSubmit}
      >
        Sign in
      </Button>
    </div>
  );
};
const Footer = () => {
  return (
    <>
      <Typography style={{ textAlign: "center" }}> or Sign in with</Typography>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "30px 0",
        }}
      >
        <img src={google} alt="google" style={{ width: 30, height: 30 }} />
        <img src={facebook} alt="facebook" style={{ width: 30, height: 30 }} />
        <img src={twitter} alt="twitter" style={{ width: 30, height: 30 }} />
      </Box>
    </>
  );
};
