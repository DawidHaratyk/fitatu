import { Dimensions } from "react-native";

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;

export const API = `https://api.spoonacular.com/food/products/search?apiKey=${process.env.REACT_APP_API_KEY}&addProductInformation=true`;
