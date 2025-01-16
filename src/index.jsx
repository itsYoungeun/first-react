import { createRoot } from "react-dom/client"
import App from "./App"

const root = createRoot(document.getElementById("root"))

root.render(
    <App />
)


// DECLARATIVE
// root.render(
//     <h1 className="header">Hello</h1>
// )

// IMPERATIVE
// const h1 = document.createElement("h1");
// h1.textContent = document.createTextNode("Hello");
// h1.className = "header"
// document.getElementById("root").appendChild(h1)