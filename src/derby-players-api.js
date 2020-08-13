import request from 'superagent';

const URL = process.env.REACT_APP_API_URL;

export function fetchDerbyPlayers() {
    return request.get(`${URL}/derby_players`);
}

export function fetchDerbyPlayer(id) {
    return request.get(`${URL}/derby_players/${id}`);
}

export function createDerbyPlayer(playerData) {
    return request.post(`${URL}/derby_players`, playerData)
}