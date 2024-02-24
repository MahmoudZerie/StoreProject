import { ICategory, IFormInput, IProduct } from "../interfaces";
import { v4 as uuid } from "uuid";
export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "2022 BMW",  
    description:
    "The BMW M4 epitomizes precision engineering  exhilarating , marrying sleek design with raw power. Its turbocharged engine and dynamic handling make every drive adrenaline-fueled experience.",
    imageURL:
    "https://images.unsplash.com/photo-1597446663490-a45479fcb8a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "125000",
    colors: [
		"#FF0032",
		 "#2563eb",
		  "#FF6E31"
    ],
    category: {
      name: "Car",
      imageURL:
        "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1830&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "Nike Shoes",
    description:
    "Nike shoes, and  a pinnacle of athletic footwear, embody a perfect fusion of style and performance. Renowned for their innovation, these iconic sneakers feature cutting-edge technologies that enhance comfort and support. The distinctive swoosh logo has become a global symbol of sportswear excellence, representing a commitment to pushing boundaries. Whether on the track or the street, Nike shoes empower individuals to unleash their full potential with every step.",
	imageURL:
    "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  price: "2500",
    colors: ["#A31ACB",
	"#FF6E31",
	"#3C2A21",
	"#CB1C8D",
	"#645CBB",
	"#820000",
	"#13005A",
	"#1F8A70",
	"#84D2C5",],
    category: {
      name: "Shose",
      imageURL:
		"https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	},
  },
  { 
    id: uuid(),
    title: "Golf 7 gti ",
    description:
    "The Golf 7 GTI is a sporty and stylish compact car that blends performance with practicality. With its turbocharged engine, precise handling, and distinctive design, it offers an exhilarating driving experience. The interior is well-crafted, featuring quality materials and modern technology.",
    imageURL:
    "https://images.unsplash.com/photo-1568050664426-85448dee9a42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "120000",
    colors: ["#A31ACB", "#3C2A21", "#1F8A70", "#820000", "#FF0032"],
    category: {
      name: "Cars",
      imageURL:
		"https://images.unsplash.com/photo-1562911791-472321d62247?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	},
  },
  {
    id: uuid(),
    title: "Casual Men Clothes",
    description:
    "Casual men's clothing combines comfort with style, offering versatile options for everyday wear. From relaxed jeans and cozy sweaters to effortlessly cool t-shirts and sneakers, it's all about effortless elegance for any occasion",
    imageURL:
	"https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	price: "1500",
    colors: [],
    category: {
      name: "Clothes",
      imageURL:
		"https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	},
  },
  {
    id: uuid(),
    title: "Air Jordan 1 Mid",
    description:
    "	Jordan Nike shoes: Iconic blend of style and performance, embodying the legacy of basketball legend Michael Jordan.",
    imageURL:
	"https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	price: "350",
    colors: [
      "#A31ACB",
      "#FF6E31",
      "#3C2A21",
      "#CB1C8D",
      "#645CBB",
      "#FF0032",
      "#13005A",
      "#84D2C5",
    ],
    category: {
      name: "Nike",
      imageURL:
		"https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	},
  },
  {
    id: uuid(),
    title: "2020 dodge challenger",
    description:
	"Dodge Challenger: A timeless symbol of American muscle, boasting a bold design and exhilarating performance that pays homage to its legendary heritage. Unleash the thrill of the open road in this iconic and powerful muscle car",
	imageURL:
    "https://images.unsplash.com/photo-1506610654-064fbba4780c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  price: "545000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageURL:
		"https://images.unsplash.com/photo-1622994690845-56efd20992c6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
  },
  {
    id: uuid(),
    title: "Chevrolet Cmaro:2021",
    description:
    "The 2021 Chevrolet Camaro exudes classic American muscle with modern performance upgrades, boasting powerful engine options and sharp handling. Its iconic design and advanced technology ensure an exhilarating driving experience that pays homage to its legendary heritage.",
    imageURL:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "135000",
    colors: [],
    category: {
      name: "Cars",
      imageURL:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  {
    id: uuid(),
    title: "T-Shirts",
    description:
      "As luxury T-Shirt is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    imageURL:
	"https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	price: "3100",
  colors: ["#A31ACB",
	"#FF6E31",
	"#3C2A21",
	"#CB1C8D",
	"#645CBB",
	"#820000",
	"#13005A",
	"#1F8A70",
	"#84D2C5",],
    category: {
      name: "T-Shirt",
      imageURL:
		"https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	},
  },
];

export const formInputsList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product Description",
    type: "text",
  },
  {
    id: "image",
    name: "imageURL",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "text",
  },
];
export const colors = [
  "#a855f7",
  "#2563eb",
  "#84D2C5",
  "#13005A",
  "#A31ACB",
  "#FF6E31",
  "#3C2A21",
  "#6C4AB6",
  "#CB1C8D",
  "#000000",
  "#645CBB",
  "#1F8A70",
  "#820000",
  "#FF0032",
  "#F2AFEF", 
  "#5F8670"  
];
export const categories:ICategory[] = [
  {
    id: uuid(),
    name: "Nike",
    imageURL:
    "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: uuid(),
    name: "T-Shirts",
    imageURL:
    "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: uuid(),
    name: "Clothes",
    imageURL:
    "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: uuid(),
    name: "Laptop",
    imageURL:
    "https://images.unsplash.com/photo-1530520960548-0d70a1ad430d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: uuid(),
    name: "Furniture",
    imageURL:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: uuid(),
    name: "Cars",
    imageURL:
    "https://images.unsplash.com/photo-1597446663490-a45479fcb8a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: uuid(),
    name: "Camera",
    imageURL:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];