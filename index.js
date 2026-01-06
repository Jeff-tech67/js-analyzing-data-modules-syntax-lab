


// module.exports = {
//   ...(typeof combineUsers !== 'undefined' && { combineUsers })
// };

require('datejs');


function combineUsers(...args) {
  // Step 2: Initialize return object
  const combinedObject = {
    users: []
  };

  // Step 3 & 4: Loop through args and merge arrays using spread
  for (let arr of args) {
    combinedObject.users.push(...arr);
  }

  // Step 5: Add today's date using datejs
  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  // Step 7: Return object
  return combinedObject;
}

module.exports = combineUsers;

combineUsers(
  ['alice', 'bob'],
  ['charlie'],
  ['david', 'emma']
);

