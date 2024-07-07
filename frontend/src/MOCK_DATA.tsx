
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
    rating?:string;
    role?: string;
    types?:string;
}

export const moviedata = [
    {
        _id: 1,
        name: "Garden Lovers (Eedenistä pohjoiseen)",
        rating: "2.00",
        imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MjguNksgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00374797-kqytbtqgwb-portrait.jpg",
        types: "Documentary"
    },
    {
        _id: 2,
        name: "Sons of the Desert",
        rating: "0.00",
        imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MjguNksgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00374797-kqytbtqgwb-portrait.jpg",
        types: "Comedy"
    },
    {
        _id: 3,
        name: "Hooper",
        rating: "4.00",
        imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MjguNksgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00374797-kqytbtqgwb-portrait.jpg",
        types: "Action|Comedy"
    },
    {
        _id: 4,
        name: "Drive Thru",
        rating: "1.00",
        imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MjguNksgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00374797-kqytbtqgwb-portrait.jpg",
        types: "Comedy|Horror"
    },
    {
        _id: 5,
        name: "Dead Silent",
        rating: "7.00",
        imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MjguNksgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00374797-kqytbtqgwb-portrait.jpg",
        types: "Thriller"
    },
    {
        _id: 6,
        name: "Nice Guy Johnny",
        rating: "3.00",
        imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NTMuOEsgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00386901-sgjlyfvnkl-portrait.jpg",
        types: "Comedy|Romance"
    },
    {
        _id: 7,
        name: "15",
        rating: "6.00",
        imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NTMuOEsgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00386901-sgjlyfvnkl-portrait.jpg",
        types: "Action|Drama"
    },
    {
        _id: 8,
        name: "Ill Manors",
        rating: "6.00",
        imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NTMuOEsgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00386901-sgjlyfvnkl-portrait.jpg",
        types: "Crime|Drama"
    },
    {
        _id: 9,
        name: "Star Trek: First Contact",
        rating: "0.00",
        imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NTMuOEsgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00386901-sgjlyfvnkl-portrait.jpg",
        types: "Action|Adventure|Sci-Fi|Thriller"
    },
    {
        _id: 10,
        name: "Stagecoach",
        rating: "9.00",
        imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NTMuOEsgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00386901-sgjlyfvnkl-portrait.jpg",
        types: "Action|Drama|Romance|Western"
    },
    {
        _id: 11,
        name: "Starflight: The Plane That Couldn't Land",
        rating: "8.00",
        imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICA4Ni4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00398936-rmwsksawqv-portrait.jpg",
        types: "Drama|Sci-Fi"
    },
    {
        _id: 12,
        name: "Square Dance",
        rating: "0.00",
        imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICA4Ni4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00398936-rmwsksawqv-portrait.jpg",
        types: "Drama|Romance"
    },
    {
        _id: 13,
        name: "Rebirth",
        rating: "2.00",
        imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICA4Ni4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00398936-rmwsksawqv-portrait.jpg",
        types: "Documentary"
    },
    {
        _id: 14,
        name: "Trials of Oscar Wilde, The",
        rating: "7.00",
        imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICA4Ni4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00398936-rmwsksawqv-portrait.jpg",
        types: "Drama"
    },
    {
        _id: 15,
        name: "Hellboy II: The Golden Army",
        rating: "5.00",
        imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICA4Ni4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00398936-rmwsksawqv-portrait.jpg",
        types: "Action|Adventure|Fantasy|Sci-Fi"
    },
    {
        _id: 16,
        name: "Rebellion (L'ordre et la morale)",
        rating: "6.00",
        imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni40LzEwICAzLjVLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00390813-gexewexzur-portrait.jpg",
        types: "Action|Drama"
    },
    {
        _id: 17,
        name: "Live Nude Girls",
        rating: "2.00",
        imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni40LzEwICAzLjVLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00390813-gexewexzur-portrait.jpg",
        types: "Comedy"
    },
    {
        _id: 18,
        name: "Bounty, The",
        rating: "3.00",
        imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni40LzEwICAzLjVLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00390813-gexewexzur-portrait.jpg",
        types: "Adventure|Drama"
    },
    {
        _id: 19,
        name: "Bambi Meets Godzilla",
        rating: "2.00",
        imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni40LzEwICAzLjVLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00390813-gexewexzur-portrait.jpg",
        types: "Animation|Comedy"
    },
    {
        _id: 20,
        name: "Stand by for Action",
        rating: "1.00",
        imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni40LzEwICAzLjVLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00390813-gexewexzur-portrait.jpg",
        types: "Action|Drama|War"
    }
]