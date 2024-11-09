export default function figma(){
  return <div className="bg-[#252B42] h-[1132px] w-[1440px]">
            {/* navbar */}
    <div className="h-[91px] w-[1322px]  ml-[55px] flex flex-row pt-[17px]">
       <div className="h-[58px] w-[187px] ml-[136px] ">
        <h3 className=" h-[32px] w-[152px] mt-[11px] font-bold text-[24px] leading-8 tracking-[0.1px] text-white">BrandName</h3>
       </div>

       {/* mini navbar */}
        <div className="w-[815px] h-[58px] ml-[20px] flex flex-row">
            {/* pageBar */}
          <div className="w-[275px] h-[24px] mt-[17px]">
               <ul className="flex justify-between font-bold text-sm leading-6 tracking-[0.2px] text-white">
                <li>Home</li>
                <li>Product</li>
                <li>Pricing</li>
                <li>Contact</li>
               </ul>
          </div>

          {/* buttons */}
           <div className="w-[189px] h-[52px] ml-[350px] mt-[3px]">
              <button className="w-[41px] h-[22px] mr-[31px] font-bold text-sm leadding-[22px] tracking-[0.2px] text-start text-white">login</button>
              <button className="w-[110px] h-[52px] bg-[#23A6F4] rounded py-[15px] px-[25px] font-bold text-sm leading-[22px] tracking-[0.2px] text-white">JOIN US</button>
           </div>

        </div>
    </div>

    {/* hero section  */}
  <div className="w-[1046px] h-[1028px] mt-[10px] ml-[197px] pt-[80px]">
               {/* mini heroSection */}
      <div className="w-[699px] h-[496px] py-[40px] ml-[175px]">
        <h5 className="font-bold text-xs leading-6 tracking-[0.1px] text-[#23A6F0] mb-[40px] text-center">Welcome</h5>     
      
        <p className="font-bold text-[58px] h-[160px] w-[542px] leading-[80px] tracking-[0.2px] text-center ml-[72px] mb-[40px] text-white">Selling on the internet like a pro</p>
         
         <p className="h-[60px] w-[536px] font-normal font-[montserrat] text-center text-sm leading-[30px] tracking-[0.2px] ml-[55px] mb-[40px] text-white">We know how large objects will act, but things on a <br />
          small scale just do not act that way.</p>

       <div>
       <button className="h-[52px] w-[193px] bg-[#23A6F0] rounded py-[15px] px-[40px] ml-[140px] mr-[10px] text-white text-sm font-bold leading-[22px] tracking-[0.2px]">Get Quote Now</button>
       <button className="w-[162px] h-[52px] border-[1px] border-[#23A6F0] py-[15px] px-[40px] rounded text-sm font-bold leading-[22px] tracking-[0.2px] text-[#23A6F0]">Learn More</button>
       </div>

      </div>

              {/* bottom side */}
        <div className="w-[1046] h-[292] flex gap-[30px] mt-[80px]">
          <div className="w-[328px] h-[292px] py-[35px] px-[40px] bg-white mb-[20px]">
          <div className="w-[70px] h-[76px] rounded-[10px] bg-[#FFDCD1] mb-[20px]"></div>
          <h5 className="font-bold text-xs tracking-[0.1px] mb-[20px] text-[#252B42]">Training Courses</h5>
          <div className="w-[50px] h-[2px] bg-[#E74040] mb-[20px]"></div>
          <p className="font-normal text-sm leading-5 tracking-[0.2px] text-[#737373]">The gradual accumulation of information about atomic and small-scale behaviour...</p>
          </div>

          <div className="w-[328px] h-[292px] py-[35px] px-[40px] bg-white mb-[20px]">
          <div className="w-[70px] h-[76px] rounded-[10px] bg-[#B9EAA8] mb-[20px]"></div>
          <h5 className="font-bold text-xs tracking-[0.1px] mb-[20px] text-[#252B42]">2,769 online courses</h5>
          <div className="w-[50px] h-[2px] bg-[#E74040] mb-[20px]"></div>
          <p className="font-normal text-sm leading-5 tracking-[0.2px] text-[#737373]">The gradual accumulation of information about atomic and small-scale behaviour...</p>
          </div>

          <div className="w-[328px] h-[292px] py-[35px] px-[40px] bg-[#23A6F0] mb-[20px]">
          <div className="w-[70px] h-[76px] rounded-[10px] bg-white mb-[20px]"></div>
          <h5 className="font-bold text-xs tracking-[0.1px] mb-[20px] text-white">training Courses</h5>
          <div className="w-[50px] h-[2px] bg-white mb-[20px]"></div>
          <p className="font-normal text-sm leading-5 tracking-[0.2px] text-white">The gradual accumulation of information about atomic and small-scale behaviour...</p>
          </div>
      
             
        </div>

    </div>

</div>
}