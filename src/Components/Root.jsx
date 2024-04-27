import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";


const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="max-w-7xl px-6 mx-auto">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;