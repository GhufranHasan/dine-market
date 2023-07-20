export default {
    name: "products",
    type: "document",
    title: "Products",
    fields: [
        {
            title: 'Item ID',
            name: 'itemId',
            type: 'number',
            validation: (Rule:any) => [
              Rule.required().positive().integer(),
              Rule.min(1)
            ]
        },          
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: (Rule:any) => [
                Rule.required()
            ]
        },
        {
            title: 'Category',
            name: 'category',
            type: 'reference',
            to: [{ type: 'producttype' }],
            validation: (Rule:any) => Rule.required(),
        },
        {
            title: 'Dress Category',
            name: 'dresscategory',
            type: 'reference',
            to: [{ type: 'productcategory' }],
            validation: (Rule:any) => Rule.required(),
        },
        {
            title: 'Price',
            name: 'price',
            type: 'number',
            validation: (Rule:any) =>
              Rule.required()
                .positive()
                .precision(2) // Ensure the number has two decimal places
                .min(0.01) // Set a minimum value of 0.01
        },
        {
            title: 'Product Image',
            name: 'image',
            type: 'image',
            options: {
              hotspot: true // <-- Defaults to false
            },
            validation: (Rule:any) =>
                Rule.required()
        },          
        {
            title: 'Featured',
            name: 'featured',
            type: 'boolean',
            validation: (Rule:any) =>
                Rule.required()
        },
    ]
}