<template>
    <b-container fluid class="mt-5">
        <b-container>
            <div class="header-title">
                <p class="text-center custom-title-gold-global">آنچه را که دوست دارید</p>
                <h4 class="text-center">دستورالعمل های خوشمزه</h4>
            </div>
            <div class="category-food mt-5">
                <swiper :options="swiperOption" class="text-center">
                    <swiper-slide class="parent-item-swiper">
                        <div class="item-slider-wrapper text-center">
                            <span class="d-block "><i class="fas fa-drumstick-bite food-icon"></i></span>
                            <span class="d-block food-title">مرغ</span>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="parent-item-swiper">
                        <div class="item-slider-wrapper text-center">
                            <span class="d-block "><i class="fas fa-drumstick-bite food-icon"></i></span>
                            <span class="d-block food-title">مرغ</span>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="parent-item-swiper">
                        <div class="item-slider-wrapper text-center">
                            <span class="d-block "><i class="fas fa-drumstick-bite food-icon"></i></span>
                            <span class="d-block food-title">مرغ</span>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="parent-item-swiper">
                        <div class="item-slider-wrapper text-center">
                            <span class="d-block "><i class="fas fa-drumstick-bite food-icon"></i></span>
                            <span class="d-block food-title">مرغ</span>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="parent-item-swiper">
                        <div class="item-slider-wrapper text-center">
                            <span class="d-block "><i class="fas fa-drumstick-bite food-icon"></i></span>
                            <span class="d-block food-title">مرغ</span>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="parent-item-swiper">
                        <div class="item-slider-wrapper text-center">
                            <span class="d-block "><i class="fas fa-drumstick-bite food-icon"></i></span>
                            <span class="d-block food-title">مرغ</span>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="parent-item-swiper">
                        <div class="item-slider-wrapper text-center">
                            <span class="d-block "><i class="fas fa-drumstick-bite food-icon"></i></span>
                            <span class="d-block food-title">مرغ</span>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
            <food-selected></food-selected>
        </b-container>
    </b-container>
</template>

<script>
    import 'swiper/dist/css/swiper.css';
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import foodSelected from './selected-food-component';

    export default {
        name: "delicious-component",
        data() {
            return {
                swiperOption: {
                    slidesPerView: 8,
                    spaceBetween: 50,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    breakpoints: {
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        }
                    }
                }
            }
        },
        components: {
            swiper,
            swiperSlide,
            foodSelected
        },
    }
</script>

<style>
    .swiper-slide {
        width: 200px !important;
        border-left: 2px dashed #dfe9db;
        margin-left: 0 !important;
    }
</style>
