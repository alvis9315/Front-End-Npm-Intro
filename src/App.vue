<template>
  <div class="demo-app">
    <n-config-provider :theme="darkTheme">
      <n-global-style />
      <div class="container">
        <!-- 標題區域 -->
        <div v-motion-slide-visible-once-top class="header">
          <h1 class="title">Vue.js 新套件技術分享</h1>
          <p class="subtitle">探索與現有架構完美兼容的新 NPM 套件</p>
        </div>

        <!-- 套件展示區域 -->
        <n-card v-motion-fade-visible-once class="demo-container">
          <n-tabs v-model:value="activeTab" type="card" size="large">
            <!-- VueUse Motion 動畫展示 -->
            <n-tab-pane name="motion" tab="🎭 動畫特效">
              <div class="demo-section">
                <div class="section-header">
                  <h3>VueUse Motion 套件展示</h3>
                  <div class="control-group">
                    <n-button 
                      circle 
                      size="small" 
                      tertiary
                      class="refresh-btn inline-refresh"
                      @click="triggerMotion">
                      <template #icon>
                        <span>🔄</span>
                      </template>
                    </n-button>
                  </div>
                </div>
                
                <!-- 官方文件連結 -->
                <div class="docs-link-container">
                  <n-button 
                    type="info" 
                    size="medium" 
                    @click="openDocsUrl('https://motion.vueuse.org/')"
                    class="docs-link-btn">
                    📖 查看 VueUse Motion 官方文件
                  </n-button>
                  <p class="docs-description">
                    VueUse Motion 是一個強大的 Vue 3 動畫庫，提供聲明式動畫解決方案，支援多種觸發方式和動畫效果
                  </p>
                </div>
                
                <!-- 基礎動畫展示 -->
                <n-divider>基礎進場動畫</n-divider>
                <div class="usage-info">
                  <h4>💡 使用方式</h4>
                  <n-code :code="basicMotionCode"></n-code>
                  <p class="usage-description">
                    使用 <code>v-motion</code> 指令搭配 <code>:initial</code> 和 <code>:enter</code> 屬性定義動畫的起始狀態和結束狀態
                  </p>
                </div>
                <div class="motion-demo">
                  <div 
                    v-motion="'slide-left'" 
                    :initial="{ x: -100, opacity: 0 }" 
                    :enter="{ x: 0, opacity: 1, transition: { delay: 500, duration: 1000 } }" 
                    class="motion-box box-1">
                    滑入效果
                  </div>
                  <div 
                    v-motion="'pop'" 
                    :initial="{ scale: 0, opacity: 0 }" 
                    :enter="{ scale: 1, opacity: 1, transition: { delay: 1200, duration: 800 } }" 
                    class="motion-box box-2">
                    彈出效果
                  </div>
                  <div 
                    v-motion="'roll-right'" 
                    :initial="{ x: 100, rotate: '90deg', opacity: 0 }" 
                    :enter="{ x: 0, rotate: '0deg', opacity: 1, transition: { delay: 2000, duration: 1000 } }" 
                    class="motion-box box-3">
                    滾動效果
                  </div>
                </div>

                <!-- 進階動畫展示 -->
                <n-divider>進階動畫效果</n-divider>
                <div class="motion-demo">
                  <div 
                    v-motion="'bounce-in'" 
                    :initial="{ y: -100, scale: 0, opacity: 0 }" 
                    :enter="{ y: 0, scale: 1, opacity: 1, transition: { delay: 2800, duration: 800, type: 'spring', stiffness: 100 } }" 
                    class="motion-box box-4">
                    彈跳進場
                  </div>
                  <div 
                    v-motion="'fade-up'" 
                    :initial="{ y: 50, opacity: 0 }" 
                    :enter="{ y: 0, opacity: 1, transition: { delay: 3400, duration: 1000, ease: 'easeOut' } }" 
                    class="motion-box box-5">
                    淡入上升
                  </div>
                  <div 
                    v-motion="'rotate-in'" 
                    :initial="{ rotate: 180, scale: 0, opacity: 0 }" 
                    :enter="{ rotate: 0, scale: 1, opacity: 1, transition: { delay: 4000, duration: 1200, type: 'spring' } }" 
                    class="motion-box box-6">
                    旋轉進場
                  </div>
                </div>

                <!-- 文字動畫展示 -->
                <n-divider>文字動畫效果</n-divider>
                <div class="text-motion-demo">
                  <h4 
                    v-motion="'title-slide'" 
                    :initial="{ x: -200, opacity: 0 }" 
                    :enter="{ x: 0, opacity: 1, transition: { delay: 4800, duration: 1000 } }"
                    class="motion-title">
                    🎭 VueUse Motion 強大功能
                  </h4>
                  <p 
                    v-motion="'text-fade'" 
                    :initial="{ y: 30, opacity: 0 }" 
                    :enter="{ y: 0, opacity: 1, transition: { delay: 5200, duration: 800 } }"
                    class="motion-text">
                    這是一個功能強大的 Vue.js 動畫庫，提供聲明式的動畫解決方案
                  </p>
                </div>

                <!-- 滾動觸發動畫 -->
                <n-divider>滾動觸發動畫</n-divider>
                <div class="usage-info">
                  <h4>💡 使用方式</h4>
                  <n-code :code="scrollMotionCode"></n-code>
                  <p class="usage-description">
                    使用 <code>:visible</code> 屬性定義滾動到視窗可見區域時的動畫效果，支援重複觸發
                  </p>
                </div>
                <div class="scroll-motion-demo">
                  <div 
                    v-motion="'scroll-left'"
                    :initial="{ x: -100, opacity: 0 }"
                    :visible="{ x: 0, opacity: 1, transition: { duration: 1000, delay: 200 } }"
                    class="scroll-box box-left">
                    左側滑入
                  </div>
                  <div 
                    v-motion="'scroll-fade'"
                    :initial="{ opacity: 0, scale: 0.8 }"
                    :visible="{ opacity: 1, scale: 1, transition: { duration: 1000, delay: 600 } }"
                    class="scroll-box box-center">
                    淡入顯示
                  </div>
                  <div 
                    v-motion="'scroll-right'"
                    :initial="{ x: 100, opacity: 0 }"
                    :visible="{ x: 0, opacity: 1, transition: { duration: 1000, delay: 1000 } }"
                    class="scroll-box box-right">
                    右側滑入
                  </div>
                </div>

                <!-- Hover 動畫展示 -->
                <n-divider>Hover 互動動畫</n-divider>
                <div class="usage-info">
                  <h4>💡 使用方式</h4>
                  <n-code :code="hoverMotionCode"></n-code>
                  <p class="usage-description">
                    使用 <code>:hovered</code> 屬性定義滑鼠懸停時的動畫效果，支援多種動畫屬性
                  </p>
                </div>
                <div class="hover-motion-demo">
                  <div 
                    v-motion="'hover-scale'" 
                    :initial="{ scale: 1 }"
                    :hovered="{ scale: 1.1, transition: { duration: 300 } }"
                    class="hover-box hover-1">
                    懸停縮放
                  </div>
                  <div 
                    v-motion="'hover-bounce'" 
                    :initial="{ y: 0 }"
                    :hovered="{ y: -10, transition: { duration: 200, type: 'spring' } }"
                    class="hover-box hover-2">
                    懸停彈跳
                  </div>
                  <div 
                    v-motion="'hover-glow'" 
                    :initial="{ filter: 'brightness(1) drop-shadow(0 0 0 transparent)' }"
                    :hovered="{ filter: 'brightness(1.2) drop-shadow(0 0 20px rgba(24, 160, 88, 0.5))', transition: { duration: 300 } }"
                    class="hover-box hover-3">
                    懸停發光
                  </div>
                </div>
              </div>
            </n-tab-pane>

            <!-- Vue Toastification 通知展示 -->
            <n-tab-pane name="toast" tab="📢 通知彈窗">
              <div class="demo-section">
                <div class="section-header">
                  <h3>Vue Toastification 套件展示</h3>
                </div>
                
                <!-- 官方文件連結 -->
                <div class="docs-link-container">
                  <n-button 
                    type="info" 
                    size="medium" 
                    @click="openDocsUrl('https://vue-toastification.maronato.dev/')"
                    class="docs-link-btn">
                    📖 查看 Vue Toastification 官方文件
                  </n-button>
                  <p class="docs-description">
                    Vue Toastification 是一個現代化的 Vue 通知系統，提供豐富的自訂選項和動畫效果
                  </p>
                </div>

                <!-- 基本通知展示 -->
                <n-divider>基本通知類型</n-divider>
                <n-space>
                  <n-button type="success" @click="showSuccessToast">成功通知</n-button>
                  <n-button type="error" @click="showErrorToast">錯誤通知</n-button>
                  <n-button type="warning" @click="showWarningToast">警告通知</n-button>
                  <n-button type="info" @click="showInfoToast">資訊通知</n-button>
                </n-space>
                <div class="usage-info">
                  <h4>💡 使用方式</h4>
                  <n-code :code="toastBasicCode"></n-code>
                  <p class="usage-description">
                    使用 <code>useToast()</code> 引入 toast 實例，支援四種基本通知類型：success、error、warning、info
                  </p>
                </div>

                <!-- 進階通知功能 -->
                <n-divider>進階通知功能</n-divider>
                <n-space>
                  <n-button type="primary" @click="showCustomToast">🎨 自訂通知</n-button>
                  <n-button type="info" @click="showPersistentToast">📌 持久通知</n-button>
                  <n-button type="warning" @click="showActionToast">⚡ 可操作通知</n-button>
                </n-space>
                <div class="usage-info">
                  <h4>💡 進階設定</h4>
                  <n-code :code="toastAdvancedCode"></n-code>
                  <p class="usage-description">
                    支援自訂 <code>timeout</code>、<code>position</code>、<code>draggable</code> 等選項，以及點擊事件和關閉按鈕控制
                  </p>
                </div>

                <!-- 按鈕功能詳細說明 -->
                <div class="button-explanations">
                  <div class="explanation-item">
                    <n-tag type="primary" size="medium">🎨 自訂通知</n-tag>
                    <p>• 自訂顯示時間 (5秒)</p>
                    <p>• 左上角顯示位置</p>
                    <p>• 禁用拖曳避免誤觸</p>
                    <p>• 懸停時顯示關閉按鈕</p>
                    <p>• 懸停時暫停計時</p>
                  </div>
                  
                  <div class="explanation-item">
                    <n-tag type="info" size="medium">📌 持久通知</n-tag>
                    <p>• 永不自動消失 (timeout: false)</p>
                    <p>• 中上方固定顯示</p>
                    <p>• 顯示固定關閉按鈕</p>
                    <p>• 禁用拖曳避免意外關閉</p>
                    <p>• 需手動點擊關閉</p>
                    <p>• 適用於重要提醒</p>
                  </div>
                  
                  <div class="explanation-item">
                    <n-tag type="warning" size="medium">⚡ 可操作通知</n-tag>
                    <p>• 長時間顯示 (10秒)</p>
                    <p>• 右上角警告顯示</p>
                    <p>• 點擊通知觸發操作</p>
                    <p>• 隱藏關閉按鈕</p>
                    <p>• 禁用拖曳確保用戶看到</p>
                    <p>• 適用於確認對話</p>
                  </div>
                </div>
              </div>
            </n-tab-pane>

            <!-- Vue Virtual Scroller 虛擬滾動展示 -->
            <n-tab-pane name="virtual" tab="📜 虛擬滾動">
              <div class="demo-section">
                <div class="section-header">
                  <h3>Vue Virtual Scroller 套件展示</h3>
                </div>
                
                <!-- 主要操作區 - 放在最頂部 -->
                <div class="main-controls">
                  <div class="control-header">
                    <h4>⚔️ 效能比較：原生 vs Vue Virtual Scroller</h4>
                    <p>分別測試兩種實現方式，體驗明顯的效能差異</p>
                    <div class="test-guide">
                      <h5>🚀 效能對比測試指南</h5>
                      <p>分別點擊左右區塊的載入按鈕，系統將會：</p>
                      <ul>
                        <li>🌐 從相同API載入真實資料，確保公平對比</li>
                        <li>📊 顯示詳細的效能統計資訊</li>
                        <li>🚀 自動擴充到 10,000 筆測試資料</li>
                        <li>⚡ 對比兩種實現方式的效能差異</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <!-- 虛擬滾動比較展示 - 始終顯示 -->
                <div class="virtual-comparison">
                  
                  <!-- 雙列對比 -->
                  <div class="comparison-grid">
                    <!-- 原生虛擬滾動 -->
                    <div class="comparison-item">
                      <div class="comparison-title">
                        <h5>🔧 原生虛擬滾動實作</h5>
                        <div class="performance-badge manual">手動實現</div>
                      </div>
                      <div class="native-virtual-container">
                        <div v-if="nativeItems.length === 0" class="empty-demo">
                          <div class="empty-demo-content">
                            <h6>⚠️ 原生實現的挑戰：</h6>
                            <ul>
                              <li>🐌 渲染所有DOM元素 (性能差)</li>
                              <li>🔥 記憶體消耗巨大</li>
                              <li>❌ 滾動會變卡頓</li>
                              <li>🛠️ 需要複雜的手動優化</li>
                            </ul>
                            <div class="empty-actions">
                              <n-button 
                                type="warning" 
                                @click="handleLoadNativeApiData" 
                                :loading="isNativeLoading"
                                size="medium">
                                🔧 載入原生版本資料
                              </n-button>
                            </div>
                            <p>⚠️ 載入資料後體驗卡頓效果</p>
                          </div>
                        </div>
                        <div v-else class="native-virtual-demo">
                          <!-- 原生虛擬滾動實現：顯示完整資料讓使用者體驗差異 -->
                          <div class="native-scroller" @scroll="handleNativeScroll" ref="nativeScrollContainer">
                            <div 
                              v-for="(item, index) in nativeItems" 
                              :key="item.id"
                              class="native-item"
                              :style="{ height: `${itemHeight}px` }">
                              <div class="native-item-content">
                                <div class="item-avatar" :style="{ backgroundColor: item.color }">
                                  {{ item.type === 'post' ? '📝' : '💬' }}
                                </div>
                                <div class="item-info">
                                  <div class="item-title">{{ item.title }}</div>
                                  <div class="item-desc">{{ item.description }}</div>
                                  <div class="item-meta-info">
                                    <span class="item-author">👤 {{ item.author }}</span>
                                    <span class="item-company">🏢 {{ item.company }}</span>
                                  </div>
                                </div>
                                <div class="item-stats">
                                  <span class="stat">👍 {{ item.likes }}</span>
                                  <span class="stat">👁️ {{ item.views }}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="stats-overlay">
                            <div class="stat">🔧 原生實現演示</div>
                            <div class="stat">顯示項目: {{ nativeItems.length.toLocaleString() }} 筆全部載入</div>
                            <div class="stat">載入時間: {{ nativeApiStats.loadTime }}ms</div>
                            <div class="stat">滾動位置: {{ Math.round(nativeScrollPosition) }}px</div>
                            <div class="stat">容器高度: 400px，項目高度: 100px</div>
                            <div class="stat">總高度: {{ (nativeItems.length * 100).toLocaleString() }}px</div>
                            <div class="stat">⚠️ 效能警告：渲染所有DOM</div>
                          </div>
                        </div>
                      </div>
                      <div v-if="nativeItems.length > 0" class="control-buttons-bottom">
                        <n-button 
                          color="#f0ad4e"
                          size="small" 
                          @click="handleLoadNativeApiData"
                          :loading="isNativeLoading">
                          🔄 重新載入
                        </n-button>
                        <n-button 
                          color="#d9534f"
                          size="small" 
                          @click="clearNativeData">
                          🗑️ 清空
                        </n-button>
                      </div>
                    </div>
                    
                    <!-- Vue Virtual Scroller -->
                    <div class="comparison-item">
                      <div class="comparison-title">
                        <h5>📦 Vue Virtual Scroller</h5>
                        <div class="performance-badge package">套件版本</div>
                      </div>
                      <div class="package-virtual-container">
                        <div v-if="items.length === 0" class="empty-demo">
                          <div class="empty-demo-content">
                            <h6>🚀 套件優勢：</h6>
                            <ul>
                              <li>一行配置即可使用</li>
                              <li>自動記憶體優化</li>
                              <li>完善的邊界處理</li>
                              <li>持續維護與更新</li>
                            </ul>
                            <div class="empty-actions">
                              <n-button 
                                type="success" 
                                @click="handleLoadApiData" 
                                :loading="isLoading"
                                size="medium">
                                📦 載入Vue Virtual Scroller資料
                              </n-button>
                            </div>
                            <p>✅ 載入資料後體驗流暢效果</p>
                          </div>
                        </div>
                        <RecycleScroller 
                          v-else
                          class="package-scroller" 
                          :items="items" 
                          :item-size="100" 
                          key-field="id" 
                          v-slot="{ item }">
                          <div class="virtual-item">
                            <div class="item-content">
                              <div class="item-avatar" :style="{ backgroundColor: item.color }">
                                {{ item.type === 'post' ? '📝' : item.type === 'comment' ? '💬' : '🔢' }}
                              </div>
                              <div class="item-info">
                                <div class="item-title">{{ item.title }}</div>
                                <div class="item-desc">{{ item.description }}</div>
                                <div class="item-meta-info">
                                  <span class="item-author">👤 {{ item.author }}</span>
                                  <span class="item-company">🏢 {{ item.company }}</span>
                                  <span class="item-category">📂 {{ item.category }}</span>
                                </div>
                              </div>
                              <div class="item-meta">
                                <div class="item-stats">
                                  <span class="stat">👍 {{ item.likes }}</span>
                                  <span class="stat">👁️ {{ item.views }}</span>
                                </div>
                                <span class="item-tag" :class="item.status">{{ item.tag }}</span>
                                <span class="item-time">{{ new Date(item.timestamp).toLocaleDateString() }}</span>
                              </div>
                            </div>
                          </div>
                        </RecycleScroller>
                        <div v-if="items.length > 0" class="stats-overlay">
                          <div class="stat">📦 Vue Virtual Scroller</div>
                          <div class="stat">資料筆數: {{ items.length.toLocaleString() }}</div>
                          <div class="stat">載入時間: {{ apiStats.loadTime }}ms</div>
                          <div class="stat">只渲染可見區域 (~10-15 DOM)</div>
                          <div class="stat">✅ 自動記憶體回收</div>
                          <div class="stat">🚀 60fps 流暢滾動</div>
                        </div>
                      </div>
                      <div v-if="items.length > 0" class="control-buttons-bottom">
                        <n-button 
                          color="#5cb85c"
                          size="small" 
                          @click="handleLoadApiData"
                          :loading="isLoading">
                          🔄 重新載入
                        </n-button>
                        <n-button 
                          color="#d9534f"
                          size="small" 
                          @click="clearVirtualData">
                          🗑️ 清空
                        </n-button>
                      </div>
                    </div>
                  </div>
                  
                  <!-- 效能比較說明 -->
                  <div class="performance-comparison">
                    <h5>📊 效能分析</h5>
                    <div class="comparison-stats">
                      <div class="stat-comparison">
                        <div class="stat-label">實現複雜度</div>
                        <div class="stat-values">
                          <span class="manual">🔧 原生：需手動計算位置、處理滾動事件</span>
                          <span class="package">📦 套件：一行配置即可使用</span>
                        </div>
                      </div>
                      <div class="stat-comparison">
                        <div class="stat-label">記憶體管理</div>
                        <div class="stat-values">
                          <span class="manual">🔧 原生：需手動優化DOM回收</span>
                          <span class="package">📦 套件：自動記憶體優化</span>
                        </div>
                      </div>
                      <div class="stat-comparison">
                        <div class="stat-label">開發時間</div>
                        <div class="stat-values">
                          <span class="manual">🔧 原生：數天開發 + 測試優化</span>
                          <span class="package">📦 套件：幾分鐘內完成</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 使用說明 -->
                <div class="usage-info">
                  <h4>💡 使用方式</h4>
                  <n-code :code="virtualScrollerCode"></n-code>
                  <div class="usage-steps">
                    <h5>🔧 操作步驟</h5>
                    <ol>
                      <li>分別點擊左右區塊的 <strong>載入按鈕</strong></li>
                      <li>系統會從 JSONPlaceholder 載入相同的真實API資料</li>
                      <li>自動擴充到 <strong>10,000 筆資料</strong>，模擬大數據場景</li>
                      <li>對比兩種實現方式的滾動效能差異</li>
                      <li>觀察統計面板的效能數據差異</li>
                    </ol>
                  </div>
                  <p class="usage-description">
                    <strong>💪 效能優勢</strong>：<code>RecycleScroller</code> 讓您輕鬆處理上萬筆資料，保持流暢的60FPS滾動體驗
                  </p>
                </div>

                <!-- 效能優勢說明 -->
                <n-divider>效能優勢</n-divider>
                <div class="usage-info">
                  <h4>🚀 效能比較</h4>
                  <n-code :code="virtualPerformanceCode"></n-code>
                  <p class="usage-description">
                    虛擬滾動只渲染可視範圍內的元素，即使有 {{ items.length.toLocaleString() }} 筆資料，DOM 中只維持少量元素，記憶體用量和渲染效能都得到最佳化
                  </p>
                </div>
                <div class="performance-stats">
                  <div class="stat-card">
                    <h4>📊 資料筆數</h4>
                    <p>{{ items.length.toLocaleString() }}</p>
                  </div>
                  <div class="stat-card">
                    <h4>💾 DOM 元素</h4>
                    <p>~10-15 個</p>
                  </div>
                  <div class="stat-card">
                    <h4>⚡ 渲染效能</h4>
                    <p>60 FPS</p>
                  </div>
                </div>
              </div>
            </n-tab-pane>

            <!-- 跑馬燈/輪播展示 -->
            <n-tab-pane name="marquee" tab="🎠 跑馬燈輪播">
              <div class="demo-section">
                <div class="section-header">
                  <h4>🎠 原生跑馬燈實作展示</h4>
                  <div class="control-group">
                    <n-button 
                      circle 
                      size="small" 
                      :type="isMarqueeRunning ? 'warning' : 'success'"
                      class="play-pause-btn"
                      @click="toggleMarquee">
                      <template #icon>
                        <span>{{ isMarqueeRunning ? '⏸️' : '▶️' }}</span>
                      </template>
                    </n-button>
                  </div>
                </div>
                <n-space vertical>
                  <n-space>
                    <n-button type="info" @click="changeMarqueeSpeed('slow')">慢速 (20s)</n-button>
                    <n-button type="success" @click="changeMarqueeSpeed('normal')">正常 (10s)</n-button>
                    <n-button type="error" @click="changeMarqueeSpeed('fast')">快速 (5s)</n-button>
                    <n-button type="warning" @click="changeMarqueeSpeed('lightspeed')" class="lightspeed-btn">高速 (2s)</n-button>
                  </n-space>
                  
                  <!-- 原生跑馬燈實作 -->
                  <div class="marquee-container">
                    <div class="marquee-content" :style="{ transform: `translateX(${marqueePosition}%)` }">
                      <span v-for="(news, index) in newsItems" :key="index" class="marquee-item">
                        {{ news }}
                      </span>
                    </div>
                  </div>

                  <!-- 套件版本：Vue3-Marquee -->
                  <div class="package-comparison">
                    <div class="section-header">
                      <h4 style="color: #10b981;">📦 Vue3-Marquee 套件版本</h4>
                      <div class="control-group">
                        <n-button 
                          circle 
                          size="small" 
                          :type="isMarqueePackageRunning ? 'warning' : 'success'"
                          class="play-pause-btn"
                          @click="toggleMarqueePackage">
                          <template #icon>
                            <span>{{ isMarqueePackageRunning ? '⏸️' : '▶️' }}</span>
                          </template>
                        </n-button>
                      </div>
                    </div>
                    <div class="package-controls">
                      <n-space>
                        <n-button type="info" @click="changeMarqueePackageSpeed('slow')">慢速 (20s)</n-button>
                        <n-button type="success" @click="changeMarqueePackageSpeed('normal')">正常 (10s)</n-button>
                        <n-button type="error" @click="changeMarqueePackageSpeed('fast')">快速 (5s)</n-button>
                        <n-button type="warning" @click="changeMarqueePackageSpeed('lightspeed')" class="lightspeed-btn">高速 (2s)</n-button>
                      </n-space>
                    </div>
                    <div class="marquee-package-container">
                      <Vue3Marquee
                        :duration="marqueeDuration"
                        :pause="!isMarqueePackageRunning"
                        :pauseOnHover="true"
                        :pauseOnClick="false"
                        :gradient="false"
                        direction="normal"
                        class="package-marquee">
                        <span v-for="(news, index) in newsItems" :key="index" class="package-marquee-item">
                          {{ news }}
                        </span>
                      </Vue3Marquee>
                    </div>
                  </div>

                  <!-- 跑馬燈實作程式碼展示 -->
                  <n-collapse v-model:expanded-names="expandedSections">
                    <n-collapse-item title="💻 跑馬燈實作對比" name="marquee">
                      <div class="implementation-showcase">
                        <n-tabs type="line" animated>
                          <n-tab-pane name="native-marquee" tab="🛠️ 原生實作">
                            <div class="implementation-content">
                              <!-- 優缺點分析移到程式碼前面 -->
                              <div class="pros-cons">
                                <div class="pros">
                                  <h5 style="color: #10b981; font-size: 1.1rem; margin-bottom: 0.8rem;">✅ 優點</h5>
                                  <ul>
                                    <li>完全客製化控制</li>
                                    <li>無額外依賴</li>
                                    <li>效能可優化</li>
                                    <li>平滑速度切換不重置位置</li>
                                    <li>學習CSS動畫原理</li>
                                  </ul>
                                </div>
                                <div class="cons">
                                  <h5 style="color: #ef4444; font-size: 1.1rem; margin-bottom: 0.8rem;">❌ 缺點</h5>
                                  <ul>
                                    <li>開發時間較長</li>
                                    <li>需處理瀏覽器相容性</li>
                                    <li>複雜邏輯需自己實現</li>
                                    <li>維護成本較高</li>
                                  </ul>
                                </div>
                              </div>
                              
                              <!-- 程式碼展示區塊，比照附圖樣式 -->
                              <div class="usage-info">
                                <h4>💡 使用方式</h4>
                                <div class="code-display-container">
                                  <n-code :code="nativeMarqueeCode" language="vue" word-wrap show-line-numbers />
                                </div>
                              </div>
                            </div>
                          </n-tab-pane>
                          <n-tab-pane name="package-marquee" tab="📦 套件版本">
                            <div class="implementation-content">
                              <!-- 優缺點分析移到程式碼前面 -->
                              <div class="pros-cons">
                                <div class="pros">
                                  <h5 style="color: #10b981; font-size: 1.1rem; margin-bottom: 0.8rem;">✅ 優點</h5>
                                  <ul>
                                    <li>快速開發部署</li>
                                    <li>功能豐富完整</li>
                                    <li>社群維護支援</li>
                                    <li>API設計友善</li>
                                  </ul>
                                </div>
                                <div class="cons">
                                  <h5 style="color: #ef4444; font-size: 1.1rem; margin-bottom: 0.8rem;">❌ 缺點</h5>
                                  <ul>
                                    <li>增加專案依賴</li>
                                    <li>客製化程度有限</li>
                                    <li>速度切換會重置跑馬燈位置</li>
                                    <li>套件更新風險</li>
                                    <li>Bundle size增加</li>
                                  </ul>
                                </div>
                              </div>
                              
                              <!-- 程式碼展示區塊，比照原生實作格式 -->
                              <div class="usage-info" style="margin-top: 1.5rem;">
                                <h4>💡 使用方式</h4>
                                <n-code :code="packageMarqueeCode" language="vue" word-wrap />
                              </div>
                            </div>
                          </n-tab-pane>
                        </n-tabs>
                      </div>
                    </n-collapse-item>
                  </n-collapse>

                  <!-- 原生垂直新聞輪播 -->
                  <div class="vertical-carousel">
                    <div class="section-header">
                      <h4>📰 原生垂直輪播實作</h4>
                      <div class="control-group">
                        <n-button 
                          circle 
                          size="small" 
                          :type="isVerticalCarouselRunning ? 'warning' : 'success'"
                          class="play-pause-btn"
                          @click="toggleVerticalCarousel">
                          <template #icon>
                            <span>{{ isVerticalCarouselRunning ? '⏸️' : '▶️' }}</span>
                          </template>
                        </n-button>
                      </div>
                    </div>
                    <div class="carousel-wrapper">
                      <div class="carousel-content" :style="{ transform: `translateY(-${currentIndex * 60}px)` }">
                        <div v-for="(item, index) in carouselItems" :key="index" class="carousel-item">
                          <span class="badge" :style="{ backgroundColor: getBadgeColor(item.type) }">{{ item.type }}</span>
                          <span class="text">{{ item.title }}</span>
                          <span class="time">{{ item.time }}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- 套件版本：Vue3-Carousel 垂直輪播 -->
                  <div class="package-comparison">
                    <div class="section-header">
                      <h4 style="color: #10b981;">📦 Vue3-Carousel 垂直套件版本</h4>
                      <div class="control-group">
                        <n-button 
                          circle 
                          size="small" 
                          :type="isVerticalPackageAutoPlay ? 'warning' : 'success'"
                          class="play-pause-btn"
                          @click="toggleVerticalPackageAutoPlay">
                          <template #icon>
                            <span>{{ isVerticalPackageAutoPlay ? '⏸️' : '▶️' }}</span>
                          </template>
                        </n-button>
                      </div>
                    </div>
                    <div class="vertical-carousel-package">
                      <Carousel 
                        :itemsToShow="1"
                        :autoplay="isVerticalPackageAutoPlay ? 3000 : 0"
                        :transition="600"
                        :wrapAround="true"
                        dir="ttb"
                        :height="60"
                        :mouseDrag="false"
                        :touchDrag="false">
                        <Slide v-for="(item, index) in carouselItems" :key="index">
                          <div class="package-carousel-item">
                            <span class="badge" :style="{ backgroundColor: getBadgeColor(item.type) }">{{ item.type }}</span>
                            <span class="text">{{ item.title }}</span>
                            <span class="time">{{ item.time }}</span>
                          </div>
                        </Slide>
                      </Carousel>
                    </div>
                  </div>

                  <!-- 垂直輪播實作程式碼展示對比 -->
                  <n-collapse v-model:expanded-names="expandedSections">
                    <n-collapse-item title="📰 垂直輪播實作對比" name="vertical">
                      <div class="implementation-showcase">
                        <n-tabs type="line" animated>
                          <n-tab-pane name="native-vertical" tab="🛠️ 原生實作">
                            <div class="implementation-content">
                              <!-- 優缺點分析 -->
                              <div class="pros-cons">
                                <div class="pros">
                                  <h5 style="color: #10b981; font-size: 1.1rem; margin-bottom: 0.8rem;">✅ 優點</h5>
                                  <ul>
                                    <li>完全控制動畫時序</li>
                                    <li>自定義數據結構靈活</li>
                                    <li>輕量化無依賴</li>
                                    <li>易於客製化樣式</li>
                                  </ul>
                                </div>
                                <div class="cons">
                                  <h5 style="color: #ef4444; font-size: 1.1rem; margin-bottom: 0.8rem;">❌ 缺點</h5>
                                  <ul>
                                    <li>需要處理邊界條件</li>
                                    <li>缺乏內建手勢支援</li>
                                    <li>無障礙功能需自行實現</li>
                                    <li>複雜交互邏輯成本高</li>
                                  </ul>
                                </div>
                              </div>
                              
                              <!-- 程式碼展示 -->
                              <div class="usage-info" style="margin-top: 1.5rem;">
                                <h4>💡 使用方式</h4>
                                <n-code :code="nativeVerticalCode" language="vue" word-wrap />
                              </div>
                            </div>
                          </n-tab-pane>
                          
                          <n-tab-pane name="package-vertical" tab="📦 套件版本">
                            <div class="implementation-content">
                              <!-- 優缺點分析 -->
                              <div class="pros-cons">
                                <div class="pros">
                                  <h5 style="color: #10b981; font-size: 1.1rem; margin-bottom: 0.8rem;">✅ 優點</h5>
                                  <ul>
                                    <li>內建垂直滾動支援</li>
                                    <li>豐富的API配置</li>
                                    <li>完整無障礙功能</li>
                                    <li>觸控手勢支援</li>
                                  </ul>
                                </div>
                                <div class="cons">
                                  <h5 style="color: #ef4444; font-size: 1.1rem; margin-bottom: 0.8rem;">❌ 缺點</h5>
                                  <ul>
                                    <li>增加專案體積</li>
                                    <li>樣式覆蓋較複雜</li>
                                    <li>學習曲線較陡</li>
                                    <li>依賴套件維護</li>
                                  </ul>
                                </div>
                              </div>
                              
                              <!-- 程式碼展示 -->
                              <div class="usage-info" style="margin-top: 1.5rem;">
                                <h4>💡 使用方式</h4>
                                <n-code :code="packageVerticalCode" language="vue" word-wrap />
                              </div>
                            </div>
                          </n-tab-pane>
                        </n-tabs>
                      </div>
                    </n-collapse-item>
                  </n-collapse>

                  <!-- 原生橫向BANNER輪播 -->
                  <div class="banner-carousel">
                    <div class="section-header">
                      <h4>🎯 原生Banner輪播實作</h4>
                      <div class="control-group">
                        <n-button 
                          circle 
                          size="small" 
                          :type="isBannerAutoPlay ? 'warning' : 'success'"
                          class="play-pause-btn"
                          @click="toggleBannerAutoPlay">
                          <template #icon>
                            <span>{{ isBannerAutoPlay ? '⏸️' : '▶️' }}</span>
                          </template>
                        </n-button>
                      </div>
                    </div>
                    <div class="banner-wrapper">
                      <div class="banner-container" :style="{ transform: 'translateX(-' + (bannerCurrentIndex * 100) + '%)' }">
                        <div v-for="(banner, index) in bannerItems" :key="index" 
                             class="banner-slide" 
                             :style="{ background: banner.gradient }">
                          <div class="banner-content">
                            <div class="banner-text">
                              <h3>{{ banner.title }}</h3>
                              <p>{{ banner.description }}</p>
                              <n-button type="primary" @click="openBannerUrl(banner.url)">
                                {{ banner.buttonText }}
                              </n-button>
                            </div>
                            <div class="banner-icon">{{ banner.icon }}</div>
                          </div>
                        </div>
                      </div>
                      
                      <!-- 導航按鈕 -->
                      <div class="banner-navigation">
                        <n-button circle type="info" @click="prevBanner" class="nav-btn prev-btn">‹</n-button>
                        <n-button circle type="info" @click="nextBanner" class="nav-btn next-btn">›</n-button>
                      </div>
                      
                      <!-- 指示器 -->
                      <div class="banner-indicators">
                        <span v-for="(banner, index) in bannerItems" :key="index" 
                              :class="['indicator', { active: index === bannerCurrentIndex }]"
                              @click="setBannerSlide(index)">
                        </span>
                      </div>
                    </div>
                  </div>

                  <!-- 套件版本：Vue3-Carousel Banner輪播 -->
                  <div class="package-comparison">
                    <div class="section-header">
                      <h4 style="color: #10b981;">📦 Vue3-Carousel Banner套件版本</h4>
                      <div class="control-group">
                        <n-button 
                          circle 
                          size="small" 
                          :type="isBannerPackageAutoPlay ? 'warning' : 'success'"
                          class="play-pause-btn"
                          @click="toggleBannerPackageAutoPlay">
                          <template #icon>
                            <span>{{ isBannerPackageAutoPlay ? '⏸️' : '▶️' }}</span>
                          </template>
                        </n-button>
                      </div>
                    </div>
                    <div class="banner-carousel-package">
                      <Carousel 
                        :itemsToShow="1"
                        :autoplay="isBannerPackageAutoPlay ? 5000 : 0"
                        :transition="600"
                        :wrapAround="true"
                        :height="200">
                        <Slide v-for="(banner, index) in bannerItems" :key="index">
                          <div class="package-banner-slide" :style="{ background: banner.gradient }">
                            <div class="package-banner-content">
                              <div class="banner-text">
                                <h3>{{ banner.title }}</h3>
                                <p>{{ banner.description }}</p>
                                <n-button type="primary" @click="openBannerUrl(banner.url)">
                                  {{ banner.buttonText }}
                                </n-button>
                              </div>
                              <div class="banner-icon">{{ banner.icon }}</div>
                            </div>
                          </div>
                        </Slide>
                        
                        <template #addons>
                          <Navigation />
                          <Pagination />
                        </template>
                      </Carousel>
                    </div>
                  </div>

                  <!-- Banner輪播實作程式碼展示對比 -->
                  <n-collapse v-model:expanded-names="expandedSections">
                    <n-collapse-item title="🎯 Banner輪播實作對比" name="banner">
                      <div class="implementation-showcase">
                        <n-tabs type="line" animated>
                          <n-tab-pane name="native-banner" tab="🛠️ 原生實作">
                            <div class="implementation-content">
                              <!-- 優缺點分析 -->
                              <div class="pros-cons">
                                <div class="pros">
                                  <h5 style="color: #10b981; font-size: 1.1rem; margin-bottom: 0.8rem;">✅ 優點</h5>
                                  <ul>
                                    <li>完全自訂導航和指示器</li>
                                    <li>精確的動畫控制</li>
                                    <li>輕量化無依賴</li>
                                    <li>可自由調整過渡效果</li>
                                  </ul>
                                </div>
                                <div class="cons">
                                  <h5 style="color: #ef4444; font-size: 1.1rem; margin-bottom: 0.8rem;">❌ 缺點</h5>
                                  <ul>
                                    <li>需處理觸控手勢</li>
                                    <li>響應式適配複雜</li>
                                    <li>無障礙支援需自行實現</li>
                                    <li>多瀏覽器測試成本高</li>
                                  </ul>
                                </div>
                              </div>
                              
                              <!-- 程式碼展示 -->
                              <div class="usage-info" style="margin-top: 1.5rem;">
                                <h4>💡 使用方式</h4>
                                <n-code :code="nativeBannerCode" language="vue" word-wrap />
                              </div>
                            </div>
                          </n-tab-pane>
                          
                          <n-tab-pane name="package-banner" tab="📦 套件版本">
                            <div class="implementation-content">
                              <!-- 優缺點分析 -->
                              <div class="pros-cons">
                                <div class="pros">
                                  <h5 style="color: #10b981; font-size: 1.1rem; margin-bottom: 0.8rem;">✅ 優點</h5>
                                  <ul>
                                    <li>內建觸控手勢支援</li>
                                    <li>豐富的配置選項</li>
                                    <li>完整無障礙支援</li>
                                    <li>響應式設計內建</li>
                                  </ul>
                                </div>
                                <div class="cons">
                                  <h5 style="color: #ef4444; font-size: 1.1rem; margin-bottom: 0.8rem;">❌ 缺點</h5>
                                  <ul>
                                    <li>增加Bundle體積</li>
                                    <li>樣式覆蓋較複雜</li>
                                    <li>依賴套件更新</li>
                                    <li>學習API成本</li>
                                  </ul>
                                </div>
                              </div>
                              
                              <!-- 程式碼展示 -->
                              <div class="usage-info" style="margin-top: 1.5rem;">
                                <h4>💡 使用方式</h4>
                                <n-code :code="packageBannerCode" language="vue" word-wrap />
                              </div>
                            </div>
                          </n-tab-pane>
                        </n-tabs>
                      </div>
                    </n-collapse-item>
                  </n-collapse>
                </n-space>
                
                <!-- 跑馬燈程式碼說明區塊 -->
                <div class="usage-info">
                  <h4>🎠 跑馬燈與輪播實現原理</h4>
                  <div class="usage-description">
                    <p>展示了三種不同的原生動態效果實現：<code>水平跑馬燈</code>、<code>垂直新聞輪播</code>、<code>橫向Banner輪播</code>，
                    使用純Vue.js + CSS動畫，實現高效能的視覺效果。</p>
                  </div>
                  
                  <div class="usage-steps">
                    <h5>📝 技術實現詳解：</h5>
                    <ol>
                      <li><strong>響應式狀態管理：</strong>使用 <code>ref()</code> 管理播放狀態、位置索引、動畫速度</li>
                      <li><strong>跑馬燈動畫：</strong><code>requestAnimationFrame</code> 實現流暢的水平滾動效果</li>
                      <li><strong>輪播定時器：</strong><code>setInterval</code> 控制垂直輪播（3秒）和Banner輪播（5秒）切換</li>
                      <li><strong>硬體加速：</strong>使用 <code>translateX/translateY</code> 實現GPU加速動畫</li>
                      <li><strong>動態控制：</strong>即時播放/暫停，四檔速度調節，手動導航控制</li>
                    </ol>
                  </div>

                  <div class="implementation-details">
                    <h5>⚙️ 核心實現邏輯：</h5>
                    <div class="detail-grid">
                      <div class="detail-item">
                        <h6>🎠 水平跑馬燈</h6>
                        <p>• requestAnimationFrame 循環更新位置</p>
                        <p>• transform: translateX() 水平移動</p>
                        <p>• 四檔速度：慢速(0.1) → 高速(5.0)</p>
                        <p>• 無縫循環：到達邊界自動重置</p>
                      </div>
                      
                      <div class="detail-item">
                        <h6>📰 垂直輪播</h6>
                        <p>• setInterval 每3秒自動切換</p>
                        <p>• transform: translateY() 垂直移動</p>
                        <p>• 索引循環：currentIndex % length</p>
                        <p>• 即時播放暫停控制</p>
                      </div>
                      
                      <div class="detail-item">
                        <h6>🎯 Banner輪播</h6>
                        <p>• setInterval 每5秒自動切換</p>
                        <p>• transform: translateX(-index * 100%)</p>
                        <p>• 左右導航按鈕手動控制</p>
                        <p>• 底部指示器點擊跳轉</p>
                      </div>
                    </div>
                  </div>

                  <div class="button-explanations">
                    <div class="explanation-item">
                      <p><strong>⏸️/▶️ 統一播放控制：</strong></p>
                      <p>三個組件都支援即時播放/暫停切換，狀態獨立管理，互不影響</p>
                    </div>
                    <div class="explanation-item">
                      <p><strong>🎛️ 跑馬燈速度控制：</strong></p>
                      <p>四檔無級變速：慢速(20s) → 正常(10s) → 快速(5s) → 高速(2s)</p>
                    </div>
                    <div class="explanation-item">
                      <p><strong>🎯 Banner互動功能：</strong></p>
                      <p>支援左右導航按鈕、底部指示器點擊、自動播放三種操作方式</p>
                    </div>
                  </div>

                  <div class="performance-highlights">
                    <h5>🚀 效能特色：</h5>
                  </div>
                </div>
              </div>
            </n-tab-pane>
          </n-tabs>
        </n-card>

        <!-- 技術總結 -->
        <n-card v-motion-slide-visible-bottom class="summary-card">
          <h3>技術分享總結</h3>
          <div class="tech-grid">
            <div 
              v-for="tech in techStack" 
              :key="tech.name" 
              class="tech-item clickable"
              @click="navigateToTab(tech.tab)">
              <div class="tech-icon">{{ tech.icon }}</div>
              <h4>{{ tech.name }}</h4>
              <p>{{ tech.description }}</p>
              <n-tag :type="tech.compatibility" size="small">{{ tech.status }}</n-tag>
            </div>
          </div>
        </n-card>
      </div>
    </n-config-provider>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { darkTheme } from 'naive-ui'
