import {DEFAULT_PAGE_SIZE} from "../consts";
import axios from 'axios';
import {Person} from "../types/Person";
import {TableServiceBody} from "../types/TableServiceTypes";


export default class TableService {

    _apiBase: string = 'http://localhost:80/api/users'

    getData = async (page: number, searchText: string): Promise<Person[]> => {
        const res = await axios.get(this._apiBase, {params: {page, DEFAULT_PAGE_SIZE, searchText}});
        if (res.status !== 200) {
            throw new Error(`Could not fetch ${this._apiBase}` +
                `, received ${res.status}`)
        }

        return res.data.data.map(this._transformPerson);
    }

    getTotalData = async (): Promise<number> => {
        const res = await axios.get(this._apiBase);
        if (res.status !== 200) {
            throw new Error(`Could not fetch ${this._apiBase}` +
                `, received ${res.status}`)
        }

        return res.data.total;
    }

    getPerson = async (id: string): Promise<Person> => {
        const res = await axios.get(`${this._apiBase}/${id}`);
        if (res.status !== 200) {
            throw new Error(`Could not fetch ${this._apiBase}/${id}` +
                `, received ${res.status}`)
        }
        return this._transformPerson(res.data);
    }

    sendData = async (body: TableServiceBody): Promise<void> => {
        await axios.post(this._apiBase, body);
    }


    _transformPerson = (person: any): Person => {
        return new Person(
            person._id, person.firstName, person.lastName,
            person.phone, person.email, person.description, person.address
        );
    }
}
