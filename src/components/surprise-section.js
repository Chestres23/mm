const STORAGE_KEY = 'womens-day-surprise-stats';

class SurpriseSection extends HTMLElement {
  constructor() {
    super();
    this.state = {
      sleepCount: 0,
      angryCount: 0
    };
  }

  connectedCallback() {
    this.loadState();
    this.render();
    this.attachEvents();
  }

  loadState() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;

    try {
      const parsed = JSON.parse(raw);
      this.state.sleepCount = Number(parsed.sleepCount) || 0;
      this.state.angryCount = Number(parsed.angryCount) || 0;
    } catch {
      this.state = { sleepCount: 0, angryCount: 0 };
    }
  }

  saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
  }

  updateCounter(field, delta) {
    const nextValue = Math.max(0, this.state[field] + delta);
    this.state[field] = nextValue;
    this.saveState();
    this.render();
    this.attachEvents();
  }

  resetCounters() {
    this.state = { sleepCount: 0, angryCount: 0 };
    this.saveState();
    this.render();
    this.attachEvents();
  }

  attachEvents() {
    this.querySelectorAll('[data-action]').forEach((button) => {
      button.addEventListener('click', () => {
        const action = button.dataset.action;

        if (action === 'sleep-plus') this.updateCounter('sleepCount', 1);
        if (action === 'sleep-minus') this.updateCounter('sleepCount', -1);
        if (action === 'angry-plus') this.updateCounter('angryCount', 1);
        if (action === 'angry-minus') this.updateCounter('angryCount', -1);
        if (action === 'reset') this.resetCounters();
      });
    });
  }

  render() {
    this.innerHTML = `
      <section class="section surprise-section">
        <div class="section-title-wrap">
          <p class="eyebrow">Sorpresa</p>
          <h2>Sorpresaaaa, tu contador para mi enojoncita favorita</h2>
          <p class="subtitle">
            Aqui voy anotando cuantas veces duermes y cuantas veces te enojassss.
          </p>
        </div>

        <div class="counter-grid">
          <article class="counter-card">
            <h3>Veces que duerme</h3>
            <p class="count">${this.state.sleepCount}</p>
            <div class="counter-actions">
              <button data-action="sleep-minus">-1</button>
              <button data-action="sleep-plus">+1</button>
            </div>
          </article>

          <article class="counter-card">
            <h3>Veces que se enoja</h3>
            <p class="count">${this.state.angryCount}</p>
            <div class="counter-actions">
              <button data-action="angry-minus">-1</button>
              <button data-action="angry-plus">+1</button>
            </div>
          </article>
        </div>

        <button class="reset-btn" data-action="reset">Reiniciar contadores</button>
      </section>
    `;
  }
}

customElements.define('surprise-section', SurpriseSection);
