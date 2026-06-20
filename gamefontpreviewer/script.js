// 🎯 各要素を取得
const textInput = document.getElementById("textInput");
const fontSelect = document.getElementById("fontSelect");
const fontSize = document.getElementById("fontSize");
const fontWeight = document.getElementById("fontWeight");
const preview = document.getElementById("previewArea");

// 🔒 HTMLタグを無効化する関数（XSS対策）
function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")    // & を安全に
    .replace(/</g, "&lt;")     // < を安全に
    .replace(/>/g, "&gt;")     // > を安全に
    .replace(/"/g, "&quot;")   // " を安全に
    .replace(/'/g, "&#039;");  // ' を安全に
}

// 🔁 入力イベントでプレビュー更新
function updatePreview() {
  // 改行を <br> に変換しつつタグを無効化
  preview.innerHTML = escapeHtml(textInput.value).replace(/\n/g, '<br>');
  // 選ばれたフォントを反映
  preview.style.fontFamily = fontSelect.value;

  // スライダー値を反映
  preview.style.fontSize = fontSize.value + "px";
  preview.style.fontWeight = fontWeight.value;
}

// 💡 oninput：値が変更されるたびに反応（keyupよりも自然）
textInput.oninput = updatePreview;
fontSelect.oninput = updatePreview;
fontSize.oninput = updatePreview;
fontWeight.oninput = updatePreview;

// ✅ 初期表示も設定
fontSize.value = 42;    // 初期サイズ
fontWeight.value = 500; // 初期太さ
updatePreview();
