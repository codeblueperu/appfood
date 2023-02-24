<template>
    <div class="address-main">
        <span id="btn-address" class="material-icons-outlined">room</span>
        <h5>Jr. Meliton Carbajal #240 - SMP</h5>
    </div>
</template>
<style scoped>
.address-main {
    display: flex;
    gap: 7px;
    flex-direction: row;
    align-items: center;
}

.address-main h5 {
    color: var(--color-dark-ligth);
    font-weight: 600;
}

#btn-address {
    cursor: pointer;
    color: var(--color-primary);
    padding: 0.3rem;
}


/* ================================================================================================= */

/* PARA DISPOSITIVOS EXTRA PEQUEÑOS */
@media only screen and (max-width: 600px) {

}

/* PARA DISPOSITIVOS PEQUEÑOS */
@media only screen and (min-width: 600px) {}

/* PARA DISPOSITIVOS MEDIANOS */
@media only screen and (min-width: 768px) {}

/* PARA DISPOSITIVOS GRANDES */
@media only screen and (min-width: 992px) {}

/* PARA DISPOSITIVOS EXTRA GRANDES */
@media only screen and (min-width: 1200px) {}
</style>