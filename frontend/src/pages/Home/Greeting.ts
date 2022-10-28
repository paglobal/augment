import { html } from "promethium-js";

const Greeting = () => {
  return () => html`
    <div class="text-[length:var(--text-lg)]">
      Hi Bernice!...What are you gonna do today?
    </div>
  `;
};

export default Greeting;
