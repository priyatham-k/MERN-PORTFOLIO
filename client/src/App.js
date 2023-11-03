import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import axios from "axios";
import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPortFolioData } from "./redux/rootSlice";
import { useSelector } from "react-redux";
import Admin from './pages/Admin'
function App() {
  const { PortFolioData } = useSelector((store) => store.root);
  const Dispatch = useDispatch();
  async function getpersonalData() {
    await axios
      .get("http://localhost:5000/api/portfolio/get-portfolio-data")
      .then((response) => {
        Dispatch(setPortFolioData(response.data)); //
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getpersonalData();
  }, []);
  useEffect(() => {}, [PortFolioData]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
