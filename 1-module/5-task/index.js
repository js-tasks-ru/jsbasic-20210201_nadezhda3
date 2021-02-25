function truncate(str, maxlength) {
  // ваш код...

 
  if (str.length > maxlength) {
    let startStr = str.slice(0, (maxlength - 1));
    return (startStr + "…");
    

  } else {
    return str;
  }

}
