import React from "react";
import ReactDom from "react-dom/client";

function App() {
  return <h1>Hello React!!!!</h1>;
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  // React.StrictMode renders the components twice to check for bugs and checks for outdated components in the React version
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
