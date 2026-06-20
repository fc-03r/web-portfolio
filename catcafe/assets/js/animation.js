document.addEventListener("DOMContentLoaded", function () {

    const frames = ["cat_01.png","cat_02.png","cat_03.png","cat_04.png"];
    const img = document.getElementById("cat-frame");
    const container = document.getElementById("cat-animation");
    const main = document.getElementById("main-content");
    const header = document.getElementById("site-header");
    const basePath = "assets/img/";

    let index = 0;
    let repeat = 0;

    function playAnimation() {
        if(!img || !container || !main || !header) return;

        img.src = basePath + frames[index];
        index++;

        if(index >= frames.length){
            index = 0;
            repeat++;
        }

        if(repeat >= 2){

            container.style.transition = "opacity 1s ease";
            container.style.opacity = 0;

            setTimeout(() => {

                container.style.display = "none";
                main.style.display = "block";

                if(header){
                    header.style.display = "flex";
                    header.style.opacity = 0;
                    header.style.transition = "opacity 1s ease";

                    setTimeout(() => {
                        header.style.opacity = 1;
                    }, 50);
                }

            }, 1000);

            return;
        }

        setTimeout(playAnimation, 500);
    }

    playAnimation();
});
document.addEventListener("DOMContentLoaded", function () {
    const frames = ["cat_01.png","cat_02.png","cat_03.png","cat_04.png"];
    const img = document.getElementById("cat-frame");
    const container = document.getElementById("cat-animation");
    const main = document.getElementById("main-content");
    const header = document.getElementById("site-header");
    const basePath = "assets/img/";

    let index = 0;
    let repeat = 0;

    function playAnimation() {
        if(!img || !container || !main || !header) return;

        img.src = basePath + frames[index];
        index++;

        if(index >= frames.length){
            index = 0;
            repeat++;
        }

        if(repeat >= 2){
            container.style.transition = "opacity 1s ease";
            container.style.opacity = 0;

            setTimeout(() => {
                container.style.display = "none";
                main.style.display = "block";

                if(header){
                    header.style.display = "flex";
                    header.style.opacity = 0;
                    header.style.transition = "opacity 1s ease";

                    setTimeout(() => {
                        header.style.opacity = 1;

                        // ここでスライドショー開始
                        if(typeof startHeroSlide === "function"){
                            startHeroSlide();
                        }

                    }, 50);
                }

            }, 1000);
            return;
        }

        setTimeout(playAnimation, 500);
    }

    playAnimation();
});