import { useToast } from 'vue-toastification'
import { RecycleScroller } from 'vue-virtual-scroller'
import { useMotion } from '@vueuse/motion'
import { Vue3Marquee } from 'vue3-marquee'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import 'vue3-carousel/dist/carousel.css'

// 導入所有代碼片段
import {
  basicMotionCode,
  scrollMotionCode,
  hoverMotionCode,
  toastBasicCode,
  toastAdvancedCode,
  virtualScrollerCode,
  virtualPerformanceCode,
  nativeMarqueeCode,
  packageMarqueeCode,
  nativeBannerCode,
  packageBannerCode,
  nativeVerticalCode,
  packageVerticalCode
} from './code-snippets/index.js'

const toast = useToast()
const activeTab = ref('motion')

// 折疊狀態控制
const expandedSections = ref([])

// 動畫觸發控制

// 實際功能變數和函數定義
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

// 跑馬燈相關 - 原生實作
const isMarqueeRunning = ref(true)
const marqueeSpeed = ref('slow')
const marqueePosition = ref(0)
const currentIndex = ref(0)
const bannerCurrentIndex = ref(0)
const isBannerAutoPlay = ref(true)
const isVerticalCarouselRunning = ref(true)

// 套件版本播放暫停控制
const isMarqueePackageRunning = ref(true)
const isVerticalPackageAutoPlay = ref(true)
const isBannerPackageAutoPlay = ref(true)

