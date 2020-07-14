// var message = 'Hello Node!';

// var sum = 5 + 3;

// console.log(message);
// console.log(sum);

const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// const message = 'Hello Node!';
// message = 'Goodbye Node!';

// const sum = 5 + 3;
// sum += 1;

// Notice the lack of parentheses around the `profileDataArr` parameter?
const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i += 1) {
        console.log('================');

        profileDataArr.forEach(profileItem => console.log(profileItem));
    }
};

printProfileData(profileDataArgs);