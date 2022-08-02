
var numbers = [20, 40, 80, 90, 150, 30, 50, 40, 70, 35]

//for loop-
for( i = 0; i < numbers.length; i++){

  //arry elements catch-
  number = numbers[i];

  //condition for breakPoint-
  if(number > 50){
    break; //it means stop the condition-
  }

  //for print-
  console.log(number);
}