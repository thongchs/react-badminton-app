import {
  Avatar,
  Box,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { useEffect, useState } from 'react';
import { matchesDataMock as matches } from 'store/mock-data/matchesData';

function MatchListPage() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [tabValue, setTabValue] = useState(0); // State for selected tab (status filter)
  const [matchesData, setMatchesData] = useState(matches); // Store the match data
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // Filter matches by status based on selected tab
  const filteredMatches = matchesData.filter((match) => {
    if (tabValue === 0) return match.matchStatus === 'Waiting';
    if (tabValue === 1) return match.matchStatus === 'Playing';
    return match.matchStatus === 'Done';
  });

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page when rows per page changes
  };

  // Handle tab change (filter by match status)
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    setPage(0); // Reset page number when changing tabs
  };

  // Handle WebSocket connection
  useEffect(() => {
    const socket = new WebSocket('ws://your-websocket-server-url'); // Your WebSocket server URL
    socket.onopen = () => {
      console.log('WebSocket connected');
    };

    socket.onmessage = (event) => {
      const updatedMatch = JSON.parse(event.data); // Assuming server sends updated match data as JSON
      setMatchesData((prevMatches) => prevMatches.map((match) => (match.id === updatedMatch.id ? updatedMatch : match)));
    };

    socket.onclose = () => {
      console.log('WebSocket disconnected');
    };

    // Clean up WebSocket connection on component unmount
    return () => {
      socket.close();
    };
  }, []);

  // Slice the filtered matches for the current page
  const currentMatches = filteredMatches.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <>
      {/* Tabs for filtering by match status */}
      <Tabs value={tabValue} onChange={handleTabChange} centered>
        <Tab label="Waiting" />
        <Tab label="Playing" />
        <Tab label="Done" />
      </Tabs>

      <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: 650 }} aria-label="match list table">
          <TableHead>
            <TableRow>
              <TableCell>Match ID</TableCell>
              <TableCell>Team 1 Players</TableCell>
              <TableCell>Team 2 Players</TableCell>
              <TableCell>Match Time</TableCell>
              <TableCell>Match Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentMatches.map((match) => (
              <TableRow key={match.id}>
                <TableCell component="th" scope="row">
                  {match.matchId}
                </TableCell>
                <TableCell>
                  <Box display="flex" flexDirection="column" gap={1}>
                    {match.team1Players.map((player, index) => (
                      <Box
                        key={index}
                        display="flex"
                        alignItems="center"
                        gap={1}
                        sx={{
                          p: 1,
                          border: '1px solid #ccc',
                          borderRadius: '8px'
                        }}
                      >
                        <Avatar src={player.image} alt={player.name} sx={{ width: 40, height: 40 }} />
                        <Typography variant="body2" noWrap>
                          {player.name}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display="flex" flexDirection="column" gap={1}>
                    {match.team2Players.map((player, index) => (
                      <Box
                        key={index}
                        display="flex"
                        alignItems="center"
                        gap={1}
                        sx={{
                          p: 1,
                          border: '1px solid #ccc',
                          borderRadius: '8px'
                        }}
                      >
                        <Avatar src={player.image} alt={player.name} sx={{ width: 40, height: 40 }} />
                        <Typography variant="body2" noWrap>
                          {player.name}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </TableCell>
                <TableCell>{match.matchTime}</TableCell>
                <TableCell>{match.matchStatus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[3, 5, 10]}
        component="div"
        count={filteredMatches.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}

export default MatchListPage;
