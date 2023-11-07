import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserContextProvider } from "./AuthContext.jsx";
import { BlogContextProvider } from "./ProductContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <BlogContextProvider>
      <App />
    </BlogContextProvider>
  </UserContextProvider>
);
