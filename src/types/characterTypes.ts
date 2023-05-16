export interface BasicCharacter {
    id: number;
    name: string;
    image: string;
    status: string;
    species: string;
    gender: string;
}

export interface Episode {
    id: number;
    name: number;
    air_date: string;
    episode: string;
}

export interface CompleteCharacter extends BasicCharacter {
    type: string;
    origin: {
        name: string;
    };
    location: {
        name: string;
    };
    episode: Episode[];
}

export interface Characters {
    info: {
        pages: number;
        next: number | null;
    };
    results: BasicCharacter[];
}