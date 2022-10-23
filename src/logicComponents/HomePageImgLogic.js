import React from "react";
import {useContext} from 'react'
import { Link } from "react-router-dom";
import {DataBase} from '../DataBase'

function HomePageImgLogic(props){
    const {cover_photo,id} = props.data
    const {pictureInfo} = useContext(DataBase)
    return (
    <Link to={'/PictureInfo'}>
        <img 
            onClick={()=>pictureInfo(id)}
            className="homePage__Img" 
            id={id} 
            src={cover_photo.urls.full}
            alt="img"
        />
    </Link>
    )
}

export default HomePageImgLogic