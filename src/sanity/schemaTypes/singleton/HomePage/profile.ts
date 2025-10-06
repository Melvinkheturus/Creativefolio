import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'profile',
  title: 'Profile Section',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      initialValue: 'MANIKANDAN S',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'designationWords',
      title: 'Designation Words',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: ['UI/UX Designer', 'Developer', 'Creative Technologist'],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'string',
      initialValue: 'Crafting clarity in a chaotic digital world.',
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      initialValue: 1,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'profileImage',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Profile Section',
        media,
      }
    },
  },
})