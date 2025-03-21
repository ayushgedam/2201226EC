import React from "react";
import ReactDOM from "react-dom/client"; // Use React 18's createRoot
import App from "./App";
import "tailwindcss/tailwind.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

