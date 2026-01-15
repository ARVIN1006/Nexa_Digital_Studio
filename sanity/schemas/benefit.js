export default {
  name: 'benefit',
  title: 'Benefit / Service',
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
      description: 'Phosphor Icon Name (e.g. Lightning, ShieldCheck, Code)',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
}
