export const useResources = () => {
  const resources = [
    {
      id: 'sustainable-farming',
      title: 'Sustainable Farming Practices',
      description: 'Learn about eco-friendly farming methods and sustainable agricultural practices.',
      image: 'sustainable.jpg',
      type: 'Guide',
      duration: '15 min read',
      keyPoints: [
        'Soil conservation and management techniques',
        'Water-efficient irrigation systems',
        'Natural pest control methods',
        'Crop rotation strategies',
        'Biodiversity preservation practices'
      ],
      additionalResources: [
        { title: 'Sustainable Farming Guidelines', url: '#' },
        { title: 'Soil Management Handbook', url: '#' }
      ]
    },
    // Copy all other resources with their keyPoints and additionalResources
  ]

  return {
    resources,
    getResource: (id) => resources.find(r => r.id === id)
  }
}