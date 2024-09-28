export interface User {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    dob: DateOfBirth;
    registered: Registered;
    phone: string;
    cell: string;
    id: ID;
    picture: Picture;
    nat: string;
}

interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}

interface ID {
    name: string;
    value: string;
}

interface Registered {
    date: string;
    age: number;
}

interface DateOfBirth {
    date: string;
    age: number;
}

interface Location {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: Coordinates;
    timezone: Timezone;
}

interface Timezone {
    offset: string;
    description: string;
}

interface Coordinates {
    latitude: string;
    longitude: string;
}

interface Street {
    number: number;
    name: string;
}

interface Name {
    title: string;
    first: string;
    last: string;
}
