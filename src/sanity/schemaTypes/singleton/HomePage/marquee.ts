import { defineField, defineType } from 'sanity'
import { FiType } from 'react-icons/fi'

export default defineType({
  name: 'marquee',
  title: '🎬 Animated Marquee',
  type: 'document',
  icon: FiType,
  description: 'Configure the scrolling text banner on your homepage',
  fields: [
    defineField({
      name: 'content',
      title: 'Marquee Text',
      type: 'string',
      description: 'Text that scrolls across the screen. Use ✦ or • as separators.',
      initialValue: 'Manikandan ✦ Web Developer ✦ Designer ✦ Creator',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'animationDuration',
      title: 'Animation Speed (seconds)',
      type: 'number',
      description: 'Lower = faster, Higher = slower',
      initialValue: 20,
      validation: (Rule) => Rule.required().min(5).max(60).warning('15-25 seconds works best'),
    }),
    defineField({
      name: 'fontSize',
      title: 'Text Size',
      type: 'string',
      description: 'Choose the font size for the marquee text',
      initialValue: 'text-6xl',
      options: {
        list: [
          { title: '📱 Mobile Friendly (XS)', value: 'text-xl' },
          { title: '📱 Small', value: 'text-2xl' },
          { title: '💻 Medium', value: 'text-4xl' },
          { title: '🖥️ Large (Recommended)', value: 'text-6xl' },
          { title: '🖥️ Extra Large', value: 'text-8xl' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'padding',
      title: 'Vertical Spacing',
      type: 'string',
      description: 'Space above and below the marquee',
      initialValue: 'py-8',
      options: {
        list: [
          { title: 'None', value: 'py-0' },
          { title: 'Small', value: 'py-4' },
          { title: 'Medium (Recommended)', value: 'py-8' },
          { title: 'Large', value: 'py-12' },
          { title: 'Extra Large', value: 'py-16' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'isVisible',
      title: 'Show Marquee',
      type: 'boolean',
      description: 'Toggle to show/hide the marquee section',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      content: 'content',
      isVisible: 'isVisible',
    },
    prepare({ content, isVisible }) {
      return {
        title: content || 'Animated Marquee',
        subtitle: isVisible ? '✓ Visible' : '✗ Hidden',
      }
    },
  },
})