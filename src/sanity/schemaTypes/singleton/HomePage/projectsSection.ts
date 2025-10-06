import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'projectsSection',
  title: 'Projects Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'My Work',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'autoScroll',
      title: 'Enable Auto Scroll',
      type: 'boolean',
      initialValue: true,
      description: 'Automatically scroll through projects',
    }),
    defineField({
      name: 'scrollInterval',
      title: 'Scroll Interval (seconds)',
      type: 'number',
      initialValue: 3,
      validation: (Rule) => Rule.min(1).max(10),
      hidden: ({ document }) => !document?.autoScroll,
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Projects Section',
      }
    },
  },
})