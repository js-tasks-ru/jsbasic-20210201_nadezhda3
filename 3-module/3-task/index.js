function camelize(str) {
  let arr = str.split('-');
  let arr1 = arr.map(
    function (item, index) {
      if (index == 0) {
        return item;
      } else {
        return item[0].toUpperCase() + item.slice(1);
      }
    });
  str = arr1.join('');
  return str;
}

 