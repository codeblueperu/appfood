<template>
    <aside>
        <router-link class="router-link" to="/home">
            <div class="logo-app">
                <span class="material-icons-outlined">lunch_dining</span>
                <h4>FastFood</h4>
            </div>
        </router-link>
        <!-- <div class="space-clear"></div> -->

        <div class="space-clear"></div>
        <div class="search-sm">
            <InputSearchs />
        </div>
        <div class="address-container">
            <AddressInt />
        </div>
        <div class="items">
            <span id="btn-alert" class="icon-menu alert-icon bg-ligth material-icons-outlined">notifications</span>
            <span id="btn-menu" class="icon-menu bg-warning material-icons-outlined">shopping_cart</span>
        </div>
    </aside>

    <!-- INPUT SEARCH XS -->
    <div class="search-xs">
        <InputSearchs />
        <AddressInt />
    </div>
    <!-- MAIN CONTAINER -->
    <main>
        <RouterView />
    </main>
    <!-- RIGHT CONTAINER -->
    <div class="movimientos-container">
        <CheckOut />
    </div>
    <footer>
        <span class="material-icons-outlined">account_circle</span>
        <span class="material-icons-outlined">notifications</span>
        <span class="material-icons-outlined">logout</span>
    </footer>
</template>
<style scoped>
@import './StyleMain.css';
</style>
<script src="./Main.ts" lang="ts"></script>

