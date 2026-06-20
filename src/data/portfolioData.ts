import { ProjectItem, SharingItem, TestimonialItem, PassionItem } from '../types';

// Properly import assets to ensure Vite bundles and hashes them correctly for production
import arImage1 from '../assets/images/regenerated_image_1781883990100.png';
import arImage2 from '../assets/images/regenerated_image_1781883994225.png';
import arImage3 from '../assets/images/regenerated_image_1781884110396.png';

import crossImage1 from '../assets/images/regenerated_image_1781877178618.png';
import crossImage2 from '../assets/images/regenerated_image_1781877182250.png';
import crossImage3 from '../assets/images/regenerated_image_1781877327288.png';

import arInteractImage from '../assets/images/regenerated_image_1781966022640.png';

import passionImage1 from '../assets/images/regenerated_image_1781886019594.jpg';
import passionImage2 from '../assets/images/regenerated_image_1781886023315.jpg';
import passionImage3 from '../assets/images/regenerated_image_1781886027971.jpg';
import passionImage4 from '../assets/images/regenerated_image_1781886033377.jpg';

export const iosProjects: ProjectItem[] = [
  {
    id: 'ar-1',
    title: '遗迹深度重建 // 沉浸式还原古城原貌',
    category: 'GAOCHANG RUINS AR/VR',
    description: '沉浸式还原高昌古城遗迹原貌，精准复刻残垣、城墙、丝路驿站的肌理细节，利用三维高精度数字重构手法，让体验者仿佛身临其境置身于千年前的风霜故城。',
    tags: ['古城遗迹重建', '高精肌理复刻', '沉浸式VR体验'],
    mockType: 'browser',
    mockContent: {
      title: 'Gaochang Ruins: Absolute Restoration',
      subtitle: 'GAOCHANG VR EXPERIENCE // 01',
      metric: 'UE5 RUNTIME',
      type: 'unreal',
      imageUrl: arImage1,
      color: 'from-amber-600 to-amber-700'
    }
  },
  {
    id: 'ar-2',
    title: '突破空间阻隔 // 规避实地局限性全景浏览',
    category: 'ACCESSIBILITY & SCALE',
    description: '规避实物遗存的实地局限性，安全解决古城遗址风化脆弱、部分核心区域禁止游客进入、以及遗迹现场路况不便等客观阻碍，极大拓宽遗产保护与展示的边界。',
    tags: ['全景数字漫游', '气候风化保护', '数字化无障碍'],
    mockType: 'browser',
    mockContent: {
      title: 'Gaochang Ruins: Virtual Access',
      subtitle: 'OVERCOMING PHYSICAL BOUNDS // 02',
      metric: 'ACCESSIBILITY',
      type: 'unreal',
      imageUrl: arImage2,
      color: 'from-[#FF9EC6] to-pink-600'
    }
  },
  {
    id: 'ar-3',
    title: '时空壁垒打破 // 增强历史代入感与独立全栈研发',
    category: 'INTERACTIVE HISTORY & UE5',
    description: '增强历史代入感，打破时空壁垒，让体验者直观感受古丝绸之路咽喉重镇的昔日宏伟风貌。从最初的创意草图绘制、基础白模搭建，直至虚幻引擎5（UE5）内部的整个VR交互系统 and 场景细节完善，皆由我独立开发完成。',
    tags: ['独立全栈研发', '草图至建模', 'UE5 VR交互系统'],
    mockType: 'browser',
    mockContent: {
      title: 'Gaochang Ruins: VR Completion',
      subtitle: '100% INDEPENDENT UE5 WORK // 03',
      metric: 'DUO DEVELOPMENT',
      type: 'unreal',
      imageUrl: arImage3,
      color: 'from-blue-600 to-indigo-700'
    }
  }
];

