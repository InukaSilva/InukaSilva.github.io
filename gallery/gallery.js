const imageList = [
{ src: "art/Image_1.jpg", alt: "image"}, 
{ src: "art/Image_2.jpg", alt: "image" }, 
{ src: "art/Image_3.jpg", alt: "image" }, 
{ src: "art/Image_4.jpg", alt: "image" },
{ src: "art/Image_5.jpg", alt: "image" }, 
{ src: "art/Image_6.jpg", alt: "image" },];

const row = document.querySelector(".row");
for (let i = 0; i < 3; i++) {
  const column = document.createElement("div");
  column.classList.add("column");
  row.appendChild(column);
}

// Distribute images into the columns
for (let index = 0; index < imageList.length; index++) {
  const columnIndex = index % 3;
  const column = document.querySelectorAll(".column")[columnIndex];

  const a = document.createElement("a");
  a.href = imageList[index].src; // Set the href to the image URL

  const img = document.createElement("img");
  img.src = imageList[index].src;
  img.alt = imageList[index].alt;
  img.loading = "lazy";

  // Add the click event to open the lightbox
  img.addEventListener("click", () => {
    lightbox.innerHTML = `<img src="${imageList[index].src}" alt="${imageList[index].alt}" loading="lazy">`;
    lightbox.style.display = "block";
  });

  a.appendChild(img); // Wrap the image with the <a> element
  column.appendChild(a); // Add the <a> element to the column
}

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});