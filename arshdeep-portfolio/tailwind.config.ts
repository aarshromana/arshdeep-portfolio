import type { Config } from "tailwindcss";
export default { content:["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"],
theme:{extend:{colors:{navy:"#0B1F3A",brand:"#2563EB",accent:"#06B6D4",ink:"#16213A",mist:"#F5F7FA"},fontFamily:{sans:["var(--font-inter)","system-ui","sans-serif"]}}},plugins:[]} satisfies Config;
