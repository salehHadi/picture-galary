import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import HomePageImgLogic from '../logicComponents/HomePageImgLogic'
import {DataBase} from '../DataBase'
import YourInterestsBTN from "../logicComponents/YourInterestsBTN";


// const iconSearch = <i class="ri-shopping-basket-line"></i>
function Home(){
    const {getData, searchBarData, basket} = useContext(DataBase)
    const [inputValue, setInputValue] = useState('')

    const imagesLogic = getData.map(element => {
        return (
            <HomePageImgLogic key={element.id} data={element}/>
        )
    })
    function handleChange(event){
        event.preventDefault();
        setInputValue(event.target.value)
    }
    
    function submit(event){
        event.preventDefault();
        searchBarData(inputValue)
    }

    return (
        <main className="homePage">
            <Link className="homePage__basket-btn" to={'/Basket'}>
                {basket.length < 1? 
                    <i className="ri-shopping-basket-line"></i>
                    : <i className="ri-shopping-basket-fill"></i>
                }
            </Link>
            <h2 className="homePage__title ">Amazing<br/> Library</h2>

            <form className="homePage__search" onSubmit={(event)=>submit(event)}>
                <input value={inputValue} onChange={(ev)=> handleChange(ev)} className="homePage__search--textBox" type={"text"} placeholder={`Search`}/>
                <button className="homePage__search--btn" type="submit">
                    <i className="ri-link-m"></i>
                </button>
            </form>


            <YourInterestsBTN />


            <div className="homePage__Img--container">
                {imagesLogic}
            </div>

            <Footer />
        </main>
    )
}
export default Home