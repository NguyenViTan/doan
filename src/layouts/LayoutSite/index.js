
import { Outlet, Link } from 'react-router-dom';
import Menu from './Menu';
import Header from './Header';
import Footer from './Footer';
import Post from './Post';
// import Mycontaint from "../../pages/frontend/Home/Mycontaint"



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import PostAdd from './PostAdd';



function LayoutSite() {
    return (
        <>
            <Header />
            <Menu />
            <Outlet />
            <PostAdd/>2
            <Post/>
            <Footer />
        </>
    );
}
export default LayoutSite;

