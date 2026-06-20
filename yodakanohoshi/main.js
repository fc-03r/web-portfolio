// main.js — 完全自動タイプライター（全行自動送り）
document.addEventListener("DOMContentLoaded", () => {
  // --- テキスト配列を window から安全に取得して結合 ---
  const parts = [];
  for (let i = 1; i <= 10; i++) {
    const name1 = `text0${i}`;
    const name2 = `text${i}`;
    if (window[name1] && Array.isArray(window[name1])) {
      parts.push(...window[name1]);
    } else if (window[name2] && Array.isArray(window[name2])) {
      parts.push(...window[name2]);
    }
  }

  const allText = parts; // 結合済み配列

  const textSpan = document.getElementById("text");       // 表示用
  const cursor = document.getElementById("cursor");       // 点滅カーソル

  if (!textSpan) {
    console.error("必要な要素が見つかりません：#text が存在するか確認してください");
    return;
  }

  if (!allText || allText.length === 0) {
    textSpan.textContent = "（テキストが読み込まれていません）";
    return;
  }

  // --- 状態 ---
  let lineIndex = 0;
  let charIndex = 0;
  let typingIntervalId = null;
  const typingSpeed = 80;      // 1文字あたり ms
  const autoNextDelay = 500;   // 行表示完了後、次の行に自動で進むまでの待ち時間（ms）

  // --- タイプライター関数 ---
  function typeLine() {
    const line = allText[lineIndex] || "";
    charIndex = 0;
    textSpan.textContent = "";

    if (typingIntervalId) clearInterval(typingIntervalId);

    typingIntervalId = setInterval(() => {
      if (charIndex < line.length) {
        textSpan.textContent += line.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(typingIntervalId);
        typingIntervalId = null;
        // 一定時間後に次の行へ自動で進む
        setTimeout(() => {
          lineIndex++;
          if (lineIndex < allText.length) {
            typeLine();
          } else {
            textSpan.textContent += "\n（終わり）";
            if (cursor) cursor.style.opacity = "0"; // カーソル消去
          }
        }, autoNextDelay);
      }
    }, typingSpeed);
  }

  // --- 最初の行を表示（開始） ---
  typeLine();
});
