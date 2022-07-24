const countCategoriesElement =
  document.querySelector("#categories").children.length;

console.log(`Number of categories:`, countCategoriesElement);

const countElements = document.querySelectorAll(".item");

countElements.forEach((countElements) =>
  console.log(
    `Category: ${countElements.firstElementChild.textContent}  Elements: ${countElements.lastElementChild.children.length}`
  )
);
