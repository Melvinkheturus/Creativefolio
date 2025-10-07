import { defineField, defineType } from 'sanity'
import { FiImage } from 'react-icons/fi'

export default defineType({
  name: 'logo',
  title: '🎨 Brand Logo',
  type: 'document',
  icon: FiImage,
  description: 'Manage your brand logo displayed on the homepage',
  fields: [
    defineField({
      name: 'logoImage',
      title: 'Logo Image',
      type: 'image',
      description: 'Upload your logo (PNG or SVG recommended for transparency)',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
      description: 'Describe your logo for accessibility and SEO',
      initialValue: 'MK Logo',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'width',
      title: 'Display Width (px)',
      type: 'number',
      description: 'Logo width in pixels',
      initialValue: 150,
      validation: (Rule) => Rule.required().min(50).max(500),
    }),
    defineField({
      name: 'height',
      title: 'Display Height (px)',
      type: 'number',
      description: 'Logo height in pixels',
      initialValue: 150,
      validation: (Rule) => Rule.required().min(50).max(500),
    }),
    defineField({
      name: 'isVisible',
      title: 'Show Logo',
      type: 'boolean',
      description: 'Toggle to show/hide the logo section',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'altText',
      media: 'logoImage',
      isVisible: 'isVisible',
    },
    prepare({ title, media, isVisible }) {
      return {
        title: title || 'Brand Logo',
        subtitle: isVisible ? '✓ Visible' : '✗ Hidden',
        media,
      }
    },
  },
})