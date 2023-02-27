<template>
    <div class="row flex-center">
        <div class="card-shopping">
            <div class="header-shopping">
                <router-link to="/home"><span class="material-icons-outlined">west</span></router-link>
                <div class="product">
                    <h5>PIZAA ITALIAN + COLA COLA 1LT</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ratione fugit dicta iste illum
                        obcaecati itaque possimus saepe minima, beatae minus suscipit quas quisquam aperiam, aliquam atque
                        voluptatum. Quaerat, ad.</p>
                </div>
                <div><span class="material-icons-outlined">favorite_border</span></div>
            </div>
            <div class="body-shopping">
                <div class="top-content">
                    <div class="panel-image">
                        <img src="@/assets/img/pizzaone.png" alt="">
                        <div class="content-size">
                            <div class="size">M</div>
                            <div class="size active-size">L</div>
                            <div class="size">S</div>
                        </div>
                        <div class="content-count">
                            <span class="material-icons-outlined">remove</span>
                            <input type="text" value="1" disabled>
                            <span class="material-icons-outlined">add</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-food">
                <div class="price">
                    <p>Price:</p>
                    <h5><sub>$</sub> 32.95</h5>
                </div>
                <div class="add-shopping">
                    <button type="button"><span class="material-icons-outlined">shopping_cart</span> Go to Cart</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import './StyleAddItem.css';
</style>
<script src="./AddItem.ts" lang="ts"></script>