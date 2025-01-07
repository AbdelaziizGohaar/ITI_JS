/*
function CheckPalindrome1(Sentence) 
{   
    for (let i = 0; i < Sentence.length , result = false ; i++) 
    {
      var result = true ; 
       for (let j = Sentence.length ; j < 0; j--) 
        {
           if(Sentence[i] == Sentence[j])
            {
                break ;
            }else
            {
               result = false ;
               break ; 
            }
       }   
    }
}
*/


function checkPalindrome(sentence) 
{
    let left = 0;
    let right = sentence.length - 1;
    while (left < right)
        {
        if (sentence[left] !== sentence[right]) 
        {
            return false; 
        }
        left++;
        right--;
    }

    return true; 
}

/*
const reversed = str.split('').reverse().join('');
return str === reversed;
*/

console.log(checkPalindrome("Hello")); 
console.log(checkPalindrome("racecar")); 
console.log(checkPalindrome("abcba"));
console.log(checkPalindrome("ezzazze"));

/**
  
  (1) write JavaScript function that checks whether the passed string is a palindrome or not
    Note: handle possible test cases

 */