import { defineField, defineType } from 'sanity'
import { FiLink } from 'react-icons/fi'

export default defineType({
  name: 'connect',
  title: '🔗 Social Connect',
  type: 'document',
  icon: FiLink,
  description: 'Manage email and social media links',
  fields: [
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      description: 'Your contact email (click-to-copy feature)',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'copiedText',
      title: 'Copy Confirmation Text',
      type: 'string',
      description: 'Text shown when email is copied to clipboard',
      initialValue: 'Copied!',
      validation: (Rule) => Rule.required().max(20),
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      description: 'Add your social media profiles (drag to reorder)',
      of: [{
        type: 'object',
        name: 'socialLink',
        title: 'Social Link',
        fields: [
          {
            name: 'platform',
            title: 'Platform',
            type: 'string',
            options: {
              list: [
                { title: '💼 LinkedIn', value: 'linkedin' },
                { title: '🎨 Dribbble', value: 'dribbble' },
                { title: '📸 Instagram', value: 'instagram' },
                { title: '💻 GitHub', value: 'github' },
                { title: '💬 WhatsApp', value: 'whatsapp' },
                { title: '🐦 Twitter', value: 'twitter' },
                { title: '📘 Facebook', value: 'facebook' },
                { title: '📺 YouTube', value: 'youtube' },
                { title: '🎭 Behance', value: 'behance' },
                { title: '📝 Medium', value: 'medium' },
              ],
              layout: 'dropdown',
            },
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'url',
            title: 'Profile URL',
            type: 'url',
            validation: (Rule) => Rule.required().uri({ scheme: ['http', 'https'] }),
          },
          {
            name: 'label',
            title: 'Accessibility Label',
            type: 'string',
            description: 'Screen reader description (e.g., "LinkedIn Profile")',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'isActive',
            title: 'Show Link',
            type: 'boolean',
            description: 'Toggle to show/hide this social link',
            initialValue: true,
          },
        ],
        preview: {
          select: {
            platform: 'platform',
            url: 'url',
            isActive: 'isActive',
          },
          prepare({ platform, url, isActive }) {
            return {
              title: platform?.toUpperCase() || 'Social Link',
              subtitle: isActive ? url : '✗ Hidden',
            }
          },
        },
      }],
      validation: (Rule) => Rule.max(10).warning('Consider showing only your most important social links'),
    }),
    defineField({
      name: 'isVisible',
      title: 'Show Section',
      type: 'boolean',
      description: 'Toggle to show/hide the entire connect section',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      email: 'email',
      isVisible: 'isVisible',
      socialLinks: 'socialLinks',
    },
    prepare({ email, isVisible, socialLinks }) {
      const activeLinks = socialLinks?.filter((link: any) => link.isActive).length || 0;
      return {
        title: email || 'Social Connect',
        subtitle: isVisible ? `✓ Visible • ${activeLinks} active links` : '✗ Hidden',
      }
    },
  },
})
