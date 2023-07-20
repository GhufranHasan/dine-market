import { ProductCategory } from '../utils/type';

const productData: ProductCategory[] = [
    // Female
    {
        proCatId: 1,
        label: 'Female',
        href: '/female',
        details:[
            {
                itemId: 1,
                title: 'Brushed Raglan Sweatshirt',
                category: 'Sweaters',
                price: 175.00,
                imageUrl: '/images/female-product/pro1.png',
                imageText: 'Brushed Raglan Sweatshirt',
                featured: true
            },
            {
                itemId: 2,
                title: 'Cameryn Sash Tie Dress',
                category: 'Dress',
                price: 545.00,
                imageUrl: '/images/female-product/pro4.png',
                imageText: 'Cameryn Sash Tie Dress',
                featured: false
            },
            {
                itemId: 3,
                title: 'Flex Sweatpants',
                category: 'Sweaters',
                price: 175.00,
                imageUrl: '/images/female-product/pro5.png',
                imageText: 'Flex Sweatpants',
                featured: true
            },
            {
                itemId: 4,
                title: 'Raglan Sweatshirt',
                category: 'Sweaters',
                price: 195.00,
                imageUrl: '/images/female-product/pro7.png',
                imageText: 'Raglan Sweatshirt',
                featured: true
            },
            {
                itemId: 5,
                title: 'Flex Sweatshirt',
                category: 'Sweaters',
                price: 175.00,
                imageUrl: '/images/female-product/pro3.png',
                imageText: 'Flex Sweatshirt',
                featured: true
            },
            {
                itemId: 6,
                title: 'Pink Fleece Sweatpants',
                category: 'Pants',
                price: 195.00,
                imageUrl: '/images/female-product/pro6.png',
                imageText: 'Pink Fleece Sweatpants',
                featured: true
            },
            {
                itemId: 7,
                title: 'Lite Sweatpants',
                category: 'Pants',
                price: 150.00,
                imageUrl: '/images/female-product/pro8.png',
                imageText: 'Lite Sweatpants',
                featured: true
            },
            {
                itemId: 8,
                title: 'Imperial Alpaca Mock Neck',
                category: 'Sweaters',
                price: 475.00,
                imageUrl: '/images/female-product/pro9.png',
                imageText: 'Imperial Alpaca Mock Neck',
                featured: false
            },
            {
                itemId: 9,
                title: 'Imperial Alpaca Hoodie',
                category: 'Jackets',
                price: 525.00,
                imageUrl: '/images/female-product/pro10.png',
                imageText: 'Imperial Alpaca Hoodie',
                featured: true
            },
            {
                itemId: 10,
                title: 'Muscle Tank',
                category: 'Jackets',
                price: 75.00,
                imageUrl: '/images/female-product/pro12.png',
                imageText: 'Muscle Tank',
                featured: true
            },
            {
                itemId: 11,
                title: 'Camisole',
                category: 'Underwear',
                price: 65.00,
                imageUrl: '/images/female-product/pro11.png',
                imageText: 'Camisole',
                featured: false
            },
            {
                itemId: 12,
                title: 'Brushed Bomber',
                category: 'Jackets',
                price: 225.00,
                imageUrl: '/images/female-product/pro2.png',
                imageText: 'Brushed Bomber',
                featured: true
            },
        ]
    },
    // Male
    {
        proCatId: 2,
        label: 'Male',
        href: '/male',
        details:[
            {
                itemId: 13,
                title: 'Varsity Raglan Sweatshirt',
                category: 'Sweaters',
                price: 195.00,
                imageUrl: '/images/male-product/pro1.png',
                imageText: 'Varsity Raglan Sweatshirt',
                featured: false
            },
            {
                itemId: 14,
                title: 'Varsity Sweatshirt',
                category: 'Sweaters',
                price: 195.00,
                imageUrl: '/images/male-product/pro2.png',
                imageText: 'Varsity Sweatshirt',
                featured: false
            },
            {
                itemId: 15,
                title: 'Pique T Shirt',
                category: 'T Shirts',
                price: 100.00,
                imageUrl: '/images/male-product/pro3.png',
                imageText: 'Pique T shirts',
                featured: false
            },
            {
                itemId: 16,
                title: 'Flex Push Button Bomber',
                category: 'Jackets',
                price: 225.00,
                imageUrl: '/images/male-product/pro4.png',
                imageText: 'Flex Push Button Bomber',
                featured: true
            },
            {
                itemId: 17,
                title: 'Flex Sweatpants',
                category: 'Pants',
                price: 150.00,
                imageUrl: '/images/male-product/pro5.png',
                imageText: 'Flex Sweatpants',
                featured: false
            },
            {
                itemId: 18,
                title: 'Flex Bomber',
                category: 'Jackets',
                price: 225.00,
                imageUrl: '/images/male-product/pro6.png',
                imageText: 'Flex Bomber',
                featured: false
            },
            {
                itemId: 19,
                title: 'Pique Polo',
                category: 'Polos',
                price: 140.00,
                imageUrl: '/images/male-product/pro7.png',
                imageText: 'Pique Polo',
                featured: false
            },
            {
                itemId: 20,
                title: 'Pique Polo',
                category: 'Polos',
                price: 140.00,
                imageUrl: '/images/male-product/pro8.png',
                imageText: 'Pique Polo',
                featured: false
            },
            {
                itemId: 21,
                title: 'Classic Briefs',
                category: 'Underwear',
                price: 45.00,
                imageUrl: '/images/male-product/pro9.png',
                imageText: 'Classic Briefs',
                featured: false
            },
            {
                itemId: 22,
                title: 'Flex Shorts',
                category: 'Pants',
                price: 125.00,
                imageUrl: '/images/male-product/pro10.png',
                imageText: 'Flex Shorts',
                featured: false
            },
            {
                itemId: 23,
                title: 'Pocket T Shirt',
                category: 'T Shirts',
                price: 95.00,
                imageUrl: '/images/male-product/pro11.png',
                imageText: 'Pocket T Shirt',
                featured: false
            },
            {
                itemId: 24,
                title: 'Pocket T Shirt',
                category: 'T Shirts',
                price: 95.00,
                imageUrl: '/images/male-product/pro12.png',
                imageText: 'Pocket T Shirt',
                featured: false
            },
        ]
    },
    // Kids
    {
        proCatId: 3,
        label: 'Kids',
        href: '/kids',
        details:[
            {
                itemId: 25,
                title: 'Baby Pants',
                category: 'Pants',
                price: 36.00,
                imageUrl: '/images/kids-product/pro1.png',
                imageText: 'Baby Pants',
                featured: false
            },
            {
                itemId: 26,
                title: 'Baby Hooded Cardigan',
                category: 'Jackets',
                price: 46.00,
                imageUrl: '/images/kids-product/pro2.png',
                imageText: 'Baby Hooded Cardigan',
                featured: false
            },
            {
                itemId: 27,
                title: 'Baby Ribbed Booties',
                category: 'Shoes',
                price: 24.00,
                imageUrl: '/images/kids-product/pro3.png',
                imageText: 'Baby Ribbed Booties',
                featured: false
            },
            {
                itemId: 28,
                title: 'Baby Roll Up Tee',
                category: 'T Shirts',
                price: 28.00,
                imageUrl: '/images/kids-product/pro4.png',
                imageText: 'Baby Roll Up Tee',
                featured: false
            },
            {
                itemId: 29,
                title: 'Baby Onesie',
                category: 'T Shirts',
                price: 30.00,
                imageUrl: '/images/kids-product/pro5.png',
                imageText: 'Baby Onesie',
                featured: false
            },
            {
                itemId: 30,
                title: 'Baby Playsuit',
                category: 'Jackets',
                price: 48.00,
                imageUrl: '/images/kids-product/pro6.png',
                imageText: 'Baby Playsuit',
                featured: false
            },
            {
                itemId: 31,
                title: 'Wide Leg Trousers',
                category: 'Polos',
                price: 44.00,
                imageUrl: '/images/kids-product/pro7.png',
                imageText: 'Wide Leg Trousers',
                featured: false
            },
            {
                itemId: 32,
                title: 'Creneck Tee',
                category: 'T Shirts',
                price: 30.00,
                imageUrl: '/images/kids-product/pro8.png',
                imageText: 'Creneck Tee',
                featured: false
            },
            {
                itemId: 33,
                title: 'Creneck Sweater',
                category: 'Sweaters',
                price: 57.00,
                imageUrl: '/images/kids-product/pro9.png',
                imageText: 'Creneck Sweaters',
                featured: false
            },
            {
                itemId: 34,
                title: 'Loose Fit Dress',
                category: 'Dress',
                price: 48.00,
                imageUrl: '/images/kids-product/pro10.png',
                imageText: 'Loose Fit Dress',
                featured: false
            },
            {
                itemId: 35,
                title: 'Tank Top',
                category: 'Underwear',
                price: 24.00,
                imageUrl: '/images/kids-product/pro11.png',
                imageText: 'Tank Top',
                featured: false
            },
            {
                itemId: 36,
                title: 'Wide Leg Trousers',
                category: 'Pants',
                price: 44.00,
                imageUrl: '/images/kids-product/pro12.png',
                imageText: 'Wide Leg Trousers',
                featured: false
            },
        ]
    }
]

export default productData