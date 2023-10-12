<script setup lang="ts">
import { ref, Ref } from 'vue';
import { useJokesStore } from '../store';

const query: Ref<string> = ref('');
const { data, getJokes } = useJokesStore()

const handleInput = async () => {
    if (query.value.length > 3) {
        await getJokes(query.value);
    }
}
</script>

<template>
    <div class="search__container">
        <input class="search__input" v-model="query" @input='handleInput' placeholder="Search for a joke..." autofocus />
        <div class="search__jokes-conter">{{ data.jokes.length }}</div>
        <div class="search__block-wrapper">
            <div class="search__block" v-for="joke in data.jokes" :key="joke.id">
                <p class="search__joke-text">{{ joke.value }}</p>
                <p class="search__joke-id">{{ joke.id }}</p>
                <div class="search__joke-date">{{ joke.created_at }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
