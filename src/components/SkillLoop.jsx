import LogoLoop from './React-bits-Components/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiBootstrap, SiJavascript, SiHtml5, SiCss } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com/" },
  { node: <SiJavascript />, title: "Javascript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiHtml5 />, title: "HTML", href: "#" },
  { node: <SiCss/>, title: "CSS", href: "#" },
];


function SkillLoop() {
  return (
    <div className='mt-5' style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      {/* Basic horizontal loop */}
    
      
      {/* Vertical loop with deceleration on hover */}
      <LogoLoop
        logos={techLogos}
        speed={40}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        fadeOut
  useCustomRender={false}
/>
    </div>
  
  )
}

export default SkillLoop