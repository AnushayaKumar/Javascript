// find if it is a landscape
function isLandscape(width, height) {
    if (width === height) {
        return console.log("they are equal");
    }
    else {
        return width > height ? console.log('landscape') : console.log('portrait');
    }

}
isLandscape(70, 70)
isLandscape(70, 50)
isLandscape(70, 90)

