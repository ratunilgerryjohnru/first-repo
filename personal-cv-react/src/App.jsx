import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div class="container">
      <div className={darkMode ? "dark-mode" : ""}>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
        </button>

        <Header />
        <About />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App
