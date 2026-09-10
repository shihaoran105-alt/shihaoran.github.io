// 网站的“内容控制台”：中英文履历、文章和照片都集中在这里，便于后续更新。
export type Language = 'en' | 'zh'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

const sharedProfile = {
  email: 'shihaoran105@outlook.com',
  portrait: asset('photos/cv-cover.jpg'),
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
      journeys: 'Journeys', journeyArchive: 'Travel journal', openStory: 'Read this journey', storyDraft: 'Story and photographs coming soon', dateTbd: 'Date to be added', ongoing: 'Ongoing',
      startConversation: 'Start a conversation', email: 'Email', emailPlaceholder: 'Your email', stayInTouch: 'Stay in touch',
      newsletterTitle: 'Letters, occasionally.', newsletterText: 'Thoughts worth sharing, straight to your inbox.',
      subscribed: 'Thanks — you’re on the list!', switchLanguage: '切换到中文', menu: 'Open menu',
    },
    profile: {
      ...sharedProfile, name: 'Shi Haoran', location: 'Hong Kong · Beijing',
      headline: 'I explore intelligent systems and build practical AI tools.',
      intro: 'I study Internet of Things with a Secondary Major in Artificial Intelligence and Data Analytics (AIDA) at The Hong Kong Polytechnic University. My work spans AI agents, machine learning, local knowledge systems, medical imaging, and technology research.',
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
      { degree: 'B.Eng. in Internet of Things', school: 'The Hong Kong Polytechnic University · 2024 — Present', detail: 'Secondary Major in Artificial Intelligence and Data Analytics (AIDA) · Minor in Computer Science' },
      { degree: 'Cyber Security & Machine Learning Study Tour', school: 'Brno University of Technology · Aug 2025', detail: 'PolyU BUT study tour in the Czech Republic.' },
      { degree: 'Astronomy Summer Session', school: 'University of California, Berkeley · Jun — Aug 2023', detail: 'Designed a supply system for a proposed human habitation base on Titan as part of a team project.' },
      { degree: 'Beijing 21st Century International School', school: 'Mar 2022 — Jul 2024', detail: 'President of the Computer Club and Environmental Research Club · Instructor for the Robotics Mutual Learning Course · ACT 33 · Eight AP courses' },
      { degree: 'Beijing Bayi School', school: 'Sep 2018 — Feb 2022', detail: 'Member of the Robotics Competition Team and the Student Union Publicity Department.' },
    ],
    skills: [
      ['AI & Data', 'Machine learning, local deployment of AI large language models, SQL, MongoDB'],
      ['Programming & Web', 'Python, Java, C++, HTML'],
      ['IoT & Engineering', 'MQTT, MATLAB, Internet of Things'],
      ['Agents & Research', 'Agent Skills, knowledge bases, literature review, technology policy'],
      ['Creative Tools', 'Adobe Premiere Pro video editing, Adobe Photoshop image editing'],
      ['Languages', 'Mandarin Chinese, English · TOEFL 101, Japanese'],
      ['Interests', 'Travel, fitness, anime, music, reading, and writing'],
    ],
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
    journeys: [
      { slug: 'czechia', location: 'Prague & Brno · Czechia', date: 'August 2025', title: 'Two rhythms in Central Europe', excerpt: 'From Prague’s layered streets to the quieter, student-facing rhythm of Brno.', image: asset('journal/Czech/brno-cover.jpg'), focus: '38% 48%' },
      { slug: 'vienna', location: 'Vienna · Austria', date: 'August 2025', title: 'A city composed like music', excerpt: 'Domes, late-summer light, and the elegant order of Vienna’s streets.', image: asset('photos/vienna.jpeg'), focus: '28% 37%' },
      { slug: 'taiwan', location: 'Taiwan, China', date: 'May 2025', title: 'Between mountains and island streets', excerpt: 'An island journey shaped by food, neighborhoods, and changing weather.', image: asset('journal/Taiwan/web-v2/01-jiufen-selfie.jpg'), focus: '46% 44%' },
      { slug: 'yogyakarta-service-learning', location: 'Yogyakarta · Indonesia', date: 'Date to be added', title: 'Eye care through service learning', excerpt: 'A service-learning experience connecting eye-care support, community engagement, and learning beyond the classroom.', image: asset('photos/prambanan.jpeg'), focus: '27% 45%' },
      { slug: 'japan', location: 'Kansai, Kanto & Shikoku · Japan', date: 'Date to be added', title: 'Concerts and the texture of local life', excerpt: 'Moving between concerts, regional trains, city nights, and ordinary daily scenes.', image: null, focus: '50% 50%' },
      { slug: 'korea', location: 'Seoul · Korea', date: 'December 2025', title: 'A winter walk through Seoul', excerpt: 'Cold blue skies, civic landmarks, and a city seen at walking pace.', image: asset('photos/seoul-blue-house.jpeg'), focus: '77% 38%' },
      { slug: 'hong-kong', location: 'Hong Kong', date: 'Ongoing', title: 'Learning in a vertical city', excerpt: 'Campus routines, harbor light, and the everyday life around studying.', image: null, focus: '50% 50%' },
      { slug: 'guangdong', location: 'Guangdong', date: 'Ongoing', title: 'Notes from everyday life', excerpt: 'Familiar streets, meals, conversations, and the warmth of the south.', image: null, focus: '50% 50%' },
      { slug: 'beijing', location: 'Beijing', date: 'Ongoing', title: 'Living with a city of many layers', excerpt: 'Work, home, changing seasons, and fragments of ordinary Beijing life.', image: null, focus: '50% 50%' },
      { slug: 'hebei', location: 'Hebei', date: 'Date to be added', title: 'From the mountains to the sea', excerpt: 'A route across changing terrain, from northern ridgelines toward the coast.', image: null, focus: '50% 50%' },
      { slug: 'sichuan', location: 'Sichuan', date: 'Date to be added', title: 'The road into Shu is hard', excerpt: 'Mountains, rivers, old roads, and the scale hidden inside Sichuan’s landscape.', image: asset('photos/mountain-river.jpeg'), focus: '69% 51%' },
      { slug: 'xian', location: 'Xi’an', date: 'Date to be added', title: 'Solitude in an ancient capital', excerpt: 'Walking alone through historical weight, city walls, and the present day.', image: null, focus: '50% 50%' },
    ],
  },
  zh: {
    nav: { cv: '履历', journal: '随笔', photos: '照片', about: '关于' },
    ui: {
      viewWork: '查看项目', readJournal: '阅读随笔', selectedWork: '代表项目', experience: '实习经历', education: '教育背景', skills: '技能', publication: '论文', awards: '奖项',
      featuredEssay: '精选文章', journal: '文章', readLatest: '阅读最新文章', draft: '文章正在撰写中', photoDiary: '照片日记', viewPhotos: '查看全部照片', all: '全部', close: '关闭',
      journeys: '旅程', journeyArchive: '旅行手记', openStory: '阅读这段旅程', storyDraft: '正文与更多照片待补充', dateTbd: '日期待补充', ongoing: '持续记录',
      startConversation: '和我联系', email: '邮箱', emailPlaceholder: '你的邮箱', stayInTouch: '保持联系', newsletterTitle: '偶尔来信。', newsletterText: '把值得分享的思考，直接送到你的邮箱。',
      subscribed: '谢谢，你已成功订阅！', switchLanguage: 'Switch to English', menu: '打开菜单',
    },
    profile: {
      ...sharedProfile, name: '石浩然', location: '香港 · 北京',
      headline: '探索智能系统，打造真正实用的 AI 工具。',
      intro: '我就读于香港理工大学物联网工程专业，同时修读人工智能及数据分析（AIDA）第二主修和计算机科学副修。我的实践横跨 AI Agent、机器学习、本地知识系统、医学影像与科技研究。',
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
      { degree: '物联网工程学士', school: '香港理工大学 · 2024 — 至今', detail: '人工智能及数据分析（AIDA）第二主修 · 计算机科学副修' },
      { degree: '网络安全与机器学习研学', school: '布尔诺理工大学 · 2025.08', detail: '参加香港理工大学与布尔诺理工大学在捷克联合开展的研学项目。' },
      { degree: '天文学暑期课程', school: '加州大学伯克利分校 · 2023.06 — 2023.08', detail: '在团队项目中，为设想中的土卫六人类居住基地设计物资供应系统。' },
      { degree: '北京二十一世纪学校', school: '2022.03 — 2024.07', detail: '电脑社社长 · 环境研究社社长 · 机器人 Mutual Learning Course 讲师 · ACT 33 · 修读八门 AP 课程' },
      { degree: '北京市八一学校', school: '2018.09 — 2022.02', detail: '机器人竞赛队队员 · 学生会宣传部成员' },
    ],
    skills: [
      ['AI 与数据', '机器学习、AI 大模型本地部署、SQL、MongoDB'],
      ['编程与 Web', 'Python、Java、C++、HTML'],
      ['物联网与工程', 'MQTT、MATLAB、物联网'],
      ['Agent 与研究', 'Agent Skills、知识库、文献综述、科技政策'],
      ['创意工具', 'Adobe Premiere Pro 视频剪辑、Adobe Photoshop 图片编辑'],
      ['语言', '普通话、英语（TOEFL 101）、日语'],
      ['兴趣爱好', '旅游、健身、动漫、音乐、读书与写作'],
    ],
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
    journeys: [
      { slug: 'czechia', location: '捷克 · 布拉格与布尔诺', date: '2025 年 8 月', title: '中欧的两种节奏', excerpt: '从布拉格层叠的街巷，到布尔诺更安静、更贴近学生生活的城市节奏。', image: asset('journal/Czech/brno-cover.jpg'), focus: '38% 48%' },
      { slug: 'vienna', location: '奥地利 · 维也纳', date: '2025 年 8 月', title: '一座像音乐一样被编排的城市', excerpt: '穹顶、夏末的光，以及维也纳街道里优雅而克制的秩序。', image: asset('photos/vienna.jpeg'), focus: '28% 37%' },
      { slug: 'taiwan', location: '中国台湾省', date: '2025 年 5 月', title: '山海之间的岛屿街巷', excerpt: '由食物、社区、山景与不断变化的天气共同构成的一段旅程。', image: asset('journal/Taiwan/web-v2/01-jiufen-selfie.jpg'), focus: '46% 44%' },
      { slug: 'yogyakarta-service-learning', location: '印度尼西亚 · 日惹', date: '日期待补充', title: '在服务学习中看见眼健康', excerpt: '一次连接眼科服务、社区参与与课堂之外实践学习的旅程。', image: asset('photos/prambanan.jpeg'), focus: '27% 45%' },
      { slug: 'japan', location: '日本 · 关西、关东与四国', date: '日期待补充', title: '演唱会与当地生活的纹理', excerpt: '在演唱会、地方列车、城市夜晚和日常生活之间移动。', image: null, focus: '50% 50%' },
      { slug: 'korea', location: '韩国 · 首尔', date: '2025 年 12 月', title: '冬日漫步首尔', excerpt: '冷冽的蓝天、城市地标，以及用步行速度重新观察一座城市。', image: asset('photos/seoul-blue-house.jpeg'), focus: '77% 38%' },
      { slug: 'hong-kong', location: '香港', date: '持续记录', title: '在一座垂直城市里学习', excerpt: '校园日常、海港光线，以及围绕学习展开的普通生活。', image: null, focus: '50% 50%' },
      { slug: 'guangdong', location: '广东', date: '持续记录', title: '岭南日常札记', excerpt: '熟悉的街道、饭桌、谈话，以及南方生活的温度。', image: null, focus: '50% 50%' },
      { slug: 'beijing', location: '北京', date: '持续记录', title: '生活在层层叠叠的城市里', excerpt: '工作、居住、四季变化，以及北京日常生活的碎片。', image: null, focus: '50% 50%' },
      { slug: 'hebei', location: '河北', date: '日期待补充', title: '从山到海', excerpt: '从北方山脊走向海岸，在不断变化的地貌之间穿行。', image: null, focus: '50% 50%' },
      { slug: 'sichuan', location: '四川', date: '日期待补充', title: '蜀道难', excerpt: '山、江河、古道，以及四川地理尺度中隐藏的壮阔。', image: asset('photos/mountain-river.jpeg'), focus: '69% 51%' },
      { slug: 'xian', location: '西安', date: '日期待补充', title: '古都的孤独', excerpt: '独自走过历史的重量、城墙，以及仍在发生的当下。', image: null, focus: '50% 50%' },
    ],
  },
} as const

