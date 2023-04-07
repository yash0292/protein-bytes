export default {
    name: "store",
    title: "Store",
    type: "document",
    fieldsets: [
        {
            name: 'social',
            title: 'Social media handles'
        }
    ],
    fields: [
        {
            name: "store_name",
            title: "Store Name",
            type: "string",
            description: "Enter Store Name",
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: "logo",
            title: "Logo",
            type: "image",
            description: "Select Logo for Store",
            validation: (Rule: { required: () => any; }) => Rule.required(),
            options: {
                hotspot: true
            }
        },
        {
            name: "phone",
            title: "Phone",
            type: "string",
            description: "Enter your store Contact number",
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: "email",
            title: "Email",
            type: "string",
            description: "Enter your store Email",
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            title: 'WhatsApp Link',
            name: 'whatsAppLink',
            type: 'url',
            fieldset: 'social',
            validation: (Rule: { uri: (arg0: { scheme: string[]; }) => any; }) => Rule.uri({
                scheme: ["https"]
            })
        },
        {
            name: "address",
            title: "Address",
            type: "text",
            rows: 2,
            description: "Enter Store Address",
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: "license_number",
            title: "License Number",
            type: "string",
            description: "Enter your food License Number",
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            title: 'Twitter',
            name: 'twitter',
            type: 'url',
            fieldset: 'social',
            validation: (Rule: { uri: (arg0: { scheme: string[]; }) => any; }) => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
            })
        },
        {
            title: 'Instagram',
            name: 'instagram',
            type: 'url',
            fieldset: 'social',
            validation: (Rule: { uri: (arg0: { scheme: string[]; }) => any; }) => Rule.uri({
                scheme: ['https']
            })
        },
        {
            title: 'Facebook',
            name: 'facebook',
            type: 'url',
            fieldset: 'social',
            validation: (Rule: { uri: (arg0: { scheme: string[]; }) => any; }) => Rule.uri({
                scheme: ['https']
            })
        }
    ]
}