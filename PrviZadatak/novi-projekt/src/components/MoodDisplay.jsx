import { useState } from 'react'
import sretanImg from '../../public/HappyEmoji.jpg'
import neutralanImg from '../../public/NeutralEmoji.jpg'
import tuzanImg from '../../public/SadEmoji.jpg'

function MoodDisplay({trenRaspolozenje, opis}) {

  return (
    <>
        <div className='moodDisplayContainer'>
            {trenRaspolozenje === "sretno" &&
                <div className='moodIconHappy'>
                    <div><img src={sretanImg}></img></div>
                    <div>
                        <p>Korisnik je sretan</p>
                    </div>
                </div>
                
            }
            {trenRaspolozenje === "neutralno" &&
                <div className='moodIconNeutral'>
                    <div><img src={neutralanImg}></img></div>
                    <div>
                        <p>Korisnik je neutralan</p>
                    </div>
                </div>
            }
            {trenRaspolozenje === "tuzno" &&
                <div className='moodIconSad'>
                    <div><img src={tuzanImg}></img></div>
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