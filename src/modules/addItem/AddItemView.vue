<template>
    <div class="row flex-center">
        <div class="card-shopping">
            <div class="header-shopping">
                <router-link to="/home"><span class="material-icons-outlined">west</span></router-link>
                <h5>PIZAA ITALIAN + COLA COLA 1LT</h5>
                <span class="material-icons-outlined">favorite_border</span>
            </div>
            <div class="body-shopping">
                <div class="top-content">
                    <div class="panel-left">
                        <div class="price-item">
                            <h3> <sub>$</sub>15.99</h3>
                        </div>
                    </div>
                    <div class="panel-image">
                        <img src="@/assets/img/pizzaone.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import './StyleAddItem.css';
</style>
<script src="./AddItem.ts" lang="ts"></script>