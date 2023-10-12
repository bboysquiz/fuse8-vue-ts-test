import { defineStore } from 'pinia';
import axios, { AxiosResponse } from 'axios'
import { reactive } from 'vue'

const data: Data = reactive({
    jokes: []
});

export const useJokesStore = defineStore('jokes', () => {
    const getJokes = async (searchingText: string): Promise<void> => {
        try {
            const url = `https://api.chucknorris.io/jokes/search?query=${searchingText}`;
            const response: AxiosResponse<Jokes> = await axios.get(url);
            data.jokes = response.data.result;
            console.log(data.jokes)
            data.error = null
        } catch (error: any) {
            console.error(error.response.data.message);
            data.error = error.response.data.message;
        }
    };
    return { data, getJokes }
});
