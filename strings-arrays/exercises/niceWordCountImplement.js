function countWords() {
  if(text.length === 0) return
  let count = text.charAt(0) !== " " ? 1 : 0;
        
  for(let i = 0; i < text.length - 1; i++) {
    if(text.charAt(i) === " " && text.charAt(i + 1) !== " ") count++;
  }
        
  return count;
}
