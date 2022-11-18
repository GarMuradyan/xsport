function  getUsers(){
const getmeHost = 'https://x-sport-api.inorain.com'
const getmeRout = '/users/me'
let data = {}
let header = {
    Authorization: localStorage.getItem('token'),
}
let params = {}

req('get',getmeHost+getmeRout,data,header,params,(res)=> {
    renderHeaderBox(res.data.message)
},(err)=> {
    console.log(err);
})

}

function renderHeaderBox(message) {
    if (message) {
        let header = el('header')
        let navbar = el('nav')
        navbar.classList.add('container')
        let navbarLogoBox = el('div','navabr_logo-box')
        let logoBox = el('img','logo-box')
        logoBox.src = 'http://x-sport-web.inorain.com/assets/images/headerLogo.png'
        let navbarSearchbox = el('div','navbar_search-box')
        let searchInput = el('input','search-input')
        let searchIconBox = el('div','search-icon-box')
        let searchIcon = el('span','material-symbols-outlined')
        searchIcon.textContent = 'search'
        let navbarUsernameAndLogoutBox = el('div','navbar_username-and-logout-box')
        let navbarUsernameBox = el('span','navbar_username-box')
        navbarUsernameBox.textContent = message.username
        let navbarLineBox = el('div','navbar_line-box')
        let navbarLogoutBox = el('span','navbar_logout-box')
        navbarLogoutBox.textContent = 'Logout'
    
        navbarLogoBox.append(logoBox)
    
        searchIconBox.append(searchIcon)
    
        navbarUsernameAndLogoutBox.append(navbarUsernameBox)
        navbarUsernameAndLogoutBox.append(navbarLineBox)
        navbarUsernameAndLogoutBox.append(navbarLogoutBox)
    
        navbarSearchbox.append(searchInput)
        navbarSearchbox.append(searchIconBox)
    
        navbar.append(navbarLogoBox)
        navbar.append(navbarSearchbox)
        navbar.append(navbarUsernameAndLogoutBox)
    
        header.append(navbar)
        let parentBox = document.querySelector('.parent-box')
        parentBox.append(header)
    }else {
        let header = el('header')
        let navbar = el('nav')
        navbar.classList.add('container')
        let navbarLogoBox = el('div','navabr_logo-box')
        let logoBox = el('img','logo-box')
        logoBox.src = 'http://x-sport-web.inorain.com/assets/images/headerLogo.png'
        let navbarSearchbox = el('div','navbar_search-box')
        let searchInput = el('input','search-input')
        let searchIconBox = el('div','search-icon-box')
        let searchIcon = el('span','material-symbols-outlined')
        searchIcon.textContent = 'search'
        let navbarUsernameAndLogoutBox = el('div','navbar_username-and-logout-box')
        let navbarUsernameBox = el('span','navbar_username-box')
        navbarUsernameBox.textContent = ''
        let navbarLineBox = el('div','navbar_line-box')
        let navbarLogoutBox = el('span','navbar_logout-box')
        navbarLogoutBox.textContent = 'Logout'
    
        navbarLogoBox.append(logoBox)
    
        searchIconBox.append(searchIcon)
    
        navbarUsernameAndLogoutBox.append(navbarUsernameBox)
        navbarUsernameAndLogoutBox.append(navbarLineBox)
        navbarUsernameAndLogoutBox.append(navbarLogoutBox)
    
        navbarSearchbox.append(searchInput)
        navbarSearchbox.append(searchIconBox)
    
        navbar.append(navbarLogoBox)
        navbar.append(navbarSearchbox)
        navbar.append(navbarUsernameAndLogoutBox)
    
        header.append(navbar)
        let parentBox = document.querySelector('.parent-box')
        parentBox.append(header)
    }
}

function getCategories() {
const categHost = 'https://x-sport-api.inorain.com'
const categRout = '/categories'
let data = {}
let header = {
    Authorization: localStorage.getItem('token'),
}
let params = {}
req('get',categHost+categRout,data,header,params,(res)=> {
    renderMain(res.data.message)
},(err)=> {
    console.log(err);
})
}

function renderMain(message) {
    let main = el('main')
    let mainContetBox = el('div','mian_content-box')
    mainContetBox.classList.add('container')

    let parentBox = document.querySelector('.parent-box')

    main.append(mainContetBox)
    parentBox.append(main)

    renderMainFirstCategories()
    renderMainCategories(message)
    renderMainVideo()
    renderMainChatAndSimiliarchanels()
}

