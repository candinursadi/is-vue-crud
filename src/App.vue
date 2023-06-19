<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="max-w-7xl mx-auto">
      
      <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-300">
          <li class="mr-2">
            <RouterLink class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50" to="/">Home</RouterLink>
          </li>
          <li class="mr-2">
            <RouterLink class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50" to="/transactions">Transactions</RouterLink>
          </li>
      </ul>

    </div>
  </header>

  <main class="max-w-7xl mx-auto min-h-screen mt-4">
    <RouterView />
  </main>
</template>
