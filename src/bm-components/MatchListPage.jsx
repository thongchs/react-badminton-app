import { Badge, Tab, TablePagination, Tabs } from '@mui/material';
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import db from '../../firebase';
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

const MatchListPage = (isPublic) => {
  const [tabValue, setTabValue] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(500);
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
    onSnapshot(collection(db, 'group-123'), (snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data());
      console.log(data);
      setMatchesData(data);
    });
    // const fetchMatch = async () => {
    //   try {
    //     const data = await fetchMatches();
    //     setMatchesData(data);
    //   } catch (error) {
    //     console.error('Error fetching:', error);
    //   }
    // };
    // fetchMatch();
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
