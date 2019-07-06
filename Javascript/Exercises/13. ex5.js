// Complete the below questions using this array:
const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];
  
// 1) Create an array using forEach that has all the usernames with a "!" to each of the usernames
let new_user = [];

array.forEach(user => {
    let username = user.username;
    new_user.push(username + "!");
})
console.log(new_user);

// 1.a) Using destructuring assignment.
let newArray = []
array.forEach(user => {
    let { username } = user;
	username = username + "!";
	newArray.push(username);
})
console.log(newArray);


  
// 2) Create an array using map that has all the usernames with a "? to each of the usernames
const map_array = array.map(user => user.username + "?");
console.log(map_array);

// 2.a) Using destructuring assignment.
const mapArray = array.map(user => {
	let { username } = user;
	return username + "?";
})
console.log(mapArray);
  
  

// 3) Filter the array to only include users who are on team: red
const team_red = array.filter(arr_obj => {
	return arr_obj.team === "red"; 
});
console.log(team_red);


// Find out the total score of all users using reduce.
const total_score = array.reduce((accumulator, arr_obj) => {
  return accumulator + arr_obj.score;
}, 0)


// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})

const newArray1 = arrayNum.map((num, i) => {
  	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const new_list = array.map(user => {
	let { items } = user;
	items = items.map(item => {
		return item + "!";
	})
	return user;
})
