export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
    },
    {
      name: 'siteLogo',
      title: 'Site Logo (Optional)',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'heroBadge',
      title: 'Hero Badge Text',
      type: 'string',
    },
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'Format: 628xxx (tanpa + atau 0)',
    },
    {
      name: 'whatsappWelcomeMessage',
      title: 'WhatsApp Welcome Message',
      type: 'text',
      description: 'Pesan default saat user klik chat WA',
    },
    {
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    },
    {
      name: 'instagramHandle',
      title: 'Instagram Handle',
      type: 'string',
    },
    {
      name: 'linkedinHandle',
      title: 'LinkedIn Handle',
      type: 'string',
    },
    {
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Label'},
            {name: 'id', type: 'string', title: 'Section ID (e.g. showcase, pricing)'},
          ],
        },
      ],
    },
    {
      name: 'footerDescription',
      title: 'Footer Description',
      type: 'text',
    },
    {
      name: 'address',
      title: 'Office Address',
      type: 'text',
    },
  ],
}
