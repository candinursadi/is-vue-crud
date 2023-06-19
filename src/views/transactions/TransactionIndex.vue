<script setup>
import useTransactions from '../../composables/transactions';
import { onMounted } from 'vue';
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

const { transactions, getTransactions, destroyTransaction, page, pageCount } = useTransactions()

onMounted(() => getTransactions())
</script>
<template>
    <div class="block max-w-7xl bg-white border border-gray-200 rounded-lg shadow">

        <div class=" flex justify-end m-2 p-2">
            <RouterLink :to="{name: 'TransactionCreate'}" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Create Transaction</RouterLink>
        </div>

        <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Date
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Amount
                    </th>
                    <th scope="col" class="px-6 py-3">                            
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="transaction in transactions" :key="transaction._id" class="bg-white border-b">
                    <td class="px-6 py-4">
                        {{ transaction.created_at.substr(0,19).replace('T', ' ') }}
                    </td>
                    <td class="px-6 py-4">
                        {{ transaction.name }}
                    </td>
                    <td class="px-6 py-4">
                        {{ transaction.email }}
                    </td>
                    <td class="px-6 py-4">
                        {{ transaction.amount }}
                    </td>
                    <td class="px-6 py-4">
                            <RouterLink :to="{name: 'TransactionEdit', params: {id: transaction._id}}" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-xs px-5 py-2.5 text-center mr-2 mb-2">
                            Edit
                        </RouterLink>
                            <button @click="destroyTransaction(transaction._id)" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-xs px-5 py-2.5 text-center mr-2 mb-2">
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="flex flex-col items-center p-4">
            <v-pagination
              v-model="page"
              :pages="pageCount"
              :range-size="1"
              active-color="#DCEDFF"
              @update:modelValue="getTransactions"
            />
        </div>

    </div>
</template>