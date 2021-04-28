/*write a small web app that:
    - asks the user to enter a number of any number of digits (strings and Cancel should be converted to 0).
    - display whether this number is narcissistic or not.*/
    let number = prompt( '') ;
    if (isNaN(number)){
        number = '0';
    }
    let total = 0;

   for (let i = 0 ; i < number .length; i++){
       total += parseInt(number[i]) ** number. length;
   }

    if (total === parseInt(number)) {

       alert('Narcissistic')  ;
    } 
      else 
    {
      alert ('not Narcisisstic');
    }
 