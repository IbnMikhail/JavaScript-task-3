function basicmath(word) {
  const expression = word
    .replace("plus", "+")
    .replace("minus", "-")
    .replace("times", "*")
    .replace("divided by", "/");
  try {
    const result = eval(expression);
    return result;
  } catch (error) {
    return null; 
  }
}

