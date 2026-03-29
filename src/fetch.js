// 在專案根目錄：
// 1) 另開終端機：npm run api   （啟動本機 API，見 server/local-api.mjs）
// 2) 再執行：node src/fetch.js
// （需 Node 18+，內建 fetch）

import { performance } from "node:perf_hooks";

const API_URL = "http://127.0.0.1:3001/api/user";

const t0 = performance.now();
const stamp = () => `${(performance.now() - t0).toFixed(1)}ms`;

console.log(`[自開始 ${stamp()}] 第一行（同步）`);

fetch(API_URL)
  .then((res) => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  })
  .then((user) => {
    const now = performance.now();
    console.log(
      `[自開始 ${stamp()}] fetch 完成（非同步）｜距離「第二行」約 ${(now - tAfterSecondLine).toFixed(1)}ms`,
      user,
    );
  })
  .catch((err) => {
    console.error(`[自開始 ${stamp()}] 請求失敗:`, err.message);
    console.error("（請先在同一台電腦執行 npm run api 再跑此檔）");
  });
console.log("before getFakePerson", performance.now().toFixed(1));
const getFakePerson = async () => {
  try {
    const res = await fetch(API_URL);
    const user = await res.json();
    console.log("getFakePerson user:", user);
  } catch (err) {
    console.error(err);
  }
};
void getFakePerson();
console.log("after getFakePerson", performance.now().toFixed(1));

const tAfterSecondLine = performance.now();
console.log(`[自開始 ${stamp()}] 第二行（同步；不會等 fetch）`);