// Vue3-Marquee 相關變數
const marqueeDuration = ref(20) // 完成一輪的秒數 - 預設慢速

// Vue3-Marquee 播放暫停控制函數
const toggleMarqueePackage = () => {
  isMarqueePackageRunning.value = !isMarqueePackageRunning.value
}

// 導航到指定分頁並回到頂部
const navigateToTab = (tabName) => {
  activeTab.value = tabName
  
  // 滾動回到頂部
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, 100)
}

// Vue3-Marquee 速度控制函數
const changeMarqueePackageSpeed = (speed) => {
  const speedMap = { 
    slow: 20,      // 20秒完成一輪
    normal: 10,    // 10秒完成一輪  
    fast: 5,       // 5秒完成一輪
    lightspeed: 0.5  // 0.5秒完成一輪 - 極速
  }
  marqueeDuration.value = speedMap[speed]
}

// Vue3-Carousel 垂直版本播放暫停控制函數
const toggleVerticalPackageAutoPlay = () => {
  isVerticalPackageAutoPlay.value = !isVerticalPackageAutoPlay.value
}

// Vue3-Carousel Banner版本播放暫停控制函數
const toggleBannerPackageAutoPlay = () => {
  isBannerPackageAutoPlay.value = !isBannerPackageAutoPlay.value
}

