// var fs = require('fs');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

const maxPixels= 1040;
const minPixels = 300;
const minImgOnPage =16;
const maxImgOnPage =20;

const createImg = ()=>{
    const width = getRandomIntInclusive(minPixels, maxPixels);
    const height = getRandomIntInclusive(minPixels, maxPixels);
    return ({
        src:`https://picsum.photos/${width}/${height}`,
        width,
        height
    })
};

const createPage = ()=>{
    const images = [];
    const nmbrOfImgs = getRandomIntInclusive(minImgOnPage, maxImgOnPage);
    for(let i=0; i<nmbrOfImgs; i++){
        images.push(createImg());
    }

   return {
        images
    }


}

const createGallery = (pages)=>{
    const gallery = [];
    const galleryId=Date.now();
    for(let i=0; i< pages; i++){
        const page = createPage();
        page.id = galleryId+`-${i+1}`;
        page.page = i+1;
        page.total = pages;

        gallery.push(page);
    }
    return gallery
    
}

const galleryData = (createGallery(10));
// const json = JSON.stringify(galleryData);
// console.log(json)
// fs.writeFile('dataFile.json', `${json}`, function(err) {
//     if (err) throw err;
//     console.log('complete');
//     }
// );

module.exports ={createGallery, createImg, createPage, galleryData};




