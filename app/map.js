var arrA = [5, 7, 5,];
var arrB = [8, 4, 2];

var diffArr = arrA.map(function(item, index) {
   if (item > arrB[index]){

    return item - arrB[index];

   } else { 
       return arrB[index] - item;
    }
  });
  console.log(diffArr);

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  
  // 3 + 3 + 3 =9 diffArr = 9
  console.log("diff Arr = " + diffArr.reduce(reducer));
  
  