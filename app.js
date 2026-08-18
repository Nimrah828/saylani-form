const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(item => item.classList.remove("active"));
    tab.classList.add("active");

    const tabName = tab.dataset.tab;

    if (tabName !== "registration") {
      alert(tab.textContent.trim() + " section selected.");
    }
  });
});

// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// App popup
const appPopup = document.getElementById("appPopup");
const popupClose = document.getElementById("popupClose");
const playBtn = document.getElementById("playBtn");

popupClose.addEventListener("click", () => {
  appPopup.style.display = "none";
});

playBtn.addEventListener("click", () => {
  alert("Google Play button clicked.");
});

// Chat
const chatBtn = document.getElementById("chatBtn");
const chatPanel = document.getElementById("chatPanel");
const panelClose = document.getElementById("panelClose");
const chatClose = document.getElementById("chatClose");
const chatMessage = document.getElementById("chatMessage");

chatBtn.addEventListener("click", () => {
  chatPanel.classList.toggle("open");
  chatMessage.style.display = "none";
});

panelClose.addEventListener("click", () => {
  chatPanel.classList.remove("open");
});

chatClose.addEventListener("click", () => {
  chatMessage.style.display = "none";
});

// Form validation
const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const country = document.getElementById("country").value;
  const city = document.getElementById("city").value;
  const course = document.getElementById("course").value;
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!country || !city || !course || !name || !email) {
    alert("Please fill in all required fields.");
    return;
  }

  alert("Registration submitted successfully!");
  form.reset();
});

// Simple city update based on country
const country = document.getElementById("country");
const city = document.getElementById("city");

country.addEventListener("change", () => {
  city.innerHTML = '<option value="">Select city</option>';

  const cities = {
    "Pakistan": ["Karachi", "Lahore", "Islamabad", "Hyderabad", "Faisalabad"],
    "United Arab Emirates": ["Dubai", "Abu Dhabi", "Sharjah"],
    "Saudi Arabia": ["Riyadh", "Jeddah", "Dammam"],
    "United Kingdom": ["London", "Birmingham", "Manchester"]
  };

  if (cities[country.value]) {
    cities[country.value].forEach(item => {
      const option = document.createElement("option");
      option.value = item;
      option.textContent = item;
      city.appendChild(option);
    });
  }
});


// Personal Information form
const personalForm = document.getElementById("personalForm");
const addressBox = document.getElementById("address");
const addressCounter = document.getElementById("addressCounter");

if (addressBox && addressCounter) {
  addressBox.addEventListener("input", () => {
    addressCounter.textContent = addressBox.value.length;
  });
}

if (personalForm) {
  personalForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (addressBox.value.trim().length < 10) {
      alert("Address must contain at least 10 characters.");
      addressBox.focus();
      return;
    }

    alert("Personal information saved successfully!");
  });
}

// Picture upload
const picture = document.getElementById("picture");
const fileName = document.getElementById("fileName");

picture.addEventListener("change", () => {
  if (!picture.files.length) {
    fileName.textContent = "";
    return;
  }

  const file = picture.files[0];
  const maxSize = 1024 * 1024;

  if (file.size > maxSize) {
    alert("Please select an image smaller than 1MB.");
    picture.value = "";
    fileName.textContent = "";
    return;
  }

  fileName.textContent = "Selected: " + file.name;
});

// Form validation
const educationForm = document.getElementById("educationForm");

educationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const terms = document.querySelectorAll(
    '.check-row input[type="checkbox"]'
  );

  const allChecked = [...terms].every(box => box.checked);

  if (!allChecked) {
    alert("Please accept all Terms and Conditions.");
    return;
  }

  if (!picture.files.length) {
    alert("Please upload your picture.");
    return;
  }

  alert("Education & Technical Details submitted successfully!");
});
