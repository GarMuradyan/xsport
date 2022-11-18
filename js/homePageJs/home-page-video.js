function renderMainVideo() {
    let mianVideoBox = el('div','main_video-box')
    let videoContentBox = el('video','video_content-box')
    videoContentBox.setAttribute('controls',true)
    let videoNameBox = el('div','video_name-box')
    let videoName = el('span','video-name')
    videoName.textContent = valArr[0].name

    var videoSrc = '';
    if (Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(videoContentBox);
    }  else if (videoContentBox.canPlayType('application/vnd.apple.mpegurl')) {
        videoContentBox.src = videoSrc;
      }
    let mainContetBox = document.querySelector('.mian_content-box')

    videoNameBox.append(videoName)

    mianVideoBox.append(videoContentBox)
    mianVideoBox.append(videoNameBox)

    mainContetBox.append(mianVideoBox)
}

function getChanels(id) {
    const chanelsHost = 'https://x-sport-api.inorain.com'
    const chanelsRout = '/chanels?'
    let data = {}
    let header = {
        Authorization: localStorage.getItem('token'),
    }
    let params = {
      pagination: 1,
      limit:1,
      page:1,
      ID: id     
    }

    req('get',chanelsHost+chanelsRout,data,header,params,(res)=> {
        let videoContentBox = document.querySelector('.video_content-box')
        var videoSrc = res.data.message.rows[0].url
        if (Hls.isSupported()) {
          var hls = new Hls();
          hls.loadSource(videoSrc);
          hls.attachMedia(videoContentBox);
        }  else if (videoContentBox.canPlayType('application/vnd.apple.mpegurl')) {
            videoContentBox.src = videoSrc;
          }
    },(err)=> {
        console.log(err);
    })
}