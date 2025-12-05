interface Window {
  gtag?: (command: string, action: string, params?: any) => void;
}

// Media file type declarations
declare module '*.mp4' {
  const src: string;
  export default src;
}

declare module '*.webm' {
  const src: string;
  export default src;
}

declare module '*.ogg' {
  const src: string;
  export default src;
}
