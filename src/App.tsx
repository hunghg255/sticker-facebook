import { Sticker } from '@/components/Sticker';

import sprite_2061304330831698 from './assets/images/2061304330831698.png';
import spriteImg from './assets/images/sprite.png';
import sprite_2 from './assets/images/sprite_2.png';
import sprite_479784002807228 from './assets/images/sprite_479784002807228.png';
import sprite1 from './assets/images/sprite1.png';
import s5 from './assets/images/s5.png';
import s6 from './assets/images/s6.png';
import s7 from './assets/images/s7.png';
import s8 from './assets/images/s8.png';

import './App.css';

interface StickerType {
  id: string;
  frameCount: number;
  frameRate: number;
  framesPerCol: number;
  framesPerRow: number;
  spriteImg: string;
}

const _stickers: StickerType[] = [
  {
    id: '479784002807229',
    frameCount: 16,
    frameRate: 200,
    framesPerCol: 4,
    framesPerRow: 4,
    spriteImg,
  },
  {
    id: '479784002807228',
    frameCount: 12,
    frameRate: 83,
    framesPerCol: 3,
    framesPerRow: 4,
    spriteImg: sprite_479784002807228,
  },
  {
    id: '2061304330831698',
    frameCount: 15,
    frameRate: 83,
    framesPerCol: 4,
    framesPerRow: 4,
    spriteImg: sprite_2061304330831698,
  },
  {
    id: '2061304330831625',
    frameCount: 12,
    frameRate: 83,
    framesPerCol: 3,
    framesPerRow: 4,
    spriteImg: sprite_2,
  },
  {
    id: '479784002807222',
    frameCount: 20,
    frameRate: 100,
    framesPerCol: 4,
    framesPerRow: 5,
    spriteImg: sprite1,
  },
  {
    id: '479784002807222',
    frameCount: 8,
    frameRate: 60,
    framesPerCol: 3,
    framesPerRow: 3,
    spriteImg: s5,
  },
  {
    id: '479784002807222',
    frameCount: 20,
    frameRate: 60,
    framesPerCol: 4,
    framesPerRow: 5,
    spriteImg: s6,
  },
  {
    id: '479784002807222',
    frameCount: 20,
    frameRate: 90,
    framesPerCol: 4,
    framesPerRow: 5,
    spriteImg: s7,
  },
  {
    id: '479784002807222',
    frameCount: 18,
    frameRate: 90,
    framesPerCol: 4,
    framesPerRow: 5,
    spriteImg: s8,
  },
];
// frameRate: 1 = 20ms
function App() {
  return (
    <>
      <h1>Sticker Facebook</h1>

      <br />
      <div className='sticky'>
        {_stickers.map((sticker, index) => (
          <Sticker
            key={`sticker__${index}`}
            frameCount={sticker.frameCount}
            frameRate={sticker.frameRate}
            framesPerCol={sticker.framesPerCol}
            framesPerRow={sticker.framesPerRow}
            spriteImg={sticker.spriteImg}
          />
        ))}
      </div>
    </>
  );
}

export default App;
