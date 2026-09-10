import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowRight, Menu, X } from 'lucide-react'
import { brnoGallery, content, journalCover, taiwanGallery, type Language } from './content'
import './styles.css'

type Page = 'cv' | 'journal' | 'photos' | 'about'
type Copy = typeof content.en | typeof content.zh
type Journey = Copy['journeys'][number]
const pages: Page[] = ['cv', 'journal', 'photos', 'about']

const Arrow = () => <ArrowRight size={17} strokeWidth={1.6}/>
const Label = ({children}:{children:React.ReactNode}) => <h3 className="section-label">{children}</h3>

function Header({page,setPage,lang,setLang,t}:{page:Page,setPage:(p:Page)=>void,lang:Language,setLang:(l:Language)=>void,t:Copy}) {
  const [open,setOpen] = useState(false)
  const go = (p:Page) => { setPage(p); setOpen(false); window.scrollTo({top:0,behavior:'smooth'}) }
  const toggleLanguage = () => { const next = lang === 'en' ? 'zh' : 'en'; setLang(next); document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en' }
  return <header>
    <button className="brand" onClick={()=>go('cv')}>{t.profile.name}</button>
    <button className="menu" aria-label={t.ui.menu} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    <nav className={open?'open':''}>{pages.map(p=><button className={page===p?'active':''} onClick={()=>go(p)} key={p}>{t.nav[p]}</button>)}</nav>
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

function JourneyImage({journey}:{journey:Journey}) {
  return journey.image ? <img src={journey.image} alt={journey.location} style={{objectPosition:journey.focus}}/> : <span className="journey-placeholder" aria-hidden="true"/>
}

function JourneyCard({journey,index,onOpen,compact=false}:{journey:Journey,index:number,onOpen:(slug:string)=>void,compact?:boolean}) {
  return <button className={`journey-card${compact?' compact':''}`} onClick={()=>onOpen(journey.slug)} aria-label={`${journey.location} — ${journey.title}`}>
    <JourneyImage journey={journey}/>
    <span className="journey-number">{String(index+1).padStart(2,'0')}</span>
    <span className="journey-overlay"><span>{journey.date}</span><b>{journey.location}</b><em>{journey.title}</em></span>
  </button>
}

function BrnoStory({lang}:{lang:Language}) {
  return <div className="brno-story">
    <div className="brno-intro"><span>{lang==='zh'?'布尔诺 · 九个画面':'Brno · Nine frames'}</span><p>{lang==='zh'?'在布尔诺度过的日子，是我认识中东欧的开始。除了在布尔诺理工大学学习引人入胜的人工智能课程，这座陌生城市的文化、生活节奏与周遭环境也让整段经历格外珍贵。从山坡小径到斯皮尔博城堡，从校园庭院到湖岸，我第一次如此真切地感受到：数百年的历史，依然在为捷克今天的日常生活着色。':'The days I spent in Brno were my introduction to Central and Eastern Europe. Beyond the fascinating AI courses I took at Brno University of Technology, encountering the city’s culture, rhythms, and unfamiliar surroundings made the experience truly extraordinary. From hillside paths to Špilberk Castle, and from campus courtyards to the lakeshore, Brno allowed me to discover how centuries of history continue to color everyday life in the Czech Republic.'}</p></div>
    <div className="brno-gallery">{brnoGallery.map((photo,i)=><figure className={photo.layout} key={photo.src}><div><img src={photo.src} alt={lang==='zh'?photo.zh:photo.en} style={{objectPosition:photo.focus}} loading="lazy"/><span>{String(i+1).padStart(2,'0')}</span></div><figcaption>{lang==='zh'?photo.zh:photo.en}</figcaption></figure>)}</div>
  </div>
}

function TaiwanStory({lang}:{lang:Language}) {
  return <div className="brno-story taiwan-story">
    <div className="brno-intro"><span>{lang==='zh'?'台湾影像手记':'Taiwan photo essay'}</span><p>{lang==='zh'?'从台北的雨夜与博物馆，到九份的山海、阿里山的森林，再到台中的骑行，这段旅程在城市密度与自然尺度之间不断切换。食物、建筑和街头细节，让每一次移动都成为认识当地生活的方式。':'From Taipei’s rainy nights and museums to Jiufen’s mountain-and-sea views, Alishan’s forests, and a bicycle ride through Taichung, this journey moved constantly between urban density and the scale of nature. Food, architecture, and small street details turned every change of place into a way of understanding local life.'}</p></div>
    <div className="brno-gallery">{taiwanGallery.map((photo,i)=><figure className={photo.layout} key={photo.src}><div><img src={photo.src} alt={lang==='zh'?photo.zh:photo.en} style={{objectPosition:photo.focus}} loading="lazy"/><span>{String(i+1).padStart(2,'0')}</span></div><figcaption>{lang==='zh'?photo.zh:photo.en}</figcaption></figure>)}</div>
  </div>
}

function Journal({setPage,t,selectedJourney,onOpenJourney}:{setPage:(p:Page)=>void,t:Copy,selectedJourney:string|null,onOpenJourney:(slug:string)=>void}) {
  const [filter,setFilter] = useState(t.ui.all as string)
  const language: Language = t === content.zh ? 'zh' : 'en'
  const cats = [t.ui.all,...new Set(t.posts.map(p=>p.category))]
  const shown = filter===t.ui.all ? t.posts : t.posts.filter(p=>p.category===filter)
  useEffect(()=>{ if(selectedJourney) document.getElementById(`journey-${selectedJourney}`)?.scrollIntoView({behavior:'smooth',block:'start'}) },[selectedJourney])
  return <>
    <section className="journal-hero"><h1>{t.journal.headline}</h1><div><p>{t.journal.intro}</p><a href="#essays">{t.ui.readLatest} <Arrow/></a></div></section>
    <section className="featured"><Label>{t.ui.featuredEssay}</Label><div className="featured-grid"><div className="media-frame"><img src={journalCover.src} alt={journalCover.alt} style={{objectPosition:journalCover.focus}}/></div><article><span>{t.posts[0].date}　/　{t.posts[0].category}</span><h2>{t.posts[0].title}</h2><p>{t.posts[0].excerpt}</p><span className="draft-note">{t.ui.draft}</span></article></div></section>
    <section id="essays" className="journal-list"><div className="journal-head"><Label>{t.ui.journal}</Label><div className="filters">{cats.map(c=><button className={filter===c?'active':''} onClick={()=>setFilter(c)} key={c}>{c}</button>)}</div></div>{shown.map(p=><article key={p.title}><time>{p.date}</time><span>{p.category}</span><div><h3>{p.title}</h3><p>{p.excerpt}</p></div><Arrow/></article>)}</section>
    <section className="journey-articles"><div className="journey-articles-head"><Label>{t.ui.journeyArchive}</Label><p>{t.journal.photoText}</p></div>{t.journeys.map((journey,i)=><article id={`journey-${journey.slug}`} className={`${selectedJourney===journey.slug?'selected ':''}${journey.slug==='czechia'||journey.slug==='taiwan'?'feature-story':''}`} key={journey.slug}><span>{String(i+1).padStart(2,'0')}</span><div><time>{journey.date}</time><h2>{journey.title}</h2><b>{journey.location}</b><p>{journey.excerpt}</p>{journey.slug==='czechia'?<BrnoStory lang={language}/>:journey.slug==='taiwan'?<TaiwanStory lang={language}/>:<em>{t.ui.storyDraft}</em>}</div></article>)}</section>
    <PhotoStrip setPage={setPage} t={t} onOpenJourney={onOpenJourney}/><Newsletter t={t}/>
  </>
}

function PhotoStrip({setPage,t,onOpenJourney}:{setPage:(p:Page)=>void,t:Copy,onOpenJourney:(slug:string)=>void}) { return <section className="photo-strip"><div><Label>{t.ui.photoDiary}</Label><h2>{t.journal.photoTitle}</h2><button onClick={()=>setPage('photos')}>{t.ui.viewPhotos} <Arrow/></button></div>{t.journeys.slice(0,4).map((journey,i)=><JourneyCard journey={journey} index={i} onOpen={onOpenJourney} compact key={journey.slug}/>)}</section> }

function Photos({t,onOpenJourney}:{t:Copy,onOpenJourney:(slug:string)=>void}) { return <><section className="photos-intro"><h1>{t.journal.photoIntro}</h1><p>{t.journal.photoText}</p></section><section className="journey-gallery"><div className="journey-gallery-head"><Label>{t.ui.journeys}</Label><span>{String(t.journeys.length).padStart(2,'0')} entries</span></div><div className="journey-grid">{t.journeys.map((journey,i)=><JourneyCard journey={journey} index={i} onOpen={onOpenJourney} key={journey.slug}/>)}</div></section></> }

function About({t}:{t:Copy}){return <section className="about"><h1>{t.about.headline}</h1><div><p>{t.profile.intro}</p><p>{t.about.detail}</p><a href={`mailto:${t.profile.email}`}>{t.ui.startConversation} <Arrow/></a></div></section>}
function Newsletter({t}:{t:Copy}){return <section className="newsletter"><div><h2>{t.ui.newsletterTitle}</h2><p>{t.ui.newsletterText}</p></div><form onSubmit={e=>{e.preventDefault();alert(t.ui.subscribed)}}><input required type="email" aria-label={t.ui.email} placeholder={t.ui.emailPlaceholder}/><button>{t.ui.stayInTouch}</button></form></section>}
function Footer({t}:{t:Copy}){return <footer><div><b>{t.profile.name}</b><p>{t.profile.footer}</p></div><div><a href={`mailto:${t.profile.email}`}>{t.profile.email}</a><p>{t.profile.location}</p></div><div className="socials">{t.profile.socials.map(s=><a href={s.href} key={s.label}>{s.label}</a>)}</div></footer>}

function App(){
  const [page,setPage]=useState<Page>('cv')
  const [lang,setLang]=useState<Language>('en')
  const [selectedJourney,setSelectedJourney]=useState<string|null>(null)
  const [direction,setDirection]=useState<'forward'|'backward'>('forward')
  const gesture=useRef({x:0,y:0,tracking:false})
  const wheelLocked=useRef(false)
  const t=content[lang]

  const navigate=(next:Page)=>{
    if(next===page) return
    setDirection(pages.indexOf(next)>pages.indexOf(page)?'forward':'backward')
    setPage(next)
    window.scrollTo({top:0,behavior:'smooth'})
  }
  const shiftPage=(step:-1|1)=>{
    const nextIndex=Math.min(pages.length-1,Math.max(0,pages.indexOf(page)+step))
    navigate(pages[nextIndex])
  }
  const openJourney=(slug:string)=>{setSelectedJourney(slug);navigate('journal')}
  const isInteractive=(target:EventTarget|null)=>target instanceof Element&&Boolean(target.closest('button,a,input,textarea,select'))
  const onPointerDown=(event:React.PointerEvent)=>{
    if(isInteractive(event.target)) return
    gesture.current={x:event.clientX,y:event.clientY,tracking:true}
  }
  const onPointerUp=(event:React.PointerEvent)=>{
    if(!gesture.current.tracking) return
    const dx=event.clientX-gesture.current.x
    const dy=event.clientY-gesture.current.y
    gesture.current.tracking=false
    if(Math.abs(dx)>80&&Math.abs(dx)>Math.abs(dy)*1.25) shiftPage(dx<0?1:-1)
  }
  const onWheel=(event:React.WheelEvent)=>{
    if(wheelLocked.current||Math.abs(event.deltaX)<55||Math.abs(event.deltaX)<Math.abs(event.deltaY)*1.25) return
    wheelLocked.current=true
    shiftPage(event.deltaX>0?1:-1)
    window.setTimeout(()=>{wheelLocked.current=false},700)
  }

  useEffect(()=>{
    const elements=[...document.querySelectorAll<HTMLElement>('.page-shell > section, .page-shell > footer, .brno-gallery figure')]
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){elements.forEach(el=>el.classList.add('reveal-visible'));return}
    elements.forEach(el=>el.classList.add('reveal-on-scroll'))
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('reveal-visible');observer.unobserve(entry.target)}
    }),{threshold:.08,rootMargin:'0px 0px -8% 0px'})
    elements.forEach(el=>observer.observe(el))
    const safetyTimer=window.setTimeout(()=>elements.forEach(el=>el.classList.add('reveal-visible')),1200)
    return()=>{observer.disconnect();window.clearTimeout(safetyTimer)}
  },[page,lang])

  return <main><Header page={page} setPage={navigate} lang={lang} setLang={setLang} t={t}/><div className={`page-shell slide-${direction}`} key={`${page}-${lang}`} onPointerDown={onPointerDown} onPointerUp={onPointerUp} onPointerCancel={()=>{gesture.current.tracking=false}} onWheel={onWheel}>{page==='cv'&&<CV setPage={navigate} t={t}/>} {page==='journal'&&<Journal setPage={navigate} t={t} selectedJourney={selectedJourney} onOpenJourney={openJourney}/>} {page==='photos'&&<Photos t={t} onOpenJourney={openJourney}/>} {page==='about'&&<About t={t}/>}<Footer t={t}/></div></main>
}
createRoot(document.getElementById('root')!).render(<App/>)
