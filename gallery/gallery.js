const imageList = [{ src: "gallery/art/Image_1.jpg", alt: "image" }, { src: "gallery/art/Image_2", alt: "image" }, { src: "gallery//Image_3", alt: "image" }, { src: "gallery//Image_4", alt: "image" }, { src: "gallery/art/Image_5", alt: "image" }, { src: "gallery/art/Image_6", alt: "image" },];
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