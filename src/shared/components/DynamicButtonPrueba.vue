<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { Food } from "../../modules/menu/interfaces/food";
import { useOrderStore } from "../../store/order";

interface Props {
  type: string;
  text?: string;
  class?: any;
  icon?: JSX.Element;
  imgSrc?: string;
  amountOrder?: number;
  orderObject?: Food;
}
const store = useOrderStore();
const props = defineProps<Props>();
const amount = ref(0);
let updatedOrder: any = {}

const adjustQuantity = (value: number) => {
  // Asegurarse de que la cantidad nunca sea menor que 0
  amount.value = Math.max(amount.value + value, 0);
  // Crear una copia del objeto de orden con la cantidad actualizada
  updatedOrder = { ...props.orderObject, amount: amount.value };
  // Actualizar el pedido en el almacenamiento
  store.setOrder(updatedOrder);
};

onMounted(() => {
  if (props.orderObject && props.orderObject.amount !== undefined) {
    amount.value = props.orderObject.amount;
  }
});
</script>

<template>
  <RouterLink :to="{ name: 'menu', params: { typeMenu: props.text!.toLowerCase() } }"
    v-if="props.type === 'ButtomWithImg'" class="btn-icon">
    <img className="max-w-[2rem] mr-2" :src="props.imgSrc" :alt="props.text + ' alt'" />
    {{ props.text }}
  </RouterLink>

  <div v-if="props.type === 'ButtomCounter'" className="flex justify-center">
    <button class="border py-2 px-2 rounded-l-lg rounded-bl-lg bg-primary" @click="adjustQuantity(-1)"
      :class="{ 'bg-primary': amount !== 0, 'bg-[#e39191]': amount === 0 }" :disabled="amount === 0">
      -
    </button>

    <div class="border py-2 px-2 bg-light-black">
      {{ amount }}
    </div>

    <button class="border py-2 px-2 rounded-r-lg bg-primary" @click="adjustQuantity(+1)">
      +
    </button>
  </div>

  <button v-if="props.type === 'ButtomIconText'" :class="props.class">
    {{ props.icon }}
    <p>{{ props.text }}</p>
  </button>
</template>

<style lang="postcss" scoped>
.btn-icon {
  @apply flex justify-center items-center py-3 px-9 bg-light-black rounded-md border-2 border-transparent;
}

.btn-icon:hover {
  @apply cursor-pointer bg-reddish-black border-2 border-primary;
}
</style>
