import { html } from "promethium-js";

const Title = () => {
  return () => html`
    <div class="text-[length:var(--text-2xl)] mb-9">Augment</div>
  `;
};

export default Title;
