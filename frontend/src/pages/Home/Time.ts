import { adaptState, html } from "promethium-js";

const Time = () => {
  const [time, setTime] = adaptState(getCurrentTime());

  function getCurrentTime(): string {
    const d: Date = new Date();

    let hours: number | string = d.getHours();
    hours = hours.toString();
    if (hours.length === 1) hours = "0" + hours;

    let minutes: number | string = d.getMinutes();
    minutes = minutes.toString();
    if (minutes.length === 1) minutes = "0" + minutes;

    return `${hours}:${minutes}`;
  }

  setInterval(() => {
    setTime(getCurrentTime());
  }, 60000);

  return () => html`
    <div
      class="text-[length:var(--text-xl)] mb-3 border-y-[3px] py-1 border-[color:var(--accent-primary)]"
    >
      ${time()}
    </div>
  `;
};

export default Time;
