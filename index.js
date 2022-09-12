const randomTime = (min, max) => {
    return Math.random() * (max - min) + min;
};

const allHoles = document.querySelectorAll('.hole');
console.log(allHoles);

document.querySelector('.hole-container').addEventListener('click', (event) => {
    if (event.target.classList.contains('hole')) {
        alert(randomTime(500, 2000));
    };
});

/* 
A function that generates a random length of time for the mole to peep.
A function that selects a random hole for the mole to peep from.
Using the two functions above, create a function to make the mole emerge out of the random hole.
A start-up function for the game.
*/