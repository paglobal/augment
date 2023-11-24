import { adaptEffect, ParticleEntity } from "promethium-js";

const globalState = new ParticleEntity({
  overlayVisibility: false,
  commandPaletteVisibility: false,
});

export const [overlayVisibility, setOverlayVisibility] =
  globalState.adaptParticle("overlayVisibility");
export const [commandPaletteVisibility, setCommandPaletteVisibility] =
  globalState.adaptParticle("commandPaletteVisibility");

export function revealCommandPalette() {
  setOverlayVisibility(!overlayVisibility());
  setCommandPaletteVisibility(!commandPaletteVisibility());
}

const setModalVisibilities = [setCommandPaletteVisibility];

adaptEffect(
  () => {
    if (overlayVisibility() === false) {
      setModalVisibilities.forEach((setModalVisibility) =>
        setModalVisibility(false)
      );
    }
  },
  [overlayVisibility],
  { defer: true }
);
