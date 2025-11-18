declare namespace JSX {
  interface IntrinsicElements {
    "model-viewer": ModelViewerAttributes;
  }

  interface ModelViewerAttributes extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    src?: string;
    alt?: string;
    "auto-rotate"?: boolean | string;
    "camera-controls"?: boolean | string;
    "ar"?: boolean | string;
    "poster"?: string;
    "exposure"?: string | number;
    "shadow-intensity"?: string | number;
    "shadow-softness"?: string | number;
    "environment-image"?: string;
    style?: React.CSSProperties;
  }
}
