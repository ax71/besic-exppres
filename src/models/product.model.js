export const product = [
  {
    id: 1,
    name: "coffe latte",
    price: 20000,
  },
  {
    id: 2,
    name: "matcha latte",
    price: 33000,
  },
  {
    id: 3,
    name: "thai tea",
    price: 27000,
  },
];

export const getAllProducts = () => {
  return product;
};

export const findProductById = (id) => {
  return product.find((product) => product.id === id);
};

export const createProduct = (data) => {
  const newProduct = {
    id: product.length + 1,
    ...data,
  };

  product.push(newProduct);

  return newProduct;
};
