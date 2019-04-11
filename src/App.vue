<template>
    <div id="app">
        <navbar></navbar>
        <header-content></header-content>
        <food-category></food-category>
        <food-Preview></food-Preview>
        <recipes></recipes>
        <food-preview-video></food-preview-video>
        <delicious></delicious>
    </div>
</template>

<script>
    import navbar from './components/navbar-component';
    import headerContent from './components/header-content-component';
    import foodCategory from './components/food-category-component';
    import foodPreview from './components/preview-food-component';
    import recipes from './components/recipes-component';
    import foodPreviewVideo from './components/food-preview-video-component';
    import delicious from './components/delicious-component';

    export default {
        name: 'app',
        components: {
            navbar,
            headerContent,
            foodCategory,
            foodPreview,
            recipes,
            foodPreviewVideo,
            delicious
        }
    }
</script>

<style>
</style>
