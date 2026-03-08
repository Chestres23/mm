class WomensDayApp extends HTMLElement {
  constructor() {
    super();
    this.currentSection = 'inicio';
  }

  connectedCallback() {
    this.render();
    this.attachEvents();
  }

  attachEvents() {
    this.querySelector('top-menu')?.addEventListener('navigate', (event) => {
      this.currentSection = event.detail.section;
      this.render();
      this.attachEvents();
    });

    this.querySelector('.content')?.addEventListener('navigate', (event) => {
      this.currentSection = event.detail.section;
      this.render();
      this.attachEvents();
    });
  }

  currentView() {
    if (this.currentSection === 'mensajes') return '<messages-section></messages-section>';
    if (this.currentSection === 'sorpresa') return '<surprise-section></surprise-section>';
    return '<home-section></home-section>';
  }

  render() {
    this.innerHTML = `
      <div class="bg-orb orb-1" aria-hidden="true"></div>
      <div class="bg-orb orb-2" aria-hidden="true"></div>
      <div class="bg-orb orb-3" aria-hidden="true"></div>

      <main class="app-shell">
        <top-menu current="${this.currentSection}"></top-menu>
        <section class="content">${this.currentView()}</section>
        <footer class="site-footer">Con mucho cariño de Christian - 2026</footer>
      </main>
    `;
  }
}

customElements.define('womens-day-app', WomensDayApp);
