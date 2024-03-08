import React from 'react';
import './App.css';
//imported the json file to extract the data from it to display it
import teamsData from './CollegeBasketballTeams.json';

// Created interface for all of the attributes I want to display
interface TeamProps {
  tid: number;
  school: string;
  name: string;
  city: string;
  state: string;
}

//set the variable teams to the data from the json file
const teams = teamsData.teams;

// made the welcome function to display the heading of what the website is
function Welcome() {
  return <h1>College Basketball Teams</h1>;
}

//Created a Team class to show how we want the data to be printed out
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

// Created the TeamList function to get all of the data printed out
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

// included welcome function and teamlist function to display on page
function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
