const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
// const  usersWithThreeLanguages = users.filter(function(user) {
//     return user.languages.length >= 3;
// });
const usersWithThreeLanguages = users.filter(user => user.languages.length >=3);
console.log(usersWithThreeLanguages);

// Use .map to create an array of strings where each element is a user's email address
// const usersEmail = users.map(function (user) {
//     return user.email;
// });
const usersEmail = users.map(user => user.email);
console.log(usersEmail);

// const totalYearsOfExperience = users.reduce(function (acc, user){
//     return acc + user.yearsOfExperience;
// }, 0);
const totalYearsOfExperience = users.reduce((total, user) => total + user.yearsOfExperience, 0);
console.log(totalYearsOfExperience);

// const longestemail = users.reduce(function(longest, user) {
//     if (user.email.length > longest.length) {
//         return user.email;
//     }
//     return longest;
// }, '');

const longestemail = users.reduce((longest, user) => {
    if (user.email.length > longest.length) {
        return user.email;
    } else {
        return longest;
    }
},  '');
console.log(longestemail);

// const userList = users.reduce(function(names, user) {
//     return names.concat(user.name);
// }, []).join(',');

const userNames = users.reduce((names, user) => {
    if (names === '') {
        return user.name;
    } else {
        return names + ',' + user.name;
    }
}, '')
console.log(`Your instructors are: ${userList}.`);