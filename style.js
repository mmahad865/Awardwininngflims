const Owner = "Mahad"
const instructor = "Kassie"

let response = prompt ("Hi, Please enter your name  ")
document.write("Hello"  + response , "  What's your favorite movie")
console.log(response);

if (response == Owner) {
    document.write("Hi there Mahad");}
else if (response == instructor){
    document.write("Hi there Kassie");}
else {
    document.write("Welcome to my page");
}


let myFavMovie = "The matrix"
response = prompt ("Whats your favorite movie ")

while (response !== myFavMovie){
    response = prompt("what's my favorite movie?");
    if (response !== myFavMovie){
    alert("you're wrong, enter The matrix")
}
}

    
    

    
