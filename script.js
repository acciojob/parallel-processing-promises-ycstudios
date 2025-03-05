const images = [
    { url: "https://picsum.photos/id/237/200/300" },
    { url: "https://picsum.photos/id/238/200/300" },
    { url: "https://picsum.photos/id/239/200/300" },
];

function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image from ${url}`));
  });
}

function downloadImages(images) {
  const loadingDiv = document.getElementById('loading');
  const outputDiv = document.getElementById('output');
  const errorDiv = document.getElementById('error');

  loadingDiv.style.display = 'block'; // Show loading spinner
  
  // Clear previous content
  outputDiv.innerHTML = '';
  errorDiv.innerHTML = '';

  // Start downloading images
  Promise.all(images.map(image => downloadImage(image.url))) // Use image.url here
    .then(images => {
      loadingDiv.style.display = 'none'; // Hide loading spinner
      
      // Append each image to the output div
      images.forEach(img => {
        outputDiv.appendChild(img);
      });
    })
    .catch(error => {
      loadingDiv.style.display = 'none'; 
      errorDiv.innerHTML = `Error: ${error.message}`; 
    });
}

// Trigger the image download
downloadImages(images);
