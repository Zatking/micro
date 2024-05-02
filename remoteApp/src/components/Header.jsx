function Header() {
    return(
        <div className="flex flex-row container items-center py-5 px-36 sticky top-0 bg-white shadow-lg" style={{zIndex: "99"}}>
        <a href="/" className="w-1/5">
            <img src="https://vectorseek.com/wp-content/uploads/2021/02/GrabFood-Logo-Vector.png"
                alt="" style={{ width: "auto", height: "1.5rem" }} />
        </a>
        <div className="basis-full"></div>
        
    </div>
    )
}

export default Header