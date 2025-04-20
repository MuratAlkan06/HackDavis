import { Auth0Client } from "@auth0/nextjs-auth0/server"

export const auth0 = new Auth0Client()

// export default async function Home() {
//   // Fetch the user session
//   const session = await auth0.getSession();

//   // If no session, show sign-up and login buttons
  // if (!session) {
  //   return (
  //     <main>
  //       <a href="/auth/login?screen_hint=signup">
  //         <button>Sign up</button>
  //       </a>
  //       <a href="/auth/login">
  //         <button>Log in</button>
  //       </a>
  //     </main>
  //   );
  // }

//   // If session exists, show a welcome message and logout button
//   return (
//     <main>
//       <h1>Welcome, {session.user.name}!</h1>
//       <img src={session.user.picture}></img>
//       {/* <h1>Welcome, {session.user.picture}!</h1> */}
//       <p>
//         <a href="/auth/logout">
//           <button>Log out</button>
//         </a>
//       </p>

// import { auth0 } from "@/lib/auth0";


export default async function Home() {
  const session = await auth0.getSession();
//   const { user } = useUser();
  return (
    <main className="font-sans bg-[#fffaa8]">
      {/* NAVBAR */}
      {/* <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
        <div className="flex gap-3">
          {!session && (
            <>
              <a href="/auth/login?screen_hint=signup" className="text-sm px-4 py-1 border border-gray-300 rounded hover:bg-gray-100">
                Sign up
              </a>
              <a href="/auth/login" className="text-sm px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                Log in
              </a>
            </>
          )}
        </div>
      </nav> */}
      {/* <div className="w-[1440px] h-[5285px] relative bg-lime-50 overflow-hidden"> */}
  {/* <div className="w-[1440px] h-60 left-0 top-[5047px] absolute bg-zinc-100"></div> */}
  <div className="relative mx-auto max-w-[1440px] px-4">
  {/* all your absolute elements go here */}
  <div className="w-[1179px] left-[130px] top-[3800px] absolute rounded-[20px] inline-flex flex-col justify-start items-start gap-11">
    <div className="self-stretch h-24 bg-red-300 rounded-[20px]"></div>
    <div className="self-stretch h-24 bg-red-300 rounded-[20px]"></div>
    <div className="self-stretch h-24 bg-red-300 rounded-[20px]"></div>
    <div className="self-stretch h-24 bg-red-300 rounded-[20px]"></div>
    <div className="self-stretch h-24 bg-red-300 rounded-[20px]"></div>
  </div>
  <div className="w-80 h-16 left-[559px] top-[643px] absolute bg-gradient-to-r from-red-300 to-blue-500 rounded-[70px]"></div>
  <div className="w-[1053px] left-[193px] top-[281px] absolute text-center justify-start text-cyan-800 text-8xl font-normal font-['Josefin_Sans'] leading-[110px]">Bridging your Gap to Safe, Certified Childcare.</div>
  <div className="left-[238px] top-[1775px] absolute justify-start text-cyan-800 text-7xl font-normal font-['Josefin_Slab']">Hear from Satisfied Families!</div>
  <div className="w-[1180px] left-[130px] top-[518px] absolute text-center justify-start text-black text-3xl font-normal font-['Inter']">Head to work without the stress with our locally available childcare providers. And become a certified caretaker for your area!</div>
  <div className="w-[661px] left-[552px] top-[1358px] absolute inline-flex flex-col justify-start items-start gap-7">
    <div className="w-[628px] justify-start text-cyan-800 text-7xl font-normal font-['Josefin_Slab']">Specialized care, in your area!</div>
    <div className="self-stretch justify-start text-black text-3xl font-normal font-['Inter']">Search your perfect match with personalized preferences and our special map.</div>
  </div>
  <div className="w-[1097px] left-[179px] top-[1110px] absolute justify-start"><span className="text-black text-3xl font-normal font-['Inter']">A platform where we bridge childcare </span><span className="text-black text-3xl font-extrabold font-['Inter']">safer</span><span className="text-black text-3xl font-normal font-['Inter']">, </span><span className="text-black text-3xl font-extrabold font-['Inter']">faster</span><span className="text-black text-3xl font-normal font-['Inter']">, and </span><span className="text-black text-3xl font-extrabold font-['Inter']">cheaper</span><span className="text-black text-3xl font-normal font-['Inter']"> for working families — and community members from all backgrounds can apply to become a certified one-on-one caretaker for these families.</span></div>
  <div className="left-[630px] top-[661px] absolute justify-start text-white text-3xl font-bold font-['Inter']">Get Started! </div>
  <div className="left-[500px] top-[3692px] absolute justify-start text-cyan-800 text-5xl font-normal font-['Josefin_Sans']">Frequently Asked Questions!</div>
  <div className="w-full h-32 bg-lime-50 relative -z-10"></div>
  <div className="w-44 left-[660px] top-[35px] absolute inline-flex flex-col justify-start items-start gap-5">
    <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
      <div className="self-stretch inline-flex justify-between items-end">
        <div className="justify-start text-black text-6xl font-extrabold font-['Inter']">BridgeCare</div>
      </div>
    </div>
  </div>
  <div className="left-[00px] top-[51px] absolute inline-flex justify-start items-center gap-20">
    <div className="justify-start text-black text-2xl font-normal font-['Inter']">About Us</div>
    <div className="justify-start text-black text-2xl font-normal font-['Inter']">Care</div>
    <div className="justify-start text-black text-2xl font-normal font-['Inter']">Jobs</div>
  </div>
  <div className="left-[165px] top-[990px] absolute justify-start text-cyan-800 text-7xl font-normal font-['Josefin_Slab']">What is BridgeCare?</div>
  <div className="w-80 h-16 left-[555px] top-[3461px] absolute bg-gradient-to-r from-red-300 to-blue-500 rounded-[50px]"></div>
  <div className="left-[603px] top-[3478px] absolute justify-start text-white text-3xl font-bold font-['Inter']">Join The Team!</div>
  <div className="w-80 h-16 left-[565px] top-[2335px] absolute bg-zinc-300 rounded-[50px]"></div>
  <div className="left-[607px] top-[2352px] absolute justify-start text-black text-3xl font-bold font-['Inter']">Start Searching</div>
  <div className="w-80 h-16 px-7 py-4 left-[565px] top-[2335px] absolute bg-gradient-to-r from-red-300 to-blue-500 rounded-[50px] inline-flex justify-center items-center gap-2.5">
    <div className="justify-start text-white text-3xl font-bold font-['Inter']">Start Searching!</div>
  </div>
  {/* <div className="w-36 h-10 px-6 py-1 left-[1431px] top-[48px] absolute rounded-[20px] outline outline-[3.50px] outline-offset-[-1.50px] outline-black inline-flex justify-center items-center gap-2.5">
    <div className="justify-start text-black text-2xl font-normal font-['Inter']">Sign up</div>
  </div> */}
  {/* <div className="w-36 h-10 px-6 py-1 left-[1233px] top-[48px] absolute rounded-[20px] outline outline-[3.50px] outline-offset-[-1.50px] outline-black inline-flex justify-center items-center gap-2.5">
    <div className="justify-start text-black text-2xl font-normal font-['Inter']">Log In</div>
  </div> */}
{!session ? (
  <div className="flex gap-4">
    <a href="/auth/login?screen_hint=signup">
      <div className="w-36 h-10 px-6 py-1 left-[1431px] top-[48px] absolute rounded-[20px] outline outline-[3.50px] outline-offset-[-1.50px] outline-black inline-flex justify-center items-center gap-2.5">
    <div className="justify-start text-black text-2xl font-normal font-['Inter']">Sign up</div>
      </div>
    </a>

    <a href="/auth/login">
      <div className="w-36 h-10 px-6 py-1 left-[1233px] top-[48px] absolute rounded-[20px] outline outline-[3.50px] outline-offset-[-1.50px] outline-black inline-flex justify-center items-center gap-2.5">
    <div className="justify-start text-black text-2xl font-normal font-['Inter']">Log In</div>
      </div>
    </a>
  </div>
) : (
    <div className="absolute top-[48px] right-[50px] px-6 py-1 rounded-[20px] bg-lime-100 text-black text-2xl font-bold font-['Inter']">
      Welcome, {session.user?.name || 'User'}!
    </div>
)
    /* 

return (
  <main>
    <h1>Welcome to Babysitter Connect</h1>

    {!user ? (
      <a href="/api/auth/login">Login</a>
    ) : (
      <>
        <p>Hello, {user.name}!</p>
        <a href="/profile">Go to Profile</a><br />
        <a href="/api/auth/logout">Logout</a>
      </>
    )}
  </main>
); */}
  <div className="w-24 h-24 left-[564px] top-[3px] absolute">
    <div data-svg-wrapper className="left-[4.49px] top-[47.62px] absolute">
      <svg width="84" height="38" viewBox="0 0 84 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.492188 0.617188V13.3948C1.84452 12.6005 3.67805 11.5479 5.88281 10.3437V0.617188H0.492188ZM78.1172 0.617188V10.3571C79.9296 11.3434 81.7267 12.3576 83.5078 13.3993V0.617188H78.1172ZM41.912 0.6675C34.7868 0.67289 24.0521 4.85063 15.3074 9.1085C7.3018 13.0066 1.51695 16.5422 0.492188 17.1729V37.6328H20.3274C20.6652 31.8397 22.7603 25.2146 26.1765 19.7108C29.9135 13.6904 35.3559 8.88425 41.9995 8.88281C48.6452 8.88138 54.0921 13.6869 57.8335 19.7079C61.2544 25.2126 63.3535 31.8386 63.6919 37.6328H83.5078V17.1745C82.48 16.5438 76.6676 13.0025 68.6261 9.10113C59.8439 4.8402 49.0648 0.662649 41.912 0.667681V0.6675Z" fill="#4A90E2"/>
      </svg>
    </div>
  </div>
  <div data-svg-wrapper className="left-[595px] top-[63px] absolute">
    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.4165 11.0405C2.4165 16.9167 7.274 20.0475 10.8289 22.8508C12.0832 23.8392 13.2915 24.7708 14.4998 24.7708C15.7082 24.7708 16.9165 23.8404 18.1708 22.8496C21.7269 20.0487 26.5832 16.9167 26.5832 11.0417C26.5832 5.16683 19.9373 0.996873 14.4998 6.64704C9.06234 0.996873 2.4165 5.16442 2.4165 11.0405Z" fill="#F7A38E"/>
    </svg>
  </div>
  <div className="w-80 h-80 left-[234.51px] top-[919.08px] absolute origin-top-left rotate-[-174.68deg] opacity-30 blur-[10px]">
    <div data-svg-wrapper className="left-[33.88px] top-[50.55px] absolute">
      <svg width="226" height="258" viewBox="0 0 226 258" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M225.557 105.918C218.957 176.738 156.898 209.015 110.905 238.809C94.6784 249.313 79.0691 259.184 64.5061 257.827C49.9431 256.47 36.425 243.899 22.4214 230.549C-17.2919 192.798 -72.3032 149.596 -65.7051 78.791C-59.1071 7.98563 25.6728 -34.8075 84.8607 39.396C156.74 -22.5939 232.156 35.0979 225.557 105.918Z" fill="#F7A38E"/>
      </svg>
    </div>
  </div>
  <div className="w-[495.29px] h-[495.29px] left-[244.05px] top-[390.56px] absolute origin-top-left rotate-[-178.21deg] opacity-30 blur-[10px]">
    <div data-svg-wrapper className="left-[25.41px] top-[256.99px] absolute">
      <svg width="228" height="215" viewBox="0 0 228 215" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M227.362 14.9823L225.208 83.7383C218.065 79.2366 208.376 73.2634 196.715 66.4115L198.355 14.0734L227.362 14.9823ZM-190.338 1.89422L-191.98 54.3049C-201.899 59.3064 -211.74 64.4606 -221.5 69.7656L-219.344 0.985324L-190.338 1.89422ZM4.47421 8.26936C42.8137 9.49971 99.8728 33.79 146.21 58.176C188.631 80.5017 219.163 100.502 224.571 104.068L221.121 214.163L114.388 210.819C113.547 179.589 103.39 143.586 85.9356 113.394C66.8421 80.3683 38.3671 53.5891 2.61818 52.4612C-33.1423 51.3329 -63.2621 76.2733 -84.41 108.041C-103.746 137.085 -116.158 172.386 -118.956 203.507L-225.586 200.166L-222.136 90.0801C-216.499 86.8596 -184.626 68.784 -140.696 49.1465C-92.7209 27.6992 -34.0143 7.03726 4.47418 8.27034L4.47421 8.26936Z" fill="#4A90E2"/>
      </svg>
    </div>
  </div>
  <div className="w-[495.29px] h-[495.29px] left-[179.05px] top-[1712.56px] absolute origin-top-left rotate-[-178.21deg] opacity-30 blur-[10px]">
    <div data-svg-wrapper className="left-[25.41px] top-[256.99px] absolute">
      <svg width="163" height="215" viewBox="0 0 163 215" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M162.362 14.9822L160.208 83.7383C153.065 79.2366 143.376 73.2634 131.715 66.4115L133.355 14.0733L162.362 14.9822ZM-255.338 1.89414L-256.98 54.3048C-266.899 59.3063 -276.74 64.4605 -286.5 69.7655L-284.344 0.985248L-255.338 1.89414ZM-60.5258 8.26929C-22.1863 9.49964 34.8728 33.79 81.2099 58.176C123.631 80.5016 154.163 100.502 159.571 104.068L156.121 214.163L49.3883 210.819C48.5473 179.589 38.3903 143.586 20.9356 113.394C1.84211 80.3682 -26.6329 53.589 -62.3818 52.4611C-98.1423 51.3328 -128.262 76.2732 -149.41 108.041C-168.746 137.085 -181.158 172.386 -183.956 203.507L-290.586 200.166L-287.136 90.08C-281.499 86.8595 -249.626 68.7839 -205.696 49.1465C-157.721 27.6992 -99.0143 7.03718 -60.5258 8.27026L-60.5258 8.26929Z" fill="#4A90E2"/>
      </svg>
    </div>
  </div>
  <div className="w-[590.71px] h-[590.71px] left-[1535.43px] top-[1018.41px] absolute origin-top-left rotate-[-173.10deg] opacity-30 blur-[10px]">
    <div data-svg-wrapper className="left-[34.32px] top-[306.99px] absolute">
      <svg width="457" height="300" viewBox="0 0 457 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M558.039 64.0352L548.181 145.483C540.174 139.377 529.299 131.253 516.174 121.876L523.678 59.8765L558.039 64.0352ZM63.2357 4.14954L55.7216 66.2348C43.4079 71.1233 31.1704 76.2014 19.0133 81.4673L28.8743 -0.00918462L63.2357 4.14954ZM293.979 32.4016C339.393 37.9329 404.596 72.8445 457.052 106.732C505.075 137.756 539.221 164.755 545.267 169.566L529.482 299.983L403.048 284.681C405.364 247.493 397.12 203.647 379.59 165.928C360.414 124.669 329.43 89.8353 287.083 84.7008C244.723 79.5646 206.295 105.995 177.801 141.487C151.749 173.937 133.257 214.553 126.63 251.226L0.317746 235.939L16.1008 105.532C23.1389 102.304 62.9205 84.2153 117.189 65.5507C176.457 45.1656 248.389 26.8525 293.979 32.4028L293.979 32.4016Z" fill="#4A90E2"/>
      </svg>
    </div>
  </div>
  <div className="w-20 h-20 left-[1136.87px] top-[235.27px] absolute origin-top-left rotate-[1.51deg]">
    <div data-svg-wrapper className="left-[21.63px] top-[24.08px] absolute">
      <svg width="37" height="28" viewBox="0 0 37 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M35.6733 5.56051C36.8595 4.18281 36.6781 2.12815 35.2762 0.964915C33.8743 -0.198325 31.7727 -0.0228702 30.5914 1.35024L14.4999 20.0578L6.33382 13.4336C5.66756 12.8614 4.80421 12.5722 3.92777 12.6274C3.05133 12.6826 2.23112 13.078 1.64194 13.7292C1.35406 14.0486 1.13313 14.4224 0.992194 14.8287C0.85126 15.2349 0.793186 15.6653 0.821403 16.0943C0.849619 16.5234 0.963554 16.9425 1.15647 17.3267C1.34939 17.711 1.61739 18.0527 1.94461 18.3317L12.6448 27.1434C13.3199 27.7227 14.1967 28.0115 15.084 27.9466C15.9712 27.8818 16.7968 27.4685 17.3804 26.7971L35.6605 5.50834L35.6733 5.56051Z" fill="#52DF5B"/>
      </svg>
    </div>
    <div data-svg-wrapper className="left-[0.01px] top-0 absolute">
      <svg width="77" height="76" viewBox="0 0 77 76" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M32.434 3.44597C34.9974 1.66636 36.2791 0.776556 37.6494 0.454574C38.8736 0.178104 40.1475 0.211715 41.3555 0.552358C42.7211 0.946528 43.9588 1.90281 46.4059 3.81461L49.5321 6.23914C50.3864 6.90256 50.8159 7.23433 51.2802 7.49634C51.6951 7.72719 52.1283 7.92083 52.5797 8.07726C53.0889 8.2462 53.6189 8.34029 54.6835 8.53332L58.5762 9.23449C61.6482 9.78678 63.1818 10.0676 64.3777 10.8201C65.444 11.4844 66.3243 12.4124 66.9315 13.5123C67.6196 14.7557 67.8143 16.3064 68.2089 19.3893L68.7039 23.3136C68.8405 24.3869 68.9064 24.9259 69.0482 25.4433C69.1775 25.9022 69.3481 26.3434 69.5599 26.7668C69.8018 27.2444 70.1058 27.6907 70.7232 28.5788L72.9795 31.8286C74.7591 34.3919 75.6489 35.6736 75.9709 37.0439C76.2474 38.2682 76.2138 39.542 75.8731 40.75C75.4837 42.1157 74.5227 43.3533 72.6109 45.8004L70.1863 48.9267C69.7234 49.4765 69.3031 50.0609 68.9291 50.6748C68.6946 51.0901 68.5001 51.5268 68.3481 51.9789C68.1793 52.4834 68.0852 53.0134 67.8922 54.078L67.191 57.9707C66.6387 61.0428 66.3579 62.5763 65.6054 63.7722C64.941 64.8385 64.013 65.7188 62.9132 66.326C61.6698 67.0142 60.119 67.2089 57.0362 67.6035L53.1119 68.0984C52.3957 68.1606 51.6852 68.2773 50.9868 68.4476C50.5279 68.5737 50.0852 68.7442 49.6585 68.9592C49.1811 69.1963 48.7348 69.5003 47.8466 70.1224L44.5968 72.3787C42.0334 74.1583 40.7518 75.0481 39.3814 75.3701C38.1572 75.6466 36.8833 75.613 35.6754 75.2723C34.3098 74.8782 33.0721 73.9219 30.625 72.0101L27.4987 69.5856C26.9488 69.1226 26.3644 68.7024 25.7506 68.3284C25.3367 68.0942 24.9017 67.8997 24.4512 67.7474C23.7627 67.5406 23.0594 67.3865 22.3475 67.2867L18.4547 66.5855C15.3827 66.0332 13.8443 65.757 12.6532 64.9999C11.5909 64.3293 10.7131 63.4039 10.0995 62.3077C9.41131 61.0643 9.21661 59.5136 8.82201 56.4307L8.32708 52.5064C8.19047 51.4331 8.12445 50.8988 7.9826 50.3814C7.85721 49.9226 7.68581 49.4776 7.47101 49.0532C7.1299 48.4205 6.74101 47.8148 6.30774 47.2412L4.05145 43.9914C2.27184 41.4281 1.38191 40.1511 1.06006 38.776C0.783585 37.5518 0.817196 36.2779 1.15784 35.07C1.5473 33.7043 2.50829 32.4667 4.4201 30.0196L6.84462 26.8933C7.50804 26.039 7.83981 25.6095 8.10182 25.1452C8.33259 24.7335 8.52623 24.3003 8.68274 23.8458C8.85168 23.3366 8.94577 22.8066 9.1388 21.742L9.83998 17.8492C10.3923 14.7772 10.6732 13.239 11.4256 12.0478C12.0899 10.9814 13.0177 10.1106 14.1178 9.49401C15.3611 8.80583 16.9119 8.61113 19.9948 8.21652L23.9191 7.7216C24.9923 7.58969 25.5314 7.5191 26.044 7.37711C26.503 7.24785 26.9457 7.07732 27.3723 6.86553C27.8498 6.62837 28.2962 6.31971 29.1842 5.70226L32.434 3.44597ZM43.5415 7.53719L46.8248 10.0837C47.5221 10.6251 48.21 11.1617 48.9808 11.5967C49.6618 11.9822 50.3697 12.2978 51.1047 12.5433C51.9454 12.7999 52.8031 12.9973 53.6715 13.1341L57.7611 13.8735C61.2364 14.5024 61.6658 14.6598 61.9161 14.8172C62.3085 15.0663 62.6172 15.3918 62.8422 15.7936C62.9862 16.0518 63.1254 16.489 63.5655 19.9925L64.0882 24.1155C64.179 24.9898 64.3309 25.8567 64.5428 26.7098C64.7523 27.463 65.03 28.1866 65.3761 28.8806C65.7699 29.6733 66.2694 30.3886 66.7734 31.1135L69.1431 34.5265C71.1589 37.4259 71.3459 37.8408 71.4135 38.1348C71.5104 38.58 71.4982 39.0421 71.378 39.4816C71.2951 39.7668 71.0865 40.1713 68.9205 42.9651L66.374 46.2484C65.8325 46.9457 65.296 47.6337 64.861 48.4045C64.4788 49.0808 64.1618 49.7919 63.9143 50.5283C63.6578 51.3691 63.4604 52.2268 63.3235 53.0951L62.5842 57.1848C61.9553 60.66 61.7979 61.0894 61.6405 61.3397C61.3943 61.7225 61.0594 62.0402 60.6641 62.2658C60.4059 62.4098 59.9687 62.5491 56.4652 62.9891L52.3422 63.5118C51.4679 63.6027 50.601 63.7546 49.7479 63.9664C48.9995 64.1747 48.2726 64.4538 47.5771 64.7998C46.7844 65.1936 46.0691 65.6931 45.3442 66.197L41.9312 68.5668C39.0318 70.5826 38.6169 70.7695 38.3229 70.8372C37.8777 70.9341 37.4156 70.9219 36.9761 70.8017C36.6909 70.7187 36.2864 70.5101 33.4926 68.3441L30.2093 65.7977C29.5268 65.2437 28.8063 64.7381 28.0532 64.2847C27.3769 63.9025 26.6658 63.5855 25.9294 63.338C25.0886 63.0814 24.2309 62.884 23.3626 62.7472L19.2729 62.0078C15.7977 61.3789 15.3683 61.2215 15.118 61.0641C14.7352 60.818 14.4174 60.483 14.1918 60.0878C14.0479 59.8295 13.9086 59.3923 13.4685 55.8888L12.9459 51.7659C12.855 50.8915 12.7031 50.0246 12.4913 49.1715C12.2829 48.4231 12.0039 47.6962 11.6579 47.0007C11.2641 46.2081 10.7646 45.4927 10.2607 44.7679L7.8909 41.3549C5.87511 38.4554 5.68814 38.0405 5.6205 37.7466C5.52361 37.3013 5.5358 36.8393 5.65604 36.3998C5.73896 36.1145 5.94755 35.71 8.11355 32.9162L10.66 29.6329C11.2015 28.9356 11.738 28.2476 12.173 27.4769C12.5554 26.7958 12.871 26.0879 13.1197 25.353C13.3763 24.5123 13.5737 23.6546 13.7105 22.7862L14.4499 18.6966C15.0788 15.2213 15.2362 14.7919 15.3936 14.5416C15.6397 14.1588 15.9746 13.8411 16.3699 13.6155C16.6282 13.4715 17.0654 13.3322 20.5688 12.8922L24.6918 12.3695C25.5661 12.2787 26.4331 12.1268 27.2862 11.9149C28.0394 11.7054 28.763 11.4277 29.457 11.0815C30.2496 10.6878 30.965 10.1883 31.6898 9.68434L35.1028 7.31454C38.0023 5.29876 38.4172 5.11179 38.7111 5.04414C39.1564 4.94726 39.6184 4.95945 40.0579 5.07968C40.3432 5.1626 40.7477 5.37119 43.5415 7.53719Z" fill="#52DF5B"/>
      </svg>
    </div>
  </div>
  <div className="w-56 h-56 left-[1484.26px] top-[334.43px] absolute origin-top-left rotate-[174.91deg] opacity-30 blur-[10px]">
    <div data-svg-wrapper className="left-[21.88px] top-[33.06px] absolute">
      <svg width="179" height="170" viewBox="0 0 179 170" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M191.536 52.2463C195.669 98.6679 159.497 126.818 133.385 151.465C124.171 160.156 115.281 168.366 105.735 169.216C96.189 170.065 85.9887 163.565 75.3831 156.62C45.3194 136.994 4.75145 115.667 0.61908 69.2544C-3.51329 22.8423 46.056 -14.7752 92.9868 26.0367C131.969 -22.4245 187.403 5.8246 191.536 52.2463Z" fill="#F7A38E"/>
      </svg>
    </div>
  </div>
  <div className="w-56 h-56 left-[1480.50px] top-[1855.10px] absolute origin-top-left rotate-[174.91deg] opacity-30 blur-[10px]">
    <div data-svg-wrapper className="left-[21.88px] top-[33.06px] absolute">
      <svg width="183" height="169" viewBox="0 0 183 169" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M191.776 51.9206C195.909 98.3423 159.737 126.492 133.625 151.139C124.411 159.83 115.521 168.04 105.975 168.89C96.4288 169.74 86.2284 163.239 75.6228 156.294C45.5591 136.668 4.9912 115.341 0.858826 68.9288C-3.27354 22.5167 46.2957 -15.1008 93.2265 25.7111C132.209 -22.7502 187.643 5.49895 191.776 51.9206Z" fill="#F7A38E"/>
      </svg>
    </div>
  </div>
  <div className="left-[50px] top-[1926px] absolute shadow-[5px_10px_4px_0px_rgba(0,0,0,0.15)] inline-flex justify-start items-center gap-24">
    <div className="w-80 h-80 bg-white rounded-[30px] shadow-[10px_15px_20px_0px_rgba(0,0,0,0.15)]"></div>
    <div className="w-80 h-80 bg-white rounded-[30px] shadow-[10px_15px_20px_0px_rgba(0,0,0,0.15)]"></div>
    <div className="w-80 h-80 bg-white rounded-[30px] shadow-[10px_15px_20px_0px_rgba(0,0,0,0.15)]"></div>
    <div className="w-80 h-80 bg-white rounded-[30px] shadow-[10px_15px_20px_0px_rgba(0,0,0,0.15)]"></div>
  </div>
  <div className="left-[342px] top-[2885px] absolute justify-start text-cyan-800 text-7xl font-normal font-['Josefin_Slab']">Meet our top Caretakers!</div>
  <div className="left-0 top-[3035px] absolute shadow-[5px_10px_4px_0px_rgba(0,0,0,0.15)] inline-flex justify-start items-center gap-24">
    <div className="w-80 h-80 bg-white rounded-[30px] shadow-[10px_15px_20px_0px_rgba(0,0,0,0.15)]"></div>
    <div className="w-80 h-80 bg-white rounded-[30px] shadow-[10px_15px_20px_0px_rgba(0,0,0,0.15)]"></div>
    <div className="w-80 h-80 bg-white rounded-[30px] shadow-[10px_15px_20px_0px_rgba(0,0,0,0.15)]"></div>
    <div className="w-80 h-80 bg-white rounded-[30px] shadow-[10px_15px_20px_0px_rgba(0,0,0,0.15)]"></div>
  </div>
  <div className="w-80 h-80 left-[224px] top-[1327px] absolute">
    <div data-svg-wrapper className="left-[54.66px] top-[24.84px] absolute">
      <svg width="210" height="270" viewBox="0 0 210 270" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M105 60.4688C96.1555 60.4688 87.5096 63.0915 80.1556 68.0052C72.8016 72.919 67.0699 79.9031 63.6853 88.0744C60.3006 96.2457 59.415 105.237 61.1405 113.912C62.866 122.586 67.125 130.554 73.3791 136.808C79.6331 143.062 87.6012 147.322 96.2758 149.047C104.95 150.772 113.942 149.887 122.113 146.502C130.284 143.118 137.269 137.386 142.182 130.032C147.096 122.678 149.719 114.032 149.719 105.188C149.719 93.3274 145.007 81.953 136.621 73.5666C128.235 65.1802 116.86 60.4688 105 60.4688ZM105 139.969C98.1209 139.969 91.3963 137.929 85.6766 134.107C79.9568 130.285 75.4988 124.853 72.8663 118.498C70.2338 112.142 69.545 105.149 70.8871 98.402C72.2291 91.6551 75.5417 85.4577 80.4059 80.5935C85.2702 75.7292 91.4676 72.4166 98.2145 71.0746C104.961 69.7325 111.955 70.4213 118.31 73.0538C124.666 75.6863 130.098 80.1443 133.92 85.8641C137.741 91.5838 139.781 98.3084 139.781 105.188C139.781 109.755 138.882 114.278 137.134 118.498C135.386 122.718 132.824 126.552 129.594 129.782C126.364 133.011 122.53 135.573 118.31 137.321C114.09 139.069 109.568 139.969 105 139.969ZM105 0.84375C77.3354 0.873343 50.8123 11.8762 31.2505 31.438C11.6887 50.9999 0.685843 77.5229 0.65625 105.188C0.65625 142.975 18.258 183.184 51.5859 221.481C66.6631 238.903 83.6323 254.593 102.18 268.262C103.014 268.844 104.007 269.157 105.025 269.157C106.042 269.157 107.035 268.844 107.869 268.262C126.4 254.591 143.352 238.9 158.414 221.481C191.717 183.184 209.344 142.975 209.344 105.188C209.314 77.5229 198.311 50.9999 178.749 31.438C159.188 11.8762 132.665 0.873343 105 0.84375ZM151.085 214.786C137.203 230.684 121.764 245.154 105 257.977C88.2332 245.138 72.7944 230.652 58.9148 214.736C36.866 189.408 10.5938 149.782 10.5938 105.188C10.5938 80.1494 20.5401 56.1368 38.2447 38.4322C55.9493 20.7276 79.9619 10.7813 105 10.7813C130.038 10.7813 154.051 20.7276 171.755 38.4322C189.46 56.1368 199.406 80.1494 199.406 105.188C199.406 149.782 173.134 189.408 151.085 214.786Z" fill="url(#paint0_linear_83_558)"/>
      <defs>
      <linearGradient id="paint0_linear_83_558" x1="0.65625" y1="135" x2="209.344" y2="135" gradientUnits="userSpaceOnUse">
      <stop stopColor="#F7A38E"/>
      <stop offset="1" stopColor="#4A90E2"/>
      </linearGradient>
      </defs>
      </svg>
    </div>
    <div className="w-28 h-32 left-[102px] top-[68px] absolute bg-lime-50 rounded-full"></div>
  </div>
  <div className="w-[661px] left-[552px] top-[2513px] absolute inline-flex flex-col justify-start items-start gap-7">
    <div className="w-[628px] justify-start text-cyan-800 text-7xl font-normal font-['Josefin_Slab']">Become a Trusted Caretaker!</div>
    <div className="self-stretch justify-start text-black text-3xl font-normal font-['Inter']">Join our mission to providing affordable & accessible childcare with monetary rewards!</div>
  </div>
  <div className="w-80 h-80 left-[222.23px] top-[2731.64px] absolute origin-top-left rotate-[179.89deg] opacity-30 blur-[10px]">
    <div data-svg-wrapper className="left-[25.55px] top-[41.88px] absolute">
      <svg width="197" height="220" viewBox="0 0 197 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M196.396 74.4094C196.516 136.34 145.384 169.435 107.975 199.053C94.7757 209.496 82.0595 219.339 69.3244 219.364C56.5894 219.388 43.8354 209.607 30.5962 199.19C-6.94004 169.742 -58.186 136.831 -58.3054 74.9133C-58.4248 12.9954 11.5334 -31.0885 68.9561 28.3502C126.149 -31.3095 196.277 12.4787 196.396 74.4094Z" fill="#F7A38E"/>
      </svg>
    </div>
  </div>
  <div className="w-[590.71px] h-[590.71px] left-[1768.43px] top-[3061.41px] absolute origin-top-left rotate-[-173.10deg] opacity-30 blur-[10px]">
    <div data-svg-wrapper className="left-[34.32px] top-[306.99px] absolute">
      <svg width="224" height="300" viewBox="0 0 224 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M558.039 64.0352L548.181 145.483C540.174 139.377 529.299 131.253 516.174 121.876L523.678 59.8764L558.039 64.0352ZM63.2357 4.14948L55.7216 66.2347C43.4079 71.1232 31.1704 76.2014 19.0133 81.4672L28.8743 -0.00924566L63.2357 4.14948ZM293.979 32.4016C339.393 37.9328 404.596 72.8444 457.052 106.732C505.075 137.756 539.221 164.755 545.267 169.566L529.482 299.983L403.048 284.681C405.364 247.493 397.12 203.647 379.59 165.928C360.414 124.669 329.43 89.8353 287.083 84.7008C244.723 79.5646 206.295 105.994 177.801 141.487C151.749 173.937 133.257 214.553 126.63 251.226L0.317746 235.939L16.1008 105.532C23.1389 102.304 62.9205 84.2152 117.189 65.5506C176.457 45.1655 248.389 26.8525 293.979 32.4027L293.979 32.4016Z" fill="#4A90E2"/>
      </svg>
    </div>
  </div>
  <div className="w-40 h-40 left-[306px] top-[1391px] absolute">
    <div data-svg-wrapper className="left-[13.78px] top-[20.37px] absolute">
      <svg width="138" height="124" viewBox="0 0 138 124" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M66.9637 116.27C67.8566 116.27 68.7722 116.07 69.7107 115.669C70.6491 115.268 71.4076 114.778 71.9862 114.2L125.259 60.9203C126.976 59.2028 128.302 57.4489 129.236 55.6586C130.165 53.8592 130.63 51.8866 130.63 49.741C130.63 47.568 130.165 45.4587 129.236 43.4133C128.302 41.3633 126.976 39.4955 125.259 37.81L99.6339 12.185C97.9437 10.4675 96.2058 9.2079 94.42 8.40612C92.6388 7.60434 90.6617 7.20345 88.4887 7.20345C86.343 7.20345 84.35 7.60434 82.5095 8.40612C80.6691 9.2079 78.9357 10.4652 77.3093 12.1781L71.3507 18.1368L83.9924 30.8126C85.3499 32.1474 86.3635 33.6644 87.0332 35.3636C87.6983 37.0628 88.0308 38.7871 88.0308 40.5365C88.0308 44.0943 86.8669 47.0372 84.539 49.3651C82.2111 51.693 79.2705 52.8547 75.7172 52.8501C73.9633 52.8501 72.2527 52.5836 70.5854 52.0506C68.918 51.5176 67.417 50.5837 66.0822 49.249L56.0304 39.245C55.2422 38.4568 54.2355 38.0628 53.01 38.0628C51.78 38.0628 50.771 38.4568 49.9829 39.245L23.5037 65.7241C22.8158 66.4166 22.2987 67.2024 21.9525 68.0816C21.6063 68.9608 21.4332 69.8492 21.4332 70.7466C21.4332 72.3593 21.9502 73.6872 22.9844 74.7305C24.0139 75.7782 25.335 76.3021 26.9477 76.3021C27.8406 76.3021 28.7562 76.1017 29.6947 75.7008C30.6331 75.2953 31.3916 74.8033 31.9702 74.2248L51.206 54.989C51.8438 54.3512 52.6228 54.0027 53.543 53.9435C54.4632 53.8842 55.2969 54.2327 56.044 54.989C56.7729 55.7178 57.1374 56.5242 57.1374 57.408C57.1374 58.2917 56.7729 59.0981 56.044 59.827L36.8424 79.0628C36.1499 79.7552 35.6306 80.5411 35.2844 81.4203C34.9427 82.3041 34.7719 83.1924 34.7719 84.0853C34.7719 85.6114 35.3094 86.912 36.3845 87.9871C37.4596 89.0622 38.7602 89.6021 40.2864 89.6066C41.1792 89.6066 42.0949 89.4039 43.0334 88.9985C43.9718 88.593 44.7303 88.1033 45.3089 87.5293L66.1232 66.756C66.761 66.1136 67.5377 65.7628 68.4534 65.7036C69.369 65.6444 70.2027 65.9929 70.9544 66.7491C71.6832 67.478 72.0477 68.2843 72.0477 69.1681C72.0477 70.0519 71.6832 70.8582 70.9544 71.5871L50.181 92.4015C49.5797 92.98 49.0831 93.7385 48.6914 94.6769C48.2996 95.6154 48.1037 96.5311 48.1037 97.424C48.1037 98.9455 48.6435 100.244 49.7232 101.319C50.8029 102.403 52.1035 102.945 53.625 102.945C54.5179 102.945 55.4062 102.772 56.29 102.426C57.1738 102.08 57.9574 101.56 58.6407 100.868L79.4619 80.0946C80.0996 79.4523 80.8764 79.1015 81.792 79.0423C82.7077 78.9876 83.5436 79.3361 84.2999 80.0878C85.0242 80.8167 85.3863 81.623 85.3863 82.5068C85.3863 83.3906 85.0219 84.1969 84.293 84.9258L63.4855 105.733C62.7976 106.426 62.2806 107.257 61.9343 108.227C61.5881 109.198 61.415 110.084 61.415 110.886C61.415 112.498 61.9822 113.799 63.1165 114.787C64.2509 115.776 65.5355 116.27 66.9705 116.27M66.9295 123.104C63.4172 123.104 60.4105 121.819 57.9095 119.25C55.4085 116.68 54.3106 113.505 54.6159 109.724C50.7436 109.77 47.5206 108.615 44.9467 106.259C42.3728 103.904 41.1496 100.615 41.2772 96.3921C37.0587 96.4377 33.7332 95.2305 31.3005 92.7705C28.8679 90.3105 27.7609 87.0715 27.9795 83.0535C24.1802 83.099 21.0004 82.0285 18.4402 79.8418C15.8845 77.6642 14.6067 74.6302 14.6067 70.7398C14.6067 68.9859 14.9461 67.232 15.6249 65.4781C16.3036 63.7197 17.3059 62.1753 18.6315 60.8451L45.2474 34.2293C47.3429 32.1383 49.9259 31.0928 52.9964 31.0928C56.0668 31.0928 58.6498 32.1406 60.7453 34.2361L70.6605 44.1513C71.2391 44.7572 71.9543 45.256 72.8062 45.6478C73.6581 46.0396 74.617 46.2332 75.683 46.2286C77.1453 46.2286 78.4369 45.7184 79.5575 44.698C80.6782 43.6775 81.2408 42.3473 81.2453 40.7073C81.2453 39.6413 81.0495 38.6846 80.6577 37.8373C80.2659 36.9854 79.7693 36.2702 79.168 35.6916L55.6614 12.185C53.9667 10.4675 52.206 9.2079 50.3792 8.40612C48.5524 7.60434 46.5525 7.20345 44.3795 7.20345C42.2339 7.20345 40.2841 7.60434 38.5302 8.40612C36.7809 9.2079 35.0475 10.4675 33.33 12.185L12.5225 33.0266C10.1354 35.4092 8.60019 38.3179 7.91685 41.7528C7.23352 45.1877 7.54558 48.4677 8.85302 51.5928C9.10813 52.4766 8.99424 53.3307 8.51135 54.1553C8.02846 54.9798 7.34513 55.5037 6.46135 55.727C5.57758 55.9502 4.70063 55.8317 3.83052 55.3716C2.96041 54.9115 2.41374 54.235 2.19052 53.3421C0.719077 48.9232 0.39791 44.4611 1.22702 39.9556C2.05613 35.4502 4.19724 31.4709 7.65035 28.0178L28.3144 7.34695C30.6969 4.98717 33.2184 3.23328 35.8789 2.08529C38.5393 0.941841 41.4161 0.370117 44.5094 0.370117C47.6026 0.370117 50.4544 0.944118 53.0647 2.09212C55.6796 3.23556 58.1669 4.98717 60.5267 7.34695L66.4717 13.2988L72.4304 7.34695C74.8129 4.98717 77.3116 3.23328 79.9265 2.08529C82.5414 0.941841 85.3955 0.370117 88.4887 0.370117C91.5819 0.370117 94.4587 0.944118 97.1192 2.09212C99.7751 3.23556 102.281 4.98717 104.636 7.34695L130.097 32.8011C132.452 35.1563 134.27 37.8008 135.55 40.7346C136.83 43.6684 137.468 46.6819 137.463 49.7751C137.463 52.8729 136.825 55.727 135.55 58.3373C134.274 60.9476 132.457 63.435 130.097 65.7993L76.8174 119.031C75.4006 120.452 73.8562 121.486 72.1843 122.133C70.517 122.78 68.77 123.104 66.9295 123.104Z" fill="url(#paint0_linear_83_567)"/>
      <defs>
      <linearGradient id="paint0_linear_83_567" x1="0.778809" y1="61.7369" x2="137.463" y2="61.7369" gradientUnits="userSpaceOnUse">
      <stop stopColor="#F7A38E"/>
      <stop offset="1" stopColor="#4A90E2"/>
      </linearGradient>
      </defs>
      </svg>
    </div>
  </div>
  <div className="w-72 h-72 left-[243px] top-[2487px] absolute">
    <div data-svg-wrapper className="left-[65.31px] top-[23.75px] absolute">
      <svg width="155" height="239" viewBox="0 0 155 239" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M77.5 0.75C87.3958 0.75 95.8073 4.21354 102.734 11.1406C109.661 18.0677 113.125 26.4792 113.125 36.375C113.125 46.2708 109.661 54.6823 102.734 61.6094C95.8073 68.5365 87.3958 72 77.5 72C67.6042 72 59.1927 68.5365 52.2656 61.6094C45.3385 54.6823 41.875 46.2708 41.875 36.375C41.875 26.4792 45.3385 18.0677 52.2656 11.1406C59.1927 4.21354 67.6042 0.75 77.5 0.75ZM77.5 83.875C86.8021 83.875 96.0052 84.9635 105.109 87.1406C114.214 89.3177 122.427 92.3854 129.75 96.3438C137.271 100.104 143.307 104.557 147.859 109.703C152.411 114.849 154.688 120.49 154.688 126.625V195.5C154.688 198.865 153.896 202.182 152.312 205.451C150.729 208.721 148.552 211.737 145.781 214.5C143.01 217.263 139.796 219.836 136.139 222.219C132.481 224.602 128.372 226.779 123.812 228.75V202.031C123.812 194.51 118.619 188.375 108.233 183.625C97.8458 178.875 87.6017 176.5 77.5 176.5C67.6042 176.5 58.0567 178.531 48.8575 182.592C39.6583 186.653 33.9662 191.945 31.7812 198.469C39.3021 201.438 47.0208 203.516 54.9375 204.703C62.8542 205.891 70.9687 206.583 79.2812 206.781H89.375V237.656C87.9896 238.052 86.5567 238.25 85.0762 238.25H80.4688C73.3438 238.25 65.1817 237.458 55.9825 235.875C46.7833 234.292 38.0235 231.818 29.7031 228.453C21.3827 225.089 14.4081 220.687 8.77937 215.248C3.15062 209.809 0.328333 203.227 0.3125 195.5V126.625C0.3125 120.49 2.58854 114.849 7.14062 109.703C11.6927 104.557 17.6302 100.104 24.9531 96.3438C32.474 92.3854 40.7865 89.3177 49.8906 87.1406C58.9948 84.9635 68.1979 83.875 77.5 83.875ZM77.5 155.125C84.0312 155.125 89.6244 152.801 94.2794 148.154C98.9344 143.507 101.258 137.914 101.25 131.375C101.242 124.836 98.9185 119.247 94.2794 114.608C89.6402 109.968 84.0471 107.641 77.5 107.625C70.9529 107.609 65.3638 109.937 60.7325 114.608C56.1013 119.278 53.7738 124.868 53.75 131.375C53.7262 137.883 56.0538 143.476 60.7325 148.154C65.4113 152.833 71.0004 155.157 77.5 155.125Z" fill="url(#paint0_linear_83_582)"/>
      <defs>
      <linearGradient id="paint0_linear_83_582" x1="0.3125" y1="119.5" x2="154.688" y2="119.5" gradientUnits="userSpaceOnUse">
      <stop stopColor="#F7A38E"/>
      <stop offset="1" stopColor="#4A90E2"/>
      </linearGradient>
      </defs>
      </svg>
    </div>
  </div>
  <div className="w-24 h-24 left-[419px] top-[307px] absolute"></div>
  </div>
{/* </div> */}
    </main>
)}

// export default function Home() {
//   const { user } = useUser();

//   return (
//     <main>
//       <h1>Welcome to Babysitter Connect</h1>

//       {!user ? (
//         <a href="/api/auth/login">Login</a>
//       ) : (
//         <>
//           <p>Hello, {user.name}!</p>
//           <a href="/profile">Go to Profile</a><br />
//           <a href="/api/auth/logout">Logout</a>
//         </>
//       )}
//     </main>
//   );
// }