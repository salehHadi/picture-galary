import { createContext, useState, useEffect } from "react"

const DataBase = createContext(null)

function DataBasedProvider(props){
    const [getData, setGetData] = useState([])
    const [imgGisplayOnHomePage, setImgGisplayOnHomePage] = useState([])
    const [searchKey, setSearchKey] = useState("water")
    const [pictureInformation, setpictureInformation] = useState([])
    const [pictureFavoritsList, setPictureFavoritsList] = useState([])
    const [basket, setBasket] = useState([])

    
    useEffect(()=>{
        fetch (`https://api.unsplash.com/search/collections?page=10&query=${searchKey}&q=1&client_id=LJZlIBtnLMZTq8uHlBRkZdtqbF3ED_kVqa0lI3Q_0RU`)
            .then(res => res.json())
            .then(data => 
                setGetData(data.results)
    
        )},[searchKey])


    const intrestsWords = [
    {name:"adventure", id:1},
    {name:"wedding", id:2},
    {name:"travel", id:3},
    {name:"human", id:4},
    {name:"water", id:5},
    {name:"nature", id:6},
    {name:"country", id:7}
    ]


    useEffect(() => {
            setTimeout(() => {
                renderData(intrestsWords[0].name)
            }, 1000);
            setTimeout(() => {
                renderData(intrestsWords[1].name)
            }, 2000);
            setTimeout(() => {
                renderData(intrestsWords[2].name)
            }, 3000);
            setTimeout(() => {
                renderData(intrestsWords[3].name)
            }, 4000);
            setTimeout(() => {
                renderData(intrestsWords[4].name)
            }, 5000);
            setTimeout(() => {
                renderData(intrestsWords[5].name)
            }, 6000);
            setTimeout(() => {
                renderData(intrestsWords[6].name)
            }, 7000);

            function renderData(word){
                fetch (`https://api.unsplash.com/search/collections?page=10&query=${word}&q=1&client_id=LJZlIBtnLMZTq8uHlBRkZdtqbF3ED_kVqa0lI3Q_0RU`)
                .then(res => res.json())
                .then(data => setImgGisplayOnHomePage(e => [...e, ...data.results]))
            }
    }, []) // eslint-disable-next-line


    function updateHomePageImgs(){
        setGetData(imgGisplayOnHomePage)
    }

    function searchBarData(data){
        setSearchKey(data)
    }

    function changeAPIimport(id){
        const updatedName = intrestsWords.find(e => e.id === id )
        setSearchKey(updatedName.name)
    }

    function pictureInfo(id){
        const pictureInfoElfromData = getData.find(e=> e.id === id)
        const pictureInfoElfromfav = pictureFavoritsList.find(e=> e.id === id)
        const pictureInfoElfromBasket = basket.find(e=> e.id === id)

        if (pictureInfoElfromData){
            setpictureInformation(pictureInfoElfromData)
        } else if (!pictureInfoElfromData && pictureInfoElfromfav) {
            setpictureInformation(pictureInfoElfromfav)
        } else if (!pictureInfoElfromData && pictureInfoElfromBasket) {
            setpictureInformation(pictureInfoElfromBasket)
        }
    }

    function toggleTheFavorite(id) {
        const findElement = getData.find(e => e.id === id )
        const findElFromFav = pictureFavoritsList.find(e => e.id === id )
        const findElFromBasket = basket.find(e => e.id === id )

        if (findElement) {
            const updatedData = getData.map(e => {
                return (
                    e.id === findElement.id ? {...e, featured: !e.featured} : e
                )
            })
            setGetData(updatedData)
            setpictureInformation(pre => {
                return {...pre, featured: !pre.featured}
            })
    
            addToFavorits(findElement, updatedData)   
             
        } else if(!findElement && findElFromFav) {
            const updatedData = pictureFavoritsList.map(e => {
                return (
                    e.id === findElFromFav.id ? {...e, featured: !e.featured} : e
                )
            })
            setPictureFavoritsList(updatedData)
            setpictureInformation(pre => {
                return {...pre, featured: !pre.featured}
            })

        } else if (!findElement && findElFromBasket){
            const updatedData = basket.map(e => {
                return (
                    e.id === findElFromBasket.id ? {...e, featured: !e.featured} : e
                )
            })
            setPictureFavoritsList(updatedData)
            setpictureInformation(pre => {
                return {...pre, featured: !pre.featured}
            })
        }

    }


    function addToFavorits(element, updatedData){
        const updatedEl = updatedData.find(el => el.id === element.id)
        const try1 = pictureFavoritsList.some(el => el.id === updatedEl.id)
        if(!try1){
            setPictureFavoritsList(pre => [...pre, updatedEl])
        } else if (try1) {
            const updatePicFavElState = pictureFavoritsList.map(el => {
                return (
                    el.id === updatedEl.id ? updatedEl : el
                )
            })
            setPictureFavoritsList(updatePicFavElState)
        }
    }

    function fillterFavoritsPicture(){
        const filterUnFavoritsPic = pictureFavoritsList.filter(el => {
            return el.featured
        })
        setPictureFavoritsList(filterUnFavoritsPic)

    }


    function addToBasket(id){
        const addEl = getData.find(el => el.id === id)
        const addElFromFavList = pictureFavoritsList.find(el => el.id === id)
        if(addEl){
            setBasket(pre => [...pre, addEl])
            filterTheBasket(addEl.id)
        } else if(!addEl) {
            setBasket(pre => [...pre, addElFromFavList])            
            filterTheBasket(addElFromFavList.id)
        }
    }

    function filterTheBasket(id){
        const getEl = basket.filter(e => e.id === id)
        const findEl = basket.find(e => e.id === id)

        if (getEl.length > 0) {
            const elements = basket.map(el => {
                 return el.id !== id ? el : findEl
            })
            setBasket(elements)
        }
    }

    function removeFromBacket(id){
        const removeEl = basket.filter(el => el.id !== id)
        setBasket(removeEl)
    }
    
    function emptyBasketAfterOrder(){
        setBasket([])
    }

    return (
        <DataBase.Provider value={{
        getData,
        updateHomePageImgs,
        imgGisplayOnHomePage,
        intrestsWords, 
        changeAPIimport, 
        searchBarData, 
        pictureInfo, 
        pictureInformation, 
        toggleTheFavorite,
        pictureFavoritsList,
        fillterFavoritsPicture,
        basket,
        addToBasket,
        removeFromBacket,
        emptyBasketAfterOrder
        }}>
            {props.children}
        </DataBase.Provider>
    )
}


export {DataBasedProvider, DataBase}