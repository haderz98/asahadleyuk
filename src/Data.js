import VRSSLogo from "./images/vrss.png";
import TalkoutLogo from "./images/to.png";
import EBikeVideo from "./videos/eBike.mp4";
import NPCCVideo from "./videos/npcc_ppe.mp4";
import PicoVideo from "./videos/pico_adb.mp4";
import StopSearchVideo from "./videos/stop_search.mp4";
import DisclosureVideo from "./videos/disclosure.mp4";
import UoWTourVideo from "./videos/uow_tour.mp4";

const ExperienceData = [
  {
    logo: TalkoutLogo,
    name: "Talkout",
    description: [
      "• Worked as part of a small team to develop a VR content delivery platform for the Pico Neo 3 VR headset.",
      "• Developed a VR Fire Extinguisher Safety training module for UK Fire Group.",
      "• Worked with Halfords to recreate their eMobility/eBike training in a virtual reality environment.",
    ],
    skills: ["Unity3D", "C#", "Java", "Android Native"],
  },
  {
    logo: VRSSLogo,
    name: "Virtual Reality Simulation Systems",
    description: [
      "• Developed virtual reality 360 tours for the University of Wolverhampton, Great Western Railway and the Martin James Foundation.",
      "• Created a Stop and Search training experience for GWENT Police Constabulary.",
    ],
    skills: ["Unity3D", "C#", "Xcode", "HTML", "CSS"],
  },
];

const WorkData = [
  {
    vidUrl: EBikeVideo,
    name: "eBike Training",
    description: [
      "• VR training software developed for Halfords to assist with their eBike/eMobility course.",
      "• I developed the eBike and component information module and also created a bike pedal interaction system.",
    ],
  },
  {
    vidUrl: NPCCVideo,
    name: "NPCC COVID-19 PPE Mini Game",
    description: [
      "• A point and click mini game that I developed for the College of Policing to provide PPE training for officers at the start of the COVID-19 pandemic.",
    ],
  },
  {
    vidUrl: PicoVideo,
    name: "Pico Neo 3 ADB Tool",
    description: [
      "• I designed and developed a tool that provided easy setup of the Pico Neo 3 VR headset.",
      "• Written in C# and using WPF, the application provides a clean font-end for performing the core ADB commands required for setup.",
    ],
  },
  {
    vidUrl: StopSearchVideo,
    name: "GWENT Police Stop & Search",
    description: [
      "• Sole developer on a Stop & Search training module for GWENT Police.",
      "• Developed a random spawning system to popular the vehicle and NPCs with items and a system to simulate a 'Pat-Down' search on an NPC.",
    ],
  },
  {
    vidUrl: DisclosureVideo,
    name: "GWENT Police Disclosure",
    description: [
      "• Sole developer on a Disclosure training module for GWENT Police.",
      "• Created a system that allows the user to practice completing various documents and forms that would have to be completed at a police station.",
    ],
  },
  {
    vidUrl: UoWTourVideo,
    name: "Aspire to HE (UoW) Virtual Tour",
    description: [
      "• Worked closely with UOW to develop a 360° Virtual Tour of their City Campus for the Pico G2 VR Headset.",
      "• Developed a LAN classroom experience that allows a remote control of multiple VR headsets at once.",
    ],
  },
];

export { ExperienceData, WorkData };
