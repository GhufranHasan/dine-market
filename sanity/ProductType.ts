export default {
    name: "producttype",
    type: "document",
    title: "Product Type",
    fields: [
        {
            title: 'Label',
            name: 'label',
            type: 'string',
            validation: (Rule:any) => [
                Rule.required()
            ]
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'title', // The field that will be used to generate the slug
              maxLength: 200, // Optional: Maximum length for the slug
              // Other options if needed
            },
            validation: (Rule:any) => Rule.required()
        },
    ]
}