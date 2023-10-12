import { defineStore } from 'pinia';
import axios, { AxiosResponse } from 'axios'
import { reactive } from 'vue'
import { Data, JokeApiResponse } from '../types'

const data: Data = reactive({
    jokes: []
});

export const useJokesStore = defineStore('jokes', () => {
    const getJokes = async (searchingText: string): Promise<void> => {
        try {
            const url = `https://api.chucknorris.io/jokes/search?query=${searchingText}`;
            const response: AxiosResponse<JokeApiResponse> = await axios.get(url);
            data.jokes = response.data.result;
            console.log(response)
        } catch (error: any) {
            console.error(error.response.data.message);
        }
    };
    return { data, getJokes }
});
