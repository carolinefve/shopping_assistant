// Upload Image

document.addEventListener("DOMContentLoaded", function () {
  const personalImagePlaceholder = document.getElementById(
    "personal-image-placeholder"
  );
  const imageUploadInput = document.getElementById("image-upload");
  const personalImageText = document.getElementById("personal-image-text");

  // 1. Listen for a click on the placeholder
  personalImagePlaceholder.addEventListener("click", function () {
    // Trigger the hidden file input's click event
    imageUploadInput.click();
  });

  // 2. Handle the file selection
  imageUploadInput.addEventListener("change", function (event) {
    const file = event.target.files[0];

    // Check if a file was selected
    if (file) {
      // Create a FileReader to read the file as a data URL
      const reader = new FileReader();

      // Set up the reader's onload event
      reader.onload = function (e) {
        // Get the data URL
        const imageDataUrl = e.target.result;

        // Create a new image element
        const img = new Image();
        img.src = imageDataUrl;
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        img.style.borderRadius = "8px";

        // Clear the placeholder text and append the new image
        personalImagePlaceholder.innerHTML = "";
        personalImagePlaceholder.appendChild(img);
      };

      // Read the selected file as a data URL
      reader.readAsDataURL(file);
    }
  });
});
