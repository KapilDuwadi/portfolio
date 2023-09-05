
"use client";
import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { DiGithubBadge } from 'react-icons/di';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <div className='text-center font-light text-xl pb-5 2xl:text-2xl'>
      <h1 className='text-5xl 2xl:text-6xl text-gray-600 tracking-wide pb-5'>
        Hi, I&apos;m <span className='font-bold'> Kapil Duwadi </span></h1>
      <p className='pb-1'> Research Engineer | Software Developer </p>
      <p> MS in Electrical Engineering</p>
    </div>
  )
}

const SocialMediaIcons: React.FC = () => {
  return (
    <div className='flex justify-center 
      gap-x-10 text-4xl text-gray-600 pb-10 2xl:text-6xl'>
      <Link href="https://www.linkedin.com/in/kapil-duwadi/"> <CiLinkedin className="hover:text-purple-700" /> </Link>
      <Link href="https://github.com/KapilDuwadi"> <DiGithubBadge className="hover:text-purple-700" /> </Link>
    </div>
  )
}

const ActionButtons: React.FC = () => {
  const buttonClass = `bg-purple-700 text-white px-3 py-1 rounded-md 
   text-xl 2xl:text-2xl 2xl:py-2 2xl:px-5 hover:bg-purple-900`
  return (
    <div className='flex justify-center gap-x-10 py-5 2xl:gap-x-40'>
      <button className={buttonClass}> <Link href="https://forms.gle/dsumB6cCgD3gHMER8"> Connect with me </Link></button>
      <button className={buttonClass}> <Link href="https://raw.githubusercontent.com/KapilDuwadi/portfolio/main/resume.pdf"> Resume </Link> </button>
    </div>
  )
}

interface BigNumberInterface {
  value: number;
  description: string;
}

const BigNumbers: React.FC = () => {

  const numbers: BigNumberInterface[] = [
    {
      value: 8,
      description: "Power Utility Clients"
    },
    {
      value: 6,
      description: "Open Source Software"
    },
    {
      value: 4,
      description: "Years of work experience"
    }
  ]
  return (
    <div className='grid grid-cols-1 pt-20  gap-y-5
      place-items-center text-center font-light md:grid-cols-3 pb-5'>
      {
        numbers.map((item: BigNumberInterface) => {
          return (
            <div key={item.description}>
              <h1 className='text-8xl text-purple-700'> {item.value} </h1>
              <p className='text-xl pt-3 2xl:text-2xl'> {item.description} </p>
            </div>
          )
        }
        )
      }
    </div>
  )
}

interface FooterLinkInterface {
  name: string;
  url: string;
}

const Footer: React.FC = () => {
  const footerLinks: FooterLinkInterface[] = [
    {
      name: "Clients",
      url: "clients"
    },
    {
      name: "Skills",
      url: "skills"
    },
    {
      name: "Open Source Software",
      url: "open-source-software"
    },
    {
      name: "Education",
      url: "education"
    },
    {
      name: "Projects",
      url: "projects"
    }
  ]
  return (
    <div className='grid grid-cols-2 text-purple-700 text-xl 2xl:text-2xl font-light gap-y-10'>
      {
        footerLinks.map((item: FooterLinkInterface) => {
          return (
            <Link href={item.url} key={item.name}> {item.name} </Link>
          )
        })
      }
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen ">
      <div className="p-20 bg-[rgba(255,255,255,0.6)]">
        <HeroSection />
        <SocialMediaIcons />
        <ActionButtons />
        <BigNumbers />
      </div>
      <div className='p-20 2xl:px-40 2xl:py-10'>
        <Footer />
      </div>
    </main>
  )
}
