<template>
    <div id="app">
        <navbar></navbar>
        <header-content></header-content>
        <food-category></food-category>
        <food-Preview></food-Preview>
        <recipes></recipes>
        <food-preview-video></food-preview-video>
        <delicious></delicious>
        <top-chef></top-chef>
        <recipes-program></recipes-program>
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
    import topChef from './components/top-chefs-component';
    import recipesProgram from './components/recipes-program-component';

    export default {
        name: 'app',
        components: {
            navbar,
            headerContent,
            foodCategory,
            foodPreview,
            recipes,
            foodPreviewVideo,
            delicious,
            topChef,
            recipesProgram
        }
    }
</script>

<style>
</style>