export const crossIndustryProjects: ProjectItem[] = [
  {
    id: 'cross-1',
    title: '维京祭坛 // 冰山概念与虚幻环境',
    category: 'UNREAL ENGINE 5',
    description: '《冰冻洞穴中的祭坛》是虚幻引擎5中的一个游戏环境概念。该项目基于法罗群岛的地势与环境，将维京族的神秘色彩与之完美结合，重点关注于空间层次与宏伟尺度。',
    tags: ['UE5 Environment', 'Faroe Landscape', 'Scale Design'],
    mockType: 'browser',
    mockContent: {
      title: 'Viking Altar: Frozen Cave Concept',
      subtitle: 'VOLUMETRIC ATMOSPHERE & SCALE',
      metric: '4K UE5',
      type: 'unreal',
      imageUrl: crossImage1,
      color: 'from-blue-500 to-indigo-600',
    }
  },
  {
    id: 'cross-2',
    title: '氛围造景 // 冰封、岩石与雕像群',
    category: 'ATMOSPHERE & LIGHTING',
    description: '场景主要景观元素由冰封洞穴、岩石与矗立的维京雕像共同构成。悉心雕琢极地冷调氛围、全局光照及寒霜雾效，极大增强了场景的空间纵深感与视觉张力。',
    tags: ['Ray Tracing', 'Frost Shaders', 'Viking Sculpt'],
    mockType: 'browser',
    mockContent: {
      title: 'Viking Altar: Frost & Stones',
      subtitle: 'SCENE SCALE & INTUITIVE LIGHTING',
      metric: 'LUMEN',
      type: 'unreal',
      imageUrl: crossImage2,
      color: 'from-cyan-400 to-[#FF9EC6]',
    }
  },
  {
    id: 'cross-3',
    title: '关卡设计 // 明确空间层次的世界构建',
    category: 'MOTION DESIGN SUMMARY',
    description: '作为我2026年大三下学期的核心代表作，该模型完成了高品质的区域游戏场景世界观探索，通过光线引导与结构编排明确划分了祭坛核心区的空间层次。',
    tags: ['Junior Project 2026', 'Level Design', 'Cinematics'],
    mockType: 'browser',
    mockContent: {
      title: 'Viking Altar: Altar Ritual Zone',
      subtitle: '2026 JUNIOR SPRING WORK',
      metric: 'UE5 RUNTIME',
      type: 'unreal',
      imageUrl: crossImage3,
      color: 'from-[#FF9EC6] to-pink-600',
    }
  }
];

export const switcherCategories = [
  'AR INTERACTION',
  'AR GACHAPON'
];

export const categorySwitcherData: Record<string, ProjectItem[]> = {
  'AR INTERACTION': [
    {
      id: 'ar-interact',
      title: 'AR 情绪游戏与漫游导航',
      category: 'MUSEUM AR NAVIGATOR // 情绪导航',
      description: '结合情绪博物馆和《头脑特工队》五种情绪人物形象（乐乐、忧忧、怒怒、厌厌、怕怕），将他们化身成五颗情绪球。通过手机APP内的AI情绪导航“乐乐”的语音与微动效提示，指引体验者层层探索、完成各楼层的趣味交互AR游戏，顺利通关获得对应的彩色情绪球。',
      tags: ['AR 导航与定位', '乐乐语音引导', '情绪空间拼图', '情绪球收集'],
      mockType: 'portrait',
      mockContent: {
        title: 'AR Emotion Game Master',
        subtitle: 'EMOTION BALL COLLECTED // 04',
        metric: 'AR GAMEPLAY',
        type: 'ar-game',
        imageUrl: arInteractImage,
        color: 'from-amber-400 to-orange-500'
      }
    }
  ],
  'AR GACHAPON': [
    {
      id: 'ar-gachapon',
      title: 'AR智能“扭扭机”礼物兑换仓',
      category: 'GACHAPON AR MACHINE // 视频展示',
      description: '当成功集齐五层楼代表不同心境的五个情绪球之后，APP将解锁惊喜AR扭蛋机模块。在真实空间中三维投射出《头脑特工队》主题扭扭机，通过手机端摇杆交互即可完成情绪能量的注入与实体特制纪念礼物的现场兑换，极富仪式感。',
      tags: ['AR 场景投射', '三维扭扭机制', '情绪球大满贯', '实体礼品兑换'],
      mockType: 'portrait',
      mockContent: {
        title: 'AR Toy Gachapon Capsule',
        subtitle: 'FULL COLLECTED REWARDS // 05',
        metric: 'GIFT UNLOCKED',
        type: 'ar-toy',
        imageUrl: 'https://i.postimg.cc/vD0msb4B/Group-875.png',
        videoUrl: 'https://www.capcut.cn/share/7653505527582004542?t=1',
        color: 'from-pink-500 to-[#FF9EC6]'
      }
    }
  ]
};

