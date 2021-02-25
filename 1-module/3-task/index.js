function ucFirst(str) {
  // ваш код...

  if (str === ('')) {
    return '';
  }

  let nameLength = str.length;
  if (nameLength === 1) {
    return str.charAt(0).toUpperCase();
  } else {

    let endName = str.slice(1);
    let startName = str.charAt(0).toUpperCase();
    return (startName + endName);
  }
}
