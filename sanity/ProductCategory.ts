export default {
    name: "productcategory",
    type: "document",
    title: "Product Dress Category",
    fields: [          
        {
            title: 'Dress Category',
            name: 'title',
            type: 'string',
            validation: (Rule:any) => [
                Rule.required()
            ]
        }
    ]
}