import { Outlet } from "react-router-dom";
import Footer from "../assets/Pages/Shared/Footer/Footer";
import Header from "../assets/Pages/Shared/Header/Header";


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;