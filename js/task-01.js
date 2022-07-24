const listOfCat = document.querySelectorAll("li.item");
console.log(`Number of categories: ${listOfCat.length}`);

const catNameElement = () => {
  listOfCat.forEach((element) =>
    console.log(
      `Category: ${element.querySelector("h2").textContent}
Elements: ${element.querySelectorAll("li").length}`
    )
  );
};
catNameElement();
