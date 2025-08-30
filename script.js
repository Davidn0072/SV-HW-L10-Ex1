function sortArr(arr)
{
  arr.sort(function(a, b){return b-a});
  return arr;
}
let arr =[100,150,90,785];
console.log("Sort Arr Bf:"+arr);
console.log("Sort Arr Af:"+sortArr(arr));

function getCommonValsFromArr(arr1, arr2)
{
  let res =[];  
  let find = false;

  for (let i=0;i<arr1.length;i++)
    for (let j=0;j<arr2.length;j++)
      if (arr1[i]==arr2[j]) 
      {
        find = false;        
        for (let k=0;k<res.length;k++)
          if (res[k]==arr2[j])
            find = true;  
        if (!find)
          res.push(arr2[j]);
      }  
    
  return res;
}
//let fArr = [505,100,506,200,507,300,508,400,509,500,501];
//let sArr = [100,704,200,705,300,706,400,707,500];
let fArr = [1,2,1,2,1];
let sArr = [2,2,2,1,3,1,2];

console.log("Fist Arr:"+fArr);
console.log("Second Arr:"+sArr);
console.log("Common Arr:"+getCommonValsFromArr(fArr,sArr));

function calcAvgMtrx(matrix)
{
let res = 0;
let count = 0;
let sum = 0;

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    count += 1;
    sum += matrix[i][j];
    console.log(matrix[i][j]);
  }
}
      
return sum / count;
}
let metrix=[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]];
console.log(metrix+" "+calcAvgMtrx(metrix));

function removeNumFromArr(num,arr)
{
  let count = 0;
  let tmp = 0;

  for (let i=arr.length-1;i>=0;i--)
    if (num==arr[i])
    {
      tmp = arr[arr.length-1];
      count +=1;  
      arr.pop();
      for (let j=i;j <arr.length;j++)
        if (j == arr.length-1)
          arr[j] = tmp
        else
          arr[j] = arr[j+1]
    }  
    
  return count;

}
let rRmvNum = 15;
let rRmArr = [15,100,15,200,16,300,17,400,15,500,18];
console.log("removeNumFromArrBf:"+rRmvNum+" ARR:"+rRmArr+" length:"+rRmArr.length);
console.log("removeNumFromArrAf:"+removeNumFromArr(rRmvNum,rRmArr)+" ARR:"+rRmArr+" length:"+rRmArr.length);

