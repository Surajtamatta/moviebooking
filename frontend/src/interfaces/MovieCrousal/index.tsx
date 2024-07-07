export interface moviesTypes{
    title?: string;
    portraitImgUrl?: string;
    landscapeImgUrl?: string;
    _id?: string;
    rating?: number;
    genre?: string[];
    description?: string;
    duration?: number;
    cast?: CelebrityCardType[];
    crew?: CelebrityCardType[];
}

export interface CelebrityCardType{
    _id?: number;
    name?: string;
    imageUrl?: string;
    
    role?: string;
}