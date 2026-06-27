function createHomepage() {
  const main = document.querySelector('#content')

  const h1 = document.createElement('h1');
  main.append(h1)

  const review = document.createElement('div')
  const quote = document.createElement('blockquote')
  const quotePara = document.createElement('p')
  const author = document.createElement('p')
  const cite = document.createElement('cite')
  quote.append(quotePara)
  review.append(quote)
  review.append(author)
  main.append(review)

  const hours = document.createElement('section')
  const hoursHeading = document.createElement('h2')
  const hoursList = document.createElement('ul')

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  daysOfWeek.forEach((day) => {
    let hoursListItem = document.createElement('li');
    hoursListItem.textContent = day + (day == "Saturday" ? ": 5pm - 9pm" : ": closed");
    hoursList.append(hoursListItem);
  })
  hours.append(hoursHeading)
  hours.append(hoursList)
  main.append(hours)

  const location = document.createElement('section')
  const locationHeading = document.createElement('h2')
  const locationPara = document.createElement('p')
  location.append(locationHeading);
  location.append(locationPara);
  main.append(location)

  h1.textContent = "!Delight Restauraunt"
  quote.setAttribute('cite', 'https://www.donotclickrandomlinks.advice')
  quotePara.textContent = "They are proud to be the worst restauraunt ever! so bad i don't even wanna write anything more about it, just sucks!"
  cite.textContent = "Brave to choose us list."
  author.textContent = "—Baldous Muxley, "
  author.append(cite)

  hoursHeading.textContent = "Hours"
  locationHeading.textContent = "Location"
  locationPara.textContent = "24th Don't ping me street, Neverseen Valley"
}

export { createHomepage }
