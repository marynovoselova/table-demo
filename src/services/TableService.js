import { DEFAULT_PAGE_SIZE } from "../consts";
import axios from 'axios';


export default class TableService {

    _apiBase = 'http://localhost:80/api/users'

    getData = async (page, searchText) => {
        const res = await axios.get(this._apiBase, { params: {page, DEFAULT_PAGE_SIZE, searchText} });
        if (res.status !== 200) {
            throw new Error(`Could not fetch ${this._apiBase}` +
                `, received ${res.status}`)
        }

        return res.data.data.map(this._transformPerson);
    }

    getTotalData = async () => {
        const res = await axios.get(this._apiBase);
        if (res.status !== 200) {
            throw new Error(`Could not fetch ${this._apiBase}` +
                `, received ${res.status}`)
        }

        return res.data.total;
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
