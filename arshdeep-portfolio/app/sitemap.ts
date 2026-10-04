import type {MetadataRoute} from "next";import {SITE,projects} from "@/lib/content";
export default function sitemap():MetadataRoute.Sitemap{return["","/work","/about","/resume","/contact",...projects.map(p=>`/work/${p.slug}`)].map(u=>({url:SITE.url+u}))}
