import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <>
      <h1>Hello React!!!!</h1>
      <p>this is an example</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // React.StrictMode renders the components twice to check for bugs and checks for outdated components in the React version
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
