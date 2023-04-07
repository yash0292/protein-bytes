export default {
    name: "category",
    title: "Category",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            description: "Enter Category name",
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            description: "Generate a Unique slug for Category",
            validation: (Rule: { required: () => any; }) => Rule.required(),
            options: {
                source: "name",
                maxLength: 100
            }
        },
        {
            name: "categoryImage",
            title: "Category Image",
            type: "image",
            description: "Select Image for Category",
            validation: (Rule: { required: () => any; }) => Rule.required(),
            options: {
                hotspot: true
            }
        },
    ]
}