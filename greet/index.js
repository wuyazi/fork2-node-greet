function greet(name,drunk){
  if(drunk){
    return "hello " + name + ", you look sexy tody";
  }else{
    return "hello, " + name;
  }
}

module.exports=greet;
