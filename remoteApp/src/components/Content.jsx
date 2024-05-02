import { Routes, Route } from "react-router-dom"
import Home from "../page/Home"
import StoreInfo from "../page/StoreInfo"
import StoreListPage from "../page/StoreListPage"
import Order from "../page/Order"


function Content() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/StoreInfo" element={<StoreInfo/>}/>
            <Route path="/StoreListPage" element={<StoreListPage/>}/>
            <Route path="/Oder" element={<Order/>} />
        </Routes>
    )
}

export default Content