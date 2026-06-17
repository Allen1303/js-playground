/* In the code editor, the prepareTea and getTea functions are already defined for you.
 Call the getTea function to get 40 cups of tea
 for the team, and store them in the tea4TeamFCC variable.
Function that returns a string representing a cup of green tea
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/

const prepareTea = () => "greenTea";

const getTea = (numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const cupOfTea = prepareTea();
    teaCups.push(cupOfTea);
  }
  return teaCups;
};

//Solution code
const tea4TeamFCC = getTea(40);
console.log(tea4TeamFCC);
