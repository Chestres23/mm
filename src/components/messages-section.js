class MessagesSection extends HTMLElement {
  connectedCallback() {
    this.render();
    this.attachEvents();
  }

  attachEvents() {
    this.querySelector('[data-action="show-poem"]')?.addEventListener('click', () => {
      this.querySelector('[data-target="poem"]')?.removeAttribute('hidden');
    });

    this.querySelector('[data-action="show-reminder"]')?.addEventListener('click', () => {
      this.querySelector('[data-target="reminder"]')?.removeAttribute('hidden');
    });

    this.querySelector('[data-action="open-song"]')?.addEventListener('click', () => {
      window.open('https://youtu.be/fyGs6zrGEOA', '_blank', 'noopener,noreferrer');
    });
  }

  render() {
    this.innerHTML = `
      <section class="section messages-section">
        <div class="section-title-wrap">
          <p class="eyebrow">Mensajes para ti</p>
          <h2>Frase para que me recuerde mi friogirl</h2>
        </div>

        <div class="action-row">
          <button class="cta" data-action="show-poem">Recuerdame (aplastameee segundoo)</button>
          <button class="ghost" data-action="show-reminder">Otro recordatorio (aplastame primeroo)</button>
          <button class="ghost" data-action="open-song">Dale play a esto</button>
        </div>

        <article class="poem-card" data-target="poem" hidden>
          <p><strong>Esta no podia faltar, recuerdame siempre con este poema que te hice un dia:</strong></p>
          <p>Y cómo explicarle lo que siento,</p>
          <p>si cada que la veo, me pone nervioso su dulce miel mirada</p>
          <p>y aquella curva del hoyuelo de su sonrisa,</p>
          <p>si cada que la siento, me vuelve loco el roce de su mano</p>
          <p>y el sentir de sus labios como caricia de brisa suave.</p>
          <p>Su voz…</p>
          <p>es un susurro que me arrulla el alma,</p>
          <p>una melodía que se queda rondando en mi pecho.</p>
          <p>Y su olor…</p>
          <p>ay, su olor,</p>
          <p>es esa mezcla de calma y deseo,</p>
          <p>como flores en primavera después de la lluvia.</p>
          <p>Cuando la tengo cerca, el tiempo se rinde,</p>
          <p>las palabras sobran,</p>
          <p>y solo quiero habitar el instante donde ella existe.</p>
          <p>Porque ella no solo se ve, se siente,</p>
          <p>se respira, se sueña…</p>
          <p>se ama sin querer y se extraña incluso antes de irse.</p>
        </article>

        <article class="poem-card" data-target="reminder" hidden>
          <p>
            Esto es un pequeño recordatorio de lo que un hombre deberia hacer por ti,
            nunca aceptes menos de lo que yo te he dado, por eso sigo aqui &lt;3
          </p>
        </article>

        <div class="message-grid">
          <article class="mini-message">Eres mas fuerte de lo que crees, mas valiosa de lo que imaginas y mas especial de lo que expresan las palabras.</article>
          <article class="mini-message">Gracias por formar parte de mi vida.</article>
          <article class="mini-message">Eres una friogirl increible y me gusta ser testigo de todo lo que haces.</article>
          <article class="mini-message">Gracias por compartir tu vida conmigo.</article>
          <article class="mini-message">Por cada dos de arroz una de agua JSJSJ.</article>
          <article class="mini-message">Gracias por equilibrar mis noches (a veces no) JSJSJS.</article>
          <article class="mini-message">Te quiero como eres chica mia, friogirl, mechita, churitos en frio, glaciar, hielito y todas sus derivaciones de frio.</article>
          <article class="mini-message">Diafruta de tu diaaa.</article>
        </div>
      </section>
    `;
  }
}

customElements.define('messages-section', MessagesSection);
