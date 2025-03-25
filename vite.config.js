// import { defineConfig } from 'vite';
// import laravel from 'laravel-vite-plugin';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//     plugins: [
//         laravel({
//             input: ['resources/css/app.css', 'resources/js/app.tsx'],
//             refresh: true,
//         }),
//         react(),
//     ],
//     server: {
//         // host: true,
//         // port: 5173,
//         // strictPort: true,
//         // cors: true,
//         // hmr: {
//         //     host: 'localhost'
//         // }
//     }
// });


import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';


export default defineConfig({
   plugins: [laravel(['resources/js/app.tsx', 'resources/css/app.css']), react()]
 });

