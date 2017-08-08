use pl_teams;

db.teams.remove({});

db.teams.insert([{
  name: "Arsenal",
  manager: "Arsène Wenger",
  stadium: "Emirates Stadium"
},{
  name: "Bournemouth",
  manager: "Eddit Howe",
  stadium: "Dean Court"
},{
  name: "Brighton and Hove Albion",
  manager: "Chris Hughton",
  stadium: "Falmer Stadium"
},{
  name: "Burnley",
  manager: "Sean Dyche",
  stadium: "Turf Moor"
},{
  name: "Chelsea",
  manager: "Antonio Conte",
  stadium: "Stamford Bridge"
},{
  name: "Crystal Palace",
  manager: "Frank De Boer",
  stadium: "Selhurst Park"
},{
  name: "Everton",
  manager: "Ronald Koeman",
  stadium: "Goodison Park"
},{
  name: "Huddersfield Town",
  manager: "David Wagner",
  stadium: "Kirklees Stadium"
},{
  name: "Leicester City",
  manager: "Craig Shakespeare",
  stadium: "King Power Stadium"
},{
  name: "Liverpool",
  manager: "Jürgen Klopp",
  stadium: "Anfield"
},{
  name: "Manchester City",
  manager: "Pep Guardiola",
  stadium: "Etihad Stadium"
},{
  name: "Manchester United",
  manager: "José Mourinho",
  stadium: "Old Trafford"
},{
  name: "Newcastle",
  manager: "Rafael Benítez",
  stadium: "St James' Park"
},{
  name: "Southampton",
  manager: "Mauricio Pellegrino",
  stadium: "St Mary's Stadium"
},{
  name: "Stoke City",
  manager: "Mark Hughes",
  stadium: "bet365 Stadium"
},{
  name: "Swansea City",
  manager: "Paul Clement",
  stadium: "Liberty Stadium"
},{
  name: "Tottenham Hotspur",
  manager: "Mauricio Pochettino",
  stadium: "Wembley Stadium"
},{
  name: "Watford",
  manager: "Marco Silva",
  stadium: "Vicarage Road"
},{
  name: "West Bromwich Albion",
  manager: "Tony Pulis",
  stadium: "The Hawthorns"
},{
  name: "West Ham United",
  manager: "Slaven Bilić",
  stadium: "London Stadium"
}]
);
