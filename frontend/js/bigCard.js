export function bigCard(containerID) {
  
  const items = [
    {title: 'Big Card Title 1', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio officia minima modi eum debitis quos dolor nam, dolorem ullam fugiat.'},
    {title: 'Big Card Title 2', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio officia minima modi eum debitis quos dolor nam, dolorem ullam fugiat.'}
  ]

  const template = document.querySelector('.big-card-template')
  const container = document.querySelector(`#${containerID}`)

  const renderItem = (data) => {

    const clone = template.content.cloneNode(true);

    clone.querySelector(".big-card__title").textContent = data.title;
    clone.querySelector(".big-card__description").textContent = data.description;

    container.appendChild(clone)
  }

  items.forEach(renderItem)
}