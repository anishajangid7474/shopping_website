        var MainImg = document.getElementById("MainImg");
        var smallimg = document.getElementsByClassName("small-img");

        smallimg[0].onclick = function(){
            MainImg.scr = smallimg[0].src;
        }
        smallimg[1].onclick = function(){
            MainImg.scr = smallimg[1].src;
        }
        smallimg[2].onclick = function(){
            MainImg.scr = smallimg[2].src;
        }
        smallimg[3].onclick = function(){
            MainImg.scr = smallimg[3].src;
        }