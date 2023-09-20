const menuItems = [
    { 
      label: 'Female', 
      href: '/category/female',
      featured: [
        {
          name: 'New Arrivals',
          href: 'category/female/new-arrivals',
          imageSrc: '/images/home-images/trending-fashion.jpg',
          imageAlt: 'Girl holding bag',
        },
        {
          name: 'Basic Tees',
          href: 'category/female/basic-trees',
          imageSrc: '/images/home-images/trending-summer.jpg',
          imageAlt: 'Summer clothes',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: 'category/female/clothing/tops' },
            { name: 'Pants', href: 'category/female/clothing/pants' },
            { name: 'Sweaters', href: 'category/female/clothing/sweaters' },
            { name: 'T-Shirts', href: 'category/female/clothing/t-shirts' },
            { name: 'Jackets', href: 'category/female/clothing/jackets' },
            { name: 'Activewear', href: 'category/female/clothing/active-wear' },
            { name: 'Browse All', href: 'category/female/clothing/browse-all' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: 'category/female/accessories/watches' },
            { name: 'Wallets', href: 'category/female/accessories/wallets' },
            { name: 'Bags', href: 'category/female/accessories/bags' },
            { name: 'Sunglasses', href: 'category/female/accessories/sunglasses' },
            { name: 'Hats', href: 'category/female/accessories/hats' },
            { name: 'Belts', href: 'category/female/accessories/belts' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: 'category/female/brands/re-arranged' },
            { name: 'Counterfeit', href: 'category/female/brands/counterfeit' },
            { name: 'Full Nelson', href: 'category/female/brands/full-nelson' },
            { name: 'My Way', href: 'category/female/brands/my-way' },
          ],
        },
      ], 
    },
    { 
      label: 'Male', 
      href: '/category/male',
      featured: [
        {
          name: 'New Arrivals',
          href: '/',
          imageSrc: '/images/home-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '/',
          imageSrc: '/images/home-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: 'category/male/clothing/tops' },
            { name: 'Pants', href: 'category/male/clothing/pants' },
            { name: 'Sweaters', href: 'category/male/clothing/sweaters' },
            { name: 'T-Shirts', href: 'category/male/clothing/t-shirts' },
            { name: 'Jackets', href: 'category/male/clothing/jackets' },
            { name: 'Activewear', href: 'category/male/clothing/active-wear' },
            { name: 'Browse All', href: 'category/male/clothing/browse-all' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: 'category/male/accessories/watches' },
            { name: 'Wallets', href: 'category/male/accessories/wallets' },
            { name: 'Bags', href: 'category/male/accessories/bags' },
            { name: 'Sunglasses', href: 'category/male/accessories/sunglasses' },
            { name: 'Hats', href: 'category/male/accessories/hats' },
            { name: 'Belts', href: 'category/male/accessories/belts' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: 'category/male/brands/re-arranged' },
            { name: 'Counterfeit', href: 'category/male/brands/counterfeit' },
            { name: 'Full Nelson', href: 'category/male/brands/full-nelson' },
            { name: 'My Way', href: 'category/male/brands/my-way' },
          ],
        },
      ], 
    },
    { 
      label: 'Kids', 
      href: '/category/kids',
      featured: [
        {
          name: 'New Arrivals',
          href: '/',
          imageSrc: '/images/home-images/kids-group.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '/',
          imageSrc: '/images/home-images/kids-lifestyles.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: 'category/kids/clothing/tops' },
            { name: 'Pants', href: 'category/kids/clothing/pants' },
            { name: 'Sweaters', href: 'category/kids/clothing/sweaters' },
            { name: 'T-Shirts', href: 'category/kids/clothing/t-shirts' },
            { name: 'Jackets', href: 'category/kids/clothing/jackets' },
            { name: 'Activewear', href: 'category/kids/clothing/active-wear' },
            { name: 'Browse All', href: 'category/kids/clothing/browse-all' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: 'category/kids/accessories/watches' },
            { name: 'Wallets', href: 'category/kids/accessories/wallets' },
            { name: 'Bags', href: 'category/kids/accessories/bags' },
            { name: 'Sunglasses', href: 'category/kids/accessories/sunglasses' },
            { name: 'Hats', href: 'category/kids/accessories/hats' },
            { name: 'Belts', href: 'category/kids/accessories/belts' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: 'category/kids/brands/re-arranged' },
            { name: 'Counterfeit', href: 'category/kids/brands/counterfeit' },
            { name: 'Full Nelson', href: 'category/kids/brands/full-nelson' },
            { name: 'My Way', href: 'category/kids/brands/my-way' },
          ],
        },
      ], 
    },
  ];

export default menuItems;