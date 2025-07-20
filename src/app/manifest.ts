import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Oakley Dye Software & Design',
    short_name: 'Oakley Dye',
    description: 'Custom software development, web design, and business consulting services',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#C73E1D',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
