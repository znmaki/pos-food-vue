<script setup lang="ts">
import type { Food } from "../interfaces/food";

interface Props {
  orders: Food[];
}

const props = defineProps<Props>();


</script>

<template>
  <div
    v-for="order of props.orders"
    :key="order.id"
    class="flex bg-light-black p-3 rounded-lg space-x-4"
  >
    <img
      class="rounded-lg w-[100px] h-[80px]"
      :src="order.image"
      :alt="order.name + ' image'"
    />
    <div class="flex flex-col justify-between basis-[60%]">
      <p>{{ order.name }}</p>
      <div class="flex justify-between items-end">
        <p>{{ order.amount }} unit.</p>
        <p>$ {{ (order.amount * order.price).toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
