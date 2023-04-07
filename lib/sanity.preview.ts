'use client'

import { definePreview } from 'next-sanity/preview'
import { dataset, projectId } from './sanity.client'

function onPublicAccessOnly() {
    throw new Error("Unable to Load Preview Please login first");
};

if (!projectId || !dataset) {
    throw new Error("Missing projectId or dataset pleace check your configuration");
};


export const usePreview = definePreview({
    projectId,
    dataset,
    onPublicAccessOnly,
})