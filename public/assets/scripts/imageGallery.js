let imageGalleryImgs = document.querySelectorAll('#imageGallery img')

imageGalleryImgs.forEach(item => {
    console.log(item)
})


if(screen.width <= 764){
    imageGalleryImgs.forEach((item, index) => {
        switch (index){
            case 0:
                item.src = '../../images/mobile/image-gallery-milkbottles.jpg'
            break
            case 1:
                item.src = '../../images/mobile/image-gallery-orange.jpg'
                break
            case 2:
                item.src = '../../images/mobile/image-gallery-cone.jpg'
                break
            case 3:
                item.src = '../../images/mobile/image-gallery-sugar-cubes.jpg'
                break
        }
    })
}