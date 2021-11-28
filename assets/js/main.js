// var webpMachine = new webpHero.WebpMachine()
// webpMachine.polyfillDocument()
const isMobile = (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
const root = document.documentElement;
// let cursor = document.getElementById("cursor");
// let cursorBorder = document.getElementById("cursorBorder");
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);


(function($, window, document, undefined) {

    'use strict';

    $(function() {

        gtech.init();
        gtech.misc();
        gtech.slider();
        gtech.lazyloading();
        gtech.scrollContent();
        gtech.preloader();
        gtech.parallaxBg();
    });


})($, window, document);




var gtech = {
    init: function() {
        // Vertical Height Fix
        var vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

        document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));

        window.addEventListener('resize', function() {
            // We execute the same script as before
            var vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));

        });

        Splitting({
            whitespace: false
        });


        //cursor effects

        // gsap.set("#cursor", { xPercent: -50, yPercent: -50 });


        // const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        // const mouse = { x: pos.x, y: pos.y };
        // const speed = 0.35;
        // const xSet = gsap.quickSetter(cursor, "x", "px");
        // const ySet = gsap.quickSetter(cursor, "y", "px");




        // gsap.set("#cursorBorder", { xPercent: -50, yPercent: -50 });
        // const posB = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        // const mouseB = { x: posB.x, y: posB.y };
        // const speedB = 0.10;
        // const xSetB = gsap.quickSetter(cursorBorder, "x", "px");
        // const ySetB = gsap.quickSetter(cursorBorder, "y", "px");


        // window.addEventListener("mousemove", (e) => {
        //   mouse.x = e.x;
        //   mouse.y = e.y;
        //   mouseB.x = e.x;
        //   mouseB.y = e.y;


        // });



        // gsap.ticker.add(() => {
        //   const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
        //   pos.x += (mouse.x - pos.x) * dt;
        //   pos.y += (mouse.y - pos.y) * dt;
        //   xSet(pos.x);
        //   ySet(pos.y);
        // });

        // gsap.ticker.add(() => {
        //   const dtB = 1.0 - Math.pow(1.0 - speedB, gsap.ticker.deltaRatio());
        //   posB.x += (mouseB.x - posB.x) * dtB;
        //   posB.y += (mouseB.y - posB.y) * dtB;

        //   xSetB(posB.x);
        //   ySetB(posB.y);
        // });




        // let links = document.querySelectorAll("a");


        // links.forEach(link => {
        //   link.addEventListener("mouseover", function (event) {
        //     cursor.classList.add("linkhover");
        //     cursorBorder.classList.add("linkhover");
        //   });
        //   link.addEventListener("mousemove", function (event) {
        //     cursor.classList.add("linkhover");
        //     cursorBorder.classList.add("linkhover");
        //   });
        //   link.addEventListener("mouseout", function (event) {
        //     cursor.classList.remove("linkhover");
        //     cursorBorder.classList.remove("linkhover");
        //   });
        // });

        // sticky header

        window.onscroll = function() {
            stickyheader()
        };

        var header = document.querySelector("header");
        var sticky = header.offsetTop;

        function stickyheader() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }

        //background mobile & desktop



        // menuToggle
        var headerMenu = document.querySelector('header');
        var toggleMenu = headerMenu.querySelector('.toggle-menu');

        var mobile = document.querySelector('.mobile-nav');
        var mobileMenu = mobile.querySelector('.toggle-menu');
        var titleCurrent  = mobile.querySelector('.mobile-nav-current')

        toggleMenu.addEventListener('click', function() {
            root.classList.add("is-nav-open");
        })

        mobileMenu.addEventListener('click', function() {
            root.classList.remove("is-nav-open");
        })



        // $('.menu-item a').on('click', function(e) {
        //    if(this.parent().hasClass('has-submenu')){
        //       e.preventDefault();
        //    }else{
        //     root.classList.remove("is-nav-open");
        //    }
        // })

        //menuMobile second level//
        var btnlink = mobile.querySelectorAll('.link-btn');
        var navbackBtn = mobile.querySelector('.mobile-btn-back');
        var innernavlv1 = document.querySelectorAll('.nav-mobile-level1');

        navbackBtn.addEventListener('click', function() {
          mobile.classList.remove('mobile-nav-lv1');
          innernavlv1.forEach(innerlv1 => {
            innerlv1.classList.remove('active');
          });
        });

        btnlink.forEach(btnlinkItem => {
          btnlinkItem.addEventListener('click', function() {
            mobile.classList.add('mobile-nav-lv1');
            var linkAttr = this.dataset.navmobileBtn;

            titleCurrent.innerHTML = linkAttr;
            var nextSib = btnlinkItem.nextElementSibling;
              nextSib.classList.add('active')
          });
        });



    },


    misc: function() {
        ///Alert///

        var menuDesktop = document.querySelector('.dekstop-menu');
        var menuItems = menuDesktop.querySelectorAll('li.has-submenu');
        var navIndicator = menuDesktop.querySelector(".nav-indicator")
        Array.prototype.forEach.call(menuItems, function(el, i) {
            el.addEventListener("mouseover", function(event) {
                this.classList.add("open");
                root.classList.add("is-nav-opened");
                let rect = this.getBoundingClientRect();
                gsap.to(navIndicator, .5, {
                    opacity: 1,
                    x: rect.left,
                    width: rect.width
                });

                var icon = this.querySelector(".m-icon")
                icon.innerHTML = 'remove'

            });
            el.addEventListener("mouseout", function(event) {
                this.classList.remove("open");
                root.classList.remove("is-nav-opened");
                let rect = this.getBoundingClientRect();
                gsap.to(navIndicator, .5, {
                    opacity: 0,
                    width: rect.width
                });
                var icon = this.querySelector(".m-icon")
                icon.innerHTML = 'add'
            });
        })


        //hoverImage//


        Array.from(document.querySelectorAll('.hoverImage')).forEach((el) => {
            const imgs = el.querySelector('img');
            console.log(el.dataset.hover)

            new hoverEffect({
                parent: el.querySelector('.s-bg-img'),
                intensity: el.dataset.intensity || undefined,
                speedIn: .6 || undefined,
                speedOut: .6 || undefined,
                easing: el.dataset.easing || undefined,
                hover: el.dataset.hover || undefined,
                image1: imgs.getAttribute('src'),
                image2: el.dataset.img || undefined,
                displacementImage: el.dataset.displacement
            });
        });

        //faq-item//

        $('.faq-item').each(function(index) {
            var faqBtn = $(this).find('.f-btn')

            faqBtn.on('click', function() {
                $(this).parents('.faq-item').toggleClass('show');
                var sParent = $(this).parents('.faq-item').siblings();
                var sIcontext = sParent.find('.f-b-icon');
                var textBtn = $(this).find('.f-b-icon');

                sParent.removeClass('show');
                sIcontext.text('add')

                if (textBtn.text() == "add") {
                    textBtn.text('remove');
                } else {
                    textBtn.text('add');
                }
            });

        });


        $('.platform-item').each(function(index) {
            var platformBtn = $(this).find('.button-icon')

            platformBtn.on('click', function() {
                $(this).parents('.platform-item').toggleClass('show');
                var sParent = $(this).parents('.platform-item').siblings();
                var sIcontext = sParent.find('.a-icon');
                var textBtn = $(this).find('.a-icon');

                sParent.removeClass('show');
                sIcontext.text('add')

                if (textBtn.text() == "add") {
                    textBtn.text('remove');
                } else {
                    textBtn.text('add');
                }
            });

        });




    },

    slider: function() {
        // var swiper = new Swiper(".mySwiper", {
        //     autoplay: {
        //         delay: 2500,

        //     },

        //     initialSlide: 0,
        //     slidesPerView: 3.25,
        //     spaceBetween: 20,
        //     freeMode: true,
        //     lazy: true,
        //     pauseOnMouseEnter: false,
        //     scrollbar: {
        //         el: ".swiper-scrollbar",
        //         hide: false,
        //     },
        //     pagination: {
        //         el: '.p-swiper-pagination',
        //     },

        //     navigation: {
        //         nextEl: ".p-swiper-button-next",
        //         prevEl: ".p-swiper-button-prev",
        //     },
        // });

        // add this code
        Flickity.prototype._createResizeClass = function() {
            this.element.classList.add('flickity-resize');
        };

        Flickity.createMethods.push('_createResizeClass');

        var resize = Flickity.prototype.resize;
        Flickity.prototype.resize = function() {
            this.element.classList.remove('flickity-resize');
            resize.call( this );
            this.element.classList.add('flickity-resize');
        };


        var $platformCarousel = $('.platform-carousel');


        if($platformCarousel.length){

            var $plCarousel = $platformCarousel.flickity({
                wrapAround: true,
                autoPlay: true,
                pageDots: false,
                prevNextButtons: false,
                cellAlign: 'left',
                lazyLoad: 4,
            });



            var plflkty = $plCarousel.data('flickity');
            var $PlcellButtonGroup =  $platformCarousel.parent();
            var $PlcellButtonWrap = $PlcellButtonGroup.find('.swiper-pagination');
            var $PlcellButtons = $PlcellButtonWrap.find('.pageDot');



            // update selected PcellButtons
            $plCarousel.on('select.flickity', function() {
            $PlcellButtons.filter('.is-selected')
                .removeClass('is-selected');
            $PlcellButtons.eq( Pflkty.selectedIndex )
                .addClass('is-selected');
            });

            // select cell on button click
            $PlcellButtonWrap.on( 'click', '.pageDot', function() {
            var index = $(this).index();
            $plCarousel.flickity( 'select', index );
            });
            // previous
            $PlcellButtonGroup.find('.button--previous').on( 'click', function() {
                $plCarousel.flickity('previous');
            });
            // next
            $PlcellButtonGroup.find('.button--next').on( 'click', function() {
                $plCarousel.flickity('next');
            });

        }



        //Testi slider//

        var $testiCarousel = $('.testi-carousel');



        if($testiCarousel.length){

         var $tCarousel = $testiCarousel.flickity({
             wrapAround: true,
             autoPlay: true,
             pageDots: false,
             prevNextButtons: false,
             cellAlign: 'left',
             lazyLoad: 4,
         });

            var tflkty = $tCarousel.data('flickity');
            var $TcellButtonGroup =  $testiCarousel.parent();
            var $TcellButtonWrap = $TcellButtonGroup.find('.swiper-pagination');
            var $TcellButtons = $TcellButtonWrap.find('.pageDot');



            // update selected PcellButtons
            $tCarousel.on('select.flickity', function() {
            $TcellButtons.filter('.is-selected')
                .removeClass('is-selected');
            $TcellButtons.eq( tflkty.selectedIndex )
                .addClass('is-selected');
            });

            // select cell on button click
            $TcellButtonWrap.on( 'click', '.pageDot', function() {
            var index = $(this).index();
            $tCarousel.flickity( 'select', index );
            });
            // previous
            $TcellButtonGroup.find('.button--previous').on( 'click', function() {
                $tCarousel.flickity('previous');
            });
            // next
            $TcellButtonGroup.find('.button--next').on( 'click', function() {
                $tCarousel.flickity('next');
            });

        }



           //Insights slider//

           var $insightsCarousel = $('.insights-carousel');



           if($insightsCarousel.length){

            var $iCarousel = $insightsCarousel.flickity({
                wrapAround: true,
                autoPlay: true,
                pageDots: false,
                prevNextButtons: false,
                cellAlign: 'left',
                lazyLoad: 4,
            });

               var iflkty = $iCarousel.data('flickity');
               var $IcellButtonGroup =  $insightsCarousel.parent();
               var $IcellButtonWrap = $IcellButtonGroup.find('.swiper-pagination');
               var $IcellButtons = $IcellButtonWrap.find('.pageDot');



               // update selected PcellButtons
               $iCarousel.on('select.flickity', function() {
               $IcellButtons.filter('.is-selected')
                   .removeClass('is-selected');
               $IcellButtons.eq( iflkty.selectedIndex )
                   .addClass('is-selected');
               });

               // select cell on button click
               $IcellButtonWrap.on( 'click', '.pageDot', function() {
               var index = $(this).index();
               $iCarousel.flickity( 'select', index );
               });
               // previous
               $IcellButtonGroup.find('.button--previous').on( 'click', function() {
                   $iCarousel.flickity('previous');
               });
               // next
               $IcellButtonGroup.find('.button--next').on( 'click', function() {
                   $iCarousel.flickity('next');
               });

           }



        //portfolio slider//

        var $portfolioCarousel = $('.portfolio-carousel');


        if($portfolioCarousel.length){

            var $pCarousel = $portfolioCarousel.flickity({
                wrapAround: true,
                autoPlay: true,
                imagesLoaded: true,
                pageDots: false,
                prevNextButtons: false,
                cellAlign: 'left',
                lazyLoad: 1,
            });



            var Pflkty = $pCarousel.data('flickity');
            var $PcellButtonGroup =  $portfolioCarousel.parent();
            var $PcellButtonWrap = $PcellButtonGroup.find('.swiper-pagination');
            var $PcellButtons = $PcellButtonWrap.find('.pageDot');



            // update selected PcellButtons
            $pCarousel.on('select.flickity', function() {
            $PcellButtons.filter('.is-selected')
                .removeClass('is-selected');
            $PcellButtons.eq( Pflkty.selectedIndex )
                .addClass('is-selected');
            });

            // select cell on button click
            $PcellButtonWrap.on( 'click', '.pageDot', function() {
            var index = $(this).index();
            $pCarousel.flickity( 'select', index );
            });
            // previous
            $PcellButtonGroup.find('.button--previous').on( 'click', function() {
                $pCarousel.flickity('previous');
            });
            // next
            $PcellButtonGroup.find('.button--next').on( 'click', function() {
                $pCarousel.flickity('next');
            });

        }




        //Main Banner//

        var mainCarousel = $('.carousel-main');

        if(mainCarousel.length){
            var $carousel = mainCarousel.flickity({
                wrapAround: true,
                autoPlay: true,
                fade: true,
                prevNextButtons: false
            });

            var flkty = $carousel.data('flickity');
          var previousIndex = flkty.selectedIndex;


          var $cellButtonGroup = $('.button-group--cells');
            var $cellButtons = $cellButtonGroup.find('.button');

            // update selected cellButtons
            $carousel.on( 'select.flickity', function() {
            $cellButtons.filter('.is-selected')
                .removeClass('is-selected');
            $cellButtons.eq( flkty.selectedIndex )
                .addClass('is-selected');
            });

            // select cell on button click
            $cellButtonGroup.on( 'click', '.button', function() {
            var index = $(this).index();
            $carousel.flickity( 'select', index );
            });


        let background = document.querySelector(".s-background");



        var distortAnimations = [];


        var maincarousel = document.querySelector('.carousel-main')
        var sliderItem = maincarousel.querySelectorAll('.carousel-cell');

        sliderItem[0].classList.add('activeSLide');

        sliderItem.forEach(sliderItem => {
            let title = sliderItem.querySelector('.g-title');
            let desc = sliderItem.querySelector('.desc');
            let btn = sliderItem.querySelector('.btn-group');
            gsap.set(title, {
                y: 200
            })
            gsap.set(desc, {
                y: 200
            })
            gsap.set(btn, {
                y: 200,
                autoAlpha: 0
            })


        });

        let currentTitle = sliderItem[0].querySelector('.g-title');
        let currentDesc = sliderItem[0].querySelector('.desc');
        let currentBtn = sliderItem[0].querySelector('.btn-group');

        gsap.to(currentTitle, {
            y: 0
        })
        gsap.to(currentDesc, {
            y: 0
        })
        gsap.to(currentBtn, {
            y: 0,
            autoAlpha: 1
        })


        function textAnimation(direction) {



            sliderItem.forEach(sliderItem => {
                sliderItem.classList.remove('activeSLide');
            })

            let currentSlider = flkty.selectedElement;
            // console.log(currentSlider)
            // currentSlider.classList.add('activeSLide');
            let nextSibling = currentSlider.nextElementSibling;
            let prevSibling = currentSlider.previousElementSibling;
            let currentTitle = currentSlider.querySelector('.g-title');
            let currentdesc = currentSlider.querySelector('.desc');
            let currentbtn = currentSlider.querySelector('.btn-group');



            if (prevSibling !== null) {
                let prevTitle = prevSibling.querySelector('.g-title');
                let prevDesc = prevSibling.querySelector('.desc');
                let prevBtn = prevSibling.querySelector('.btn-group');


                gsap.to(prevTitle, .8, {
                    y: -200,
                    ease: 'expo.out'
                }, 0);
                gsap.to(prevDesc, .8, {
                    y: -200,
                    ease: 'expo.out',
                    delay: .1
                }, 0.2);
                gsap.to(prevBtn, .8, {
                    y: -200,
                    autoAlpha: 0,
                    ease: 'expo.out'
                }, 0.3);

            } else {
                let prevTitle = sliderItem[flkty.slides.length - 1].querySelector('.g-title');
                let prevDesc = sliderItem[flkty.slides.length - 1].querySelector('.desc');
                let prevBtn = sliderItem[flkty.slides.length - 1].querySelector('.btn-group');

                gsap.to(prevTitle, .8, {
                    y: -200,
                    ease: 'expo.out'
                }, 0);
                gsap.to(prevDesc, .8, {
                    y: -200,
                    ease: 'expo.out',
                    delay: .1
                }, 0.2);
                gsap.to(prevBtn, .8, {
                    y: -200,
                    autoAlpha: 0,
                    ease: 'expo.out'
                }, 0.3);


            }


            if (nextSibling !== null) {
                let nextTitle = nextSibling.querySelector('.g-title');
                let nextDesc = nextSibling.querySelector('.desc');
                let nextBtn = nextSibling.querySelector('.btn-group');


                if (direction === "next") {
                    gsap.set(nextTitle, {
                        y: 200
                    });
                    gsap.set(nextDesc, {
                        y: 200
                    });
                    gsap.set(nextBtn, {
                        y: 200,
                        autoAlpha: 0
                    });
                }

                if (direction === "prev") {
                    gsap.set(nextTitle, {
                        y: -200
                    });
                    gsap.set(nextDesc, {
                        y: -200
                    });
                    gsap.set(nextBtn, {
                        y: -200,
                        autoAlpha: 0
                    });
                }



            } else {
                let nextTitle = sliderItem[0].querySelector('.g-title');
                let nextDesc = sliderItem[0].querySelector('.desc');
                let nextBtn = sliderItem[0].querySelector('.btn-group');

                if (direction === "next") {
                    gsap.set(nextTitle, {
                        y: 200
                    });
                    gsap.set(nextDesc, {
                        y: 200
                    });
                    gsap.set(nextBtn, {
                        y: 200,
                        autoAlpha: 0
                    });
                }

                if (direction === "prev") {
                    gsap.set(nextTitle, {
                        y: -200
                    });
                    gsap.set(nextDesc, {
                        y: -200
                    });
                    gsap.set(nextBtn, {
                        y: -200,
                        autoAlpha: 0
                    });
                }




            }




            gsap.to(currentTitle, 1, {
                y: 0,
                ease: 'expo.out'
            }, 0);
            gsap.to(currentdesc, 1, {
                y: 0,
                ease: 'expo.out',
                delay: .1
            }, 0.4);
            gsap.to(currentbtn, 1, {
                y: 0,
                autoAlpha: 1,
                ease: 'expo.out'
            }, 0.8);




        }






        for (var i = 0; i < flkty.slides.length; i++) {
            var myAnimation = "myAnimation" + i;


            var backgroundCur = sliderItem[i].dataset.bg;
            var displacementImge = sliderItem[i].dataset.displacement;


            // var backgroundI = flkty.slides[i].querySelector(".swiper-item").getAttribute('data-bg');
            // var displacementImge = flkty.slides[i].querySelector(".swiper-item").getAttribute('data-displacement');
             var nextIndex = (i + 1) % flkty.slides.length;


            var backgroundNext =sliderItem[nextIndex].dataset.bg;
            // // console.log('currebtBg', i, backgroundI)
            // // console.log('nextbg', backgroundNext)

            var myAnimation = new hoverEffect({
                parent: document.querySelector(".s-background"),
                intensity: 0.2,
                imagesRatio: 1080 / 1920,
                image1: backgroundCur,
                image2: backgroundNext,
                displacementImage: displacementImge,
                hover: false,
                speedIn: 1.6 || undefined,
                speedOut: 1.6 || undefined,
            });

            distortAnimations.push(myAnimation);

        }

        let currentIndex = 0;


        function startNextDistortAnimation() {
            let prevIndex = currentIndex;
            currentIndex = (currentIndex + 1) % flkty.slides.length;


            textAnimation("next")


            distortAnimations[prevIndex].next();
            // showTextAnimation("next");
            setTimeout(() => {
              let canvas = background.querySelectorAll("canvas");
              background.appendChild(canvas[0]);
              distortAnimations[prevIndex].previous();
            }, 1200);
          }

          function startPrevDistortAnimation() {
            currentIndex = currentIndex - 1 < 0 ? flkty.slides.length - 1 : currentIndex - 1;
            textAnimation("prev")

            distortAnimations[currentIndex].next();
            // showTextAnimation("prev");
            setTimeout(() => {
              let canvas = background.querySelectorAll("canvas");
              background.insertBefore(canvas[canvas.length - 1], background.firstChild);
              distortAnimations[currentIndex].previous();
            }, 500);
          }



          $carousel.on( 'change.flickity', function( event, index ) {
            // get changed index
            var delta = index - previousIndex;
            var lastIndex = flkty.slides.length - 1;
            if ( previousIndex == lastIndex && index === 0 ) {
              console.log('wrapped forward');
              startNextDistortAnimation();
            } else if ( previousIndex === 0 && index == lastIndex ) {
              console.log('wrapped back')

            startPrevDistortAnimation();
            } else if ( delta > 0 ) {
              console.log( 'moved forward', delta )

            startNextDistortAnimation();
            } else {
              console.log( 'moved back', delta )
            startPrevDistortAnimation();
            }

            previousIndex = index;
          });



        }










    },




    scrollContent: function() {

        // Detect if a link's href goes to the current page
        function getSamePageAnchor(link) {
            if (
                link.protocol !== window.location.protocol ||
                link.host !== window.location.host ||
                link.pathname !== window.location.pathname ||
                link.search !== window.location.search
            ) {
                return false;
            }

            return link.hash;
        }

        // Scroll to a given hash, preventing the event given if there is one
        function scrollToHash(hash, e) {
            const elem = hash ? document.querySelector(hash) : false;
            if (elem) {
                if (e) e.preventDefault();
                gsap.to(window, {
                    scrollTo: elem
                });
            }
        }

        // If a link's href is within the current page, scroll to it instead
        document.querySelectorAll('a[href]').forEach(a => {
            a.addEventListener('click', e => {
                scrollToHash(getSamePageAnchor(a), e);
            });
        });

        // Scroll to the element in the URL's hash on load
        scrollToHash(window.location.hash);

        // gsap.utils.toArray(".revealText").forEach(item => {
        //     const results = Splitting({
        //         target: item,
        //         by: 'lines'
        //     });



        //     results[0].lines.forEach((line, index) => {
        //         line.forEach((word) => {

        //             var revealText = gsap.timeline({
        //                 scrollTrigger: {
        //                     trigger: word,
        //                     start: "top bottom",
        //                     end: "bottom top",
        //                     toggleActions: "play none none reverse",

        //                 }
        //             });


        //             revealText.from(word, {
        //                 y: 100,
        //                 ease: "power4.Out",
        //                 autoAlpha: 0,
        //                 duration: 1,

        //             });
        //         })
        //     });

        // });

        // gsap.utils.toArray(".revealMe").forEach(image => {
        //     var revealMe = gsap.timeline({
        //         scrollTrigger: {
        //             trigger: image,
        //             start: "top bottom",
        //             end: "bottom top",
        //             toggleActions: "play none none reverse",
        //         }
        //     });

        //     revealMe.from(image, {
        //         y: 100,
        //         ease: "power4.Out",
        //         autoAlpha: 0,
        //         duration: 1,
        //     });
        // });




        // gsap.utils.toArray(".revealClip").forEach(clip => {
        //     var animateIn = gsap.timeline({
        //         scrollTrigger: {
        //             trigger: clip,

        //             start: "top bottom",
        //             end: "bottom top",
        //             toggleActions: "play none none reverse",
        //         }
        //     });


        //     animateIn.fromTo(clip, {
        //         skewX: 30,
        //         scale: 1.8
        //     }, {
        //         skewX: 0,
        //         xPercent: 100,
        //         transformOrigin: "0% 100%",
        //         ease: "power3.out",
        //         duration: 1,
        //     });

        // });

        // gsap.utils.toArray(".bigImage").forEach(gimage => {
        //     var img = gimage.querySelector("img");
        //     var animateimg = gsap.timeline({
        //         scrollTrigger: {
        //             trigger: img,

        //             start: "50% bottom",
        //             end: "center top",
        //             toggleActions: "play none none reverse",
        //         }
        //     });


        //     animateimg.from(img, 4, {
        //         scale: 4,
        //         ease: "power3.out",
        //         delay: -1,
        //         duration: 4,
        //     });
        // });



    },

    preloader: function() {
        ///Image Load for Preloader///

        var imgLoad = imagesLoaded('.imgload', {
            background: true
        });

        // var progressBar = $(".progressbar")
        images = $(".imgload").length,
            loadedCount = 0,
            loadingProgress = 0,
            tlProgress = gsap.timeline();



        imgLoad.on('progress', function(instance, image) {
            loadProgress();
            var result = image.isLoaded ? 'loaded' : 'broken';
            //console.log( 'image is ' + result + ' for ' + image.img.src );

        });



        function loadProgress(imgLoad, image) {

            loadedCount++;

            loadingProgress = (loadedCount / images);
            //console.log(loadingProgress);
            root.classList.add('is-loading');

            gsap.to(tlProgress, 1, {
                progress: loadingProgress
            });




        }

        var tlProgress = gsap.timeline({
            paused: true,
            onUpdate: countPercent,
            onComplete: loadComplete
        });

        tlProgress

            // .to(progressBar, 1, {width:"100%"})
            .to(window, {
                duration: 2,
                scrollTo: 0
            })
            .set('header', {
                autoAlpha: 0,
                y: -30,
                ease: "expo.out",
            })

        if (document.querySelector('.b-slider')) {
            tlProgress
                .set('.b-slider-wrap', {
                    autoAlpha: 0,
                    y: 100,
                    ease: "expo.out",
                })
                .set('.b-slider-control ', {
                    autoAlpha: 0,
                    yPercent: 100,
                    ease: "expo.out",
                })
                .set('.s-background ', {
                    autoAlpha: 0,
                    ease: "expo.out",
                })
        }

        var innerBanner = document.querySelector('.inner-banner');

        if (innerBanner) {
            tlProgress



                .set(innerBanner.querySelector('.overline'), {
                    autoAlpha: 0,
                    y: 30,
                    ease: "expo.out",
                })
                .set(innerBanner.querySelector('.g-title'), {
                    autoAlpha: 0,
                    yPercent: 30,
                    ease: "expo.out",
                    scaleY:2,
                })
                .set(innerBanner.querySelector('.subtitle'), {
                    autoAlpha: 0,
                    y: 30,
                    ease: "expo.out",
                })
                .set(innerBanner.querySelector('.bgImage'), {
                    autoAlpha: 0,
                    ease: "expo.out",
                })
                .set(innerBanner.querySelector('.desc'), {
                    autoAlpha: 0,
                    y: 30,
                    ease: "expo.out",
                })
                .set(innerBanner.querySelector('.g-image-wrapper'), {
                    autoAlpha: 0,
                    y: 0,
                    ease: "expo.out",
                    delay: .4
                })
                .set('.b-info ', {
                    autoAlpha: 0,
                    yPercent: 30,
                    ease: "expo.out",
                })
        }


        function countPercent() {

            var newPercent = (tlProgress.progress() * 100).toFixed();

            // count.text(newPercent + "%");
        }

        function loadComplete() {



            root.classList.add('is-ready');



            var tlEnd = gsap.timeline({

                onComplete: function() {


                    root.classList.remove('is-loading');
                    root.classList.add('is-loaded');
                    // document.querySelector('.loading-screen').remove();

                    gsap.to('header', 1, {
                        autoAlpha: 1,
                        y: 0,
                        ease: "expo.out",
                        delay: .5
                    })

                    if (document.querySelector('.b-slider')) {
                        gsap.to('.s-background ', {
                            autoAlpha: 1,
                            duration: 1,
                            ease: "expo.out",
                        })
                        gsap.to('.b-slider-wrap', {
                            autoAlpha: 1,
                            duration: 1,
                            y: 0,
                            ease: "expo.out",
                            delay: .5
                        })
                        gsap.to('.b-slider-control', {
                            autoAlpha: 1,
                            duration: 1,
                            yPercent: 0,
                            ease: "expo.out",
                            delay: 1
                        })
                    }


                    var innerBanner = document.querySelector('.inner-banner');

                    if (innerBanner) {

                        gsap.to(innerBanner.querySelector('.overline'), 1, {
                            autoAlpha: 1,
                            y: 0,
                            ease: "expo.out",
                        })
                        gsap.to(innerBanner.querySelector('.g-title'), 1, {
                            autoAlpha: 1,
                            yPercent: 0,
                            scaleY:1,
                            ease: "expo.out",
                            delay: .5
                        })
                        gsap.to(innerBanner.querySelector('.subtitle'), 1, {
                            autoAlpha: 1,
                            y: 0,
                            ease: "expo.out",
                            delay: .4
                        })
                        gsap.to(innerBanner.querySelector('.bgImage'), 1, {
                            autoAlpha: 1,
                            ease: "expo.out",
                        })
                        gsap.to(innerBanner.querySelector('.desc'), 1, {
                            autoAlpha: 1,
                            y: 0,
                            ease: "expo.out",
                            delay: .5
                        })
                        gsap.to('.b-info', 1, {
                            autoAlpha: 1,
                            yPercent: 0,
                            ease: "expo.out",
                            delay: .6
                        })
                        gsap.to(innerBanner.querySelector('.g-image-wrapper'), 1, {
                            autoAlpha: 1,
                            y: 0,
                            ease: "expo.out",
                            delay: .7
                        })
                    }

                }
            });

            tlEnd
                .to('#spinText',  {
                    autoAlpha: 0,
                    duration: .5,
                    ease: "expo.out",
                    delay: 1,
                })
                .to('.loading-screen', .5, {
                    autoAlpha: 0,
                    ease: "expo.out",
                })

        }

    },

    lazyloading: function() {



        const config = {
            root: null,
            rootMargin: '0px 0px -20% 0px',
            threshold: 0.3,
        };

        function createIntersectionObserver (elem, callback, options) {
            let observer = new IntersectionObserver(callback, options || {});
            observer.observe(elem);
            return observer;
        }

        function lazyLoad(entries, self){
            entries.forEach(function(entry) {
              if (entry.isIntersecting) {
                  let lazyImage = entry.target;
                  lazyImage.src = lazyImage.dataset.src;
                //   lazyImage.srcset = lazyImage.dataset.srcset;
                  lazyImage.classList.remove("lazyImage");
                  self.unobserve(lazyImage);
              }
            });
        }

        function revealText(entries, self){
            entries.forEach(function(entry) {
              if (entry.isIntersecting) {
                  let targetText = entry.target;
                  const results = Splitting({ target: targetText, by: 'lines' });


                  results[0].lines.forEach((line, index) => {
                    line.forEach((word) => {
                      gsap.to(word, { duration: 1.5, autoAlpha: 1, y:0, scaleY: 1, ease:"expo.out", delay:index/5 });
                    })

                  });

                  self.unobserve(targetText);
              }
            });
        }

        function revealMe(entries, self){
            entries.forEach(function(entry) {
              if (entry.isIntersecting) {
                  let targetText = entry.target;

                  gsap.to(targetText, { duration: 1.5, autoAlpha: 1, y:0, ease:"expo.out"});

                  self.unobserve(targetText);
              }
            });
        }


        function revealClip(entries, self){
            entries.forEach(function(entry) {

              if (entry.isIntersecting) {
                  let clipReveal = entry.target;

                  gsap.to(clipReveal, {
                    xPercent: 100,
                    transformOrigin: "0% 100%",
                    ease: "expo.out",
                    duration: 1,
                });

                self.unobserve(clipReveal);
              }
            });
        }

        function blockReveal(entries, self){
            entries.forEach(entry => {
                let revealItem = entry.target;
                const easeInOut = "expo.inOut";
                const revealAnim = gsap.timeline({ ease: easeInOut });
                const datdelay = revealItem.dataset.delay;
                const dataY = revealItem.dataset.y;
                revealAnim.set(revealItem, {
                    autoAlpha: 0,
                    y: dataY

                });

                if (entry.isIntersecting) {
                    revealAnim.to(revealItem, .6, {
                        autoAlpha:1,
                        delay: datdelay,
                        y: 0
                    });
                    self.unobserve(revealItem);
                }

                });
        }






        const lazyImage  = document.querySelectorAll('.imgload.lazyImage');
        lazyImage.forEach(lazyImageMeItem =>{
            createIntersectionObserver(lazyImageMeItem, lazyLoad, config);
        });

        const revealTextItems  = document.querySelectorAll('.revealText');
        revealTextItems.forEach(revealTextItem =>{
            const results = Splitting({ target: revealTextItem, by: 'lines' });
            results[0].lines.forEach((line, index) => {
                line.forEach((word) => {
                  gsap.set(word, { autoAlpha: 0, y:30, scaleY: 1.8});
                })
              });

            createIntersectionObserver(revealTextItem, revealText, config);
        });

        const revealTextMe  = document.querySelectorAll('.revealMe');
        revealTextMe.forEach(revealTextMeItem =>{
            gsap.set(revealTextMeItem, { autoAlpha: 0, y:30});
            createIntersectionObserver(revealTextMeItem, revealMe, config);
        });

        const revealClipMe  = document.querySelectorAll('.revealClip');
        revealClipMe.forEach(revealClipMeMeItem =>{
            // gsap.set(revealClipMeMeItem, {skewX: 30,scale: 1.8});
            gsap.set(revealClipMeMeItem, { xPercent:0});
            createIntersectionObserver(revealClipMeMeItem, revealClip, config);
        });

        const reveal_Block  = document.querySelectorAll('.revealBlock');
        reveal_Block.forEach(revealBlockItem =>{
            createIntersectionObserver(revealBlockItem, blockReveal, config);
        });

        // ScrollTrigger.config({
        //     limitCallbacks: true
        // });

        // gsap.utils.toArray(".lazy").forEach(image => {

        //     let newSRC = image.dataset.src,
        //         newImage = document.createElement("img"),

        //         loadImage = () => {
        //             newImage.onload = () => {
        //                 newImage.onload = null; // avoid recursion
        //                 newImage.src = image.src; // swap the src
        //                 image.src = newSRC;
        //                 // place the low-res version on TOP and then fade it out.
        //                 gsap.set(newImage, {
        //                     position: "absolute",
        //                     autoAlpha: 0,

        //                     top: image.offsetTop,
        //                     left: image.offsetLeft,
        //                     width: image.offsetWidth,
        //                     height: image.offsetHeight
        //                 });
        //                 image.parentNode.appendChild(newImage);
        //                 gsap.to(newImage, {
        //                     autoAlpha: 1,

        //                     onComplete: () => newImage.parentNode.removeChild(newImage)
        //                 });
        //                 st && st.kill();
        //             }
        //             newImage.src = newSRC;
        //         },

        //         st = ScrollTrigger.create({
        //             trigger: image,

        //             start: "top bottom",
        //             onEnter: loadImage,
        //             onEnterBack: loadImage // make sure it works in either direction
        //         });
        // });
    },

    parallaxBg: function() {


        gsap.utils.toArray(".bgWrap").forEach((section, i) => {
            section.bg = section.querySelector(".bgImage");
            var imagebg = section.bg.dataset.bg;

            // Give the backgrounds some random images
            section.bg.style.backgroundImage = `url(${imagebg})`

            // gsap.to(section.bg, {
            //   yPercent: -50,
            //   ease: "none",
            //   scrollTrigger: {
            //     trigger: section,
            //     // start: "top bottom", // the default values
            //     // end: "bottom top",
            //     scrub: true
            //   },
            // });



            // section.bg.style.backgroundPosition = `50% ${-innerHeight / 10}px`;
            if(!isMobile){
                gsap.to(section.bg, {
                    backgroundPosition: `50% calc(50% + ${(.5 * innerHeight/3 )}px)`,
                    ease: "none",
                    scrollTrigger: {
                      trigger: section,
                      scrub: true
                    }
                  });

            }




        });
    }




}

      // external js: isotope.pkgd.js

      // init Isotope
      var iso = new Isotope( '.grid', {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      // bind filter button click
      var filtersElem = document.querySelector('.filters-button-group');
      filtersElem.addEventListener( 'click', function( event ) {
        // only work with buttons
        if ( !matchesSelector( event.target, 'button' ) ) {
          return;
        }
        var filterValue = event.target.getAttribute('data-filter');
        // use matching filter function
        iso.arrange({ filter: filterValue });
      });

      // change is-checked class on buttons
      var buttonGroups = document.querySelectorAll('.button-group');
      for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
        var buttonGroup = buttonGroups[i];
        radioButtonGroup( buttonGroup );
      }

      function radioButtonGroup( buttonGroup ) {
        buttonGroup.addEventListener( 'click', function( event ) {
          // only work with buttons
          if ( !matchesSelector( event.target, 'button' ) ) {
            return;
          }
          buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
          event.target.classList.add('is-checked');
        });
      }
