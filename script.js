let ImageNumber = 0;
let ImageClass = "";
let ImageClassObj = {};
let Earth = {
    photo: "./images/Earth.jpg",
    title: "Earth",
    description: "blahblahblahblahblahblahblahblahblahlahblahblahlahblahblahlahblahblahlahblahblahlahblahblahlahblahblahlahblahblah",
};

let MilkyWay = {
    photo: "./images/MilkyWay.jpg",
    title: "Milky Way",
    description: "blahblahblahblahblahblahblahblahblah",
};

let MushroomCloud = {
    photo: "./images/MushroomCloud.jpg",
    title: "Mushroom Cloud",
    description: "blahblahblahblahblahblahblahblahblah",
};

let Nebula = {
    photo: "./images/Nebula.jpg",
    title: "Nebula",
    description: "blahblahblahblahblahblahblahblahblah",
};

let Tree = {
    photo: "./images/Tree.jpg",
    title: "Tree",
    description: "blahblahblahblahblahblahblahblahblah",
};

$(".ImgContainer").html(
    `<img src='${Earth.photo}' alt='Earth' class='mainImg'>
    <div class='Content'>
        <h1 id='photo-title'>${Earth.title}</h1>
        <p id='photo-description'>${Earth.description}</p>
    </div>`);
    activeImage()

$(".divLeft").on('click', () => {
    if (ImageNumber >= 1) {
        ImageNumber--;
        ImageNumberAppears();
    } else {
        ImageNumber = 4;
        ImageNumberAppears();
    }
})

$(".divRight").on('click', () => {
    if (ImageNumber <= 3) {
        ImageNumber++;
        ImageNumberAppears();
    } else {
        ImageNumber = 0;
        ImageNumberAppears();
    }
})

    $('.allImageContainer').on('click', 'div', (event) => {
    ImageClass = $(event.target).attr("class");
    if (ImageClass === "Earth") {ImageClassObj = Earth; ImageNumber = 0; ImageAppears()}
    if (ImageClass === "MilkyWay") {ImageClassObj = MilkyWay; ImageNumber = 1; ImageAppears()}
    if (ImageClass === "MushroomCloud") {ImageClassObj = MushroomCloud; ImageNumber = 2; ImageAppears()}
    if (ImageClass === "Nebula") {ImageClassObj = Nebula; ImageNumber = 3; ImageAppears()}
    if (ImageClass === "Tree") {ImageClassObj = Tree; ImageNumber = 4; ImageAppears()}
    activeImage()
});

function ImageAppears() {
    $(".ImgContainer").html(
        `<img src='${ImageClassObj.photo}' alt='Earth' class='mainImg'>
        <div class='Content'>
            <h1 id='photo-title'>${ImageClassObj.title}</h1>
            <p id='photo-description'>${ImageClassObj.description}</p>
        </div>`);
};

function ImageNumberAppears() {
    if (ImageNumber == 0) {ImageClassObj = Earth; ImageAppears()}
    if (ImageNumber == 1) {ImageClassObj = MilkyWay; ImageAppears()}
    if (ImageNumber == 2) {ImageClassObj = MushroomCloud; ImageAppears()}
    if (ImageNumber == 3) {ImageClassObj = Nebula; ImageAppears()}
    if (ImageNumber == 4) {ImageClassObj = Tree; ImageAppears()}
    activeImage()
};

function activeImage() {
    $('.allImageContainer div img').css("outline", "none")
    if (ImageNumber == 0) {ImageClassStr = "Earth"}
    if (ImageNumber == 1) {ImageClassStr = "MilkyWay"}
    if (ImageNumber == 2) {ImageClassStr = "MushroomCloud"}
    if (ImageNumber == 3) {ImageClassStr = "Nebula"}
    if (ImageNumber == 4) {ImageClassStr = "Tree"}
    $(`.${ImageClassStr}`).css("outline", "teal solid 4px")
}