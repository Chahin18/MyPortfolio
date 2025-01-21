import logo from '@/app/Logo.png';
import logoo from '@/app/chahinn.png';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const words: string[] = ['web apps',  'mobile apps'];

function Section1() {    
  const [currentText, setCurrentText] = useState<string>('');
  const dataText: string[] = words;

  useEffect(() => {
    function typeWriter(text: string, i: number, fnCallback: () => void) {
      if (i < text.length) {
        const newText = text.substring(0, i + 1);
        setCurrentText(newText);
        setTimeout(() => {
          typeWriter(text, i + 1, fnCallback);
        }, 100);
      } else if (typeof fnCallback === 'function') {
        setTimeout(fnCallback, 700);
      }
    }

    function startTextAnimation(i: number) {
      if (i < dataText.length) {
        typeWriter(dataText[i], 0, () => {
          startTextAnimation(i + 1);
        });
      } else {        
        setTimeout(() => {
          startTextAnimation(0);
        }, 700);
      }
    }
    startTextAnimation(0);
  }, []); 

  return (
    
    <div className='section-1' style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
        <Image className='logo hover-target' src={logo} alt='' style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 100 }} /> {/* Image en haut à gauche */}
        <Image 
  src={logoo} 
  alt='' 
  style={{ 
    marginRight: '45px', 
    height: '180px',  // Ajustement de la hauteur personnalisée
    width: '150px' ,     marginLeft: '45px'  // Ajout de l’espace à gauche de l’image

  }} 
/>
       
        <div className="cont">
            <main className="main">
                <div className="verticalLine"></div>
                <div className="content">
                    <p className='point-sec'>Start /&gt;</p>
                    <h1 className='title'>Hi, my name is <span className="highlight"><b>Chahin Taher</b></span></h1>      
                    <h1 className='mt-5 title'><i>i design</i> and develop <b className='typing'>{currentText}</b></h1>                    
                    <h5 className='point-sec' style={{ marginTop: 50 }}>Let me show You...</h5>
                </div>
            </main>
        </div>
    </div>
);

}

export default Section1;