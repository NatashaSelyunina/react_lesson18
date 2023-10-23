import { useState } from "react";

  function CityPage(): JSX.Element {
    const [city, setCity] = useState('Berlin')
    const [capital, setCapital] = useState('Capital of Germany')
    const [text, setText] = useState('Berlin has a surface of 890 square kilometers and the border of the city is 234 km. long. Travel guides tell us a complete tour on the ring road of Berlin is almost 300 km is. 18 percent of Berlin consists of nature and parks, the surafce of the water almost 7%. With that, Berlin is one of the richest cities of Europe as far as nature and fauna is concerned. Berlin is the capital of and a state within Germany, lying on the river Spree, where the river ends in the river Havel. Before the fall of the Berlin Wall the surface of East-Berlin was about 400 km2. The city has been build on a fairly flat area; the highest point is the Kreuzberg (35m, or 66 according to another travel guide).')

    function changeToRome(): void {
      setCity('Rome')
      setCapital('Capital of Italy')
      setText('Rome, the “eternal city”, is so called because it is a place of great beauty, contrast and life. Rome is an ecletic city: the religious world centre of Catholic Church, the fabulous ruins of the centre of the Roman Empire, and modern, bustling Rome. All three seem incongruous, yet they live inside and beside each other with great ease. You will soon realise Rome was build to rule and dominate the world. Everything is on a massive scale, solid and “eternal”.')
    }

    function setImg (city: string) {
      switch(city) {
        case 'Berlin':
          return 'https://klike.net/uploads/posts/2023-01/1674735313_2-2.jpg';
        case 'Rome':
          return 'https://sportishka.com/uploads/posts/2022-04/1650702193_8-sportishka-com-p-kolizei-v-rime-krasivo-foto-9.jpg'
      }
    }

    function setClassName (city: string) {
      switch(city) {
        case 'Berlin':
          return 'berlinImg';
        case 'Rome':
          return 'romeImg'
      }
    }

    const image = setImg(city);
    const classImg = setClassName(city);

    return(
      <div className='App'>
        <div className="infoAbout">
          <div>
            <h2>{city}</h2>
            <p>{capital}</p>
          </div>
          <div className="infoCity">
            <div className="infoChild">
              <p>{text}</p>
            </div>
            <div className="infoChild">
              <img className={classImg} src={image} alt="" />
            </div>
          </div>
            <div>
              <button onClick={changeToRome}>Go to Rome</button>
            </div>
        </div>
      </div>
      )
  }

export default CityPage