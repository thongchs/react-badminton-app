import { Box, Button, Container, Grid } from '@mui/material';
import { useState } from 'react';
import Team from './Team';
import { SAMPLE_PLAYERS } from './data';
// Main Component
function BadmintonMatch() {
  const samplePlayers = SAMPLE_PLAYERS;
  const [team1, setTeam1] = useState({ player1: '', player2: '' });
  const [team2, setTeam2] = useState({ player1: '', player2: '' });

  const isPlayerSelected = (playerId) => {
    const allSelectedPlayers = [team1.player1, team1.player2, team2.player1, team2.player2];
    return allSelectedPlayers.includes(playerId);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Team teamName="Team 1" team={team1} setTeam={setTeam1} isPlayerSelected={isPlayerSelected} samplePlayers={samplePlayers} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Team teamName="Team 2" team={team2} setTeam={setTeam2} isPlayerSelected={isPlayerSelected} samplePlayers={samplePlayers} />
        </Grid>
      </Grid>
      <Box textAlign="center" mt={4}>
        <Button variant="contained" color="primary" disabled={!team1.player1 || !team1.player2 || !team2.player1 || !team2.player2}>
          Create Match
        </Button>
      </Box>
    </Container>
  );
}

export default BadmintonMatch;
