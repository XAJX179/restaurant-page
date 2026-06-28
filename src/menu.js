function createMenuPage() {
  const main = document.querySelector('#content')

  const h1 = document.createElement('h1');
  main.append(h1)

  const beverages = document.createElement('section')
  const beveragesHeading = document.createElement('h2')
  const beveragesList = document.createElement('ul')

  const drinks = ["Orange Juice", "Lemon Juice"]
  drinks.forEach((drink) => {
    let beveragesListItem = document.createElement('li');
    beveragesListItem.textContent = drink + ": 5$"
    beveragesList.append(beveragesListItem);
  })
  beverages.append(beveragesHeading)
  beverages.append(beveragesList)
  main.append(beverages)


  const sideDish = document.createElement('section')
  const sideDishHeading = document.createElement('h2')
  const sideDishList = document.createElement('ul')

  const sideDishes = ["Orange pasta", "Lemon rice"]
  sideDishes.forEach((dish) => {
    let sideDishListItem = document.createElement('li');
    sideDishListItem.textContent = dish + ": 10$"
    sideDishList.append(sideDishListItem);
  })
  sideDish.append(sideDishHeading)
  sideDish.append(sideDishList)
  main.append(sideDish)

  const mainDish = document.createElement('section')
  const mainDishHeading = document.createElement('h2')
  const mainDishList = document.createElement('ul')

  const mainDishes = ["Pineapple Pizza with Ketchup", "Sweet Potato"]
  mainDishes.forEach((dish) => {
    let mainDishListItem = document.createElement('li');
    mainDishListItem.textContent = dish + ": 25$"
    mainDishList.append(mainDishListItem);
  })
  mainDish.append(mainDishHeading)
  mainDish.append(mainDishList)
  main.append(mainDish)

  h1.textContent = "Menu"
  beveragesHeading.textContent = "Beverages"
  sideDishHeading.textContent = "Side Dish"
  mainDishHeading.textContent = "Main Dish"


}

export { createMenuPage }
