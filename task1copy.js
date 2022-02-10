function makeArray(size){
  let array = []
  for(let i=0;i<size;i++){
    
        if(Math.floor(Math.random()*15)%2===0){
          array[i]='#'
        }
        else{
          array[i]='.'
        }
    } 
  return array
}

function findMaxBorder(arr){
  console.log(arr)
  let lastDashCount =0;
  let dashCount = 0;
  
arr.reduce((previousItem,currentItem,i,a)=>{
      if(previousItem && previousItem==='#'){
        if(currentItem==='#'){
          console.log('2nd if',i,previousItem)
          dashCount+=2
        }else{
          console.log('first else',i)
          lastDashCount+=1
        }
      }
      
      else
      {
            if(currentItem==='#' && dashCount===0 ){
          console.log('33 global else first if',i,currentItem)

              dashCount+=1;
            }
            else if(currentItem==='#' && dashCount>0 && a[i-1]==='#')
            {
          console.log('1st else if',i,currentItem)
              
              dashCount+=1
            }
            else
            {
          console.log('last else',i,currentItem)
          if(dashCount>lastDashCount)
          { 
            console.log('counting in if stment');
            lastDashCount=dashCount;
            dashCount=0
          } else
          {
            console.log('counting in else stment');
            dashCount=0
          }
          console.log('dashCount=',dashCount,' lastDashCount=',lastDashCount)
            }
      }
    })
    if(dashCount>lastDashCount){
      return dashCount
    }else{

      return lastDashCount
    }
  }
  

console.log(findMaxBorder([ '#', '.', '#', '#', '.' ]));

