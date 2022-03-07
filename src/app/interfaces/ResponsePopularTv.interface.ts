export interface ResponsePopularTv {
    dates?:         Dates;
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

interface Dates {
    maximum: Date;
    minimum: Date;
}

interface Result {
    backdrop_path: string
    first_air_date: Date;
    genre_ids: number[]
    id: number
    name: string
    origin_country: string[]
    original_language: OriginalLanguage
    original_name: string
    overview: string
    popularity: number
    poster_path: string
    vote_average: number
    vote_count: number
}

enum OriginalLanguage {
    En = "en",
    Ja = "ja",
}