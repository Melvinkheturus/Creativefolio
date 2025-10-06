import { defineField, defineType } from 'sanity'
import { FiLink } from 'react-icons/fi'

export const DEFAULT_CONNECT = {
  email: 'smk.manikandan.dev',
  copiedText: 'Copied!',
  socialLinks: [
    { platform: 'linkedin', url: 'https://linkedin.com', label: 'LinkedIn Profile' },
    { platform: 'dribbble', url: 'https://dribbble.com', label: 'Dribbble Portfolio' },
    { platform: 'instagram', url: 'https://instagram.com', label: 'Instagram Profile' },
    { platform: 'github', url: 'https://github.com', label: 'GitHub Profile' },
    { platform: 'whatsapp', url: 'https://wa.me/yournumber', label: 'WhatsApp Contact' },
  ],
  displayOrder: 5
}

export default defineType({
  name: 'connect',
  title: 'Connect Section',
  type: 'document',
  icon: FiLink,

  fields: [
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      initialValue: DEFAULT_CONNECT.email,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'copiedText',
      title: 'Copied Confirmation Text',
      type: 'string',
      initialValue: DEFAULT_CONNECT.copiedText,
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'platform',
            title: 'Platform',
            type: 'string',
            options: {
              list: [
                { title: 'LinkedIn', value: 'linkedin' },
                { title: 'Dribbble', value: 'dribbble' },
                { title: 'Instagram', value: 'instagram' },
                { title: 'GitHub', value: 'github' },
                { title: 'WhatsApp', value: 'whatsapp' },
                { title: 'Twitter', value: 'twitter' },
                { title: 'Facebook', value: 'facebook' },
                { title: 'YouTube', value: 'youtube' },
                { title: 'Behance', value: 'behance' },
                { title: 'Medium', value: 'medium' },
              ],
            },
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'url',
            title: 'URL',
            type: 'url',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'label',
            title: 'Accessibility Label',
            type: 'string',
          },
        ],
        preview: {
          select: {
            title: 'platform',
            subtitle: 'url',
          },
        },
      }],
      initialValue: DEFAULT_CONNECT.socialLinks,
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      initialValue: DEFAULT_CONNECT.displayOrder,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'email',
    },
    prepare({ title }) {
      return {
        title: title || 'Connect Section',
      }
    },
  },
})