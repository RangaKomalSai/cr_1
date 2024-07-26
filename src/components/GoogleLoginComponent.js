import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = "http://127.0.0.1:8000";

// Function to get CSRF token from cookies
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Check if the cookie name matches the name we're looking for
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
// const clientId ="949dfhgrthjkyjukhijkml,vhfygyu.googleusercontent.com"

function GoogleLoginComponent() {
  const navigate = useNavigate();

  const sendTokenToDjango = async (token) => {
    try {
      // Fetch CSRF token from cookies
      const csrftoken = getCookie("csrftoken");

      // Set CSRF token in headers
      axios.defaults.headers.common["X-CSRFToken"] = csrftoken;

      const response = await axios.post(
        "/api/google-login/",
        { token },
        {
          withCredentials: true, // Ensure credentials (cookies) are included in the request
        }
      );
      if (response.data.newCreated) {
        navigate("/details");
      } // Assuming backend returns user data or success message
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
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginError}
        // useOneTap
      />
    </GoogleOAuthProvider>
  );
}

export default GoogleLoginComponent;
