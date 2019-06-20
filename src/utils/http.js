
export function postJSON(url,data) {
  mpvue.showLoading({title: '加载中'})

  return new Promise((resolve,reject) => {
      mpvue.request({
          url: config.api_base_url + url,
          method: 'POST',
          data,
          header: {
              'content-type': 'application/json',
          },
          success: (res) => {
              const code = res.statusCode.toString();
              if (code.startsWith('2')) {
                  mpvue.hideLoading()
                  resolve(res.data)
              }
              else {
                  mpvue.hideLoading()
                  reject(res)
              }
          },
          fail: (err) => {
              mpvue.hideLoading()
              reject(err);
          }
      })
  })

}