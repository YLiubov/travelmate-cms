// Fil: schemaTypes/article.ts
import {defineField, defineType} from 'sanity'

// Opretter vores Article type
export const article = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title', // Sanity says: "automatically take it from the title field"
      },
    }),

    defineField({
      name: 'teaser',
      title: 'Teaser',
      type: 'text',
    }),

    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),

    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'user'}], // Sanity says: "this reference can only point to documents of type 'user'"
    }),
  ],
})
