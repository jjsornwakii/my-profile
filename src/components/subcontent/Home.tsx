import React from "react";
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-8 flex  mt-28 " >
      <div className="flex flex-col justify-center gap-5  md:flex-row md:items-center md:gap-10 text-white ">
        <div>
          <img src="https://e3.365dm.com/25/01/1600x900/skynews-taylor-swift-eras-tour_6801775.jpg?20250116225711" alt="profile_pic"
            className="border-2 rounded-lg w-full max-w-sm md:max-w-md lg:w-[90vw]  shadow-lg" />
        </div>
        <div className="flex flex-col justify-end ">
          <div className="text-sm sm:text-base md:text-lg lg:text-xl">{t(`hi`)}</div>
          <div className="text-3xl  md:text-4xl lg:text-5xl font-bold">{t('name')}</div>

          <div className="mt-7 text-sm sm:text-base md:text-lg lg:text-lg">{t('roles')}</div>
          <div className="mt-4 text-xs  ">
            {t('personal data')}
          </div>
          <div className="mt-7 flex flex-wrap gap-8">
            <div className=" text-center">

              <a href="/pdf/Resume.pdf" download="Siwakorn-Mobile-Dev.pdf" className="px-3 py-2 border-2 border-[#F2C942] rounded-3xl text-[10px]
                        md:text-[16px]
                        hover:bg-[#F2C942]
                        hover:text-black
                        transition-all
                        ">{t('loadcv')}
              </a>
            </div>
            <div className="flex flex-row gap-3 justify-items-center">

              <a href="tel:+66932784456">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
                  <rect width="36" height="36" fill="url(#pattern0_3_43)" />
                  <defs>
                    <pattern id="pattern0_3_43" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlinkHref="#image0_3_43" transform="scale(0.0111111)" />
                    </pattern>
                    <image id="image0_3_43" width="90" height="90" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtElEQVR4nO3cW6hmYxgH8DXMyDGGCHExTklNxs0kp1KaIZJSE2pMimSQC1duRLmZNJORKymHkQmTCxqNUqPI5gI5XCiHsUcTmUNyHsb8tNpLSnvb37cOnnet7/3Vvtx7vc//+/Za3/e8z1pFkWVZlmVZlmVZNimwCKuxDbuxF8/itOi1DQZW4Auz+wonRa+x13AINuCg/7Y5eq29hcOwxWgO4tLoNfcODsXzxvMxFkavvVewTj13RK+9N3D1COfkuezB8dE1JA9H4kvNPBZdR/Jwn+YOYGl0Lal/ytilHduj60kWVmrXquiakoRHWg56ujznR9eVHLypfQ9G15UcfNNB0L9iSXRtScFvurElurak4BfdWRldXzKqb3Vd+ST3Qf4J+l3dujX2rZQIbOo46Neja0wC7uw46Peja0wCzuk46Meja0xGC527ufyB86LrSwYe0I0N0bUlBadXbc42fYtjo2tLDra2HPTq6JqShItaDPktLIiuKVl4rYWQD2BZdC1Jw4UtBP1EdB29gOcaBn1xdA29gFPwfYOgl0TX0Bu4u0HQ10avv2+jYXW7em+Xvx9dQ2/gTPxQM+x10evvFdymvlui198reKHBBu3y6PX3Bk7Ajpphf11+iomuoTdwPn6uGfZHWBxdQ2/gJvVN4ajoGnoD6xuE/UreER896IXVbXB1PZ27eqOHfUy54Vo7ah7NYY/XD9nRIOxyxGHRqMebaDgL3zU8Z+fx3hHDvqTh7F45Mnxc5++KIcBV2N8g7A9xas1jL8WT1Yzf9qplMNx7HnEdfm8Q9q5xvq6X/wXYWM2N/Nun5YtfDBWun6PwUZVz2mvmOcYC3FyNMoxyDTijGCKswZ+a2ThbPxsXVLvr49hf/b2ji6HB7S2EPVWdjs7G5Xiq4YDP9CDvFjPTF2lyGunKG2WDrBgSrGp4gexK+d/2DE4shgLXVBsAKdqHewazv4krO74hqakPcFkxoG+Qe6WrfHzG5kE8IwrnNmxE/R+mB/H0MzNdv/ekbVMxoH72NunaXQxsp2a9NO0phgY34Cdp2VoMEZYldpG8sRj4kM5L0Qnjs0H3s/9WtUB/DPwsvaKYFGY6du8EBP1wMaHz2Xc1vPNgHC+WD74tJhVOrjptdZ8wOYry2nB4dK1JwHK82nLA5Yv30ES/k+e5Pe/lFm6nLh8+nh9DNJ+y8YP78fmYAe/EvThi3oNks05Mra3O5VPVDvm+6mdnNe9Rft2/Io+hZVmWZVmWZVmWZVmWFbP6C7iQWJhNB3m4AAAAAElFTkSuQmCC" />
                  </defs>
                </svg>
              </a>
              <a href="mailto:siwakorn.suriya.work@gmail.com">
                <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
                  <rect width="39" height="39" fill="url(#pattern0_3_45)" />
                  <defs>
                    <pattern id="pattern0_3_45" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlinkHref="#image0_3_45" transform="scale(0.0111111)" />
                    </pattern>
                    <image id="image0_3_45" width="90" height="90" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACy0lEQVR4nO3avWsUQRzG8VODCCJoFAxYxMLGRhBFsNJGq1jZ+dJYamfjHxCLFBYWFgqCglpZaaWNVoJoY2OjYgIWgkJACRolyVcGNiAhuZndnZn9zd7zgcDB3e5kH/Z2Z57bwUBEREREREREREREREQiAnYCrxCft8CetmFvB557hxpdL4Edsc7srcDjro/IoKfAtiaBbhry3hbgXtdHZsh9YKxJlu7NB76NgRtdH6EBt4DNnpPy7rCgg74OwDVG10zoZdYXdNAFHrgMLDM6VoCrdSYOIUEHTVmAc8Bf+m8JuOTJYtfaqXBo0M57YJ9ngCngF/21CJz1ZDABvFu7YZ2gnVnggGegE8AP+mcBOOU59v3Ax/U2rhu08xU45BnwCPCd/pgHjnuO+SDwZaMdNAk6ysAFCTmxjvpOrKZBr36VTgd8lT5QrtmAS+XJkEtlm6CdPwE3h73r3RwKEHLzPwP8DtlZ26BDpzulNX9vAqaz5+tMZ2MEXWcC/wz7QhZoV+ou0GIFXXtJalSyyiF20MElC/YkLdFSBJ38n04g+cmRKuiSmr+ZHJe7lEFbb/5W6jZwloO22vwtNWngrAdtrflbbNrAlRC0leZvoU0DV0rQXTd/810WYbmD7uqAozRwpQUd2vxNRmr+Psdq4EoMOlfzF7WBKzXo1M1f9Aau5KBTNX8vUjRwpQcdeyn8xOLS31LQzs2AZ/7usLHb7jOeMsuNwagH7X1g8L8bmOsgvlV/7vWUZ5uxat+dsBh080dgDf/gYDXoaA91W3l43nLQzmtgvEXI49U+Omc9aGcOONYg5MPAJ4woIWiqldt0yNkN7Aau51jt9THoVT+Bh8AFVxJVvfFE9foi8Kj6jDmlBV0sBZ2Jgs5EQWeioDNR0Jko6EwUdCYKOhMFnYmCzkRBZ6KgM1HQmSjoTHw9uoiIiIiIiIiIiIiIiAyG+Ae+eiaBOoDMBQAAAABJRU5ErkJggg==" />
                  </defs>
                </svg>
              </a>
              <a href="https://www.facebook.com/jjsornwakii" target="_blank">
                <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
                  <rect width="39" height="39" fill="url(#pattern0_3_46)" />
                  <defs>
                    <pattern id="pattern0_3_46" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlinkHref="#image0_3_46" transform="scale(0.0111111)" />
                    </pattern>
                    <image id="image0_3_46" width="90" height="90" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEn0lEQVR4nO2cTYhVZRjHXybTilKCyiKpNCXaaGHRB4YRUbTRXGhlHyBpDWFoTDVBi1okjIGLBJdnUYuiICtLEqWojbWY0dJKN+nYh9g4jboIZ+qOP3mYVzCT7jn3Pu/Xue8PzmaYe+7/+c2Zc96v8xqTyWQymUwmk8lkMplyABcAtwNPA28CHwN7gJ+BEWDMHiP2Z3vs76y3n7lNzlHy6zoLYAawFvgUOEH7HAe2AGuAa00nA1wMPAnsAMZxRwPYDjwBXGQ6BeBSe6X9jn+GgNeBaaauABcCLwF/Eh7J0COZTJ0A7gH2Eh/7gftN6sg9EdgEnCJeJNtGYIpJEeAG4FvSYQCYbVJC/h2Vmmm+kWbhfSYFgCXASdJlDHjExAzwjOM2sS+khlUmRoCHbeegLowDy0xMyH0NGKV+jAEPmBgA5iT64KvygLwxhnbyLuLgb+AI8BPQb3PJ6N6hs0b9WqU/aDvbdkZC3kM/A54H5gFdJfJeDaxs8fs2+rH639ALA/X4TgFvAze38Txp9XsX6JtsPkD0A/45BjzYZvZWRWMnGSbpmWweVkbhfHMCuFUhezuihRd0LDYPelmgoc7FSvnbFX1UxtQ1sjQL+jL+eV8xf7uihR6tPP83/SRNKN+ti5siE33Y6bQY8BT++UK5Bg3RwnLNXOeGlIlU36ytmHESsAh4Beg7z/GeUq5tLpcEhBiZu6NCxtnAPk+5ZADtGheiZd2Fb04Ck0vmmxKgbb/ahWhZ3OKbvRXyrQiQ7yMXy7SkV+abrytk/DxAvmOqy8/sWrgQbKmQ0Xez8wzzNUXL4sEQvFPhPy7U7M4KTdGyqjMERcl80wlHn6boTyIXPZNwbNYU/X2gIooERO/WFD0YqIgiAdEHNEWHWgFaJCD6qKbodiY26y56NHbR24HLmxyXlMzXVeJcZ44XlesY0xTtole4VS1gtVreUq5jWDPcr9RH9DblOgY1w8nsb11EH1Su4zvNcPIeX/KimZiK0x5T/1Az4AbqIfoWB3Ws1wz4bE1EL3NQx6rYr4StagHL1/GagzrmagbssstXUxf9rnINx9XfO3fQLNoP9DY5HiqZbVqJc/U6aHHoXyzAc/iniLwL3u1C9PQAsxhFxKLFxVXqom1BX3kupohY9JdOJNuClnsupohY9KOuF6C7GPdITfRvzndGAF71WFARqehep5LP2tjkSAeL/gOY6ly0LWx1B4vudm/43/fqfR0o+kevLwvZ4u700K4uIhI97v31N8fDp7GK1luR1OJAuuzcUnfRA8G3cgOus9uc1VX0sJzfxABwr6NtJIrAomWZxUITE/LCJfBPjUQ3ot3yx25L2aiB6AbwmIkZe2X/lbDo0Wiv5HMB7rYPkdREDwF3mZQArgd2JiR6p2yKaFLEvsXa18Z924do6fGt8961dgETyxW+iVD0ruRuFSXfnOq2g+ahRR+2i4Ka7sOULEy8SizDrL8EED1oZ/M7amf0LrtZ7Ad2KzVXoht2V4altduYuyrAFcDjdiXRsILoIXsu2V/kSvcVJAowy16Biyr8od6wn5lT63tvJpPJZDKZTCaTyRhlTgOVjgwH5mGZewAAAABJRU5ErkJggg==" />
                  </defs>
                </svg>
              </a>
              <a href="https://line.me/R/ti/p/~jjheartrocker" target="_blank">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
                  <rect width="40" height="40" fill="url(#pattern0_3_49)" />
                  <defs>
                    <pattern id="pattern0_3_49" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlinkHref="#image0_3_49" transform="scale(0.0111111)" />
                    </pattern>
                    <image id="image0_3_49" width="90" height="90" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEsklEQVR4nO2cT6gVVRzHTxqVj/49F1m9Ig2zrMxehf3ZSKGLoFxUWsGDkoqo1Fq0TBJr2x9p40KKRIvahIFQLh4toj9QaGBWRBKEGBWWPinKpx85vXPrdJuZO2fuzO+dM/f3gbvwvDt3vufj3DNzfnPuGKMoiqIoiqIoiqIoiqIY4AzgSeBT4Cjt5SjwCbAOOF30vx64CPiCwWOP7bvkkTyIkn3ZzR/ZbrgYdNZKiLZj8qDzsYToienuZQRMSIhWABUthIoWQkULoaKFaIvoH4F3gfXAKmAJcD4wDJziXsOuzf5tJfAMsAM4KBEwZdH7nNhRK7LPjKNO/N6mwtZnNL8TdTIJbAduaTDvzcA2t6/aaCqvH7wu3gQWNB7439wLgDfqCi8RuF++AW5rPGh+/luBr9sueitwZuMhe/dhFrCpjaKPi1S8AgEerzp2S4QL5S/gHhMpwF0uY9KiTwCrTeQA97tvXbKi15tEYOq6O0nRu4AZJhGAGcD7qYn+HZhrEgO4uOwdfYkwZXjWJAolhxCJIL04ApxrEgU4C/gtBdEvm8QBXkxB9E0F214KXFZiH1cDIxnt1wFnF4yvl+dssyzjNa9g/0tiF30wr8QJXOUmBnYmdmPB59/prr/t3fYLvfZH3T6+7J7GA3Pc++1nX++1P1yQ9U9gYU4GW+8+ELPoHQXbrfTe90jJk9FSr32L1/56Rim0wwNe+ysFWe0E5dqCHO/ELHqjkGjLWKDop1yGzitXstt2AwWYpinauS3SCIqe6IzJJUVfEdjPx2IWPSYg+oRXcfsMOK3iEZ05Pnvb3hez6AcFRE8Cz3nveaHiGG0/Z1FBjrGYRa8TEn0q8KF3hG+sIPqYvYwsyLEmZtGbJESbqX9fAhzy5IcOHf+75u7K8VLMoselRFuAuzMy1HUyHI9Z9B/AUAnRm7uOrmWdiU6IaNe+uaTo7iN6tKCPQ64v0Yq2rCghOosnKoqe1bVQJmTCkikbuJce1Co1JwRVZofAlT3uzf19xQLc4U3BL/C2t7+KsnyeUxs54qbVi732hypOwXelIHoy70QDzMsp8Ixm1EX+qXN47TcUFJVGgPkBRaW5VQtKsYi2vGUShKli0gcpibZf/eUmMYDVJfsXjWjL98BskwjANSG/AJYIFMJ7wEwTOfbWG/BtSMckQoXyar/rnZvETed3hnZKIlgVttgOmciw3za3PjsYiXBV2QmcY+JaMPNa1c5IBOyH/UX3C6WwP5p3C+ErIxGyXybd2uTMiYdA/uGy18qpi+7wE/B0XhGqoezz3V30vpEIWzeH3F2ShQ3ntjWUX+sK3WTWTuAm2Qs872oRQzWe9DaErn/uRR3ZegWX4hjwFfC2WwgTPKa7QlNhAb8qzdj9b/jp4jtbew7IuQL4uakwbRZNr0Uv3lVF5evjsrRd9OISJ7wfJIK0XfTsnEznud8witFm0QdyrihsDfkX6TBtFj3elWM5sHu6wrRZ9H57LxK43dW5pxUJ0fo4NjgsIVofMIjMAwY76ysGmTVStVz7INRBZbddk924aO+xxnsGVPKIiOSuI3utHa9afoKcAD5y66VljmRFURRFURRFURRFURQTNycBk0Z//+SfAi8AAAAASUVORK5CYII=" />
                  </defs>
                </svg>
              </a>
              <a href="https://github.com/jjsornwakii" target="_blank">
                <svg width="35" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_62_2)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.84 32 32 24.84 32 16C32 7.16 24.84 0 16 0C7.16 0 0 7.16 0 16C0 24.84 7.16 32 16 32ZM1.33333 16C1.33333 7.89333 7.89333 1.33333 16 1.33333C24.0933 1.33333 30.6667 7.89333 30.6667 16C30.6667 22.48 26.4667 27.9733 20.6267 29.8667C19.8973 30.012 19.6307 29.5507 19.6307 29.1627L19.6373 28.344C19.644 27.5867 19.6547 26.4507 19.6547 25.1307C19.6547 23.744 19.1933 22.8773 18.6587 22.4107C21.9387 22.0467 25.3653 20.8107 25.3653 15.1707C25.3653 13.5707 24.8067 12.2507 23.8587 11.2373C24.004 10.8733 24.5147 9.37067 23.7133 7.35733C23.7133 7.35733 22.4733 6.96933 19.6733 8.864C18.4776 8.5423 17.2449 8.37913 16.0067 8.37867C14.7667 8.38 13.5267 8.544 12.34 8.864C9.54 6.97067 8.3 7.35733 8.3 7.35733C7.49733 9.37067 8.008 10.8773 8.15333 11.2373C7.17025 12.3098 6.63165 13.7159 6.64667 15.1707C6.64667 20.8107 10.0733 22.064 13.3267 22.4107C12.9133 22.7747 12.524 23.4307 12.4027 24.384C11.552 24.7733 9.44267 25.404 8.12267 23.1693C8.12267 23.1693 7.34533 21.756 5.856 21.6627C5.856 21.6627 4.416 21.6627 5.75867 22.5613C5.75867 22.5613 6.73067 22.9987 7.38533 24.6947C7.38533 24.6947 8.236 27.3213 12.3187 26.4413C12.3187 27.236 12.3293 28.0147 12.336 28.548L12.3427 29.1653C12.3427 29.5533 12.076 30.016 11.3467 29.8693C5.52 27.9227 1.30667 22.4427 1.30667 16.0027L1.33333 16Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_62_2">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;