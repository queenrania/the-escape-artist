// Branching Story Project
// Run with: node script.js
//
// Your job has two parts:
//   1. Write your story in the storyNodes object below
//   2. Implement the four functions marked with TODO
//
// The console input/output is handled for you at the bottom of the file.
// You do not need to touch anything in the "do not modify" section.
//
// Read PLAN.md before starting.


// -------------------------------------------------------
// YOUR STORY DATA
//
// Fill out the storyNodes with the appropriate data.
// Keep the same structure - only the text and ids change.
//
// Scene shape:
//   id        - a unique string key, kebab-case (e.g. "dark-hallway")
//   text      - the paragraph the player reads when they arrive here
//   choices   - array of choice objects ({ text, nextId })
//   isEnding  - false for regular scenes, true for ending scenes
//
// Ending scenes also need:
//   endingTitle - a short title shown when this ending is reached
//   choices: [] - an empty array (required, not optional)
//
// Rules:
//   - Every nextId must exactly match a real scene key in this object
//   - Use kebab-case for all ids
//   - You need at least 8 scenes total and at least 2 distinct endings
// -------------------------------------------------------

const storyNodes = {

  start: {

    id: "start",
    text: "It is opening night at the theater, and the audience will be arriving shortly. You are backstage checking the props when you hear a loud crash from the dressing rooms and realize it's Kiddums, the theater cat, who probably got startled. You then hear his collar bell jingling somewhere behind the curtains.",
    choices: [
      { text: "Search the dressing rooms", nextId: "dressing-room" },
      { text: "Ask the stage manager for help", nextId: "stage-manager" }
    ],
    isEnding: false
  },

  "dressing-room": {
    id: "dressing-room",
    text: "As you walk to the dressing room, you find costume feathers scattered across the floor and throughout the hallway. In the dressing room, you see your friend Yasmin who will be dancing in the show staring at an open costume trunk. 'I didn't do it,' she says. 'The cat did.' You hear Kiddums give a tiny meow from somewhere nearby.",
    choices: [
      { text: "Look inside the costume trunk", nextId: "costume-trunk" },
      { text: "Follow the feathers into the hallway", nextId: "feather-trail" },
      { text: "Shake the treat bag and call for Kiddums", nextId: "treats" }
    ],
    isEnding: false
  },

  "stage-manager": {
    id: "stage-manager",
    text: "You see the stage manager standing at the edge of the stage with a headset on. You explain that Kiddums is loose. She closes her eyes for a second and whispers, 'Please tell me he isn't near the scenery.' Then you hear a faint scratching sound from behind the painted castle used in the first scene.",
    choices: [
      { text: "Check behind the painted castle", nextId: "painted-castle" },
      { text: "Search the prop table first", nextId: "prop-table" }
    ],
    isEnding: false
  },

  "costume-trunk": {
    id: "costume-trunk",
    text: "You go back to the dressing room and lift the lid of the trunk and see two yellow eyes stare back at you. Kiddums is laying there on a pile of costumes. When you reach toward him, he quickly jumps out of the other side of the trunk.",
    choices: [
      { text: "Follow him", nextId: "feather-trail" }
    ],
    isEnding: false
  },

  "feather-trail": {
    id: "feather-trail",
    text: "The feathers lead down the hallway and disappear beneath a row of theater seats. You look underneath the seats and see Kiddums sitting at the far end, staring back at you completely content.",
    choices: [
      { text: "Crawl under the seats and get him", nextId: "under-seats" },
      { text: "Stay still and wait for him to come out", nextId: "wait-quietly" }
    ],
    isEnding: false
  },


  "treats": {
    id: "treats",
    text: "You shake the treat bag and whisper, 'TREATS'. Kiddums comes running toward you from behind a curtain. Then he hears the audience doors opening and gets distracted by the sound of people coming into the theater.",
    choices: [
      { text: "Offer him another treat", nextId: "lure-kiddums" },
      { text: "Close the curtain and block him from the stage", nextId: "block-stage" },
      { text: "Let him wander and hope he comes back", nextId: "ending-chaos" }
    ],
    isEnding: false
  },

  "painted-castle": {
    id: "painted-castle",
    text: "You kneel beside the painted castle and peek behind it. Kiddums is there, sitting on a coil of electrical cable. He looks at you, then looks toward the stage as though he is going to start walking toward center stage.",
    choices: [
      { text: "Pick him up and carry him to the green room", nextId: "green-room" },
      { text: "Use a toy to lure him away from the stage", nextId: "toy-distraction" }
    ],
    isEnding: false
  },

  "prop-table": {
    id: "prop-table",
    text: "The prop table is covered with veils, a sword and a candle tray, that will be used during the performance. Kiddums is nowhere in sight. Then you notice the veil being pulled off the table slightly.",
    choices: [
      { text: "Lift the veil", nextId: "veil" },
      { text: "Leave the props alone and check the green room", nextId: "green-room" }
    ],
    isEnding: false
  },

  "under-seats": {
    id: "under-seats",
    text: "You crawl carefully under the seats. Kiddums backs away from you until he reaches the end of the row. You finally get close enough to pick him up. Unfortunately, the audience has started taking their seats, and several people can see you crawling around underneath them with a cat.",
    choices: [
      { text: "Carry Kiddums backstage", nextId: "ending-rescue" }
    ],
    isEnding: false
  },

  "wait-quietly": {
    id: "wait-quietly",
    text: "You sit on the floor and stop chasing him. For a while, nothing happens. Then Kiddums slowly walks toward you, sits beside your leg, and starts cleaning one paw. You scoop him up before he runs away.",
    choices: [
      { text: "Take Kiddums to the green room", nextId: "ending-rescue" }
    ],
    isEnding: false
  },

  "lure-kiddums": {
    id: "lure-kiddums",
    text: "Kiddums follows the treat into the hallway. You take another step backward and he follows again. Everything is great until someone opens the backstage door. Kiddums suddenly darts between their feet and heads straight toward the stage.",
    choices: [
      { text: "Run after him", nextId: "ending-scene" }
    ],
    isEnding: false
  },

  "block-stage": {
    id: "block-stage",
    text: "You quietly pull the curtain across the opening and stand in front of it. Kiddums paws at the bottom edge, but eventually loses interest. The stage manager gives you a thumbs-up from across the stage. The opening cue is only a minute away.",
    choices: [
      { text: "Stay there until the curtain rises", nextId: "ending-curtain-up" }
    ],
    isEnding: false
  },

  "green-room": {
    id: "green-room",
    text: "You carry Kiddums into the green room and set him down beside his favorite blanket. He immediately circles twice and curls up. You close the door and hurry back toward the stage. The orchestra is already beginning the opening music.",
    choices: [
      { text: "Get back to your position", nextId: "ending-curtain-up" }
    ],
    isEnding: false
  },

  "toy-distraction": {
    id: "toy-distraction",
    text: "You find a little toy mouse and slide it across the floor. Kiddums pounces immediately. He chases it away from the scenery and you grab him while he is distracted.",
    choices: [
      { text: "Take him to the green room", nextId: "ending-rescue" },
      { text: "Put him in his carrier", nextId: "ending-curtain-up" }
    ],
    isEnding: false
  },

  "veil": {
    id: "veil",
    text: "You lift the veil and find Kiddums sitting underneath it. He jumps onto the prop table and knocks over a few candles from the candle tray. The crash echoes through the theater just as the stage manager calls for places.",
    choices: [
      { text: "Grab Kiddums before he reaches the stage", nextId: "ending-rescue" },
      { text: "Follow him when he runs toward the curtain", nextId: "ending-scene" }
    ],
    isEnding: false
  },

  "ending-curtain-up": {
    id: "ending-curtain-up",
    text: "The curtain rises right on time. Kiddums remains in the green room, the props are in place. After the first scene, you check on him. He is asleep on his blanket as if nothing happened.",
    choices: [],
    isEnding: true,
    endingTitle: "Let The Show Go On"
  },

  "ending-rescue": {
    id: "ending-rescue",
    text: "Kiddums is safely back in the green room. You return to your position just as the first scene begins. You breathe in a sigh of relief.",
    choices: [],
    isEnding: true,
    endingTitle: "Alls Well That Ends Well"
  },

  "ending-scene": {
    id: "ending-scene",
    text: "You reach the stage just as the curtain opens. Kiddums walks directly into the spotlight and sits down. The audience erupts in laughter. One of the dancers improvises by dancing around him, and somehow the scene works. Kiddums becomes the star of the show.",
    choices: [],
    isEnding: true,
    endingTitle: "Kiddums Star of the Show"
  },

  "ending-chaos": {
    id: "ending-chaos",
    text: "You decide to let Kiddums wander. Five minutes later, the stage manager calls your name. Kiddums has climbed onto a piece of scenery and is refusing to come down. The opening is delayed while everyone tries to bait him down with toys and treats.",
    choices: [],
    isEnding: true,
    endingTitle: "Delayed Opening Chaos"
  }
};


