const BASE_URL = import.meta.env.VITE_APP_API_URL;
const API_KEY = import.meta.env.VITE_APP_API_KEY;

export async function fetchMatches() {
  const response = await fetch(`${BASE_URL}/v2/matches`, {
    method: 'GET',
    headers: {
      'x-api-key': API_KEY,
      'Content-Type': 'application/json'
    }
  });
  const resData = await response.json();
  if (!response.ok) {
    throw new Error('Failed to fetch Match');
  }
  return resData;
}

export async function fetchMembers() {
  const response = await fetch(`${BASE_URL}/users`, {
    method: 'GET',
    headers: {
      'x-api-key': API_KEY,
      'Content-Type': 'application/json'
    }
  });
  const resData = await response.json();
  if (!response.ok) {
    throw new Error('Failed to fetch Members');
  }
  return resData;
}

export async function createMatch(newMatch) {
  const response = await fetch(`${BASE_URL}/v2/matches`, {
    method: 'POST',
    headers: {
      'x-api-key': API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newMatch)
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to create match data.');
  }

  return resData;
}
