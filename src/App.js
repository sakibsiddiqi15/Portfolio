import React from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./Pages/Home/Home";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <Home />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
export default App;
