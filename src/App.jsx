import { useState } from 'react'
import './App.css'

function App() {
  const [letMessage, setLetMessage] = useState("")
  const [constMessage, setConstMessage] = useState("")

  const testLet = () => {
    // 💡 宣告為 let：允許修改
    let score = 100;
    try {
      score = 200; // 重新賦值
      setLetMessage(`✅ 成功！變數 score 原本是 100，現在被修改為 ${score}。`);
    } catch (error) {
      setLetMessage(`❌ 發生錯誤：${error.message}`);
    }
  }

  const testConst = () => {
    // 💡 宣告為 const：不允許修改
    const MAX_LIVES = 3;
    try {
      // 嘗試重新賦值，這裡會觸發 TypeError
      MAX_LIVES = 4;
      setConstMessage(`✅ 成功修改為 ${MAX_LIVES}`);
    } catch (error) {
      // 捕捉到底層錯誤並顯示在畫面上
      setConstMessage(`❌ 發生錯誤：${error.message} (無法重新賦值給 const)`);
    }
  }

  return (
    <main className="container">
      <header className="header">
        <h1><code>let</code> vs <code>const</code></h1>
        <p>點擊下方按鈕，觀察 JavaScript 中變數與常數受到修改時的反應！</p>
      </header>

      <div className="layout">
        <section className="card let-card">
          <h2><code>let</code> 變數</h2>
          <p>宣告後可以被<strong>重新賦值</strong>的變數。</p>
          <pre className="code-block">
            <code>
              {`let score = 100;\nscore = 200; // ✅ 這是允許的`}
            </code>
          </pre>
          <button className="action-btn" onClick={testLet}>測試修改 Let</button>
          {letMessage && <div className="message success">{letMessage}</div>}
        </section>

        <section className="card const-card">
          <h2><code>const</code> 常數</h2>
          <p>宣告後一旦給定值，就<strong>不可重新賦值</strong>。</p>
          <pre className="code-block">
            <code>
              {`const MAX_LIVES = 3;\nMAX_LIVES = 4; // ❌ 發生錯誤`}
            </code>
          </pre>
          <button className="action-btn" onClick={testConst}>測試修改 Const</button>
          {constMessage && <div className="message error">{constMessage}</div>}
        </section>
      </div>
    </main>
  )
}

export default App
