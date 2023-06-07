1. What is Emmet?
   Emmet, formerly known as Zen Coding, is a web development tool that helps streamline and accelerate the process of writing HTML and CSS code. It is a plugin or extension available for various code editors and integrated development environments (IDEs) like Visual Studio Code, Sublime Text, and others.

    Emmet provides a set of shortcuts, known as Emmet abbreviations or Emmet expressions, which allow developers to write HTML and CSS code faster and with less effort. These abbreviations are expanded into full-fledged HTML or CSS code by the Emmet engine. The syntax used by Emmet is inspired by CSS selectors and enables you to describe the structure and attributes of HTML elements in a concise manner.

    For example, using an Emmet abbreviation like `ul>li.item$*5`, you can generate a list (`ul`) with five list items (`li`) with unique class names (`item1`, `item2`, `item3`, etc.). Emmet can also handle nested structures, element attributes, IDs, and much more.

    By leveraging Emmet, web developers can boost their productivity and efficiency when working with HTML and CSS, as it reduces the need for repetitive typing and simplifies the process of creating markup and styles.

    example: The html boiler plate is with shortcut html:5 uses emmet.


2. Difference between Library and Framework.
    -Library:
        A library is a collection of pre-written code or functions that can be reused by developers to perform specific tasks or solve particular problems. It provides a set of functionalities that can be called upon by an application or program. Developers have control over how and when they use the library, as they integrate it into their own codebase.
    -Framework:
        A framework is a more comprehensive and opinionated software structure that provides a foundation and guidelines for building applications. It offers a set of predefined rules, protocols, and tools that dictate the overall architecture and flow of an application. Developers build their application within the framework's structure, following its conventions and utilizing its provided features.
        They impose a specific structure and dictate how the application should be designed, often following a model-view-controller (MVC) or similar architectural pattern.


3. What is cdn? Why do we use it?
    CDN stands for Content Delivery Network. It is a geographically distributed network of servers designed to deliver web content, such as images, videos, scripts, stylesheets, and other static or dynamic files, to end users in a fast and efficient manner. CDNs work by caching content on servers located in various geographic locations, allowing users to access the content from a server nearest to their location.

    Here are some reasons why CDNs are used:
    Improved Performance, Global Scalability, Reduced Bandwidth Costs, Load Balancing, Global Reach and Geo-targeting

    In a CDN setup, the CDN provider typically sets up servers in multiple locations around the world. These servers are strategically placed in different geographic regions to ensure better coverage and faster content delivery to end users.
    The CDN provider maintains a network infrastructure consisting of edge servers, also known as edge nodes or points of presence (PoPs). These edge servers are responsible for caching and delivering content to users. They are distributed across various data centers located in different cities or countries.
    The CDN provider selects these locations strategically to minimize latency and optimize content delivery. By having servers closer to end users, the CDN can reduce the distance data needs to travel, resulting in faster access to content. This is particularly beneficial for serving large media files, software downloads, or popular website content.

4. Why is React called React?
    React, the JavaScript library for building user interfaces, is called "React" because it revolves around the concept of efficiently updating and rendering components in response to changes in data. The name "React" reflects its core principle of reacting to data updates and efficiently updating the user interface.

    The term "React" highlights the library's focus on building reactive and dynamic user interfaces. React was initially developed by Facebook and was open-sourced in 2013. It was designed to address the challenges of building large-scale, complex web applications with frequently changing data.

    React introduces a concept called the "Virtual DOM" (Document Object Model), which is an in-memory representation of the actual DOM. Instead of directly manipulating the real DOM, React compares changes in the Virtual DOM with the previous state and efficiently updates only the necessary components and elements on the actual DOM. This approach helps minimize the number of DOM operations, resulting in faster and more efficient rendering.

    The name "React" signifies the library's focus on reacting to data changes and efficiently updating the user interface by leveraging the power of the Virtual DOM. It also conveys the idea of building interactive and responsive applications that respond dynamically to user input and data updates.

    Over time, React has gained significant popularity and has become one of the most widely used libraries for building user interfaces in the JavaScript ecosystem, powering numerous web applications, including those of large-scale companies like Facebook itself.


