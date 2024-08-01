let circles = [];
let cords = [];
document.addEventListener("click", (e) => {
    if (circles.length === 2) {
        let dis = Math.sqrt(Math.pow(cords[1][0] - cords[0][0], 2) + Math.pow(cords[1][1] - cords[0][1], 2));
        if (dis > cords[0][2] + cords[1][2]) {
            alert("Not Intersecting");
        } else {
            alert("Intersecting");
        }
        document.body.removeChild(circles[0]);
        document.body.removeChild(circles[1]);
        circles = [];
        cords = [];
    }
    const x = e.clientX;
    const y = e.clientY;
    const w = (Math.random()) * 500;
    const circle = document.createElement("div");
    circle.className += "circle";
    circle.style.left = `${x - w / 2}px`;
    circle.style.top = `${y - w / 2}px`;
    circle.style.height = `${w}px`;
    circle.style.width = `${w}px`;
    document.body.appendChild(circle);
    circles.push(circle);
    cords.push([x, y, w / 2]);
});
