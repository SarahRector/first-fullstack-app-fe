import request from 'superagent';

const URL = 'https://git.heroku.com/first-fullstack-app-be.git';

export function fetchDerbyPlayers() {
    return request.get(`${URL}/derby_players`);
}

export function fetchDerbyPlayer(id) {
    return request.get(`${URL}/derby_players/${id}`);
}