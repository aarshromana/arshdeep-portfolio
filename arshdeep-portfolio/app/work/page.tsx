import type {Metadata} from "next";import {projects} from "@/lib/content";import {Wrap,Heading,ProjectCard} from "@/components/ui";
export const metadata:Metadata={title:"Work & Case Studies",description:"Five digital marketing case studies: social media, B2B content and SEO, a digital product, Meta Ads strategy and an SEO audit.",alternates:{canonical:"/work"}};
export default function Work(){return(<Wrap className="py-16"><div id="case-studies"/><Heading eyebrow="Work" title="Case studies" sub="Each one shows the problem, my thinking, what I made and what I learned. Each is labelled as real work, my own project or a practice project."/>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{projects.map((p,i)=><ProjectCard key={p.slug} p={p} n={i+1}/>)}</div></Wrap>)}
