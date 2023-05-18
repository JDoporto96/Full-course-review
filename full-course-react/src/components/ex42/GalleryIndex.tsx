import React from 'react'
import { Stack } from '@mui/system';
import PageButton from './PageButton.tsx';
import { Button } from '@mui/material';

type Props = {
  pages: number;
  currentPage: number;
  onNumClick?: (
    ev: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    pageNum: number
  ) => void;
  onPrevClick?: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onNextClick?: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};




function GalleryIndex({pages, currentPage, onNextClick, onPrevClick,onNumClick}:Props) {
    const pagesArr = Array.from(
        {length: pages},
        (_, index) => index + 1
      );
   
    const indexAtEnd = currentPage ===pagesArr.at(-1);
    const indexAtStart= currentPage ===pagesArr[0];

    return (
      <Stack direction="row" spacing={0} maxWidth="100%" sx={{display:"flex", justifyContent:"center"}}>
        <Button data-testid= {"prevButton"} disabled ={indexAtStart} onClick={onPrevClick}>
          prev
        </Button>
        <Stack direction="row" spacing={0}>
          {pagesArr.map(num =>{
            return (
              <PageButton 
              data-testid={`pageBtn${num}`}
              key={num}
              num={num} 
              size={"small"}
              isDisabled={currentPage===num}
              onNumClick={onNumClick}
              />
            )
          })}
        </Stack>
        <Button data-testid= "nextButton" disabled = {indexAtEnd} onClick={onNextClick}>
        next
        </Button>
      </Stack>
  )
}



export default GalleryIndex