export const sharingItems: SharingItem[] = [
  {
    id: 'share-1',
    title: 'Adobe Live UX/UI Interactive Workshop Series',
    type: 'workshop',
    platformString: 'Interactive Prototyping Masterclass',
    attendees: '2,400+ Active Students',
    badge: 'MUST SEE'
  },
  {
    id: 'share-2',
    title: 'Fluid Design Systems with React & CSS 3D',
    type: 'book',
    platformString: 'Self-Published Guidebook',
    attendees: '10,000+ Electronic Copies Sold',
    badge: 'POPULAR'
  },
  {
    id: 'share-3',
    title: 'Brutalist Typography & the Web Revolution',
    type: 'talk',
    platformString: 'Design Frontiers Keynote Speaker',
    attendees: 'Recorded Live in Tokyo, Japan',
    badge: 'RECORDING'
  },
  {
    id: 'share-4',
    title: 'How to Build Interactive Canvas Web Audio Synths',
    type: 'article',
    platformString: 'Medium Design Publication Columnist',
    attendees: 'Shared by 15,000+ Frontend Developers',
    badge: 'FREE READ'
  }
];

export const testimonialItems: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: "“Johny's attention to detail is sublime. His custom prototypes and 3D mockups look feels clean, extremely responsive, and beautifully interactive. He completely bridges the gap between design and high-end Webflow limits.”",
    author: 'Scott Belsky',
    role: 'Former Chief Product Officer',
    company: 'Adobe Design Systems'
  },
  {
    id: 'test-2',
    quote: "“The vertical slider transitions and CSS 3D parallax effects he crafted for our cockpit console blew our engineers away. He does not just sketch slides, he plays directly with high-performance code.”",
    author: 'Rajeswari Ramaswamy',
    role: 'Core Hardware Design Principal',
    company: 'Tesla Motors Dashboard Group'
  },
  {
    id: 'test-3',
    quote: "“His workshops are absolute masterclasses on Web Audio and WebGL. He has transformed the way our agency visualizes health metrics, turning flat graphs into real pieces of beautiful interactive art.”",
    author: 'Aiko Tanaka',
    role: 'Executive Design Director',
    company: 'Tokyo Interactive Labs'
  }
];

export const passionItems: PassionItem[] = [
  {
    id: 'pass-1',
    title: 'IPad创意人物头像创作',
    category: 'CREATIVE SKETCHES // 01',
    imageUrl: passionImage1,
    aspectRatio: 'aspect-square'
  },
  {
    id: 'pass-2',
    title: '课余温润写生与光理塑造',
    category: 'LIGHT & STYLE ILLUSTRATIONS // 02',
    imageUrl: passionImage2,
    aspectRatio: 'aspect-[3/4]'
  },
  {
    id: 'pass-3',
    title: '贯穿大学生活的视觉记录',
    category: 'IPAD DIGITAL PAINTINGS // 03',
    imageUrl: passionImage3,
    aspectRatio: 'aspect-[4/3]'
  },
  {
    id: 'pass-4',
    title: '色彩重构与灵魂刻画',
    category: 'PORTRAIT & CHARACTER DESIGN // 04',
    imageUrl: passionImage4,
    aspectRatio: 'aspect-square'
  }
];
