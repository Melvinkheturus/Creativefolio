import { defineField, defineType } from 'sanity'
import { FiPhone } from 'react-icons/fi'

export default defineType({
  name: 'contact',
  title: 'Contact Section',
  type: 'document',
  icon: FiPhone,
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'object',
      fields: [
        {
          name: 'firstLine',
          title: 'First Line',
          type: 'string',
          initialValue: 'LETS WORK',
        },
        {
          name: 'secondLine',
          title: 'Second Line',
          type: 'string',
          initialValue: 'TOGETHER.',
        },
      ],
    }),
    defineField({
      name: 'formFields',
      title: 'Form Fields',
      type: 'object',
      fields: [
        {
          name: 'namePlaceholder',
          title: 'Name Field Placeholder',
          type: 'string',
          initialValue: 'Your Name',
        },
        {
          name: 'emailPlaceholder',
          title: 'Email Field Placeholder',
          type: 'string',
          initialValue: 'Your Email',
        },
        {
          name: 'messagePlaceholder',
          title: 'Message Field Placeholder',
          type: 'string',
          initialValue: 'Your Message',
        },
        {
          name: 'submitButtonText',
          title: 'Submit Button Text',
          type: 'string',
          initialValue: 'Send Message',
        },
      ],
    }),
    defineField({
      name: 'emailReceiver',
      title: 'Email Receiver',
      type: 'string',
      description: 'Email address where form submissions will be sent',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      initialValue: 4,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title.firstLine',
    },
    prepare({ title }) {
      return {
        title: title ? `${title} TOGETHER` : 'Contact Section',
      }
    },
  },
})