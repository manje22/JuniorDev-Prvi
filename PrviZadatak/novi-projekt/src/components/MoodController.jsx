import { useState } from 'react'

function MoodController({trenutnoRaspolozenje ,promjeniRasp}) {
    
    const [brojac, postaviBrojac] = useState(11);
    
    function Azuriraj(raspolozenje){
        postaviBrojac(brojac +1);
        promjeniRasp(raspolozenje);
        console.log(trenutnoRaspolozenje);
    }

    return (
        <div>
            <div>
                <p>Broj azuriranja: {brojac}</p>
            </div>
            <div className='controllerButtonContainer'>
                <button onClick={() => Azuriraj("sretno")}>Sretno</button>
                <button onClick={() => Azuriraj("neutralno")}>Neutralno</button>
                <button onClick={() => Azuriraj("tuzno")}>Tužno</button>
            </div>
            <div className='resetButtonContainer'>
                {brojac >=  10 && <button onClick={() => postaviBrojac(0)}>Resetiraj brojac</button>}
            </div>
            
        </div>
  )
}

export default MoodController