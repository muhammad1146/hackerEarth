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
  let dashCounts= [];
  arr.forEach(item=>
    {
    let count = 0,lastCount=0;
        item.reduce((previousItem,currentItem,i,a)=>{
          if(previousItem && previousItem==='#'){
              if(currentItem==='#'){
                count+=2
              }else{
                lastCount+=1
              }
          }
          else{
                if(currentItem==='#' && count===0 ){
                  count+=1;
                }
                else if(currentItem==='#' && count>0 && a[i-1]==='#')
                {
                  count+=1
                }
                else
                { 
                  if(count>lastCount)
                  { 
                    lastCount=count;
                    count=0
                  } else
                  {
                    count=0
                  }
                }
          }
        })
        if(count>lastCount){
          dashCounts.push(count);
        }else{
          dashCounts.push(lastCount);
        }
        // (count>lastCount)?dashCounts.push(count):dashCounts.push(lastCount)
        
  })

 return Math.max(...dashCounts)
}
console.log(findMaxBorder(makeArray(10,5)));

