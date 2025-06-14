const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col md:flex-row bg-[#F2C942] text-black p-4 h-[270px] justify-between">
      <div className="text-2xl font-bold px-4 pt-4">SIWAKORN</div>
      
      <div className="flex flex-col pr-10 pt-6 gap-y-2 text-sm md:text-xl">
        <div className="font-semibold">CONTACT</div>

        <div className="flex flex-wrap items-center max-w-full">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
            <rect width="25.4118" height="25.4118" fill="url(#pattern0_7_143)" />
            <defs>
              <pattern id="pattern0_7_143" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_7_143" transform="scale(0.0111111)" />
              </pattern>
              <image id="image0_7_143" width="90" height="90" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtElEQVR4nO3cW6hmYxgH8DXMyDGGCHExTklNxs0kp1KaIZJSE2pMimSQC1duRLmZNJORKymHkQmTCxqNUqPI5gI5XCiHsUcTmUNyHsb8tNpLSnvb37cOnnet7/3Vvtx7vc//+/Za3/e8z1pFkWVZlmVZlmVZNimwCKuxDbuxF8/itOi1DQZW4Auz+wonRa+x13AINuCg/7Y5eq29hcOwxWgO4tLoNfcODsXzxvMxFkavvVewTj13RK+9N3D1COfkuezB8dE1JA9H4kvNPBZdR/Jwn+YOYGl0Lal/ytilHduj60kWVmrXquiakoRHWg56ujznR9eVHLypfQ9G15UcfNNB0L9iSXRtScFvurElurak4BfdWRldXzKqb3Vd+ST3Qf4J+l3dujX2rZQIbOo46Neja0wC7uw46Peja0wCzuk46Meja0xGC527ufyB86LrSwYe0I0N0bUlBadXbc42fYtjo2tLDra2HPTq6JqShItaDPktLIiuKVl4rYWQD2BZdC1Jw4UtBP1EdB29gOcaBn1xdA29gFPwfYOgl0TX0Bu4u0HQ10avv2+jYXW7em+Xvx9dQ2/gTPxQM+x10evvFdymvlui198reKHBBu3y6PX3Bk7Ajpphf11+iomuoTdwPn6uGfZHWBxdQ2/gJvVN4ajoGnoD6xuE/UreER896IXVbXB1PZ27eqOHfUy54Vo7ah7NYY/XD9nRIOxyxGHRqMebaDgL3zU8Z+fx3hHDvqTh7F45Mnxc5++KIcBV2N8g7A9xas1jL8WT1Yzf9qplMNx7HnEdfm8Q9q5xvq6X/wXYWM2N/Nun5YtfDBWun6PwUZVz2mvmOcYC3FyNMoxyDTijGCKswZ+a2ThbPxsXVLvr49hf/b2ji6HB7S2EPVWdjs7G5Xiq4YDP9CDvFjPTF2lyGunKG2WDrBgSrGp4gexK+d/2DE4shgLXVBsAKdqHewazv4krO74hqakPcFkxoG+Qe6WrfHzG5kE8IwrnNmxE/R+mB/H0MzNdv/ekbVMxoH72NunaXQxsp2a9NO0phgY34Cdp2VoMEZYldpG8sRj4kM5L0Qnjs0H3s/9WtUB/DPwsvaKYFGY6du8EBP1wMaHz2Xc1vPNgHC+WD74tJhVOrjptdZ8wOYry2nB4dK1JwHK82nLA5Yv30ES/k+e5Pe/lFm6nLh8+nh9DNJ+y8YP78fmYAe/EvThi3oNks05Mra3O5VPVDvm+6mdnNe9Rft2/Io+hZVmWZVmWZVmWZVmWFbP6C7iQWJhNB3m4AAAAAElFTkSuQmCC" />
            </defs>
          </svg>
          <div className="pl-4 pr-4">
            0932784456</div>
        </div>



        <div className="flex flex-wrap items-center max-w-full">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
            <rect y="0.176758" width="27.5294" height="27.5294" fill="url(#pattern0_7_144)" />
            <defs>
              <pattern id="pattern0_7_144" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_7_144" transform="scale(0.0111111)" />
              </pattern>
              <image id="image0_7_144" width="90" height="90" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACy0lEQVR4nO3avWsUQRzG8VODCCJoFAxYxMLGRhBFsNJGq1jZ+dJYamfjHxCLFBYWFgqCglpZaaWNVoJoY2OjYgIWgkJACRolyVcGNiAhuZndnZn9zd7zgcDB3e5kH/Z2Z57bwUBEREREREREREREREQiAnYCrxCft8CetmFvB557hxpdL4Edsc7srcDjro/IoKfAtiaBbhry3hbgXtdHZsh9YKxJlu7NB76NgRtdH6EBt4DNnpPy7rCgg74OwDVG10zoZdYXdNAFHrgMLDM6VoCrdSYOIUEHTVmAc8Bf+m8JuOTJYtfaqXBo0M57YJ9ngCngF/21CJz1ZDABvFu7YZ2gnVnggGegE8AP+mcBOOU59v3Ax/U2rhu08xU45BnwCPCd/pgHjnuO+SDwZaMdNAk6ysAFCTmxjvpOrKZBr36VTgd8lT5QrtmAS+XJkEtlm6CdPwE3h73r3RwKEHLzPwP8DtlZ26BDpzulNX9vAqaz5+tMZ2MEXWcC/wz7QhZoV+ou0GIFXXtJalSyyiF20MElC/YkLdFSBJ38n04g+cmRKuiSmr+ZHJe7lEFbb/5W6jZwloO22vwtNWngrAdtrflbbNrAlRC0leZvoU0DV0rQXTd/810WYbmD7uqAozRwpQUd2vxNRmr+Psdq4EoMOlfzF7WBKzXo1M1f9Aau5KBTNX8vUjRwpQcdeyn8xOLS31LQzs2AZ/7usLHb7jOeMsuNwagH7X1g8L8bmOsgvlV/7vWUZ5uxat+dsBh080dgDf/gYDXoaA91W3l43nLQzmtgvEXI49U+Omc9aGcOONYg5MPAJ4woIWiqldt0yNkN7Aau51jt9THoVT+Bh8AFVxJVvfFE9foi8Kj6jDmlBV0sBZ2Jgs5EQWeioDNR0Jko6EwUdCYKOhMFnYmCzkRBZ6KgM1HQmSjoTHw9uoiIiIiIiIiIiIiIiAyG+Ae+eiaBOoDMBQAAAABJRU5ErkJggg==" />
            </defs>
          </svg>
          <div className="pl-4 pr-4">siwakorn.suriya.work@gmail.com</div>
        </div>

        <div className="flex flex-wrap items-center max-w-full">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
            <rect y="0.470703" width="27.5294" height="27.5294" fill="url(#pattern0_7_145)" />
            <defs>
              <pattern id="pattern0_7_145" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_7_145" transform="scale(0.0111111)" />
              </pattern>
              <image id="image0_7_145" width="90" height="90" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEn0lEQVR4nO2cTYhVZRjHXybTilKCyiKpNCXaaGHRB4YRUbTRXGhlHyBpDWFoTDVBi1okjIGLBJdnUYuiICtLEqWojbWY0dJKN+nYh9g4jboIZ+qOP3mYVzCT7jn3Pu/Xue8PzmaYe+7/+c2Zc96v8xqTyWQymUwmk8lkMplyABcAtwNPA28CHwN7gJ+BEWDMHiP2Z3vs76y3n7lNzlHy6zoLYAawFvgUOEH7HAe2AGuAa00nA1wMPAnsAMZxRwPYDjwBXGQ6BeBSe6X9jn+GgNeBaaauABcCLwF/Eh7J0COZTJ0A7gH2Eh/7gftN6sg9EdgEnCJeJNtGYIpJEeAG4FvSYQCYbVJC/h2Vmmm+kWbhfSYFgCXASdJlDHjExAzwjOM2sS+khlUmRoCHbeegLowDy0xMyH0NGKV+jAEPmBgA5iT64KvygLwxhnbyLuLgb+AI8BPQb3PJ6N6hs0b9WqU/aDvbdkZC3kM/A54H5gFdJfJeDaxs8fs2+rH639ALA/X4TgFvAze38Txp9XsX6JtsPkD0A/45BjzYZvZWRWMnGSbpmWweVkbhfHMCuFUhezuihRd0LDYPelmgoc7FSvnbFX1UxtQ1sjQL+jL+eV8xf7uihR6tPP83/SRNKN+ti5siE33Y6bQY8BT++UK5Bg3RwnLNXOeGlIlU36ytmHESsAh4Beg7z/GeUq5tLpcEhBiZu6NCxtnAPk+5ZADtGheiZd2Fb04Ck0vmmxKgbb/ahWhZ3OKbvRXyrQiQ7yMXy7SkV+abrytk/DxAvmOqy8/sWrgQbKmQ0Xez8wzzNUXL4sEQvFPhPy7U7M4KTdGyqjMERcl80wlHn6boTyIXPZNwbNYU/X2gIooERO/WFD0YqIgiAdEHNEWHWgFaJCD6qKbodiY26y56NHbR24HLmxyXlMzXVeJcZ44XlesY0xTtole4VS1gtVreUq5jWDPcr9RH9DblOgY1w8nsb11EH1Su4zvNcPIeX/KimZiK0x5T/1Az4AbqIfoWB3Ws1wz4bE1EL3NQx6rYr4StagHL1/GagzrmagbssstXUxf9rnINx9XfO3fQLNoP9DY5HiqZbVqJc/U6aHHoXyzAc/iniLwL3u1C9PQAsxhFxKLFxVXqom1BX3kupohY9JdOJNuClnsupohY9KOuF6C7GPdITfRvzndGAF71WFARqehep5LP2tjkSAeL/gOY6ly0LWx1B4vudm/43/fqfR0o+kevLwvZ4u700K4uIhI97v31N8fDp7GK1luR1OJAuuzcUnfRA8G3cgOus9uc1VX0sJzfxABwr6NtJIrAomWZxUITE/LCJfBPjUQ3ot3yx25L2aiB6AbwmIkZe2X/lbDo0Wiv5HMB7rYPkdREDwF3mZQArgd2JiR6p2yKaFLEvsXa18Z924do6fGt8961dgETyxW+iVD0ruRuFSXfnOq2g+ahRR+2i4Ka7sOULEy8SizDrL8EED1oZ/M7amf0LrtZ7Ad2KzVXoht2V4altduYuyrAFcDjdiXRsILoIXsu2V/kSvcVJAowy16Biyr8od6wn5lT63tvJpPJZDKZTCaTyRhlTgOVjgwH5mGZewAAAABJRU5ErkJggg==" />
            </defs>
          </svg>

          <div className="pl-4 pr-4 ">Siwakorn Suiya</div>
        </div>

        <div className="flex flex-wrap items-center max-w-full">
          <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
            <rect y="0.764648" width="28.2353" height="28.2353" fill="url(#pattern0_7_146)" />
            <defs>
              <pattern id="pattern0_7_146" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_7_146" transform="scale(0.0111111)" />
              </pattern>
              <image id="image0_7_146" width="90" height="90" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEsklEQVR4nO2cT6gVVRzHTxqVj/49F1m9Ig2zrMxehf3ZSKGLoFxUWsGDkoqo1Fq0TBJr2x9p40KKRIvahIFQLh4toj9QaGBWRBKEGBWWPinKpx85vXPrdJuZO2fuzO+dM/f3gbvwvDt3vufj3DNzfnPuGKMoiqIoiqIoiqIoiqIY4AzgSeBT4Cjt5SjwCbAOOF30vx64CPiCwWOP7bvkkTyIkn3ZzR/ZbrgYdNZKiLZj8qDzsYToienuZQRMSIhWABUthIoWQkULoaKFaIvoH4F3gfXAKmAJcD4wDJziXsOuzf5tJfAMsAM4KBEwZdH7nNhRK7LPjKNO/N6mwtZnNL8TdTIJbAduaTDvzcA2t6/aaCqvH7wu3gQWNB7439wLgDfqCi8RuF++AW5rPGh+/luBr9sueitwZuMhe/dhFrCpjaKPi1S8AgEerzp2S4QL5S/gHhMpwF0uY9KiTwCrTeQA97tvXbKi15tEYOq6O0nRu4AZJhGAGcD7qYn+HZhrEgO4uOwdfYkwZXjWJAolhxCJIL04ApxrEgU4C/gtBdEvm8QBXkxB9E0F214KXFZiH1cDIxnt1wFnF4yvl+dssyzjNa9g/0tiF30wr8QJXOUmBnYmdmPB59/prr/t3fYLvfZH3T6+7J7GA3Pc++1nX++1P1yQ9U9gYU4GW+8+ELPoHQXbrfTe90jJk9FSr32L1/56Rim0wwNe+ysFWe0E5dqCHO/ELHqjkGjLWKDop1yGzitXstt2AwWYpinauS3SCIqe6IzJJUVfEdjPx2IWPSYg+oRXcfsMOK3iEZ05Pnvb3hez6AcFRE8Cz3nveaHiGG0/Z1FBjrGYRa8TEn0q8KF3hG+sIPqYvYwsyLEmZtGbJESbqX9fAhzy5IcOHf+75u7K8VLMoselRFuAuzMy1HUyHI9Z9B/AUAnRm7uOrmWdiU6IaNe+uaTo7iN6tKCPQ64v0Yq2rCghOosnKoqe1bVQJmTCkikbuJce1Co1JwRVZofAlT3uzf19xQLc4U3BL/C2t7+KsnyeUxs54qbVi732hypOwXelIHoy70QDzMsp8Ixm1EX+qXN47TcUFJVGgPkBRaW5VQtKsYi2vGUShKli0gcpibZf/eUmMYDVJfsXjWjL98BskwjANSG/AJYIFMJ7wEwTOfbWG/BtSMckQoXyar/rnZvETed3hnZKIlgVttgOmciw3za3PjsYiXBV2QmcY+JaMPNa1c5IBOyH/UX3C6WwP5p3C+ErIxGyXybd2uTMiYdA/uGy18qpi+7wE/B0XhGqoezz3V30vpEIWzeH3F2ShQ3ntjWUX+sK3WTWTuAm2Qs872oRQzWe9DaErn/uRR3ZegWX4hjwFfC2WwgTPKa7QlNhAb8qzdj9b/jp4jtbew7IuQL4uakwbRZNr0Uv3lVF5evjsrRd9OISJ7wfJIK0XfTsnEznud8witFm0QdyrihsDfkX6TBtFj3elWM5sHu6wrRZ9H57LxK43dW5pxUJ0fo4NjgsIVofMIjMAwY76ysGmTVStVz7INRBZbddk924aO+xxnsGVPKIiOSuI3utHa9afoKcAD5y66VljmRFURRFURRFURRFURQTNycBk0Z//+SfAi8AAAAASUVORK5CYII=" />
            </defs>
          </svg>

          <div className="pl-4 pr-4">0932784456</div>
        </div>


      </div>
    </footer>
  );
}
export default Footer;