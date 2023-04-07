import { client } from "./sanity.client";

export async function fetchData(query: string) {
    const data = await client.fetch(query)
    return data
}