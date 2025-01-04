const team = {
  roster: [
    "Shohei Ohtani",
    "Walker Buehler",
    "Mookie Betts",
    "Freddie Freeman",
  ],
  removePlayer: function (player) {
    this.roster = this.roster.filter((p) => p !== player);
  },
  addPlayer(player) {
    this.roster.push(player);
  },
};

console.log("original roster: ", team.roster);

// add a few players
team.addPlayer("Blake Snell");
team.addPlayer("Teoscar Hernandez");
console.log("roster after adding players: ", team.roster);

// remove a player
team.removePlayer("Walker Buehler");
console.log("roster after removing player: ", team.roster);
