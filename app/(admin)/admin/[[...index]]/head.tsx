export { NextStudioHead } from 'next-sanity/studio/head'

import { NextStudioHead } from 'next-sanity/studio/head'

export default function CustomStudioHead() {
    return (
        <>
            <NextStudioHead favicons={false} />
            <link
                rel="icon"
                type="image/png"
                sizes="100x100"
                href="https://cdn.sanity.io/images/9mp8sv0o/fooddelivery/7fa22c69148d60c2adbdc550aeace9fdc095f3dd-500x500.png"
            />
            <title>Protein Bytes Admin</title>
        </>
    )
}