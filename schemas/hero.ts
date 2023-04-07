export default {
    name: "hero",
    title: "Hero",
    type: "document",
    fields: [
        {
            name: "subTitle",
            title: "Sub Title",
            type: "string",
            description: "Enter Subtitle",
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: "mainText",
            title: "Main Text",
            type: "string",
            description: "Enter Main Text",
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: "bannerImage",
            title: "Banner Image",
            type: "image",
            description: "Select Image for Banner",
            validation: (Rule: { required: () => any; }) => Rule.required(),
            options: {
                hotspot: true
            }
        },
        {
            name: "paragraphText",
            title: "Pragraph Text",
            type: "text",
            description: "Type Paragraph for Banner",
            validation: (Rule: { required: () => any; }) => Rule.required(),
            options: {
                maxLength: 300
            }
        },
        {
            name: "buttonText",
            title: "Button Text",
            type: "string",
            description: "Enter Button Text",
            validation: (Rule: { required: () => any; }) => Rule.required(),
        }
    ]
}