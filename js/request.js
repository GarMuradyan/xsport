function request(data, route) {
    axios.post(host + route, data, { 'Content-type': 'application/x-www-form-urlencoded' })
        .then((res) => {
            localStorage.setItem('token', res.data.message.message)
            window.location.href = "../home.html"
            console.log(res);

        }).catch((res) => {
            console.log(err);
            let reqCatchError = document.querySelector('.req-catch-error')
            if (reqCatchError) {
                reqCatchError.textContent = res.response.data.message

                setTimeout(function () {
                    reqCatchError.textContent = ''
                }, 4000)
            } else {
                false
            }
        })
}


function req(method,url,body,header,params,callBack,errorCallBack) {
    if (method === 'get') {
        body = {}
    }
    if (method === 'post') {
        params = {}
    }
     axios({
        method, 
        url,
        data:body,
        headers: header,
        params: params,
    
    })
    .then(function (response) {
        callBack(response)
    })
    .catch(function (error) {
        errorCallBack(error)
    });
}

