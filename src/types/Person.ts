export class Person {
    id: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    description: string;
    address: string;


    constructor(id: string, firstName: string, lastName: string, phone: string,
                email: string, description: string, address: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.description = description;
        this.address = address;
    }

}
