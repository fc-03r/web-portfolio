<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>よだかの星 – Text Demo</title>
<link rel="stylesheet" href="style.css">
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@700&family=Sawarabi+Mincho&display=swap" rel="stylesheet">

</head>

<body>
<div id="title">
  <span id="title-main">よだかの星</span>
  <span id="title-sub">宮沢賢治</span>
</div>
<!-- フェード演出 -->
<div id="fade"></div>

<!-- ノベルゲーム画面（背景入り） -->
<div id="game-screen">
    <div id="textbox">
        <span id="text"></span>
        <span id="cursor">▮</span>
    </div>
</div>

<!-- 分割したテキストファイルを読み込む -->
  <script src="text01.js"></script>
  <script src="text02.js"></script>
  <script src="text03.js"></script>
  <script src="text04.js"></script>
  <script src="text05.js"></script>
  <script src="text06.js"></script>
  <script src="text07.js"></script>
  <script src="text08.js"></script>
  <script src="text09.js"></script>
  <script src="text10.js"></script>

  <!-- メイン処理 -->
  <script src="main.js"></script>
</body>
</html>