import React from 'react'
import itch from '@/app/imgs/itch.png';
import Image from 'next/image';
import linki from '@/app/imgs/link.png';
import git from '@/app/imgs/git.png';
import discord from '@/app/imgs/discord.png';

function Footer() {
  return (
    <div className='container-fluid'>
        <h5 className='find'>Find me on</h5>
        <div className='links'>
        <div className='hover-target link'>
    <a href='' target='_blank' style={{ all: 'unset', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Image src={discord} alt='' />
        <p>58018596</p>
    </a>
</div>


            
            <div className='hover-target link' >
                <a href='https://www.linkedin.com/in/chahin-taher-5794b12b6/' target='_blank' style={{all: 'unset'}}><Image src={linki} alt=''/></a><p></p>
                <a href='https://www.linkedin.com/in/chahin-taher-5794b12b6/' target='_blank' style={{all: 'unset'}}><p>LinkedIn</p></a>
            </div>
            <div className='hover-target link'>
                <a href='https://github.com/Chahin18' target='_blank' style={{all: 'unset'}}><Image src={git} alt=''/></a>
                <a href='https://github.com/Chahin18' target='_blank' style={{all: 'unset'}}><p>GitHub</p></a>
            </div>

            <div className='hover-target link'>
    <a href='' target='_blank' style={{ all: 'unset', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Image src={itch} alt='' />
        <p>chahintaherr@gmail.com</p>
    </a>
</div>

        </div>        
        <p className='mt-5 point-sec'>© Made with &lt;/&gt; by Chahin Taher .. Tunisia 2024.</p>
    </div>
  )
}

export default Footer