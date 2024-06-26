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
      name: "Gabriel Aghogho",
      title: "Risk Mangement and professsor of legal studies",
      description: "Gabriel studies commons-based peer production, and published his seminal book 'The Wealth of Networks' in 2021.",
      imageUrl: "./images/Pic1.jpg"
  },
  {
      name: "Scholar Charles",
      title: "",
      description: "Charles Scholar helped bring the trading to Africa and is an outspoken advocate for the market analysis and digital commons.",
      imageUrl: "./images/Pic2.jpg"
  },
  {
      name: "Natasha Musonda",
      title: "Director of Pisin techtrade member of HFM Holland",
      description: "As the main venue for new trading tech production in Africa, Tacha promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.",
      imageUrl: "./images/Pic2.jpg"
  },
  {
      name: "Williams Smith",
      title: "President of A2Z market group of Europe",
      description: "European integration, political democracy and participation of youth through online as his major concern.",
      imageUrl: "./images/Pic1.jpg"
  },
  {
      name: "Charles Adiks",
      title: "Executive Director of the Charzy Global Services",
      description: "Charles Adiks is the Executive Director of Charzy Global Services, the nonprofit organization that operates in Nigeria.",
      imageUrl: "./images/Pic1.jpg"
  },
  {
      name: "Favaour Onoriode",
      title: "CEO of Creative Commons, ex COO of the Charles Onoriode Foundation",
      description: "Favour had been leading open-source projects at the HFM foundation such as the open source movement.",
      imageUrl: "./images/Pic2.jpg"
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