5. What is cross-origin attribute in script tag?
    The "cross-origin" attribute in the `<script>` tag is used to indicate whether a script should be allowed to load and execute from a different origin (domain, protocol, or port) than the one hosting the web page. It is a security mechanism known as Cross-Origin Resource Sharing (CORS).

    By default, web browsers enforce a "same-origin policy" to prevent JavaScript code from making requests to resources (like scripts, stylesheets, or APIs) hosted on different origins. This policy helps protect against certain security vulnerabilities, such as cross-site scripting (XSS) attacks.

    However, there are cases where you may want to include a script from a different origin. For example, you may want to include a third-party script hosted on a different domain, like an analytics tracking script or a widget from a different service provider.

    To enable such cross-origin script loading, the script element can include the "crossorigin" attribute. This attribute can have two possible values:

    1. "anonymous": This is the default value if the attribute is present but no value is specified. It indicates that the script should be fetched without including any credentials (such as cookies or HTTP authentication) from the requesting origin. This allows the script to be loaded and executed without exposing sensitive information to the script's origin.

    2. "use-credentials": This value indicates that the script should be fetched with credentials (cookies and HTTP authentication) included from the requesting origin. This is useful when the script requires authentication or when you want to allow the script to access cookies or other information associated with the requesting origin.

    It's important to note that the server hosting the script needs to include the appropriate CORS headers in its response for the browser to allow the cross-origin script loading. These headers include "Access-Control-Allow-Origin" to specify which origins are allowed to access the resource and possibly other headers like "Access-Control-Allow-Methods" or "Access-Control-Allow-Headers" to define the allowed methods or headers for the request.

    By using the "crossorigin" attribute in the `<script>` tag, you can control how scripts from different origins are handled and ensure proper security measures are in place.


6. Difference between React and ReactDOM?
    React and ReactDOM are two distinct packages in the React ecosystem, each serving a different purpose:
    1. React: React is the core library of the React ecosystem. It is a JavaScript library for building user interfaces. React provides a declarative and component-based approach to building UIs, allowing developers to create reusable UI components and manage their state efficiently.

    React provides a set of features and APIs that enable developers to define components, handle component lifecycle events, manage state, and render UI elements efficiently. It introduces concepts like JSX (JavaScript XML), which allows you to write HTML-like code within JavaScript, and the Virtual DOM (Document Object Model), which optimizes rendering by efficiently updating only the necessary components when the application state changes.

    2. ReactDOM: ReactDOM is a separate package that serves as the interface between React and the DOM (Document Object Model). It provides the necessary methods for rendering React components into the browser DOM and managing their lifecycle.

    ReactDOM is responsible for rendering React components into the actual HTML DOM elements. It provides methods like `ReactDOM.render()`, which takes a React component and mounts it into the DOM at a specified location. It also provides other methods for updating components, unmounting components, and interacting with the DOM.

    In summary, React is the core library that handles the logic and structure of building user interfaces using a component-based approach. ReactDOM, on the other hand, is a package specifically designed to bridge React with the DOM, allowing the rendering and manipulation of React components in the browser environment.

7. what is difference between react.development.js and react.production.js files via cdn?
    The difference between the React development and production files when loaded via a CDN lies primarily in their size and the level of optimizations applied.

    1. React Development File (react.development.js): The development file of React is intended for development purposes. It includes additional error checking, warnings, and debugging information that aid developers in identifying and resolving issues during development. This file is larger in size compared to the production version.

    The development file provides clearer error messages and warnings, supports hot reloading, and offers a more extensive stack trace for easier debugging. It is not optimized for performance and may have extra code and comments that are not necessary in a production environment.

    2. React Production File (react.production.js): The production file of React is optimized for performance and intended for deployment in production environments. It has been minified and stripped of unnecessary code and comments, resulting in a smaller file size compared to the development version.

    The production file omits development-specific warnings and error messages, resulting in a more streamlined and efficient code execution. It prioritizes performance and file size reduction to ensure faster loading times and improved runtime performance in production.

    When developing and testing a React application, it is common to use the development version to take advantage of the additional error checking and debugging capabilities. However, for the final deployment of the application, it is recommended to switch to the production version for optimal performance and reduced file size.

    It's worth noting that loading React via a CDN allows you to easily access and include the necessary React files without having to manage them locally. CDNs provide optimized and cached versions of these files, reducing the load on your own servers and ensuring faster delivery to end users.

8. What are async and defer.
    ![alt text](https://i.stack.imgur.com/wfL82.png)
