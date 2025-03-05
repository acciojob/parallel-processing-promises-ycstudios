const imageUrls = [
  'https://via.placeholder.com/150/92c952',
  'https://via.placeholder.com/150/771796',
  'https://via.placeholder.com/150/24f355'
];

function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image from ${url}`));
  });
}

function downloadImages(imageUrls) {
  const loadingDiv = document.getElementById('loading');
  const outputDiv = document.getElementById('output');
  const errorDiv = document.getElementById('error');

  loadingDiv.style.display = 'block'; //
  
  // Clear previous content
  outputDiv.innerHTML = '';
  errorDiv.innerHTML = '';

  // Start downloading images
  Promise.all(imageUrls.map(url => downloadImage(url)))
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
}

// Trigger the image download
downloadImages(imageUrls);
