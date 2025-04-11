import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "William L. Potter",
  description: "Project Portfolio and CV",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about'},
      { text: 'Projects', link: '/projects/'},
      { text: 'CV', link: '/cv' }
    ],

    sidebar: [
      {
        text: 'Projects',
        items: [
          { text: 'Sinai Manuscripts Data Portal', link: '/projects/smdp' },
          { text: 'Syriac Manuscripts in the British Library', link: '/projects/smbl' },
          { text: 'The Syriac Gazeteer', link: '/projects/smdp' },
          { text: 'The Comprehensive Bibliography on Syriac Studies', link: '/projects/cbss' },
          { text: 'Caesarea-Maritima.org: A Digital Archive', link: '/projects/caesarea' },
          { text: 'Sinai Manuscripts Digital Library', link: '/projects/smdl' },
          { text: 'The Beth Qaṭraye Gazetteer', link: '/projects/bqg' },
          { text: 'Linked Data for Syriac Manuscripts', link: '/projects/linked-mss' }
        ]
      },
      {
        text: 'About',
        items: [
          { text: 'About Me', link: '/about' },
          { text: 'Curriculum Vitae', link: '/cv' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wlpotter' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/williamlpotter/' }
    ]
  }
})
