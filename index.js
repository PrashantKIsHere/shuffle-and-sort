const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const squares = document.getElementById("square-list");

const renderSqaures = (numbers = numberArray) => {
    console.log(numberArray)
  let squareItems = "";
  numbers.forEach(
    (number) =>
      (squareItems += `<div class="square-list__item" data-number=${number}>${number}</div>`)
  );
  squares.innerHTML = squareItems;
};

renderSqaures();

const shuffle = (array = []) => {
  for (let currentIndex = array.length - 1; currentIndex > 0; currentIndex--) {
    const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};

const onShuffleClick = () => renderSqaures(shuffle([...numberArray]))

const onSortClick = () => renderSqaures()