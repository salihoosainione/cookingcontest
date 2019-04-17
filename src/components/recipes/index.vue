<template>
    <b-container fluid class="mt-5">
        <b-container>
            <!--            card data-->
            <div class="detail-card-wrapper">
                <b-card>
                    <b-container>
                        <b-row class="row-inner-recipes">
                            <b-col md="5" offset-md="1">
                                <div class="details-parent">
                                    <p class="food-name">ماهی کباب</p>
                                    <p class="detail-created">
                                        <span class="title-date">منتشر شده در تاریخ</span>
                                        <span class="date">1398.01.24</span>
                                        <span class="separator"></span>
                                        <span class="location-creation">در ایران</span>
                                    </p>
                                    <div class="food-detail-item mt-4">
                                        <!--info-->
                                        <b-card class="p-3 card-detail">
                                            info
                                        </b-card>
                                        <!--rating-->
                                        <div class="rating-item mt-3">
                                            <star-rating class="d-inline-block"
                                                         inactive-color="#ffbf00"
                                                         active-color="#ffbf00"
                                                         increment="1"
                                                         rtl
                                                         star-size="20"
                                                         :rating="rating">
                                            </star-rating>
                                            <span class="rating-number ml-3">
                                            rating (4.2 /5) 76
                                            </span>
                                        </div>
                                        <!--social icon-->
                                        <div class="social-icon-recipe">
                                            <ul class="list-unstyled list-inline social-icon-item-parent">
                                                <li class="list-inline-item facebook-item">
                                                    <a href="#">
                                                        <i class="fab fa-facebook-f text-white middle-align"></i>
                                                    </a>
                                                </li>
                                                <li class="list-inline-item google-plus-item">
                                                    <a href="#">
                                                        <i class="fab fa-google-plus-g text-white middle-align"></i>
                                                    </a>
                                                </li>
                                                <li class="list-inline-item twitter-item">
                                                    <a href="#">
                                                        <i class="fab fa-twitter text-white middle-align"></i>
                                                    </a>
                                                </li>
                                                <li class="list-inline-item linkedin-item">
                                                    <a href="#">
                                                        <i class="fab fa-linkedin-in text-white middle-align"></i>
                                                    </a>
                                                </li>
                                                <li class="list-inline-item telegram-item">
                                                    <a href="#">
                                                        <i class="fab fa-telegram-plane text-white middle-align"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </b-col>
                            <b-col md="5" offset-md="1">5</b-col>
                        </b-row>
                    </b-container>
                </b-card>
            </div>
            <!--            recipes description-->
            <div class="recipes-description">
                <b-container>
                    <p class="text-justify description">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        چاپگرها
                        و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                        و
                        کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال
                        و
                        آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان
                        رایانه
                        ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت
                        که
                        تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
                        حروفچینی
                        دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p>
                </b-container>
            </div>
            <!--            ingredients section-->
            <div class="ingredients-details">
                <b-row>
                    <b-col md="6">666</b-col>
                    <b-col md="6">
                        <div class="ingredients-item-wrapper">
                            <p class="title">عناصر</p>
                            <ul class="list-unstyled p-0 ingredients-item">
                                <li>روغن</li>
                                <li>شکر</li>
                                <li>زردچوبه</li>
                                <li>دارچین</li>
                                <li>هل</li>
                                <li>گلاب</li>
                                <li>آرد</li>
                                <li>زعفران</li>
                                <li>همزن</li>
                            </ul>
                        </div>
                    </b-col>
                </b-row>
                <b-row>
                    <div class="instructions-item-wrapper">
                        <p class="instructions-title text-center">دستورالعمل ها</p>
                        <ul class="list-unstyled instructions-item">
                            <li>
                                وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
                            </li>
                            <li>
                                وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
                            </li>
                            <li>
                                وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
                            </li>
                            <li>
                                وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
                            </li>
                            <li>
                                وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
                            </li>
                            <li>
                                وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
                            </li>
                        </ul>
                    </div>
                </b-row>
            </div>
            <!--            gallery preview recipes-->
            <div class="gallery-recipes mt-5">
                <b-row>
                    <b-col sm="6" md="3">1</b-col>
                    <b-col sm="6" md="3">2</b-col>
                    <b-col sm="6" md="3">3</b-col>
                    <b-col sm="6" md="3">4</b-col>
                </b-row>
            </div>
            <!--recipes introduction-->
            <div class="recipes-introduction mt-5 mb-5">
                <b-card>
                    <div class="recipes-wrapper">
                        <b-row>
                            <b-col md="7" lg="7">
                                <div class="recipes-description-wrapper">
                                    <span class="recipes-about-title">درباره سرآشپز</span>
                                    <p class="recipes-name-single">سیدعلی حسینی</p>
                                    <p class="chef-description">
                                        ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                        گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                                        برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                                        کاربردی
                                        می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه
                                    </p>
                                    <div class="recipes-social-icon ">
                                        <ul class="list-unstyled list-inline social-list-parent pr-0">
                                            <li class="list-inline-item facebook">
                                                <a href="#">
                                                    <i class="fab fa-facebook-f  middle-align text-white"></i>
                                                </a>
                                            </li>
                                            <li class="list-inline-item google">
                                                <a href="#">
                                                    <i class="fab fa-google middle-align text-white"></i>
                                                </a>
                                            </li>
                                            <li class="list-inline-item twitter">
                                                <a href="#">
                                                    <i class="fab fa-twitter  middle-align text-white"></i>
                                                </a>
                                            </li>
                                            <li class="list-inline-item instagram ">
                                                <a href="#">
                                                    <i class="fab fa-instagram middle-align text-white"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </b-col>
                            <b-col md="5" lg="5">5</b-col>
                        </b-row>
                    </div>
                </b-card>
            </div>
        </b-container>
    </b-container>
