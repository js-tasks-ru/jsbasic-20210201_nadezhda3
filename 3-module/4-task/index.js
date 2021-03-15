function showSalary(users, age) {
  let usersFilter = users.filter(function (item, index) {
    if (item.age <= age) {
      return item;
    }
  });

  let usersRange = usersFilter.map(function (item) {
    return item.name + ', ' + item.balance;
  });
  let usersStr = usersRange.join('\n')
  return usersStr;
}
