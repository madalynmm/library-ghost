const User = require('./User');
//const BookAssignment = require('./BookAssignment');
//const BookUser = require('./BookUser');
const Books = require('./Books');

// User.hasMany(BookUser, {
//   foreignKey: 'user_id',
// });

// BookUser.belongsTo(User, {
//   foreignKey: 'user_id',
// });

User.hasMany(Books, {
    foreignKey: 'user_id',
});
  
Books.belongsTo(User, {
    foreignKey: 'user_id',
});

// BookAssignment.hasMany(BookUser, {
//     foreignKey: 'assignment_id'
// });

// BookUser.belongsTo(BookAssignment, {
//     foreignKey: 'assignment_id'  
// });

// BookAssignment.hasMany(Books, {
//     foreignKey: 'assignment_id'
// }); 

// Books.belongsTo(BookAssignment, {
//     foreignKey: 'assignment_id'
// });

// BookUser.hasOne(Books, {
//     foreignKey: 'book_user_id'
// });

// Books.belongsTo(BookUser, {
//     foreignKey: 'book_user_id'
// });

// Books.hasOne(BookUser, {
//     foreignKey: 'book_id'
// });

// BookUser.belongsTo(Books, {
//     foreignKey: 'book_id'
// });


module.exports = { User, Books };