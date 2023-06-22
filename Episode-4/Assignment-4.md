
1. Is jsx mandatory for React?
    No, JSX is not mandatory for React, but it is commonly used and strongly recommended. React is a JavaScript library for building user interfaces, and JSX (JavaScript XML) is an extension to JavaScript that allows you to write HTML-like syntax within your JavaScript code.
    It simplifies the process of creating and maintaining components, improves code readability, and provides better tooling support, such as syntax highlighting and error checking.
    However, if you prefer not to use JSX, you can still write React components using plain JavaScript. React provides an API called "React.createElement" that you can use to create React elements programmatically. It's a more verbose approach compared to JSX but still allows you to build React applications.

2. is es6 mandatory for react?
    ES6 (ECMAScript 2015) is not mandatory for React, but it is highly recommended and widely used in React development. ES6 is a significant update to the JavaScript language, introducing new features and syntax improvements that can greatly enhance the development experience.
    When writing React applications a tool like babel can be used to transpile your code,which converts ES6 syntax into backward-compatible JavaScript that can run on older environments.

3. {Titlecomponent} vs (‹TitleComponent/>} vs (<Titlecomponent×</TitleComponent>} in JSX
    In JSX, there are three different syntax variations for rendering React components:

    1. `{TitleComponent}`
    This syntax is used when you want to render the result of evaluating a JavaScript expression as a component. The expression can be a variable, a function call, or any other valid JavaScript expression that resolves to a React component. This syntax is typically used when you want to conditionally render components or dynamically pass props.

    Example:
    ```jsx
    const TitleComponent = <h1>Hello, World!</h1>;

    function App() {
        const showTitle = true;
        return (
        <div>
            {showTitle && TitleComponent}
        </div>
        );
    }
    ```

    2. `<TitleComponent />`
    This syntax is the standard way to render a React component. It represents a self-closing tag and is used when you want to render a component without any children. It's equivalent to calling `React.createElement(TitleComponent)`.

    Example:
    ```jsx
    function TitleComponent() {
        return <h1>Hello, World!</h1>;
    }

    function App() {
        return (
        <div>
            <TitleComponent />
        </div>
        );
    }
    ```

    3. `<TitleComponent>...</TitleComponent>`
    This syntax is used when you want to wrap content within a React component. It's called the "children syntax" and allows you to define the content that will be passed as `props.children` to the component.

    Example:
    ```jsx
    function TitleComponent(props) {
        return <h1>{props.children}</h1>;
    }

    function App() {
        return (
        <div>
            <TitleComponent>Hello, World!</TitleComponent>
        </div>
        );
    }
    ```

    All three variations serve different purposes in JSX. The first syntax (`{TitleComponent}`) is for evaluating JavaScript expressions and conditionally rendering components. The second syntax (`<TitleComponent />`) is the standard way to render a component without children. The third syntax (`<TitleComponent>...</TitleComponent>`) is used when you want to wrap content within a component.

    It's important to note that the component names should start with an uppercase letter in JSX. Lowercase component names are reserved for representing HTML tags.

4. Comments in react.
    {/* Comment */}

5. What is <React.Fragment></React.Fragment> and <></>?
    <React.Fragment></React.Fragment> is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM. <></> is the shorthand tag for React.Fragment. The only difference between them is that the shorthand version does not support the key attribute.

    return (
            <React.Fragment>
                <Header />
                <Navigation />
                <Main />
                <Footer />
            </React.Fragment>
        );

    return (
            <>
                <Header />
                <Navigation />
                <Main />
                <Footer />
            </>
        );

6. What is Reconciliation in React?
    Reconciliation is the process through which React updates the Browser DOM and makes React work faster. React use a diffing algorithm so that component updates are predictable and faster. React would first calculate the difference between the real DOM and the copy of DOM (Virtual DOM) when there's an update of components. React stores a copy of Browser DOM which is called Virtual DOM. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. Comparison is done by Diffing Algorithm. React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called Reconciliation.

                or
    Reconciliation is the process by which React updates the UI to reflect changes in the component state. The reconciliation algorithm is the set of rules that React uses to determine how to update the UI in the most efficient way possible. React uses a virtual DOM (Document Object Model) to update the UI.

7. What is React Fiber?
    React Fiber is a concept of ReactJS that is used to render a system faster, smoother and smarter. The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React. Because Fiber is asynchronous, React can:

    Pause, resume, and restart rendering work on components as new updates come in Reuse previously completed work and even abort it if not needed Split work into chunks and prioritize tasks based on importance
    Certainly! Here's a brief explanation of how React Fiber works:

    1. **Render phase:** When an update is triggered in a React application, React starts the render phase. During this phase, React creates a new fiber tree that represents the updated state of the component hierarchy. Each fiber node corresponds to a component and contains information about its type, props, and relationships with other components.

    2. **Reconciliation:** Once the new fiber tree is created, React begins the reconciliation process. It compares the new fiber tree with the previous one, performing a diffing algorithm to determine what has changed. This diffing process identifies the additions, removals, or updates in the component tree.

    3. **Commit phase:** After the reconciliation process, React moves to the commit phase. Here, React applies the changes to the actual DOM, making the necessary updates to reflect the new state of the component tree. This phase may involve creating new DOM elements, updating existing ones, or removing elements that are no longer needed.

    4. **Render and commit work loop:** React Fiber operates using a work loop that allows it to break down rendering work into smaller units and work on them over multiple frames. It uses a priority-based scheduler to determine which work to perform first. This means that React can prioritize high-priority updates, such as user interactions or animations, and ensure a smooth user experience.

    5. **Time-slicing and interruption:** React Fiber introduces the concept of time-slicing, which allows React to interrupt and resume the work as needed. This helps to avoid long-running rendering tasks that may block the main thread and cause UI freezes. React can break down the work into smaller chunks and yield control to other tasks, making the application more responsive.

    Overall, React Fiber provides a more efficient and flexible reconciliation process. It allows React to handle updates in a granular and prioritized manner, improves rendering performance, and enables better control over the user interface's interactivity and responsiveness.

8. Why do we need keys in React?
    A key is special attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated and deleted. 
    As we know that react updates the UI using React fiber and reconcilation process where React creates a virtual DOM and another copy of virtual DOM is created for any modifations. Now, these 2 copies are compared using a Diff algorithm. So, having key as an attribute to lists helps in uniquely identifying each list element. 

9. Can we use index as keys in React?
    Yes, we can use the index as keys, but it is not considered as a good practice to use them because if the order of items may change. This can negatively impact performance and may cause issues with component state. Keys are taken from each object which is being rendered. There might be a possibility that if we modify the incoming data react may render them in unusual order.



