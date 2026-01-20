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
      description: 'e.g. 500 Ribu',
    },
    {
      name: 'originalPrice',
      title: 'Original Price (for discount)',
      type: 'string',
    },
    {
      name: 'duration',
      title: 'Pengerjaan (Duration)',
      type: 'string',
      description: 'e.g. 5 Hari',
    },
    {
      name: 'domainInfo',
      title: 'Domain Info',
      type: 'string',
      description: 'e.g. .my.id / .com',
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
          {title: 'Business / UMKM', value: 'umkm'},
          {title: 'Pendidikan', value: 'edu'},
          {title: 'Company', value: 'company'},
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
