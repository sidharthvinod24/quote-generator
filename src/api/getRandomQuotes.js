import {useQuery} from '@tanstack/react-query'
import axios from 'axios'

const fetchRandomQuotes = async(tags) => {
    try {
        const response = await axios.get(`https://api.quotable.io/random?tags=${tags}`)
        const data = response.data;
        return data
    } catch (error) {
        return {error: "No Results Found"}
    }
}


export function useFetchRandomQuotes(tags) {
    return useQuery({
        queryKey: ['quotes',tags],
        queryFn: () => fetchRandomQuotes(tags),
        retry: 5,
        staleTime: 60000
    })
}