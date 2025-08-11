
# Front-End-Npm-Intro 技術分享 Demo

本專案展示多種 Vue 3 前端元件與 NPM 套件，並與現有 RDSS 架構兼容。
專案結構清晰，僅追蹤實際 coding 相關檔案，其他皆已納入 .gitignore。

## 📁 專案結構

- `src/`：所有元件與程式碼
  - `App.vue`、`main.js`：入口檔案
  - `code-snippets/`：各類功能範例
    - `banner/`、`marquee/`、`motion/`、`toast/`、`vertical-carousel/`、`virtual-scroll/`
- `components/`：可擴充元件
- `index.html`、`vite.config.js`、`package.json`：專案設定
- `.gitignore`：僅保留 coding 相關檔案，忽略 node_modules、dist、auto-imports.d.ts、components.d.ts、package-lock.json 等

## 🚀 快速開始

```powershell
npm install
npm run dev
```
預設 http://localhost:3001

## 🧩 功能展示

- 🎭 動畫效果（VueUse Motion）
  - 基礎進場、滾動觸發、Hover 互動、文字動畫
- 📢 通知系統（Vue Toastification）
  - 成功、錯誤、警告、資訊通知，進階自訂
- 📜 虛擬滾動（Vue Virtual Scroller）
  - 10,000 筆資料效能對比，原生/套件版本
- 🎠 跑馬燈/輪播（原生、vue3-marquee、vue3-carousel）
  - 水平跑馬燈、垂直新聞輪播、橫向Banner輪播

## 🏗️ 技術架構

- Vue 3 + Composition API
- Vite
- Naive UI
- VueUse Motion
- Vue Toastification
- Vue Virtual Scroller
- vue3-marquee
- vue3-carousel
- unplugin-auto-import / unplugin-vue-components

## 📝 注意事項

- 僅追蹤 src/、設定檔與 README，其他檔案皆已忽略
- 建議漸進式導入新功能，並監控效能與用戶反饋

---

本 Demo 僅展示實際用到的功能與技術，未用到的套件不會出現在本說明。

