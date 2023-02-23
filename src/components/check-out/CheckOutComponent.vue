<template>
    <div class="container-my-card">
        <div class="start-shopping-logo">
            <span class="material-icons-outlined">shopping_cart</span>
            <h3>My Cart</h3>
        </div>

        <div class="order-menu">
            <div class="title">
                <h3>Order Menu</h3>
                <span>View All <i class="material-icons-outlined">keyboard_double_arrow_right</i></span>
            </div>
            <div class="show-orders">
                <ItemOrder bg-color="image background-info" />
                <ItemOrder bg-color="image background-success" />
                <ItemOrder bg-color="image background-warning" />
                <ItemOrder bg-color="image background-danger" />
                <ItemOrder bg-color="image background-info" />
                <ItemOrder bg-color="image background-success" />
            </div>
        </div>
        <div class="container-checkout">
            <button class="btn btn-warning-round"><span class="material-icons-outlined">sell</span> CHECKOUT</button>
        </div>
    </div>
</template>
<style scoped>
@import './StyleCheckOut.css';
</style>
<script src="./CheckOut.ts" lang="ts"></script>