import {DEFAULT_PAGE_SIZE} from "./consts";
import axios from 'axios';


export default class TableService {

    _apiBase = 'http://localhost:8080/api/users'

    getListOfTableItems = async (page = 0, pageSize = DEFAULT_PAGE_SIZE) => {
        const res = await axios.get(this._apiBase, { params: {page, pageSize} });
        if (res.status !== 200) {
            throw new Error(`Could not fetch ${this._apiBase}` +
                `, received ${res.status}`)
        }

        return res.data.map(this._transformPerson);
    }

    getPerson = async (id) => {
        const res = await axios.get(`${this._apiBase}/${id}`);
        if (res.status !== 200) {
            throw new Error(`Could not fetch ${this._apiBase}/${id}` +
                `, received ${res.status}`)
        }
        return this._transformPerson(res.data);
    }

    sendData = async (body, onSuccess) => {
        await axios.post(this._apiBase, body).then(onSuccess);
    }

    _transformPerson = (person) => {
        return {
            id: person._id,
            firstName: person.firstName,
            lastName: person.lastName,
            phone: person.phone,
            email: person.email,
            description: person.description,
            address: person.address
        };
    }
}
