import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonialSection',
  title: 'Testimonial Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Testimonials',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
      initialValue: 'What people say about my work',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      initialValue: 1,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'autoRotate',
      title: 'Auto Rotate Testimonials',
      type: 'boolean',
      initialValue: true,
      description: 'Whether to automatically rotate through testimonials',
    }),
    defineField({
      name: 'rotationInterval',
      title: 'Rotation Interval (seconds)',
      type: 'number',
      initialValue: 5,
      validation: (Rule) => Rule.min(1).max(30),
      hidden: ({ document }) => !document?.autoRotate,
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})