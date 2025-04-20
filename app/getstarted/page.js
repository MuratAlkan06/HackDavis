import {auth0} from "../page"
import { redirect } from 'next/navigation'

export default async function() {
      const session = await auth0.getSession();
     if (!session) {
        return redirect("/auth/login")
     }
     const user = session.user
    return <div className = "w-[2000px]">
<div className="bg-lime-50 overflow-hidden">
  <div className="relative mx-auto max-w-[fill] px-4 h-[2047px]">
  <div className="w-[2000px] h-64 left-0 top-0 absolute bg-red-300" />
  <div className="w-[2000px] h-52 left-0 top-[1839px] absolute bg-red-300" />
  <div className="w-44 h-12 left-[1213px] top-[45px] absolute bg-white rounded-[10px]" />
  <a href="/api/auth/logout">
  <div className="left-[1235px] top-[53px] absolute text-center justify-start text-blue-500 text-2xl font-normal font-['Inter']">
    Log Out
  </div>
</a>
  <div className="w-48 h-12 left-[325px] top-[280px] absolute bg-zinc-300 rounded-[50px]" />
  <div className="w-48 h-12 left-[325px] top-[280px] absolute bg-gradient-to-r from-red-300 to-blue-500 rounded-[50px]" />
  <img
  src={session.user.picture}
  alt="Profile Picture"
  className="w-64 h-64 left-[55px] top-[87px] absolute rounded-full object-cover"/>
  </div>
  <div className="left-[366px] top-[156px] absolute text-center justify-start text-stone-50 text-7xl font-normal font-['Josefin_Sans']"><p>Hello, {user.name}!</p></div>
  <div className="left-[359px] top-[289px] absolute text-center justify-start text-white text-2xl font-normal font-['Inter']">Edit Profile</div>
  <div className="w-96 h-12 px-6 py-2 left-[1023px] top-[280px] absolute bg-red-300 rounded-[50px] inline-flex justify-center items-center gap-3.5">
    <div className="text-center justify-start text-white text-2xl font-normal font-['Inter']">Learn more about Rating</div>
  </div>
  <div className="left-[564px] top-[289px] absolute inline-flex justify-start items-center gap-1.5">
    <div className="justify-start text-black text-2xl font-normal font-['Inter']">Current Care Rating:</div>
    <div data-svg-wrapper className="relative">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.65 3.585C13.7876 3.34895 13.9846 3.15309 14.2215 3.01697C14.4584 2.88084 14.7268 2.8092 15 2.8092C15.2732 2.8092 15.5417 2.88084 15.7786 3.01697C16.0154 3.15309 16.2125 3.34895 16.35 3.585L19.8438 9.5825L26.6288 11.0525C26.8957 11.1105 27.1427 11.2374 27.3452 11.4207C27.5478 11.6039 27.6988 11.837 27.7831 12.0968C27.8675 12.3565 27.8823 12.6339 27.826 12.9011C27.7698 13.1684 27.6444 13.4163 27.4625 13.62L22.8375 18.7962L23.5375 25.7025C23.5652 25.9744 23.5209 26.2489 23.4093 26.4984C23.2977 26.7479 23.1226 26.9638 22.9015 27.1244C22.6803 27.2851 22.4209 27.385 22.1491 27.414C21.8773 27.4431 21.6026 27.4003 21.3525 27.29L15 24.49L8.64754 27.29C8.39744 27.4003 8.12278 27.4431 7.85099 27.414C7.57919 27.385 7.31977 27.2851 7.09863 27.1244C6.87749 26.9638 6.70237 26.7479 6.59075 26.4984C6.47914 26.2489 6.43493 25.9744 6.46254 25.7025L7.16254 18.7962L2.53754 13.6212C2.35533 13.4175 2.22974 13.1696 2.17331 12.9021C2.11688 12.6347 2.13159 12.3572 2.21597 12.0972C2.30035 11.8372 2.45145 11.6039 2.65418 11.4206C2.8569 11.2373 3.10417 11.1104 3.37129 11.0525L10.1563 9.5825L13.65 3.585Z" fill="#DAE246"/>
      </svg>
    </div>
    <div data-svg-wrapper className="relative">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.65 3.585C13.7876 3.34895 13.9846 3.15309 14.2215 3.01697C14.4584 2.88084 14.7268 2.8092 15 2.8092C15.2732 2.8092 15.5417 2.88084 15.7786 3.01697C16.0154 3.15309 16.2125 3.34895 16.35 3.585L19.8438 9.5825L26.6288 11.0525C26.8957 11.1105 27.1427 11.2374 27.3452 11.4207C27.5478 11.6039 27.6988 11.837 27.7831 12.0968C27.8675 12.3565 27.8823 12.6339 27.826 12.9011C27.7698 13.1684 27.6444 13.4163 27.4625 13.62L22.8375 18.7962L23.5375 25.7025C23.5652 25.9744 23.5209 26.2489 23.4093 26.4984C23.2977 26.7479 23.1226 26.9638 22.9015 27.1244C22.6803 27.2851 22.4209 27.385 22.1491 27.414C21.8773 27.4431 21.6026 27.4003 21.3525 27.29L15 24.49L8.64754 27.29C8.39744 27.4003 8.12278 27.4431 7.85099 27.414C7.57919 27.385 7.31977 27.2851 7.09863 27.1244C6.87749 26.9638 6.70237 26.7479 6.59075 26.4984C6.47914 26.2489 6.43493 25.9744 6.46254 25.7025L7.16254 18.7962L2.53754 13.6212C2.35533 13.4175 2.22974 13.1696 2.17331 12.9021C2.11688 12.6347 2.13159 12.3572 2.21597 12.0972C2.30035 11.8372 2.45145 11.6039 2.65418 11.4206C2.8569 11.2373 3.10417 11.1104 3.37129 11.0525L10.1563 9.5825L13.65 3.585Z" fill="#DAE246"/>
      </svg>
    </div>
    <div data-svg-wrapper className="relative">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.65 3.585C13.7876 3.34895 13.9846 3.15309 14.2215 3.01697C14.4584 2.88084 14.7268 2.8092 15 2.8092C15.2732 2.8092 15.5417 2.88084 15.7786 3.01697C16.0154 3.15309 16.2125 3.34895 16.35 3.585L19.8438 9.5825L26.6288 11.0525C26.8957 11.1105 27.1427 11.2374 27.3452 11.4207C27.5478 11.6039 27.6988 11.837 27.7831 12.0968C27.8675 12.3565 27.8823 12.6339 27.826 12.9011C27.7698 13.1684 27.6444 13.4163 27.4625 13.62L22.8375 18.7962L23.5375 25.7025C23.5652 25.9744 23.5209 26.2489 23.4093 26.4984C23.2977 26.7479 23.1226 26.9638 22.9015 27.1244C22.6803 27.2851 22.4209 27.385 22.1491 27.414C21.8773 27.4431 21.6026 27.4003 21.3525 27.29L15 24.49L8.64754 27.29C8.39744 27.4003 8.12278 27.4431 7.85099 27.414C7.57919 27.385 7.31977 27.2851 7.09863 27.1244C6.87749 26.9638 6.70237 26.7479 6.59075 26.4984C6.47914 26.2489 6.43493 25.9744 6.46254 25.7025L7.16254 18.7962L2.53754 13.6212C2.35533 13.4175 2.22974 13.1696 2.17331 12.9021C2.11688 12.6347 2.13159 12.3572 2.21597 12.0972C2.30035 11.8372 2.45145 11.6039 2.65418 11.4206C2.8569 11.2373 3.10417 11.1104 3.37129 11.0525L10.1563 9.5825L13.65 3.585Z" fill="#DAE246"/>
      </svg>
    </div>
    <div data-svg-wrapper className="relative">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.65 3.585C13.7876 3.34895 13.9846 3.15309 14.2215 3.01697C14.4584 2.88084 14.7268 2.8092 15 2.8092C15.2732 2.8092 15.5417 2.88084 15.7786 3.01697C16.0154 3.15309 16.2125 3.34895 16.35 3.585L19.8438 9.5825L26.6288 11.0525C26.8957 11.1105 27.1427 11.2374 27.3452 11.4207C27.5478 11.6039 27.6988 11.837 27.7831 12.0968C27.8675 12.3565 27.8823 12.6339 27.826 12.9011C27.7698 13.1684 27.6444 13.4163 27.4625 13.62L22.8375 18.7962L23.5375 25.7025C23.5652 25.9744 23.5209 26.2489 23.4093 26.4984C23.2977 26.7479 23.1226 26.9638 22.9015 27.1244C22.6803 27.2851 22.4209 27.385 22.1491 27.414C21.8773 27.4431 21.6026 27.4003 21.3525 27.29L15 24.49L8.64754 27.29C8.39744 27.4003 8.12278 27.4431 7.85099 27.414C7.57919 27.385 7.31977 27.2851 7.09863 27.1244C6.87749 26.9638 6.70237 26.7479 6.59075 26.4984C6.47914 26.2489 6.43493 25.9744 6.46254 25.7025L7.16254 18.7962L2.53754 13.6212C2.35533 13.4175 2.22974 13.1696 2.17331 12.9021C2.11688 12.6347 2.13159 12.3572 2.21597 12.0972C2.30035 11.8372 2.45145 11.6039 2.65418 11.4206C2.8569 11.2373 3.10417 11.1104 3.37129 11.0525L10.1563 9.5825L13.65 3.585Z" fill="#DAE246"/>
      </svg>
    </div>
    <div data-svg-wrapper className="relative">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.4411 6.76C13.0248 3.92 13.8161 2.5 14.9998 2.5C16.1836 2.5 16.9748 3.92 18.5586 6.76L18.9686 7.495C19.4186 8.3025 19.6436 8.70625 19.9936 8.9725C20.3436 9.23875 20.7811 9.3375 21.6561 9.535L22.4511 9.715C25.5261 10.4112 27.0623 10.7587 27.4286 11.935C27.7936 13.11 26.7461 14.3362 24.6498 16.7875L24.1073 17.4212C23.5123 18.1175 23.2136 18.4662 23.0798 18.8962C22.9461 19.3275 22.9911 19.7925 23.0811 20.7212L23.1636 21.5675C23.4798 24.8387 23.6386 26.4737 22.6811 27.2C21.7236 27.9262 20.2836 27.2637 17.4061 25.9387L16.6598 25.5962C15.8423 25.2187 15.4336 25.0312 14.9998 25.0312C14.5661 25.0312 14.1573 25.2187 13.3398 25.5962L12.5948 25.9387C9.71605 27.2637 8.27605 27.9262 7.31981 27.2012C6.36106 26.4737 6.51981 24.8387 6.83605 21.5675L6.91855 20.7225C7.00855 19.7925 7.05355 19.3275 6.91855 18.8975C6.78605 18.4662 6.48731 18.1175 5.89231 17.4225L5.34981 16.7875C3.25356 14.3375 2.20606 13.1112 2.57106 11.935C2.93606 10.7587 4.47481 10.41 7.54981 9.715L8.34481 9.535C9.21856 9.3375 9.65481 9.23875 10.0061 8.9725C10.3573 8.70625 10.5811 8.3025 11.0311 7.495L11.4411 6.76Z" stroke="#DAE246" strokeWidth="1.5"/>
      </svg>
    </div>
  </div>
  <div data-svg-wrapper className="left-[1341px] top-[52px] absolute">
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.9998 5.66666H7.08317C6.304 5.66666 5.6665 6.30416 5.6665 7.08333V26.9167C5.6665 27.6958 6.304 28.3333 7.08317 28.3333H16.9998" stroke="#5191DF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.75 17H29.0417" stroke="#5191DF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24.083 12.0417L29.0413 17L24.083 21.9583" stroke="#5191DF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
  <div className="w-[1291px] left-[89px] top-[932px] absolute inline-flex flex-col justify-start items-start gap-9">
    <div className="self-stretch justify-start text-black text-7xl font-normal font-['Josefin_Sans']">Your Messages</div>
    <div className="self-stretch h-80 flex flex-col justify-start items-start gap-8">
      <div className="w-[1291px] flex flex-col justify-start items-start gap-10">
        <div className="self-stretch h-40 relative">
          <div className="w-[1291px] h-40 left-0 top-0 absolute bg-white rounded-[20px] shadow-[10px_15px_20px_0px_rgba(0,0,0,0.15)]" />
        </div>
        <div className="self-stretch h-40 relative">
          <div className="w-[1291px] h-40 left-0 top-0 absolute bg-white rounded-[20px] shadow-[10px_15px_20px_0px_rgba(0,0,0,0.15)]" />
        </div>
        <div className="self-stretch h-40 relative">
          <div className="w-[1291px] h-40 left-0 top-0 absolute bg-white rounded-[20px] shadow-[10px_15px_20px_0px_rgba(0,0,0,0.15)]" />
        </div>
        <div className="self-stretch h-40 relative">
          <div className="w-[1291px] h-40 left-0 top-0 absolute bg-white rounded-[20px] shadow-[10px_15px_20px_0px_rgba(0,0,0,0.15)]" />
        </div>
      </div>
    </div>
  </div>
  <div className="w-[2130px] left-[89px] top-[414px] absolute justify-start text-black text-7xl font-normal font-['Josefin_Sans']">Care Requests</div>
  <div className="w-44 left-[686px] top-[47px] absolute inline-flex flex-col justify-start items-start gap-5">
    <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
      <div className="self-stretch inline-flex justify-between items-end">
        <div className="justify-start text-white text-4xl font-normal font-['Inter']">BridgeCare</div>
      </div>
    </div>
  </div>
  <div className="w-24 h-24 left-[564px] top-[3px] absolute">
    <div data-svg-wrapper className="left-[4.49px] top-[47.62px] absolute">
      <svg width="84" height="38" viewBox="0 0 84 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.492188 0.617188V13.3948C1.84452 12.6005 3.67805 11.5479 5.88281 10.3437V0.617188H0.492188ZM78.1172 0.617188V10.3571C79.9296 11.3434 81.7267 12.3576 83.5078 13.3993V0.617188H78.1172ZM41.912 0.6675C34.7868 0.67289 24.0521 4.85063 15.3074 9.1085C7.3018 13.0066 1.51695 16.5422 0.492188 17.1729V37.6328H20.3274C20.6652 31.8397 22.7603 25.2146 26.1765 19.7108C29.9135 13.6904 35.3559 8.88425 41.9995 8.88281C48.6452 8.88138 54.0921 13.6869 57.8335 19.7079C61.2544 25.2126 63.3535 31.8386 63.6919 37.6328H83.5078V17.1745C82.48 16.5438 76.6676 13.0025 68.6261 9.10113C59.8439 4.8402 49.0648 0.662649 41.912 0.667681V0.6675Z" fill="#4A90E2"/>
      </svg>
    </div>
  </div>
  <div data-svg-wrapper className="left-[595px] top-[63px] absolute">
    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.4165 11.0405C2.4165 16.9167 7.274 20.0475 10.8289 22.8508C12.0832 23.8392 13.2915 24.7708 14.4998 24.7708C15.7082 24.7708 16.9165 23.8404 18.1708 22.8496C21.7269 20.0487 26.5832 16.9167 26.5832 11.0417C26.5832 5.16683 19.9373 0.996873 14.4998 6.64704C9.06234 0.996873 2.4165 5.16442 2.4165 11.0405Z" fill="#F5F0E2"/>
    </svg>
  </div>
  <div className="left-[89px] top-[517px] absolute inline-flex justify-start items-center gap-16">
    <div className="w-[1354px] flex justify-start items-center gap-16">
      <div className="w-96 h-80 relative shadow-[10px_15px_20px_0px_rgba(0,0,0,0.15)]">
        <div className="w-96 h-80 left-0 top-0 absolute bg-white rounded-[30px]" />
        <div className="w-48 h-12 left-[155px] top-[262px] absolute rounded-[50px] border border-black" />
        <div className="left-[187px] top-[271px] absolute text-center justify-start text-black text-2xl font-normal font-['Inter']">Learn More</div>
        <div className="w-52 left-[118px] top-[30px] absolute inline-flex flex-col justify-start items-start gap-2">
          <div className="self-stretch justify-start text-black text-xl font-bold font-['Inter']">Parent’s Name</div>
          <div className="self-stretch text-center justify-start text-black text-xl font-normal font-['Inter']">Requested 4/20/2025</div>
        </div>
        <div className="w-16 h-16 left-[28px] top-[26px] absolute bg-blue-500 rounded-full" />
        <div data-svg-wrapper className="left-[41px] top-[38px] absolute">
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 31.5C7 29.6435 7.7375 27.863 9.05025 26.5503C10.363 25.2375 12.1435 24.5 14 24.5H28C29.8565 24.5 31.637 25.2375 32.9497 26.5503C34.2625 27.863 35 29.6435 35 31.5C35 32.4283 34.6313 33.3185 33.9749 33.9749C33.3185 34.6312 32.4283 35 31.5 35H10.5C9.57174 35 8.6815 34.6312 8.02513 33.9749C7.36875 33.3185 7 32.4283 7 31.5Z" stroke="white" strokeWidth="5" strokeLinejoin="round"/>
          <path d="M21 17.5C23.8995 17.5 26.25 15.1495 26.25 12.25C26.25 9.35051 23.8995 7 21 7C18.1005 7 15.75 9.35051 15.75 12.25C15.75 15.1495 18.1005 17.5 21 17.5Z" stroke="white" strokeWidth="5"/>
          </svg>
        </div>
        <div className="w-44 left-[31px] top-[118px] absolute inline-flex flex-col justify-start items-start gap-3">
          <div className="self-stretch text-center justify-start"><span className="text-black text-xl font-extrabold font-['Inter']">Number of Kids: </span><span className="text-black text-xl font-normal font-['Inter']">3</span></div>
          <div className="w-80 justify-start"><span className="text-black text-xl font-extrabold font-['Inter']">Age Range: </span><span className="text-black text-xl font-normal font-['Inter']">10-14</span></div>
        </div>
      </div>
      <div className="w-96 h-80 relative shadow-[10px_15px_20px_0px_rgba(0,0,0,0.15)]">
        <div className="w-96 h-80 left-0 top-0 absolute bg-white rounded-[30px]" />
        <div className="w-48 h-12 left-[155px] top-[262px] absolute rounded-[50px] border border-black" />
        <div className="left-[187px] top-[271px] absolute text-center justify-start text-black text-2xl font-normal font-['Inter']">Learn More</div>
        <div className="w-52 left-[118px] top-[30px] absolute inline-flex flex-col justify-start items-start gap-2">
          <div className="self-stretch justify-start text-black text-xl font-bold font-['Inter']">Parent’s Name</div>
          <div className="self-stretch text-center justify-start text-black text-xl font-normal font-['Inter']">Requested 4/20/2025</div>
        </div>
        <div className="w-16 h-16 left-[28px] top-[26px] absolute bg-blue-500 rounded-full" />
        <div data-svg-wrapper className="left-[41px] top-[38px] absolute">
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 31.5C7 29.6435 7.7375 27.863 9.05025 26.5503C10.363 25.2375 12.1435 24.5 14 24.5H28C29.8565 24.5 31.637 25.2375 32.9497 26.5503C34.2625 27.863 35 29.6435 35 31.5C35 32.4283 34.6313 33.3185 33.9749 33.9749C33.3185 34.6312 32.4283 35 31.5 35H10.5C9.57174 35 8.6815 34.6312 8.02513 33.9749C7.36875 33.3185 7 32.4283 7 31.5Z" stroke="white" strokeWidth="5" strokeLinejoin="round"/>
          <path d="M21 17.5C23.8995 17.5 26.25 15.1495 26.25 12.25C26.25 9.35051 23.8995 7 21 7C18.1005 7 15.75 9.35051 15.75 12.25C15.75 15.1495 18.1005 17.5 21 17.5Z" stroke="white" strokeWidth="5"/>
          </svg>
        </div>
        <div className="w-44 left-[31px] top-[118px] absolute inline-flex flex-col justify-start items-start gap-3">
          <div className="self-stretch text-center justify-start"><span className="text-black text-xl font-extrabold font-['Inter']">Number of Kids: </span><span className="text-black text-xl font-normal font-['Inter']">3</span></div>
          <div className="w-80 justify-start"><span className="text-black text-xl font-extrabold font-['Inter']">Age Range: </span><span className="text-black text-xl font-normal font-['Inter']">10-14</span></div>
        </div>
      </div>
      <div className="w-96 h-80 relative shadow-[10px_15px_20px_0px_rgba(0,0,0,0.15)]">
        <div className="w-96 h-80 left-0 top-0 absolute bg-white rounded-[30px]" />
        <div className="w-48 h-12 left-[155px] top-[262px] absolute rounded-[50px] border border-black" />
        <div className="left-[187px] top-[271px] absolute text-center justify-start text-black text-2xl font-normal font-['Inter']">Learn More</div>
        <div className="w-52 left-[118px] top-[30px] absolute inline-flex flex-col justify-start items-start gap-2">
          <div className="self-stretch justify-start text-black text-xl font-bold font-['Inter']">Parent’s Name</div>
          <div className="self-stretch text-center justify-start text-black text-xl font-normal font-['Inter']">Requested 4/20/2025</div>
        </div>
        <div className="w-16 h-16 left-[28px] top-[26px] absolute bg-blue-500 rounded-full" />
        <div data-svg-wrapper className="left-[41px] top-[38px] absolute">
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 31.5C7 29.6435 7.7375 27.863 9.05025 26.5503C10.363 25.2375 12.1435 24.5 14 24.5H28C29.8565 24.5 31.637 25.2375 32.9497 26.5503C34.2625 27.863 35 29.6435 35 31.5C35 32.4283 34.6313 33.3185 33.9749 33.9749C33.3185 34.6312 32.4283 35 31.5 35H10.5C9.57174 35 8.6815 34.6312 8.02513 33.9749C7.36875 33.3185 7 32.4283 7 31.5Z" stroke="white" strokeWidth="5" strokeLinejoin="round"/>
          <path d="M21 17.5C23.8995 17.5 26.25 15.1495 26.25 12.25C26.25 9.35051 23.8995 7 21 7C18.1005 7 15.75 9.35051 15.75 12.25C15.75 15.1495 18.1005 17.5 21 17.5Z" stroke="white" strokeWidth="5"/>
          </svg>
        </div>
        <div className="w-44 left-[31px] top-[118px] absolute inline-flex flex-col justify-start items-start gap-3">
          <div className="self-stretch text-center justify-start"><span className="text-black text-xl font-extrabold font-['Inter']">Number of Kids: </span><span className="text-black text-xl font-normal font-['Inter']">3</span></div>
          <div className="w-80 justify-start"><span className="text-black text-xl font-extrabold font-['Inter']">Age Range: </span><span className="text-black text-xl font-normal font-['Inter']">10-14</span></div>
        </div>
      </div>
      <div className="w-96 h-80 relative shadow-[10px_15px_20px_0px_rgba(0,0,0,0.15)]">
        <div className="w-96 h-80 left-0 top-0 absolute bg-white rounded-[30px]" />
        <div className="w-48 h-12 left-[155px] top-[262px] absolute rounded-[50px] border border-black" />
        <div className="left-[187px] top-[271px] absolute text-center justify-start text-black text-2xl font-normal font-['Inter']">Learn More</div>
        <div className="w-52 left-[118px] top-[30px] absolute inline-flex flex-col justify-start items-start gap-2">
          <div className="self-stretch justify-start text-black text-xl font-bold font-['Inter']">Parent’s Name</div>
          <div className="self-stretch text-center justify-start text-black text-xl font-normal font-['Inter']">Requested 4/20/2025</div>
        </div>
        <div className="w-16 h-16 left-[28px] top-[26px] absolute bg-blue-500 rounded-full" />
        <div className="w-10 h-10 left-[41px] top-[38px] absolute">
          <div className="w-7 h-2.5 left-[7px] top-[24.50px] absolute outline outline-[5px] outline-offset-[-2.50px] outline-white" />
          <div className="w-2.5 h-2.5 left-[15.75px] top-[7px] absolute outline outline-[5px] outline-offset-[-2.50px] outline-white" />
        </div>
        <div className="w-44 left-[31px] top-[118px] absolute inline-flex flex-col justify-start items-start gap-3">
          <div className="self-stretch text-center justify-start"><span className="text-black text-xl font-extrabold font-['Inter']">Number of Kids: </span><span className="text-black text-xl font-normal font-['Inter']">3</span></div>
          <div className="w-80 justify-start"><span className="text-black text-xl font-extrabold font-['Inter']">Age Range: </span><span className="text-black text-xl font-normal font-['Inter']">10-14</span></div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>}