export const journalCover = { src: asset('photos/journal-cover.jpeg'), alt: 'Shi Haoran at Taman Sari in Yogyakarta', focus: '70% 45%' }

export const brnoGallery = [
  { src: asset('journal/Czech/brno-cover.jpg'), layout: 'wide', focus: 'center', en: 'Evening above Brno — a first view of the city.', zh: '布尔诺的傍晚——从高处第一次看见这座城市。' },
  { src: asset('journal/Czech/but-campus.jpeg'), layout: 'seven', focus: 'center', en: 'Old and new architecture meet on the BUT campus.', zh: '布尔诺理工大学校园里，新旧建筑在同一片光线中相遇。' },
  { src: asset('journal/Czech/but-ducks.jpeg'), layout: 'five', focus: 'center', en: 'A playful detail by the university pond.', zh: '大学水池边，一个轻松而意外的细节。' },
  { src: asset('journal/Czech/brno-night.jpg'), layout: 'wide', focus: 'center 44%', en: 'Tram lines draw the city together after dark.', zh: '入夜之后，电车轨道把城市的方向连接起来。' },
  { src: asset('journal/Czech/spilberk-castle.jpg'), layout: 'seven', focus: 'center', en: 'Špilberk Castle in the last warm light of the day.', zh: '一天最后的暖光落在斯皮尔博城堡上。' },
  { src: asset('journal/Czech/cellar-restaurant.jpg'), layout: 'five portrait', focus: 'center', en: 'Dinner beneath a brick vault.', zh: '砖砌拱顶之下的一顿晚餐。' },
  { src: asset('journal/Czech/mendel-abbey.jpg'), layout: 'seven', focus: 'center', en: 'The abbey where Gregor Mendel carried out his experiments.', zh: '孟德尔开展遗传实验的修道院。' },
  { src: asset('journal/Czech/mendel-manuscript.jpg'), layout: 'five', focus: 'center', en: 'Mendel’s notation, seen at close range.', zh: '近距离观看孟德尔手稿中的遗传符号。' },
  { src: asset('journal/Czech/brno-lake.jpg'), layout: 'wide', focus: 'center', en: 'Golden light on the water at the edge of Brno.', zh: '布尔诺城市边缘，金色的光落在水面上。' },
] as const

