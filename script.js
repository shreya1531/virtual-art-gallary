const artworks = [
  {
    src: "art1.jpg",
    title: "The Dawn Horizon",
    artist: "Ava Turner",
    description: "A serene depiction of a new day breaking over a misty landscape. This painting symbolizes hope, transition, and renewal. The soft pastel colors reflect the calm and potential of a new beginning."
  },
  {
    src: "art2.jpg",
    title: "Reflection of Dreams",
    artist: "Liam Scott",
    description: "Blending surrealism with abstract forms, this piece explores the fragile nature of memory and dreams. Clouds, mirrors, and a drifting figure illustrate subconscious wanderings."
  },
  {
    src: "art3.jpg",
    title: "Colors of the Mind",
    artist: "Noah Gray",
    description: "This expressive abstract artwork visualizes emotional energy through vibrant splashes and brush strokes. It mirrors the complexity of human thoughts and inner emotions."
  },
  {
    src: "art4.jpg",
    title: "Urban Silence",
    artist: "Sophie Bennett",
    description: "A quiet, reflective view of an empty street at night, capturing solitude amid the chaos of urban life. Cool tones and sharp lines evoke feelings of stillness and introspection."
  },
  {
    src: "art5.jpg",
    title: "Nature’s Embrace",
    artist: "Ethan Ramirez",
    description: "Lush greens and golden light fill this forest scene, celebrating the healing connection between humans and nature. It invites viewers to pause and breathe in nature’s calm."
  },
  {
    src: "art6.jpg",
    title: "Celestial Whispers",
    artist: "Chloe Morgan",
    description: "Stars spiral into cosmic formations as celestial beings whisper secrets of the universe. This painting mixes astronomy with imagination, blurring science and art."
  },
  {
    src: "art7.jpg",
    title: "Golden Flow",
    artist: "Mason Rivera",
    description: "With rich metallic hues and flowing curves, this piece captures movement and elegance. A symbol of abundance and creative energy, it’s hypnotic in its rhythm."
  },
  {
    src: "art8.jpg",
    title: "Fractured Time",
    artist: "Isabella Hayes",
    description: "Broken clocks, shattered mirrors, and swirling skies make up this thought-provoking image about the distortion of time and memory. It's a visual representation of emotional trauma and reflection."
  },
  {
    src: "art9.jpg",
    title: "Ethereal Bloom",
    artist: "Lucas Foster",
    description: "Flowers glowing with moonlight seem to breathe on the canvas. This surreal painting romanticizes nature and expresses purity, growth, and spiritual bloom."
  },
  {
    src: "art10.jpg",
    title: "Desert Mirage",
    artist: "Ella Simmons",
    description: "Shimmering heat and illusionary reflections twist this desert landscape into a dreamscape. It reflects survival, illusion, and the beauty of harsh environments."
  },
  {
    src: "art11.jpg",
    title: "Mechanical Heart",
    artist: "Jackson Cole",
    description: "Part human, part machine – this cyberpunk-inspired piece explores emotional vulnerability in the age of artificial intelligence and cybernetics. It evokes themes of identity and digital evolution."
  },
  {
    src: "art12.jpg",
    title: "Spiritual Echo",
    artist: "Lily Parker",
    description: "This painting uses mandala patterns and golden spirals to depict spiritual awakening and the journey inward. It’s filled with calm, balance, and meditative rhythm."
  },
  {
    src: "art13.jpg",
    title: "Windows of the Soul",
    artist: "Aiden Campbell",
    description: "An intense portrait series that focuses on the subject's eyes, capturing unspoken emotions like pain, joy, and resilience. The eyes dominate the canvas, pulling the viewer into their story."
  },
  {
    src: "art14.jpg",
    title: "Melancholy Rain",
    artist: "Grace Walker",
    description: "A lonely figure under a streetlamp, surrounded by dripping raindrops and shadows. The use of light and cold color tones creates a mood of nostalgia and solitude."
  },
  {
    src: "art15.jpg",
    title: "Rise of the Phoenix",
    artist: "Henry Brooks",
    description: "Fiery feathers rise from the ashes, symbolizing rebirth and transformation. This painting is a tribute to those who rise stronger from their trials and challenges."
  },
  {
    src: "art16.jpg",
    title: "The Silent Lake",
    artist: "Emily Sanders",
    description: "Calm waters, reflection, and mist make this a painting of ultimate serenity. It evokes peace, stillness, and introspection with its minimalist palette and subtle brushwork."
  },
  {
    src: "art17.jpg",
    title: "Neon Pulse",
    artist: "Caleb Diaz",
    description: "Electric colors and neon grids recreate the heartbeat of a digital city. Inspired by nightlife and urban energy, it visualizes the hyper-connectivity of the modern world."
  },
  {
    src: "art18.jpg",
    title: "Whispers in the Woods",
    artist: "Zoe Mitchell",
    description: "A magical forest scene with glowing orbs, hidden paths, and a touch of fantasy. This painting feels like a storybook moment frozen in time, inviting viewers into an enchanted world."
  },
  {
    src: "art19.jpg",
    title: "Mirror of the Mind",
    artist: "Benjamin Hughes",
    description: "Split reflections and twisted faces in this psychological artwork explore inner turmoil, overthinking, and duality of the self. It challenges the viewer to question perception and reality."
  },
  {
    src: "art20.jpg",
    title: "Flight of Imagination",
    artist: "Madeline King",
    description: "Books, birds, and clouds intertwine in this surreal artwork symbolizing limitless imagination, freedom, and creativity unleashed. It is a tribute to daydreamers and storytellers."
  }
];
// DOM References
const galleryContainer = document.getElementById('gallery');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const popupTitle = document.getElementById('popup-title');
const popupArtist = document.getElementById('popup-artist');
const popupDescription = document.getElementById('popup-description');



// Show Popup
function showPopup(art) {
  popupImg.src = `images/${art.src}`;
  popupImg.alt = art.title;
  popupTitle.textContent = art.title;
  popupArtist.textContent = `By: ${art.artist}`;
  popupDescription.textContent = art.description;
  popup.style.display = "flex";
}

// Close Popup
function closePopup() {
  popup.style.display = "none";
}

// Build Gallery
artworks.forEach(art => {
  const artItem = document.createElement('div');
  artItem.classList.add('art-item');

  const img = document.createElement('img');
  img.src = `images/${art.src}`;
  img.alt = art.title;
  img.addEventListener('click', () => showPopup(art));

  const title = document.createElement('div');
  title.classList.add('art-title');
  title.textContent = art.title;

  artItem.appendChild(img);
  artItem.appendChild(title);
  galleryContainer.appendChild(artItem);
});



// Search Filter
function filterArtworks() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const items = document.querySelectorAll('.art-item');

  items.forEach((item, index) => {
    const matchTitle = artworks[index].title.toLowerCase().includes(input);
    const matchArtist = artworks[index].artist.toLowerCase().includes(input);
    item.style.display = (matchTitle || matchArtist) ? "block" : "none";
  });
}