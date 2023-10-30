import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import ArchivePage from "./pages/ArchivePage";
import TrashPage from "./pages/TrashPage";
import TagPage from "./pages/TagPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <div className='app-wrap'>
          <Sidebar />
          <div className='content-wrapper'>
            <Header />
            <Routes>
              <Route path='/' element={<MainPage />}></Route>
              <Route path='/archive' element={<ArchivePage />}></Route>
              <Route path='/trash' element={<TrashPage />}></Route>
              <Route path='/TagPage' element={<TagPage />}></Route>
              <Route path='/404' element={<ErrorPage />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
