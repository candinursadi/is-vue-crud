<script setup>
import useTransactions from '../../composables/transactions';
import { onMounted } from 'vue';  

const { transaction, getTransaction, updateTransaction, errors} = useTransactions()
const props = defineProps({
    id: {
        required: true,
        type: String
    }
})

onMounted(() => getTransaction(props.id))
</script>

<template>
    <form action="" class=" max-w-md mx-auto p-4 bg-gray-50 shadow-md rounded-md" @submit.prevent="updateTransaction($route.params.id)">
        <div class=" space-y-6">
            <div class="mb-6">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
                <input type="text" id="name" v-model="transaction.name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <div v-if="errors.name">
                    <span class="text-sm text-red-800">{{ errors.name[0] }}</span>
                </div>
            </div>
            <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input type="email" id="email" v-model="transaction.email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <div v-if="errors.email">
                    <span class="text-sm text-red-800">{{ errors.email[0] }}</span>
                </div>
            </div>
            <div class="mb-6">
                <label for="amount" class="block mb-2 text-sm font-medium text-gray-900">Amount</label>
                <input type="number" id="amount" v-model="transaction.amount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <div v-if="errors.amount">
                    <span class="text-sm text-red-800">{{ errors.amount[0] }}</span>
                </div>
            </div>
            <div class="mt-4 flex justify-end">
                <RouterLink to="/transactions" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">Cancel</RouterLink>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Update</button>
            </div>
        </div>
    </form>
</template>