
function longestWord(Sentense)
{
  var arryofSent = Sentense.split(" ");   //array of words
  var wordlongestword = "" ;
  for(var i = 0 ; i < arryofSent.length ;i++)
    {
        if(wordlongestword.length < arryofSent[i].length)
        {
             wordlongestword = arryofSent[i]; 
        }
    }
   return wordlongestword; 
}
var str = "aziz gohaaar kljvcfxcvb mohamed";
console.log(longestWord(str));



/*
(4) Write a function that accept a sentence and return the longest word
within the input
Example : 'Web Development Tutorial'
Output : 'Development'
*/


