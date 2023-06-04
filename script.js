let data = [
  {
    name: 'Startups Of the Year 2023',
    path: 'startups_of_the_year_2023.md',
  },
  {
    name: 'Hackenoon Companies of the Week',
    path: 'hackernoon_companies_trend_04_06_2023.md',
  },
];
let tabledata = document.getElementById('tabledata');
console.log(tabledata);
for(let data in tabledata) {
    let row = document.createElement('tr');
    let name = document.createElement('td');
    let path = document.createElement('td');
    let a = document.createElement('a');
    a.href = data.path
    console.log(a)
    name.innerHTML = data.name;
    path.innerHTML = a
    row.appendChild(name);
    row.appendChild(path);
    tabledata.appendChild(row);
}