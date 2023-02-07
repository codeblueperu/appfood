import NavigatorNav from '@/modules/container/NavigatorComponent.vue'
import { ref, Ref } from 'vue'
const appMain = {
    name: "mainapp",
    components:{
        NavigatorNav
    },
    
    setup(){
        let openMenu: Ref<boolean> = ref(false)


        return {
            openMenu
        }
    }
}

export default appMain