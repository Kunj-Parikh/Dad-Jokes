let btn = document.getElementById('btn');
btn.addEventListener('click', gen);
let pun = document.getElementById('pun-display');

let dadJokes = ['What do you call somebody with no body and no nose? Nobody knows',
    
    'Why do bees hum? Because they don’t know the words.',
    
    "What is brown and sticky? A stick.",
    
    "Where do you learn to make ice cream? Sunday School",
    
    "Why do chicken coops only have two doors? Because if they had four they would be chicken sedans.",
    
    "Can February March? No, but April May",
    "What do you call a fake noodle? An impasta",
    
    "Why did the scarecrow win an award? Because he was out standing in his field.",
    
    "Did you hear about the guy who invented the knock knock joke? He won the ‘No-bell’ Prize.",
    
    "How many apples grow on trees? All of them.",
    
    "Want to hear a joke about construction? Nah, I’m still working on it.",
    
    "What do you call an elephant that doesn’t matter? An irrelephant",
    
    "Why do you never see elephants hiding in trees? Because they’re so good at it.",
    
    "What does an annoying pepper do? It gets jalapeño face",
    
    "What do prisoners use to call each other? Cell phones",
    
    "Why can’t you hear a pterodactyl go to the bathroom? Because the pee is silent.",
    
    "What did the grape do when he got stepped on? He let out a little wine.",
    
    "Why couldn’t the bicycle stand up by itself? It was two tired.",

    "What do you call a fat psychic? A four-chin teller."
]

function gen() {
    const randomEl = Math.floor(Math.random()* dadJokes.length);
    if (dadJokes[randomEl] === undefined) {
        console.log('wait a second');
    }
    pun.innerText = `${dadJokes[randomEl]}`;
    dadJokes.splice(randomEl, 1);
}
