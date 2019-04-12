<template>
    <b-container fluid id="parent-item-footer">
        <b-container>
            <!--item top-->
            <b-row class="row-footer-top">
                <!--about us section-->
                <b-col md="4">
                    <div class="about-wrapper">
                        <p class="about-title mb-3 text-center">درباره ما</p>
                        <p class="about-description text-justify">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                            تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در
                            شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                        </p>
                        <div class="communication-path-wrapper">
                            <span>راه های ارتباطی</span>
                            <div class="social-icon-top-footer">
                                <ul class="social-icon-list list-unstyled list-inline pr-0">
                                    <li class="list-inline-item list-item">
                                        <a href="">
                                            <i class="fab fa-google-plus-g social-icon"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item list-item">
                                        <a href="">
                                            <i class="fab fa-facebook-f social-icon"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item list-item">
                                        <a href="">
                                            <i class="fab fa-twitter social-icon"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item list-item">
                                        <a href="">
                                            <i class="fab fa-telegram-plane social-icon"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </b-col>
                <!--menu section-->
                <b-col md="4">
                    <div class="menu-wrapper">
                        <p class="menu-title mb-3 text-center">منو</p>
                        <ul class="parent-menu list-unstyled">
                            <li class="item-menu">
                                <a href="#" class="title-menu">منو ویـژه</a>
                            </li>
                            <li class="item-menu">
                                <a href="#" class="title-menu">منو ویـژه</a>
                            </li>
                            <li class="item-menu">
                                <a href="#" class="title-menu">منو ویـژه</a>
                            </li>
                            <li class="item-menu">
                                <a href="#" class="title-menu">منو ویـژه</a>
                            </li>
                            <li class="item-menu">
                                <a href="#" class="title-menu">منو ویـژه</a>
                            </li>
                            <li class="item-menu">
                                <a href="#" class="title-menu">منو ویـژه</a>
                            </li>
                        </ul>
                    </div>
                </b-col>
                <!--location section-->
                <b-col md="4">
                    <div class="location-wrapper">
                        <p class="location-title mb-3 text-center">اطلاعات تماس و آدرس</p>
                        <div class="inner-location">
                            <span>
                                <i class="fas fa-map-marker location-icon"></i>
                            </span>
                            <span class="address">
                                بلوار امین ، کـــ7 ، شرکت زانیس
                            </span>
                        </div>
                    </div>
                </b-col>
            </b-row>
            <!--item bottom-->
            <b-row class="row-footer-bottom address text-center">
                تمامی حقوق این سایت متعلق به شرکت زانیس می باشد
            </b-row>

        </b-container>
    </b-container>
</template>

<script>
    export default {
        name: "main-footer-component"
    }
</script>

<style scoped>

</style>
