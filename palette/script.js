document.querySelectorAll(".buttons button").forEach(button => {
  button.addEventListener("click", () => generatePalette(button.dataset.type));
});

function generatePalette(type) {
  const palette = document.getElementById("palette");
  palette.innerHTML = "";

  const colors = [];

  // 🎨 ボタンの種類ごとに生成ルールを分ける
  let numColors = 5; // デフォルト（ランダム）

  if (type === "complementary") {
    numColors = 2;
  } else if (type === "character") {
    numColors = 4;
  } else if (type === "grayscale") {
    numColors = 5;
  }

  for (let i = 0; i < numColors; i++) {
    colors.push(randomHexColor());
  }

  colors.forEach(color => {
    const colorBlock = document.createElement("div");
    colorBlock.className = "color-block";
    colorBlock.style.backgroundColor = color;

    const colorText = document.createElement("div");
    colorText.className = "color-text";
    colorText.textContent = color;
    colorText.style.color = getReadableTextColor(color);


    colorBlock.appendChild(colorText);
    palette.appendChild(colorBlock);
  });
}

// ✅ ランダムHEXカラー生成
function randomHexColor() {
  const random = Math.floor(Math.random() * 0xffffff);
  const hex = "#" + random.toString(16).padStart(6, "0");
  return hex;
}

// ✅ 背景色に応じて文字色（黒 or 白）を自動選択
function getReadableTextColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 125 ? "#000" : "#fff";
}
