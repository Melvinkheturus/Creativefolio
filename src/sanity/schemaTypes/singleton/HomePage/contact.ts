import { defineField, defineType } from 'sanity'
import { FiMail } from 'react-icons/fi'

export default defineType({
  name: 'contact',
  title: '✉️ Contact Form',
  type: 'document',
  icon: FiMail,
  description: 'Configure the contact form section on the homepage',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'object',
      description: 'Two-line heading for the contact section',
      fields: [
        {
          name: 'firstLine',
          title: 'First Line',
          type: 'string',
          initialValue: 'LETS WORK',
          validation: (Rule) => Rule.required().max(20),
        },
        {
          name: 'secondLine',
          title: 'Second Line (Highlighted)',
          type: 'string',
          description: 'This line will be displayed in purple',
          initialValue: 'TOGETHER.',
          validation: (Rule) => Rule.required().max(20),
        },
      ],
    }),
    defineField({
      name: 'formFields',
      title: 'Form Configuration',
      type: 'object',
      description: 'Customize form field placeholders and button text',
      fields: [
        {
          name: 'namePlaceholder',
          title: 'Name Field Placeholder',
          type: 'string',
          initialValue: 'Your Name',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'emailPlaceholder',
          title: 'Email Field Placeholder',
          type: 'string',
          initialValue: 'Your Email',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'messagePlaceholder',
          title: 'Message Field Placeholder',
          type: 'string',
          initialValue: 'Your Message',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'submitButtonText',
          title: 'Submit Button Text',
          type: 'string',
          initialValue: 'Send Message',
          validation: (Rule) => Rule.required().max(20),
        },
      ],
    }),
    defineField({
      name: 'emailReceiver',
      title: 'Recipient Email',
      type: 'string',
      description: 'Email address where form submissions will be sent',
      validation: (Rule) => Rule.email().warning('Please enter a valid email address'),
    }),
    defineField({
      name: 'successMessage',
      title: 'Success Message',
      type: 'string',
      description: 'Message shown after successful form submission',
      initialValue: 'Thank you! Your message has been sent.',
    }),
    defineField({
      name: 'isVisible',
      title: 'Show Section',
      type: 'boolean',
      description: 'Toggle to show/hide the contact form',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      firstLine: 'title.firstLine',
      secondLine: 'title.secondLine',
      isVisible: 'isVisible',
    },
    prepare({ firstLine, secondLine, isVisible }) {
      return {
        title: `${firstLine} ${secondLine}`,
        subtitle: isVisible ? '✓ Visible' : '✗ Hidden',
      }
    },
  },
})