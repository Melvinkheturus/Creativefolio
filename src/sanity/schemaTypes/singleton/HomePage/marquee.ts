import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'marquee',
  title: 'Marquee Section',
  type: 'document',
  fields: [
    defineField({
      name: 'content',
      title: 'Marquee Content',
      type: 'string',
      initialValue: 'Manikandan ✦ Web Developer ✦ Designer ✦ Creator',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'animationDuration',
      title: 'Animation Duration (seconds)',
      type: 'number',
      initialValue: 20,
      validation: (Rule) => Rule.required().min(5).max(60),
    }),
    defineField({
      name: 'fontSize',
      title: 'Font Size',
      type: 'string',
      initialValue: 'text-6xl',
      options: {
        list: [
          { title: 'Extra Small', value: 'text-xl' },
          { title: 'Small', value: 'text-2xl' },
          { title: 'Medium', value: 'text-4xl' },
          { title: 'Large', value: 'text-6xl' },
          { title: 'Extra Large', value: 'text-8xl' },
        ],
      },
    }),
    defineField({
      name: 'padding',
      title: 'Vertical Padding',
      type: 'string',
      initialValue: 'py-8',
      options: {
        list: [
          { title: 'None', value: 'py-0' },
          { title: 'Small', value: 'py-4' },
          { title: 'Medium', value: 'py-8' },
          { title: 'Large', value: 'py-12' },
          { title: 'Extra Large', value: 'py-16' },
        ],
      },
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      initialValue: 6,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'content',
    },
    prepare({ title }) {
      return {
        title: title || 'Marquee Section',
      }
    },
  },
})