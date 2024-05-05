import {useQuery} from '@tanstack/react-query'
import axios from 'axios'

const fetchRandomQuotes = async() => {
    try {
        const response = await axios.get("https://api.quotable.io/random")
        const data = response.data;
        return data
    } catch (error) {
        return {error: "No Results Found"}
    }
}


export function useFetchRandomQuotes() {
    return useQuery({
        queryKey: ['quotes'],
        queryFn: () => fetchRandomQuotes(),
        retry: 5,
        staleTime: 60000
    })
}