// -------------------------------------------------------
// GAME STATE
// -------------------------------------------------------

let currentSceneId = "start";
const visitedScenes = [];


// -------------------------------------------------------
// YOUR FUNCTIONS
// -------------------------------------------------------

// Finds and returns a scene.
function getCurrentScene(sceneId) {
  return storyNodes[sceneId];
}


// Displays the current scene.
function displayScene(sceneId) {
  const scene = getCurrentScene(sceneId);
  let output = "\n" + "=".repeat(50) + "\n";

  output += "Scenes visited: " + visitedScenes.length + "\n";
  output += "=".repeat(50) + "\n";
  output += "\n" + scene.text + "\n";

  if (scene.isEnding) {
    output += "\n-- " + scene.endingTitle + " --";
  } else {
    for (let index = 0; index < scene.choices.length; index++) {
      output += (index + 1) + ". " + scene.choices[index].text + "\n";
    }
  }

  console.log(output);
}


// Moves the player to the selected scene.
function makeChoice(sceneId, choiceNumber) {
  const scene = getCurrentScene(sceneId);
  const selectedChoice = scene.choices[choiceNumber - 1];
  visitedScenes.push(sceneId);
  return selectedChoice.nextId;
}


// Resets the game.
function restartGame() {
  currentSceneId = "start";
  visitedScenes.length = 0;
}


