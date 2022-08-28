/**
 * @param ms 待機する秒を指定
 * @returns {Promise}
 */
export const sleep = (ms: number) => new Promise(res => setTimeout(res, ms))

//@ts-check
/**
 * Computes the time taken to execute a promise.
 * The result is printed to the console and returned when the promise is resolved.
 *
 * @example
 * // prints to console.
 * timeIt()
 * @param {Promise<unknown>} promise
 * @returns {Promise<number>}
 */
export const timeIt = (promise: Promise<unknown>): Promise<number> =>
  new Promise(resolve => {
    const startTime = Date.now()
    Promise.resolve(promise).finally(() => {
      const endTime = Date.now()
      const timeTaken = endTime - startTime
      const timeTakenInSeconds = timeTaken / 1000
      console.log(`Finished in: ${timeTakenInSeconds} seconds;`)
      resolve(timeTaken)
    })
  })

/**
 * @param {EventTarget} eventTarget
 * @param {string} eventName
 */
export const eventPromisify = (eventTarget: EventTarget, eventName: string) => {
  return new Promise(resolve => {
    eventTarget.addEventListener(eventName, (...args) => resolve(...args))
  })
}

/**
 *
 * @param {Long} timestamp
 * @returns
 */
export function jstDate(timestamp = Date.now()) {
  return new Date(timestamp + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000)
}
/**
 *
 * @param {Date} date - 日付型
 * @param {String} format - フォーマット形式
 * @returns
 */
export function formatDate(date: Date, format: string) {
  format = format.replace(/yyyy/g, date.getFullYear().toString())
  format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2))
  format = format.replace(/dd/g, ('0' + date.getDate()).slice(-2))
  format = format.replace(/HH/g, ('0' + date.getHours()).slice(-2))
  format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2))
  format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2))
  format = format.replace(/SSS/g, ('00' + date.getMilliseconds()).slice(-3))
  return format
}

/**
 * 中央値を求める。偶数時は何もしない
 * @param numbers
 * @returns
 */
export const median = (numbers: number[]) => {
  const half = (numbers.length / 2) | 0
  const arr = numbers.sort((a, b) => {
    return a - b
  })

  if (arr.length % 2) {
    return arr[half]
  }
  return 1
}
