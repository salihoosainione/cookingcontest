<template>
    <div id="app">
        <navbar></navbar>
        <header-content></header-content>
        <food-category></food-category>
    </div>
</template>

<script>
    import navbar from './components/navbar-component';
    import headerContent from './components/header-content-component';
    import foodCategory from './components/food-category-component';

    export default {
        name: 'app',
        components: {
            navbar,
            headerContent,
            foodCategory
        }
    }
</script>

<style>
</style>
