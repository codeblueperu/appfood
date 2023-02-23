import NavigatorNav from '@/components/navigation/NavigatorComponent.vue'
import InputSearchs from '@/components/input-searchs/InputSearchsComponent.vue'
import CheckOut from '@/components/check-out/CheckOutComponent.vue'

import { ref, Ref } from 'vue'
const appMain = {
    name: "mainapp",
    components:{
        NavigatorNav,
        InputSearchs,
        CheckOut
    },
    
    setup(){
        let openMenu: Ref<boolean> = ref(false)


        return {
            openMenu
        }
    }
}

export default appMain