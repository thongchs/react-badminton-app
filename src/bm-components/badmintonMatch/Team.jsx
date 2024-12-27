import { Avatar, Box, FormControl, Typography } from '@mui/material';

import { Autocomplete, TextField } from '@mui/material';

// Team Component
export default function Team({ teamName, team, setTeam, playerList }) {
  const handleChange = (playerKey, value) => {
    setTeam((prev) => ({ ...prev, [playerKey]: value ? value.id : '' }));
  };

  const renderPlayerDetails = (playerId) => {
    const player = playerList.find((p) => p.id === playerId);
    return player ? (
      <Box
        display="flex"
        alignItems="center"
        gap={2}
        sx={{
          mt: 2,
          p: 1,
          border: '1px solid #ccc',
          borderRadius: '8px'
        }}
      >
        <Avatar src={player.image} alt={player.name} sx={{ width: 56, height: 56 }} />
        <Typography variant="body2">
          Skill: {player.skillLevel} | Stamina: {player.stamina} | Style: {player.playingStyle}
        </Typography>
      </Box>
    ) : null;
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        {teamName}
      </Typography>
      {['player1', 'player2'].map((key, index) => (
        <Box key={index} sx={{ mb: 4 }}>
          <FormControl fullWidth>
            <Autocomplete
              value={team[key] ? playerList.find((p) => p.id === team[key]) : null}
              onChange={(event, newValue) => handleChange(key, newValue)}
              options={playerList}
              getOptionLabel={(option) => option.name + ` ` + option.skillLevel}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              renderInput={(params) => <TextField {...params} label={`Select ${key === 'player1' ? 'Player 1' : 'Player 2'}`} />}
            />
          </FormControl>
          {renderPlayerDetails(team[key])}
        </Box>
      ))}
    </Box>
  );
}
