// Select main content
const main = document.getElementById("mainContent");

//
// ---- Create .bg section ----
//
const bgDiv = document.createElement("div");
bgDiv.className = "bg";

const bgText = document.createElement("div");
bgText.className = "bg-text";
bgText.textContent = "Pros are made when nobody is watching! Register for winter camps today!";

bgDiv.appendChild(bgText);
main.appendChild(bgDiv);

//
// ---- Create flex section ----
//
const flexSection = document.createElement("section");
flexSection.className = "flex-section";

const flexContainer = document.createElement("div");
flexContainer.className = "flex-container";

//
// Helper function to create flex items
//
function createFlexItem(imgSrc, imgAlt, title, text) {
  const flexItem = document.createElement("div");
  flexItem.className = "flex-item";

  const image = document.createElement("img");
  image.src = imgSrc;
  image.alt = imgAlt;
  image.className = "flex-image";

  const flexText = document.createElement("div");
  flexText.className = "flex-text";

  const heading = document.createElement("h2");
  heading.textContent = title;

  const paragraph = document.createElement("p");
  paragraph.textContent = text;

  flexText.appendChild(heading);
  flexText.appendChild(paragraph);
  flexItem.appendChild(image);
  flexItem.appendChild(flexText);

  return flexItem;
}

//
// Add all three flex items
//
flexContainer.appendChild(
  createFlexItem(
    "images/privatelessons.png",
    "private baseball lessons",
    "Private Baseball Lessons",
    "DC Dynasty offers individual instruction, small group lessons, and team training for ages 7–18."
  )
);

flexContainer.appendChild(
  createFlexItem(
    "images/metrics.png",
    "player metrics display",
    "DC Dynasty Player Metrics",
    "We track pitching velocity, hitting exit speed, sprint times, and more to monitor development."
  )
);

flexContainer.appendChild(
  createFlexItem(
    "images/summerteam.png",
    "gold summer travel team",
    "Gold Summer Team Information",
    "Competitive summer travel teams 13U–18U with professional coaching and national tournaments."
  )
);

flexSection.appendChild(flexContainer);
main.appendChild(flexSection);