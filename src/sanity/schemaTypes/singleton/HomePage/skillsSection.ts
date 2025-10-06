import { defineField, defineType } from 'sanity'
import { FiCode } from 'react-icons/fi'

export default defineType({
  name: 'skillsSection',
  title: 'Skills Section',
  type: 'document',
  icon: FiCode,
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Skills',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
      initialValue: 'Technologies I work with',
    }),
    defineField({
      name: 'showCategories',
      title: 'Show Categories',
      type: 'boolean',
      initialValue: true,
      description: 'Group skills by categories',
    }),
    defineField({
      name: 'featuredSkills',
      title: 'Featured Skills',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'skill' }],
        },
      ],
      description: 'Select skills to feature in this section',
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
        title: title || 'Skills Section',
      }
    },
  },
})