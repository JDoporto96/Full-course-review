import React from 'react'
import Button from '@mui/material/Button'


type Props={
  num: number,
  isDisabled:  boolean,
  size: string
  onNumClick: any
}

function PageButton({num, isDisabled,size, onNumClick}:Props) {
  return (
    <Button size ={`${size}`} disabled={isDisabled} onClick={()=>onNumClick(num)}>
      {num}
    </Button>
  )
}


export default PageButton