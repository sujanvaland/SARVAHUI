function capitalizeFirstLetter(str) {
    return str.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
  }
  
export { capitalizeFirstLetter };