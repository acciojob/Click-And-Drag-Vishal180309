// Your code here.
// Get all cube elements
const cubes = document.querySelectorAll('.cube');

// Define the container boundaries
const container = document.querySelector('.container');
const containerRect = container.getBoundingClientRect();

// Function to handle mouse down event
function handleMouseDown(event) {
    // Get the cube element
    const cube = event.target;

    // Set the cube's initial position
    const initialX = event.clientX;
    const initialY = event.clientY;
    const cubeRect = cube.getBoundingClientRect();

    // Function to handle mouse move event
    function handleMouseMove(event) {
        // Calculate the new cube position
        const newX = initialX + event.clientX - cubeRect.left;
        const newY = initialY + event.clientY - cubeRect.top;

        // Update the cube's position
        cube.style.top = `${newY}px`;
        cube.style.left = `${newX}px`;

        // Check if the cube is within the container boundaries
        if (newX < containerRect.left) {
            cube.style.left = `${containerRect.left}px`;
        } else if (newX + cubeRect.width > containerRect.right) {
            cube.style.left = `${containerRect.right - cubeRect.width}px`;
        }

        if (newY < containerRect.top) {
            cube.style.top = `${containerRect.top}px`;
        } else if (newY + cubeRect.height > containerRect.bottom) {
            cube.style.top = `${containerRect.bottom - cubeRect.height}px`;
        }
    }

    // Function to handle mouse up event
    function handleMouseUp() {
        // Remove event listeners
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    }

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
}

// Add event listeners to each cube
cubes.forEach((cube) => {
    cube.addEventListener('mousedown', handleMouseDown);
});
