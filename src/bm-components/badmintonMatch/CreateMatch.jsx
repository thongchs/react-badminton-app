import { Box, Button, Container, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import Team from './Team';
// Main Component
function CreateMatch() {
  // const playerList = SAMPLE_PLAYERS;
  const [playerList, setPlayerList] = useState([]);
  const [team1, setTeam1] = useState({ player1: '', player2: '' });
  const [team2, setTeam2] = useState({ player1: '', player2: '' });

  const isPlayerSelected = (playerId) => {
    const allSelectedPlayers = [team1.player1, team1.player2, team2.player1, team2.player2];
    return allSelectedPlayers.includes(playerId);
  };

  // Fetch sample players from API
  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const apiUrl = import.meta.env.VITE_APP_API_URL;
        console.log('apiUrl', apiUrl);
        const apiKey = import.meta.env.VITE_APP_API_KEY;
        const response = await fetch(`${apiUrl}/users`, {
          method: 'GET',
          headers: {
            'x-api-key': apiKey,
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        const sortedPlayers = [...data].sort((a, b) => a.name.localeCompare(b.name));
        setPlayerList(sortedPlayers); // Set fetched players data
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    };
    fetchPlayers();
  }, []);

  const handleCreateMatch = async () => {
    const newMatch = {
      team1: { ...team1 },
      team2: { ...team2 },
      createdAt: new Date().toISOString()
    };

    try {
      // Sending POST request to the API
      const response = await fetch('http://localhost:3001/v2/matches', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMatch) // Sending match data as JSON
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Match created successfully:', data);
        // Optionally, reset the teams after a successful submission
        setTeam1({ player1: '', player2: '' });
        setTeam2({ player1: '', player2: '' });
      } else {
        console.error('Failed to create match:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating match:', error);
    }
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Team teamName="Team 1" team={team1} setTeam={setTeam1} isPlayerSelected={isPlayerSelected} playerList={playerList} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Team teamName="Team 2" team={team2} setTeam={setTeam2} isPlayerSelected={isPlayerSelected} playerList={playerList} />
        </Grid>
      </Grid>
      <Box textAlign="center" mt={4}>
        <Button
          onClick={handleCreateMatch}
          variant="contained"
          color="primary"
          disabled={!team1.player1 || !team1.player2 || !team2.player1 || !team2.player2}
        >
          Create Match
        </Button>
      </Box>
    </Container>
  );
}

export default CreateMatch;
