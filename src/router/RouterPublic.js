
import Home from "../pages/frontend/Home/Home";
import Product from "../pages/frontend/Product/Product";
import Contact from "../pages/frontend/Contact/Contact";
import ProductDetail from "../pages/frontend/Product/ProductDetail";
import ProductBrand from "../pages/frontend/ProductBrand";
import ProductCategory from "../pages/frontend/ProductCategory";
import GioiThieu from "../layouts/LayoutSite/gioithieu";
import Post from "../components/frontend/postitem";
const RouterPublic = [
    { path: "/", component: Home },
    { path: "/san-pham", component: Product },
    { path: "/gioi-thieu", component: GioiThieu },

    { path: "/danh-muc-san-pham/:slug", component: ProductCategory },
    { path: "/thuong-hieu/:slug", component: ProductBrand },
    { path: "/chi-tiet-san-pham/:slug", component: ProductDetail },
    { path: "/lien-he", component: Contact },
    { path: "/bai-viet/:slug", component: Post },


];
export default RouterPublic;