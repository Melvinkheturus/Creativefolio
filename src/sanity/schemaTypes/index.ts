import { type SchemaTypeDefinition } from 'sanity'

// Import singleton schemas
import toolkitSection from './singleton/HomePage/toolkitSection'
import testimonialSection from './singleton/HomePage/testimonialSection'
import projectsSection from './singleton/HomePage/projectsSection'
import experienceSection from './singleton/HomePage/experienceSection'
import skillsSection from './singleton/HomePage/skillsSection'
import profile from './singleton/HomePage/profile'
import resume from './singleton/HomePage/resume'
import about from './singleton/HomePage/about'
import contact from './singleton/HomePage/contact'
import connect from './singleton/HomePage/connect'
import marquee from './singleton/HomePage/marquee'
import logo from './singleton/HomePage/logo'

// Import dynamic schemas
import skill from './dynamic/homepage/skill'
import experience from './dynamic/homepage/experience'
import project from './dynamic/homepage/project'
import testimonial from './dynamic/homepage/testimonial'
import tool from './dynamic/homepage/tool'
import { casestudy } from './dynamic/casestudy'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Singleton schemas
    toolkitSection,
    testimonialSection,
    projectsSection,
    experienceSection,
    skillsSection,
    profile,
    resume,
    about,
    contact,
    connect,
    marquee,
    logo,
    
    // Dynamic schemas
    skill,
    experience,
    project,
    testimonial,
    tool,
    casestudy,
  ],
}
