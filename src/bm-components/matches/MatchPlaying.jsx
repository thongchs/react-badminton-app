import { Avatar, Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { updateMatchStatus } from 'api/http';
import User1 from 'assets/images/users/user-round.svg';
import React from 'react';
import './MatchTable.css'; // Import the CSS file
const MatchTableBK = ({ matches }) => (
  <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
    <Table sx={{ minWidth: 650 }} aria-label="match list table">
      <TableHead>
        <TableRow>
          <TableCell align="center">ID</TableCell>
          <TableCell align="center">Team 1 Players</TableCell>
          <TableCell align="center">Team 2 Players</TableCell>
          <TableCell align="center">Detail</TableCell>
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
              <Box display="flex" flexDirection="column" gap={1}>
                <div>Start: {match.matchTime}</div>
                <div>Duration: 10 mins</div>
                <div>Shuttlecock: {match.shuttlecock}</div>
              </Box>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

const MatchTable = ({ matches }) => (
  <TableContainer className="table-container" component={Paper} sx={{ overflowX: 'auto' }}>
    <Table sx={{ minWidth: 350 }} aria-label="match list table">
      <TableHead>
        <TableRow>
          <TableCell align="center">Team 1 Players</TableCell>
          <TableCell align="center">Team 2 Players</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {matches.map((match, index) => (
          <React.Fragment key={match.matchId}>
            {/* Queue Number */}
            <TableRow>
              <TableCell colSpan={2} align="center">
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginY: 1 }}>
                  Match No: {index + 1}
                </Typography>
              </TableCell>
            </TableRow>
            {/* Players Rows */}
            <TableRow>
              <TableCell>
                <Box display="flex" flexDirection="column" gap={1}>
                  {match.team1Players.map((player, playerIndex) => (
                    <Box
                      key={playerIndex}
                      display="flex"
                      alignItems="center"
                      gap={1}
                      sx={{ p: 1, border: '1px solid #ccc', borderRadius: '8px' }}
                    >
                      <Avatar src={player.avatar || User1} alt={player.name} sx={{ width: 40, height: 40 }} />
                      <Typography variant="body2" noWrap>
                        {player.name} | BG
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </TableCell>
              <TableCell>
                <Box display="flex" flexDirection="column" gap={1}>
                  {match.team2Players.map((player, playerIndex) => (
                    <Box
                      key={playerIndex}
                      display="flex"
                      alignItems="center"
                      gap={1}
                      sx={{ p: 1, border: '1px solid #ccc', borderRadius: '8px' }}
                    >
                      <Avatar src={player.avatar || User1} alt={player.name} sx={{ width: 40, height: 40 }} />
                      <Typography variant="body2" noWrap>
                        {player.name} | BG
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </TableCell>
            </TableRow>
            {/* End Match Button */}
            <TableRow>
              <TableCell colSpan={2} align="center">
                <Button variant="contained" color="primary" onClick={() => alert(`Ending match ${index + 1}`)}>
                  Statistics
                </Button>

                <Button variant="contained" color="success" onClick={() => updateMatchStatus(match.matchId, 'Done')}>
                  Done
                </Button>

                <Button variant="contained" color="error" onClick={() => updateMatchStatus(match.matchId, 'Delete')}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

const MatchPlaying = ({ matches }) => <MatchTable matches={matches.filter((match) => match.matchStatus === 'Playing')} />;

export default MatchPlaying;
