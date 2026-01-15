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
