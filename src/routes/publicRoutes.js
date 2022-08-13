import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home/Home";
import Login from "../components/Login";

import Service from "../components/Service";
export const publicRoute = [
    { path: "/", name: "Home", Component: Home },
    { path: "/about", name: "About", Component: About },
    { path: "/service", name: "Service", Component: Service },
    { path: "/contact", name: "Contact", Component: Contact },
    { path: "/login", name: "Login", Component: Login },
];