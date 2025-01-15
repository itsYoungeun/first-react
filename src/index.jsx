import { createRoot } from "react-dom/client"
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"
const root = createRoot(document.getElementById("root"))

function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

root.render(
    <Page />
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