function renderMainFirstCategories () {
    let mainContentCategoriesBox = el('div','main_content-categ-box')
    let favCategBox = el('div','fav-categ-box')
    let favCategNameAndIconBox = el('div','fav-categ-name-and-icon-box')
    let favCategName = el('span','fav-categ-name')
    favCategName.textContent = 'Favorites'
    let favCategIcon = el('span','material-symbols-outlined')
    favCategIcon.textContent = 'arrow_drop_down'
    let favCategContentBox = el('div','fav-categ-content-box')
    let favCategContentText = el('div','fav-categ-content-text')
    favCategContentText.textContent = 'No data'
    favCategNameAndIconBox.onclick = ()=> {
        let favCategContentChanelsBox = document.querySelectorAll('.fav_categ-content-chanels-box')
        if (favCategContentBox.style.height === '0px') {
            if (favCategContentText.style.display !== 'none') {
                favCategContentBox.style.height = '49px'
            }else {
                favCategContentBox.style.height = favCategContentChanelsBox.length * 49 + 'px'
            }
        }else {
            favCategContentBox.style.height = '0px'
        }
    }

    let mainContetBox = document.querySelector('.mian_content-box')

    favCategNameAndIconBox.append(favCategName)
    favCategNameAndIconBox.append(favCategIcon)

    favCategContentBox.append(favCategContentText)

    favCategBox.append(favCategNameAndIconBox)
    favCategBox.append(favCategContentBox)

    mainContentCategoriesBox.append(favCategBox)

    mainContetBox.append(mainContentCategoriesBox)
}

function renderMainCategories(message) {
    let mainContentCategoriesBox = document.querySelector('.main_content-categ-box')
    message.forEach(val => {
        let categBox = el('div','categ-box')
        let categNameAndIconBox = el('div','categ-name-and-icon-box')
        let categName = el('span','categ-name')
        categName.textContent = val.name
        let ctaegIcon = el('span','material-symbols-outlined')
        ctaegIcon.textContent = 'arrow_drop_down'
        let categContentBox = el('div','categ-content-box')
        categContentBox.setAttribute('heightt',val.chanels.length * 46 + 'px')
        categContentBox.style.height = '0px'
        categContentBox.style.overflow = 'hidden'
        categNameAndIconBox.addEventListener('click',()=>{
            //removeHeight()
            if (categContentBox.style.height === '0px') {
                categContentBox.style.height = val.chanels.length * 46 +'px'
            }else {
                categContentBox.style.height = '0px'
            }
        })
        categNameAndIconBox.append(categName)
        categNameAndIconBox.append(ctaegIcon)
        categBox.append(categNameAndIconBox)
        categBox.append(categContentBox)
        mainContentCategoriesBox.append(categBox)
        renderMainCategoriesContent(val,categContentBox)
    });
    firstCategHeight()
}
var valArr = []

function firstCategHeight() {
    let categContentBox = document.querySelectorAll('.categ-content-box')
    categContentBox[1].style.height = categContentBox[1].getAttribute('heightt')
}

function removeHeight() {
    let categContentBox = document.querySelectorAll('.categ-content-box')
    for (let i = 0; i < categContentBox.length; i++) {
        if (categContentBox[i].style.height !== '0px') {
        categContentBox[i].style.height = '0px'     
        }
    }
}

function renderMainCategoriesContent(val,categContentBox) {
    val.chanels.forEach(val => {
        valArr.push(val)
        let categContentChanelsBox = el('div','categ-content-chanels-box')
        categContentChanelsBox.setAttribute('id',val.id)
        categContentChanelsBox.onclick = ()=> {
            let similarChanelsBox = document.querySelectorAll('.main_similar-box')
            for (let i = 0; i < similarChanelsBox.length; i++) {
                similarChanelsBox[i].innerHTML = ''
            }
            getChanels(categContentChanelsBox.getAttribute('id'))
            getSimiliarChannels(categContentChanelsBox.getAttribute('id'))
            let videoNameBox = document.querySelector('.video-name')
            videoNameBox.textContent = val.name
            hiddeActive()

            categContentChanelsBox.classList.add('active')
        }
        let chanelsLogoBox = el('img','chanels-logo-box')
        chanelsLogoBox.src = val.logo 
        let chanelsNameBox = el('span','chanels-name-box')
        chanelsNameBox.textContent = val.name
        let chanelsIconBox = el('span','material-symbols-outlined')
        chanelsIconBox.textContent = 'favorite'
        chanelsIconBox.onclick = ()=> {
            let favCategContentText = document.querySelector('.fav-categ-content-text')
            favCategContentText.style.display = 'none'
            postFavorites(val)
            chanelsIconBox.style.color = 'red'
        }

        categContentChanelsBox.append(chanelsLogoBox)
        categContentChanelsBox.append(chanelsNameBox)
        categContentChanelsBox.append(chanelsIconBox)
        categContentBox.append(categContentChanelsBox)
    });

}

function hiddeActive() {
    let categContentChanelsBox = document.querySelectorAll('.categ-content-chanels-box')
    for (let i = 0; i < categContentChanelsBox.length; i++) {
        categContentChanelsBox[i].classList.remove('active')
    }
}

function showLoading() {
    let loadigParentBox = el('div','loading_parent-box')
    let loadingText = el('div','loadng-text')
    let loadingBox = el('div','loading-box')
    let loadingBoxContent = el('div','loading-box-content')
    loadingBox.append(loadingBoxContent)
    loadigParentBox.append(loadingText)
    loadigParentBox.append(loadingBox)
    document.body.append(loadigParentBox)
}

function hideLoading() {
    let loadigParentBox = document.querySelector('.loading_parent-box')
    loadigParentBox.style.display = 'none'
}