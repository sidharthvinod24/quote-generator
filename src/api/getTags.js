import {useQuery} from '@tanstack/react-query'
import axios from 'axios'

const fetchTags = async() => {
    try {
        const response = await axios.get(`https://api.quotable.io/tags`)
        const data = response.data;
        const unique = [...new Map(data.map(item =>
            [item.name, item])).values()];
        return unique
    } catch (error) {
        return {error: "No Results Found"}
    }
}


export function useFetchTags() {
    return useQuery({
        queryKey: ['tags'],
        queryFn: () => fetchTags(),
        retry: 5,
        staleTime: 60000
    })
}