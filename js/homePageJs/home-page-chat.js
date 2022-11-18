function renderMainChatAndSimiliarchanels() {
    let mainChatAndSimiliarChanelsBox = el('div','main_chat-and-similiar-chanels-box')
    let mainChatBox = el('div','main_chat-box')
    mainChatBox.style.height = '499px'
    let chatTitleBox = el('div','chat_title-box')
    chatTitleBox.textContent = 'CLOSED CHAT'
    chatTitleBox.onclick = ()=> {
        chatHeight(mainChatBox)
    }
    let chatContentBox = el('div','chat_content-box')
    let contentMessageBox = el('div','content-message-box')
    let chatInputBox = el('div','chat_input-box')
    let chatInput = el('textarea','chat-input')
    let chatInputLineBox = el('div','chat-input-line-box')
    let chatInputIcon = el('span','material-symbols-outlined')
    chatInputIcon.textContent = 'send'

    let mainContetBox = document.querySelector('.mian_content-box')
    chatInputBox.append(chatInput)
    chatInputBox.append(chatInputLineBox)
    chatInputBox.append(chatInputIcon)

    chatContentBox.append(contentMessageBox)

    mainChatBox.append(chatTitleBox)
    mainChatBox.append(chatContentBox)
    mainChatBox.append(chatInputBox)

    mainChatAndSimiliarChanelsBox.append(mainChatBox)
    mainContetBox.append(mainChatAndSimiliarChanelsBox)
    renderMainChatContent(chatInput,contentMessageBox,chatInputIcon)
    getSimiliarChannels()
}

function chatHeight(mainChatBox) {
    if (mainChatBox.style.height === '499px') {
        mainChatBox.style.height = '20px'
    }else {
        mainChatBox.style.height = '499px'
    }
}

function renderMainChatContent(input,contentMessageBox,chatInputIcon) {
    renderChatContentInKey(input,contentMessageBox,chatInputIcon)
    renderChatContentInClick(input,contentMessageBox,chatInputIcon)

}

function renderChatContentInClick(input,contentMessageBox,chatInputIcon) {
    chatInputIcon.addEventListener('click',(e)=> {
        if (input.value.trim()) {
            let objectDate = new Date()
            let chatContentMessageBox = el('div','chat-content-message-box')
            let messageBox = el('p','message-box')
            messageBox.textContent = input.value
            let messageHours = el('span','message-hours')
            messageHours.style.fontSize = '14px'
            if (objectDate.getMinutes() < 10) {
                let time = objectDate.getHours() + ':'+ 0 + objectDate.getMinutes()
                messageHours.textContent = time
            }else {
                let time = objectDate.getHours() + ':'+ objectDate.getMinutes()
                messageHours.textContent = time
            }

            chatContentMessageBox.append(messageBox)
            chatContentMessageBox.append(messageHours)
            contentMessageBox.append(chatContentMessageBox)
            input.value = ''
        }
    })
}

function renderChatContentInKey(input,contentMessageBox,chatInputIcon) {
    input.addEventListener('keydown',(e)=> {
        if (input.value.trim() && e.code === 'Enter') {
            let objectDate = new Date()
            let chatContentMessageBox = el('div','chat-content-message-box')
            let messageBox = el('p','message-box')
            messageBox.textContent = input.value
            let messageHours = el('span','message-hours')
            messageHours.style.fontSize = '14px'
            if (objectDate.getMinutes() < 10) {
                let time = objectDate.getHours() + ':'+ 0 + objectDate.getMinutes()
                messageHours.textContent = time
            }else {
                let time = objectDate.getHours() + ':'+ objectDate.getMinutes()
                messageHours.textContent = time
            }

            chatContentMessageBox.append(messageBox)
            chatContentMessageBox.append(messageHours)
            contentMessageBox.append(chatContentMessageBox)
            input.value = ''
        }
    })
}


function getSimiliarChannels(id) {
    const similiarHost = 'https://x-sport-api.inorain.com'
    const similiarRout = '/chanels/similars'
    let data = {}
    let header = {
        Authorization: localStorage.getItem('token'),
    }
    if (id) {
        let params = {
            id: id     
        }
        req('get',similiarHost+similiarRout,data,header,params,(res)=>{
            renderSimilarsChanels(res.data.message)
        },(err)=> {
            console.log(err);
        })
    }
    else{
        let params = {
            id : 1
        }
        req('get',similiarHost+similiarRout,data,header,params,(res)=>{
            renderSimilarsChanels(res.data.message)
            hideLoading()
        },(err)=> {
            console.log(err);
        })
    }
}

function renderSimilarsChanels(message) {
    let mainSimilarBox = el('div','main_similar-box')
    let similarChanelsBox = el('div','similar_chanels-box')
    let similarTitleBox = el('div','similar_title-box')
    similarTitleBox.textContent = 'Similar Chanels'
    if (message) {
        message.forEach(val => {
            let similarChanelsContentBox = el('div','similar_chanels-content-box')
            similarChanelsBox.onclick = ()=> {
                let videoNameBox = document.querySelector('.video-name')
                videoNameBox.textContent = val.name
                let videoContentBox = document.querySelector('.video_content-box')
                var videoSrc = val.url
                if (Hls.isSupported()) {
                    var hls = new Hls();
                    hls.loadSource(videoSrc);
                    hls.attachMedia(videoContentBox);
                  }  else if (videoContentBox.canPlayType('application/vnd.apple.mpegurl')) {
                      videoContentBox.src = videoSrc;
                    }
            }
            let similarContentLogoBox = el('div','similar_content-logo-box')
            let similarContentLogo = el('img','similar_content-logo')
            similarContentLogo.src = val.logo
            let similarContentName = el('span','similar_content-name')
            similarContentName.textContent = val.name
            similarContentLogoBox.append(similarContentLogo)
    
            similarChanelsContentBox.append(similarContentLogoBox)
            similarChanelsContentBox.append(similarContentName)
            similarChanelsBox.append(similarChanelsContentBox)  

        });
    }
    mainSimilarBox.append(similarTitleBox)
    mainSimilarBox.append(similarChanelsBox)
    document.querySelector('.main_chat-and-similiar-chanels-box').append(mainSimilarBox)
}