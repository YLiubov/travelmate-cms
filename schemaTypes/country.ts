// Fil: schemaTypes/country.ts
import {defineField, defineType} from 'sanity'

// Opretter vores Country type
export const country = defineType({
  name: 'country',
  title: 'Country',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),

    defineField({
      name: 'code',
      title: 'Country code',
      type: 'string',
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name', // Sanity says: "automatically take it from the name field"
      },
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Travel photo. Keep its credit, license and source with the image.',
      fields: [
        defineField({
          name: 'altText',
          title: 'Alternative text',
          type: 'string',
        }),
        defineField({
          name: 'credit',
          title: 'Photo credit',
          type: 'string',
        }),
        defineField({
          name: 'license',
          title: 'Photo license',
          type: 'string',
        }),
        defineField({
          name: 'sourceUrl',
          title: 'Original source URL',
          type: 'url',
        }),
      ],
    }),
  ],
})
