import { StaticImageData } from "next/image";
import ChickenCurry from "../img/c1.png";
import FriedChicken from "../img/c2.png";
import TandooriPlatter from "../img/c3.png";
import KoreanFriedChicken from "../img/c4.png";
import ChickenTikka from "../img/c6.png";
import ChickenWithFrieds from "../img/c7.png";
// End of chicken
import CurryChickenButter from "../img/cu1.png";
import CurryVegetable from "../img/cu2.png";
import CurryPrawn from "../img/cu3.png";
import CurryChicken from "../img/cu4.png";
import MuttonCurry from "../img/cu5.png";
import TomYum from "../img/cu6.png";
// End of curry
import RedBull from "../img/d1.png";
import Pepsi from "../img/d2.png";
import Monster from "../img/d3.png";
import BlueCurrasao from "../img/d4.png";
import Sprite from "../img/d5.png";
import Fanta from "../img/d6.png";
import Milshake from "../img/d7.png";
import CocaCola from "../img/d8.png";
// End of drinks
import StrawBerrie from "../img/f5.png";
import PineApple from "../img/f2.png";
import BlackBerries from "../img/f3.png";
import Grapes from "../img/f4.png";
import PomeGranate from "../img/f6.png";
import RaspBerries from "../img/f7.png";
import Cherry from "../img/f8.png";
import Banana from "../img/f9.png";
import WaterMelon from "../img/f10.png";
// End of Fruits
import SeaFoodSalad from "../img/fi1.png";
import FriedFish from "../img/fi2.png";
import GrilledFish from "../img/fi3.png";
import GrilledTrout from "../img/fi4.png";
import GrilledLubina from "../img/fi5.png";
// End of Fishs
import ChocolateIcecream from "../img/i1.png";
import VanillaIcecream from "../img/i2.png";
import VanillaChoclotateIcecream from "../img/i3.png";
import ChoStrawVaniIcecream from "../img/i4.png";
import StrawIcecream from "../img/i5.png";
import ChoStrawVanicream from "../img/i6.png";
import FancyStrawIcecream from "../img/i7.png";
// End of IceCreams
import Biryani from "../img/r1.png";
import HyderabadiBiryani from "../img/r2.png";
import NonVegBiryani from "../img/r3.png";
import MixedFriedRice from "../img/r4.png";
import JerraRice from "../img/r5.png";

interface Food {
  name: string;
  img: string;
  des?: string;
  price: number;
  calories: number;
  categorie: string;
}

