import { Badge, Tab, TablePagination, Tabs } from '@mui/material';
import { useEffect, useState } from 'react';
import MatchDone from './matches/MatchDone';
import MatchPlaying from './matches/MatchPlaying';
import MatchWaiting from './matches/MatchWaiting';

const BadgeTab = ({ label, badgeContent, badgeColor = 'primary', ...props }) => (
  <Tab
    label={
      <div style={{ alignItems: 'center' }}>
        {label}
        <Badge badgeContent={badgeContent} color={badgeColor} style={{ marginLeft: 18 }} />
      </div>
    }
    {...props}
  />
);

const MatchListPage = () => {
  const [tabValue, setTabValue] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [matchesData, setMatchesData] = useState([]); // State to manage matches data
  const handleTabChange = (_, newValue) => setTabValue(newValue);
  const handleChangePage = (_, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleUpdateMatches = (updatedMatches) => {
    setMatchesData(updatedMatches); // Update matches data and refresh UI
  };

  // Fetch sample players from API
  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch('http://localhost:3001/v2/matches');
        const data = await response.json();

        if (data.length > 0) {
          const responseUser = await fetch('http://localhost:3001/users');
          const dataUsers = await responseUser.json(); // Fixed: use the correct response for users
          const updatedMatches = data.map((match) => {
            const updatedTeam1Players = match.team1Players.map((player) => {
              const user = dataUsers.find((user) => user.id === player.id);
              return {
                ...player,
                name: user ? user.name : '', // If user is found, add name
                image: user ? user.image : '' // If user is found, add image
              };
            });

            const updatedTeam2Players = match.team2Players.map((player) => {
              const user = dataUsers.find((user) => user.id === player.id);
              return {
                ...player,
                name: user ? user.name : '', // If user is found, add name
                image: user ? user.image : '' // If user is found, add image
              };
            });
            return {
              ...match,
              team1Players: updatedTeam1Players,
              team2Players: updatedTeam2Players
            };
          });

          // Set the matches data with updated information
          setMatchesData(updatedMatches);
        }
      } catch (error) {
        console.error('Error fetching:', error);
      }
    };

    fetchMatches();
  }, []);

  const allMatches = matchesData;

  const filteredMatches = allMatches.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  const countWaiting = filteredMatches.filter((match) => match.matchStatus === 'Waiting').length;
  const countPlaying = filteredMatches.filter((match) => match.matchStatus === 'Playing').length;
  const countDone = filteredMatches.filter((match) => match.matchStatus === 'Done').length;

  return (
    <>
      <Tabs value={tabValue} onChange={handleTabChange} centered>
        <BadgeTab label="Waiting" badgeContent={countWaiting} badgeColor="warning" />
        <BadgeTab label="Playing" badgeContent={countPlaying} badgeColor="primary" />
        <BadgeTab label="Completed" badgeContent={countDone} badgeColor="success" />
      </Tabs>

      {tabValue === 0 && <MatchWaiting matches={filteredMatches} />}
      {tabValue === 1 && <MatchPlaying matches={filteredMatches} />}
      {tabValue === 2 && <MatchDone matches={filteredMatches} />}

      <TablePagination
        rowsPerPageOptions={[3, 5, 10]}
        component="div"
        count={allMatches.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default MatchListPage;
