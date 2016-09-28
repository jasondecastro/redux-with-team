export function fetchCats(){
  const cats = [{id: 1, name: 'Maru'}, {id: 2, name: 'Grumpy Cat'}, {id: 3, name: 'Shadow'}];

  return {
    type: 'FETCH_CATS',
    payload: cats
  }
}

export function fetchDogs(){
  const dogs = [{id: 1, name: 'Odie'}];

  return {
    type: 'FETCH_DOGS',
    payload: dogs
  }
}

export function addCat(name, length){
  const cat = [{id: length + 1, name: name}]
  return {
    type: 'ADD_CAT',
    payload: cat
  }
}
