import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowRight, Menu, X } from 'lucide-react'
import { content, journalCover, photos, type Language } from './content'
import './styles.css'

type Page = 'cv' | 'journal' | 'photos' | 'about'
type Copy = typeof content.en | typeof content.zh

const Arrow = () => <ArrowRight size={17} strokeWidth={1.6}/>
const Label = ({children}:{children:React.ReactNode}) => <h3 className="section-label">{children}</h3>

function Header({page,setPage,lang,setLang,t}:{page:Page,setPage:(p:Page)=>void,lang:Language,setLang:(l:Language)=>void,t:Copy}) {
  const [open,setOpen] = useState(false)
  const go = (p:Page) => { setPage(p); setOpen(false); window.scrollTo({top:0,behavior:'smooth'}) }
  const toggleLanguage = () => { const next = lang === 'en' ? 'zh' : 'en'; setLang(next); document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en' }
  return <header>
    <button className="brand" onClick={()=>go('cv')}>{t.profile.name}</button>
    <button className="menu" aria-label={t.ui.menu} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    <nav className={open?'open':''}>{(['cv','journal','photos','about'] as Page[]).map(p=><button className={page===p?'active':''} onClick={()=>go(p)} key={p}>{t.nav[p]}</button>)}</nav>
    <button className="language" aria-label={t.ui.switchLanguage} onClick={toggleLanguage}><span className={lang==='zh'?'active':''}>中文</span><i>/</i><span className={lang==='en'?'active':''}>EN</span></button>
  </header>
}

function CV({setPage,t}:{setPage:(p:Page)=>void,t:Copy}) { return <>
  <section className="hero"><div className="hero-copy"><h1>{t.profile.headline}</h1><p>{t.profile.intro}</p><div className="actions"><a href="#work" className="primary">{t.ui.viewWork} <Arrow/></a><button className="text-link" onClick={()=>setPage('journal')}>{t.ui.readJournal} <Arrow/></button></div></div><div className="portrait"><img src={t.profile.portrait} alt={t.profile.name} style={{objectPosition:t.profile.portraitFocus}}/></div></section>
  <section id="work" className="ruled"><Label>{t.ui.selectedWork}</Label><div className="project-list">{t.projects.map((p,i)=><article className="project" key={p.name}><span>0{i+1}</span><h2>{p.name}</h2><p>{p.type}</p></article>)}</div></section>
  <section className="ruled experience"><Label>{t.ui.experience}</Label><div>{t.experience.map(e=><article key={e.years}><time>{e.years}</time><div><h3>{e.role}</h3><b>{e.place}</b><p>{e.detail}</p></div></article>)}</div></section>
  <section className="ruled credentials"><Label>{t.ui.education}</Label><div className="education-list">{t.education.map(item=><article key={item.degree}><h2>{item.degree}</h2><p><b>{item.school}</b><br/>{item.detail}</p></article>)}</div><Label>{t.ui.skills}</Label><dl>{t.skills.map(([label,value])=><React.Fragment key={label}><dt>{label}</dt><dd>{value}</dd></React.Fragment>)}</dl></section>
  <section className="ruled credentials highlights"><Label>{t.ui.publication}</Label><div><h2><a href={t.publication.href} target="_blank" rel="noreferrer">{t.publication.title}</a></h2><p>{t.publication.citation}</p></div><Label>{t.ui.awards}</Label><ul>{t.highlights.map(item=><li key={item}>{item}</li>)}</ul></section>
  </> }

function Journal({setPage,t}:{setPage:(p:Page)=>void,t:Copy}) {
  const [filter,setFilter] = useState(t.ui.all as string)
  const cats = [t.ui.all,...new Set(t.posts.map(p=>p.category))]
  const shown = filter===t.ui.all ? t.posts : t.posts.filter(p=>p.category===filter)
  return <>
    <section className="journal-hero"><h1>{t.journal.headline}</h1><div><p>{t.journal.intro}</p><a href="#essays">{t.ui.readLatest} <Arrow/></a></div></section>
    <section className="featured"><Label>{t.ui.featuredEssay}</Label><div className="featured-grid"><div className="media-frame"><img src={journalCover.src} alt={journalCover.alt} style={{objectPosition:journalCover.focus}}/></div><article><span>{t.posts[0].date}　/　{t.posts[0].category}</span><h2>{t.posts[0].title}</h2><p>{t.posts[0].excerpt}</p><span className="draft-note">{t.ui.draft}</span></article></div></section>
    <section id="essays" className="journal-list"><div className="journal-head"><Label>{t.ui.journal}</Label><div className="filters">{cats.map(c=><button className={filter===c?'active':''} onClick={()=>setFilter(c)} key={c}>{c}</button>)}</div></div>{shown.map(p=><article key={p.title}><time>{p.date}</time><span>{p.category}</span><div><h3>{p.title}</h3><p>{p.excerpt}</p></div><Arrow/></article>)}</section>
    <PhotoStrip setPage={setPage} t={t}/><Newsletter t={t}/>
  </>
}

function PhotoStrip({setPage,t}:{setPage:(p:Page)=>void,t:Copy}) { return <section className="photo-strip"><div><Label>{t.ui.photoDiary}</Label><h2>{t.journal.photoTitle}</h2><button onClick={()=>setPage('photos')}>{t.ui.viewPhotos} <Arrow/></button></div>{photos.slice(0,4).map((p,i)=><div className={`strip-frame photo-${i}`} key={p.src}><img src={p.src} alt={p.alt} style={{objectPosition:p.focus}}/></div>)}</section> }

function Photos({t}:{t:Copy}) { const [selected,setSelected]=useState<number|null>(null); return <><section className="photos-intro"><h1>{t.journal.photoIntro}</h1><p>{t.journal.photoText}</p></section><section className="gallery">{photos.map((p,i)=><button key={p.src} onClick={()=>setSelected(i)}><img src={p.src} alt={p.alt}/><span>0{i+1}</span></button>)}</section>{selected!==null&&<div className="lightbox" role="dialog" aria-modal="true" onClick={()=>setSelected(null)}><button aria-label={t.ui.close}><X/></button><img src={photos[selected].src} alt={photos[selected].alt}/></div>}</> }

function About({t}:{t:Copy}){return <section className="about"><h1>{t.about.headline}</h1><div><p>{t.profile.intro}</p><p>{t.about.detail}</p><a href={`mailto:${t.profile.email}`}>{t.ui.startConversation} <Arrow/></a></div></section>}
function Newsletter({t}:{t:Copy}){return <section className="newsletter"><div><h2>{t.ui.newsletterTitle}</h2><p>{t.ui.newsletterText}</p></div><form onSubmit={e=>{e.preventDefault();alert(t.ui.subscribed)}}><input required type="email" aria-label={t.ui.email} placeholder={t.ui.emailPlaceholder}/><button>{t.ui.stayInTouch}</button></form></section>}
function Footer({t}:{t:Copy}){return <footer><div><b>{t.profile.name}</b><p>{t.profile.footer}</p></div><div><a href={`mailto:${t.profile.email}`}>{t.profile.email}</a><p>{t.profile.location}</p></div><div className="socials">{t.profile.socials.map(s=><a href={s.href} key={s.label}>{s.label}</a>)}</div></footer>}

function App(){const [page,setPage]=useState<Page>('cv'); const [lang,setLang]=useState<Language>('en'); const t=content[lang]; return <main><Header page={page} setPage={setPage} lang={lang} setLang={setLang} t={t}/><div className="page-shell" key={`${page}-${lang}`}>{page==='cv'&&<CV setPage={setPage} t={t}/>} {page==='journal'&&<Journal setPage={setPage} t={t}/>} {page==='photos'&&<Photos t={t}/>} {page==='about'&&<About t={t}/>}<Footer t={t}/></div></main>}
createRoot(document.getElementById('root')!).render(<App/>)
