import logo from './logo.svg';
import './App.css';
import ResponsiveDrawer from './components/Menubar2'
import All from './components/Homeproducts';
import Vegetables from "./components/Vegetables"
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
   <>
   <ResponsiveDrawer />
   <BrowserRouter>
   <Routes>
     <Route path="/All" element={<All />} />
     <Route path="/Vegetables" element={<Vegetables />} />
     {/* <Route path="/fruits" element={<All />} />
     <Route path="/all" element={<All />} />
     <Route path="/all" element={<All />} />
     <Route path="/all" element={<All />} />
     <Route path="/all" element={<All />} />
     <Route path="/all" element={<All />} />
     <Route path="/all" element={<All />} /> */}
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
