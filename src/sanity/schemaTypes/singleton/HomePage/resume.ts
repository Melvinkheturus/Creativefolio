import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'resume',
  title: 'Resume Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Resume',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'downloadText',
      title: 'Download Button Text',
      type: 'string',
      initialValue: 'Download Resume',
    }),
    defineField({
      name: 'viewText',
      title: 'View Button Text',
      type: 'string',
      initialValue: 'View Full Resume',
    }),
    defineField({
      name: 'resumeFile',
      title: 'Resume PDF',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
    }),
    defineField({
      name: 'resumeLink',
      title: 'Resume Page Link',
      type: 'string',
      initialValue: '/resume',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      initialValue: 2,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Resume Section',
      }
    },
  },
})