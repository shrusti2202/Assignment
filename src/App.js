import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import React,{Suspense} from "react";
import Photos from "./Pages/Photos";


const Product = React.lazy(() => import ('./Pages/Photos'));
function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header/>
        
          <Suspense fallback = { <div className="spinner-border text-danger">
            <h1>please wait</h1>
          </div>}><Home/></Suspense></>}></Route>

        <Route path="/photos" element={<><Header/>
        
        <Suspense fallback = { <div className="spinner-border text-danger">
          {/* <h1>please wait</h1> */}
          </div>}><Photos/></Suspense></>}></Route>

      </Routes>
    </BrowserRouter>

    
   </>
  );
}

export default App;
