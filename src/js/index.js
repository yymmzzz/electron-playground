/* import React from "react";
import ReactDom from "react-dom";

ReactDom.render(<h1>Hello React App</h1>, document.getElementById("root"));
 */

import React from "react";
import ReactDOM from "react-dom/client"; // React 18의 새로운 렌더링 API

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<h1>Hello React App</h1>);
