<template>
    <div class="item">
        <div class="content-item">
            <div :class="bgColor">
                <img src="@/assets/img/pizzaone.png" alt="not_found_image">
            </div>
            <div class="description-count">
                <b>Pizza Italiana</b>
                <span>x <b> 2</b></span>
            </div>
        </div> 
        <div class="price">
            <span>$ <b> 7.49</b></span>
        </div>
        <div class="delete-item">
            <span class="material-icons-outlined">delete</span>
        </div>
    </div>
</template>
<style scoped>
    @import './StyleItemOrder.css';
</style>
<script src="./ItemOrder.ts" lang="ts"></script>