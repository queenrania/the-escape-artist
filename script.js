
      const storyNodes = {
        start: {
          text: "It is opening night at the theater, and the audience will be arriving shortly. You are backstage checking the props when you hear a loud crash from the dressing rooms and realize it's Kiddums, the theater cat, who probably got startled. You then hear his collar bell jingling somewhere behind the curtains.",
          choices: [
            ["Search the dressing rooms", "dressing-rooms"],
            ["Ask the stage manager for help", "stage-manager"],
          ],
        },
        "dressing-rooms": {
          text: "As you walk to the dressing room, you find costume feathers scattered across the floor and throughout the hallway. In the dressing room, you see your friend Yasmin who will be dancing in the show staring at an open costume trunk. 'I didn't do it,' she says. 'The cat did.' You hear Kiddums give a tiny meow from somewhere nearby.",
          choices: [
            ["Look inside the costume trunk", "costume-trunk"],
            ["Follow the feathers into the hallway", "feather-trail"],
            ["Shake the treat bag and call for Kiddums", "treats"],
          ],
        },
        "stage-manager": {
          text: "You see the stage manager standing at the edge of the stage with a headset on. You explain that Kiddums is loose. She closes her eyes for a second and whispers, 'Please tell me he isn't near the scenery.' Then you hear a faint scratching sound from behind the painted castle used in the first scene.",
          choices: [
            ["Check behind the painted castle", "painted-castle"],
            ["Search the prop table first", "prop-table"],
          ],
        },
        "costume-trunk": {
          text: "You go back to the dressing room and lift the lid of the trunk and see two yellow eyes stare back at you. Kiddums is laying there on a pile of costumes. When you reach toward him, he quickly jumps out of the other side of the trunk.",
          choices: [["Follow him", "feather-trail"]],
        },
        "feather-trail": {
          text: "The feathers lead down the hallway and disappear beneath a row of theater seats. You look underneath the seats and see Kiddums sitting at the far end, staring back at you completely content.",
          choices: [
            ["Crawl under the seats and get him", "under-seats"],
            ["Stay still and wait for him to come out", "wait-quietly"],
          ],
        },
        treats: {
          text: "You shake the treat bag and whisper, 'TREATS'. Kiddums comes running toward you from behind a curtain. Then he hears the audience doors opening and gets distracted by the sound of people coming into the theater.",
          choices: [
            ["Offer him another treat", "lure-kiddums"],
            ["Close the curtain and block him from the stage", "block-stage"],
            ["Let him wander and hope he comes back", "ending-chaos"],
          ],
        },
        "painted-castle": {
          text: "You kneel beside the painted castle and peek behind it. Kiddums is there, sitting on a coil of electrical cable. He looks at you, then looks toward the stage as though he is going to start walking toward center stage.",
          choices: [
            ["Pick him up and carry him to the green room", "green-room"],
            ["Use a toy to lure him away from the stage", "toy-distraction"],
          ],
        },
        "prop-table": {
          text: "The prop table is covered with veils, a sword and a candle tray, that will be used during the performance. Kiddums is nowhere in sight. Then you notice the veil being pulled off the table slightly.",
          choices: [
            ["Lift the veil", "veil"],
            ["Leave the props alone and check the green room", "green-room"],
          ],
        },
        "under-seats": {
          text: "You crawl carefully under the seats. Kiddums backs away from you until he reaches the end of the row. You finally get close enough to pick him up. Unfortunately, the audience has started taking their seats, and several people can see you crawling around underneath them with a cat.",
          choices: [["Carry Kiddums backstage", "ending-quiet-rescue"]],
        },
        "wait-quietly": {
          text: "You sit on the floor and stop chasing him. For a while, nothing happens. Then Kiddums slowly walks toward you, sits beside your leg, and starts cleaning one paw. You scoop him up before he runs away.",
          choices: [["Take Kiddums to the green room", "ending-quiet-rescue"]],
        },
        "lure-kiddums": {
          text: "Kiddums follows the treat into the hallway. You take another step backward and he follows again. Everything is great until someone opens the backstage door. Kiddums suddenly darts between their feet and heads straight toward the stage.",
          choices: [["Run after him", "ending-scene-stealer"]],
        },
        "block-stage": {
          text: "You quietly pull the curtain across the opening and stand in front of it. Kiddums paws at the bottom edge, but eventually loses interest. The stage manager gives you a thumbs-up from across the stage. The opening cue is only a minute away.",
          choices: [
            ["Stay there until the curtain rises", "ending-curtain-up"],
          ],
        },
        "green-room": {
          text: "You carry Kiddums into the green room and set him down beside his favorite blanket. He immediately circles twice and curls up. You close the door and hurry back toward the stage. The orchestra is already beginning the opening music.",
          choices: [["Get back to your position", "ending-curtain-up"]],
        },
        "toy-distraction": {
          text: "You find a little toy mouse and slide it across the floor. Kiddums pounces immediately. He chases it away from the scenery and disappears behind a stack of storage boxes. You grab him while he is distracted.",
          choices: [
            ["Take him to the green room", "ending-quiet-rescue"],
            ["Put him in his carrier", "ending-curtain-up"],
          ],
        },
        veil: {
          text: "You lift the veil and find Kiddums sitting underneath it. He jumps onto the prop table and knocks over a few candles from the candle tray. The crash echoes through the theater just as the stage manager calls for places.",
          choices: [
            ["Grab Kiddums before he reaches the stage", "ending-quiet-rescue"],
            [
              "Follow him when he runs toward the curtain",
              "ending-scene-stealer",
            ],
          ],
        },
        "ending-curtain-up": {
          endingTitle: "A Perfect Opening",
          text: "The curtain rises right on time. Kiddums remains in the green room, the props are in place. After the first scene, you check on him. He is asleep on his blanket as if nothing happened.",
        },
        "ending-quiet-rescue": {
          endingTitle: "The Unsung Hero",
          text: "Kiddums is safely back in the green room. You return to your position just as the first scene begins. You breathe in a sigh of relief.",
        },
        "ending-scene-stealer": {
          endingTitle: "Kiddums Takes the Stage",
          text: "You reach the stage just as the curtain opens. Kiddums walks directly into the spotlight and sits down. The audience erupts in laughter. One of the dancers improvises by dancing around him, and somehow the scene works. Kiddums becomes the star of the show.",
        },
        "ending-chaos": {
          endingTitle: "The Cat Runs the Theater",
          text: "You decide to let Kiddums wander. Five minutes later, the stage manager calls your name. Kiddums has climbed onto a piece of scenery and is refusing to come down. The opening is delayed while everyone tries to bait him down with toys and treats.",
        },
      };
      let currentSceneId = "start";
      const visitedScenes = [];
      function showScene() {
        const scene = storyNodes[currentSceneId],
          game = document.querySelector("#game");
        game.innerHTML = "";
        const counter = document.createElement("div");
        counter.className = "visited";
        counter.textContent = "Scenes visited: " + visitedScenes.length;
        game.appendChild(counter);
        const text = document.createElement("p");
        text.textContent = scene.text;
        game.appendChild(text);
        if (scene.endingTitle) {
          const ending = document.createElement("div");
          ending.className = "ending";
          ending.textContent = "✨ " + scene.endingTitle + " ✨";
          game.appendChild(ending);
          const button = document.createElement("button");
          button.textContent = "Play Again";
          button.addEventListener("click", restartGame);
          game.appendChild(button);
          return;
        }
        scene.choices.forEach(function (choice, index) {
          const button = document.createElement("button");
          button.textContent = index + 1 + ". " + choice[0];
          button.addEventListener("click", function () {
            makeChoice(index);
          });
          game.appendChild(button);
        });
      }
      function makeChoice(index) {
        visitedScenes.push(currentSceneId);
        currentSceneId = storyNodes[currentSceneId].choices[index][1];
        showScene();
      }
      function restartGame() {
        currentSceneId = "start";
        visitedScenes.length = 0;
        showScene();
      }
      document.addEventListener("DOMContentLoaded", function () {
        showScene();
      });
      