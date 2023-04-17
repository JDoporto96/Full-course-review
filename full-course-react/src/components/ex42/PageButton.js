import React from 'react'
import Button from '@mui/material/Button'
import PropTypes from 'prop-types';


function PageButton({num, isDisabled,size, onNumClick}) {
  return (
    <Button size ={`${size}`} disabled={isDisabled} onClick={()=>onNumClick(num)}>
      {num}
    </Button>
  )
}

PageButton.propTypes={
    num: PropTypes.number.isRequired,
    isDisabled:  PropTypes.bool,
    size: PropTypes.string
}

export default PageButton