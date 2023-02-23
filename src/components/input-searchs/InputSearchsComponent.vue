<template>
    <div class="input-group">
        <input type="text" placeholder="¿what will you order today?">
        <span class="icon-search material-icons-outlined">search</span>
    </div>
</template>
<style scoped>
.input-group{
    display: flex;
    position: relative;
}
.input-group input{
    width: 100%;
    border: none;
    color: var(--color-dark);
    box-sizing: border-box;
    padding: 15px 35px 15px 15px;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.02);
    outline: none;
    font-weight: 800;
}
.input-group input[type=text]:focus{
    border: 2px solid var(--color-light);
}
.icon-search{
    position: absolute;
    width: 20px;
    height: 20px;
    top: 50%;
    transform: translateY(-50%);
    left: unset;
    right: 50px;
    color: var(--color-primary);
}
/* PARA DISPOSITIVOS EXTRA PEQUEÑOS */
@media only screen and (max-width: 600px){
    .icon-search{
        right: 15px;
    }

}
</style>