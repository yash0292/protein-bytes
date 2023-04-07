import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { proteinAdminTheme } from './theme'
import StudioLogo from './components/StudioLogo'
import StudioNavbar from './components/StudioNavbar'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

export default defineConfig({
  basePath: "/admin",
  name: 'PROTIENBYTES_Admin_Dashboard',
  title: 'PROTIENBYTES Admin Dashboard',

  projectId: '9mp8sv0o',
  dataset: 'fooddelivery',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: StudioLogo,
      navbar: StudioNavbar
    }
  },
  theme: proteinAdminTheme
})
