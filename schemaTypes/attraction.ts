// Fill: schemaTypes/attraction.ts
import {defineField, defineType} from 'sanity'

// Opretter vores Attraction type
export const attraction = defineType({
  name: 'attraction',
  title: 'Attraction',
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
      name: 'address',
      title: 'Address',
      type: 'string',
    }),

    defineField({
      name: 'city',
      title: 'City',
      type: 'reference',
      to: [{type: 'city'}], // Sanity says: "this reference can only point to documents of type 'city'"
    }),
  ],
})