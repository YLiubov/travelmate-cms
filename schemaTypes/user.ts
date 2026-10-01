// File: schemaTypes/user.ts
import {defineField, defineType} from 'sanity'

// Opretter vores User type
export const user = defineType({
  name: 'user',
  title: 'User',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),

    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),

    defineField({
      name: 'image',
      title: 'Profile image',
      type: 'image',
    }),

    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text',
    }),
  ],
})
