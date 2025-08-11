export const virtualPerformanceCode = `// 🌐 真實API資料 + 虛擬滾動效能實證

// ❌ 傳統渲染方式 - 效能災難
const renderAllItems = async () => {
  const response = await fetch('/api/posts') // 10,000筆資料
  const data = await response.json()
  
  // 直接渲染所有10,000個DOM元素
  const html = data.map(item => createDOM(item)).join('')
  document.innerHTML = html // 💥 瀏覽器凍結、記憶體爆炸
}

// ✅ 虛擬滾動方式 - 高效能解決方案  
const virtualScrolling = async () => {
  const response = await fetch('/api/posts') // 同樣10,000筆資料
  const data = await response.json()
  
  // 只渲染可見範圍的8-12個元素
  items.value = data // 🚀 流暢滾動、低記憶體使用
}

// 📊 真實效能對比 (10,000筆API資料)：
// ==========================================
// 傳統渲染：
//   - DOM節點：10,000個 (全部渲染)
//   - 記憶體使用：~800MB
//   - 初始渲染時間：8-15秒
//   - 滾動FPS：5-10 (嚴重卡頓)
//   - 瀏覽器狀態：經常無響應
//
// 虛擬滾動：
//   - DOM節點：~10個 (只渲染可見部分)  
//   - 記憶體使用：~50MB
//   - 初始渲染時間：200-500ms
//   - 滾動FPS：60 (絲滑流暢)
//   - 瀏覽器狀態：完全響應

// 💡 實際應用場景：
// - 📧 電子郵件列表 (Gmail, Outlook)
// - 📱 社交媒體動態 (Facebook, Twitter)
// - 📊 數據表格 (Excel Web, Google Sheets)  
// - 🛒 商品列表 (Amazon, 電商平台)
// - 📁 文件管理 (Google Drive, Dropbox)`
