export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Personal', value: 'Personal'},
          {title: 'UMKM', value: 'UMKM'},
          {title: 'Company', value: 'Company'},
          {title: 'Pendidikan', value: 'Pendidikan'},
          {title: 'Startup', value: 'Startup'},
        ],
      },
    },
    {
      name: 'businessType',
      title: 'Business Type (Context)',
      type: 'string',
      description: 'e.g. "Personal Branding", "Usaha Kuliner", "Company Profile"',
    },
    {
      name: 'businessGoal',
      title: 'Business Goal',
      type: 'string',
      description: 'e.g. "Meningkatkan Pesanan", "Branding Profesional"',
    },
    {
      name: 'businessFunction',
      title: 'Business Function',
      type: 'string',
      description: 'e.g. "Menu Digital", "Katalog Produk", "Showcase"',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'accent',
      title: 'Accent Class (Tailwind)',
      type: 'string',
      description: 'Example: border-pink-200 shadow-pink-500/10',
    },
    {
      name: 'previewUrl',
      title: 'Preview Link',
      type: 'url',
      description: 'The live URL of the project (e.g. https://example.com)',
    },
  ],
}
