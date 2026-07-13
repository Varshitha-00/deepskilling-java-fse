const players = [
  { name: 'Rohit Sharma', score: 85 },
  { name: 'Virat Kohli', score: 72 },
  { name: 'Shubman Gill', score: 64 },
  { name: 'KL Rahul', score: 90 },
  { name: 'Hardik Pandya', score: 68 },
  { name: 'Jasprit Bumrah', score: 75 },
  { name: 'Ravindra Jadeja', score: 58 },
  { name: 'MS Dhoni', score: 80 },
  { name: 'Suryakumar Yadav', score: 71 },
  { name: 'Yuzvendra Chahal', score: 62 },
  { name: 'Shardul Thakur', score: 66 }
];

function ListofPlayers() {
  const playerList = players.map((player) => (
    <li key={player.name}>
      {player.name} - Score: {player.score}
    </li>
  ));

  const lowScorePlayers = players.filter((player) => player.score < 70).map((player) => (
    <li key={player.name}>
      {player.name} - {player.score}
    </li>
  ));

  return (
    <div className="card">
      <h2>List of Players</h2>
      <h3>All Players</h3>
      <ul>{playerList}</ul>

      <h3>Players with score below 70</h3>
      <ul>{lowScorePlayers}</ul>
    </div>
  );
}

export default ListofPlayers;