</template>

<style scoped lang="scss">
    @import "../../../public/assets/css/variable";

    .middle-align {
        vertical-align: middle;
    }

    .row-inner-recipes {
        padding: 40px;

        .details-parent {
            .food-name {
                color: $gray;
                font-weight: bold;
                font-size: 18px;
            }

            .detail-created {
                .title-date {
                    color: $gray_Pale;
                    font-size: 13px;
                }

                .date {
                    color: $gold;
                    font-weight: bold;
                    font-size: 14px;
                    margin-right: 10px;
                }

                .separator {
                    border-left: 1px solid $gray_Pale;
                    margin: 15px;
                }

                .location-creation {
                    color: $gray_Pale;
                    font-size: 13px;
                }
            }

            .food-detail-item {
                .card-detail {
                    background: $gold;
                    position: relative;

                    &:after {
                        position: absolute;
                        content: " ";
                        width: 0;
                        height: 0;
                        border-style: solid;
                        border-width: 20px 0 0 20px;
                        border-color: transparent transparent transparent #c0994a;
                        right: 50px;
                        top: -17px;
                    }
                }

                .rating-item {
                    .rating-number {
                        color: $gray;
                        font-weight: bold;
                        font-size: 12px;
                    }
                }

                .social-icon-recipe {
                    .social-icon-item-parent {
                        .facebook-item {
                            background: #365ccc;
                            color: #fff;
                            border: 1px solid #ccc;
                            border-radius: 50%;
                            padding: 10px 18px;
                            margin-left: 10px;
                        }

                        .google-plus-item {
                            background: #e42d31;
                            color: #fff;
                            border: 1px solid #ccc;
                            border-radius: 50%;
                            padding: 10px 18px;
                            margin-left: 10px;
                        }

                        .twitter-item {
                            background: #36c7e2;
                            color: #fff;
                            border: 1px solid #ccc;
                            border-radius: 50%;
                            padding: 10px 18px;
                            margin-left: 10px;
                        }

                        .linkedin-item {
                            background: #0f9cd6;
                            color: #fff;
                            border: 1px solid #ccc;
                            border-radius: 50%;
                            padding: 10px 18px;
                            margin-left: 10px;
                        }

                        .telegram-item {
                            background: #58b7dd;
                            color: #fff;
                            border: 1px solid #ccc;
                            border-radius: 50%;
                            padding: 10px 18px;
                            margin-left: 10px;
                        }
                    }
                }
            }
        }
    }

    .recipes-description {
        .description {
            line-height: 50px;
        }
    }

    .ingredients-details {
        background: #fbfbfb;
        border: 1px solid #fbfbfb;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        padding: 40px;
        /*ingredients*/
        .ingredients-item-wrapper {
            .title {
                font-weight: bold;
                font-size: 22px;
                color: $gray;
                margin-bottom: 3px;
            }

            .ingredients-item {
                li {
                    line-height: 40px;
                    position: relative;
                    color: $gray_Pale;

                    &:before {
                        content: "\2713";
                        position: absolute;
                        width: 5px;
                        height: 2px;
                        color: #32ca2f;
                        right: -20px;
                    }
                }
            }
        }

        /*instructions*/
        .instructions-item-wrapper {
            .instructions-title {
                font-weight: bold;
                color: $gray;
                font-size: 20px;
            }

            .instructions-item {
                li {
                    position: relative;
                    line-height: 50px;
                    color: $gray_Pale;
                    font-size: 15px;

                    &:before {
                        content: " ";
                        background: #c0994a;
                        width: 8px;
                        height: 8px;
                        position: absolute;
                        right: -14px;
                        top: 20px;
                        border-radius: 50%;
                    }
                }
            }
        }
    }

    /*recipes-introduction*/
    .recipes-introduction {
        .recipes-wrapper {
            padding: 30px;

            .recipes-description-wrapper {
                .recipes-about-title {
                    color: $gold;
                }

                .recipes-name-single {
                    color: $gray;
                    font-weight: bold;

                }

                .chef-description {
                    color: $gray_Pale;
                    font-size: 15px;
                    line-height: 30px;
                }

                .recipes-social-icon {
                    .social-list-parent {
                        li {
                            border: 1px solid #ccc;
                            border-radius: 50%;
                            padding: 10px 18px;
                            margin-left: 10px;
                        }

                        .facebook {
                            background: #365dce;
                        }

                        .google {
                            background: #e52d31;
                        }

                        .twitter {
                            background: #36c6e1;
                        }

                        .instagram {
                            background: #0f9cd6;
                        }
                    }
                }
            }
        }
    }
</style>

<script>
    import StarRating from 'vue-star-rating';

    export default {
        name: "index",
        data() {
            return {
                rating: 3
            }
        },
        components: {
            StarRating
        }
    }
</script>
