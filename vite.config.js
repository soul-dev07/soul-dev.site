import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
       port: 4003, // Change to your desired port
      },
  
});

// export default defineConfig({
//   server: {
//     port: 4000, // Change to your desired port
//   },
// });
