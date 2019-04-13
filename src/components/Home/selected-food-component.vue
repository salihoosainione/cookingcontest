<template>
    <div>
        <div id="carouselFoodSelected" class="carousel slide mt-5" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="card">
                        <div class="container parent-all-item">
                            <div class="row">
                                <div class="col-md-7">5</div>
                                <div class="col-md-5">
                                    <div class="food-detail-item">
                                        <p class="food-title text-center">اشترودل جوجه کباب</p>
                                        <span class="d-block food-slogan text-center">غذا خوشمزه</span>
                                        <span class="powered-detail d-block text-center">
                                        <span class="food-recipes-powered">آشپز:</span>
                                        <span class="recipes-name">سیدعلی حسینی</span>
                                   </span>
                                        <star-rating
                                                inactive-color="#ff9000"
                                                active-color="#ff9000"
                                                increment="1"
                                                rtl
                                                star-size="20"
                                                :rating="rating">
                                        </star-rating>

                                        <div class="ingredients-food mt-3">
                                            <ul class="list-unstyled p-0 ingredients-parent-item text-center">
                                                <li>حرفه ای و عالی</li>
                                                <li>حرفه ای و عالی</li>
                                                <li>حرفه ای و عالی</li>
                                                <li>حرفه ای و عالی</li>
                                            </ul>
                                            <div class="text-center mb-3">
                                                <button class="btn custom-btn custom-btn-selected-detail-food">
                                                    <i class="fas fa-dumpster"></i>
                                                    من انجامش دادم
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselFoodSelected" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true">
                <i class="fas fa-chevron-left"></i>
            </span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselFoodSelected" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true">
                  <i class="fas fa-chevron-right"></i>
            </span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>

<script>
    import StarRating from 'vue-star-rating';

    export default {
        name: "selected-food-component",
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

<style>
    .vue-star-rating-rating-text {
        display: none;
    }

    .carousel-control-prev-icon, .carousel-control-next-icon {
        border: 1px solid #d1ddcd;
        border-radius: 50%;
        padding: 25px;
        position: relative;
    }

    .fa-chevron-left {
        color: #666666;
        position: absolute;
        top: 15px;
        left: 17px;
        font-size: 18px;
    }

    .fa-chevron-right {
        color: #666666;
        position: absolute;
        top: 16px;
        left: 20px;
        font-size: 18px;
    }
</style>
