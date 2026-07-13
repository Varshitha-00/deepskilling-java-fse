const t20Players = ['Rohit Sharma', 'Virat Kohli', 'Hardik Pandya'];
const ranjiPlayers = ['Shubman Gill', 'KL Rahul', 'Ravindra Jadeja'];

function IndianPlayers() {
  const [oddPlayer, evenPlayer] = ['Rohit Sharma', 'Virat Kohli'];
  const mergedPlayers = [...t20Players, ...ranjiPlayers];

  return (
    <div className="card">
      <h2>Indian Players</h2>
      <h3>Odd and Even Team Players</h3>
      <p>Odd Team Player: <span className="badge">{oddPlayer}</span></p>
      <p>Even Team Player: <span className="badge">{evenPlayer}</span></p>

      <h3>Merged Players</h3>
      <ul>
        {mergedPlayers.map((player) => (
          <li key={player}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
