export const matchesDataMock = [
  {
    id: 1,
    matchId: 'M001',
    matchStatus: 'Waiting', // Match status: Waiting
    matchTime: 'TBA', // Time not available yet
    team1Players: [
      { id: 1, name: 'สมชาย', image: 'https://via.placeholder.com/40' },
      { id: 2, name: 'สมหญิง', image: 'https://via.placeholder.com/40' }
    ],
    team2Players: [
      { id: 3, name: 'อนันต์', image: 'https://via.placeholder.com/40' },
      { id: 4, name: 'ดารา', image: 'https://via.placeholder.com/40' }
    ]
  },
  {
    id: 2,
    matchId: 'M002',
    matchStatus: 'Playing', // Match status: Playing
    shuttlecock: 1,
    matchTime: '2024-12-28 14:00',
    team1Players: [
      { id: 1, name: 'สมชาย', image: 'https://via.placeholder.com/40' },
      { id: 2, name: 'สมหญิง', image: 'https://via.placeholder.com/40' }
    ],
    team2Players: [
      { id: 3, name: 'อนันต์', image: 'https://via.placeholder.com/40' },
      { id: 4, name: 'ดารา', image: 'https://via.placeholder.com/40' }
    ]
  },
  {
    id: 3,
    matchId: 'M003',
    matchStatus: 'Done', // Match status: Done
    shuttlecock: 1,
    winner: 'team1',
    duration: 10,
    matchTimeEnd: '2024-12-26 16:00',
    matchTime: '2024-12-26 16:00',
    team1Players: [
      { id: 1, name: 'สมชาย', image: 'https://via.placeholder.com/40' },
      { id: 2, name: 'สมหญิง', image: 'https://via.placeholder.com/40' }
    ],
    team2Players: [
      { id: 3, name: 'อนันต์', image: 'https://via.placeholder.com/40' },
      { id: 4, name: 'ดารา', image: 'https://via.placeholder.com/40' }
    ]
  },
  {
    id: 4,
    matchId: 'M004',
    matchStatus: 'Playing', // Match status: Playing
    shuttlecock: 1,
    matchTime: '2024-12-28 15:00',
    team1Players: [
      { id: 1, name: 'สมชาย', image: 'https://via.placeholder.com/40' },
      { id: 4, name: 'ดารา', image: 'https://via.placeholder.com/40' }
    ],
    team2Players: [
      { id: 2, name: 'สมหญิง', image: 'https://via.placeholder.com/40' },
      { id: 3, name: 'อนันต์', image: 'https://via.placeholder.com/40' }
    ]
  }
];
