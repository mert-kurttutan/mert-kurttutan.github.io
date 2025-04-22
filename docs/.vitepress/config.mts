import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Blog",
  description: "Blog Site",
  srcDir: 'src',
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog' },
      { text: 'Notes', link: '/notes' },
    ],
    sidebar: generateSidebar('./docs/src'),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
})
function generateSidebar(srcPath) {
  const sidebar = {}
  
  // Generate sidebar for root path
  sidebar['/'] = generateSidebarItems(srcPath)
  
  return sidebar
}

function generateSidebarItems(dir) {
  const items: { text: string, link?: string, collapsed?: boolean, items?: any[] }[] = []
  
  try {
    const files = fs.readdirSync(dir)
    
    // Process directories first to create sections
    files.filter(file => fs.statSync(path.join(dir, file)).isDirectory())
      .forEach(folder => {
        // Skip hidden folders
        if (folder.startsWith('.')) return
        
        const folderPath = path.join(dir, folder)
        const isIndexed = fs.existsSync(path.join(folderPath, 'index.md'))
        if (isIndexed) {
          const indexFilePath = path.join(folderPath, 'index.md')
          const relativePath = '/' + path.relative(path.join('docs', 'src'), indexFilePath)
            .replace(/\.md$/, '')
            .split(path.sep).join('/')

          items.push({
            text: formatText(folder),
            link: relativePath || '/',
            collapsed: false,
            items: generateSidebarItems(folderPath)
          })
        } else {
          items.push({
            text: formatText(folder),
            collapsed: false,
            items: generateSidebarItems(folderPath)
          })
        }
      })
    
    // Then process markdown files
    files.filter(file => file.endsWith('.md'))
      .forEach(file => {
        // Handle index files specially
        const isIndex = file === 'index.md'
        const filePath = path.join(dir, file)
        
        // Create proper relative path for VitePress with forward slashes for URLs
        const relativePath = '/' + path.relative(path.join('docs', 'src'), filePath)
          .replace(/\.md$/, '')
          .split(path.sep).join('/')
        
        if (!isIndex) {
          items.push({
            text: formatText(file.replace('.md', '')),
            link: relativePath || '/'
          })
        }
      })
  } catch (err) {
    console.error(`Error reading directory ${dir}:`, err)
  }
  
  return items
}

function formatText(text: string): string {
  // Convert kebab-case or snake_case to Title Case
  return text
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
}