const All: Food[] = [
  {
    name: "Chicken Curry",
    img: ChickenCurry.src,
    des: "Incredible chicken curry",
    price: 12.5,
    calories: 240,
    categorie: "chicken",
  },
  {
    name: "Fried Chicken",
    img: FriedChicken.src,
    des: "Incredible fried chicken",
    price: 10.5,
    calories: 400,
    categorie: "chicken",
  },
  {
    name: "Tandoori Platter",
    img: TandooriPlatter.src,
    des: "Incredible tandoori platter",
    price: 12.5,
    calories: 180,
    categorie: "chicken",
  },
  {
    name: "Korean Fries Chicken",
    img: KoreanFriedChicken.src,
    des: "Incredible korean fried chicken",
    price: 8.5,
    calories: 260,
    categorie: "chicken",
  },
  {
    name: "Chicken Tikka",
    img: ChickenTikka.src,
    des: "Incredible chicken tikka",
    price: 12.5,
    calories: 180,
    categorie: "chicken",
  },
  {
    name: "Chicken with Fries",
    img: ChickenWithFrieds.src,
    des: "Incredible chicken with fries",
    price: 12.5,
    calories: 180,
    categorie: "chicken",
  },
  {
    name: "Curry Chicken Butter",
    img: CurryChickenButter.src,
    des: "Incredible curry chicken butter",
    price: 20,
    calories: 300,
    categorie: "curry",
  },
  {
    name: "Curry Vegetable",
    img: CurryVegetable.src,
    des: "Incredible curry vegetable",
    price: 4.5,
    calories: 120,
    categorie: "curry",
  },
  {
    name: "Curry Prawn",
    img: CurryPrawn.src,
    des: "Incredible curry prawn",
    price: 9.5,
    calories: 180,
    categorie: "curry",
  },
  {
    name: "Curry Chicken",
    img: CurryChicken.src,
    des: "Incredible curry chicken",
    price: 11.5,
    calories: 240,
    categorie: "curry",
  },
  {
    name: "Mutton Curry",
    img: MuttonCurry.src,
    des: "Incredible mutton curry",
    price: 10.5,
    calories: 200,
    categorie: "curry",
  },
  {
    name: "Tom Yum",
    img: TomYum.src,
    des: "Incredible tom yum",
    price: 5.5,
    calories: 180,
    categorie: "curry",
  },
  {
    name: "Redbull",
    img: RedBull.src,
    des: "Incredible Redbull",
    price: 6.5,
    calories: 70,
    categorie: "drinks",
  },
  {
    name: "Pepsi",
    img: Pepsi.src,
    des: "Incredible pepsi",
    price: 6.5,
    calories: 70,
    categorie: "drinks",
  },
  {
    name: "Monster",
    img: Monster.src,
    des: "Incredible monster",
    price: 6.5,
    calories: 70,
    categorie: "drinks",
  },
  {
    name: "Blue Currasao",
    img: BlueCurrasao.src,
    des: "Incredible blue curasao",
    price: 10.5,
    calories: 100,
    categorie: "drinks",
  },
  {
    name: "Sprite",
    img: Sprite.src,
    des: "Incredible Sprite",
    price: 6.5,
    calories: 70,
    categorie: "drinks",
  },
  {
    name: "Fanta",
    img: Fanta.src,
    des: "Incredible fanta",
    price: 6.5,
    calories: 70,
    categorie: "drinks",
  },
  {
    name: "Milshake",
    img: Milshake.src,
    des: "Incredible milshake",
    price: 10.5,
    calories: 90,
    categorie: "drinks",
  },
  {
    name: "CocaCola",
    img: CocaCola.src,
    des: "Incredible cocacola",
    price: 6.5,
    calories: 60,
    categorie: "drinkss",
  },
  {
    name: "Straw berries",
    img: StrawBerrie.src,
    des: "Incredible straw berries",
    price: 10.5,
    calories: 40,
    categorie: "fruits",
  },
  {
    name: "Pine Apple",
    img: PineApple.src,
    des: "Incredible pine apple",
    price: 7.5,
    calories: 100,
    categorie: "fruits",
  },
  {
    name: "Black Berries",
    img: BlackBerries.src,
    des: "Incredible black berries",
    price: 10.5,
    calories: 30,
    categorie: "fruits",
  },
  {
    name: "Grapes",
    img: Grapes.src,
    des: "Incredible grapes",
    price: 6,
    calories: 50,
    categorie: "fruits",
  },
  {
    name: "PomeGranate",
    img: PomeGranate.src,
    des: "Incredible pomegranate",
    price: 10.5,
    calories: 100,
    categorie: "fruits",
  },
  {
    name: "Rasp Berries",
    img: RaspBerries.src,
    des: "Incredible rasp berries",
    price: 7,
    calories: 90,
    categorie: "fruits",
  },
  {
    name: "Cherry",
    img: Cherry.src,
    des: "Incredible cherry",
    price: 6,
    calories: 70,
    categorie: "fruits",
  },
  {
    name: "Banana",
    img: Banana.src,
    des: "Incredible banana",
    price: 7.5,
    calories: 50,
    categorie: "fruits",
  },
  {
    name: "Water Melon",
    img: WaterMelon.src,
    des: "Incredible water melon",
    price: 10.5,
    calories: 50,
    categorie: "fruits",
  },
  {
    name: "Sea Food Salad",
    img: SeaFoodSalad.src,
    des: "Incredible sea food salad",
    price: 20.5,
    calories: 180,
    categorie: "fish",
  },
  {
    name: "Fried Fish",
    img: FriedFish.src,
    des: "Incredible fried fish",
    price: 10.5,
    calories: 140,
    categorie: "fish",
  },
  {
    name: "Grilled Fish",
    img: GrilledFish.src,
    des: "Incredible grilled fish",
    price: 4.5,
    calories: 30,
    categorie: "fish|",
  },
  {
    name: "Grilled Trout",
    img: GrilledTrout.src,
    des: "Incredible grilled trout",
    price: 5.5,
    calories: 40,
    categorie: "fish",
  },
  {
    name: "Grilled Lubina",
    img: GrilledLubina.src,
    des: "Incredible grilled lubina",
    price: 8,
    calories: 50,
    categorie: "fish",
  },
  {
    name: "Chocolate Icecream",
    img: ChocolateIcecream.src,
    des: "Incredible chocolate icecream",
    price: 8,
    calories: 180,
    categorie: "icecream",
  },
  {
    name: "Vanilla Icecream",
    img: VanillaIcecream.src,
    des: "Incredible vanilla icecream",
    price: 7.5,
    calories: 160,
    categorie: "icecream",
  },
  {
    name: "Mega Icecream",
    img: VanillaChoclotateIcecream.src,
    des: "Incredible vanilla with chocolate icecream",
    price: 9.5,
    calories: 200,
    categorie: "icecream",
  },
  {
    name: "Delicious Icecream",
    img: ChoStrawVaniIcecream.src,
    des: "Incredible chocolate, vanilla and straw berrie icecream",
    price: 12.5,
    calories: 240,
    categorie: "icecream",
  },
  {
    name: "Straw Icecream",
    img: StrawIcecream.src,
    des: "Incredible straw icecream",
    price: 6.5,
    calories: 140,
    categorie: "icecream",
  },
  {
    name: "Supers Creams",
    img: ChoStrawVanicream.src,
    des: "Incredible chocolate, vanilla and straw berrie cream",
    price: 9.5,
    calories: 200,
    categorie: "icecream",
  },
  {
    name: "New Rose Icecream",
    img: FancyStrawIcecream.src,
    des: "Incredible new straw berrie icecream",
    price: 12,
    calories: 220,
    categorie: "icecream",
  },
  {
    name: "Biryani",
    img: Biryani.src,
    des: "Incredible biryani",
    price: 12,
    calories: 180,
    categorie: "rice",
  },
  {
    name: "Hyderabadi Biryani",
    img: HyderabadiBiryani.src,
    des: "Incredible gyderabadi biryani",
    price: 13,
    calories: 200,
    categorie: "rice",
  },
  {
    name: "Vegan Biryani",
    img: NonVegBiryani.src,
    des: "Incredible vegan biryani",
    price: 9.5,
    calories: 120,
    categorie: "rice",
  },
  {
    name: "Mixed Fried Rice",
    img: MixedFriedRice.src,
    des: "Incredible mixed fried rice",
    price: 9.5,
    calories: 170,
    categorie: "rice",
  },
  {
    name: "Jerra Rice",
    img: JerraRice.src,
    des: "Incredible jerra rice",
    price: 7.5,
    calories: 120,
    categorie: "rice",
  },
];

const Cat: string[] = [
  "Chicken",
  "Curry",
  "Drinks",
  "Fruits",
  "Fish",
  "Icecream",
  "Rice",
];

export default All;

export { Cat };
