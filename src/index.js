module.exports = function check(str, bracketsConfig) {
    let masStr=str.split("");
    let stack = [];
    let skobka = '', openIndex;
    for (let i=0; i < masStr.length; i++) {
        skobka = masStr[i];
      for (let j=0; j<bracketsConfig.length; j++)
      {
          if (skobka==bracketsConfig[j][0]) {
              if(bracketsConfig[j][0] == bracketsConfig[j][1]) {
                  if(skobka == masStr[i+1]) {
                      i=i+1;
                      break;
                  }
                  else{
                      openIndex=stack[stack.length-1];
                      if (openIndex==j) stack.pop();
                      else {
                          stack.push([j]);
                          break;
                      }
                  }
              }
              else {
                  stack.push([j]);
                  break;
              }
          }
          else {
              if(skobka==bracketsConfig[j][1]) {
                  if (stack.length == 0) return false;
                  else {
  
                      openIndex=stack[stack.length-1];
                      if (openIndex==j) stack.pop();
                      else return false;   
                  }            
              }
          }
      }
    }
    if (stack.length !== 0) return false;
    return true;
}