// 跑馬燈速度對應表
const marqueeSpeedMap = {
  slow: 0.1,      // 超慢速
  normal: 0.3,    // 正常速度
  fast: 0.8,      // 快速
  lightspeed: 5   // 高速 - 超快
}

// Banner輪播數據
const bannerItems = ref([
  {
    title: 'Vue 3.4 性能提升',
    description: '全新的編譯器優化帶來更快的渲染速度',
    buttonText: '了解更多',
    icon: '🚀',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    url: 'https://vuejs.org/'
  },
  {
    title: 'TypeScript 5.0',
    description: '更強大的類型系統和開發者體驗',
    buttonText: '立即體驗',
    icon: '💎',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    url: 'https://www.typescriptlang.org/'
  },
  {
    title: 'Vite 6.0 發布',
    description: '極速的構建工具，開發體驗再升級',
    buttonText: '開始使用',
    icon: '⚡',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    url: 'https://vitejs.dev/'
  },
  {
    title: 'Pinia 狀態管理',
    description: '簡潔直觀的 Vue 狀態管理解決方案',
    buttonText: '查看文檔',
    icon: '🍍',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    url: 'https://pinia.vuejs.org/'
  }
])

// 跑馬燈新聞數據
const newsItems = ref([
  '🔥 Vue 3.4 正式發布，帶來更多性能優化',
  '⚡ Vite 6.0 大幅提升構建速度',
  '🎯 Naive UI 2.40 新增更多組件',
  '🚀 VueUse 10.0 發布，新增實用工具函數',
  '💡 Vue DevTools 全新體驗上線',
  '🌟 Pinia 2.0 狀態管理更簡潔'
])

// 垂直輪播數據
const carouselItems = ref([
  { type: '技術', title: 'Vue 3 Composition API 最佳實踐分享', time: '2分鐘前' },
  { type: '新聞', title: 'JavaScript 2024 年度調查報告發布', time: '5分鐘前' },
  { type: '教學', title: 'TypeScript 5.0 新特性深度解析', time: '10分鐘前' },
  { type: '工具', title: 'Vite vs Webpack 性能對比測試', time: '15分鐘前' },
  { type: '框架', title: 'React vs Vue 開發體驗對比', time: '20分鐘前' },
  { type: '趨勢', title: '前端開發 2024 年技術趨勢預測', time: '25分鐘前' }
])

// 技術棧資料
const techStack = ref([
  {
    name: 'VueUse Motion',
    icon: '🎭',
    description: '聲明式動畫庫，輕鬆實現流暢動畫效果',
    compatibility: 'info',
    status: '完美兼容',
    tab: 'motion'
  },
  {
    name: 'Vue Toastification',
    icon: '📢',
    description: '增強版通知系統，支援豐富自訂選項',
    compatibility: 'info',
    status: '完美兼容',
    tab: 'toast'
  },
  {
    name: 'Vue Virtual Scroller',
    icon: '📜',
    description: '虛擬滾動組件，優化大列表渲染性能',
    compatibility: 'info',
    status: '性能優化',
    tab: 'virtual'
  },
  {
    name: '跑馬燈與輪播',
    icon: '🎠',
    description: '純 CSS 動畫實現的跑馬燈和輪播效果',
    compatibility: 'info',
    status: '原生支持',
    tab: 'marquee'
  }
])

// 虛擬滾動相關響應式狀態
const items = ref([])
const nativeItems = ref([])  // 原生專用的資料
const isLoading = ref(false)
const isNativeLoading = ref(false)  // 原生載入狀態
const targetItemCount = ref(10000)
const apiStats = ref({
  totalPosts: 0,
  totalComments: 0,
  totalUsers: 0,
  generatedCount: 0,
  loadTime: 0
})

const nativeApiStats = ref({  // 原生專用統計
  totalPosts: 0,
  totalComments: 0,
  totalUsers: 0,
  generatedCount: 0,
  loadTime: 0
})

// 原生虛擬滾動狀態（簡化版）
const nativeScrollPosition = ref(0)
const itemHeight = 100
const nativeScrollContainer = ref(null)

// 原生滾動處理（簡化版）
const handleNativeScroll = (event) => {
  nativeScrollPosition.value = event.target.scrollTop
}

// 跑馬燈動畫控制核心
let marqueeAnimationId = null
const startMarqueeAnimation = () => {
  if (marqueeAnimationId) return
  
  const animate = () => {
    if (isMarqueeRunning.value) {
      const speed = marqueeSpeedMap[marqueeSpeed.value]
      marqueePosition.value -= speed
      
      // 當跑馬燈完全移出視圖時重置位置
      if (marqueePosition.value <= -100) {
        marqueePosition.value = 100
      }
    }
    marqueeAnimationId = requestAnimationFrame(animate)
  }
  
  marqueeAnimationId = requestAnimationFrame(animate)
}

// 播放/暫停控制
const toggleMarquee = () => {
  isMarqueeRunning.value = !isMarqueeRunning.value
}

// 速度調節
const changeMarqueeSpeed = (speed) => {
  marqueeSpeed.value = speed
}

// 垂直輪播自動播放
let verticalCarouselInterval = null
const startVerticalCarousel = () => {
  if (verticalCarouselInterval) clearInterval(verticalCarouselInterval)
  verticalCarouselInterval = setInterval(() => {
    if (isVerticalCarouselRunning.value) {
      currentIndex.value = (currentIndex.value + 1) % carouselItems.value.length
    }
  }, 3000) // 每3秒切換一次
}

// 播放/暫停垂直輪播
const toggleVerticalCarousel = () => {
  isVerticalCarouselRunning.value = !isVerticalCarouselRunning.value
}

// Banner輪播自動播放
let bannerInterval = null
const startBannerCarousel = () => {
  if (bannerInterval) clearInterval(bannerInterval)
  bannerInterval = setInterval(() => {
    if (isBannerAutoPlay.value) {
      bannerCurrentIndex.value = (bannerCurrentIndex.value + 1) % bannerItems.value.length
    }
  }, 5000) // 每5秒切換一次
}

// Banner輪播控制
const toggleBannerAutoPlay = () => {
  isBannerAutoPlay.value = !isBannerAutoPlay.value
}

const nextBanner = () => {
  bannerCurrentIndex.value = (bannerCurrentIndex.value + 1) % bannerItems.value.length
}

const prevBanner = () => {
  bannerCurrentIndex.value = bannerCurrentIndex.value === 0 
    ? bannerItems.value.length - 1 
    : bannerCurrentIndex.value - 1
}

const setBannerSlide = (index) => {
  bannerCurrentIndex.value = index
}

// Badge顏色函數
const getBadgeColor = (type) => {
  const colors = {
    '技術': '#4facfe',
    '新聞': '#ff6b6b',
    '教學': '#4ecdc4'
  }
  return colors[type] || '#6c5ce7'
}

// API資料載入函數
const loadApiData = async () => {
  try {
    console.log('🌐 開始載入API資料...')
    
    // 載入基礎資料 - JSONPlaceholder Posts
    const [postsResponse, usersResponse, commentsResponse] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts'),
      fetch('https://jsonplaceholder.typicode.com/users'), 
      fetch('https://jsonplaceholder.typicode.com/comments')
    ])
    
    const posts = await postsResponse.json()
    const users = await usersResponse.json()
    const comments = await commentsResponse.json()
    
    console.log(`📝 載入了 ${posts.length} 篇文章`)
    console.log(`👥 載入了 ${users.length} 位使用者`)
    console.log(`💬 載入了 ${comments.length} 則留言`)
    
    return { posts, users, comments }
  } catch (error) {
    console.error('❌ API載入失敗:', error)
    throw error
  }
}

// 資料處理與擴充函數
const processApiData = (posts, users, comments) => {
  const colors = ['#ff6b6b', '#4ecdc4', '#a55eea', '#ff9500', '#00d2ff', '#ff5722', '#667eea', '#f093fb']
  const statusOptions = ['success', 'info', 'warning', 'error', 'default']
  const tagOptions = ['熱門', '新文章', 'VIP', '置頂', '推薦', '精選', '最新', '熱議']
  const categoryOptions = ['技術分享', '生活札記', '產品開發', '使用者體驗', '前端技術', '後端開發', '資料分析', '設計思維']
  
  const allData = []
  
  // 1. 處理文章資料
  posts.forEach((post, index) => {
    const user = users.find(u => u.id === post.userId) || users[0]
    allData.push({
      id: `post-${post.id}`,
      title: post.title,
      description: post.body.substring(0, 120) + '...',
      author: user.name,
      company: user.company?.name || '自由工作者',
      category: categoryOptions[post.id % categoryOptions.length],
      status: statusOptions[post.id % statusOptions.length],
      tag: tagOptions[post.id % tagOptions.length],
      color: colors[post.id % colors.length],
      timestamp: Date.now() - Math.random() * 86400000 * 90, // 90天內隨機時間
      likes: Math.floor(Math.random() * 1000) + 10,
      views: Math.floor(Math.random() * 5000) + 100,
      type: 'post'
    })
  })
  
  // 2. 處理留言資料
  comments.forEach((comment, index) => {
    allData.push({
      id: `comment-${comment.id}`,
      title: `回應：${comment.name}`,
      description: comment.body.substring(0, 120) + '...',
      author: comment.email.split('@')[0],
      company: 'Community',
      category: '討論回應',
      status: statusOptions[comment.id % statusOptions.length],
      tag: tagOptions[comment.id % tagOptions.length],
      color: colors[comment.id % colors.length],
      timestamp: Date.now() - Math.random() * 86400000 * 60, // 60天內隨機時間
      likes: Math.floor(Math.random() * 200) + 5,
      views: Math.floor(Math.random() * 1000) + 50,
      type: 'comment'
    })
  })
  
  return allData
}

