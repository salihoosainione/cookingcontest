<template>
    <div>
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
    import foodCategory from './food-category-component';
    import foodPreview from './preview-food-component';
    import recipes from './recipes-component';
    import foodPreviewVideo from './food-preview-video-component';
    import delicious from './delicious-component';
    import topChef from './top-chefs-component';
    import recipesProgram from './recipes-program-component';

    export default {
        name: "index",
        components: {
            foodCategory,
            foodPreview,
            recipes,
            foodPreviewVideo,
            delicious,
            topChef,
            recipesProgram,
        }
    }
</script>

<style scoped>

</style>
