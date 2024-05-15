// Object to store animation paths for different sports
var animations = {
    "Running": "running-animation.json",
    "Cycling": "cycling-animation.json",
    // Add more sports and their animation paths here
    "Swimming": "swimming-animation.json",
    "Football": "football-animation.json"
    // Add more sports as needed
};

// Object to store loaded animations
var loadedAnimations = {};

// Load animations for each sport
for (var sport in animations) {
    if (animations.hasOwnProperty(sport)) {
        var animationContainer = document.createElement('div');
        animationContainer.className = "animation-container";
        animationContainer.id = sport.toLowerCase().replace(/\s/g, '-') + "-animation";
        document.getElementById("icons-container").appendChild(animationContainer);

        var animation = bodymovin.loadAnimation({
            container: animationContainer,
            renderer: 'svg',
            loop: true,
            autoplay: false,
            path: animations[sport] // Path to Lottie animation JSON file for the sport
        });

        // Style animations to be smaller in size
        animationContainer.style.width = "300px";
        animationContainer.style.height = "100px";
        animationContainer.style.margin = "10px";

        // Store loaded animation
        loadedAnimations[sport] = animation;
    }
}

function generateSports() {
    var sports = Object.keys(animations);
    var randomSport = sports[Math.floor(Math.random() * sports.length)];
    document.getElementById("result").innerText = "You should try " + randomSport + "!";

    // Play the animation for the randomly generated sport
    for (var sport in loadedAnimations) {
        if (loadedAnimations.hasOwnProperty(sport)) {
            if (sport === randomSport) {
                loadedAnimations[sport].play();
            } else {
                loadedAnimations[sport].stop();
            }
        }
    }
}
