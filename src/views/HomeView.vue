<script setup>
import useTransactions from '../composables/transactions';
import { onMounted } from 'vue';

const { transactions, getTransactionsSummary } = useTransactions()

onMounted(() => getTransactionsSummary())
</script>

<template>
  <div class="block max-w-7xl bg-white border border-gray-200 rounded-lg shadow">
    <p class="mb-2 p-4 text-2xl font-bold tracking-tight text-gray-900 text-center">Transactions Summary</p>
    <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Date
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Count
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="transaction in transactions" :key="transaction._id" class="bg-white border-b">
                    <td class="px-6 py-4">
                        {{ transaction._id }}
                    </td>
                    <td class="px-6 py-4">
                        {{ transaction.count }}
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
  </div>
</template>
