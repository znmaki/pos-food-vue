<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import type { Food } from "../interfaces/food";

import DynamicButtonPrueba from '@/shared/components/DynamicButtonPrueba.vue';
import { useOrderStore } from '@/store/order';
import { storeToRefs } from 'pinia';

interface Props {
  menu: Food[];
}
const store = useOrderStore();
const { order } = storeToRefs(store)

const props = defineProps<Props>();
const orderedMenu = ref<Food[]>([]);

const updateOrderedMenu = () => {
  orderedMenu.value = props.menu.map(menuItem => {
    const matchingOrderItem = order.value.find(orderItem => orderItem.id === menuItem.id);
    return matchingOrderItem || menuItem;
  });
};

watch(() => props.menu, () => {
  updateOrderedMenu();
});

onMounted(updateOrderedMenu);
</script>

<template>
  <template v-if="orderedMenu.length > 0">
    <div v-for="food of orderedMenu" :key="food.id" class="bg-light-black flex flex-col p-5 rounded-lg relative">
      <img className="rounded-lg h-[140px]" :src="food.image" :alt="food.name + ' image'" />
      <p className="truncate mt-2 ">{{ food.name }}</p>
      <div className="flex justify-between items-end relative py-4">
        <p className="text-primary text-lg font-bold leading-[18px]">
          $ {{ food.price }}
        </p>
        <p className="text-lead-cuztse text-sm font-bold leading-[18px]">
          {{ food.items }} items
        </p>
      </div>
      <DynamicButtonPrueba type="ButtomCounter" :orderObject="food" />
    </div>
  </template>
  <template v-else>
    <p>No hay elementos en la lista de pedidos.</p>
  </template>
</template>

<style scoped></style>