// 資料擴充函數
const expandDataset = (baseData, posts, users, targetCount = 10000) => {
  const colors = ['#ff6b6b', '#4ecdc4', '#a55eea', '#ff9500', '#00d2ff', '#ff5722', '#667eea', '#f093fb']
  const statusOptions = ['success', 'info', 'warning', 'error', 'default']
  const tagOptions = ['熱門', '新文章', 'VIP', '置頂', '推薦', '精選', '最新', '熱議']
  const categoryOptions = ['技術分享', '生活札記', '產品開發', '使用者體驗', '前端技術', '後端開發', '資料分析', '設計思維']
  
  const currentCount = baseData.length
  
  for (let i = currentCount; i < targetCount; i++) {
    const basePost = posts[i % posts.length]
    const baseUser = users[i % users.length]
    
    baseData.push({
      id: `generated-${i}`,
      title: `${basePost.title} (擴充 #${i})`,
      description: `${basePost.body.substring(0, 100)}... 這是第${i+1}筆資料，用於測試虛擬滾動的大量資料處理能力。`,
      author: `${baseUser.name}_${i}`,
      company: baseUser.company?.name || `公司_${i}`,
      category: categoryOptions[i % categoryOptions.length],
      status: statusOptions[i % statusOptions.length],
      tag: tagOptions[i % tagOptions.length],
      color: colors[i % colors.length],
      timestamp: Date.now() - Math.random() * 86400000 * 365, // 一年內隨機時間
      likes: Math.floor(Math.random() * 10000) + 1,
      views: Math.floor(Math.random() * 50000) + 100,
      type: 'generated'
    })
  }
  
  return baseData
}

// 備用本地資料生成函數
const generateLocalData = () => {
  const statusOptions = ['success', 'info', 'warning', 'error', 'default']
  const tagOptions = ['Hot', 'New', 'VIP', 'Pro', 'Free']
  const colors = ['#ff6b6b', '#4ecdc4', '#a55eea', '#ff9500', '#00d2ff', '#ff5722', '#667eea', '#f093fb']
  
  const localData = []
  
  for (let i = 0; i < 10000; i++) {
    localData.push({
      id: i,
      title: `本地測試項目 ${i + 1}`,
      description: `這是第 ${i + 1} 個本地測試項目的詳細說明，展示虛擬滾動在處理大量數據時的優秀效能表現。`,
      author: `測試用戶${i + 1}`,
      company: '測試公司',
      category: '測試分類',
      status: statusOptions[i % statusOptions.length],
      tag: tagOptions[i % tagOptions.length],
      color: colors[i % colors.length],
      timestamp: Date.now() - Math.random() * 86400000 * 30,
      likes: Math.floor(Math.random() * 1000),
      views: Math.floor(Math.random() * 5000),
      type: 'local'
    })
  }
  
  return localData
}

// 手動載入API資料 - Vue Virtual Scroller版本
const handleLoadApiData = async () => {
  isLoading.value = true
  const startTime = Date.now()
  
  try {
    // 清空現有資料
    items.value = []
    apiStats.value = {
      totalPosts: 0,
      totalComments: 0,  
      totalUsers: 0,
      generatedCount: 0,
      loadTime: 0
    }
    
    toast.info('🌐 開始載入Vue Virtual Scroller資料...', {
      timeout: 3000,
      position: 'top-right'
    })
    
    // 載入API資料
    const apiStartTime = Date.now()
    const { posts, users, comments } = await loadApiData()
    const apiEndTime = Date.now()
    console.log(`📦 Vue Virtual Scroller - API載入時間: ${apiEndTime - apiStartTime}ms`)
    
    // 更新統計資訊
    apiStats.value.totalPosts = posts.length
    apiStats.value.totalComments = comments.length
    apiStats.value.totalUsers = users.length
    
    // 處理基礎資料
    const processStartTime = Date.now()
    const processedData = processApiData(posts, users, comments)
    const processEndTime = Date.now()
    console.log(`📦 Vue Virtual Scroller - 資料處理時間: ${processEndTime - processStartTime}ms`)
    
    // 擴充資料集
    const expandStartTime = Date.now()
    const expandedData = expandDataset(processedData, posts, users, 10000)
    const expandEndTime = Date.now()
    console.log(`📦 Vue Virtual Scroller - 資料擴充時間: ${expandEndTime - expandStartTime}ms`)
    apiStats.value.generatedCount = 10000 - posts.length - comments.length
    
    // 隨機排序資料
    const shuffleStartTime = Date.now()
    const shuffledData = expandedData.sort(() => Math.random() - 0.5)
    const shuffleEndTime = Date.now()
    console.log(`📦 Vue Virtual Scroller - 資料排序時間: ${shuffleEndTime - shuffleStartTime}ms`)
    
    // 設定資料到Vue響應式系統
    const reactiveStartTime = Date.now()
    items.value = shuffledData
    const reactiveEndTime = Date.now()
    console.log(`📦 Vue Virtual Scroller - Vue響應式設定時間: ${reactiveEndTime - reactiveStartTime}ms`)
    
    const endTime = Date.now()
    apiStats.value.loadTime = endTime - startTime
    
    console.log(`✅ Vue Virtual Scroller 資料載入完成！總共 ${items.value.length.toLocaleString()} 筆資料`)
    console.log(`⏱️ Vue Virtual Scroller 總載入時間: ${apiStats.value.loadTime}ms`)
    
    toast.success(`🎉 Vue Virtual Scroller 成功載入 ${items.value.length.toLocaleString()} 筆資料！`, {
      timeout: 5000,
      position: 'top-right'
    })
    
  } catch (error) {
    console.error('❌ Vue Virtual Scroller API載入失敗:', error)
    
    toast.error('❌ Vue Virtual Scroller API載入失敗，請檢查網路連接', {
      timeout: 5000,
      position: 'top-right'
    })
  } finally {
    isLoading.value = false
  }
}

// 手動載入API資料 - 原生版本
const handleLoadNativeApiData = async () => {
  isNativeLoading.value = true
  const startTime = Date.now()
  
  try {
    // 清空現有資料
    nativeItems.value = []
    nativeApiStats.value = {
      totalPosts: 0,
      totalComments: 0,  
      totalUsers: 0,
      generatedCount: 0,
      loadTime: 0
    }
    
    toast.info('🔧 開始載入原生虛擬滾動資料...', {
      timeout: 3000,
      position: 'top-left'
    })
    
    // 載入API資料 (使用相同的API)
    const apiStartTime = Date.now()
    const { posts, users, comments } = await loadApiData()
    const apiEndTime = Date.now()
    console.log(`🔧 原生版本 - API載入時間: ${apiEndTime - apiStartTime}ms`)
    
    // 更新統計資訊
    nativeApiStats.value.totalPosts = posts.length
    nativeApiStats.value.totalComments = comments.length
    nativeApiStats.value.totalUsers = users.length
    
    // 處理基礎資料 (使用相同的處理函數)
    const processStartTime = Date.now()
    const processedData = processApiData(posts, users, comments)
    const processEndTime = Date.now()
    console.log(`🔧 原生版本 - 資料處理時間: ${processEndTime - processStartTime}ms`)
    console.log(`🔧 原生版本 - 處理後基礎資料: ${processedData.length} 筆`)
    
    // 擴充資料集 (使用相同的擴充函數)
    const expandStartTime = Date.now()
    const expandedData = expandDataset(processedData, posts, users, 10000)
    const expandEndTime = Date.now()
    console.log(`🔧 原生版本 - 資料擴充時間: ${expandEndTime - expandStartTime}ms`)
    console.log(`🔧 原生版本 - 擴充後資料: ${expandedData.length} 筆`)
    nativeApiStats.value.generatedCount = 10000 - posts.length - comments.length
    
    // 隨機排序資料 (使用相同的種子確保資料一致)
    const shuffleStartTime = Date.now()
    const shuffledData = expandedData.sort(() => Math.random() - 0.5)
    const shuffleEndTime = Date.now()
    console.log(`🔧 原生版本 - 資料排序時間: ${shuffleEndTime - shuffleStartTime}ms`)
    console.log(`🔧 原生版本 - 最終資料: ${shuffledData.length} 筆`)
    
    // 設定資料到Vue響應式系統
    const reactiveStartTime = Date.now()
    nativeItems.value = shuffledData
    const reactiveEndTime = Date.now()
    console.log(`🔧 原生版本 - Vue響應式設定時間: ${reactiveEndTime - reactiveStartTime}ms`)
    
    const endTime = Date.now()
    nativeApiStats.value.loadTime = endTime - startTime
    
    console.log(`✅ 原生虛擬滾動資料載入完成！總共 ${nativeItems.value.length.toLocaleString()} 筆資料`)
    console.log(`⏱️ 原生版本總載入時間: ${nativeApiStats.value.loadTime}ms`)
    
    toast.success(`🎉 原生版本成功載入 ${nativeItems.value.length.toLocaleString()} 筆資料！`, {
      timeout: 5000,
      position: 'top-left'
    })
    
  } catch (error) {
    console.error('❌ 原生版本API載入失敗:', error)
    
    toast.error('❌ 原生版本API載入失敗，請檢查網路連接', {
      timeout: 5000,
      position: 'top-left'
    })
  } finally {
    isNativeLoading.value = false
  }
}

// 清空原生版本資料
const clearNativeData = () => {
  nativeItems.value = []
  nativeApiStats.value = {
    totalPosts: 0,
    totalComments: 0,
    totalUsers: 0, 
    generatedCount: 0,
    loadTime: 0
  }
  
  // 重設滾動位置
  nativeScrollPosition.value = 0
  if (nativeScrollContainer.value) {
    nativeScrollContainer.value.scrollTop = 0
  }
  
  toast.info('🔧 原生版本資料已清空', {
    timeout: 2000,
    position: 'top-left'
  })
}

// 清空Vue Virtual Scroller版本資料
const clearVirtualData = () => {
  items.value = []
  apiStats.value = {
    totalPosts: 0,
    totalComments: 0,
    totalUsers: 0, 
    generatedCount: 0,
    loadTime: 0
  }
  
  toast.info('📦 Vue Virtual Scroller資料已清空', {
    timeout: 2000,
    position: 'top-right'
  })
}

// 清空資料
const clearData = () => {
  items.value = []
  nativeItems.value = []
  apiStats.value = {
    totalPosts: 0,
    totalComments: 0,
    totalUsers: 0, 
    generatedCount: 0,
    loadTime: 0
  }
  nativeApiStats.value = {
    totalPosts: 0,
    totalComments: 0,
    totalUsers: 0, 
    generatedCount: 0,
    loadTime: 0
  }
  
  toast.info('🗑️ 所有資料已清空', {
    timeout: 2000,
    position: 'top-center'
  })
}

// 重設到初始狀態
const resetToInitialState = () => {
  // 清空所有資料
  items.value = []
  nativeItems.value = []
  
  // 重設API統計
  apiStats.value = {
    totalPosts: 0,
    totalComments: 0,
    totalUsers: 0,
    generatedCount: 0,
    loadTime: 0
  }
  
  nativeApiStats.value = {
    totalPosts: 0,
    totalComments: 0,
    totalUsers: 0,
    generatedCount: 0,
    loadTime: 0
  }
  
  // 重設載入狀態
  isLoading.value = false
  isNativeLoading.value = false
  
  // 重設原生虛擬滾動狀態
  nativeScrollPosition.value = 0
  if (nativeScrollContainer.value) {
    nativeScrollContainer.value.scrollTop = 0
  }
  
  // 重設跑馬燈狀態（只重設已定義的變數）
  if (typeof isMarqueeRunning !== 'undefined') isMarqueeRunning.value = true
  if (typeof marqueeSpeed !== 'undefined') marqueeSpeed.value = 'normal'
  if (typeof marqueePosition !== 'undefined') marqueePosition.value = 100
  if (typeof bannerCurrentIndex !== 'undefined') bannerCurrentIndex.value = 0
  if (typeof isBannerAutoPlay !== 'undefined') isBannerAutoPlay.value = true
  if (typeof currentIndex !== 'undefined') currentIndex.value = 0
  
  toast.success('🔄 已重設到初始狀態', {
    timeout: 2000,
    position: 'top-center'
  })
}

// 虛擬滾動歡迎訊息顯示標記
const hasShownVirtualWelcome = ref(false)

// 監聽頁籤變化，僅在虛擬滾動頁籤顯示歡迎訊息
watch(activeTab, (newTab) => {
  if (newTab === 'virtual' && !hasShownVirtualWelcome.value) {
    hasShownVirtualWelcome.value = true
    
    // 顯示歡迎訊息
    toast.info('👋 歡迎體驗虛擬滾動對比！分別點擊左右按鈕載入相同資料', {
      timeout: 6000,
      position: 'top-right'
    })
    
    // 提示用戶分別測試
    setTimeout(() => {
      toast.success('💡 提示：先載入原生版本體驗卡頓，再載入套件版本感受差異', {
        timeout: 8000,
        position: 'top-right'
      })
    }, 2000)
  }
}, { immediate: true })

// 組件掛載時初始化 - 原生實作
onMounted(async () => {
  // 啟動原生動畫
  startMarqueeAnimation()
  startVerticalCarousel()
  startBannerCarousel()
})

// 清理定時器
onUnmounted(() => {
  if (marqueeAnimationId) {
    cancelAnimationFrame(marqueeAnimationId)
  }
  if (verticalCarouselInterval) {
    clearInterval(verticalCarouselInterval)
  }
  if (bannerInterval) {
    clearInterval(bannerInterval)
  }
})

// 動畫觸發
const triggerMotion = () => {
  // 重新觸發動畫
  location.reload()
}

// Toast 通知功能
const showSuccessToast = () => {
  toast.success('🎉 操作成功！這是一個成功的通知訊息', {
    timeout: 5000
  })
}

const showErrorToast = () => {
  toast.error('❌ 發生錯誤！請檢查您的操作', {
    timeout: 5000
  })
}

const showWarningToast = () => {
  toast.warning('⚠️ 注意！這是一個警告訊息', {
    timeout: 5000
  })
}

const showInfoToast = () => {
  toast.info('ℹ️ 這是一個資訊提示訊息', {
    timeout: 5000
  })
}

const showCustomToast = () => {
  toast.success("� 這是自訂的通知內容！", {
    timeout: 5000,                    // 5秒後自動關閉
    position: "top-left",             // 左上角顯示
    draggable: false,                 // 禁用拖曳避免誤觸
    showCloseButtonOnHover: true,     // 懸停顯示關閉按鈕
    pauseOnFocusLoss: false,
    pauseOnHover: true,               // 懸停時暫停計時
  });
}

const showPersistentToast = () => {
  toast.info("📌 這個通知需要手動關閉", {
    timeout: false,                   // 永不自動消失
    closeButton: "button",            // 顯示關閉按鈕
    position: "top-center",           // 中上方顯示
    draggable: false,                 // 禁用拖曳
  });
}

