export interface ResponseTrending {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface Result {
    adult?:            boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    original_language: OriginalLanguage;
    original_title?:   string;
    poster_path:       string;
    video?:            boolean;
    vote_average:      number;
    vote_count:        number;
    overview:          string;
    release_date?:     Date;
    id:                number;
    title?:            string;
    popularity:        number;
    media_type:        MediaType;
    original_name?:    string;
    origin_country?:   string[];
    first_air_date?:   Date;
    name?:             string;
}

enum MediaType {
    Movie = "movie",
    Tv = "tv",
}

enum OriginalLanguage {
    En = "en",
    Fr = "fr",
    Ko = "ko",
    Tr = "tr",
}