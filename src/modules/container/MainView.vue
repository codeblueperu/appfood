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

           <div class="item-menu btn-menu">
            <!-- sort | segment-->
                <span class="material-icons-sharp">sort</span>
           </div>

        </div>
    </aside>
    <!-- END LEFT NAVBAR -->
</template>

<style scoped>
    @import './StyleMain.css';
</style>