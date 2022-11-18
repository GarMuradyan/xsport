window.onload=()=>{

    showLoading()
    let parentBox = el('div','parent-box')

    document.body.append(parentBox)
    renderHeaderBox()

    getUsers()
    getCategories()
    getFavorites()
}
