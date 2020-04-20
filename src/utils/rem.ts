const remUnit = 32

// 设置 rem 函数
function setRem () {
  // 当前页面宽度相对于 750px 宽的缩放比例
  const scale = document.documentElement.clientWidth / 750

  // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
  document.documentElement.style.fontSize = remUnit * scale + 'px'
}

// 改变窗口大小时重新设置 rem
window.addEventListener('resize', setRem)

setRem()
