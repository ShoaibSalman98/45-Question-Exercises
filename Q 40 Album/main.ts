function make_album(Artist:string, Album: string, Track?: number) {
    let Albums: {Artist1:string, Album1:String, Tracks?: number} = {
        Artist1: Artist,
        Album1:  Album,
    };
    if (Track !== undefined) {
        Albums.Tracks = Track;
    }
    return Albums;
}
let Album1= console.log(make_album("Atif Aslam", "Humsafar"));
let Album2=make_album("Ali Hyder", "Teri Yaad", 6);
let Album3=console.log(make_album("Sajjad Ali", "Panni"));
let Album4=make_album("Hassan Jhangir", "Hawa Hawa ", 12 ,);
console.log(Album2);
console.log(Album4);

// Second Methode.
function make_albumm(Artist:string, Album: string, Track?: number) {

    return {Artist,Album}
}

let Album5= console.log(make_album("Atif Aslam", "Humsafar"));
let Album6=make_album("Ali Hyder", "Teri Yaad", 6);
let Album7=console.log(make_album("Sajjad Ali", "Panni"));
let Album8=make_album("Hassan Jhangir", "Hawa Hawa", 12);
console.log(Album6);
console.log(Album8);


