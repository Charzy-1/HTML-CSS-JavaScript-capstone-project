const hamburger = document.querySelector('.hamburger');
const navmenu = document.querySelector('.navMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navmenu.classList.toggle('active');
});

document.querySelectorAll('.navLink').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navmenu.classList.remove('active');
}));

// Array of speaker objects
const speakers = [
  {
      name: "Yochai Benkler",
      title: "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
      description: "Benkler studies commons-based peer production, and published his seminal book 'The Wealth of Networks' in 2006.",
      imageUrl: "./images/Pic1.jpg"
  },
  {
      name: "Kilnam Chon",
      title: "",
      description: "Kilnam Chon helped bring the Internet to Asia and is an outspoken advocate for the open web and digital commons.",
      imageUrl: "./images/Pic2.jpg"
  },
  {
      name: "SohYeong Noh",
      title: "Director of Art Centre Nabi and a board member of CC Korea",
      description: "As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.",
      imageUrl: "./images/Pic3.jpg"
  },
  {
      name: "Julia Leda",
      title: "President of Young Pirates of Europe",
      description: "European integration, political democracy and participation of youth through online as her major concern.",
      imageUrl: "./images/Pic4.jpg"
  },
  {
      name: "Lila Tretikov",
      title: "Executive Director of the Wikimedia Foundation",
      description: "Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia.",
      imageUrl: "./images/Pic5.jpg"
  },
  {
      name: "Ryan Merkley",
      title: "CEO of Creative Commons, ex COO of the Mozilla Foundation",
      description: "Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.",
      imageUrl: "./images/Pic6.jpg"
  }
];

// Function to create speaker HTML
function createSpeakerHTML(speaker) {
  return `
      <div class="speaker">
          <img src="${speaker.imageUrl}" alt="${speaker.name}">
          <div>
              <h3>${speaker.name}</h3>
              <h4>${speaker.title}</h4>
              <p>${speaker.description}</p>
          </div>
      </div>
  `;
}

// Function to render speakers using a for loop
function renderSpeakers() {
  const speakersContainer = document.getElementById('speakers');
  let speakersHTML = '';
  
  for (let i = 0; i < speakers.length; i++) {
      speakersHTML += createSpeakerHTML(speakers[i]);
  }
  
  speakersContainer.innerHTML = speakersHTML;
}

// Call the render function when the page loads
window.onload = renderSpeakers;
