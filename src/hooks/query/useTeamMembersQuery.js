import axios from "axios";
import { useQuery } from '@tanstack/react-query'
const HttpClient = axios.create({
    baseURL: "https://randomuser.me/api",
});
export const useTeamMembersQuery = (page = 1) => {
    return useQuery(["posts", page], async () => {
        const { data } = await HttpClient.get(`/?page=${page}&results=10`);
        return data;
    }, { keepPreviousData: true, staleTime: 5000 });
}