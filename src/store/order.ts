import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Food } from '@/modules/menu/interfaces/food';

export const useOrderStore = defineStore('order', () => {

    const order = ref<Food[]>([]);

    return {
        // State properties
        order,

        // Getters newOrder: Food
        setOrder(newOrder: Food) {
            // Busca el índice del objeto existente en el array 'order.value'
            const existingOrderIndex = order.value.findIndex(item => item.id === newOrder.id);

            if (newOrder.amount === 0) {
                // Si la cantidad es 0, verifica si el objeto existe en la orden
                if (existingOrderIndex !== -1) {
                    // Si existe, elimina el objeto del array 'order.value'
                    order.value.splice(existingOrderIndex, 1);
                }
            } else {
                // Si la cantidad no es 0
                if (existingOrderIndex !== -1) {
                    // Si el objeto ya existe en la orden, actualiza sus detalles
                    order.value[existingOrderIndex] = newOrder;
                } else {
                    // Si el objeto no existe en la orden, agrégalo al final del array
                    order.value.push(newOrder);
                }
            }
        },

        // Actions
    };
});