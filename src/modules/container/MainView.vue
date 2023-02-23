<template>
    <aside>
        <div class="logo-app">
            <span class="material-icons-outlined">lunch_dining</span>
            <h4>FastFood</h4>
        </div>
        <!-- <div class="space-clear"></div> -->
        <span id="btn-menu" class="icon-menu bg-warning material-icons-outlined">menu</span>
        <div class="space-clear"></div>
        <div class="search-sm">
            <InputSearchs />
        </div>
        <div class="address-container">
            <span id="btn-address" class="material-icons-outlined">room</span>
            <h5>Jr. Meliton Carbajal #240 - SMP</h5>
        </div>
        <div class="items">
            <span class="icon-menu alert-icon bg-ligth material-icons-outlined">notifications</span>
            <div class="space-clear"></div>
            <span id="btn-shopping" class="icon-menu bg-shopping material-icons-outlined">shopping_cart</span>
        </div>
    </aside>
    <!-- INPUT SEARCH XS -->
    <div class="search-xs">
        <InputSearchs />
    </div>

    <main>
        <RouterView />
    </main>
    <div class="movimientos-container">
      <CheckOut/>
    </div>
</template>
<style scoped>
    @import './StyleMain.css';
</style>
<script src="./Main.ts" lang="ts"></script>

