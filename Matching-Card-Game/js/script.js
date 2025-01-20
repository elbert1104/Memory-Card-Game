/*
    1. create an Array consisting of all the cards
        Card = {src: imgfilename, matched: false}

    2. If a card is clicked,
        - every 2 actions = turncount ++
        -flip over
        -check to see if there is a second card that is flipped over
            -if these two cards have the same src, then change the match key to true
                if matched ~ true, then those two cards stay up for good
            else , flip the card back   
    3. win condition 
        if all the cards in the array have matched = true, then pop modal saying you won
    4. new game button
        if clicked
            - reshuffles the card array
            - re renders the cards    
    


*/

// const cards = [{ src: "", matched: false }, {}, {}, {}, {}, {}];

// const shuffledCards = [...cards, ...cards];

const cards = document.querySelectorAll(".card");

function flipCard() {
  console.log("I was clicked!");
  console.log(this);
}

cards.forEach((card) => card.addEventListener("click", flipCard));
