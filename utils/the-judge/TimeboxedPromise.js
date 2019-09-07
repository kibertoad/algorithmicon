class TimeboxedPromise {
  constructor(promise, timeoutInMsecs, timeoutMessage = 'Promise timed out') {
    let timeout
    return new Promise((resolve, reject) => {
      timeout = setTimeout(() => {
        reject(timeoutMessage)
      }, timeoutInMsecs)
      promise
        .then((result) => {
          clearTimeout(timeout)
          resolve(result)
        })
        .catch((err) => {
          clearTimeout(timeout)
          reject(err)
        })
    })
  }
}

module.exports = {
  TimeboxedPromise
}
