# The Escape Artist

## The Story

You are backstage at a theater before a show starts when Kiddums, the resident theater cat, escapes from the dressing room and disappears.

- A show in a theater just before the audience arrives
- A backstage crew member trying to find Kiddums
- Kiddums gets startled and runs through the dressing rooms and backstage areas
- The show is about to start, so there isn't much time to find him
- The player must decide where to search and how to catch Kiddums
- Different choices lead to different situations backstage
- Kiddums may be caught before the show begins
- Or Kiddums may wander onto the stage and the show is delayed
- Or Kiddums may wander onto the stage and become the star of the show

**Central problem:** Find Kiddums before the show is ruined.

**Goal:** Get Kiddums safely back to the green room before the curtain opens.

## The Map

```text
[start]
   |--- dressing rooms ---> [dressing-rooms]
   |                         |--- costume trunk ---> [feather-trail]
   |                         |--- feathers -------> [feather-trail]
   |                         |--- treats
   |                              |--- treats ---> [ending: ending-scene]
   |                              |--- block stage ---> [ending: ending-curtain-up]
   |                              |--- wanders onto stage ---> [ending: ending-chaos]
   |
   |--- stage manager ---> [stage-manager]
                              |--- castle ---> [painted-castle]
                              |                 |--- green room ---> [ending: ending-curtain-up]
                              |                 |--- bait with toys and treats ---> [ending: ending-rescue]
                              |
                              |--- prop table ---> [prop-table]
                                                    |--- veil ---> [ending: ending-rescue]
                                                    |--- green room ---> [ending: ending-curtain-up]

[feather-trail]
   |--- under seats ---> [ending: ending-rescue]
   |--- wait quietly --> [ending: ending-scene]
```

## The Files
project-script.js - simple class assignment
script.js - updated browser version with imagery

## How to Play

Simply follow the choices and choose how to catch Kiddums before the show starts!

[**Play The Escape Artist**](https://queenrania.github.io/the-escape-artist/)
