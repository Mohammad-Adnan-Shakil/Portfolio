import React from 'react'
import { Code } from 'lucide-react'
import { User } from 'lucide-react'
import { Briefcase } from 'lucide-react'

const AboutMe = () => {
  return (
    <section id='about' className='py-24 px-4 relative'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                About <span className='text-primary'> Me </span></h2>

        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center '>
            {/* left box */}
            <div className='space-y-6 fade-in-left'>
                <h3 className='text-2xl font-semibold'>Fuelled by Passion, Focused on Growth</h3>
                <p className='text-muted-foreground '>
                    I'm a Computer Science Engineering student with a strong passion for building full-stack web applications that are clean, functional, and user-centric. What started as a curiosity for how websites work has turned into a deep drive to create meaningful digital experiences through code. I enjoy turning ideas into real-world solutions using technologies like React, JavaScript, and beyond.
                </p>

                <p className='text-muted-foreground' >
                    I'm always exploring new tools, learning modern frameworks, and sharpening my problem-solving skills. My current focus is on becoming a full-stack developer and contributing to impactful projects — whether it’s through internships, hackathons, or personal creations. I believe in continuous growth, and my dream is to work at a top tech company where I can learn, collaborate, and make a real difference.
                </p>

                <div className='flex flex-col sm:flex-row gap:-4 justify-center '>
                    <a href="#contact" className='cosmic-button'>
                        Get in touch 

                    </a>

                </div>

            </div>
            {/* right box */}
            <div className='grid grid-col-1 gap-5 fade-in-right'>
                <div className='gradient-border p-6 card-hover '>
                    <div className='flex items-start gap-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                        <Code className='w-6 h-6 text-primary'/>
                        </div>
                        <div className='text-left '>
                            <h4 className='font-semibold text-lg'>Web Development</h4>
                            <p className='text-muted-foreground'>Creating responsive websites and web applications with modern frameworks.</p>
                        </div>
                    </div>
                </div>
                <div className='gradient-border p-6 card-hover '>
                     <div className='flex items-start gap-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                        <User className='w-6 h-6 text-primary'/>
                        </div>
                         <div className='text-left '>
                            <h4 className='font-semibold text-lg'>Problem Solving</h4>
                            <p className='text-muted-foreground'>Building logical thinking through code, challenges, and real-world projects.</p>
                        </div>
                    </div>
                </div>
                <div className='gradient-border p-6 card-hover '>
                     <div className='flex items-start gap-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                        <Briefcase className='w-6 h-6 text-primary'/>
                        </div>
                         <div className='text-left '>
                            <h4 className='font-semibold text-lg'>Continuous Learning</h4>
                            <p className='text-muted-foreground'>Always expanding my knowledge through new tools, tech stacks, and hands-on practice.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </section>
  )
}

export default AboutMe
