export type MenuItem = { name: string };
export type MenuCategory = {
  id: string;
  name: string;
  blurb: string;
  items: MenuItem[];
};
export type MenuGroup = { id: "food" | "beverages"; label: string; categories: MenuCategory[] };

const cat = (id: string, name: string, blurb: string, items: string[]): MenuCategory => ({
  id,
  name,
  blurb,
  items: items.map((n) => ({ name: n })),
});

export const MENU: MenuGroup[] = [
  {
    id: "food",
    label: "Food",
    categories: [
      cat("starters", "Starters", "Crisp, smoky beginnings — the food that opens every great meal here.", [
        "Paneer Tikka","Paneer Malai Tikka","Mushroom Malai Tikka","Hariyali Paneer Tikka","Achari Paneer Tikka","Gobi 65","Gobi Manchurian Dry","Paneer 65","Mushroom 65","Baby Corn 65","Dragon Paneer Dry","Mushroom Manchurian Dry","Paneer Manchurian Dry","Chilli Paneer Dry","Baby Corn Manchurian Dry","Veg Seekh Kebab","Paneer Seekh Kebab","Veg Ball Manchurian Dry","Aloo Matar Dry","Aloo Gobi Dry","Mushroom Tikka","Chilli Baby Corn Dry","Matar Paneer Dry","Aloo Tikka","Chilli Mushroom Dry","Gobi Tikka","Baby Corn Paper Salt","Aloo Pepper Dry","Bhindi Dry","Chilli Gobi Dry","Golden Baby Corn 65","Hara Bhara Kebab","Mushroom Paper Salt","Veg Chilli Ball Dry","Onion Rings","Alu Finger",
      ]),
      cat("main-course","Main Course","Slow-built gravies, ghee, and patience — the heart of a North Indian table.",[
        "Paneer Butter Masala","Malai Kofta","Paneer Tikka Masala","Kadhai Paneer","Matar Paneer Masala","Veg Kofta","Green Peas Masala","Aloo Jeera Dry","Kaju Masala","Kadhai Mushroom","Chana Masala","Bhindi Jaipuri","Mixed Veg Curry","Punjabi Paneer Masala","Shahi Paneer","Palak Paneer","Kaju Paneer Masala","Paneer Mushroom Masala","Punjabi Dal","Aloo Dum","Veg Kadhai","Aloo Matar Masala","Corn Paneer Masala","Corn Capsicum Masala","Mushroom Chettinad Masala","Stuffed Capsicum","Rajma Paneer Masala","Aloo Gobi Masala","Aloo Capsicum Masala","Aloo Palak","Bhindi Masala","Chettinad Paneer","Dal Palak","Gobi Masala","Gobi Tikka Masala","Lehsuni Palak Paneer","Mushroom Masala","Mushroom Tak Tak","Nawabi Paneer Curry","Palak Fry","Paneer Bhurji","Paneer Dhaniya Adraki","Paneer Do Pyaaza","Paneer Keema Masala","Paneer Lababdar","Patiala Paneer","Rajma Masala","Veg Hyderabadi Masala","Veg Keema Masala","Veg Kolhapuri",
      ]),
      cat("soups","Soups","Warm, peppery, restorative — a small bowl to start the conversation.",[
        "Hot and Sour Soup","Tomato Soup","Mushroom Soup","Pepper Soup","Sweet Corn Soup","Veg Soup",
      ]),
      cat("breads","Breads","Pulled from the tandoor in a single breath of steam — naan, kulcha, paratha, chappathi.",[
        "Roti","Butter Roti","Masala Roti","Makki Ki Roti","Garlic Roti","Naan","Butter Naan","Masala Naan","Paneer Naan","Amritsari Naan","Cashew Nut Naan","Ginger Naan","Gobi Naan","Garlic Naan","Onion Naan","Pudina Naan","Cheese Naan","Aloo Naan","Kulcha","Butter Kulcha","Garlic Kulcha","Onion Kulcha","Pudina Kulcha","Cashew Nut Kulcha","Amritsari Kulcha","Ginger Kulcha","Gobi Kulcha","Aloo Kulcha","Lachha Paratha","Wheat Paratha","Aloo Stuffed Paratha","Gobi Stuffed Paratha","Paneer Stuffed Paratha","Mushroom Stuffed Paratha","Onion Stuffed Paratha","Garlic Stuffed Paratha","Mixed Stuffed Paratha","Pudina Stuffed Paratha","Veg Keema Paratha","Chilli Paratha","Masala Kulcha","Oil Chappathi","Sukha Chappathi","Chapati With/Without Side Dish","Butter Chapati",
      ]),
      cat("rice-biryani","Rice & Biryani","Long-grain basmati, fried onions, whole spice — built for sharing.",[
        "Veg Biryani","Paneer Biryani","Mushroom Biryani","Mixed Veg Biryani","Veg Biryani Sampler with Paneer Biryani","Mushroom Biryani Sampler with Mixed Veg Biryani","Veg Pulao","Cashew Nut Pulao","Steamed Rice","Gobi Pulao","Peas Pulao","Ghee Rice","Jeera Pulao","Jeera Rice","Paneer Pulao",
      ]),
      cat("chinese-gravy","Chinese Gravy","Indo-Chinese, the way Chennai loves it — bold, glossy, unapologetic.",[
        "Chilli Paneer Gravy","Mushroom Manchurian Gravy","Gobi Manchurian Gravy","Chilli Gobi Gravy","Baby Corn Manchurian Gravy","Chilli Baby Corn Gravy","Chilli Mushroom Gravy","Paneer Manchurian Gravy","Veg Ball Manchurian Gravy","Hunan Paneer",
      ]),
      cat("shanghai-rice-noodles","Shanghai, Fried Rice & Noodles","Wok-tossed, garlic-forward, the satisfying clatter of a busy kitchen.",[
        "Gobi Fried Rice","Paneer Fried Rice","Schezwan Gobi Fried Rice","Mushroom Fried Rice","Schezwan Mixed Veg Fried Rice","Schezwan Fried Rice","Veg Fried Rice","Mixed Veg Fried Rice","Schezwan Paneer Fried Rice","Garlic Gobi Fried Rice","Cashew Nut Fried Rice","Baby Corn Fried Rice","Garlic Fried Rice","Garlic Mushroom Fried Rice","Garlic Paneer Fried Rice","Garlic Schezwan Fried Rice","Schezwan Baby Corn Fried Rice","Schezwan Mushroom Fried Rice","Sweet Corn Fried Rice","Gobi Shanghai","Baby Corn Shanghai","Mixed Veg Shanghai","Mushroom Shanghai","Paneer Shanghai","Veg Shanghai","Schezwan Noodles","Veg Noodles","Gobi Noodles","Mixed Veg Garlic Noodles","Garlic Gobi Noodles","Baby Corn Noodles","Garlic Baby Corn Noodles","Garlic Mushroom Noodles","Garlic Paneer Noodles","Mixed Veg Noodles","Mixed Veg Schezwan Noodles","Mushroom Noodles","Paneer Noodles","Schezwan Baby Corn Noodles","Schezwan Gobi Noodles","Schezwan Mushroom Noodles","Schezwan Paneer Noodles","Veg Garlic Noodles",
      ]),
      cat("rolls","Rolls","Tucked, wrapped, handed across the counter — the original on-the-go meal.",[
        "Cheese Paneer Roll","Paneer Roll","Cheese Mushroom Roll","Cheese Roll","Mixed Veg Roll","Mushroom Roll","Veg Roll","Wonton Roll",
      ]),
      cat("snacks-chaat","Snacks & Chaat","Crunch, tang, sweet, sour, hot — all at once. Chennai street energy.",[
        "Pav Bhaji","Fried Pav Bhaji","Cheese Pav Bhaji","Cheese Paneer Pav Bhaji","Cheese Mushroom Pav Bhaji","Paneer Pav Bhaji","Mushroom Pav Bhaji","Masala Puri Chaat","Papadi Chaat","Samosa Chana Chaat","Sev Puri","Dahi Bhel Puri","Bhel Puri Chaat","Pani Puri","Aloo Chaat","Fruit Chaat","Dahi Cutlet","Bread Chana Chaat","Chana Masala Chaat","Churmur Chaat","Cutlet Chana Chaat","Cutlet","Dahi Papadi Chaat","Dahi Puri Chaat","Jhalmuri","Mixed Chaat","Sukha Puri","Samosa","Jelebi",
      ]),
      cat("accompaniments","Accompaniments","The small, perfect things that round out a plate.",[
        "Masala Fried Papad","Roasted Papad",
      ]),
      cat("sandwiches","Sandwiches","Toasted, generous, comforting — a quieter side of the menu.",[
        "Cheese Paneer Sandwich","Paneer Sandwich","Cheese Sweet Corn Sandwich","Sweet Corn Sandwich","Cheese Garlic Sandwich","Cheese Mixed Veg Sandwich","Cheese Mushroom Sandwich","Cheese Sandwich","Garlic Sandwich","Mixed Veg Sandwich","Mushroom Sandwich","Veg Sandwich",
      ]),
      cat("combos","Combos, Thali & Meals","One tray, many flavours — the easiest way to taste the whole kitchen.",[
        "NC Special Thali (Veg Biryani + Gobi 65 + 2 Chapati + Chana Masala + Aloo Matar Dry)","North Indian Special Thali (Steamed Rice + Dal Tadka + 2 Chapati + Papad + Bhindi Dry/Aloo Bhurji)","Jeera Rice Combo","Paneer Rice Combo","Poori with Sabji","Schezwan Rice Combo","Veg Rice Combo","Schezwan Noodles Combo","Schezwan Paneer Noodles Combo","Gobi Manchurian Semi Gravy Combo","Paneer Butter Masala with 6 Chapati","Mushroom Masala with 6 Chapati","Palak Paneer with 6 Chapati","Dal Fry with 6 Chapati","Gobi Masala with 6 Chapati","Palak Fry with 6 Chapati","3 Chapati Meals (Chana/Mushroom Masala or Dal Fry/Palak Paneer)","Garlic Roti Meal (Kadhai Paneer/Mushroom)","Tandoori Roti Meal (Mushroom/Paneer Butter Masala)",
      ]),
      cat("healthy","Healthy Combos","Tikka and seekh paired with juices, lime water, and salad — lighter pairings.",[
        "Paneer Tikka + Salad","Palak Paneer + Amla Juice","Palak Paneer + Cucumber Lime Water","Palak Paneer + Salad","Paneer Seekh Kebab + Amla Juice/Cucumber Lime Water/Salad","Paneer Tikka + Amla Juice/Cucumber Lime Water","Veg Seekh Kebab + Salad",
      ]),
      cat("ice-cream","Ice Cream","To finish — cold, simple, and exactly enough.",[
        "Vanilla","Chocolate","Butterscotch","Strawberry","Mango","Pista","Blackcurrant Ice Cream (2 scoops)","Falooda",
      ]),
    ],
  },
  {
    id: "beverages",
    label: "Beverages",
    categories: [
      cat("milkshakes","Milkshakes","Thick, cold, classic — and a long Oreo column for the kids at the table.",[
        "Chocolate","Chocolate Oreo","Mango","Strawberry","Fig","Vanilla","Apple","Banana","Blackcurrant","Blackcurrant Oreo","Butterscotch","Butterscotch Oreo","Dragon","Mango Oreo","Pista","Pista Oreo","Pomegranate","Sapota","Strawberry Oreo","Vanilla Oreo",
      ]),
      cat("juices","Juices","Cold-pressed, fresh — fruit and roots, nothing else.",[
        "Pomegranate","Orange","Watermelon","Apple","Pineapple","Muskmelon","Carrot","Ginger Lime","Papaya","Rose Milk","Mango","Amla","Badam Milk","Banana","Beetroot","Cucumber Lime","Fig","Grapes","Grapes Lime","Kiwi","Lemon","Lemon Mint","Pineapple Lime","Sapota","Strawberry","Sweet Lime",
      ]),
      cat("lassi","Lassi & Buttermilk","Yoghurt, ice, a pinch of salt or sugar — the original cooler.",[
        "Sweet Lassi","Buttermilk","Grapes Lassi","Mango Lassi","Masala Lassi","Pineapple Lassi","Salted Lassi","Special Lassi",
      ]),
      cat("soda","Soda","Lime, mint, fizz — bright and fast.",[
        "Salty Lemon Mint Soda","Salty Lemon Soda","Sweet Lemon Mint Soda","Sweet Lemon Soda",
      ]),
    ],
  },
];

export const TOTAL_DISHES = MENU.reduce(
  (sum, g) => sum + g.categories.reduce((s, c) => s + c.items.length, 0),
  0,
);
export const TOTAL_CATEGORIES = MENU.reduce((sum, g) => sum + g.categories.length, 0);