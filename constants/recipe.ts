import { IRecipe } from "@/interfaces/recipeInterface";

export const sampleRecipes: IRecipe[] = [
  {
    id: 1,
    title: "Phở Bò Hà Nội",
    cuisine: "Hanoi",
    ingredients: [
      "Bánh phở (Phở noodles)",
      "Xương bò (Beef bones)",
      "Thịt bò phi lê (Beef fillet)",
      "Hồi (Star anise)",
      "Quế (Cinnamon stick)",
      "Gừng (Ginger)",
      "Hành tây (Onions)",
      "Nước mắm (Fish sauce)",
      "Giá đỗ (Bean sprouts)",
      "Húng quế (Thai basil)",
      "Chanh (Lime)",
      "Tương đen (Hoisin sauce)",
      "Tương ớt (Sriracha)"
    ],
    instructions: [
      "Nướng gừng và hành tây cho đến khi thơm và cháy xém (Char ginger and onions)",
      "Hầm xương bò với rau củ và gia vị trong 6-8 tiếng (Simmer beef bones with spices)",
      "Luộc bánh phở theo hướng dẫn (Cook phở noodles)",
      "Thái thịt bò thật mỏng (Slice beef thinly)",
      "Xếp bánh phở và thịt vào tô (Arrange noodles and beef)",
      "Chan nước dùng nóng vào (Pour hot broth)",
      "Dùng kèm rau thơm và gia vị (Serve with herbs and condiments)"
    ],
    imageUrl: "/api/placeholder/400/300"
  },
  {
    id: 2,
    title: "Bún Đậu Mắm Tôm Hải Phòng",
    cuisine: "Haiphong",
    ingredients: [
      "Bún (Rice vermicelli)",
      "Đậu phụ chiên (Fried tofu)",
      "Chả cốm (Young rice pork sausage)",
      "Thịt luộc (Boiled pork)",
      "Mắm tôm (Fermented shrimp paste)",
      "Chanh (Lime)",
      "Ớt (Chili)",
      "Rau thơm các loại (Mixed herbs)",
      "Dưa leo (Cucumber)",
      "Tía tô (Perilla leaves)",
      "Kinh giới (Vietnamese balm)"
    ],
    instructions: [
      "Chiên đậu phụ vàng giòn (Fry tofu until golden)",
      "Luộc thịt và thái lát (Boil and slice pork)",
      "Trộn mắm tôm với chanh và ớt (Mix shrimp paste with lime and chili)",
      "Luộc bún và để ráo (Cook and drain vermicelli)",
      "Xếp đậu phụ, chả cốm, thịt luộc lên đĩa (Arrange tofu, sausage, and pork)",
      "Dọn kèm rau sống và bún (Serve with herbs and vermicelli)"
    ],
    imageUrl: "/api/placeholder/400/300"
  },
  {
    id: 3,
    title: "Phở Chua Bắc Ninh",
    cuisine: "BacNinh",
    ingredients: [
      "Bánh phở (Phở noodles)",
      "Thịt bò (Beef)",
      "Dấm bỗng (Rice vinegar)",
      "Mắm tôm (Shrimp paste)",
      "Riềng (Galangal)",
      "Sả (Lemongrass)",
      "Ớt (Chili)",
      "Hành lá (Green onions)",
      "Rau thơm (Herbs)",
      "Đậu phộng (Peanuts)",
      "Tương ớt (Chili sauce)"
    ],
    instructions: [
      "Ướp thịt bò với riềng và sả (Marinate beef with galangal and lemongrass)",
      "Trộn nước dùng với dấm bỗng (Mix broth with rice vinegar)",
      "Luộc bánh phở (Cook phở noodles)",
      "Xào thịt bò (Stir-fry beef)",
      "Xếp bánh phở và thịt vào tô (Arrange noodles and beef in bowl)",
      "Chan nước dùng chua (Pour sour broth)",
      "Rắc đậu phộng và rau thơm (Top with peanuts and herbs)"
    ],
    imageUrl: "/api/placeholder/400/300"
  },
  {
    id: 4,
    title: "Cơm Tấm Sài Gòn",
    cuisine: "Saigon",
    ingredients: [
      "Gạo tấm (Broken rice)",
      "Sườn nướng (Grilled pork chop)",
      "Chả trứng (Egg meatloaf)",
      "Bì (Shredded pork skin)",
      "Mỡ hành (Scallion oil)",
      "Nước mắm (Fish sauce)",
      "Đồ chua (Pickled vegetables)",
      "Dưa leo (Cucumber)",
      "Cà chua (Tomato)",
      "Ớt (Chili)"
    ],
    instructions: [
      "Ướp sườn với gia vị (Marinate pork chop)",
      "Nướng sườn trên bếp than (Grill pork chop)",
      "Làm chả trứng hấp (Steam egg meatloaf)",
      "Nấu cơm tấm (Cook broken rice)",
      "Làm nước mắm pha (Prepare fish sauce mixture)",
      "Phi mỡ hành (Make scallion oil)",
      "Xếp món ăn lên đĩa với đồ chua và rau (Plate with pickles and vegetables)"
    ],
    imageUrl: "/api/placeholder/400/300"
  }
];


export const cuisineTypes = ["All", "Hanoi", "Saigon", "Haiphong", "BacNinh"];