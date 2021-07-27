export type CreateItemState = {
    form: {
        firstName: string,
        lastName: string,
        phone: string,
        email: string,
        description: string,
        address: {
            streetAddress: string,
            city: string,
            state: string,
            zip: string
        }
    },
    closeCreateItem: boolean,
    error: boolean
}