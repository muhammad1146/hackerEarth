function makeArray(row,cols){
  let array = []
  for(let i=0;i<row;i++){
    let subArray = []
    for(let j=0;j<cols;j++){
        if(Math.floor(Math.random()*15)%2===0){
          subArray[j]='#'
        }
        else{
          subArray[j]='.'
        }
    }
    array.push(subArray)
  }
  return array
}
// console.log(makeArray(10,5));

function findMaxBorder(arr){
    console.log(arr)
  let countArray= [];
  arr.forEach(item=>
    {
      
    let dashCount = 0,lastDashCount=0;
        item.reduce((previousItem,currentItem,i,a)=>{
          if(previousItem && previousItem==='#'){
            if(currentItem==='#'){
              dashCount+=2
            }else{
              
              lastDashCount+=1
            }
          }
          else{
                if(currentItem==='#' && dashCount===0 ){
                  dashCount+=1;
                }
                else if(currentItem==='#' && dashCount>0 && a[i-1]==='#')
                {
                  dashCount+=1
                }
                else
                { 
                  if(dashCount>lastDashCount)
                  { 
          

                    lastDashCount=dashCount;
                    dashCount=0
                  } else
                  {
                    dashCount=0
                  }
                }
          }
        })
        if(dashCount>lastDashCount){
          countArray.push(dashCount);
        }else{
          countArray.push(lastDashCount);
        }
        
  })

 return Math.max(...countArray)
}
console.log(findMaxBorder(makeArray(10,5)));

