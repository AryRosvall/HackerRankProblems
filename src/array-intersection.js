const getIntersection = (arr) =>{
  const [arr1, arr2] = arr.map(arr => arr.split(", "))
  
  return arr1.filter(item => 
    arr2.includes(item)
  )
}

console.log( getIntersection(['1, 3, 4, 7, 15', '1, 2, 4, 15, 21'] ))
//getIntersection(['1, 3, 4, 7, 15', '1, 2, 4, 15, 21'] )