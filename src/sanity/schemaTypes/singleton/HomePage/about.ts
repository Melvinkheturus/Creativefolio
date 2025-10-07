import { defineField, defineType } from 'sanity'
import { FiFileText } from 'react-icons/fi'

export default defineType({
  name: 'about',
  title: '📝 About Section',
  type: 'document',
  icon: FiFileText,
  description: 'Manage the about section content on the homepage',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'The heading displayed at the top of the about section',
      initialValue: 'Meet the Creator',
      validation: (Rule) => Rule.required().max(50).warning('Keep it concise for better UX'),
    }),
    defineField({
      name: 'sentences',
      title: 'About Paragraphs',
      type: 'array',
      description: 'Add multiple paragraphs to tell your story. Each paragraph will animate in sequence.',
      of: [{ 
        type: 'text',
        rows: 3
      }],
      validation: (Rule) => Rule.required().min(1).max(6).warning('2-4 paragraphs work best for readability'),
    }),
    defineField({
      name: 'highlightedWords',
      title: 'Highlighted Keywords',
      description: 'Words or phrases to highlight with a gradient effect. Enter exact matches (case-insensitive).',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.max(15).warning('Too many highlights can reduce impact'),
    }),
    defineField({
      name: 'isVisible',
      title: 'Show Section',
      type: 'boolean',
      description: 'Toggle to show/hide this section on the homepage',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      isVisible: 'isVisible',
    },
    prepare({ title, isVisible }) {
      return {
        title: title || 'About Section',
        subtitle: isVisible ? '✓ Visible' : '✗ Hidden',
      }
    },
  },
})