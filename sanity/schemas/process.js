export default {
  name: 'process',
  title: 'Process Step',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Phosphor Icon Name',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
}