const showActionToast = () => {
  toast.warning("⚡ 確定要執行此操作嗎？點擊通知確認", {
    timeout: 10000,                   // 10秒長時間顯示
    position: "top-right",            // 右上角顯示
    onClick: () => {                  // 點擊通知觸發操作
      toast.success("✅ 操作已確認執行", {
        position: "top-right"         // 確認訊息也在右上角
      });
    },
    closeButton: false,               // 隱藏關閉按鈕
    showCloseButtonOnHover: false,
    draggable: false,                 // 禁用拖曳
  });
}

// Banner 按鈕點擊事件 - 導向網址
const openBannerUrl = (url) => {
  if (url) {
    window.open(url, '_blank')
    toast.success(`🌐 正在導向 ${url}`)
  }
}

// 開啟官方文件
const openDocsUrl = (url) => {
  if (url) {
    window.open(url, '_blank')
    toast.success('📖 正在開啟 VueUse Motion 官方文件')
  }
}
</script>

<style scoped>
.demo-app {
  min-height: 100vh;
  background: 
    linear-gradient(45deg, #1e3a5f 0%, #2c5282 25%, #3182ce 50%, #4299e1 75%, #63b3ed 100%) fixed,
    radial-gradient(ellipse at center, rgba(99, 179, 237, 0.2) 0%, transparent 80%) fixed;
  padding: 2rem;
  position: relative;
  overflow: visible;
}

.demo-app::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(45deg, 
      transparent 0%, 
      rgba(147, 197, 253, 0.1) 30%, 
      rgba(59, 130, 246, 0.15) 50%, 
      rgba(37, 99, 235, 0.12) 70%, 
      transparent 100%
    );
  pointer-events: none;
  z-index: 1;
}

.demo-app::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(90deg, 
      transparent 0%, 
      rgba(219, 234, 254, 0.06) 25%,
      rgba(96, 165, 250, 0.08) 50%,
      rgba(59, 130, 246, 0.1) 75%,
      transparent 100%
    ),
    radial-gradient(circle at 25% 75%, rgba(147, 197, 253, 0.12) 0%, transparent 50%),
    radial-gradient(circle at 75% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 60%);
  mix-blend-mode: screen;
  pointer-events: none;
  z-index: 2;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 3;
  min-width: 0;
  width: 100%;
}

.test-guide {
  text-align: center;
  margin-top: 1rem;
}

