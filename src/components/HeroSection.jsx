import { ArrowDown } from 'lucide-react';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section id='hero' className='relative min-h-screen flex flex-col items-center justify-center px-4'>
      <div className='container max-w-4xl mx-auto text-center z-10'>
        <div className='space-y-6'>
          <h1 className='text-4xl md:text-5xl font-bold tracking-tight'>
            <span className='opacity-0 animate-fade-in'>Hi, I'm </span>
            <TypeAnimation
              sequence={[
                'Mohammad Adnan Shakil',
                2000,
                '',
                500,
                'a Web Developer',
                2000,
                '',
                500,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ color: '#a78bfa' }}
              className='opacity-0 animate-fade-in-delay-1'
            />
          </h1>
          <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3'>
            I'm a passionate Computer Science student and aspiring full-stack developer, committed to crafting clean, responsive, and user-focused web experiences. Always eager to learn, build, and solve real-world problems through code.
          </p>
          <div>
            <a href="#projects" className='cosmic-button opacity-0 animate-fade-in-delay-4'>
              View my work
            </a>
          </div>
        </div>
      </div>

      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
        <span> Scroll </span>
        <ArrowDown className='h-5 w-5 text-primary' />
      </div>
    </section>
  );
};

export default HeroSection;
