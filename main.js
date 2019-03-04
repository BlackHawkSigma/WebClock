let lastTimestamp = new Date()

requestAnimationFrame(clock)

function clock(timestamp) {
  let now = new Date()
  let delta = now - lastTimestamp

  if (delta > 1 * 1000) {
    lastTimestamp = now
    let timeOffset = now.getTimezoneOffset() * 60
    let dateValue = now.valueOf() / 1000

    let epoch = Math.floor(dateValue)
    let excelDate = ((dateValue - timeOffset) / 86400) + 25569

    document.getElementById('clock').innerText = epoch
    document.getElementById('excel').innerHTML = excelDate.toLocaleString('de-DE', { minimumFractionDigits: 5, maximumFractionDigits: 5 })
    document.getElementById('human').innerHTML = now.toLocaleString('de-DE')
  }

  requestAnimationFrame(clock)
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
}
