import React, {useContext} from "react";
import {DataBase} from '../DataBase'
import {Link} from 'react-router-dom'

function Header(){
    const {updateHomePageImgs, fillterFavoritsPicture} = useContext(DataBase)
    return(
        <div className="footer">
            <Link 
                to={'/home'} 
                className="footer-BTN home-btn"
                onClick={()=> updateHomePageImgs()}
            > 
                <i className="ri-home-8-line"></i> 
            </Link>

            <Link
                className="footer-BTN fav-btn" 
                to={'/PictureFavorits'} 
                onClick={ () => fillterFavoritsPicture() }
            >
                <i className="ri-heart-line"></i>
            </Link>
            <Link className="footer-BTN basket-btn" to={'/Basket'}> <i className="ri-account-pin-circle-line"></i> </Link>
        </div>
    )
}

export default Header