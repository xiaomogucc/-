function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleString('zh-CN', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  });
  document.getElementById('current-time').textContent = `🕒 当前时间：${timeString}`;
}

setInterval(updateTime, 1000);
updateTime();
