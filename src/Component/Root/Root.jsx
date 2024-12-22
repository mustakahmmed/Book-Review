import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";



const Root = () => {
    return (
 
        <div>
            <div className="w-10/12 mx-auto">
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Root;