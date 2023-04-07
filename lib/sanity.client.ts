import { createClient } from 'next-sanity'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION


export const client = createClient({
    projectId,
    dataset,
    apiVersion: "2021-10-21",
    useCdn: false,
    token: "skn68txhe9WbCbNwHDEYtPV860xYVwJ6IiXBXdxTNKRUpkEDHts0Uc9m2ZlFnsqQFsL2mcT93os1szjCAGnJAnnZf8gtuxXMmOVF476xNtg7XY1AN1W621nXFN6J1LN6B7y5JWv66WSK57bWk35hI6lKVX7lxykRbKk2JNQ1toGEex7xgx2B"
})