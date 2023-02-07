<template>
    <div :class="activeclass === true ? 'card-category active-card' : 'card-category'">
        <div class="image-card">
            <img src="@/assets/img/categoryOne.png" alt="NOT_FOUND_IMAGE">
        </div>
        <div class="text-card">Pizza</div>
        <span class="icon-card material-icons-outlined">chevron_right</span>
    </div>
</template>
<style scoped>
.card-category {
    width: 110px;
    background: var(--color-white);
    padding: .9rem;
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    --margin: 15px;
    box-shadow: 5px 5px 10px 0px var(--color-secundary);
}

.card-category img {
    width: 45px;
    height: 45px;
    padding: 5px;
    border-radius: 50%;
}

.card-category .text-card {
    color: var(--color-dark);
    font-weight: 600;
    padding: 8px;
    font-size: 14px;
}

.card-category span {
    background: var(--color-primary);
    padding: 5px;
    border-radius: 50%;
    color: var(--color-white);
    font-size: 19px;
}   

.active-card{
    background: var(--color-primary);
    box-shadow: 5px 5px 10px 0px var(--color-secundary);
}
.active-card img{
    background: var(--color-white);
}
.active-card .text-card{
    color: var(--color-white);
}
.active-card span{
    background: var(--color-white);
    color: var(--color-primary);
}

/* PARA DISPOSITIVOS EXTRA PEQUEÑOS */
@media only screen and (max-width: 600px){
  
}
</style>
<script lang="ts" setup>
import { computed } from 'vue';

    const props = defineProps(['activeclass'])

    const emit = defineEmits(['update:activeclass'])

    const value = computed({
        get() {
            return props.activeclass
        },
        set(value) {
            emit('update:activeclass', value)
        }
    })
</script>