function make_album(Artist, Album, Track) {
    var Albums = {
        Artist1: Artist,
        Album1: Album,
    };
    if (Track !== undefined) {
        Albums.Tracks = Track;
    }
    return Albums;
}
var Album1 = console.log(make_album("Atif Aslam", "Humsafar"));
var Album2 = make_album("Ali Hyder", "Teri Yaad", 6);
var Album3 = console.log(make_album("Sajjad Ali", "Panni"));
var Album4 = make_album("Hassan Jhangir", "Hawa Hawa ", 12);
console.log(Album2);
console.log(Album4);
// Second Methode.
function make_albumm(Artist, Album, Track) {
    return { Artist: Artist, Album: Album };
}
var Album5 = console.log(make_album("Atif Aslam", "Humsafar"));
var Album6 = make_album("Ali Hyder", "Teri Yaad", 6);
var Album7 = console.log(make_album("Sajjad Ali", "Panni"));
var Album8 = make_album("Hassan Jhangir", "Hawa Hawa", 12);
console.log(Album6);
console.log(Album8);
