class TopMenu extends HTMLElement {
  connectedCallback() {
    this.render();
    this.attachEvents();
  }

  static get observedAttributes() {
    return ['current'];
  }

  attributeChangedCallback() {
    this.render();
    this.attachEvents();
  }

  attachEvents() {
    const buttons = this.querySelectorAll('[data-target]');
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        this.dispatchEvent(
          new CustomEvent('navigate', {
            detail: { section: button.dataset.target },
            bubbles: true,
            composed: true
          })
        );
      });
    });
  }

  render() {
    const current = this.getAttribute('current') || 'inicio';

    this.innerHTML = `
      <header class="top-menu">
        <div class="brand">Para churitos en glaciar</div>
        <nav class="nav-links" aria-label="Menu principal">
          <button class="nav-btn ${current === 'inicio' ? 'active' : ''}" data-target="inicio">Inicio</button>
          <button class="nav-btn ${current === 'mensajes' ? 'active' : ''}" data-target="mensajes">Mensajes</button>
          <button class="nav-btn ${current === 'sorpresa' ? 'active' : ''}" data-target="sorpresa">Sorpresa</button>
        </nav>
      </header>
    `;
  }
}

customElements.define('top-menu', TopMenu);
