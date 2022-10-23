import {useContext} from "react";
import {DataBase} from '../DataBase'


function YourInterestsBTN(){
    const {intrestsWords, changeAPIimport} = useContext(DataBase)

    const intrestsWordsElement = intrestsWords.map(e=> {
        return(
            // later come and give it an id
            <button onClick={()=>changeAPIimport(e.id)} key={e.id} className="homePage__suggestion--btn">{e.name}</button>
        )
    })

    return (
    <div className="homePage__suggestion">
        <p>What's your intrest</p>

        <div className="homePage__suggestion--BTN-container">
            {intrestsWordsElement}
        </div>
    </div>
    )
}


export default YourInterestsBTN