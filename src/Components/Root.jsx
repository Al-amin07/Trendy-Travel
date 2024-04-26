import { Outlet } from "react-router-dom";
import Nav from "./Nav";


const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="max-w-6xl mx-auto">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;