// Define the Product interface
interface Product {
  category: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
  createdAt: Date;
}

// Define the available categories
export const categories: string[] = ['Sofa', 'Mirror', 'Lamp', 'Chairs', 'Vase', 'Frame'];

// Define the types or styles for each category
const mebelTurilari = {
  sofa: ['Sectional', 'Chesterfield', 'Loveseat', 'Sleeper', 'Reclining', 'Chaise Lounge', 'Camelback', 'Divan', 'Settee', 'Tuxedo'],
  mirror: ['Wall', 'Floor', 'Vanity', 'Full-length', 'Frameless', 'Beveled', 'Sunburst', 'Oval', 'Round', 'Venetian'],
  lamp: ['Table', 'Floor', 'Desk', 'Bedside', 'Task', 'Arc', 'Torchiere', 'Tiffany', 'Tripod', 'Swing Arm'],
  chairs: ['Armchair', 'Accent', 'Recliner', 'Wingback', 'Club', 'Slipper', 'Barrel', 'Rocking', 'Swivel', 'Bergere'],
  vase: ['Ceramic', 'Glass', 'Crystal', 'Porcelain', 'Terracotta', 'Metal', 'Wood', 'Bamboo', 'Modern', 'Traditional'],
  frame: ['Picture', 'Photo', 'Poster', 'Collage', 'Shadow box', 'Digital', 'Floating', 'Ornate', 'Rustic', 'Antique'],
};

// Function to generate a random rating
const generateRandomRating = (): string => {
  return (Math.random() * (5 - 1) + 1).toFixed(1);
};

// Function to generate a random price within a given range
const generateRandomPrice = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Function to generate a random product description
const generateRandomDescription = (category: string, type: string): string => {
  const adjectives: string[] = ['Comfortable', 'Large', 'Modern', 'Wooden', 'Glass', 'Silver'];
  return `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${type.toLowerCase()} ${category.toLowerCase()}`;
};

// Function to generate a random date within a specified range
const generateRandomDate = (start: Date, end: Date): Date => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};


// Function to generate an array of products for a given category and count
const generateProducts = (category: string, count: number): Product[] => {
  const products: Product[] = [];
  const types = mebelTurilari[category.toLowerCase() as keyof typeof mebelTurilari];

  if (types) {
    for (let i = 1; i <= count; i++) {
      const productName = types[Math.floor(Math.random() * types.length)];

      // Generate a random number of images (between 1 and 3)
      const numImages = Math.floor(Math.random() * 6) + 1;

      // Create an array to store product images
      const productImages: string[] = [];

      // Populate the productImages array with random image URLs
      for (let j = 0; j < numImages; j++) {
        productImages.push(`https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`);
      }

      const startDate = new Date();
      const endDate = new Date();
      startDate.setDate(startDate.getDate() - 30);
      const createdAt = generateRandomDate(startDate, endDate);
      
      // Create a product object
      const product: Product = {
        images: productImages,
        category: category,
        name: productName,
        createdAt: createdAt,
        description: generateRandomDescription(category, productName),
        price: generateRandomPrice(20, 220),
        rating: parseInt(generateRandomRating())
      };

      // Add the product to the array
      products.push(product);
    }
  }

  return products;
};

// Array to store all generated products
export const allProducts: Product[] = [];

// Generate products for each category
categories.forEach(category => {
  const products: Product[] = generateProducts(category, 10);
  allProducts.push(...products);
});
