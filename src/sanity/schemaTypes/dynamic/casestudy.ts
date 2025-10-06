import { defineType, defineField, defineArrayMember } from 'sanity';

export const casestudy = defineType({
  name: 'casestudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'project',
      title: 'Project',
      type: 'reference',
      to: [{ type: 'project' }],
      description: 'Reference to the project this case study belongs to.',
      hidden: true, // This field will be managed programmatically
    }),

    // ProjectHero fields
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'techItem',
          title: 'Tech Item',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),
      ],
    }),

    // ProjectSummary fields
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
        }),
      ],
    }),

    // ProjectProblemSolution fields
    defineField({
      name: 'problem',
      title: 'Problem',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
        }),
      ],
    }),
    defineField({
      name: 'solution',
      title: 'Solution',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
        }),
      ],
    }),

    // ProjectFeatures fields
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'featureItem',
          title: 'Feature Item',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
          ],
        }),
      ],
    }),

    // ProjectProcess fields
    defineField({
      name: 'processPhases',
      title: 'Process Phases',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'processPhase',
          title: 'Process Phase',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
            defineField({
              name: 'artifacts',
              title: 'Artifacts',
              type: 'array',
              of: [
                defineArrayMember({
                  name: 'artifact',
                  title: 'Artifact',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'type',
                      title: 'Type',
                      type: 'string',
                    }),
                    defineField({
                      name: 'url',
                      title: 'URL',
                      type: 'url',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    // ProjectResults fields
    defineField({
      name: 'results',
      title: 'Results',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'resultItem',
          title: 'Result Item',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
          ],
        }),
      ],
    }),

    // ProjectTechStack fields
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'technology',
          title: 'Technology',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
          ],
        }),
      ],
    }),

    // ProjectLinks fields
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'linkItem',
          title: 'Link Item',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
          ],
        }),
      ],
    }),

    // ProjectVisualShowcase fields
    defineField({
      name: 'visualShowcase',
      title: 'Visual Showcase',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'imageItem',
          title: 'Image Item',
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
          ],
        }),
      ],
    }),

    // MobileVisualShowcase fields
    defineField({
      name: 'mobileShowcase',
      title: 'Mobile Showcase',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'mobileImage',
          title: 'Mobile Image',
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'mobileFeatures',
      title: 'Mobile Features',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'mobileFeatureItem',
          title: 'Mobile Feature Item',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
          ],
        }),
      ],
    }),
  ],
});