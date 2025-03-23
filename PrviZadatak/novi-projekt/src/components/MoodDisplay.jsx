import { useState } from 'react'
import sretanImg from '../../public/HappyEmoji.jpg'
import neutralanImg from '../../public/NeutralEmoji.jpg'
import tuzanImg from '../../public/SadEmoji.jpg'

function MoodDisplay({trenRaspolozenje}) {

  return (
    <>
        <div className='moodDisplayContainer'>
            {trenRaspolozenje === "sretno" &&
                <div className='moodIcon moodIconHappy'>
                    <div className='moodIconImg'><img src={sretanImg}></img></div>
                    <div>
                        <p>Korisnik je sretan</p>
                    </div>
                </div>
                
            }
            {trenRaspolozenje === "neutralno" &&
                <div className='moodIcon moodIconNeutral'>
                    <div className='moodIconImg'><img src={neutralanImg}></img></div>
                    <div>
                        <p>Korisnik je neutralan</p>
                    </div>
                </div>
            }
            {trenRaspolozenje === "tuzno" &&
                <div className='moodIcon moodIconSad'>
                    <div className='moodIconImg'><img src={tuzanImg}></img></div>
                    <div>
                        <p>Korisnik je tuzan</p>
                    </div>
                </div>
            }
        </div>
    </>
  )
}

export default MoodDisplay