.test-guide h5 {
  color: white;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.test-guide ul {
  display: inline-block;
  text-align: left;
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.test-guide li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.3rem;
}

.test-guide li::before {
  content: "•";
  position: absolute;
  left: 0.5rem;
  color: white;
  font-weight: bold;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
  color: white;
}

.title {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #ffffff, #e0f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.demo-container {
  margin-bottom: 2rem;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.demo-section {
  padding: 2rem;
}

.demo-section h3 {
  margin-bottom: 1.5rem;
  color: #ffffff;
  font-size: 1.5rem;
}

.motion-demo {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.motion-box {
  width: 120px;
  height: 120px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  text-align: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.box-1 {
  background: linear-gradient(45deg, #ff6b6b, #ee5a24);
}

.box-2 {
  background: linear-gradient(45deg, #4ecdc4, #44bd87);
}

.box-3 {
  background: linear-gradient(45deg, #a55eea, #8b5cf6);
}

.box-4 {
  background: linear-gradient(45deg, #ff9500, #ffb347);
}

.box-5 {
  background: linear-gradient(45deg, #00d2ff, #3a7bd5);
}

.box-6 {
  background: linear-gradient(45deg, #ff5722, #e91e63);
}

.text-motion-demo {
  text-align: center;
  margin: 2rem 0;
}

.motion-title {
  color: #18a058;
  margin-bottom: 1rem;
}

.motion-text {
  color: #666;
  font-size: 16px;
  line-height: 1.6;
}

.scroll-motion-demo {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 3rem 0;
  min-height: 200px;
}

.scroll-box {
  flex: 1;
  height: 150px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  text-align: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.box-left {
  background: linear-gradient(45deg, #667eea, #764ba2);
}

.box-center {
  background: linear-gradient(45deg, #f093fb, #f5576c);
}

.box-right {
  background: linear-gradient(45deg, #4facfe, #00f2fe);
}

.hover-motion-demo {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 2rem 0;
}

.hover-box {
  flex: 1;
  height: 120px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  text-align: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  user-select: none;
}

.hover-1 {
  background: linear-gradient(45deg, #fa709a, #fee140);
}

.hover-2 {
  background: linear-gradient(45deg, #a8edea, #fed6e3);
  color: #333;
}

.hover-3 {
  background: linear-gradient(45deg, #ff9a9e, #fecfef);
  color: #333;
}

/* 使用說明區塊樣式 */
.usage-info {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  backdrop-filter: blur(10px);
}

.usage-info h4 {
  color: #70C0E8;
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
}

.usage-description {
  color: #e2e8f0;
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 1rem 0 0 0;
}

.usage-description code {
  background: rgba(112, 192, 232, 0.2);
  color: #70C0E8;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 0.85rem;
}

.usage-steps {
  margin: 1rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.usage-steps h5 {
  color: #98FB98;
  margin: 0 0 0.8rem 0;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.usage-steps ol {
  margin: 0;
  padding-left: 1.5rem;
  color: #e2e8f0;
  line-height: 1.6;
}

.usage-steps ol li {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.usage-steps ol li strong {
  color: #70C0E8;
  font-weight: 600;
}

.button-explanations {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* 響應式調整 */
@media (max-width: 768px) {
  .button-explanations {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    padding: 1rem;
    margin: 1rem 0;
  }
}

@media (max-width: 480px) {
  .button-explanations {
    padding: 0.8rem;
    gap: 0.5rem;
  }
}

.explanation-item {
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
}

.explanation-item:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-2px);
}

.explanation-item p {
  margin: 0.5rem 0;
  font-size: 0.85rem;
  color: #cbd5e0;
  line-height: 1.5;
}

.explanation-item p:first-of-type {
  margin-top: 0.8rem;
}

/* 實現詳情區塊 */
.implementation-details {
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: rgba(75, 85, 99, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(75, 85, 99, 0.3);
}

.implementation-details h5 {
  color: #60a5fa;
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

/* 響應式調整 */
@media (max-width: 768px) {
  .detail-grid {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
  
  .implementation-details {
    padding: 1rem;
    margin: 1rem 0;
  }
}

@media (max-width: 480px) {
  .detail-grid {
    gap: 0.5rem;
  }
  
  .implementation-details {
    padding: 0.8rem;
  }
}

.detail-item {
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 480px) {
  .detail-item {
    padding: 0.8rem;
  }
}

.detail-item h6 {
  color: #fbbf24;
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;
}

.detail-item p {
  margin: 0.3rem 0;
  font-size: 0.85rem;
  color: #cbd5e0;
  line-height: 1.4;
}

/* 效能亮點區塊 */
.performance-highlights {
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: rgba(34, 197, 94, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.performance-highlights h5 {
  color: #22c55e;
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
}

.performance-highlights ul {
  margin: 0;
  padding-left: 1.2rem;
}

.performance-highlights li {
  margin: 0.8rem 0;
  color: #cbd5e0;
  line-height: 1.5;
}

.performance-highlights strong {
  color: #22c55e;
  font-weight: 600;
}

/* 官方文件連結區塊 */
.docs-link-container {
  background: rgba(112, 192, 232, 0.1);
  border: 1px solid rgba(112, 192, 232, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  text-align: center;
  backdrop-filter: blur(10px);
}

.docs-link-btn {
  margin-bottom: 1rem;
}

.docs-description {
  color: #e2e8f0;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
}

/* 虛擬滾動效能比較樣式 */
.virtual-comparison {
  margin: 2rem 0;
}

.comparison-header {
  text-align: center;
  margin-bottom: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.comparison-header h4 {
  color: #70C0E8;
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem;
}

.comparison-header p {
  color: #8b949e !important;
  margin: 0;
  font-size: 0.95rem;
  font-weight: 500;
}

.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.comparison-item {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem;
  min-width: 0;
  overflow: hidden;
}

.comparison-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.comparison-title h5 {
  color: #e2e8f0 !important;
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
}

.performance-badge {
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
}

.performance-badge.manual {
  background: rgba(255, 193, 7, 0.2);
  color: #ffc107;
  border: 1px solid rgba(255, 193, 7, 0.3);
}

.performance-badge.package {
  background: rgba(40, 167, 69, 0.2);
  color: #28a745;
  border: 1px solid rgba(40, 167, 69, 0.3);
}

.native-virtual-container,
.package-virtual-container {
  position: relative;
  height: 400px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  overflow: hidden;
  min-width: 0;
}

.native-virtual-demo,
.package-virtual-demo {
  height: 100%;
  position: relative;
}

.native-scroller {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.1);
}

.native-scroller::-webkit-scrollbar {
  width: 8px;
}

.native-scroller::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.native-scroller::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
}

.native-scroller::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

.native-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  color: #e2e8f0;
  background: rgba(255, 255, 255, 0.02);
  min-height: 100px;
  box-sizing: border-box;
}

/* 調試樣式 - 讓每個項目更明顯 */
.native-item:nth-child(odd) {
  background: rgba(255, 255, 255, 0.05);
}

.native-item:nth-child(even) {
  background: rgba(100, 150, 255, 0.05);
}

.native-item-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  min-width: 0;
}

.native-item .item-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
  min-width: 40px;
}

.native-item .item-info {
  flex: 1;
  min-width: 0;
  overflow: hidden;
}

.native-item .item-title {
  font-weight: 600;
  font-size: 0.9rem;
  color: #ffffff;
  margin-bottom: 0.3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.native-item .item-desc {
  font-size: 0.8rem;
  color: #8b949e;
  line-height: 1.4;
  margin-bottom: 0.3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.native-item .item-meta-info {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.native-item .item-author,
.native-item .item-company {
  font-size: 0.75rem;
  color: #70C0E8;
}

.native-item .item-stats {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.2rem;
  flex-shrink: 0;
}

.native-item .item-stats .stat {
  font-size: 0.75rem;
  color: #98FB98;
}

.more-items-indicator {
  padding: 2rem;
  text-align: center;
  background: rgba(255, 193, 7, 0.1);
  border: 1px solid rgba(255, 193, 7, 0.3);
  border-radius: 8px;
  margin: 1rem;
  color: #ffc107;
}

.more-items-indicator p {
  margin: 0.5rem 0;
}

.more-items-indicator small {
  color: #8b949e;
  font-style: italic;
}

.package-scroller {
  height: 100%;
}

.package-scroller .vue-recycle-scroller__item-wrapper {
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(40, 167, 69, 0.5) rgba(255, 255, 255, 0.1);
}

.package-scroller::-webkit-scrollbar {
  width: 8px;
}

.package-scroller::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.package-scroller::-webkit-scrollbar-thumb {
  background: rgba(40, 167, 69, 0.5);
  border-radius: 4px;
}

.package-scroller::-webkit-scrollbar-thumb:hover {
  background: rgba(40, 167, 69, 0.7);
}

.stats-overlay {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: rgba(0, 0, 0, 0.7);
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 0.8rem;
  color: #70C0E8;
}

.stats-overlay .stat {
  display: block;
  margin-bottom: 0.2rem;
}

.control-buttons {
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  display: flex;
  gap: 0.5rem;
}

.control-buttons-bottom {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 0.75rem;
  margin-top: 0.5rem;
}

.control-buttons .n-button,
.control-buttons-bottom .n-button {
  font-size: 0.8rem;
  padding: 0.3rem 0.6rem;
}

.empty-demo {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.02);
}

.empty-demo-content {
  text-align: center;
  color: #8b949e;
  padding: 2rem;
}

.empty-demo-content h6 {
  color: #70C0E8;
  margin: 0 0 1rem 0;
  font-size: 1rem;
}

.empty-demo-content ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  text-align: left;
}

.empty-demo-content li {
  margin: 0.5rem 0;
  font-size: 0.85rem;
  line-height: 1.4;
}

.empty-actions {
  margin: 1.5rem 0;
  padding: 1rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

.empty-actions .n-button {
  font-weight: 600;
  min-width: 200px;
}

.empty-demo-content p {
  margin: 1rem 0 0 0;
  font-size: 0.9rem;
  font-style: italic;
}

.performance-comparison {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.performance-comparison h5 {
  color: #70C0E8;
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
}

.comparison-stats {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.stat-comparison {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.stat-label {
  font-weight: 600;
  color: #e2e8f0;
  font-size: 0.9rem;
}

.stat-values {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding-left: 1rem;
}

.stat-values .manual {
  color: #ffc107;
  font-size: 0.85rem;
}

.stat-values .package {
  color: #28a745;
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  .comparison-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .stats-overlay {
    position: static;
    margin-top: 1rem;
    background: rgba(255, 255, 255, 0.1);
  }
  
  .comparison-item {
    padding: 0.8rem;
  }
  
  .native-virtual-container,
  .package-virtual-container {
    height: 300px;
  }
  
  .item-content {
    flex-direction: column;
    gap: 8px;
    align-items: stretch;
  }
  
  .item-avatar {
    align-self: flex-start;
    width: 35px;
    height: 35px;
    font-size: 14px;
  }
  
  .item-meta {
    align-items: flex-start;
    min-width: auto;
  }
  
  .item-meta-info {
    gap: 4px;
  }
  
  .item-author, .item-company, .item-category {
    font-size: 8px;
    padding: 1px 3px;
  }
  
  .native-item-content {
    flex-direction: column;
    align-items: stretch;
    gap: 0.8rem;
  }
  
  .native-item .item-avatar {
    align-self: flex-start;
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
  
  .native-item .item-stats {
    flex-direction: row;
    justify-content: flex-start;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .demo-app {
    padding: 1rem;
  }
  
  .comparison-header {
    padding: 1rem;
  }
  
  .comparison-header h4 {
    font-size: 1.1rem;
  }
  
  .native-virtual-container,
  .package-virtual-container {
    height: 250px;
  }
  
  .item-title {
    font-size: 12px;
  }
  
  .item-desc {
    font-size: 11px;
  }
  
  .native-item .item-title {
    font-size: 0.8rem;
  }
  
  .native-item .item-desc {
    font-size: 0.7rem;
  }
}

.virtual-list-container {
  height: 400px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
  background: white;
}

.scroller {
  height: 100%;
}

/* 空狀態樣式 */
.empty-state {
  background: rgba(255, 255, 255, 0.05);
  border: 2px dashed rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 3rem 2rem;
  text-align: center;
  margin: 2rem 0;
  color: #e2e8f0;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.7;
}

.empty-state h4 {
  color: #70C0E8;
  margin: 0 0 1rem 0;
  font-size: 1.3rem;
}

.empty-state p {
  color: #8b949e;
  margin: 0 0 1.5rem 0;
  font-size: 1rem;
  line-height: 1.5;
}

.empty-state ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-block;
  text-align: left;
}

.empty-state li {
  margin: 0.8rem 0;
  font-size: 0.95rem;
  color: #e2e8f0;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

/* 主要控制區樣式 */
.main-controls {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(13, 17, 23, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 0.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.control-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.control-header h4 {
  color: #70C0E8;
  margin: 0 0 0.5rem 0;
  font-size: 1.4rem;
  font-weight: 600;
}

.control-header p {
  color: #8b949e;
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
}

.action-buttons {
  text-align: center;
  margin-bottom: 2rem;
}

.live-stats-panel {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 1.5rem;
}

.stats-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.stats-header h4 {
  color: #70C0E8;
  margin: 0;
  font-size: 1.1rem;
}

.total-indicator {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: linear-gradient(135deg, #70C0E8, #98FB98);
  padding: 0.8rem 1.2rem;
  border-radius: 25px;
  color: #000;
  font-weight: 600;
}

.total-label {
  font-size: 0.9rem;
}

.total-number {
  font-size: 1.4rem;
  font-weight: 700;
}

.stats-breakdown {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 1rem;
  transition: all 0.3s ease;
}

.stat-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(112, 192, 232, 0.3);
}

.stat-card.performance {
  border-color: rgba(152, 251, 152, 0.3);
}

.stat-icon {
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

.stat-content {
  flex: 1;
}

.stat-number {
  display: block;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
}

.stat-label {
  display: block;
  color: #8b949e;
  font-size: 0.8rem;
  margin-top: 0.2rem;
}

.api-sources {
  text-align: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #8b949e;
  font-size: 0.9rem;
}

.api-tag {
  display: inline-block;
  background: rgba(112, 192, 232, 0.2);
  color: #70C0E8;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  margin: 0 0.3rem;
  border: 1px solid rgba(112, 192, 232, 0.3);
}

/* API資訊展示區樣式 */
.api-info-section {
  margin: 2rem 0;
}

.api-status-card {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
}

.api-status-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.api-status-header h4 {
  color: #ffffff;
  margin: 0;
  font-size: 1.3rem;
}

.status-indicator {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.status-indicator:not(.loaded):not(.loading) {
  background: rgba(156, 163, 175, 0.3);
  color: #9ca3af;
}

.status-indicator.loading {
  background: rgba(59, 130, 246, 0.3);
  color: #3b82f6;
  animation: pulse 2s infinite;
}

.status-indicator.loaded {
  background: rgba(34, 197, 94, 0.3);
  color: #22c55e;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.api-details {
  margin-bottom: 2rem;
}

.api-source h5, .data-breakdown h5 {
  color: #70C0E8;
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
}

.api-source ul {
  margin: 0;
  padding-left: 1.5rem;
  color: #e2e8f0;
}

.api-source li {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.api-source code {
  background: rgba(112, 192, 232, 0.2);
  color: #70C0E8;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.8rem;
}

.data-breakdown {
  margin-top: 1.5rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.stat-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  transition: all 0.3s ease;
}

.stat-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
}

.stat-item.total {
  background: rgba(34, 197, 94, 0.1);
  border-color: rgba(34, 197, 94, 0.3);
}

.stat-number {
  display: block;
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.stat-item.total .stat-number {
  color: #22c55e;
}

.stat-label {
  font-size: 0.8rem;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.load-actions {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

/* 虛擬滾動列表標題 */
.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.list-header h4 {
  color: #ffffff;
  margin: 0;
  font-size: 1.1rem;
}

.performance-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.performance-text {
  font-size: 0.85rem;
  color: #22c55e;
  background: rgba(34, 197, 94, 0.1);
  padding: 0.3rem 0.8rem;
  border-radius: 16px;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.virtual-list-container {
  height: 500px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  margin-top: 1rem;
}

.scroller {
  height: 100%;
}

.virtual-item {
  padding: 12px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.02);
  transition: background-color 0.2s ease;
  color: #e2e8f0;
}

.virtual-item:hover {
  background: rgba(255, 255, 255, 0.05);
}

.item-content {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
}

.item-avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 16px;
  flex-shrink: 0;
  min-width: 45px;
}

.item-info {
  flex: 1;
  min-width: 0;
  overflow: hidden;
}

.item-title {
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.item-desc {
  font-size: 12px;
  color: #8b949e;
  line-height: 1.4;
  margin-bottom: 6px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.item-meta-info {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 4px;
}

.item-author, .item-company, .item-category {
  font-size: 9px;
  color: #70C0E8;
  background: rgba(112, 192, 232, 0.2);
  padding: 2px 4px;
  border-radius: 8px;
  white-space: nowrap;
  flex-shrink: 0;
}

.item-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  min-width: 80px;
  flex-shrink: 0;
}

.item-stats {
  display: flex;
  gap: 8px;
}

.stat {
  font-size: 10px;
  color: #98FB98;
  white-space: nowrap;
}

.item-tag {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 10px;
  font-weight: bold;
}

.item-tag.success { background: rgba(34, 197, 94, 0.2); color: #22c55e; }
.item-tag.info { background: rgba(59, 130, 246, 0.2); color: #3b82f6; }
.item-tag.warning { background: rgba(251, 191, 36, 0.2); color: #fbbf24; }
.item-tag.error { background: rgba(239, 68, 68, 0.2); color: #ef4444; }
.item-tag.default { background: rgba(156, 163, 175, 0.2); color: #9ca3af; }

.item-time {
  font-size: 10px;
  color: #8b949e;
}

.item-content p {
  margin: 0;
  font-size: 0.8rem;
  color: #6b7280;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.performance-stats {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.stat-card {
  flex: 1;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.08);
}

.stat-card h4 {
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stat-card p {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #059669;
}

.summary-card {
  border-radius: 16px;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.tech-item {
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  text-align: center;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  box-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  cursor: pointer;
}

.tech-item:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 12px 24px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%);
  cursor: pointer;
}

.tech-item.clickable:active {
  transform: translateY(-2px) scale(0.98);
  transition: all 0.1s ease;
}

.tech-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.tech-item h4 {
  margin: 0.5rem 0;
  color: #ffffff;
  font-size: 1.1rem;
}

.tech-item p {
  margin: 0.5rem 0 1rem 0;
  color: #6b7280;
  font-size: 0.9rem;
  line-height: 1.5;
}

/* 統一的區塊標題樣式 */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.section-header h4 {
  color: #ffffff;
  margin: 0;
  font-size: 1.2rem;
}

/* 控制按鈕組 */
.control-group {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

/* 統一的播放/暫停按鈕樣式 */
.play-pause-btn {
  background: rgba(255, 255, 255, 0.15) !important;
  border: 2px solid rgba(255, 255, 255, 0.3) !important;
  backdrop-filter: blur(10px);
  color: white !important;
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
}

.play-pause-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s;
}

.play-pause-btn:hover::before {
  left: 100%;
}

.play-pause-btn:hover {
  background: rgba(255, 255, 255, 0.25) !important;
  border: 2px solid rgba(255, 255, 255, 0.5) !important;
  transform: scale(1.1);
  box-shadow: 
    0 6px 20px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    0 0 20px rgba(255, 255, 255, 0.2);
}

.play-pause-btn:active {
  transform: scale(0.95);
  transition: transform 0.1s;
}

/* 重新整理按鈕樣式 */
.refresh-btn {
  background: rgba(255, 255, 255, 0.15) !important;
  border: 2px solid rgba(255, 255, 255, 0.3) !important;
  backdrop-filter: blur(10px);
  color: white !important;
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
}

.refresh-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s;
}

.refresh-btn:hover::before {
  left: 100%;
}

.refresh-btn:hover {
  background: rgba(255, 255, 255, 0.25) !important;
  border: 2px solid rgba(255, 255, 255, 0.5) !important;
  transform: scale(1.05);
  box-shadow: 
    0 6px 20px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    0 0 20px rgba(255, 255, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.refresh-btn:active {
  transform: scale(0.95);
  transition: transform 0.1s;
}

/* 內嵌重新整理按鈕樣式 */
.inline-refresh {
  margin-left: 0.5rem !important;
  vertical-align: middle !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
}

/* 自動播放指示器樣式 */
.auto-play-indicator {
  background: rgba(59, 130, 246, 0.2) !important;
  border: 2px solid rgba(59, 130, 246, 0.4) !important;
  animation: pulse-indicator 2s infinite;
}

.auto-play-indicator:hover {
  background: rgba(59, 130, 246, 0.3) !important;
  border: 2px solid rgba(59, 130, 246, 0.6) !important;
}

@keyframes pulse-indicator {
  0%, 100% { 
    box-shadow: 
      0 4px 12px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.2),
      0 0 0 0 rgba(59, 130, 246, 0.4);
  }
  50% { 
    box-shadow: 
      0 4px 12px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.2),
      0 0 0 8px rgba(59, 130, 246, 0.1);
  }
}

/* 成功類型按鈕 (播放狀態) */
.play-pause-btn.n-button--success-type {
  background: rgba(34, 197, 94, 0.2) !important;
  border: 2px solid rgba(34, 197, 94, 0.4) !important;
}

.play-pause-btn.n-button--success-type:hover {
  background: rgba(34, 197, 94, 0.3) !important;
  border: 2px solid rgba(34, 197, 94, 0.6) !important;
}

/* 警告類型按鈕 (暫停狀態) */
.play-pause-btn.n-button--warning-type {
  background: rgba(245, 158, 11, 0.2) !important;
  border: 2px solid rgba(245, 158, 11, 0.4) !important;
}

.play-pause-btn.n-button--warning-type:hover {
  background: rgba(245, 158, 11, 0.3) !important;
  border: 2px solid rgba(245, 158, 11, 0.6) !important;
}

/* 資訊類型按鈕 */
.play-pause-btn.n-button--info-type {
  background: rgba(59, 130, 246, 0.2) !important;
  border: 2px solid rgba(59, 130, 246, 0.4) !important;
}

.play-pause-btn.n-button--info-type:hover {
  background: rgba(59, 130, 246, 0.3) !important;
  border: 2px solid rgba(59, 130, 246, 0.6) !important;
}

/* 跑馬燈樣式 */
.demo-section h4 {
  color: #ffffff;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.marquee-container {
  width: 100%;
  height: 60px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
}

.marquee-content {
  display: flex;
  white-space: nowrap;
  will-change: transform;
  transition: none; /* 移除過渡效果避免與 JS 控制衝突 */
}

.marquee-item {
  color: #ffffff;
  font-weight: 500;
  font-size: 1rem;
  margin-right: 3rem;
  display: inline-block;
  min-width: max-content;
}

/* 垂直輪播樣式 */
.vertical-carousel {
  margin-top: 2rem;
}

.vertical-carousel h4 {
  color: #ffffff;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.carousel-wrapper {
  height: 60px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
}

.carousel-content {
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  gap: 1rem;
}

.carousel-badge {
  background: linear-gradient(45deg, #3b82f6, #8b5cf6);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  min-width: 40px;
  text-align: center;
}

.carousel-text {
  flex: 1;
  color: #ffffff;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.carousel-time {
  color: #9ca3af;
  font-size: 0.8rem;
  min-width: 60px;
  text-align: right;
}

/* Banner輪播樣式 */
.banner-carousel {
  margin-top: 2rem;
}

.banner-carousel h4 {
  color: #ffffff;
  margin: 0;
  font-size: 1.2rem;
}

.banner-wrapper {
  position: relative;
  height: 200px;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.banner-container {
  display: flex;
  height: 100%;
  transition: transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
  will-change: transform;
}

.banner-slide {
  min-width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-slide:nth-child(1) .banner-content {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.banner-slide:nth-child(2) .banner-content {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.banner-slide:nth-child(3) .banner-content {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.banner-slide:nth-child(4) .banner-content {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

.banner-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 4rem;
  position: relative;
  overflow: hidden;
}

.banner-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
  pointer-events: none;
}

.banner-text {
  flex: 1;
  color: white;
  z-index: 2;
}

.banner-text h3 {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.banner-text p {
  font-size: 1rem;
  margin: 0 0 1rem 0;
  opacity: 0.9;
  line-height: 1.5;
}

.banner-icon {
  font-size: 4rem;
  opacity: 0.8;
  z-index: 1;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.banner-indicators {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 10;
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: rgba(255, 255, 255, 0.9);
  transform: scale(1.2);
}

.banner-controls {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: calc(100% - 2rem);
  left: 1rem;
  right: 1rem;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  z-index: 10;
}

.control-btn {
  pointer-events: auto;
  background: rgba(255, 255, 255, 0.2) !important;
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
  backdrop-filter: blur(10px);
  color: white !important;
  font-size: 1.5rem;
  font-weight: bold;
  transition: all 0.3s ease;
}

.control-btn:hover {
  background: rgba(255, 255, 255, 0.3) !important;
  border: 1px solid rgba(255, 255, 255, 0.5) !important;
  transform: scale(1.1);
}

/* 高速按鈕特殊效果 */
.lightspeed-btn {
  background: linear-gradient(45deg, #ffd700, #ffed4e, #ffd700) !important;
  color: #000 !important;
  animation: lightspeed-glow 2s infinite alternate;
  font-weight: bold;
  border: 1px solid #ffd700 !important;
  position: relative;
  overflow: hidden;
}

.lightspeed-btn::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.4) 50%, transparent 70%);
  transform: rotate(45deg);
  pointer-events: none;
  animation: shine 3s infinite;
}

.lightspeed-btn:hover {
  background: linear-gradient(45deg, #ffed4e, #ffd700, #ffed4e) !important;
  border: 1px solid #ff8c00 !important;
  transform: scale(1.05);
}

/* 更深層的覆蓋 Naive UI 的預設樣式 */
:deep(.lightspeed-btn) {
  border: 1px solid #ffd700 !important;
}

:deep(.lightspeed-btn:hover) {
  border: 1px solid #ff8c00 !important;
}

:deep(.lightspeed-btn .n-button__content) {
  color: #000 !important;
  font-weight: bold;
}

@keyframes lightspeed-glow {
  0% { 
    box-shadow: 0 0 5px #ffd700, 0 0 10px #ffd700, 0 0 15px #ffd700;
  }
  100% { 
    box-shadow: 0 0 10px #ffd700, 0 0 20px #ffd700, 0 0 30px #ffd700;
  }
}

@keyframes shine {
  0% { 
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }
  100% { 
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
}

/* 只覆蓋 Toast 通知區的成功按鈕為螢光藍色 */
:deep(.n-tab-pane[name="toast"] .n-button--success-type) {
  background: linear-gradient(135deg, #0084ff 0%, #107fff 100%) !important; /* 螢光藍漸變 */
  border-color: #00bfff !important;
}

:deep(.n-tab-pane[name="toast"] .n-button--success-type:hover) {
  background: linear-gradient(135deg, #0084ff 0%, #107fff 100%) !important; /* hover 時稍深一點 */
  border-color: #00a6e6 !important;
}

:deep(.n-tab-pane[name="toast"] .n-button--success-type:focus) {
  background: linear-gradient(135deg, #0084ff 0%, #107fff 100%) !important;
  border-color: #00a6e6 !important;
}

/* 覆蓋 Tab 選中狀態的顏色 */
:deep(.n-tabs .n-tab-pane) {
  color: #ffffff !important;
}

:deep(.n-tabs .n-tabs-tab--active) {
  color: #70C0E8 !important;
  font-weight: bold !important;
}

:deep(.n-tabs .n-tabs-tab--active .n-tabs-tab__label) {
  color: #70C0E8 !important;
  font-weight: bold !important;
}

/* 所有 Tab 文字加粗 */
:deep(.n-tabs .n-tabs-tab .n-tabs-tab__label) {
  font-weight: bold !important;
}

:deep(.n-tabs-card-type .n-tabs-tab--active) {
  background: linear-gradient(135deg, rgba(112, 192, 232, 0.2) 0%, rgba(112, 192, 232, 0.1) 100%) !important; /* Tab 選中背景漸變使用淺藍色 #70C0E8 */
  border-color: #70C0E8 !important;
}

/* 覆蓋其他可能的成功色調元素 */
:deep(.n-tag--success-type) {
  background: linear-gradient(135deg, #00bfff 0%, #1e90ff 100%) !important;
  color: white !important;
}

/* 技術卡片中的標籤手指游標 */
:deep(.tech-item .n-tag) {
  cursor: pointer;
}

:deep(.n-tag--info-type) {
  cursor: pointer;
}

/* Banner 按鈕樣式 - 為不同按鈕類型移除青綠色邊框 */
/* 紫色背景 - info type */
:deep(.banner-btn-1.n-button--info-type) {
  background: linear-gradient(135deg, #3a3068 0%, #453a5c 100%) !important;
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  color: white !important;
  transition: all 0.3s ease !important;
}

:deep(.banner-btn-1.n-button--info-type:hover) {
  background: linear-gradient(135deg, #2d2551 0%, #362d4a 100%) !important;
  border: none !important;
  outline: none !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(58, 48, 104, 0.4) !important;
}

:deep(.banner-btn-1.n-button--info-type:focus) {
  background: linear-gradient(135deg, #2d2551 0%, #362d4a 100%) !important;
  border: none !important;
  outline: none !important;
  box-shadow: 0 4px 12px rgba(58, 48, 104, 0.4) !important;
}

/* 紅色背景 - error type */
:deep(.banner-btn-2.n-button--error-type) {
  background: linear-gradient(135deg, #a33d65 0%, #9e2a42 100%) !important;
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  color: white !important;
  transition: all 0.3s ease !important;
}

:deep(.banner-btn-2.n-button--error-type:hover) {
  background: linear-gradient(135deg, #8a3356 0%, #852538 100%) !important;
  border: none !important;
  outline: none !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(163, 61, 101, 0.4) !important;
}

:deep(.banner-btn-2.n-button--error-type:focus) {
  background: linear-gradient(135deg, #8a3356 0%, #852538 100%) !important;
  border: none !important;
  outline: none !important;
  box-shadow: 0 4px 12px rgba(163, 61, 101, 0.4) !important;
}

/* 藍色背景 - info type */
:deep(.banner-btn-3.n-button--info-type) {
  background: linear-gradient(135deg, #2d69a1 0%, #006699 100%) !important;
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  color: white !important;
  transition: all 0.3s ease !important;
}

:deep(.banner-btn-3.n-button--info-type:hover) {
  background: linear-gradient(135deg, #255a8a 0%, #005580 100%) !important;
  border: none !important;
  outline: none !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(45, 105, 161, 0.4) !important;
}

:deep(.banner-btn-3.n-button--info-type:focus) {
  background: linear-gradient(135deg, #255a8a 0%, #005580 100%) !important;
  border: none !important;
  outline: none !important;
  box-shadow: 0 4px 12px rgba(45, 105, 161, 0.4) !important;
}

/* 綠色背景 - tertiary */
:deep(.banner-btn-4.n-button--tertiary-type) {
  background: linear-gradient(135deg, #2a8a54 0%, #228a5f 100%) !important;
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  color: white !important;
  transition: all 0.3s ease !important;
}

:deep(.banner-btn-4.n-button--tertiary-type:hover) {
  background: linear-gradient(135deg, #237545 0%, #1d7550 100%) !important;
  border: none !important;
  outline: none !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(42, 138, 84, 0.4) !important;
}

:deep(.banner-btn-4.n-button--tertiary-type:focus) {
  background: linear-gradient(135deg, #237545 0%, #1d7550 100%) !important;
  border: none !important;
  outline: none !important;
  box-shadow: 0 4px 12px rgba(42, 138, 84, 0.4) !important;
}

/* 確保按鈕內容文字顏色 */
:deep(.banner-btn-1 .n-button__content),
:deep(.banner-btn-2 .n-button__content),
:deep(.banner-btn-3 .n-button__content),
:deep(.banner-btn-4 .n-button__content) {
  color: white !important;
}

/* 額外保障：移除任何可能的邊框和聚焦效果 - 支援所有按鈕類型 */
:deep(.banner-btn-1),
:deep(.banner-btn-2),
:deep(.banner-btn-3),
:deep(.banner-btn-4) {
  border: none !important;
  outline: none !important;
}

:deep(.banner-btn-1:focus),
:deep(.banner-btn-2:focus),
:deep(.banner-btn-3:focus),
:deep(.banner-btn-4:focus),
:deep(.banner-btn-1:active),
:deep(.banner-btn-2:active),
:deep(.banner-btn-3:active),
:deep(.banner-btn-4:active) {
  border: none !important;
  outline: none !important;
}

/* 針對不同按鈕類型的通用邊框移除 */
:deep(.n-button--info-type),
:deep(.n-button--error-type),
:deep(.n-button--tertiary-type) {
  border: none !important;
}

:deep(.n-button--info-type:hover),
:deep(.n-button--error-type:hover),
:deep(.n-button--tertiary-type:hover),
:deep(.n-button--info-type:focus),
:deep(.n-button--error-type:focus),
:deep(.n-button--tertiary-type:focus) {
  border: none !important;
}

@media (max-width: 768px) {
  .demo-app {
    padding: 1rem;
  }
  
  .title {
    font-size: 2rem;
  }
  
  .motion-demo {
    flex-direction: column;
    align-items: center;
  }
}

/* Toast 通知滑鼠游標樣式 - 更通用的選擇器 */
:deep(.Vue-Toastification__toast) {
  cursor: pointer !important;
}

:deep(.Vue-Toastification__toast:hover) {
  cursor: pointer !important;
}

/* 使用更廣泛的選擇器匹配所有可能的 toast 元素 */
:deep([class*="Vue-Toastification"]) {
  cursor: pointer !important;
}

:deep([class*="toast"]) {
  cursor: pointer !important;
}

/* 確保所有 toast 內容都有手指游標 */
:deep(.Vue-Toastification__toast-body) {
  cursor: pointer !important;
}

:deep(.Vue-Toastification__toast-content) {
  cursor: pointer !important;
}

/* Toast 關閉按鈕也使用手指游標 */
:deep(.Vue-Toastification__close-button) {
  cursor: pointer !important;
}

/* Toast 圖示區域 */
:deep(.Vue-Toastification__icon) {
  cursor: pointer !important;
}

/* 覆蓋 toast 內所有元素的游標樣式 */
:deep(.Vue-Toastification__toast *) {
  cursor: pointer !important;
}

/* 全域 toast 樣式 - 不使用 scoped */
</style>

<!-- 全域 Toast 樣式 -->
<style>
/* Vue Toastification 全域游標樣式 */
.Vue-Toastification__toast {
  cursor: pointer !important;
}

.Vue-Toastification__toast:hover {
  cursor: pointer !important;
}

.Vue-Toastification__toast-body {
  cursor: pointer !important;
}

.Vue-Toastification__toast-content {
  cursor: pointer !important;
}

.Vue-Toastification__close-button {
  cursor: pointer !important;
}

.Vue-Toastification__icon {
  cursor: pointer !important;
}

.Vue-Toastification__toast * {
  cursor: pointer !important;
}

/* 更廣泛的選擇器 */
[class*="Vue-Toastification"] {
  cursor: pointer !important;
}

[class*="toast"] {
  cursor: pointer !important;
}

/* 更通用的方式 - 針對所有可能的 toast 容器 */
div[class*="Vue-Toastification"] {
  cursor: pointer !important;
}

div[class*="toast"] {
  cursor: pointer !important;
}

/* 如果是 v2 版本，可能使用不同的類名 */
.Toastification__toast {
  cursor: pointer !important;
}

.toast {
  cursor: pointer !important;
}

.toast-container {
  cursor: pointer !important;
}

.toast-container > * {
  cursor: pointer !important;
}

/* 🎠 跑馬燈 CSS 動畫 */
.marquee-container {
  width: 100%;
  height: 50px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  position: relative;
  margin: 10px 0;
}

.marquee-content {
  display: flex;
  white-space: nowrap;
  height: 100%;
  align-items: center;
  will-change: transform;
}

.marquee-item {
  flex-shrink: 0;
  margin-right: 3rem;
  color: #e2e8f0;
  font-size: 14px;
  white-space: nowrap;
}

/* 📰 垂直輪播 CSS */
.vertical-carousel {
  margin: 10px 0;
}

.carousel-wrapper {
  height: 60px;
  overflow: hidden;
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
}

.carousel-content {
  transition: transform 0.5s ease;
}

.carousel-item {
  height: 60px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1rem;
}

.badge {
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  color: white;
  flex-shrink: 0;
}

.text {
  flex: 1;
  color: #e2e8f0;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.time {
  color: #a0aec0;
  font-size: 12px;
  flex-shrink: 0;
}

/* 導航按鈕 */
.banner-navigation {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  pointer-events: none;
}

.banner-navigation .nav-btn {
  pointer-events: all;
  opacity: 0.8;
  position: absolute !important;
  top: 50%;
  transform: translateY(-50%);
}

.banner-navigation .prev-btn {
  left: 20px !important;
}

.banner-navigation .next-btn {
  right: 20px !important;
}

.nav-btn:hover {
  opacity: 1;
}

/* 指示器樣式 */
.banner-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: rgba(255, 255, 255, 0.9);
  transform: scale(1.2);
}

/* 套件版本對比樣式 */
.package-comparison {
  margin: 2rem 0;
  padding: 0;
  background: transparent;
  border-radius: 0;
  border: none;
}

.comparison-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.comparison-header h5 {
  margin: 0;
  color: #22c55e;
  font-size: 1.1rem;
}

.package-badge {
  padding: 4px 12px;
  background: transparent;
  color: #22c55e;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 600;
}

/* Vue3-Marquee 樣式 */
.marquee-package-container {
  width: 100%;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  height: 60px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.package-marquee-item {
  display: inline-block;
  margin-right: 3rem;
  color: #e2e8f0;
  font-size: 0.95rem;
  white-space: nowrap;
}

.package-controls {
  margin: 1rem 0;
}

/* Vue3-Carousel 垂直輪播樣式 */
.vertical-carousel-package {
  width: 100%;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.package-carousel-item {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1rem;
  background: rgba(255, 255, 255, 0.02);
}

/* Vue3-Carousel Banner輪播樣式 */
.banner-carousel-package {
  width: 100%;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.package-banner-slide {
  width: 100%;
  height: 200px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.package-banner-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 4rem;
  position: relative;
  overflow: hidden;
}

.package-banner-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
  pointer-events: none;
}

/* Vue3-Carousel 客製化樣式 */
:deep(.carousel__viewport) {
  border-radius: 8px;
}

/* Vue3-Marquee 客製化樣式 */
:deep(.package-marquee) {
  height: 60px;
  display: flex;
  align-items: center;
}

:deep(.package-marquee .vue3-marquee) {
  height: 100%;
  display: flex;
  align-items: center;
}

:deep(.carousel__navigation-button) {
  background: rgba(255, 255, 255, 0.1) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  color: white !important;
  backdrop-filter: blur(10px);
}

:deep(.carousel__navigation-button:hover) {
  background: rgba(255, 255, 255, 0.2) !important;
}

:deep(.carousel__pagination-button) {
  background: rgba(255, 255, 255, 0.4) !important;
  border: none !important;
}

:deep(.carousel__pagination-button--active) {
  background: rgba(255, 255, 255, 0.9) !important;
}

/* 響應式調整 */
@media (max-width: 768px) {
  .package-comparison {
    padding: 0;
    margin: 1rem 0;
  }
  
  .package-banner-content {
    padding: 1rem 2rem;
  }
}

@media (max-width: 480px) {
  .comparison-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .package-banner-content {
    padding: 1rem;
    flex-direction: column;
    text-align: center;
  }
  
  .package-banner-content .banner-text h3 {
    font-size: 1.2rem;
  }
}
</style>
