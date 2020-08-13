import request from 'superagent';

const URL = 'https://first-fullstack-app-be.herokuapp.com';

export function fetchDerbyPlayers() {
    return request.get(`${URL}/derby_players`);
}

export function fetchDerbyPlayer(id) {
    return request.get(`${URL}/derby_players/${id}`);
}