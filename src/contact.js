function createContactPage() {
  const main = document.querySelector('#content')

  const h1 = document.createElement('h1');
  main.append(h1)

  const contactCard = document.createElement('section')
  const contactCardHeading = document.createElement('h2')
  const contactPara = document.createElement('p')
  const contactAddress = document.createElement('address')
  const contactAddressLink = document.createElement('a')
  contactAddress.append(contactAddressLink)
  contactCard.append(contactCardHeading)
  contactCard.append(contactPara)
  contactCard.append(contactAddress)
  main.append(contactCard)

  h1.textContent = "Contact Us"
  contactCardHeading.textContent = "The One Punch Woman"
  contactPara.textContent = "We take feedback very seriously, welcome to complain if you wanna get punched "
  contactAddress.setAttribute('href', 'tel:+14155550132')
  contactAddress.textContent = "+1 (415) 555‑0132"
}

export { createContactPage }
