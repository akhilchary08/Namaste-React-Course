import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./HeaderComponent";
const heading = (
  <div className="title">
    <h1>heading h1</h1>
    <h2>heading h2</h2>
    <h3>heading h3</h3>
  </div>
);

const HeadingComponent1 = () => {
  return (
    <div className="title">
      <h1>heading h1</h1>
      <h2>heading h2</h2>
      <h3>heading h3</h3>
    </div>
  );
};
const HeadingComponent = () => (
  <>
    <HeadingComponent1 />
    <div className="title">
      <h1>heading h1</h1>
      <h2>heading h2</h2>
      <h3>heading h3</h3>
    </div>
  </>
);

// same as



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
