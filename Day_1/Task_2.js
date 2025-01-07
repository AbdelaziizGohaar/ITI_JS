
/*
function Discounted_Price(price , discount) 
{

    var disPrice = 0 ;
    disPrice = price * (1 - discount /100 );
    return disPrice ;

}
*/
function Discounted_Price(price, discount) {
//////////// Validate input types
    if (typeof price !== "number" || typeof discount !== "number") {
      return "Both price and discount must be numbers.";
    }
  
 //////// Validate non-negative values
    if (price < 0 || discount < 0) {
      return "Price and discount cannot be negative.";
    }
  
////////////// Validate discount range
    if (discount > 100) {
      return "Discount cannot be greater than 100%.";
    }
  
    let disPrice = price * (1 - discount / 100);
    
    return disPrice;
  }

console.log(Discounted_Price(20 , 3)); 
console.log(Discounted_Price(100 , 5)); 
console.log(Discounted_Price(200 , 7)); 

/**
 * 
(2) write JavaScript function that accepts a price and discount as numbers and returns the dicounted price
    Note: handle possible test cases 

    Discounted_Price = Price * (1 - discount /100 )
​ 
 make validations
 
 * 
 */