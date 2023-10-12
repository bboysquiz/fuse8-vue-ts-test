export interface Joke {
    categories: [],
    created_at: string,
    icon_url: string,
    id: string,
    updated_at: string,
    url: string,
    value: string,
}

export interface Data {
    jokes: Joke[],
}

export interface JokeApiResponse {
    total: number;
    result: Joke[];
}