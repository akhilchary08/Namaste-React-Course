const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "heading", key: "1" },
      "Hello World from React!"
    ),
    React.createElement(
      "h1",
      { id: "heading2", key: "2" },
      "Hello World from React!"
    ),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement(
      "h1",
      { id: "heading3", key: "3" },
      "Hello World from React!"
    ),
    React.createElement(
      "h1",
      { id: "heading4", key: "4" },
      "Hello World from React!"
    ),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
