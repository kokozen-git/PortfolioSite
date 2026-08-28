import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "toggle-button": DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & {
          "data-width"?: string;
          "data-height"?: string;
          "data-off-background"?: string;
          "data-on-background"?: string;
        },
        HTMLElement
      >;
    }
  }
}