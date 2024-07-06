// Array to store the coordinates and radii of the circles
const circleCoordinate = [];

// Function to determine if two circles intersect
function circleIntersect(x0, y0, r0, x1, y1, r1){
    // Calculate the distance between the centers of the circles and check if it's less than or equal to the sum of their radii
    return Math.hypot(x0-x1, y0-y1) <= r0 + r1;
}

// Function to log if two circles intersect
function logIfIntersectingCircle(){
    // Get the first circle's data
    const firstCirc = circleCoordinate[0];
    // Get the second circle's data
    const secondCirc = circleCoordinate[1];

    // Extract x, y, and radius for the first circle
    const x1 = firstCirc.x;
    const y1 = firstCirc.y;
    const r1 = firstCirc.radius;

    // Extract x, y, and radius for the second circle
    const x2 = secondCirc.x;
    const y2 = secondCirc.y;
    const r2 = secondCirc.radius;

    // Check if the circles intersect using the circleIntersect function
    return circleIntersect(x1, y1, r1, x2, y2, r2);
}

// Add an event listener for mouse clicks on the document
document.addEventListener("click", (e)=>{
    // Select all elements with the class "circle"
    const totalCircles = document.querySelectorAll(".circle");

    // If there are already two circles on the page, remove them
    if(totalCircles.length === 2){
        totalCircles.forEach(circ =>{
            // Remove the circle element from the DOM
            document.body.removeChild(circ);
            // Remove the circle's data from the circleCoordinate array
            circleCoordinate.shift();
        });
    }

    // Get the x and y coordinates of the click event
    const x = e.clientX;
    const y = e.clientY;

    // Generate a random radius between 50 and 200
    const radius= Math.floor(Math.random() * (200 - 50) + 50);

    // Add the new circle's data to the circleCoordinate array
    circleCoordinate.push({x, y, radius});

    // Create a new div element to represent the circle
    const circle = document.createElement("div");
    // Add the "circle" class to the div
    circle.classList.add("circle");
    // Position the circle on the page (adjust for radius)
    circle.style.top = y-radius +"px";
    circle.style.left = x-radius +"px";
    // Set the circle's width and height based on the radius
    circle.style.width = radius*2 +"px";
    circle.style.height = radius*2 +"px";

    // Add the circle element to the document body
    document.body.appendChild(circle);

    // If there are now two circles, check if they intersect
    if(circleCoordinate.length === 2){
        // Call the logIfIntersectingCircle function and log the result
        const res = logIfIntersectingCircle(); 
        console.log("Intersecting = ", res);
    }
});
