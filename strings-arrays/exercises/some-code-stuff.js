function solve(str){
   // find out which positions the spaces are in
  let spaces = []
  for (let i=0; i < str.length; i++) {
    if (str[i] === " ") {
      spaces.push(i)
    }
  }
  
  let reverseStr = str.replace(/ /g, "").split("").reverse()
  
  for (let j=0; j < spaces.length; j++) {
    reverseStr.splice(spaces[j], 0, " ")
  }

  return reverseStr.join("")
}
