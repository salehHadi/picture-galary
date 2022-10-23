import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import { DataBase } from "../DataBase";

function BasketLogic(props){
    const [hoverTrush, setHoverTrash] = useState(false)
    const {pictureInfo, removeFromBacket} = useContext(DataBase)
    const {cover_photo, title, id} = props.data

    const price = 1.99 
    const priceDispaly = price.toLocaleString("en-US", {style: "currency", currency: "SAR"})
    return (
        <div className="basketElement__container">
            <div className="basketElement__trash">
                <i 
                // ri-delete-bin-line
                    onClick={()=> removeFromBacket(id)}
                    onMouseEnter={()=> setHoverTrash(true)}
                    onMouseLeave={()=> setHoverTrash(false)}
                    className={`ri-delete-bin-${ hoverTrush ? "5-line" : "line" } basketElement__trashEl`}
                >
                </i>
            </div>
            <div>
                <Link to={'/PictureInfo'}><img onClick={()=> pictureInfo(id)} className="basketElement__img" src={cover_photo.urls.full} alt="img" /> </Link>
            </div>
            <div>
            <Link className="basketElement__title" to={'/PictureInfo'}><h4 onClick={()=> pictureInfo(id)} className="basketElement__title">{title}</h4></Link>
                <p className="basketElement__subtitle">this is demo of real website that is working on heigh level of the service and comfort of the customer, we really hope that you find our stuff valuable to you and server you in best way posibble, ENJOY ...</p>
            </div>

            <p className="basketElement__price">Price: {priceDispaly}</p>
        </div>
    )
}

export default BasketLogic