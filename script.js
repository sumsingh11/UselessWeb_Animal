document.addEventListener("DOMContentLoaded", () => {
    const animalImage = document.getElementById("goatImage");
    const newAnimalButton = document.getElementById("new-animal");
    const laughSound = document.getElementById("laugh-sound");

    const sounds = [
        "sounds/1.mp3",
        "sounds/2.mp3",
        "sounds/3.mp3",
        "sounds/4.mp3",
        "sounds/5.mp3",
        "sounds/6.mp3",
        "sounds/7.mp3",
        "sounds/8.mp3",
        "sounds/9.mp3"
    ];

    const animalImageAPIs = [
        async () => {
            const res = await fetch("https://some-random-api.com/animal/dog");
            const data = await res.json();
            return data.image || data.link || data.file || "";
        },
        async () => {
            const res = await fetch("https://some-random-api.com/animal/cat");
            const data = await res.json();
            return data.image || data.link || data.file || "";
        },
        async () => {
            const res = await fetch("https://some-random-api.com/animal/panda");
            const data = await res.json();
            return data.image || data.link || data.file || "";
        },
        async () => {
            const res = await fetch("https://some-random-api.com/animal/donkey");
            const data = await res.json();
            return data.image || data.link || data.file || "";
        },
        async () => {
            const res = await fetch("https://some-random-api.com/animal/pig");
            const data = await res.json();
            return data.image || data.link || data.file || "";
        }
    ];

    async function fetchAnimal() {
        try {
            const apiIndex = Math.floor(Math.random() * animalImageAPIs.length);
            const imageUrl = await animalImageAPIs[apiIndex]();

            if (!imageUrl) {
                console.error("Failed to fetch a valid image URL. Retrying...");
                return fetchAnimal();
            }

            animalImage.src = imageUrl;
            animalImage.style.width = "800px";
            animalImage.style.height = "500px";
            animalImage.style.objectFit = "cover";
            animalImage.alt = "Random Animal";

            // Play random sound
            const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
            laughSound.src = randomSound;
            laughSound.play();
        } catch (error) {
            console.error("Error fetching animal image:", error);
        }
    }

    // Reload on image load error
    animalImage.onerror = () => {
        console.error("Image failed to load. Fetching new one...");
        fetchAnimal();
    };

    newAnimalButton.addEventListener("click", fetchAnimal);
    fetchAnimal(); // Initial fetch
});
