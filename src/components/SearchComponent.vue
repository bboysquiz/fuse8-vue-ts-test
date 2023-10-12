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

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}.${date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1).toString() : date.getMonth() + 1}.${date.getFullYear()}`;
}
</script>

<template>
    <div class="search__container">
        <div class="search__input-wrapper">
            <input class="search__input" v-model="query" @input='handleInput' placeholder="Some value" autofocus />
            <div class="search__jokes-conter">Found jokes: {{ data.jokes.length }}</div>
        </div>
        <div class="search__block-wrapper">
            <div class="search__block" v-for="joke in data.jokes" :key="joke.id">
                <p class="search__joke-text">{{ joke.value }}</p>
                <div class="search__joke-footer">
                    <p class="search__joke-id">{{ joke.id }}</p>
                    <div class="search__joke-date">{{ formatDate(joke.created_at) }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.search__container {
    width: 1596px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 128px auto 0 auto;
}

.search__input-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 626px;
}

.search__input {
    padding-left: 36px;
    width: 626px;
    height: 64px;
    box-shadow: 0px 7px 12px 0px rgba(100, 100, 111, 0.2);
    font-family: Fira Sans;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0px;
    color: #656EC2;
    border: none;
}

.search__input::placeholder {
    color: #656EC2;
}

.search__input::-moz-placeholder {
    color: #656EC2;
}

.search__input:-ms-input-placeholder {
    color: #656EC2;
}

.search__input::-webkit-input-placeholder {
    color: #656EC2;
}

.search__jokes-conter {
    font-family: Montserrat, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    color: #282626;
    width: 100%;
    padding-left: 36px;
    padding-top: 20px;
    align-items: center;
    display: flex;
}

.search__block-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 60px;
}

.search__block {
    width: 518px;
    box-shadow: 0px 7px 25px 0px rgba(100, 100, 111, 0.2);
    padding: 30px 30px 25px 30px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    box-sizing: border-box;
    margin-top: 20px;
}

.search__block:first-child {
    box-sizing: border-box;
    width: 788px;
    height: 262px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 40px 40px 25px 40px;
    box-shadow: 0px 7px 25px 0px rgba(100, 100, 111, 0.2);
    margin-top: 0;
}

.search__block:nth-child(2) {
    box-sizing: border-box;
    width: 788px;
    height: 262px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 40px 40px 25px 40px;
    box-shadow: 0px 7px 25px 0px rgba(100, 100, 111, 0.2);
    margin-top: 0;
}

.search__joke-text {
    width: 458px;
    font-family: Fira Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    color: #282626;
}

.search__joke-footer {
    width: 458px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.search__joke-footer {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0px;
    color: #767676;

}</style>
