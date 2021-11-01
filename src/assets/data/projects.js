import { v4 as uuidv4 } from 'uuid';
import Sedes from '../images/Sedes.jpg';
import Golfbays from '../images/Golf-bays.jpg';
import PPGunImg from '../images/PPgun.jpg';
import F35HelmetImg from '../images/f35Helmetfront.jpg';
import ComputerImg from '../images/ComputerFrame.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Sedes',
    desc:
      'Our VR Monocoque that makes cockpit simulation worth it. Multiple seating configurations optomized for driving and flying.',
    img: Sedes,
  },
  {
    id: uuidv4(),
    name: 'Sim Bay',
    desc:
      'Custom Golf Simulator for analyzing your game or having fun. AI Swing Coach analyzes your swing real time to provide pointers. Data does not lie.',
    img: Golfbays,
  },
  {
    id: uuidv4(),
    name: 'vRay Special',
    desc: 'Our take on an arcade pistol.',
    img: PPGunImg,
  },
  {
    id: uuidv4(),
    name: 'Fighterlite',
    desc:
      'Inspired by fighter pilots for look and weight distribution, the only helmet upgrade available for select VR headsets.',
    img: F35HelmetImg,
  },
  {
    id: uuidv4(),
    name: 'Aesthetic Computer Frame',
    desc:
      'Display your computer on your wall with style in our Picture Frame Computer Case.',
    img: ComputerImg,
  },
];

export default projects;
