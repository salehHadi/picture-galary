import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { DataBase } from "../DataBase";

function PictureInfo(){
    const {pictureInformation, toggleTheFavorite, addToBasket} = useContext(DataBase)

    const {title, id, featured} = pictureInformation

    return (
        <div className="picture__info--container">
            <div className="picture__info--goBake-btnDIV">
                <Link to={'/Home'} className="picture__info--goBake-btn"><i className="ri-arrow-left-s-line"></i></Link>

            </div>
            
            <div className="picture__info--img-Div">
                <img className="picture__info--img" src={pictureInformation.cover_photo.urls.small}/>
            </div>

            <div className="picture__info--location-container">
                <i className="ri-map-pin-line"></i>
                <p className="picture__info--location-paragraph">{pictureInformation.cover_photo.user.location}</p>
            </div>
            <div className="picture__info--title-container">
                <h4 className="picture__info--title">Category:{title}</h4>
                <i onClick={()=> toggleTheFavorite(id)} className={`ri-heart-${featured? "fill" : "line"} picture__info--hart`}></i>
            </div>
            <div className="picture__info--last-section">
                <p className="picture__info--paragraph">This photo is one of our amazing library picture, feel free to add the picture to the cart and make sure to enjoy the benefits of the picture,This photo is one of our amazing library picture, feel free to add the picture to the cart and make sure to enjoy the benefits of the picture,This photo is one of our amazing library picture, feel free to add the picture to the cart and make sure to enjoy the benefits of the picture </p>
                <button onClick={()=> addToBasket(id)} className="picture__info--btn">Add to Cart</button>
            </div>
        </div>
    )
}

export default PictureInfo