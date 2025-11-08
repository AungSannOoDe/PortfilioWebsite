import React from 'react'
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import SkiilSection from '@/components/SkiilSection';
import AboutSection from '@/components/AboutSection';
import Education from '@/components/Education';
import ProjectSection from '@/components/ProjectSection';
import ProjectTimeline from '@/components/ProjectTimeline';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';
import FinishedProject from '@/components/FinishedProject';
const HomePage = () => {
  return (
   <>
     <Navbar/>
    <Layout>
    <HeroSection/>
    </Layout>
     <IntroSection/>
     <Layout>
      <Education/>
     </Layout>
     <ProjectTimeline/>
     <ProjectSection/>
     <AboutSection/>
     <FinishedProject/>
     <ContactSection/>
     <FooterSection/>
   </>
  )
}

export default HomePage