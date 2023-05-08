class DinamicTitle extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    //base <h1>Monique</h1>
    const componentRoot = document.createElement('h1');
    // componentRoot.textContent = 'Monique';
    componentRoot.textContent = this.getAttribute('title');
    //style
    const style = document.createElement('style');
    style.textContent = `
      h1 {
        color: red;
      }
      `;
    //send to shadow
    shadow.appendChild(componentRoot);
    shadow.appendChild(style);
  }
}

customElements.define('dinamic-title', DinamicTitle);
