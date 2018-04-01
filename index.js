
recipes = Object.assign({})

function updateObjectsWithKeyAndValue(object, key, value){
  
  return Object.assign({}, {key: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  
  object[key] = value
  return object
  
}