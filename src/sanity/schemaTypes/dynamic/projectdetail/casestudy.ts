import { defineType, defineField, defineArrayMember } from 'sanity';
import { groq } from "next-sanity";

export const casestudyBySlugQuery = groq`
  *[_type == "casestudy" && slug.current == $slug][0] {
    _id,
    title,
    subtitle,
    category,
    timeline,
    role,
    projectType,
    "thumbnail": thumbnail.asset->url,
    "heroImage": heroImage.asset->url,
    summary,
    contribution,
    problem,
    solution,
    techStack[] {
      name,
      "icon": icon.asset->url
    },

    visualShowcase[] {
      "url": asset->url,
      alt,
      caption,
      title,
      subtitle,
      location
    },
    features[] {
      title,
      description,
      "imageUrl": image.asset->url
    },
    processPhases[] {
      phase,
      description,
      artifacts[] {
        type,
        url
      }
    },
    results[] {
      metric,
      value,
      description
    },
    links[] {
      type,
      url,
      icon {
        type,
        libraryIcon,
        "customImage": customImage.asset->url
      }
    },
    mobileShowcase[] {
      "url": asset->url,
      alt,
      caption
    },
    mobileFeatures[] {
      title,
      description,
      icon
    },
    slug
  }
`;

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
      hidden: true,
    }),

    // CRITICAL: SLUG FIELD (was missing!)
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      description: 'Click "Generate" to create a slug from the title',
    }),

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
      name: 'timeline',
      title: 'Timeline',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'techItem',
          title: 'Technology',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Technology Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Technology Icon',
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
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
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
    defineField({
      name: 'contribution',
      title: 'Contribution',
      type: 'text',
    }),
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
    defineField({
      name: 'features',
      title: 'Feature Gallery',
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
              name: 'image',
              title: 'Feature Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
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
              name: 'phase',
              title: 'Phase',
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
              name: 'metric',
              title: 'Metric',
              type: 'string',
            }),
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
          ],
        }),
      ],
    }),

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
              name: 'type',
              title: 'Type',
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
                      { title: 'Github', value: 'github' },
                      { title: 'Figma', value: 'figma' },
                      { title: 'External Link', value: 'external-link' },
                      { title: 'File Text', value: 'file-text' },
                      { title: 'Globe', value: 'globe' },
                      { title: 'Link', value: 'link' },
                      { title: 'Download', value: 'download' }
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
    defineField({
      name: 'visualShowcase',
      title: 'Visual Showcase',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'caption',
              title: 'Caption/Description',
              type: 'text',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Title (First Line)',
              type: 'string',
              description: 'Main title for the showcase item',
            }),
            defineField({
              name: 'subtitle',
              title: 'Subtitle (Second Line)',
              type: 'string',
              description: 'Secondary title for the showcase item',
            }),
            defineField({
              name: 'location',
              title: 'Location/Category',
              type: 'string',
              description: 'Location or category label',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'mobileShowcase',
      title: 'Mobile Showcase',
      type: 'array',
      of: [
        defineArrayMember({
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
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],
});