let animals = document.querySelectorAll(".animal")
console.log(animals)

let dogVoteBtn = document.createElement("button")
dogVoteBtn.textContent = "vote for Doggo"

animals[0].append(dogVoteBtn)

let dogVotesCell = document.querySelector("#doggo-votes");

dogVoteBtn.addEventListener('click', function(e) {
    let dogVotesCount = parseInt(dogVotesCell.textContent);
    dogVotesCount = dogVotesCount + 1;
    dogVotesCell.textContent = dogVotesCount;
    localStorage.setItem('dog-votes',dogVotesCount);
});

let catVoteBtn = document.createElement("button")
catVoteBtn.textContent = "vote for Catto"

animals[1].append(catVoteBtn)