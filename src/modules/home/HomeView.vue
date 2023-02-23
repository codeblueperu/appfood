<template>
    <div class="main-category-container">
        <div class="text-category">
            <p>Menu <span class="material-icons-outlined">radio_button_unchecked</span> <b> Category</b></p>
        </div>
        <div class="category-container">
            <Itemcategory :activeclass="true" />
            <Itemcategory :activeclass="false" />
            <Itemcategory :activeclass="false" />
            <Itemcategory :activeclass="false" />
            <Itemcategory :activeclass="false" />
            <Itemcategory :activeclass="false" />
            <Itemcategory :activeclass="false" />
            <Itemcategory :activeclass="false" />
            <Itemcategory :activeclass="false" />
            <Itemcategory :activeclass="false" />
        </div>
    </div>
    <div class="container-carta-menu">
        <div class="text-category">
            <p>Menu <span class="material-icons-outlined">radio_button_unchecked</span> <b> Popular Dish</b></p>
        </div>
        <div class="container-items-card-menu">
            <CardMenu />
            <CardMenu />
            <CardMenu />
            <CardMenu />
            <CardMenu />
            <CardMenu />
            <CardMenu />
            <CardMenu />
            <CardMenu />
            <CardMenu />
            <CardMenu />
            <CardMenu />
            <CardMenu />
            <CardMenu />
            <CardMenu />
            <CardMenu />
            <CardMenu />
            <CardMenu />
            <CardMenu />
            <CardMenu />
            <CardMenu />
            <CardMenu />
            <CardMenu />
            <CardMenu />
        </div>
    </div>
</template>
<style scoped>
    @import './StyleHome.css';
</style>
<script src="./home.ts" lang="ts"></script>