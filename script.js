// ---------- Clock + greeting ----------
const timeEl = document.getElementById("clock-time");
const dateEL = document.getElementById("clock-date");
const greetEl = document.getElementById("greeting");

function updateClock() {
    const now = new Date();

    timeEl.textContent = now.toLocaleTimeString("en-GB", { hour12: false });
    // Want 12 hour format? Use: now.toLocaleTimeString("en-GB")

    dateEL.textContent = now.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const h = now.getHours();
    greetEl.textContent =
      h < 5 ? "Burning the midnight oil" :
      h < 12 ? "Good morning" :
      h < 17 ? "Good afternoon" :
      h < 21 ? "Good evening" : "Good night";
}

updateClock();
setInterval(updateClock, 1000);

// ---------- Wallpaper from local storage ----------
const wallpaperEl = document.getElementById("wallpaper");
const inputEl = document.getElementById("wallpaper-input");
const resetBtn = document.getElementById("wallpaper-reset");
const KEY = "homepage-wallpaper";

function applyWallpaper(dataUrl) {
    wallpaperEl.style.backgroundImage = `url("${dataUrl}")`;
    wallpaperEl.classList.add("active");
}

// Load a saved wallpaper on startup
const saved = localStorage.getItem(KEY);
if (saved) applyWallpaper(saved);

inputEl.addEventListener("change", () => {
    const file = inputEl.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
        //Shrink the image first so it fits in localStorage (about 5 MB limit)
        const img = new Image();
        img.onload = () => {
            const maxW = 1920;
            const scale = Math.min(1, maxW / img.width);
            const canvas = document.createElement("canvas");
            canvas.width = img.width * scale;
            canvas.height = img.height * scale;
            canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);

            const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
            try {
                localStorage.setItem(KEY, dataUrl);
            } catch (e) {
                alert("That image is too large to save. Try a smaller one.");
                return;
            }
            applyWallpaper(dataUrl);
        };
        img.src = reader.result;
    };
    reader.readAsDataURL(file);
});

resetBtn.addEventListener("click", () => {
    localStorage.removeItem(KEY);
    wallpaperEl.classList.remove("active");
    inputEl.value = "";
});