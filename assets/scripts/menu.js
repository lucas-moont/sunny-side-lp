let hamburgBtn = document.querySelector('#hamburgMenuBtn')
let menuOpened = false
let mobileMenuNav = document.querySelector('.mobileMenuNavigation')
let mobileMenuNavLinks = mobileMenuNav.querySelectorAll('a')
let arrowDown = document.querySelector('.arrowDown')


hamburgBtn.addEventListener('click', (event => {
    if(menuOpened === false){
        hamburgBtn.innerHTML = 'X'
        menuOpened = true
        mobileMenuNav.style.opacity = '1'
        mobileMenuNav.style.transform = 'translateY(0)'
        arrowDown.style.opacity = '0'

        mobileMenuNavLinks.forEach(item => {
            item.style.pointerEvents = 'all'
        })
    }else{
        hamburgBtn.innerHTML = '<img src="images/icon-hamburger.svg" alt="">'
        menuOpened = false
        mobileMenuNav.style.opacity = '0'
        mobileMenuNav.style.transform = 'translateY(-8px)'
        arrowDown.style.opacity = '1'

        mobileMenuNavLinks.forEach(item => {
            item.style.pointerEvents = 'none'
        })
    }
}))