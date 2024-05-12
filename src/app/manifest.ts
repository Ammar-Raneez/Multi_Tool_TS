import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Test Integration Manifest', // app name
    icons: [
      {
        // various icon sixes
        src: 'twitter-image.jpg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
    ],
    theme_color: '#2d89ef', // title bar styling
    background_color: '#2d89ef', // startup screen background color
    display: 'standalone', // launch as an app
  };
}
