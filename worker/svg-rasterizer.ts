// Lightweight stub when server-side SVG rasterization is disabled on edge Worker.
export const svgWasmReady = Promise.resolve();

export class Resvg {
  width = 1;
  height = 1;
  constructor(_svg: string, _options?: unknown) {}
  imagesToResolve(): string[] {
    return [];
  }
  render(): { asPng(): Uint8Array; free(): void } {
    throw new Error("svg_rasterizer_disabled");
  }
  free(): void {}
}

export async function rasterizeSvgPreview(_svg: string): Promise<Uint8Array> {
  throw new Error("svg_rasterizer_disabled");
}
