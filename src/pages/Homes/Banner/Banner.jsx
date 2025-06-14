import img1 from '../../../assets/banner/benar1.jpg';
import img2 from '../../../assets/banner/banre2.png';
import img3 from '../../../assets/banner/baner3.jpg';
import img4 from '../../../assets/banner/baner4.jpg';

const Banner = () => {
      return (
        <div className="carousel w-full">
   <div id="slide1" className="carousel-item relative w-full">
              <img
                src={img1}
                className="w-full h-170 rounded-2xl" />
              <div className="absolute h-full left-0 top-0 flex items-center bottom-0 bg-linear-to-r from-[#151515] to-[rgba(21,21,21,0)]">
               <div className='text-white space-y-7 w-1/2 p-15'>
                  <h1 className='text-5xl'>Elegant Bluetooth Smartwatch Fitness & Style</h1>
                  <p>
                  Track fitness, receive calls, and stay stylish with this waterproof smartwatch featuring long battery life.

If you tell me your actual product (like food, clothes, gadgets), I can make an even more perfect version for your store!
                  </p>
                  
                  <div>
                  <button className="btn shadow-none text-[9px] font-bold py-5  px-7 border-[#FF3811] mr-4 bg-[#FF3811]">DISCOVER MORE</button>
                  <button className="btn btn-ghost text-[9px] font-bold p-5  px-6 border-white shadow-none">LATEST PROJECT</button>
                  </div>
               </div>
              </div>
              <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>

            {/* ................... */}
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src={img2}
                className="w-full h-170 rounded-2xl" />
              <div className="absolute h-full left-0 top-0 flex items-center bottom-0 bg-linear-to-r from-[#151515] to-[rgba(21,21,21,0)]">
               <div className='text-white space-y-7 w-1/2 p-15'>
                  <h1 className='text-5xl'>Elegant Bluetooth Smartwatch Fitness & Style</h1>
                  <p>
                  Track fitness, receive calls, and stay stylish with this waterproof smartwatch featuring long battery life.

If you tell me your actual product (like food, clothes, gadgets), I can make an even more perfect version for your store!
                  </p>
                  
                  <div>
                  <button className="btn shadow-none text-[9px] font-bold py-5  px-7 border-[#FF3811] mr-4 bg-[#FF3811]">DISCOVER MORE</button>
                  <button className="btn btn-ghost text-[9px] font-bold p-5  px-6 border-white shadow-none">LATEST PROJECT</button>
                  </div>
               </div>
              </div>
              <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div>
            {/* ................................ */}
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src={img3}
                className="w-full h-170 rounded-2xl" />
              <div className="absolute h-full left-0 top-0 flex items-center bottom-0 bg-linear-to-r from-[#151515] to-[rgba(21,21,21,0)]">
               <div className='text-white space-y-7 w-1/2 p-15'>
                  <h1 className='text-5xl'>Elegant Bluetooth Smartwatch Fitness & Style</h1>
                  <p>
                  Track fitness, receive calls, and stay stylish with this waterproof smartwatch featuring long battery life.

If you tell me your actual product (like food, clothes, gadgets), I can make an even more perfect version for your store!
                  </p>
                  
                  <div>
                  <button className="btn shadow-none text-[9px] font-bold py-5  px-7 border-[#FF3811] mr-4 bg-[#FF3811]">DISCOVER MORE</button>
                  <button className="btn btn-ghost text-[9px] font-bold p-5  px-6 border-white shadow-none">LATEST PROJECT</button>
                  </div>
               </div>
              </div>
              <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div>
            {/* ............................ */}
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src={img4}
                className="w-full h-170 rounded-2xl" />
              <div className="absolute h-full left-0 top-0 flex items-center bottom-0 bg-linear-to-r from-[#151515] to-[rgba(21,21,21,0)]">
               <div className='text-white space-y-7 w-1/2 p-15'>
                  <h1 className='text-5xl'>Elegant Bluetooth Smartwatch Fitness & Style</h1>
                  <p>
                  Track fitness, receive calls, and stay stylish with this waterproof smartwatch featuring long battery life.

If you tell me your actual product (like food, clothes, gadgets), I can make an even more perfect version for your store!
                  </p>
                  
                  <div>
                  <button className="btn shadow-none text-[9px] font-bold py-5  px-7 border-[#FF3811] mr-4 bg-[#FF3811]">DISCOVER MORE</button>
                  <button className="btn btn-ghost text-[9px] font-bold p-5  px-6 border-white shadow-none">LATEST PROJECT</button>
                  </div>
               </div>
              </div>
              <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
</div>
       
           
      );
};

export default Banner;