import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = "http://127.0.0.1:8000";
// axios.defaults.baseURL = "http://cr.abhyudayiitb.org";

// Function to get CSRF token from cookies
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

const clientId =
  "949228241511-mbfe9v2nh8u098587qflqstthjfo5oso.apps.googleusercontent.com";

function GoogleLoginComponent() {
  const navigate1 = useNavigate();
  const navigate2 = useNavigate();

  const sendTokenToDjango = async (token) => {
    try {
      // const csrftoken = getCookie("csrftoken");

      // axios.defaults.headers.common["X-CSRFToken"] = csrftoken;

      const response = await axios.post("/api/google-login/", { token }).then((response) => {if (response.data.newCreated) {
        localStorage.setItem("isAuthenticated", "true");
        navigate1("/details");
      } else if (response.data.isAuthenticated) {
        localStorage.setItem("isAuthenticated", "true");
        navigate2("/dashboard");
      }});
      console.log(response.data);
      
    } catch (error) {
      console.error("Error logging in with Google:", error);
    }
  };

  const handleLoginSuccess = (credentialResponse) => {
    sendTokenToDjango(credentialResponse.credential);
  };

  const handleLoginError = () => {
    console.log("Login Failed");
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginError} />
    </GoogleOAuthProvider>
  );
}

export default GoogleLoginComponent;
