import React from 'react';
import './App.css';
import teamsData from './CollegeBasketballTeams.json';

interface TeamProps {
  tid: number;
  school: string;
  name: string;
  city: string;
  state: string;
}

const teams = teamsData.teams;

function Welcome() {
  return <h1>College Basketball Teams</h1>;
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{oneTeam.school}</h2>
          <h3 className="card-subtitle mb-2 text-muted">
            Mascot: {oneTeam.name}
          </h3>
          <h3 className="card-text">
            Location: {oneTeam.city}, {oneTeam.state}
          </h3>
        </div>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div className="container mt-4">
      <div className="row">
        {teams.map((team) => (
          // Wrap each team in a column div
          <div key={`${team.tid}`} className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <Team {...team} />
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
