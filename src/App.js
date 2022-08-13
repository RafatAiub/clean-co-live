import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { publicRoute } from "./routes/publicRoutes";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";




function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <Navbar>

        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} /> */}
          {
            publicRoute.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />}></Route>
            ))
          }
        </Routes>

      </Navbar>

    </div>
  );
}

export default App;
