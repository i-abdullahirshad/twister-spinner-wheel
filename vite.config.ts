import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePrerender from 'vite-plugin-prerender'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    vitePrerender({
      // Kis folder mein final files save karni hain
      staticDir: path.join(__dirname, 'dist'),
      
      // Woh tamaam raaste (routes) jinki humein prerendered HTML chahiye
      routes: [
        '/',          
        '/ar',        
        '/ur',        
        '/es',        
        '/fr',        
        '/de',        
        '/pt',        
        '/ru',        
        '/hi',        
        '/bn',        
        '/tr',        
        '/id',        
        '/ms',        
        '/it',        
        '/nl',        
        '/pl',        
        '/sv',        
        '/vi',        
        '/ja',        
        '/ko',        
        '/zh-cn',     
        '/zh-tw',     
        
        // Important Utility & Game Pages:
        '/about',
        '/privacy',
        '/terms-conditions',
        '/contact',
        '/how-to-make-twister-spinner-at-home',
        '/twister-spinner-symbols-meanings',
        '/twister-spinner-rules',
        '/strip-twister-spinner-rules',
      ],
    }),
  ],
})