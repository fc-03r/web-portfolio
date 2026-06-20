<!DOCTYPE html> 
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ひだまりにゃんこカフェ</title>

    <!-- CSS -->
    <link rel="stylesheet" href="assets/css/base.css">
    <link rel="stylesheet" href="assets/css/animation.css">
    <link rel="stylesheet" href="assets/css/header.css">
    <link rel="stylesheet" href="assets/css/hero.css">
    <link rel="stylesheet" href="assets/css/concept.css">
    <link rel="stylesheet" href="assets/css/faq.css">
    <link rel="stylesheet" href="assets/css/services.css">
    <link rel="stylesheet" href="assets/css/news.css">
    <link rel="stylesheet" href="assets/css/contact.css">
    <link rel="stylesheet" href="assets/css/footer.css">
</head>
<body>

<?php include 'template-parts/animation.php'; ?>

<!-- アニメーション終了後に表示する部分 -->
<div id="main-content" style="display:none;">
    <?php include 'template-parts/header.php'; ?>
    <?php include 'template-parts/hero.php'; ?>
    <?php include 'template-parts/concept.php'; ?>
    <?php include 'template-parts/faq.php'; ?>
    <?php include 'template-parts/services.php'; ?>
    <?php include 'template-parts/news.php'; ?>
    <?php include 'template-parts/contact.php'; ?>
    <?php include 'template-parts/footer.php'; ?>

</div>

<!-- JS -->
<script src="assets/js/animation.js"></script>
<script src="assets/js/hero-slide.js"></script>
<script src="assets/js/header.js"></script>
<script src="assets/js/accordion.js"></script>

</body>
</html>
