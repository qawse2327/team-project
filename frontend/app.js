@'
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", async () => {
    try {
        const res = await fetch("http://localhost:3000/api/message");
        const data = await res.json();
        result.textContent = data.message;
    } catch (error) {
        result.textContent = "백엔드 아직 없음 / 연결 실패";
        console.error(error);
    }
});
'@ | Set-Content .\frontend\app.js