<template>
    <b-container fluid class="mt-5 top-chef-wrapper">
        <b-container class="mt-5">
            <div class="header-top-chef-wrapper">
                <p class="text-center title-introduction-section">کارشناسان حرفه ای</p>
                <p class="text-center  title-instructions">دستور العمل های آشپزان برتر</p>
            </div>
            <!--item-->
            <b-row>
                <b-col md="4">
                    <b-card>
                        <b-row>
                            <b-col md="6">
                                <div class="chef-item-wrapper text-center">
                                    <span class="instructions-count">24دستور العمل</span>
                                    <p class="title-chef mb-2">سیدعلی حسینی</p>
                                    <span class="get-more-parent mb-3">
                                        <i class="fas fa-long-arrow-alt-right get-more"></i>
                                    </span>
                                </div>
                            </b-col>
                            <b-col md="6">6</b-col>
                        </b-row>
                    </b-card>
                </b-col>
                <b-col md="4">
                    <b-card>
                        <b-row>
                            <b-col md="6">
                                <div class="chef-item-wrapper text-center">
                                    <span class="instructions-count">24دستور العمل</span>
                                    <p class="title-chef mb-2">سیدعلی حسینی</p>
                                    <span class="get-more-parent mb-3">
                                        <i class="fas fa-long-arrow-alt-right get-more"></i>
                                    </span>
                                </div>
                            </b-col>
                            <b-col md="6">6</b-col>
                        </b-row>
                    </b-card>
                </b-col>
                <b-col md="4">
                    <b-card>
                        <b-row>
                            <b-col md="6">
                                <div class="chef-item-wrapper text-center">
                                    <span class="instructions-count">24دستور العمل</span>
                                    <p class="title-chef mb-2">سیدعلی حسینی</p>
                                    <span class="get-more-parent mb-3">
                                        <i class="fas fa-long-arrow-alt-right get-more"></i>
                                    </span>
                                </div>
                            </b-col>
                            <b-col md="6">6</b-col>
                        </b-row>
                    </b-card>
                </b-col>
            </b-row>
            <!--communication-parent-->
            <b-row class="communication-parent mt-3">
                <div class="communication-paths">
                     <span>
                            <i class="fas fa-phone-volume phone-icon mr-2"></i>
                            <span class="phone-title mr-2">شماره تماس:</span>
                            <span class="phone-number">09384203602</span>
                        </span>
                </div>
            </b-row>
            <!--social icon-->
            <b-row class="social-icon-parent mt-2">
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
            </b-row>
        </b-container>
    </b-container>
</template>

<script>
    export default {
        name: "top-chefs-component"
    }
</script>

<style scoped>

</style>
