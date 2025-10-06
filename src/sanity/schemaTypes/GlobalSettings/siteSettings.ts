import { defineField, defineType } from 'sanity'
import { FiSettings } from 'react-icons/fi'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: FiSettings,
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      description: 'Keep it SEO-friendly and include your primary keywords.',
      initialValue: 'Manikandan S | Web Developer & UI/UX Designer',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Site Description / Meta Description',
      type: 'text',
      description: 'A short summary (~150–160 characters).',
      initialValue: 'Portfolio of Manikandan S — a Web Developer, UI/UX Designer, and Creative Technologist. Creating modern, interactive, and accessible digital experiences.',
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: 'keywords',
      title: 'SEO Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: ['web development', 'UI/UX design', 'portfolio', 'creative technology'],
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Image displayed when sharing the site on social media',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon & Icons',
      type: 'object',
      description: 'Upload icons for various platforms',
      fields: [
        {
          name: 'favicon',
          title: 'Favicon (favicon.ico)',
          type: 'file',
          description: 'Standard favicon for browsers',
        },
        {
          name: 'appleTouchIcon',
          title: 'Apple Touch Icon',
          type: 'image',
          description: 'Icon for iOS shortcuts (apple-touch-icon.png)',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'webManifestIcon192',
          title: 'Web Manifest Icon (192x192)',
          type: 'image',
          description: 'Small icon for web app manifest',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'webManifestIcon512',
          title: 'Web Manifest Icon (512x512)',
          type: 'image',
          description: 'Large icon for web app manifest',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Site Settings',
      }
    },
  },
})