<template>
    <b-container fluid class="mt-5">
        <b-container>
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
