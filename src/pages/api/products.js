const products = [
  {
    id: 1,
    title: "Product 1",
    price: 19.99,
    description: "This is the description for Product 1.",
    category: "Electronics",
    image: "",
  },
  {
    id: 2,
    title: "Product 2",
    price: 29.99,
    description: "This is the description for Product 2.",
    category: "Clothing",
    image: "",
  },
  {
    id: 3,
    title: "Product 3",
    price: 14.99,
    description: "This is the description for Product 3.",
    category: "Home & Kitchen",
    image: "",
  },
  {
    id: 4,
    title: "Product 4",
    price: 19.99,
    description: "This is the description for Product 1.",
    category: "Electronics",
    image: "",
  },
  {
    id: 5,
    title: "Product 5",
    price: 29.99,
    description: "This is the description for Product 2.",
    category: "Clothing",
    image: "",
  },
  {
    id: 6,
    title: "Product 6",
    price: 14.99,
    description: "This is the description for Product 3.",
    category: "Home & Kitchen",
    image: "",
  },
  {
    id: 7,
    title: "Product 7",
    price: 19.99,
    description: "This is the description for Product 1.",
    category: "Electronics",
    image: "",
  },
  {
    id: 8,
    title: "Product 8",
    price: 29.99,
    description: "This is the description for Product 2.",
    category: "Clothing",
    image: "",
  },
  {
    id: 9,
    title: "Product 9",
    price: 14.99,
    description: "This is the description for Product 3.",
    category: "Home & Kitchen",
    image: "",
  },
  // Add more products as needed
];

export default async (req, res) => {
  if (req.method === "GET") {
    // Send the products array as a JSON response
    res.status(200).json(products);
  } else {
    // Handle other HTTP methods if needed
    res.status(405).json({ message: "Method Not Allowed" });
  }
};
