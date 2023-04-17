function first(object){
    for (key in object){
      if (object.hasOwnProperty(key)){
        console.log(key+":"+object[key])}
      }
  };