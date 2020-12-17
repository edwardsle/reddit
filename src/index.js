import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import App from "./App";
import axios from "axios";

import registerServiceWorker from "./registerServiceWorker";

axios.defaults.baseURL = 'http://localhost:3001';

// if you want to see demo app, change <AppClear/> to <App />
ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
