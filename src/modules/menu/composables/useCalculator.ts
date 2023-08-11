import { computed } from "vue";

import { useOrderStore } from "@/store/order";
import { storeToRefs } from "pinia";

export const useCalculator = () => {

    const store = useOrderStore();
    const { order } = storeToRefs(store)


    //Calculo Total 
    const total = computed(() => {
        return order.value.reduce((accumulator, currentObject) => {
            return accumulator + (currentObject.price * currentObject.amount);
        }, 0);
    });

    //Calculo del IGV (18%)
    const igv = computed(() => {
        return (total.value * 0.18)
    })

    //Calculo del Sub total
    const subTotal = computed(() => {
        return (total.value - igv.value)
    })
    return {
        //Properties
        order,
        
        //Methods
        total,
        igv,
        subTotal,
    }
}