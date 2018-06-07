 
## React JS Test Task
The goal for this task is to implement a web card game.
The game should be implemented with minimum 2 and maximum 5 players for a single game. Frontend only developers should implement a single human player and the rest of the players should be implemented as computer bots, while senior developers with nodejs have to implement multi player mode without using computer bots, but all real human players.

The game rules are the following:
- standard deck of 52 cards
- 10 cards per user per deal/game
- human always plays first
- play direction is clockwise
- random card dealing
- each player throws a single card, the highest card wins and takes all
- in case there are more than one high cards, the last player who played wins
- end of game is when all players are out of cards in their hands
- the winner is the player who has the highest sum of all taken cards; in case of more than one player with same sum, there will be more than one winner

Technical details:
- use git to commit your work
- commit at often as possible and push at least once a day
- function body should not exceed 30 LOC
- class should not exceed 200 LOC
- stick to DRY principles
- base your implementation on design patterns
- layout should be responsive
- use [https://deckofcardsapi.com/](https://deckofcardsapi.com/) and Piles from API
- implementation should be based one React and Redux-thunk

Advanced requirements:
- use only pure functional components
- implement custom app bootstrap process with extendable reducer in the future
- implement game animations for dealing, drawing, player turn
