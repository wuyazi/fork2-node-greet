greet = (name, drunk) ->
  if drunk
    "hello " + name + ", you look sexy tody"
  else
    "hello, " + name
module.exports = greet