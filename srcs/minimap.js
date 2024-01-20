const leftCanvas = document.querySelector(".main-left__minimap");
const minimap = leftCanvas.getContext("2d");

export const C1WIDTH = leftCanvas.width;
export const C1HEIGHT = leftCanvas.height;

const C1HorizontalBlocks = C1WIDTH / 10;
const C1VerticalBlocks = C1HEIGHT / 10;

export const map = [];
