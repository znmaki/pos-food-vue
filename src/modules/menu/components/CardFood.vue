<script setup lang="ts">
import { ref, watch } from 'vue';
import type { Food } from "../interfaces/food";

import DynamicButton from '@/shared/components/DynamicButton.vue';
import { useOrderStore } from '@/store/order';
import { storeToRefs } from 'pinia';

interface Props {
  menu: Food[];
}
const store = useOrderStore();
const { order } = storeToRefs(store)

const props = defineProps<Props>();
const amountOrder = ref(0);
const orderList = ref<Food[]>([])

if (order.value.length == 0) {
  watch(() => props.menu, () => {
    orderList.value = props.menu.map(food => ({ ...food, amount: 0 }))
  })
}

watch(() => order.value, () => {
  orderList.value = orderList.value.map(itemList =>
    order.value.find(item => item.id === itemList.id) || itemList
  );

  console.log(orderList.value);
})

</script>

<template>
  <template v-if="orderList.length > 0">
    <div v-for="food of orderList" :key="food.id" class="bg-light-black flex flex-col p-5 rounded-lg relative">
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
      <DynamicButton type="ButtomCounter" v-model:amountOrder="amountOrder" :orderObject="food" />
      <!-- <DynamicButton type="ButtomCounter" :orderObject="food" /> -->
    </div>
  </template>
  <template v-else>
    <p>No hay elementos en la lista de pedidos.</p>
  </template>
</template>

<style scoped></style>
