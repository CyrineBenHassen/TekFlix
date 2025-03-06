export class Film {
    id: number;
    title: string;
    description: string;
    image: string;
    rating: number;
    year: number;
    genre: string;
    isNew: boolean;
    trailerUrl: string;
    
    constructor(id: number, title: string, description: string, image: string,
                rating: number, year: number, genre: string, isNew: boolean, trailerUrl: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.rating = rating;
        this.year = year;
        this.genre = genre;
        this.isNew = isNew;
        this.trailerUrl = trailerUrl;
    }
}

export const FILMS: Film[] = [
    {
        id: 1,
        title: "Ad Vitam",
        description: "Steve Rogers becomes Captain America, battling the Red Skull and Hydra in World War II, while struggling to adapt to his new role as a superhero.",
        image: "/ad_vitam.jfif",
        rating: 9.2,
        year: 2004,
        genre: "Action",
        isNew: true,
        trailerUrl: "https://www.youtube.com/watch?v=EZOLxOewUYQ"
    },
    {
        id: 2,
        title: "The Sand Castle",
        description: "A young soldier in Vietnam faces a moral crisis when he discovers the bodies of dead civilians and realizes that his platoon is responsible.",
        image: "/the_sand_castle.jfif",
        rating: 8.5,
        year: 2024,
        genre: "Drama",
        isNew: false,
        trailerUrl: "https://www.youtube.com/watch?v=XKK3H0Ztif0"
    },
    {
        id: 3,
        title: "Captain America: The First Avenger",
        description: "Steve Rogers becomes Captain America, battling the Red Skull and Hydra in World War II, while struggling to adapt to his new role as a superhero.",
        image: "/captain_america.jfif",
        rating: 7.2,
        year: 2011,
        genre: "Action",
        isNew: false,
        trailerUrl: "https://www.youtube.com/watch?v=qi5UTD7kEr0"
    },

    {
        id: 4,
        title: "Mr Bean",
        description: "The bumbling Mr. Bean travels to America when he is given the responsibility of bringing a highly valuable painting to a Los Angeles museum.",
        image: "/MrBean.jpg",
        rating: 8.2,
        year: 2007,
        genre: "Comedy",
        isNew: false,
        trailerUrl: "https://www.youtube.com/watch?v=hSxLUd8aly4"
    },
    {
        id: 5,
        title: "La La Land",
        description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
        image: "\lalaland.jpg",
        rating: 7.6,
        year: 2007,
        genre: "Drama",
        isNew: false,
        trailerUrl: "https://www.youtube.com/watch?v=0pdqf4P9MB8"
    }
];