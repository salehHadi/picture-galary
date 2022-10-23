import React, {useContext, useState} from "react";
import { DataBase } from "../DataBase";
import { Link } from "react-router-dom";
import BasketLogic from "../logicComponents/BasketLogic";

function Basket(){
    const {basket,emptyBasketAfterOrder} = useContext(DataBase)
    const [orderPage, setOrderPage] = useState(false)
    const [textOrderDisplay, setTextOrderDisplay] = useState("order process ...")
    const [addGreenClassToOrederText, setAddGreenClassToOrederText] = useState(false)

    const totalCostValue = 1.99 * basket.length
    const totalCostDisplay = totalCostValue.toLocaleString("en-US", {style: "currency", currency: "SAR"})

    
    const basketElement = basket.map(data => {
        return <BasketLogic key={data.id} data={data} />
    })

    const orderElement = 
    <div className="basket__totalPrice-container">
        <button disabled={basket.length < 1? true : false} onClick={() => order()} className="basket__orderBTN">Order</button>
        <p className="basket__totalPrice-El">Totl Price:{totalCostDisplay}</p>
    </div>

    const textOrderHTML =
        <h2 className={`basket__orderText ${addGreenClassToOrederText && "green"}`}>
            {textOrderDisplay}
        </h2>

    function order(){
        setOrderPage(true)
        setTextOrderDisplay("order process ...")
        
        setTimeout(()=> {
            setAddGreenClassToOrederText(true)
            setTextOrderDisplay("order Completed ...")
            emptyBasketAfterOrder()
        }, 5000)
        
        setTimeout(()=> {
            setOrderPage(false)
            setAddGreenClassToOrederText(false)
        }, 9000)
    }

    return (
        <div className="basketContainer">
            {!orderPage&&<Link to={'/Home'} className="basket__goBack-btn"><i className="ri-arrow-left-s-line "></i></Link>}
            <h1 className="basket__title">Basket</h1>
             {!orderPage ? basketElement: textOrderHTML}
             {!orderPage && orderElement}

        </div>
    )
}

export default Basket