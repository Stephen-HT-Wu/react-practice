import { useEffect, useRef } from "react";
import "./App.css";
import { StateIsolationDemo } from "./StateIsolationDemo.jsx";

function App() {
  const varDemoRef = useRef(null);
  const letDemoRef = useRef(null);

  useEffect(() => {
    const container = varDemoRef.current;
    if (!container) return;
    container.replaceChildren();
    let div;
    for (var i = 0; i < 5; i++) {
      div = document.createElement("button");
      div.type = "button";
      div.className = "demo-tile";
      div.textContent = String(i + 1);
      div.onclick = function () {
        alert("This is box #" + i);
      };
      container.appendChild(div);
    }
  }, []);

  useEffect(() => {
    const container = letDemoRef.current;
    if (!container) return;
    container.replaceChildren();
    for (let i = 0; i < 5; i++) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "demo-tile";
      btn.textContent = String(i + 1);
      btn.onclick = function () {
        alert("This is box #" + i);
      };
      container.appendChild(btn);
    }
  }, []);

  return (
    <main className="container">
      <header className="header">
        <h1>let · const · 閉包</h1>
        <p>
          比對 <code>var</code> 與 <code>let</code> 在迴圈裡的繫結差異（沿用經典
          DOM + <code>onclick</code> 寫法示範）。
        </p>
      </header>

      <div className="layout">
        <section className="card let-card" aria-labelledby="var-title">
          <h2 id="var-title">var 與閉包</h2>
          <p>
            <code>var i</code> 只有一個；點任何方塊時，handler
            看到的是迴圈結束後的 <code>i</code>。
          </p>
          <div className="code-block">
            <code>
              for (var i = 0; i &lt; 5; i++) {"{"}
              <br />
              {"  "}div.onclick = function () {"{"}
              <br />
              {"    "}alert(&quot;This is box #&quot; + i)
              <br />
              {"  "}
              {"}"}
              <br />
              {"}"}
            </code>
          </div>
          <p className="message error">
            五個按鈕點下去通常都會是 <strong>This is box #5</strong>
            （迴圈跑完後的 <code>i</code>）。
          </p>
          <div
            ref={varDemoRef}
            className="demo-tiles"
            role="group"
            aria-label="var 示範按鈕"
          />
        </section>

        <section className="card const-card" aria-labelledby="let-title">
          <h2 id="let-title">let 與區塊作用域</h2>
          <p>
            每次迭代 <code>let i</code> 都是新的繫結，因此點擊會對應到該次的{" "}
            <code>i</code>。
          </p>
          <div className="code-block">
            <code>
              for (let i = 0; i &lt; 5; i++) {"{"}
              <br />
              {"  "}div.onclick = function () {"{"}
              <br />
              {"    "}alert(&quot;This is box #&quot; + i)
              <br />
              {"  "}
              {"}"}
              <br />
              {"}"}
            </code>
          </div>
          <p className="message success">
            五個按鈕應分別為 <strong>#0～#4</strong>（與按鈕上的 1～5
            對應同一輪迭代）。
          </p>
          <div
            ref={letDemoRef}
            className="demo-tiles"
            role="group"
            aria-label="let 示範按鈕"
          />
        </section>
      </div>

      <section
        className="card state-card"
        aria-labelledby="state-title"
        style={{ marginTop: "2rem" }}
      >
        <h2 id="state-title">React state 是每個 component 實例獨立的</h2>
        <StateIsolationDemo />
      </section>
    </main>
  );
}

export default App;
