// Proxy requests to /gifts to the server
// retrieve the gift data from the server and display it on our website

// The vite.config.js file is used to customize the behavior of the Vite tool. You can define various options, 
//such as development server options and production build options. In this code segment, we are specifying that 
// when we run the command npm run build, the resources in the public directory will be output to the server/public 
// directory. We are also specifying that when we try to access the /gifts endpoint from the client, we want the 
// server to access this route at http://localhost:3001 while we are in development.

import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: '../server/public',
    emptyOutDir: true
  },
  server: {
    proxy: {
      '/chairs': {
        target: 'http://localhost:3001'
      }
    }
  }
})