const imgs = [
    "img/beach-394503_1920.jpg",
    "img/boardwalk-569314_1920.jpg",
    "img/drink-84533_1920.jpg",
    "img/lake-1581879_1920.jpg",
    "img/mountains-1587287_1920.jpg",
    "img/sand-6570980_1920.jpg",
    "img/sea-164989_1280.jpg"
]

const index = Math.floor(Math.random() * 7);
document.body.style.backgroundImage = `url(${imgs[index]})`;
