import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>歡迎使用 React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            計數器: {count}
          </button>
          <p>
            編輯 <code>src/App.jsx</code> 並儲存以測試熱更新
          </p>
        </div>
      </header>
    </div>
  )
}

export default App


