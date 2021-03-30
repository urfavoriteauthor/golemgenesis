import React from 'react'
import { useState } from 'react'

import Ajani from '../assets/images/ajani.png'
import Pompeii from '../assets/images/pompeii.png'
import Midas from '../assets/images/Midas.png'
import Cutter from '../assets/images/ChrisCutter2.JPG'
import Brooklyn from '../assets/images/Brooklyn.PNG'
import Sahara from '../assets/images/Sahara.png'
import Lunar from '../assets/images/Lunar.png'
import Everest from '../assets/images/everest.PNG'
import Avalanche from '../assets/images/avalance.JPG'
import Pacifica from '../assets/images/Pacifica.png'
import Quartz from '../assets/images/SophiaQ.PNG'
import Raijin from '../assets/images/Raijin.jpg'
import Navbar from './navbar'
import Carousel from 'react-bootstrap/Carousel'

    function  Slideshow() {
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
      
        return (
          <Carousel id='golem' activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item >
              <img
                className="d-block w-auto"
                src={Cutter}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>The Diamond Warrior Golem</h3>
                <p>Cutter</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-auto"
                src={Pompeii}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>The Brimstone Golem</h3>
                <p>Pompeii</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-auto"
                src={Pacifica}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>The Island Golem</h3>
                <p>Pacifica</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-auto"
                src={Sahara}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>The Desert shadow golem</h3>
                <p>Sahara</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-auto"
                src={Brooklyn}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>The Star Destroyer Golem</h3>
                <p>Binary</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-auto"
                src={Ajani}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>The Planet Breaker Golem</h3>
                <p>Asteros</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-auto"
                src={Lunar}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Lunar</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-auto"
                src={Avalanche}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>The Blizzard Golem</h3>
                <p>Avalanche</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-auto"
                src={Everest}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>The Boulder Golem</h3>
                <p>Everest</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-auto"
                src={Quartz}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>The Refracting Crystal Golem</h3>
                <p>Quartz</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-auto"
                src={Raijin}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>The ThunderGod Golem</h3>
                <p>Raijin</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-auto"
                src={Midas}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>The Golden King Golem</h3>
                <p>Midas</p>
              </Carousel.Caption>
            </Carousel.Item>
            
          </Carousel>
        );
      }
      
    //   render(<Slideshow />);

export default Slideshow;
