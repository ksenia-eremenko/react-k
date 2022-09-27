function updateLight(current) {
    let colors = ["green", "yellow", "red"];
    let colorIndex = colors.indexOf(current);
    colorIndex = (colorIndex === colors.length - 1) ? 0 : colorIndex+1;
    
    return colors[colorIndex];
  }
  
console.log(updateLight("green"))