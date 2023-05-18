import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

type Image = {
  src: string;
  width: number;
  height: number;
};

type Props={
  columns: number,
  itemData: Array<Image>
  
}

function srcset(image: string, size: number, rows=1, cols=1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function GalleryImages({columns, itemData}:Props) {
  return (
    <ImageList sx={{ width: "100%", height: "100%"}} variant="quilted" cols={columns} >
      {itemData.map((item) => {
        const itemCols = item.width >= 2 * item.height ? 2 : 1 ;
        const itemRows = item.height >= 2 * item.width ? 2 : 1 ;
        
        return(
        <ImageListItem key={item.src} cols={itemCols || 1} rows={itemRows || 1}>
          <img
            {...srcset(item.src, item.height, itemRows, itemCols )}
            alt=""
            loading="lazy"
          />
        </ImageListItem>
      )}
      )}
    </ImageList>
  );
}



