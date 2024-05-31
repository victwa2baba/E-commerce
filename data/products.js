export function getProduct (productId) {
  let matchingProduct;
      
  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct;
}

export const products = [{
  id: 'dbq0',
  image: 'products/images/utopia-bedding.jpg',
  name: 'Utopia Bedding Twin Bed Sheets Set - 3 Piece Bedding - Brushed Microfiber - Shrinkage and Fade Resistant - Easy Care (Twin, White)',
  priceCents: 1995 
}, {
  id: 'dbq1',
  image: 'products/images/amazon-basics-lightweight.jpg',
  name: 'Amazon Basics Lightweight Super Soft Easy Care Microfiber 3-Piece Bed Sheet Set with 14-Inch Deep Pockets, Twin, Bright White, Solid',
  priceCents: 1499
}, {
  id: 'dbq2',
  image: 'products/images/utopia-bedding-white.jpg',
  name: 'Utopia Bedding Waterproof Mattress Protector Twin Size, Premium Terry Mattress Cover 200 GSM, Breathable, Fitted Style with Stretchable Pockets (White)',
  priceCents: 1299
}, {
  id: 'dbq3',
  image: 'products/images/utopia-bedding-down.jpg',
  name: 'Utopia Bedding Down Alternative Comforter (Twin, White) - All Season Comforter - Plush Siliconized Fiberfill Duvet Insert - Box Stitched',
  priceCents: 2999
}, {
  id: 'dbq4',
  image: 'products/images/utopia-soft.jpg',
  name: 'Utopia Bedding Twin Fitted Sheet - Bottom Sheet - Deep Pocket - Soft Microfiber -Shrinkage and Fade Resistant-Easy Care -1 Fitted Sheet Only (White)',
  priceCents: 999
}
];
