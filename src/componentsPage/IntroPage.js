import React, {useContext} from "react";
import {Link} from 'react-router-dom'
import {DataBase} from '../DataBase'

function Intro(){
    const {updateHomePageImgs} = useContext(DataBase)
    return (
        <div className="intro">
            <h2 className="intro__title">Into The World</h2>
            <Link to={'./Home'}  
                activeclassname="active" 
                className="Intro__BTN"
                onClick={()=> updateHomePageImgs()}
                >
                    Discover ..
            </Link>
        </div>
    )
}

export default Intro