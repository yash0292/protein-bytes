export default {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule: { required: () => any; }) => Rule.required(),
            description: "Enter Product Name"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            description: "Generate a Unique slug for item",
            validation: (Rule: { required: () => any; }) => Rule.required(),
            options: {
                source: "name",
                maxLength: 100
            }
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            description: "Select Image for Product",
            validation: (Rule: { required: () => any; }) => Rule.required(),
            options: {
                hotspot: true
            }
        },
        {
            name: "category",
            title: "Category",
            type: "reference",
            description: "Select Category from the List",
            validation: (Rule: { required: () => any; }) => Rule.required(),
            to: [{ type: "category" }],
        },
        {
            name: "badge",
            title: "Badge",
            type: "string",
            description: "Type a Badge Text e.g. SEASONAL, POPULAR"
        },
        {
            name: "price",
            title: "Price",
            type: "number",
            description: "Enter Price for Product",
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: "description",
            title: "Description",
            type: "text",
            validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; new(): any; }; }; }) => Rule.required().min(20).max(150),
            description: "Write a Product Description in 20-150 character",
            options: {
                maxLength: 150
            }
        },
    ]
}