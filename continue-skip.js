var numbers = [20, 40, 80, 90, 150, 30, 50, 40, 70, 35]

//for loop-
for( i = 0; i < numbers.length; i++){

  //arry indexof
  number = numbers[i];

  //if condition-
  if(number > 60){

    continue;  //it means skip the elements if it more than-60
  }

  //for print-
  console.log(number)
}