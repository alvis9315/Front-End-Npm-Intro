export const toastAdvancedCode = `// 🎨 自訂通知 - 防止誤觸拖曳
toast('自訂通知內容', {
  timeout: 5000,              // 5秒後自動關閉
  position: 'top-left',       // 左上角顯示
  draggable: false,           // 禁用拖曳避免誤觸
  showCloseButtonOnHover: true, // 懸停顯示關閉按鈕
  pauseOnHover: true          // 懸停時暫停計時
})

// 📌 持久通知 - 手動關閉
toast.info('重要通知', {
  timeout: false,             // 永不自動消失
  position: 'top-center',     // 中上方顯示
  closeButton: 'button',      // 顯示關閉按鈕
  draggable: false            // 禁用拖曳
})

// ⚡ 可操作通知 - 點擊觸發
toast.warning('確認操作？', {
  timeout: 10000,             // 10秒長時間顯示
  position: 'top-right',      // 右上角顯示
  closeButton: false,         // 隱藏關閉按鈕
  onClick: () => {            // 點擊通知觸發操作
    toast.success('操作已確認')
  }
})`
