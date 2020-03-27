//last one
function reduceArray(arr,func,acc){
    let arr1={}
    for(let i=0; i<arr.length; i++){
      if(isNaN(acc)){
        arr1=(func(acc,arr[i],i))
      }
      else{
        arr1+=(func(arr1,arr[i],i))
      }
    }
    return arr1
  }

//first 2
  function reduceArray(arr,func,acc){
    let arr1=0
    for(let i=0; i<arr.length; i++){
      if(isNaN(acc)){
        arr1+=(func(i,arr[i],acc))
      }
      else{
        arr1+=(func(acc,arr[i],i))
      }
    }
    return arr1
  }

  //all3
  function reduceArray(arr,func,acc){
    if(isNaN(acc)){
      let arr1={}
      for(let i=0; i<arr.length; i++){
        if(isNaN(acc)){
          arr1=(func(acc,arr[i],i))
        }
        else{
          arr1+=(func(arr1,arr[i],i))
        }
      }
      return arr1
    }
    else{
    let arr1=0
    for(let i=0; i<arr.length; i++){
        arr1+=(func(acc,arr[i],i))
    }
    return arr1
  }
  }