/**
 * 本機練習用 API（零額外套件，只用 Node 內建 http）
 *
 * 另開一個終端機，在專案根目錄執行：npm run api
 * 再執行：node src/fetch.js
 */
import http from "node:http";

const PORT = 3001;
const JSON_HEADERS = {
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Origin": "*",
};

const server = http.createServer((req, res) => {
  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });
    res.end();
    return;
  }

  if (req.method === "GET" && req.url === "/api/user") {
    const body = JSON.stringify({
      id: 1,
      name: "本機練習使用者",
      email: "local@example.test",
      note: "這是 server/local-api.mjs 回傳的假資料",
    });
    res.writeHead(200, JSON_HEADERS);
    res.end(body);
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Not Found — 試試 GET /api/user\n");
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Local API: http://127.0.0.1:${PORT}/api/user`);
});
