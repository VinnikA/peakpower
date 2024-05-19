export function smallCard(containerID) {
  
  const items = [
    {title: 'Small Card Title 1', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio officia minima modi eum debitis quos dolor nam, dolorem ullam fugiat.'},
    {title: 'Small Card Title 2', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio officia minima modi eum debitis quos dolor nam, dolorem ullam fugiat.'},
    {title: 'Small Card Title 3', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio officia minima modi eum debitis quos dolor nam, dolorem ullam fugiat.'},
    {title: 'Small Card Title 4', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio officia minima modi eum debitis quos dolor nam, dolorem ullam fugiat.'}
  ]

  const template = document.querySelector('.small-card-template')
  const container = document.querySelector(`#${containerID}`)

  const renderItem = (data) => {

    const clone = template.content.cloneNode(true);

    clone.querySelector(".small-card__title").textContent = data.title;

    container.appendChild(clone)
  }

  items.forEach(renderItem)
}