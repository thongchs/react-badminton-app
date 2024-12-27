import { Avatar, Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const MatchTable = ({ matches }) => (
  <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
    <Table sx={{ minWidth: 650 }} aria-label="match list table">
      <TableHead>
        <TableRow>
          <TableCell align="center">Queue</TableCell>
          <TableCell align="center">Team 1 Players</TableCell>
          <TableCell align="center">Team 2 Players</TableCell>
          <TableCell align="center">Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {matches.map((match) => (
          <TableRow key={match.id}>
            <TableCell>{match.matchNo}</TableCell>
            <TableCell>
              <Box display="flex" flexDirection="column" gap={1}>
                {match.team1Players.map((player, index) => (
                  <Box key={index} display="flex" alignItems="center" gap={1} sx={{ p: 1, border: '1px solid #ccc', borderRadius: '8px' }}>
                    <Avatar src={player.image} alt={player.name} sx={{ width: 40, height: 40 }} />
                    <Typography variant="body2" noWrap>
                      {player.name} Skill: BG | Stamina: 80
                    </Typography>
                  </Box>
                ))}
              </Box>
            </TableCell>
            <TableCell>
              <Box display="flex" flexDirection="column" gap={1}>
                {match.team2Players.map((player, index) => (
                  <Box key={index} display="flex" alignItems="center" gap={1} sx={{ p: 1, border: '1px solid #ccc', borderRadius: '8px' }}>
                    <Avatar src={player.image} alt={player.name} sx={{ width: 40, height: 40 }} />
                    <Typography variant="body2" noWrap>
                      {player.name} Skill: BG | Stamina: 80
                    </Typography>
                  </Box>
                ))}
              </Box>
            </TableCell>
            <TableCell>
              <Box display="flex" justifyContent="space-evenly">
                <Button variant="contained" color="primary" size="small">
                  Start
                </Button>
                <Button variant="contained" color="error" size="small">
                  Delete
                </Button>
              </Box>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

const MatchWaiting = ({ matches }) => <MatchTable matches={matches.filter((match) => match.matchStatus === 'Waiting')} />;

export default MatchWaiting;
