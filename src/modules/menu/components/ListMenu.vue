<script setup lang="ts">
import type { Food } from '../interfaces/food';
import CardFoodPrueba from './CardFoodPrueba.vue';

interface Props {
    menu: Food[],
    
}
const props = defineProps<Props>()
</script>

<template>
    <div class="basis-[75%] flex-nowrap">
        <slot />
        <div class="list-products">
            <CardFoodPrueba :menu="props.menu"/>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.list-products {
    @apply mt-5 grid grid-cols-1 gap-4 2xl:grid-cols-4
}

</style>