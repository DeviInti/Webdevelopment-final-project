const healthData = [
  {
    tip: "Start your day with 5 minutes of mindful breathing.",
    image: "https://images.unsplash.com/photo-1588776814546-ec1d63ec7b3d?auto=format&fit=crop&w=600&q=80"
  },
  {
    tip: "Drink warm water with lemon to boost digestion.",
    image: "https://images.unsplash.com/photo-1607344644073-bd1bce2c3831?auto=format&fit=crop&w=600&q=80"
  },
  {
    tip: "Take short breaks from screens to relax your eyes.",
    image: "https://images.unsplash.com/photo-1597764699511-e1c3bb39d044?auto=format&fit=crop&w=600&q=80"
  },
  {
    tip: "Include more fruits and greens in your meals.",
    image: "https://images.unsplash.com/photo-1584270354949-1fe2a7b0d57b?auto=format&fit=crop&w=600&q=80"
  },
  {
    tip: "Stretch your body for 10 minutes every morning.",
    image: "https://images.unsplash.com/photo-1571019613934-1597e03e7f89?auto=format&fit=crop&w=600&q=80"
  }
];

const peaceQuotes = [
  "Peace begins with a smile. — Mother Teresa",
  "Do not let the behavior of others destroy your inner peace. — Dalai Lama",
  "Within you, there is a stillness and a sanctuary. — Hermann Hesse",
  "The life of inner peace is a gentle joy radiating outward. — Buddha",
  "Your calm mind is the ultimate weapon against challenges. — Bryant McGill"
];

window.onload = () => {
  const tipsContainer = document.getElementById("tipsContainer");
  healthData.forEach(item => {
    const card = document.createElement("div");
    card.className = "tip-card";
    card.innerHTML = `
      <img src="${item.image}" alt="Health Tip Image" loading="lazy" />
      <p>${item.tip}</p>
    `;
    tipsContainer.appendChild(card);
  });

  newQuote(); // Initial quote
};

function newQuote() {
  const random = Math.floor(Math.random() * peaceQuotes.length);
  document.getElementById("quoteBox").textContent = peaceQuotes[random];
}
