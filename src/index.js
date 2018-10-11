import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import registerServiceWorker from "./registerServiceWorker";

import Main from "main/components";

const jsx = <Main />;

ReactDOM.render(jsx, document.getElementById("root"));
registerServiceWorker();
