"use client";
import Link from "next/link";import {usePathname} from "next/navigation";import {useState} from "react";
const L=[["Home","/"],["Work","/work"],["Case Studies","/work#case-studies"],["About","/about"],["Skills","/about#skills"],["Resume","/resume"],["Contact","/contact"]];
export default function Navbar(){const p=usePathname();const [o,setO]=useState(false);
const act=(h:string)=>h==="/"?p==="/":!h.includes("#")&&p.startsWith(h);
return(<header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
<nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
<Link href="/" className="font-bold text-navy">Arshdeep Singh</Link>
<ul className="hidden gap-6 text-sm md:flex">{L.map(([n,h])=><li key={n}><Link href={h} aria-current={act(h)?"page":undefined} className={act(h)?"font-semibold text-brand":"text-slate-600 hover:text-navy"}>{n}</Link></li>)}</ul>
<button className="md:hidden rounded p-2" aria-expanded={o} aria-controls="m" aria-label="Toggle menu" onClick={()=>setO(!o)}>
<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={o?"M6 6l12 12M18 6L6 18":"M4 7h16M4 12h16M4 17h16"}/></svg></button></nav>
{o&&<ul id="m" className="border-t bg-white px-5 py-3 md:hidden">{L.map(([n,h])=><li key={n}><Link href={h} onClick={()=>setO(false)} className="block py-3 text-slate-700">{n}</Link></li>)}</ul>}</header>)}
