import { defineType, defineField, defineArrayMember } from 'sanity';

export const toolkit = defineType({
  name: 'toolkit',
  title: 'Toolkit',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tools',
      title: 'Tools',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'toolItem',
          title: 'Tool Item',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Tool Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'object',
              fields: [
                defineField({
                  name: 'type',
                  title: 'Icon Type',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Icon Library', value: 'library' },
                      { title: 'Custom Image', value: 'image' }
                    ]
                  },
                  initialValue: 'library'
                }),
                defineField({
                  name: 'libraryIcon',
                  title: 'Library Icon',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Code', value: 'code' },
                      { title: 'Palette', value: 'palette' },
                      { title: 'Database', value: 'database' },
                      { title: 'Globe', value: 'globe' },
                      { title: 'Zap', value: 'zap' },
                      { title: 'Shield', value: 'shield' },
                      { title: 'Layers', value: 'layers' },
                      { title: 'Wrench', value: 'wrench' },
                      { title: 'Monitor', value: 'monitor' },
                      { title: 'Cpu', value: 'cpu' },
                      { title: 'Settings', value: 'settings' },
                      { title: 'Tool', value: 'tool' },
                      { title: 'Package', value: 'package' },
                      { title: 'Terminal', value: 'terminal' },
                      { title: 'Git Branch', value: 'git-branch' },
                      { title: 'Figma', value: 'figma' },
                      { title: 'Github', value: 'github' }
                    ]
                  },
                  hidden: ({ parent }) => parent?.type !== 'library'
                }),
                defineField({
                  name: 'customImage',
                  title: 'Custom Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  hidden: ({ parent }) => parent?.type !== 'image'
                })
              ]
            }),
          ],
        }),
      ],
    }),
  ],
});