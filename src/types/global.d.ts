export declare global {
  export interface Window {
    ga: (...params) => void;
    gtag: (...params) => void;
  }
}
