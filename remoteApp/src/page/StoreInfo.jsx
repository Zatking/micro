import Foods from "../components/Food"
import ListFood from "../data/ListFood"
function StoreInfo() {
    return(
        <div className="container px-36 mb-36">
            <p className="mt-7">
                <a href="/" className="text-[#00A5CF]">Trang chủ</a>
                <i className="fa-solid fa-chevron-right text-[#808080] mx-2"></i>
                <a href="/StoreListPage" className="text-[#00A5CF]">Nhà hàng</a>
                <i className="fa-solid fa-chevron-right text-[#808080] mx-2"></i>
                <a>Xôi má Bảy</a>
            </p>
            <p className="text-4xl font-bold my-1">Xôi má Bảy</p>
            <p className="text-[#808080] mt-3 mb-2">Xôi</p>
            <p className="text-[#808080]">
                <i className="fa-solid fa-star text-[#F7C942] text-sm"></i> 4.2
                <i className="fa-regular fa-clock ml-16"></i>&nbsp;30 phút • 2.1 km
            </p>
            <p className="text-[#808080] my-2"><span className="mr-10 font-bold">Giờ mở cửa</span>Hôm nay  00:00-23:59</p>
            <p><i className="fa-solid fa-tags text-[#00B14F]"></i> Tặng ngay Trà Tắc Truyền Thống khi đặt đơn tối thiểu 100.000₫</p>
            <p><i className="fa-solid fa-tags text-[#00B14F]"></i> Tận hưởng ưu đãi</p>

            
            <p className="text-sm mt-4 mb-12 flex">
                <a className="border-2 border-[#E0E0E0] hover:border-[#00B14F] grid grid-cols-3 justify-between w-1/3 rounded p-2 mr-3">
                    <span className="col-span-2">
                        <i className="fa-regular fa-calendar-days mr-3"></i> Ngày giao hàng: Hôm nay
                    </span>
                    <i className="fa-solid fa-angle-down text-end text-[#C0C0C0]"></i>
                </a>
                <a className="border-2 border-[#E0E0E0] hover:border-[#00B14F] grid grid-cols-3 justify-between w-1/3 rounded p-2">
                    <span className="col-span-2">
                        <i className="fa-regular fa-clock mr-3"></i> Thời gian giao: Ngay bây giờ
                    </span>
                    <i className="fa-solid fa-angle-down text-end text-[#C0C0C0]"></i>
                </a>
            </p>
            <div className="sticky  py-3 bg-white z-50">
                <p className="flex justify-between text-xl text-[#606060]">
                    <a href="#promo" className=" hover:text-[#00B14F] active:font-semibold active:text-[#00B14F]">
                        Ưu đãi hôm nay
                    </a>
                    <a href="#suggested" className=" hover:text-[#00B14F] active:font-semibold active:text-[#00B14F]">
                        Món đỉnh GrabFood chọn
                    </a>
                    <a href="#main" className=" hover:text-[#00B14F] active:font-semibold active:text-[#00B14F]">
                        Món chính
                    </a>
                    <a href="#extra" className=" hover:text-[#00B14F] active:font-semibold active:text-[#00B14F]">
                        Đồ thêm
                    </a>
                    <a href="#drinks" className=" hover:text-[#00B14F] active:font-semibold active:text-[#00B14F]">
                        Đồ uống
                    </a>
                </p>
            </div>
            <div id="promo" className="h-32">&nbsp;</div>
            <p className="text-4xl font-bold mb-6">Ưu đãi hôm nay</p>
            <div className="grid grid-cols-3 gap-4">
                {
                    ListFood.map(dish => { if (dish.type === "promo") {
                            return(
                                <Foods dishImg={dish.img} dishName={dish.name} dishPrice={dish.price} />
                            )}}) 
                }
            </div>
            <div id="suggested" className="h-32">&nbsp;</div>
            <p className="text-4xl font-bold mb-6">Món đỉnh GrabFood chọn</p>
            <div className="grid grid-cols-3 gap-4">
                {
                    ListFood.map(dish => { if (dish.type === "suggested") {
                            return(
                                <Foods dishImg={dish.img} dishName={dish.name} dishPrice={dish.price} />
                            )}}) 
                }
            </div>
            <div id="main" className="h-32">&nbsp;</div>
            <p className="text-4xl font-bold mb-6">Món chính</p>
            <div className="grid grid-cols-3 gap-4">
                {
                   ListFood.map(dish => { if (dish.type === "main") {
                            return(
                                <Foods dishImg={dish.img} dishName={dish.name} dishPrice={dish.price} />
                            )}}) 
                }
            </div>
            <div id="extra" className="h-32">&nbsp;</div>
            <p className="text-4xl font-bold mb-6">Đồ thêm</p>
            <div className="grid grid-cols-3 gap-4">
                {
                    ListFood.map(dish => { if (dish.type === "extra") {
                            return(
                                <Foods dishImg={dish.img} dishName={dish.name} dishPrice={dish.price} />
                            )}}) 
                }
            </div>
            <div id="drinks" className="h-32">&nbsp;</div>
            <p className="text-4xl font-bold mb-6">Đồ uống</p>
            <div className="grid grid-cols-3 gap-4">
                {
                    ListFood.map(dish => { if (dish.type === "drinks") {
                            return(
                                <Foods dishImg={dish.img} dishName={dish.name} dishPrice={dish.price} />
                            )}}) 
                }
            </div>
        </div>
    )
}

export default StoreInfo