import Swiper, {Autoplay, Navigation, Pagination} from "swiper";
Swiper.use([Autoplay, Navigation, Pagination]);
const slider = () => {
    const swiper = new Swiper('.swiper',{
        direction:'horizontal',
        loop: true,
        spaceBetween:30,
        grabCursor: true,
        centeredSlides: true,
        autoplay:{
            delay: 2500,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    /*, {
        direction: 'horizontal',
        loop: false,
            grabCursor: true,
            centeredSlides: false,
            slidesPerView: "auto",
        
        observer: true,
        observeParents: true,

        // Navigation arrows
       
        
        });*/

};
export default slider;