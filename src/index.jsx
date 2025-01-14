import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(
    <main>
        <img src="react-logo.png" />
        <h1>This is another element</h1>
    </main>
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

// TODO 1:00:15