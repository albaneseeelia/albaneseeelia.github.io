import type { Config } from 'tailwindcss';
const config: Config = { content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { ink:'#142033', muted:'#718096', line:'#e7ebf1', accent:'#087f8c', mint:'#dff5ef' }, boxShadow:{ soft:'0 8px 30px rgba(20,32,51,.06)' } } }, plugins: [] };
export default config;
