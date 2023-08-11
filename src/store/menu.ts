import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Food } from '@/modules/menu/interfaces/food';

export const useMenuStore = defineStore('menu', () => {

    const menu = ref<Food[]>([]);

    return {
        // State properties
        menu,

        // Getters
        setMenu(newMenu: Food[]) {
            menu.value = newMenu;
        },

        // Actions
    };
});