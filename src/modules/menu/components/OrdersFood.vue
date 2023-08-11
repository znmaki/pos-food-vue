<script setup lang="ts">
import CardOrder from './CardOrder.vue';
import { useCalculator } from '../composables/useCalculator';
import DynamicButtonPrueba from '@/shared/components/DynamicButtonPrueba.vue';

const { total, igv, subTotal, order } = useCalculator()
</script>

<template>
    <div class="basis-[25%] flex flex-col justify-between space-y-5">
        <div class="space-y-4">
            <h2 class="text-2xl">Order</h2>
            <div class="space-y-5 mt-2 overflow-y-auto h-[500px] rounded-lg">
                <CardOrder :orders="order" />
            </div>
        </div>

        <div class="resumen-cart">
            <div class="flex">
                <div class="basis-2/4 space-y-5">
                    <p>Sub Total</p>
                    <p>IGV (18%)</p>
                    <div class="hr-style"></div>
                    <p>Total</p>
                </div>
                <div class="flex flex-col basis-2/4 space-y-5">
                    <p class="self-end">$ {{ subTotal.toFixed(2) }}</p>
                    <p class="self-end">$ {{ igv.toFixed(2) }}</p>
                    <div class="hr-style"></div>
                    <p class="self-end">$ {{ total.toFixed(2) }}</p>
                </div>
            </div>
            <DynamicButtonPrueba text='Generate Ticket' type="ButtomIconText" class="flex items-center justify-center mt-[2rem] w-full text-center bg-primary py-4 rounded-lg font-semibold space-x-5"/>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.resumen-cart {
    @apply bg-light-black px-5 py-7 rounded-lg;
}

.hr-style {
    border-bottom: 3px dashed #6a6b71;
    height: 1px;
}
</style>
