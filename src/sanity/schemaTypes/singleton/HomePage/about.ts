import { defineField, defineType } from 'sanity'
import { FiFileText } from 'react-icons/fi'

// Default fallback values for the About section
// These will be used if Sanity CMS fails to return data
export const aboutFallbackData = {
  title: 'Meet the Creator',
  sentences: [
    'Hi there i am Manikandan a designer and creative technologist passionate about crafting meaningful digital experiences.',
    'With a sharp eye for UI/UX and a strong grasp of emerging tools like AI, I bridge the gap between design and development. I create interfaces that are not only beautiful, but also purposeful and efficient.',
    'I may not be a traditional developer, but I bring ideas to life from concept to launch blending creativity with execution at every step.',
    'Let\'s build something meaningful together.'
  ],
  highlightedWords: [
    'Manikandan', 'designer', 'creative technologist',
    'UI/UX', 'AI', 'ideas to life', 'blending creativity with execution',
    'meaningful'
  ],
  displayOrder: 3,
  _id: 'about',
  _type: 'about'
}

export default defineType({
  name: 'about',
  title: 'About Section',
  type: 'document',
  icon: FiFileText,
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Meet the Creator',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sentences',
      title: 'About Sentences',
      type: 'array',
      of: [{ type: 'text' }],
      initialValue: [
        'Hi there i am Manikandan a designer and creative technologist passionate about crafting meaningful digital experiences.',
        'With a sharp eye for UI/UX and a strong grasp of emerging tools like AI, I bridge the gap between design and development. I create interfaces that are not only beautiful, but also purposeful and efficient.',
        'I may not be a traditional developer, but I bring ideas to life from concept to launch blending creativity with execution at every step.',
        'Let\'s build something meaningful together.'
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'highlightedWords',
      title: 'Highlighted Words',
      description: 'Words that should be highlighted with gradient effect',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: [
        'Manikandan', 'designer', 'creative technologist',
        'UI/UX', 'AI', 'ideas to life', 'blending creativity with execution',
        'meaningful'
      ],
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      initialValue: 3,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'About Section',
      }
    },
  },
})