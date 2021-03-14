function showSalary(users, age) {
  userRange = users.map(function (item, index) {
    if (item.age <= age) {
      return item.name + item.balance;
    };
  });
  return userRange.join('/n');
}
