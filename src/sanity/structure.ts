import type {StructureResolver} from 'sanity/structure'
import {
  FiHome,
  FiUser,
  FiFileText,
  FiPhone,
  FiLink,
  FiType,
  FiImage,
  FiBriefcase,
  FiClock,
  FiTool,
  FiCode,
  FiMessageSquare,
  FiFolder,
  FiLayers,
  FiSettings,
  FiBook
} from 'react-icons/fi'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Homepage
      S.listItem()
        .title('Homepage')
        .icon(FiHome)
        .child(
          S.list()
            .title('Homepage Sections')
            .items([
              S.listItem()
                .title('Profile')
                .icon(FiUser)
                .child(
                  S.document()
                    .schemaType('profile')
                    .documentId('profile')
                ),
              S.listItem()
                .title('About')
                .icon(FiFileText)
                .child(
                  S.document()
                    .schemaType('about')
                    .documentId('about')
                ),
              S.listItem()
                .title('Toolkit Section')
                .icon(FiTool)
                .child(
                  S.document()
                    .schemaType('toolkitSection')
                    .documentId('toolkitSection')
                ),
              S.listItem()
                .title('Skills Section')
                .icon(FiCode)
                .child(
                  S.document()
                    .schemaType('skillsSection')
                    .documentId('skillsSection')
                ),
              S.listItem()
                .title('Experience Section')
                .icon(FiClock)
                .child(
                  S.document()
                    .schemaType('experienceSection')
                    .documentId('experienceSection')
                ),
              S.listItem()
                .title('Projects Section')
                .icon(FiBriefcase)
                .child(
                  S.document()
                    .schemaType('projectsSection')
                    .documentId('projectsSection')
                ),
              S.listItem()
                .title('Logo')
                .icon(FiImage)
                .child(
                  S.document()
                    .schemaType('logo')
                    .documentId('logo')
                ),
              S.listItem()
                .title('Marquee')
                .icon(FiType)
                .child(
                  S.document()
                    .schemaType('marquee')
                    .documentId('marquee')
                ),
              S.listItem()
                .title('Resume')
                .icon(FiFileText)
                .child(
                  S.document()
                    .schemaType('resume')
                    .documentId('resume')
                ),
            ])
        ),

        S.divider(),

      // Content Library
      S.listItem()
        .title('Content Library')
        .icon(FiBook)
        .child(
          S.list()
            .title('Content Library')
            .items([
              S.documentTypeListItem('project')
                .title('Projects')
                .icon(FiBriefcase),
              S.documentTypeListItem('experience')
                .title('Experience')
                .icon(FiClock),
              S.documentTypeListItem('skill')
                .title('Skills')
                .icon(FiCode),
              S.documentTypeListItem('tool')
                .title('Tools')
                .icon(FiTool),
              S.documentTypeListItem('testimonial')
                .title('Testimonials')
                .icon(FiMessageSquare),
            ])
        ),

     S.divider(),

      // Case Study Page
      S.listItem()
        .title('Case Study Page')
        .icon(FiBriefcase)
        .child(
          S.documentTypeList('project')
            .title('Projects')
            .child((projectId) =>
              S.document()
                .schemaType('casestudy')
                .documentId(`casestudy-for-${projectId}`)
                .initialValueTemplate('casestudy-by-project', { projectId })
            )
        ),
S.divider(),
      // Settings
      S.listItem()
        .title('Settings')
        .icon(FiSettings)
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('Site Settings')
                .icon(FiSettings)
                .child(
                  S.document()
                    .schemaType('siteSettings')
                    .documentId('siteSettings')
                ),
              S.listItem()
                .title('Contact')
                .icon(FiPhone)
                .child(
                  S.document()
                    .schemaType('contact')
                    .documentId('contact')
                ),
              S.listItem()
                .title('Connect')
                .icon(FiLink)
                .child(
                  S.document()
                    .schemaType('connect')
                    .documentId('connect')
                ),
            ])
        ),
    ])
