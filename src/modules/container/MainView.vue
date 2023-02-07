<template>
 <aside>
    <!-- <div class="space-clear"></div> -->
    <span class="icon-menu bg-warning material-icons-outlined">menu</span>
    <div class="space-clear"></div>
    <div class="search-sm">
        <InputSearchs/>
    </div>
    <div class="items">
        <span class="icon-menu alert-icon bg-ligth material-icons-outlined">notifications</span>
        <div class="space-clear"></div>
        <span class="icon-menu bg-shopping material-icons-outlined">shopping_cart</span>
    </div>
 </aside>
 <!-- INPUT SEARCH XS -->
 <div class="search-xs">
    <InputSearchs/>
 </div>

 <main>
   <div class="main-category-container">
        <div class="text-category">
            <p>Menu <span class="material-icons-outlined">radio_button_unchecked</span>  <b> Categoria</b></p>
        </div>
        <div class="category-container">
            <Itemcategory :activeclass="true"/>
            <Itemcategory :activeclass="false"/>
            <Itemcategory :activeclass="false"/>
            <Itemcategory :activeclass="false"/>
            
        </div>
   </div>
 </main>
 <div class="shopping-container">
    shoping card
 </div>
</template>
<style scoped>
    @import './StyleMain.css';
</style>
<script src="./Main.ts" lang="ts"></script>

