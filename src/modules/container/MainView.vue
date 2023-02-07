<template>
    <!-- LEFT NAVBAR -->
    <aside>
        <!-- LOGO -->
        <div class="container-logo">
            <span class="material-icons-sharp">fastfood</span>
            <h5>FastFood</h5>
        </div>
        
        <!-- SEARCH -->
        <div class="input-search password">
            <input type="text" placeholder="¿Que pediras hoy?">
            <span class="icon-search material-icons-outlined">search</span>
        </div>


        <!-- ITEMS -->
        <div class="menu-container">
           
           <div class="item-menu float-item">
                <span class="bg-warning material-icons-sharp">shopping_cart</span>
                <div class="notification bg-info">0</div>
           </div>

            <div class="item-menu not-show">
                <span class="bg-ligth material-icons-sharp">notifications</span>
                <div class="notification bg-danger">1</div>
           </div>

           <div class="item-menu not-show">
                <span class="bg-ligth material-icons-sharp">account_circle</span>
                <div class="user-main">
                    <h5>JMoreI</h5>
                </div>
           </div>

           <div class="item-menu btn-menu" @click="openMenu = !openMenu">
            <!-- sort | segment -->
                <span class="material-icons-sharp">{{ openMenu === true ? 'sort' : 'segment' }}</span>
           </div>

        </div>
    </aside>
    <!-- END LEFT NAVBAR -->

    <!-- NAVIGATOR NAVBAR -->
    <div :class="openMenu === true ? 'navbar-item show-navbar' : 'navbar-item'">
        <NavigatorNav :openmenu="openMenu"/>
    </div>
    <main>
        <!-- CONTAINER LEFT -->
       <div class="container-left">
            <h3>CATEGORIA</h3>
       </div>

       <!-- SHOPPING CART -->
       <div class="container-carrito">
            <h3>SHOOPING</h3>
       </div>
    </main>
</template>
<style scoped>
    @import './StyleMain.css';
</style>
<script src="./Main.ts" lang="ts"></script>

