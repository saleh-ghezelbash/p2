export const BEERS_FEATURE_KEY = 'beers';

export interface Beer {
    name?: string;
    tagline?: string;
    image_url?: string;
}

export interface BeerState {
    beers: Beer[];
    loaded: boolean;
    error?: string | null;
    filterBy?: string | null;
}

export const initialBeerState: BeerState = {
    beers: [],
    loaded: false,
    error: null,
};

