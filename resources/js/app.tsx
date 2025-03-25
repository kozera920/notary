import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import 'bootstrap/dist/css/bootstrap.min.css';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const initializeApp = () => {
  createInertiaApp({
    title: title => `${title} - ${appName}`,
    resolve: name =>
      resolvePageComponent(
        `./Pages/${name}.tsx`,
        import.meta.glob('./Pages/**/*.tsx')
      ),
    setup({ el, App, props }) {
      // Add base path configuration for production
      if (import.meta.env.PROD) {
        const baseUrl = '/tg-notary-now';
        
        // Modify Ziggy route function if it exists
        if (window.route) {
          const originalRoute = window.route;
          window.route = function(name, params, absolute, config = {}) {
            const modifiedRoute = originalRoute(name, params, absolute, config);
            return baseUrl + modifiedRoute;
          };
        }
      }

      const root = createRoot(el);
      root.render(<App {...props} />);
    },
    progress: {
      color: '#F87415'
    }
  });
};

// Call the initialization function
initializeApp();