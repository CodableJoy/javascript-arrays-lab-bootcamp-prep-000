const app = "I don't do much."

var destructivelyAppendKitten = function(name){
  kittens.push(name);
  return kittens;
}

var destructivelyPrependKitten = function(name){
  kittens.unshift(name);
  return kittens;
}

var destructivelyRemoveLastKitten = function(){
  kittens.pop();
  return kittens;
}