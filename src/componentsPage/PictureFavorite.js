import React, {useContext} from 'react'
import PictureFavoritsLogic from '../logicComponents/PictureFavoritsLogic'
import Footer from './Footer'
import { DataBase } from '../DataBase'

function PictureFavorits(){
    const {pictureFavoritsList} = useContext(DataBase)
    // console.log(pictureFavoritsList)
    const pricturesFav = pictureFavoritsList.map(data => {
            return <PictureFavoritsLogic key={data.id} data={data} />
        })
    


    return(
        <div className='pictureFavorits'>
            <h4 className='pictureFavorits__title'>PictureFavorits</h4>

            <div className="pictureFavorits__Containre">
                {pricturesFav}
            </div>

            <Footer />
        </div>
    )
}

export default PictureFavorits