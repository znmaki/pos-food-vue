import clientsApi from "@/api/pos-api";

import { watch, type Ref } from "vue";
import type { Food } from "../interfaces/food";
import { useQuery } from "@tanstack/vue-query";

import { useMenuStore } from "@/store/menu";
import { storeToRefs } from "pinia";

const getFoods = async (type: Ref<string | string[]>) => {
    const { data } = await clientsApi.get<Food[]>(`/menu?type=${type.value}`);
    return data;
}

const useFoods = (type: Ref<string | string[]>) => {
    const store = useMenuStore();
    const { menu } = storeToRefs(store);

    const { isLoading, data } = useQuery(
        ['menu', type],
        () => getFoods(type),
        {
            refetchOnWindowFocus: false,
        }
    );

    watch(data, foods => {
        if (foods)
            store.setMenu(foods)
    }, { immediate: true })

    return {
        //Properties
        menu,
        isLoading,

        //Methods

        //Getters

        //Mutations
    }
}

export default useFoods;
