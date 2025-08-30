import axios from "axios";

const baseURL = 'https://api-natprodb.onrender.com'

export async function getAllMolecules(path) {
    const endpoint = path ? `${baseURL}${path}` : `${baseURL}/molecules`;
    const response = await axios.get(endpoint);
    return response;
}

export async function getMoleculeById(id) {
    const response = await axios.get(`${baseURL}/molecules/${id}`)
    return response;
}

export async function getMoleculeByName(nome) {
    const response = await axios.get(`/molecules/nome?nome=${encodeURIComponent(nome)}`);
    return response;
}

export async function getMoleculeBySmile(smile) {
    const response = await axios.get(`/molecules/smile?smile=${encodeURIComponent(smile)}`);
    return response;
}