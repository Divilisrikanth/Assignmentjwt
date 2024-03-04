const users = [
  {
    id: 1,
    username: "john",
    password: "John0908",
    isAdmin: true,
  },
  {
    id: 2,
    username: "jane",
    password: "Jane0908",
    isAdmin: false,
  },
];
// var output = [];
// for (var rowIdx = 0; rowIdx < csv.length; rowIdx++) {
//     var row = {};
//     for (var fieldIdx = 0; fieldIdx < fields.length; fieldIdx++) {
//         var field = editor.field(fields[fieldIdx]);
//         var mapped = data[field.name()];
//         row[field.name()] = csv[rowIdx][mapped];
//     }

//     row.id = (rowIdx + 1); // <--- this line
//     output.push(row);
// }

// var json = JSON.stringify(output);

// console.log(json);
module.exports ={users}