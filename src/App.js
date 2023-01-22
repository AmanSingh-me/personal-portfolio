import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import MyWork from "./pages/MyWork";
import Blogs from "./pages/Blogs";
import ErrorPage from "./pages/ErrorPage.js";

function App() {
  return (
    <div className="App md:flex h-screen">
      <BrowserRouter>
        {/* <Routes>
          <Route path="/" element="<Home/>"> </Route>
          <Route path="/about" element={<About/>} > </Route>
          <Route path="/skills" element={<Skills/>}> </Route>
          <Route path="/mywork" element={<MyWork/>}> </Route>
          <Route path="/education" element={<Education/>}> </Route>
          <Route path="/blogs" element={<Blogs/>}> </Route>
          <Route path="*" element={<ErrorPage/>}> </Route>
        </Routes> */}
        <Header />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
