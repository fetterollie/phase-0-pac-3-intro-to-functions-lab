function shout(string) {
    // to do
    return string.toUpperCase();
}

function whisper(string) {
    // to do
    return string.toLowerCase();
}
 
function logShout(string) {
    // to do
    return console.log(string.toUpperCase());
}
 function logWhisper(string) {
    return console.log(string.toLowerCase());
 }
function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase())
        return "I can't hear you!"
    else if (string === string.toUpperCase())
        return "YES INDEED!"
    else if (string === "Let's have dinner together!")
        return "I would love to!";
 }
/*
If the string that is passed into the function is all lowercase, the function should return "I can't hear you!"
If the string that is passed into the function is all uppercase, the function should return "YES INDEED!"
If the string that is passed into the function is equal to "Let's have dinner together!", the function should return "I would love to!"
*/
