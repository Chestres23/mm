class HomeSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="section home-section">
        <div class="hero-card">
          <p class="eyebrow">8 de Marzo</p>
          <h1>Feliz Dia de la Mujer</h1>
          <p>
            Admiro tu fuerza, valentia, determinacion, tu ternura y esa luz tan bonita que llevas dentro, gracias por tu lucha diaria, por tus sueños y por todo lo que aportas.
          </p>
          <div class="hero-actions">
            <button class="cta" data-go="mensajes">Ver mensajes</button>
            <button class="ghost" data-go="sorpresa">Ir a sorpresa</button>
          </div>
        </div>
      </section>
    `;

    this.querySelectorAll('[data-go]').forEach((button) => {
      button.addEventListener('click', () => {
        this.dispatchEvent(
          new CustomEvent('navigate', {
            detail: { section: button.dataset.go },
            bubbles: true,
            composed: true
          })
        );
      });
    });
  }
}

customElements.define('home-section', HomeSection);
