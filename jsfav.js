
        function startImageTransition1() {
            var images = document.getElementsByClassName("friedc2");
            var images2 = document.getElementsByClassName("frenchf2");
            var images3 = document.getElementsByClassName("karek2");
           
 
            for (var i = 0; i < images.length; ++i) {
                images[i].style.opacity = 1;
            }
            for (var i2 = 0; i2 < images2.length; ++i2) {
                images2[i2].style.opacity = 1;
            }
            for (var i3 = 0; i2 < images3.length; ++i3) {
                images3[i3].style.opacity = 1;
            }
 
            var top = 1;
            var top2 =1;
            var top3 =1;
 
            var cur = images.length - 1;
            var cur2 = images2.length - 1;
            var cur3 = images3.length - 1;
            
            setInterval(changeImage2,4000);
            setInterval(changeImage, 5000);
            
            
 
            async function changeImage() {
 
                var nextImage = (1 + cur) % images.length;
                var nextImage2 = (1 + cur2) % images2.length;
                
 
                images[cur].style.zIndex = top + 1;
                images[nextImage].style.zIndex = top;

                images2[cur2].style.zIndex = top2 + 1;
                images2[nextImage2].style.zIndex = top2;

                
 
                await transition();
                await transition2();
                
 
                images[cur].style.zIndex = top;
                images2[cur2].style.zIndex = top2;
               
 
                images[nextImage].style.zIndex = top + 1;
                images2[nextImage2].style.zIndex = top2 + 1;
                
 
                top = top + 1;
                top2 = top2 + 1;

                images[cur].style.opacity = 1;
                images2[cur2].style.opacity = 1;
                
               
                cur = nextImage;
                cur2 = nextImage2;

                
 
            }
            async function changeImage2(){
                var nextImage3 = (1 + cur3) % images3.length;

                images3[cur3].style.zIndex = top3 + 1;
                images3[nextImage3].style.zIndex = top3;

                await transition3();

                images3[cur3].style.zIndex = top3;
                
                images3[nextImage3].style.zIndex = top3 + 1;

                top3 = top3 + 1;

                images3[cur3].style.opacity = 1;

                cur3= nextImage3;
               
            }
        
            function transition() {
                return new Promise(function(resolve, reject) {
                    var del = 0.01;
 
                    var id = setInterval(changeOpacity, 10);
 
                    function changeOpacity() {
                        images[cur].style.opacity -= del;
                        if (images[cur].style.opacity <= 0) {
                            clearInterval(id);
                            resolve();
                        }
                    }
 
                })
            }
            function transition2() {
                return new Promise(function(resolve2, reject) {
                    var del2 = 0.01;
 
                    var id2 = setInterval(changeOpacity2, 10);
 
                    function changeOpacity2() {
                        images2[cur2].style.opacity -= del2;
                        if (images2[cur2].style.opacity <= 0) {
                            clearInterval(id2);
                            resolve2();
                        }
                    }
 
                })
            }
            function transition3() {
                return new Promise(function(resolve3, reject) {
                    var del3 = 0.01;
 
                    var id3 = setInterval(changeOpacity3, 10);
 
                    function changeOpacity3() {
                        images3[cur3].style.opacity -= del3;
                        if (images3[cur3].style.opacity <= 0) {
                            clearInterval(id3);
                            resolve3();
                        }
                    }
 
                })
            }
    
        }