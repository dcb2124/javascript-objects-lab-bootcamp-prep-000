
recipes = Object.assign({})

function updateObjectWithKeyAndValue(object, key, value){
  
  return Object.assign({}, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  
  object[key] = value
  return object
  
}

function deleteFromObjectByKey(object, key){
  
  return delete Object.assign({}, object)[key]
  
}