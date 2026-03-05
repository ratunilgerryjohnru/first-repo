import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ];
  const education = [
    {
      year: "2024-Present",
      program: "BS Information Technology",
      school: "USTP-CDO"
    },
    {
      year: "2024",
      program: "Senior High School",
      school: "Cagayan de Oro College"
    },
    {
      year: "2022",
      program: "Junior High School",
      school: "Cagayan de Oro College"
    },
    {
      year: "2018",
      program: "Elementary",
      school: "Bongbongon Elementary School"
    },
    {
      year: "2012",
      program: "Kindergarden",
      school: "Mount Carmel College"
    },
  ];


  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <div class="container">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
        </button>

        <Header />
        <About />
        <Skills skills={skills} />
        <Education education={education} />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App
