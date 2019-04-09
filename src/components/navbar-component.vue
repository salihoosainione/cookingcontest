<template>
    <b-container fluid id="menu-parent-top">
        <b-navbar toggleable="lg" type="dark">
            <b-container>
                <b-navbar-brand href="#">NavBar</b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="navbar-top-item">
                        <b-nav-item href="#">خانه</b-nav-item>
                        <b-nav-item href="#">صفحات</b-nav-item>
                        <b-nav-item href="#">نمونه کارها</b-nav-item>
                        <b-nav-item href="#">بلاگ</b-nav-item>
                        <b-nav-item href="#">فروشگاه</b-nav-item>
                        <b-nav-item href="#">تماس با ما</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
                <b-navbar-nav class="mr-auto">
                    <b-badge class="badge-shop-parent"><i class="fas fa-cart-plus"></i></b-badge>
                    <b-button class="send-recipe">ارسال دستورالعمل</b-button>
                </b-navbar-nav>
                <!--header section-->

            </b-container>
        </b-navbar>
    </b-container>
</template>

<script>
    export default {
        name: "navbar-component"
    }
</script>

<style scoped>

</style>
