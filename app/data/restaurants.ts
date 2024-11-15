import { Restaurant } from '../types';

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Le Petit Jardin',
    description: 'An intimate French bistro offering seasonal menus with locally sourced ingredients.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070',
    categories: ['dinner', 'lunch'],
    budget: 'moderate',
    rating: 4.8,
    cuisine: 'french',
    featured: true,
    address: '123 Culinary Lane',
    menu: [
      {
        id: 'f1',
        name: 'Coq au Vin',
        description: 'Classic French chicken braised in wine, served with pearl onions and mushrooms',
        price: 32,
        image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070',
        category: 'dinner',
        cuisine: 'french'
      },
      {
        id: 'f2',
        name: 'Ratatouille',
        description: 'Provençal vegetable stew with eggplant, zucchini, and bell peppers',
        price: 24,
        image: 'https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?q=80&w=2070',
        category: 'lunch',
        cuisine: 'french',
        dietary: ['vegetarian']
      },
      {
        id: 'f3',
        name: 'Croque Monsieur',
        description: 'Classic French grilled ham and cheese sandwich with béchamel sauce',
        price: 18,
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2070',
        category: 'lunch',
        cuisine: 'french'
      }
    ]
  },
  {
    id: '2',
    name: 'Aurora',
    description: 'Modern Nordic cuisine focusing on fresh, seasonal ingredients and innovative techniques.',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070',
    categories: ['breakfast', 'dinner'],
    budget: 'luxury',
    rating: 4.9,
    cuisine: 'nordic',
    featured: true,
    address: '456 Gourmet Avenue',
    menu: [
      {
        id: 'n1',
        name: 'Smoked Arctic Char',
        description: 'House-smoked char with dill, pickled vegetables, and rye crisps',
        price: 45,
        image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?q=80&w=2070',
        category: 'dinner',
        cuisine: 'nordic'
      },
      {
        id: 'n2',
        name: 'Nordic Breakfast Bowl',
        description: 'Ancient grains, soft-boiled egg, smoked fish, and fresh berries',
        price: 28,
        image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?q=80&w=2070',
        category: 'breakfast',
        cuisine: 'nordic'
      }
    ]
  },
  {
    id: '3',
    name: 'Olive & Thyme',
    description: 'Mediterranean-inspired dishes served in a warm, welcoming atmosphere.',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070',
    categories: ['lunch', 'dinner'],
    budget: 'affordable',
    rating: 4.6,
    cuisine: 'mediterranean',
    address: '789 Flavor Street',
    menu: [
      {
        id: 'm1',
        name: 'Greek Mezze Platter',
        description: 'Selection of traditional Mediterranean appetizers with fresh pita',
        price: 28,
        image: 'https://images.unsplash.com/photo-1542528180-a1208c5169a5?q=80&w=2070',
        category: 'lunch',
        cuisine: 'mediterranean',
        dietary: ['vegetarian']
      },
      {
        id: 'm2',
        name: 'Grilled Octopus',
        description: 'Tender octopus with olive oil, lemon, and herbs',
        price: 34,
        image: 'https://images.unsplash.com/photo-1564671165093-20688ff1fffa?q=80&w=2070',
        category: 'dinner',
        cuisine: 'mediterranean'
      }
    ]
  },
  {
    id: '4',
    name: 'Sakura',
    description: 'Contemporary Japanese cuisine with traditional roots',
    image: 'https://images.unsplash.com/photo-1580442151529-343f2f6e0e27?q=80&w=2070',
    categories: ['lunch', 'dinner'],
    budget: 'luxury',
    rating: 4.9,
    cuisine: 'japanese',
    featured: true,
    address: '101 Zen Way',
    menu: [
      {
        id: 'j1',
        name: 'Omakase Experience',
        description: "Chef's selection of premium sushi and sashimi",
        price: 150,
        image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070',
        category: 'dinner',
        cuisine: 'japanese'
      },
      {
        id: 'j2',
        name: 'Wagyu Tataki',
        description: 'Lightly seared A5 wagyu beef with ponzu sauce',
        price: 85,
        image: 'https://images.unsplash.com/photo-1535241749838-299277b6305f?q=80&w=2070',
        category: 'dinner',
        cuisine: 'japanese'
      },
      {
        id: 'j3',
        name: 'Bento Box',
        description: 'Assorted selection of sushi, tempura, and seasonal sides',
        price: 45,
        image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?q=80&w=2070',
        category: 'lunch',
        cuisine: 'japanese'
      }
    ]
  }
];