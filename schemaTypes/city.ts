// Fil: schemaTypes/city.ts
import {defineField, defineType} from 'sanity'

// Opretter vores City type
export const city = defineType({
  name: 'city',
  title: 'City',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
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

    defineField({
      name: 'country',
      title: 'Country',
      type: 'reference',
      to: [{type: 'country'}], // Sanity says: "this reference can only point to documents of type 'country'"
    }),
  ],
})