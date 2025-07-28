import Header from "./components/Header";
import "./styles/home.scss";
import MenuManager from "./components/Menu/MenuManager";
import { Routes, Route } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import Contact from "./pages/ContactPage";
import Intro from "./pages/IntroPage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectsPage";


import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <CustomCursor />
      <ToastContainer/>
      <MenuManager>
        <Header />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/collab" element={<Contact />} />
          <Route path="/aboutme" element={<AboutPage/>} />
          <Route path="/projects" element={<ProjectPage/>} />
        </Routes>
      </MenuManager>
    </>
  );
}

export default App;
