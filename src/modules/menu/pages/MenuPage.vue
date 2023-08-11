<script setup lang="ts">
import { ref, watch } from 'vue';
import FoodSearchFilter from '../components/FoodSearchFilter.vue';
import ListMenu from '../components/ListMenu.vue';
import OrdersFood from '../components/OrdersFood.vue';
import useFoods from '../composables/useFoods';
import { useRoute } from 'vue-router';
const route = useRoute()
const routeType = ref(route.params.typeMenu)

const { menu } = useFoods(routeType)

watch(() => route.params.typeMenu, newType => {
    routeType.value = newType;
});
</script>

<template>
        <!-- LISTA DEL MENU -->
        <ListMenu :menu="menu">
            <!-- HEADER -->            
            <FoodSearchFilter />
        </ListMenu>

        <!-- ORDENES -->
        <OrdersFood />
</template>

<style scoped></style>