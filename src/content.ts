// 网站的“内容控制台”：中英文履历、文章和照片都集中在这里，便于后续更新。
export type Language = 'en' | 'zh'

const sharedProfile = {
  email: 'shihaoran105@outlook.com',
  portrait: '/photos/cv-cover.jpg',
  portraitFocus: '50% 44%',
  socials: [] as { label: string; href: string }[],
}

const publicationLink = 'https://doi.org/10.25236/AJETS.2023.060302'

export const content = {
  en: {
    nav: { cv: 'CV', journal: 'Journal', photos: 'Photos', about: 'About' },
    ui: {
      viewWork: 'View my work', readJournal: 'Read my journal', selectedWork: 'Selected work',
      experience: 'Experience', education: 'Education', skills: 'Skills', publication: 'Publication', awards: 'Awards',
      featuredEssay: 'Featured essay', journal: 'Journal', readLatest: 'Read the latest essay', draft: 'Essay draft coming soon',
      photoDiary: 'Photo diary', viewPhotos: 'View all photos', all: 'All', close: 'Close',
      startConversation: 'Start a conversation', email: 'Email', emailPlaceholder: 'Your email', stayInTouch: 'Stay in touch',
      newsletterTitle: 'Letters, occasionally.', newsletterText: 'Thoughts worth sharing, straight to your inbox.',
      subscribed: 'Thanks — you’re on the list!', switchLanguage: '切换到中文', menu: 'Open menu',
    },
    profile: {
      ...sharedProfile, name: 'Shi Haoran', location: 'Hong Kong · Beijing',
      headline: 'I explore intelligent systems and build practical AI tools.',
      intro: 'I am an Internet of Things and Artificial Intelligence student at The Hong Kong Polytechnic University. My work spans AI agents, machine learning, local knowledge systems, medical imaging, and technology research.',
      footer: 'Exploring intelligent systems.\nBuilding practical tools.',
    },
    projects: [
      { name: 'COSCO SHIPPING · Agent Platform', type: 'Extended translation capabilities through a reusable Agent Skill and supported the local deployment of an Agent Wiki knowledge base for COSCO SHIPPING in Beijing.' },
      { name: 'AI Pathology Research', type: 'Configured AI environments and reproduced open-source medical-imaging projects, with a focus on Zig-RiR, nnU-Net, and nnFormer.' },
      { name: 'Novel Hybrid UAV', type: 'Co-designed a UAV integrating fixed-wing aircraft and rotorcraft concepts, including its flight system and operating modes; published in AJETS.' },
      { name: 'China EV Research', type: 'Completed six reports on China’s electric-vehicle development, focusing on new-energy policy and corporate technological innovation.' },
    ],
    experience: [
      { years: 'Jul — Aug 2026', role: 'AI Agent Project Intern', place: 'COSCO SHIPPING · Beijing', detail: 'Extended the enterprise agent’s translation capabilities through a reusable Agent Skill and supported the local deployment of an Agent Wiki knowledge base.' },
      { years: 'Aug — Sep 2025', role: 'Research Intern', place: 'Institutes of Science and Development, Chinese Academy of Sciences', detail: 'Conducted literature reviews on future industries, artificial intelligence, and high-quality datasets for the Department of Industrial Technology Innovation Research.' },
      { years: 'May — Jul 2025', role: 'Algorithm Intern', place: 'Thorough Future · AI Pathology Research', detail: 'Built AI environments on company servers and ran open-source medical-imaging projects, primarily Zig-RiR, nnU-Net, and nnFormer.' },
      { years: 'Mar — Jul 2022', role: 'Research Intern', place: 'UC Davis · China Energy and Transportation Research Center', detail: 'Produced six research reports on the development of electric vehicles in China, new-energy policies, and corporate technological innovation.' },
    ],
    education: [
      { degree: 'B.Eng. in Internet of Things', school: 'The Hong Kong Polytechnic University · 2024 — Present', detail: 'Secondary Major in Artificial Intelligence · Minor in Computer Science · CGPA 3.14' },
      { degree: 'Cyber Security & Machine Learning Study Tour', school: 'Brno University of Technology · Aug 2025', detail: 'PolyU BUT study tour in the Czech Republic.' },
      { degree: 'Astronomy Summer Session', school: 'University of California, Berkeley · Jun — Aug 2023', detail: 'Designed a supply system for a proposed human habitation base on Titan as part of a team project.' },
    ],
    skills: [['AI & Agents', 'Agent Skills, knowledge bases, local deployment, machine learning'], ['Research', 'Literature review, technology policy, high-quality datasets'], ['Technical', 'Internet of Things, computer science, medical image AI'], ['Languages', 'Mandarin Chinese, English · TOEFL 101']],
    highlights: ['First Prize, 4th Beijing Student “AI+” Competition — 2021', 'Gold Award, Australian Science Olympiads – Physics — 2022', 'Gold Award, International Chemistry Quiz — 2022', 'Bronze Award, British Physics Olympiad — 2023'],
    publication: { title: 'A Novel UAV Integrated with Fixed-Wings Aircrafts and Rotorcrafts', citation: 'Z. Zhang, H. Shi, L. Wen, X. Zhu · Academic Journal of Engineering and Technology Science, Vol. 6, Issue 3, 2023', href: publicationLink },
    journal: { headline: 'Notes on design,\ntechnology, and\na life in progress.', intro: 'Essays and field notes on building useful things, traveling with curiosity, and staying thoughtful in practice.', photoTitle: 'Fragments from\nplaces and\nordinary days.', photoIntro: 'A visual diary\nof looking closer.', photoText: 'Places, people, light, and the small details worth remembering.' },
    about: { headline: 'I learn by building, researching, and seeing the world firsthand.', detail: 'My current interests sit at the intersection of agent systems, local knowledge infrastructure, machine learning, and the real-world industries they can support. Beyond technical work, I document the places I visit through photography.' },
    posts: [
      { date: 'Coming soon', category: 'AI', title: 'Building a translation skill for an enterprise agent', excerpt: 'Notes on capability boundaries, reusable instructions, and deploying knowledge close to the user.' },
      { date: 'Coming soon', category: 'Research', title: 'What makes a high-quality AI dataset?', excerpt: 'Ideas gathered while reviewing the future of data-intensive industries.' },
      { date: 'Coming soon', category: 'Technology', title: 'Learning medical image AI from open source', excerpt: 'Environment setup, reproduction, and lessons from nnU-Net and nnFormer.' },
      { date: 'Coming soon', category: 'Travel', title: 'Eight frames from recent journeys', excerpt: 'Temples, mountains, city streets, and small details worth keeping.' },
    ],
  },
  zh: {
    nav: { cv: '履历', journal: '随笔', photos: '照片', about: '关于' },
    ui: {
      viewWork: '查看项目', readJournal: '阅读随笔', selectedWork: '代表项目', experience: '实习经历', education: '教育背景', skills: '技能', publication: '论文', awards: '奖项',
      featuredEssay: '精选文章', journal: '文章', readLatest: '阅读最新文章', draft: '文章正在撰写中', photoDiary: '照片日记', viewPhotos: '查看全部照片', all: '全部', close: '关闭',
      startConversation: '和我联系', email: '邮箱', emailPlaceholder: '你的邮箱', stayInTouch: '保持联系', newsletterTitle: '偶尔来信。', newsletterText: '把值得分享的思考，直接送到你的邮箱。',
      subscribed: '谢谢，你已成功订阅！', switchLanguage: 'Switch to English', menu: '打开菜单',
    },
    profile: {
      ...sharedProfile, name: '石浩然', location: '香港 · 北京',
      headline: '探索智能系统，打造真正实用的 AI 工具。',
      intro: '我就读于香港理工大学物联网工程专业，同时修读人工智能第二主修和计算机科学副修。我的实践横跨 AI Agent、机器学习、本地知识系统、医学影像与科技研究。',
      footer: '探索智能系统。\n构建实用工具。',
    },
    projects: [
      { name: '中远海运 · Agent 平台', type: '为中远海运北京项目扩展可复用的翻译 Agent Skill，并协助 Agent Wiki 知识库的本地部署。' },
      { name: 'AI 病理研究', type: '配置 AI 运行环境并复现开源医学影像项目，重点实践 Zig-RiR、nnU-Net 与 nnFormer。' },
      { name: '新型混合构型无人机', type: '参与设计融合固定翼与旋翼机概念的无人机，包括飞行系统与运行模式；成果发表于 AJETS。' },
      { name: '中国新能源汽车研究', type: '完成六份中国电动汽车发展研究报告，重点关注新能源政策与企业技术创新。' },
    ],
    experience: [
      { years: '2026.07 — 2026.08', role: 'AI Agent 项目实习生', place: '中远海运 · 北京', detail: '通过可复用的 Agent Skill 扩展企业 Agent 的翻译能力，并协助完成 Agent Wiki 知识库的本地部署。' },
      { years: '2025.08 — 2025.09', role: '科研实习生', place: '中国科学院科技战略咨询研究院', detail: '在产业科技创新研究部开展未来产业、人工智能与高质量数据集相关的文献研究。' },
      { years: '2025.05 — 2025.07', role: '算法实习生', place: '透彻未来 · AI 病理研究', detail: '在公司服务器上搭建 AI 环境并运行开源医学影像项目，主要包括 Zig-RiR、nnU-Net 与 nnFormer。' },
      { years: '2022.03 — 2022.07', role: '科研实习生', place: '加州大学戴维斯分校 · 中国能源与交通研究中心', detail: '围绕中国电动汽车发展、新能源政策和企业技术创新完成六份研究报告。' },
    ],
    education: [
      { degree: '物联网工程学士', school: '香港理工大学 · 2024 — 至今', detail: '人工智能第二主修 · 计算机科学副修 · CGPA 3.14' },
      { degree: '网络安全与机器学习研学', school: '布尔诺理工大学 · 2025.08', detail: '参加香港理工大学与布尔诺理工大学在捷克联合开展的研学项目。' },
      { degree: '天文学暑期课程', school: '加州大学伯克利分校 · 2023.06 — 2023.08', detail: '在团队项目中，为设想中的土卫六人类居住基地设计物资供应系统。' },
    ],
    skills: [['AI 与 Agent', 'Agent Skills、知识库、本地部署、机器学习'], ['研究', '文献综述、科技政策、高质量数据集'], ['技术', '物联网、计算机科学、医学影像 AI'], ['语言', '普通话、英语 · TOEFL 101']],
    highlights: ['第四届北京市青少年人工智能创新挑战赛一等奖 — 2021', '澳大利亚科学奥林匹克物理竞赛金奖 — 2022', '国际化学知识测评金奖 — 2022', '英国物理奥林匹克竞赛铜奖 — 2023'],
    publication: { title: '一种融合固定翼飞机与旋翼机的新型无人机', citation: 'Z. Zhang, H. Shi, L. Wen, X. Zhu · Academic Journal of Engineering and Technology Science，第 6 卷第 3 期，2023', href: publicationLink },
    journal: { headline: '关于设计、\n技术，以及仍在\n展开的生活。', intro: '记录我如何构建实用工具、带着好奇旅行，并在实践中保持思考。', photoTitle: '来自旅途与\n日常生活的\n片段。', photoIntro: '一册关于\n认真观看的影像日记。', photoText: '记录地方、人物、光线，以及那些值得被记住的细节。' },
    about: { headline: '我通过构建、研究与亲身观察这个世界来学习。', detail: '我目前关注 Agent 系统、本地知识基础设施、机器学习，以及它们能够支持的真实行业场景。在技术工作之外，我也用摄影记录走过的地方。' },
    posts: [
      { date: '即将发布', category: '人工智能', title: '为企业 Agent 构建翻译 Skill', excerpt: '关于能力边界、可复用指令，以及让知识更贴近使用者的部署笔记。' },
      { date: '即将发布', category: '研究', title: '什么是高质量的 AI 数据集？', excerpt: '在研究数据密集型产业未来发展时整理的一些思考。' },
      { date: '即将发布', category: '技术', title: '从开源项目学习医学影像 AI', excerpt: '记录环境搭建、项目复现，以及使用 nnU-Net 与 nnFormer 的经验。' },
      { date: '即将发布', category: '旅行', title: '近期旅途中的八个画面', excerpt: '寺庙、山川、城市街道，以及那些值得保存的小细节。' },
    ],
  },
} as const

