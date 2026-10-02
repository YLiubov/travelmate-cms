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