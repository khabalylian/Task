// declaration.d.ts
declare module '*.module.css';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg';

declare module '*.module.css' {
    const content: Record<string, string>;
    export default content;
}