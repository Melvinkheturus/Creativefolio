import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'experienceSection',
  title: 'Experience Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Experience',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
      initialValue: 'My professional journey',
    }),
    defineField({
      name: 'showTimeline',
      title: 'Show Timeline',
      type: 'boolean',
      initialValue: true,
      description: 'Display timeline indicators for experience items',
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
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Experience Section',
      }
    },
  },
})