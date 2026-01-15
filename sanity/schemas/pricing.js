export default {
  name: 'pricing',
  title: 'Pricing Plan',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Plan Title',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Current Price',
      type: 'string',
    },
    {
      name: 'originalPrice',
      title: 'Original Price (for discount)',
      type: 'string',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'isPopular',
      title: 'Is Popular / Recommended?',
      type: 'boolean',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Personal', value: 'personal'},
          {title: 'Business / UMKM', value: 'business'},
          {title: 'Corporate', value: 'corporate'},
        ],
      },
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
}
