import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import GalleryImages from './GalleryImages'
import GalleryIndex from './GalleryIndex'
import usePageBottom from './usePageBottomHook';



function Gallery({url}) {

    const [currentPage, setCurrentPage ] = useState(1);
    const [loading, setLoading] = useState(false)
    const [currentData, setCurrentData] = useState([]);
    const [nextPageData, setNextPageData]=useState([]);
    const [totalPgs, setTotalPgs ]= useState(0);

    const reachedBottom = usePageBottom();

    useEffect(()=>{
      if(reachedBottom && nextPageData.length===0 && currentPage!==totalPgs){
        (async () => {
          try {
            const response = await fetch(`${url}/${currentPage}`);
            const jsonData = await response.json();
            setNextPageData(jsonData.images);
          } catch (error) {
          }
      })()
        
      }
    })

    useEffect(()=>{
      (async () => {
          try {
            const response = await fetch(`${url}/length`);
            const jsonData = await response.json();
            setTotalPgs(jsonData);
          } catch (error) {
          }
      })()
  }, [])
   
    useEffect(()=>{
      if(!currentData || currentData.length === 0){
        (async () => {
          try {
            setLoading(true)
            const response = await fetch(`${url}/${currentPage-1}`);
            const jsonData = await response.json();
            setCurrentData(jsonData.images);
          } catch (error) {
          }finally{
            setLoading(false)
          }
      })()
      }
        
    }, [currentPage])


    const handleNextPageClick = () =>{
        setCurrentData(nextPageData);
        setNextPageData([]);
        setCurrentPage((currentPage)=>currentPage+1)
    }

    const handlePrevPageClick = () =>{
        setCurrentData([]);
        setNextPageData([]);
        setCurrentPage((currentPage)=>currentPage-1)
    }

    const handleNumPageClick =(num)=>{
      setCurrentData([]);
      setNextPageData([])
      setCurrentPage(num)
    }

   


  if(loading){
    return (
      <>
        <h1>loading...</h1>
       <GalleryIndex 
      pages={totalPgs} 
      currentPage={currentPage} 
      onNextClick={handleNextPageClick}
      onPrevClick={handlePrevPageClick}
      onNumClick={handleNumPageClick}
      />
      </>
    
     
    )
  }else
  return (
    <Box sx={{height:"100%", }} data-testid="gallery">
        
        <GalleryImages columns ={4} itemData = {currentData}/>
        <GalleryIndex 
        pages={totalPgs} 
        currentPage={currentPage} 
        onNextClick={handleNextPageClick}
        onPrevClick={handlePrevPageClick}
        onNumClick={handleNumPageClick}
        />
        
    </Box>
  )
}

export default Gallery