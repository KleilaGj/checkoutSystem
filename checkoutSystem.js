    //OBJECTS, VARIABLES AND ARRAYS

const basket = {
    products: [],
    totalPrice: 0,
};

const products = [
    {
        itemName: 'A',
        unitPrice: 50,
    },

    {
        itemName: 'B',
        unitPrice: 30,
    },

    {
        itemName: 'C',
        unitPrice: 20,
    },

    {
        itemName: 'D',
        unitPrice: 15,
    }
]

let itemAarray = []
let itemBarray = []
let itemCarray = []
let itemDarray = []


//METHODS


const countItemA = (array, value) => {
    var n = 0;
    for(i = 0; i < array.length; i++){
        if(array[i] == value){n++}
    }
    itemAarray.push(n);
}

//

const countItemB = (array, value) => {
    var n = 0;
    for(i = 0; i < array.length; i++){
        if(array[i] == value){n++}
    }
    itemBarray.push(n);
}

//

const countItemC = (array, value) => {
    var n = 0;
    for(i = 0; i < array.length; i++){
        if(array[i] == value){n++}
    }
    itemCarray.push(n);
}

//

const countItemD = (array, value) => {
    var n = 0;
    for(i = 0; i < array.length; i++){
        if(array[i] == value){n++}
    }
    itemDarray.push(n);
}

// push into new array and count length

const addToBasket = (product) => {
    basket.products.push(product);
    for(i = 0; i < basket.products.length; i++){
        if(product === products[0]){
            (countItemA(basket.products, products[0]));
            basket.totalPrice += products[0].unitPrice;
        }
        else if(product === products[1]){
            (countItemB(basket.products, products[1]));
            basket.totalPrice += products[1].unitPrice;
        }
        else if(product === products[2]){
            (countItemC(basket.products, products[2]))
            basket.totalPrice += products[2].unitPrice;
        }
        else{
            (countItemD(basket.products, products[3]))
            basket.totalPrice += products[3].unitPrice;    
        }

    };

    return  basket.totalPrice
};

    // check if product is itemA
    // if it is itemA, how many are there in the basket?
    // %3 === 0
    // if it is, apply relevant discount

   

    // check if product is itemB
    // if it is itemB, how many are there in the basket?
    // %2 === 0
    // if it is, apply relevant dicount


//ROUNDING
const roundDownToNearest3 = (num) => {
    return Math.floor(num / 3) * 3;
  };




const roundDownToNearest2 = (num) => {
    return Math.floor(num / 2) * 2;
  };


  addToBasket(products[0])
  addToBasket(products[0])
  addToBasket(products[0])
  addToBasket(products[0])
  addToBasket(products[0])
  addToBasket(products[0])
  addToBasket(products[0])
  addToBasket(products[0])

  addToBasket(products[1])
  addToBasket(products[1])
  addToBasket(products[1])
  addToBasket(products[2])
  addToBasket(products[3])
  addToBasket(products[2])
  addToBasket(products[3])



//Discounts
let itemADiscountTotal = (((roundDownToNearest3(itemAarray.length)) / 3)*20);

let itemBDiscountTotal = (((roundDownToNearest2(itemBarray.length)) / 2) *15);


const getBasketFinalPrice = (items) => {
     
    return basket.totalPrice - (itemADiscountTotal + itemBDiscountTotal);

    };
    

 console.log(getBasketFinalPrice(basket.totalPrice))
    


// //EMPTY BASKET
// const clearBasket = (basket) => {
//     return
//     basket.products = []
//     basket.totalPrice = 0

// };
// console.log(clearBasket(basket))


    //TESTING FUNCTIONS

// addToBasket(products[0])
// addToBasket(products[0])
// addToBasket(products[0])
// addToBasket(products[0])
// // addToBasket(products[0])
//  addToBasket(products[1])
// addToBasket(products[1])
// addToBasket(products[2])
// addToBasket(products[3])
// addToBasket(products[2])