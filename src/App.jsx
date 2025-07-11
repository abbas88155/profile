import React from 'react'
import NavBarMain from './componentes/nav/NavBarMain'
import HeaderMain from './componentes/Header/HeaderMain'
import AboutMeMain from './componentes/aboutMeSectoins/AboutMeMain'
import SkillsMain from './componentes/skills/SkillsMain'
import ExMain from './componentes/expereins/ExMain'
import ImgSkills from './componentes/skills/ImgSkills'
import ProjeactMain from './componentes/projects/ProjeactMain'
import ContactMain from './componentes/contact/ContactMain'
import FotterMain from './componentes/footer/FotterMain'

function App() {
  return (
    <div>
      <NavBarMain/>
      <HeaderMain/>
      <AboutMeMain/>
      <SkillsMain/>
      <ImgSkills/>
      <ExMain/>
      <ProjeactMain/>/
      <ContactMain/>
      <FotterMain/>
    </div>
  )
}

export default App