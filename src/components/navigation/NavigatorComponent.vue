<template>
  <div class="item-menu">
    <span class="bg-success material-icons-sharp">account_circle</span>
    <div class="user-main">
      <h5>Jhony13.more@gmail.com</h5>
      <div class="perfil">Administrador</div>
    </div>
  </div>

  <div class="linea"></div>

  <div class="menu-option">
    <span class="material-icons-sharp">account_circle</span>
    <h5>Mi Perfil</h5>
  </div>

  <div class="menu-option active-item">
    <span class="material-icons-sharp">admin_panel_settings</span>
    <h5>Cambiar clave</h5>
  </div>

  <div class="menu-option">
    <span class="material-icons-sharp">admin_panel_settings</span>
    <h5>Notificaciones</h5>
    <div class="count">2</div>
  </div>

  <div class="menu-option">
    <span class="material-icons-sharp">logout</span>
    <h5>Salir</h5>
  </div>


</template>
<style scoped>
    .item-menu{
        display: flex;
        color: var(--color-white);
        align-items: center;
        gap: 7px;
    }

    .item-menu span{
        padding: .5rem;
        border-radius: 50%;
    }
    .user-main h5{
        font-size: 15px;
        font-weight: 400;
    }

    .user-main .perfil{
        font-size: 12px;
        color: var(--color-ligth);
        font-weight: 400;
    }

    .linea{
        width: 100%;
        display: flex;
        border-top: 1px solid var(--color-ligth);
        margin: 15px 0;
        margin-bottom: 30px;
    }

    .menu-option{
        display: flex;
        gap:7px;
        align-items: center;
        color:var(--color-white);
        padding: .5rem;
        border-radius: 7px;
        margin: 15px 0;
    }
    .menu-option span{
        color:var(--color-primary)
    }

    .menu-option h5{
        font-weight: 400;
    }
    .active-item{
        background:var(--color-primary-ligth);
        color: var(--color-dark);
    }
    .active-item span{
        background: var(--color-dark);
        color: var(--color-primary);
        padding: 5px;
        border-radius: 50%;
    }

    .count{
        background: var(--color-success);
        width: 20px;
        height:20px;
        color:var(--color-white);
        border-radius: 50%;
        text-align: center;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 120px;
    }
</style>

<script lang="ts" setup>
import { computed } from 'vue';

    const props = defineProps(['openmenu'])

    const emit = defineEmits(['update:openmenu'])

    const value = computed({
        get() {
            return props.openmenu
        },
        set(value) {
            emit('update:openmenu', value)
        }
    })
</script>