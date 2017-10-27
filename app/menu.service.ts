import {Menu} from "./menu";
export class MenuService {

  getDate() {
    let Menu: Menu[] = [
      {
        type: 'SALADS', 
        name: 'Ceasar salad', 
        details: 'crispy romaine, croutons, caesar dressing', 
        halfPrice: '$6.25', 
        fullPrice: '$11.15'
      },
      {
        type: 'PASTA',
        name: 'Sushi Lasagna',
        details: 'raw tuna, mozzarella, tomato sauce, basil',
        halfPrice: '$15.99',
        fullPrice: '$25.95'
      }, {
        type: 'PIZZA',
        name: 'Tofu Pizza',
        details: 'Tofu Pizza, avocado, soy sauce, green pepper',
        halfPrice: '$15.99',
        fullPrice: '$25.25'
      }, {
        type: 'PIZZA',
        name: 'Prosciutto',
        details: 'Tomatos, mozzarella, prosciutto, parmagiana, arugula',
        halfPrice: '$16.25',
        fullPrice: '$22.25'
      }

    ];
    return Menu
  }
}