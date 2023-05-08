class Cardnews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement('div');
    componentRoot.setAttribute('class', 'card');

    const cardLeft = document.createElement('div');
    cardLeft.setAttribute('class', 'card__left');

    const author = document.createElement('span');
    author.textContent = 'By ' + (this.getAttribute('author') || 'Anonymous');

    const linkTitle = document.createElement('a');
    linkTitle.textContent = this.getAttribute('title');
    linkTitle.href = this.getAttribute('link-url');

    const newsContent = document.createElement('p');
    newsContent.textContent = this.getAttribute('content');

    cardLeft.appendChild(author);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement('div');
    cardRight.setAttribute('class', 'card__right');

    const newsImage = document.createElement('img');
    newsImage.src = this.getAttribute('photo') || 'assets/img/Group310.png';
    newsImage.alt = 'Foto da Notícia';
    cardRight.appendChild(newsImage);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);
    return componentRoot;
  }

  styles() {
    const style = document.createElement('style');
    style.textContent = `
    .card {
      margin: 20px;
      width: 650px;
      /* border: 1px solid gray; */
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      box-shadow: 11px 8px 12px -8px rgba(255, 0, 0, 1);
    }
    .card__left .card__right {
      border: 1px solid blue;
    }
    .card__left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 10px;
      color: #fff;
      /* margin-right: 4px; */
    }
    .card__left > h1 {
      margin-top: 15px;
      font-size: 25px;
    }
    .card__left > p {
      color: gray;
    }
    .card__left > span {
      font-weight: 400;
    }
    .card__left > a {
      text-decoration: none;
      font-size: 25px;
      color: #fff;
      font-weight: bold;
    }
    
    img {
      width: 155px;
      height: 155px;
    }
    
    `;
    return style;
  }
}
customElements.define('card-news', Cardnews);
