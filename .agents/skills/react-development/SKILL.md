---
name: React Development Best Practices
description: Comprehensive guidelines for writing, structuring, and maintaining React code in this project.
---

# React 開發指南與最佳實踐 (React Custom Skill)

當你要求我為這個專案編寫或修改 React 程式碼時，我會自動套用這個 Skill 的規範來確保程式碼品質。

## 1. 元件 (Components)
- **優先使用 Function Components**：全面使用 Function Components 搭配 Hooks 開發，避免使用舊版的 Class Components。
- **單一職責原則**：每個檔案只放置一個主要的 Component。檔案名稱與 Component 名稱保持一致，並使用 PascalCase (例如 `UserCard.jsx`)。
- **乾淨的回傳**：如果回傳多個平行的 HTML 元素，請使用 Fragment `<>...</>` 包覆，減少不必要的 `div` 標籤。

## 2. 狀態與副作用 (State & Hooks)
- **Hooks 的抽離**：如果特定邏輯（例如資料流、視窗大小監聽器）在多個元件中重複使用，應將其抽離並建立為自訂 Hook (以 `use` 開頭，如 `useFetch`)，通常存放在 `src/hooks/` 資料夾內。
- **精確的 Dependency Array**：在使用 `useEffect`、`useCallback` 和 `useMemo` 時，務必確實填寫依賴陣列，避免無限迴圈。

## 3. 樣式與資源 (Styling & Assets)
- **樣式管理**：依賴 Vite 強大的處理能力，可以直接引入 CSS 檔案 (`import './styles.css'`) 或是使用 CSS Modules 來避免樣式互相污染。
- **靜態資源**：如需引入圖片，盡量透過模組化 `import` 載入 (`import logo from './logo.svg'`)，讓 Vite 幫忙優化。

## 4. 效能優化 (Performance)
- 當透過 `map()` 渲染陣列清單時，必須為每個元件加上唯一且穩定的 `key` 屬性 (盡量不要使用 array index)。
- 針對傳遞給子元件的回呼函式，適時使用 `useCallback` 避免造成子元件不必要的重新渲染。
- 只有當大量耗時的資料計算時，才使用 `useMemo`，不需過度優化。

## 5. 語意化與可及性 (Semantic HTML)
- 撰寫 JSX 時盡量使用具有語意的 HTML5 標籤 (如 `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`)，取代滿滿的 `<div>`。
