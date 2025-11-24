// Defensive Metrics Data
const players = [
    {position: "Catcher", fieldingMechanics:3, armStrength:2, athleticism:2, throwingVelocity:40.23},
    {position: "Shortstop", fieldingMechanics:3, armStrength:2, athleticism:3, throwingVelocity:41.23},
    {position: "Pitcher", fieldingMechanics:3, armStrength:2, athleticism:4, throwingVelocity:40.99},
    {position: "Left Field", fieldingMechanics:5, armStrength:5, athleticism:5, throwingVelocity:56.3},
    {position: "Catcher", fieldingMechanics:3, armStrength:5, athleticism:4, throwingVelocity:52},
    {position: "Center Field", fieldingMechanics:1, armStrength:1, athleticism:2, throwingVelocity:32.34},
    {position: "Right Field", fieldingMechanics:1, armStrength:4, athleticism:3, throwingVelocity:49.76},
    {position: "Third Base", fieldingMechanics:4, armStrength:5, athleticism:5, throwingVelocity:57.87},
    {position: "Shortstop", fieldingMechanics:5, armStrength:2, athleticism:4, throwingVelocity:41.76},
    {position: "First Base", fieldingMechanics:3, armStrength:5, athleticism:5, throwingVelocity:62.21},
    {position: "Second Base", fieldingMechanics:4, armStrength:2, athleticism:5, throwingVelocity:41.89},
    {position: "Left Field", fieldingMechanics:5, armStrength:2, athleticism:5, throwingVelocity:51.78},
    {position: "Pitcher", fieldingMechanics:3, armStrength:5, athleticism:4, throwingVelocity:71.76},
    {position: "Third Base", fieldingMechanics:4, armStrength:2, athleticism:3, throwingVelocity:53.45},
    {position: "Catcher", fieldingMechanics:1, armStrength:3, athleticism:2, throwingVelocity:74.6},
    {position: "Center Field", fieldingMechanics:4, armStrength:5, athleticism:5, throwingVelocity:84.97},
    {position: "Right Field", fieldingMechanics:2, armStrength:3, athleticism:2, throwingVelocity:72.87},
    {position: "First Base", fieldingMechanics:3, armStrength:5, athleticism:4, throwingVelocity:94.8},
    {position: "Shortstop", fieldingMechanics:2, armStrength:5, athleticism:3, throwingVelocity:93.32},
    {position: "Second Base", fieldingMechanics:5, armStrength:5, athleticism:5, throwingVelocity:96.76},
];

// Utility function to calculate average
function average(array) {
    return array.reduce((sum, val) => sum + val, 0) / array.length;
}

// Get unique positions
const positions = [...new Set(players.map(p => p.position))];

// Compute averages per position
function getAvgByPosition(metric) {
    return positions.map(pos => {
        const vals = players.filter(p => p.position === pos).map(p => p[metric]);
        return average(vals);
    });
}

const fieldingMechanicsData = getAvgByPosition("fieldingMechanics");
const fieldingArmStrengthData = getAvgByPosition("armStrength");
const athleticismData = getAvgByPosition("athleticism");
const throwingVelocityData = getAvgByPosition("throwingVelocity");

// Chart configuration helper
function createChart(canvasId, label, data) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: positions,
            datasets: [{
                label: label,
                data: data,
                backgroundColor: 'rgba(255, 76, 42, 0.7)',
                borderColor: 'rgba(255, 76, 42, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: true },
                tooltip: { enabled: true }
            },
            scales: { y: { beginAtZero: true } }
        }
    });
}

// Wait until DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    createChart('fieldingMechanicsChart', 'Avg Fielding Mechanics', fieldingMechanicsData);
    createChart('fieldingArmStrengthChart', 'Avg Fielding Arm Strength', fieldingArmStrengthData);
    createChart('athleticismChart', 'Avg Athleticism', athleticismData);
    createChart('throwingVelocityChart', 'Avg Throwing Velocity', throwingVelocityData);
});