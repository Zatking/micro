function CateTypeOfFood(propsItem) {
    return(
        <div>
            <img src={propsItem.cateImg}
                alt="" className="rounded-md" />
            <p className="font-bold my-4">{propsItem.cateName}</p>
        </div>
    )
}

export default CateTypeOfFood