export const journalCover = { src: '/photos/journal-cover.jpeg', alt: 'Shi Haoran at Taman Sari in Yogyakarta', focus: '70% 45%' }

export const photos = [
  { src: '/photos/prambanan.jpeg', alt: 'Shi Haoran at Prambanan Temple, Indonesia', focus: '27% 45%' },
  { src: '/photos/aviation-museum.jpeg', alt: 'Shi Haoran in front of a helicopter', focus: '51% 49%' },
  { src: '/photos/panda-city.jpeg', alt: 'Shi Haoran with a panda sculpture in the city', focus: '61% 40%' },
  { src: '/photos/mountain-river.jpeg', alt: 'Shi Haoran beside a mountain river', focus: '69% 51%' },
  { src: '/photos/seoul-blue-house.jpeg', alt: 'Shi Haoran at the Blue House in Seoul', focus: '77% 38%' },
  { src: '/photos/cathedral.jpeg', alt: 'Shi Haoran inside a cathedral', focus: '29% 41%' },
  { src: '/photos/vienna.jpeg', alt: 'Shi Haoran at Karlskirche in Vienna', focus: '28% 37%' },
  { src: '/photos/vienna-street.jpeg', alt: 'Shi Haoran by an urban water pipe installation', focus: '65% 50%' },
] as const
