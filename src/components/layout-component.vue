<template>
    <div>
        <navbar></navbar>
        <header-content></header-content>
        <router-view></router-view>
        <main-footer></main-footer>
    </div>
</template>

<script>
    import navbar from './navbar-component';
    import headerContent from './header-content-component';
    import mainFooter from './main-footer-component';

    export default {
        name: "layout-componen",
        components: {
            navbar,
            headerContent,
            mainFooter
        }
    }
</script>

<style scoped>

</style>
