/*write a small web app that:
    - asks the user to enter a number of any number of digits (strings and Cancel should be converted to 0).
    - display whether this number is narcissistic or not.*/
    const value = (prompt("ENTER A NUMBER between 100 to 999 ")) || 0;

    if ( value[0] ** 3 + value[1] ** 3 + value[2] ** 3  == value)
     
    {
        document.getElementById("test").innerHTML = "Number  " + value+ "  is Narcissistic ";
    }
      else 
    {
        document.getElementById("test").innerHTML = "Number  " + value+ "  isn't Narcisisstic";
    }
 