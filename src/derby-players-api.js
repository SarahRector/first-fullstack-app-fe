import request from 'superagent';

const URL = process.env.REACT_APP_API_URL;

export function fetchDerbyPlayers() {
    try{
        return request.get(`${URL}/derby_players`);
    } catch(e) {
        return { error: e.message }
    }
}

export function fetchPositions() {
    try{
        return request.get(`${URL}/positions`);
    } catch(e) {
        return { error: e.message }
    }
}

export function fetchDerbyPlayer(id) {
    return request.get(`${URL}/derby_players/${id}`);
}

export function deleteDerbyPlayer(id) {
    return request.delete(`${URL}/derby_players/${id}`);
}

export function updateDerbyPlayer(id, updatedPlayer) {
    return request.put(`${URL}/derby_players/${id}`, updatedPlayer);
}

export function createDerbyPlayer(playerData) {
    return request.post(`${URL}/derby_players`, playerData)
}