<script setup lang="ts">
import { ref, Ref, reactive } from 'vue';
const query: Ref<string> = ref('');
const jokes = reactive([]);
</script>

<template>
    <div>
        <input v-model="query" placeholder="Search for a joke..." autofocus />
        <div v-for="joke in jokes">
            {{ joke }}
        </div>
    </div>
</template>

<style scoped></style>
