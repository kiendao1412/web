import React from "react";
import ReactDOM from 'react-dom/client'; // Đảm bảo import đúng từ 'react-dom/client'
import Home from "./pages/Home.js";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </React.StrictMode>
  );
};


root.render(<App />);
