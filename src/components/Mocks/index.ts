export type Categories = {
  id: string;
  name: string;
  Slug:string;
  img:string
  price: 
    {
      plane:string;
      price:number;
      qtd:number;
    }[]
  
   
};

export const categories = [
  // Dentistas
  {
    id: "1",
    name: "Dentistas",
    Slug:"dentistas",
    img:"/hO.jpg",
    price: [
      { plane: "Básico", price: 100, qtd: 1 },
      { plane: "Normal", price: 150, qtd: 1 },
      { plane: "Avançado", price: 200, qtd: 1 },
    ],
  },

  // Biomédicos
  {
    id: "2",
    name: "Biomédicos",
    img:"/bM.jpg",
    Slug:"biomedicos",
    price: [
      { plane: "Básico", price: 80, qtd: 1 },
      { plane: "Normal", price: 120, qtd: 1 },
      { plane: "Avançado", price: 160, qtd: 1 },
    ],
  },

  // Harmonização
  {
    id: "3",
    name: "Harmonização",
    Slug:"harmonizacao",
    img:"/hHH.webp",
    price: [
      { plane: "Básico", price: 200, qtd: 1 },
      { plane: "Normal", price: 300, qtd: 1 },
      { plane: "Avançado", price: 400, qtd: 1 },
    ],
  },
];