export const taiwanGallery = [
  { src: asset('journal/Taiwan/web-v2/01-jiufen-selfie.jpg'), layout: 'wide', focus: 'center 45%', en: 'Lanterns and layered teahouses in Jiufen.', zh: '九份层叠的茶楼与灯笼，构成旅程的第一幕。' },
  { src: asset('journal/Taiwan/web-v2/02-taipei-rain.jpg'), layout: 'five portrait', focus: 'center', en: 'Rain turns an ordinary Taipei lane into a field of reflections.', zh: '雨水把台北寻常的街巷变成一片倒影。' },
  { src: asset('journal/Taiwan/web-v2/03-jiufen-sunset.jpg'), layout: 'seven', focus: 'center', en: 'The coast appears beyond Jiufen at sunset.', zh: '黄昏时，从九份望见远处的山海。' },
  { src: asset('journal/Taiwan/web-v2/04-alishan-pond.jpg'), layout: 'seven', focus: 'center', en: 'A quiet pause beside Sister Ponds in Alishan.', zh: '阿里山姐妹潭边，一段安静的停留。' },
  { src: asset('journal/Taiwan/web-v2/05-alishan-forest.jpg'), layout: 'five portrait', focus: 'center', en: 'Looking upward into the ancient forest.', zh: '仰望阿里山古老而茂密的森林。' },
  { src: asset('journal/Taiwan/web-v2/06-taipei-station.jpg'), layout: 'wide', focus: 'center', en: 'Taipei Main Station glowing after the rain.', zh: '雨后的台北车站，在夜色中发亮。' },
  { src: asset('journal/Taiwan/web-v2/07-tunghai.jpg'), layout: 'five portrait', focus: 'center', en: 'Geometry, brick, and blue sky at Tunghai University.', zh: '东海大学里，砖墙的几何线条切向蓝天。' },
  { src: asset('journal/Taiwan/web-v2/08-food.jpg'), layout: 'seven', focus: 'center', en: 'Xiaolongbao and a cold drink between walks.', zh: '步行间隙的一份小笼包与冰饮。' },
  { src: asset('journal/Taiwan/web-v2/09-jade.jpg'), layout: 'five portrait', focus: 'center', en: 'A jade cabbage observed at close range.', zh: '在博物馆里近距离观看玉白菜。' },
  { src: asset('journal/Taiwan/web-v2/10-ximending.jpg'), layout: 'seven', focus: 'center', en: 'Ximending stays bright beneath a wet night sky.', zh: '雨夜之下，西门町依然明亮而热闹。' },
  { src: asset('journal/Taiwan/web-v2/11-taichung-bike.jpg'), layout: 'wide', focus: 'center', en: 'Exploring Taichung at the pace of a bicycle.', zh: '用一辆自行车的速度认识台中。' },
] as const

export const photos = [
  { src: asset('photos/prambanan.jpeg'), alt: 'Shi Haoran at Prambanan Temple, Indonesia', focus: '27% 45%' },
  { src: asset('photos/aviation-museum.jpeg'), alt: 'Shi Haoran in front of a helicopter', focus: '51% 49%' },
  { src: asset('photos/panda-city.jpeg'), alt: 'Shi Haoran with a panda sculpture in the city', focus: '61% 40%' },
  { src: asset('photos/mountain-river.jpeg'), alt: 'Shi Haoran beside a mountain river', focus: '69% 51%' },
  { src: asset('photos/seoul-blue-house.jpeg'), alt: 'Shi Haoran at the Blue House in Seoul', focus: '77% 38%' },
  { src: asset('photos/cathedral.jpeg'), alt: 'Shi Haoran inside a cathedral', focus: '29% 41%' },
  { src: asset('photos/vienna.jpeg'), alt: 'Shi Haoran at Karlskirche in Vienna', focus: '28% 37%' },
  { src: asset('photos/vienna-street.jpeg'), alt: 'Shi Haoran by an urban water pipe installation', focus: '65% 50%' },
] as const
