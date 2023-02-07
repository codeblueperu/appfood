import NavigatorNav from '@/modules/container/NavigatorComponent.vue'
import InputSearchs from '@/components/input-searchs/InputSearchsComponent.vue'
import Itemcategory from '@/components/item-category/ItemCategoryComponet.vue'
import { ref, Ref } from 'vue'
const appMain = {
    name: "mainapp",
    components:{
        NavigatorNav,
        InputSearchs,
        Itemcategory
    },
    
    setup(){
        let openMenu: Ref<boolean> = ref(false)


        return {
            openMenu
        }
    }
}

export default appMain