// -------------------------------------------------------
// GAME LOOP - DO NOT MODIFY
// This section handles all console input and output.
// It calls your functions above to run the game.
// -------------------------------------------------------

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function runGame() {
  displayScene(currentSceneId);

  const scene = getCurrentScene(currentSceneId);

  if (scene.isEnding) {
    askAfterEnding();
  } else {
    const quitNumber = scene.choices.length + 1;
    console.log(quitNumber + ". Quit");
    askForInput();
  }
}

function askForInput() {
  rl.question("\nEnter your choice: ", function(answer) {
    const choiceNumber = parseInt(answer);
    const scene = getCurrentScene(currentSceneId);
    const quitNumber = scene.choices.length + 1;

    if (isNaN(choiceNumber) || choiceNumber < 1 || choiceNumber > quitNumber) {
      console.log("Please enter a number between 1 and " + quitNumber + ".");
      askForInput();
      return;
    }

    if (choiceNumber === quitNumber) {
      console.log("\nGoodbye.");
      rl.close();
      process.exit(0);
    }

    currentSceneId = makeChoice(currentSceneId, choiceNumber);
    runGame();
  });
}

function askAfterEnding() {
  console.log("\n1. Play Again");
  console.log("2. Quit");

  rl.question("\nEnter your choice: ", function(answer) {
    const choiceNumber = parseInt(answer);

    if (choiceNumber === 1) {
      restartGame();
      runGame();
      return;
    }

    if (choiceNumber === 2) {
      console.log("\nThanks for playing.");
      rl.close();
      process.exit(0);
    }

    console.log("Please enter 1 or 2.");
    askAfterEnding();
  });
}

runGame();
