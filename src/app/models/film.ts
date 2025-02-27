export class Film {
    id: number;
    title: string;
    description: string;
    image: string;
    rating: number;
    year: number;
    genre: string;
    isNew: boolean;
    constructor(id: number, title: string, description: string, imoge: string,
    rating: number, year: number, genre: string, isNew: boolean) {
    this. id = id;
    this. title = title;
    this.description = description;
    this. image = imoge;
    this.rating = rating;
    this.year = year;
    this.genre = genre;
    this.isNew = isNew;
    }
}


export const FILMS: Film[] = [
{
    id: 1,
    title: "Captain Anerica",
    description: "Steve Rogers becones Captain America, battling the Red Skulland Mydra in World War II, while struggling to",
    image: "/ad_vitam.jfif",
    rating: 8.5,
    year: 2004,
    genre: "Action",
    isNew: true,
},
{
    id: 2,
    title: "Back Action",
    description: "An elite temm races agminst time to prevent an international conspiracy, facing betrayal and danger as they",
    image: "/the_sand_castle.jfif",
    rating: 8.5,
    year: 2608,
    genre: "Action",
    isNew: false
},

{
    id: 3,
    title: "The Sand Castle",
    description: "A group of soldiers struggles to build a school in a remote village while dealing with the harsh realities of war.",
    image: "/the_sand_castle.jfif",
    rating: 7.2,
    year: 2017,
    genre: "Drama",
    isNew: false
}
];