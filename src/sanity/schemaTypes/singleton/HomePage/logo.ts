import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'logo',
  title: 'Logo Section',
  type: 'document',
  fields: [
    defineField({
      name: 'logoImage',
      title: 'Logo Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'altText',
      title: 'Alternative Text',
      type: 'string',
      initialValue: 'MK Logo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'width',
      title: 'Width',
      type: 'number',
      initialValue: 150,
    }),
    defineField({
      name: 'height',
      title: 'Height',
      type: 'number',
      initialValue: 150,
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      initialValue: 7,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'altText',
      media: 'logoImage',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Logo Section',
        media,
      }
    },
  },
})