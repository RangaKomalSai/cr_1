// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
// import Details from "./pages/Details.js";
// import Dashboard from "./pages/Dashboard.js";

// function App() {
//   useEffect(() => {
//     const initAOS = async () => {
//       const AOS = (await import("aos")).default;
//       AOS.init({
//         offset:100,
//         duration: 1000,
//         easing: "ease",
//         once: false,
//         anchorPlacement: "top-bottom",
//       });
//     };

//     initAOS();
//     AOS.refresh();
//   }, []);
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />}></Route>
//         <Route path="/details" element={<Details />}></Route>
//         <Route path="/dashboard" element={<Dashboard />}></Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Details from "./pages/Details.js";
import Dashboard from "./pages/Dashboard.js";

function App() {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({
        offset: 100,
        duration: 1000,
        easing: "ease",
        once: false,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
    AOS.refresh();
  }, []);

  const PrivateRoute = ({ element: Component, isAuthenticated, ...rest }) => {
    return isAuthenticated ? (
      <Component {...rest} />
    ) : (
      <Navigate to="/" replace />
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/details"
          element={
            <PrivateRoute
              element={Details}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute
              element={Dashboard}
              isAuthenticated={isAuthenticated}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;