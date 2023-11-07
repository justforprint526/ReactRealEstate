import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import About from "./Pages/About";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}> </Route>
      <Route path="/SignIn" element={<SignIn/>}> </Route>
      <Route path="/SignUp" element={<SignUp/>}> </Route>
      <Route path="/Profile" element={<Profile/>}> </Route>
      <Route path="/About" element={<About/>}> </Route>
    </Routes>
    </BrowserRouter>
  )
}
