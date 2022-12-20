
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Layout from "./pages/Layout";
import Actors from './pages/Actors';
import Home from './pages/Home';
import NoPage from "./pages/Nopage";
//import reportWebVitals from './reportWebVitals';

/* Planned layout of app
    <app>
      <nav><nav/>
      <button1><button1/>
      <div>
        <left column>
        <mid column>
        <right column>
      <div/>
      <game></game>
      <footer></footer>
    <app/>
*/


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Actors" element={<Actors />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <App />

);


