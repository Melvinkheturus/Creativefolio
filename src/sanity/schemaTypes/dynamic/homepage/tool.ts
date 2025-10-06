import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'tool',
  title: 'Tool',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Design', value: 'design' },
          { title: 'Development', value: 'development' },
          { title: 'Productivity', value: 'productivity' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'iconType',
      title: 'Icon Type',
      type: 'string',
      options: {
        list: [
          { title: 'React Icon', value: 'reactIcon' },
          { title: 'Custom Image', value: 'customImage' },
        ],
      },
      initialValue: 'reactIcon',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'reactIcon',
      title: 'React Icon Name',
      type: 'string',
      description: 'Icon name from React Icons (e.g., SiFigma, SiReact)',
      hidden: ({ document }) => document?.iconType !== 'reactIcon',
    }),
    defineField({
      name: 'customIcon',
      title: 'Custom Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({ document }) => document?.iconType !== 'customImage',
    }),
    defineField({
      name: 'displayInMarquee',
      title: 'Display in Marquee',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to display this tool in the marquee section',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
    },
  },
})