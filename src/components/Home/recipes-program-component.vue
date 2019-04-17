<template>
    <b-container fluid class="mt-5" style="height:75vh">
        <b-container>
            <div class="recipes-program-top-wrapper">
                <!--header-->
                <div class="header-recipes text-center">
                    <p class="article-title">جدیدترین و به روزترین مقالات</p>
                    <p class="recipes-title">برنامه ها و دستورالعمل ها</p>
                </div>
                <!--item-->
                <div class="item-recipes-wrapper">
                    <b-row>
                        <b-col md="4">
                            <div class="item-single-recipe text-center">
                                <img src="../../../public/assets/img/blog-food/test.jpg" class="img-fluid" alt="">
                                <div class="item-detail-wrapper">
                                    <button class="get-more-recipes">ادامه</button>
                                    <b-card class="parent-item-wrapper">
                                        <div class="item-wrapper">
                                            <div class="inner-item text-center">
                                                <span class="date-item ">1398.01.23</span>
                                                <p class="title-item">بهترین و جدیدترین دستورالعمل غذایی</p>
                                                <p class="text-justify description-item">
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                                    استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
                                                    ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                                                    کاربردهای
                                                </p>
                                            </div>
                                        </div>
                                    </b-card>
                                    <div class="comment-like-area-wrapper">
                                        <ul class="list-unstyled d-flex justify-content-center p-3 comment-like-area-list-parent">
                                            <li class="mr-4">
                                                <span class="mr-2">
                                                    <i class="far fa-heart"></i>
                                                </span>
                                                <span>22 Likes</span>
                                            </li>
                                            <li class="mr-4">
                                                <span class="mr-2">
                                                 <i class="far fa-comment-dots"></i>
                                                </span>
                                                <span>22 نظر</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </b-col>
                        <b-col md="4">
                            <div class="item-single-recipe text-center">
                                <img src="../../../public/assets/img/blog-food/test.jpg" class="img-fluid" alt="">
                                <div class="item-detail-wrapper">
                                    <button class="get-more-recipes">ادامه</button>
                                    <b-card class="parent-item-wrapper">
                                        <div class="item-wrapper">
                                            <div class="inner-item text-center">
                                                <span class="date-item ">1398.01.23</span>
                                                <p class="title-item">بهترین و جدیدترین دستورالعمل غذایی</p>
                                                <p class="text-justify description-item">
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                                    استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
                                                    ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                                                    کاربردهای
                                                </p>
                                            </div>
                                        </div>
                                    </b-card>
                                    <div class="comment-like-area-wrapper">
                                        <ul class="list-unstyled d-flex justify-content-center p-3 comment-like-area-list-parent">
                                            <li class="mr-4">
                                                <span class="mr-2">
                                                    <i class="far fa-heart"></i>
                                                </span>
                                                <span>22 Likes</span>
                                            </li>
                                            <li class="mr-4">
                                                <span class="mr-2">
                                                 <i class="far fa-comment-dots"></i>
                                                </span>
                                                <span>22 نظر</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </b-col>
                        <b-col md="4">
                            <div class="item-single-recipe text-center">
                                <img src="../../../public/assets/img/blog-food/test.jpg" class="img-fluid" alt="">
                                <div class="item-detail-wrapper">
                                    <button class="get-more-recipes">ادامه</button>
                                    <b-card class="parent-item-wrapper">
                                        <div class="item-wrapper">
                                            <div class="inner-item text-center">
                                                <span class="date-item ">1398.01.23</span>
                                                <p class="title-item">بهترین و جدیدترین دستورالعمل غذایی</p>
                                                <p class="text-justify description-item">
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                                    استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
                                                    ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                                                    کاربردهای
                                                </p>
                                            </div>
                                        </div>
                                    </b-card>
                                    <div class="comment-like-area-wrapper">
                                        <ul class="list-unstyled d-flex justify-content-center p-3 comment-like-area-list-parent">
                                            <li class="mr-4">
                                                <span class="mr-2">
                                                    <i class="far fa-heart"></i>
                                                </span>
                                                <span>22 Likes</span>
                                            </li>
                                            <li class="mr-4">
                                                <span class="mr-2">
                                                 <i class="far fa-comment-dots"></i>
                                                </span>
                                                <span>22 نظر</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </div>
        </b-container>
    </b-container>
</template>

<script>
    export default {
        name: "recipes-program-component"
    }
</script>

<style scoped>

</style>
