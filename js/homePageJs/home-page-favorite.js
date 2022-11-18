function postFavorites(val) {
    const favoritesHost = 'https://x-sport-api.inorain.com'
    const favoritesRout = '/favorites'
    let data = {
        chanelId:1
    }
    let params = {}
    let header = {
        Authorization: localStorage.getItem('token'),
    }
    req('post',favoritesHost+favoritesRout,data,header,params,(res)=> {
        //console.log(res);
    },(err)=> {
        console.log(err);
    })
    renderCategFavBox(val)
}
function getFavorites() {
    const favoritesHost = 'https://x-sport-api.inorain.com'
    const favoritesRout = '/favorites'
    let data = {
    }
    let params = {}
    let header = {
        Authorization: localStorage.getItem('token'),
    }
    req('get',favoritesHost+favoritesRout,data,header,params,(res)=> {
        console.log(res);
    },(err)=> {
        console.log(err);
    })
}

let index = 0

function renderCategFavBox(val) {
    index++
    let favCategContentBox = document.querySelector('.fav-categ-content-box')
    let favCategContentChanelsBox = el('div','fav_categ-content-chanels-box')
    favCategContentChanelsBox.classList.add('active')
    let favChanelsLogoBox = el('img','fav_chanels-logo-box')
    favChanelsLogoBox.src = val.logo
    let favChanelsNameBox = el('span','fav_chanels-name-box')
    favChanelsNameBox.textContent = val.name
    let favChanelsIconBox = el('span','material-symbols-outlined')
    favChanelsIconBox.textContent = 'favorite'

    favCategContentChanelsBox.append(favChanelsLogoBox)
    favCategContentChanelsBox.append(favChanelsNameBox)
    favCategContentChanelsBox.append(favChanelsIconBox)

    favCategContentBox.append(favCategContentChanelsBox)
}