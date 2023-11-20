const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

function secondTOHms(data) {
  data /= 1000

  let hour = 0

  let second = (data % 60).toFixed(0).padStart(2, '0')

  let minute = Math.floor(data /= 60)

  if (60 <= minute) {
    hour = (data / 60).toFixed(0).padStart(2, '0')

    minute = minute % 60
  }

  minute = minute.toFixed(0).padStart(2, '0')

  return 0 === hour ? `${minute}:${second}` : `${hour}:${minute}:${second}`
}

function hmsTOSecond(data) {
  let arr = data.split(':'),
    res = 0

  arr.forEach((item, index) => {
    if (index === arr.length - 1) {
      res += parseFloat(item)
    } else {
      res += parseFloat(parseFloat(item) * 60)
    }
  })

  return res
}

module.exports = {
  formatTime,
  secondTOHms,
  hmsTOSecond
}