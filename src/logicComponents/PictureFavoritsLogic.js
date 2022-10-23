import React, {useContext} from "react";
import { DataBase } from "../DataBase";
import {Link} from 'react-router-dom'

function PictureFavoritsLogic(props){
    const data = props.data
    const {toggleTheFavorite, addToBasket, pictureInfo} = useContext(DataBase)
    return(
        <div className='pictureFavorits__element-container'>
            <Link to={'/PictureInfo'}>
            <div onClick={()=>pictureInfo(data.id)} className="pictureFavorits__element-div-img">
                <img className="pictureFavorits__element-img" src={data.cover_photo.urls.full} />
            </div>
            </Link>
            <div className="pictureFavorits__element-btns-container">
                <button onClick={()=> addToBasket(data.id)} className="pictureFavorits__element-btn">add to cart</button>
                <i onClick={()=> toggleTheFavorite(data.id)} className={`ri-heart-${data.featured? "fill" : "line"} pictureFavorits__element-heart`}></i>
            </div>
        </div>  
    )
}


export default PictureFavoritsLogic