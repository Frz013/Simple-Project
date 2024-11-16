// /*!
//  * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
//  * Copyright 2011-2024 The Bootstrap Authors
//  * Licensed under the Creative Commons Attribution 3.0 Unported License.
//  */

// (() => {
//     'use strict'
  
//     const getStoredTheme = () => localStorage.getItem('theme')
//     const setStoredTheme = theme => localStorage.setItem('theme', theme)
  
//     const getPreferredTheme = () => {
//       const storedTheme = getStoredTheme()
//       if (storedTheme) {
//         return storedTheme
//       }
  
//       return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
//     }
  
//     const setTheme = theme => {
//       if (theme === 'auto') {
//         document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
//       } else {
//         document.documentElement.setAttribute('data-bs-theme', theme)
//       }
//     }
  
//     setTheme(getPreferredTheme())
  
//     const showActiveTheme = (theme, focus = false) => {
//       const themeSwitcher = document.querySelector('#bd-theme')
  
//       if (!themeSwitcher) {
//         return
//       }
  
//       const themeSwitcherText = document.querySelector('#bd-theme-text')
//       const activeThemeIcon = document.querySelector('.theme-icon-active use')
//       const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
//       const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')
  
//       document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
//         element.classList.remove('active')
//         element.setAttribute('aria-pressed', 'false')
//       })
  
//       btnToActive.classList.add('active')
//       btnToActive.setAttribute('aria-pressed', 'true')
//       activeThemeIcon.setAttribute('href', svgOfActiveBtn)
//       const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
//       themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)
  
//       if (focus) {
//         themeSwitcher.focus()
//       }
//     }
  
//     window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
//       const storedTheme = getStoredTheme()
//       if (storedTheme !== 'light' && storedTheme !== 'dark') {
//         setTheme(getPreferredTheme())
//       }
//     })
  
//     window.addEventListener('DOMContentLoaded', () => {
//       showActiveTheme(getPreferredTheme())
  
//       document.querySelectorAll('[data-bs-theme-value]')
//         .forEach(toggle => {
//           toggle.addEventListener('click', () => {
//             const theme = toggle.getAttribute('data-bs-theme-value')
//             setStoredTheme(theme)
//             setTheme(theme)
//             showActiveTheme(theme, true)
//           })
//         })
//     })
//   })()


function saklar() {
    let toggle1 = document.getElementById("togglerk1");
    let toggle2 = document.getElementById("togglerk2");
    let toggle3 = document.getElementById("togglerk3");
    let toggleAll = document.getElementById("togglerkall");
    
    let toggleRM = document.getElementById("togglerm1");

    let toggleRTM1 = document.getElementById("togglertm1");
    let toggleRTM2 = document.getElementById("togglertm2");
    let toggleRTM3 = document.getElementById("togglertm3");
    let toggleRTM4 = document.getElementById("togglertm4");
    let toggleAllRTM = document.getElementById("togglerkallrtm");

    let toggleRT1 = document.getElementById("togglert1");
    let toggleRT2 = document.getElementById("togglert2");
    let toggleAllRT = document.getElementById("togglerkallrt");
    
    let lampu1 = document.getElementById("lampu1rk");
    let lampu2 = document.getElementById("lampu2rk");
    let lampu3 = document.getElementById("lampu3rk");
    
    let lampuRM = document.getElementById("lampu1rm");

    let lampuRT1 = document.getElementById("lampu1rt");
    let lampuRT2 = document.getElementById("lampu2rt");

    let lampuRTM1 = document.getElementById("lampu1rtm");
    let lampuRTM2 = document.getElementById("lampu2rtm");
    let lampuRTM3 = document.getElementById("lampu3rtm");
    let lampuRTM4 = document.getElementById("lampu4rtm");
    
    function updateLampu(toggle, lampu) {
      lampu.src = toggle.checked ? "assets/images/on.gif" : "assets/images/off.gif";
    }
    
    // Add event listeners to each toggle button
    toggle1.addEventListener("change", function() {
      updateLampu(toggle1, lampu1);
    });
    
    toggle2.addEventListener("change", function() {
      updateLampu(toggle2, lampu2);
    });
    
    toggle3.addEventListener("change", function() {
      updateLampu(toggle3, lampu3);
    });

    toggleRM.addEventListener("change", function() {
      updateLampu(toggleRM, lampuRM);
    });

    toggleRT1.addEventListener("change", function() {
      updateLampu(toggleRT1, lampuRT1);
    });
    
    toggleRT2.addEventListener("change", function() {
      updateLampu(toggleRT2, lampuRT2);
    });
    
    toggleRTM1.addEventListener("change", function() {
      updateLampu(toggleRTM1, lampuRTM1);
    });
    
    toggleRTM2.addEventListener("change", function() {
      updateLampu(toggleRTM2, lampuRTM2);
    });
    
    toggleRTM3.addEventListener("change", function() {
      updateLampu(toggleRTM3, lampuRTM3);
    });
    
    toggleRTM4.addEventListener("change", function() {
      updateLampu(toggleRTM4, lampuRTM4);
    });
    
    toggleAll.addEventListener("change", function() {
      let isChecked = toggleAll.checked;
      toggle1.checked = isChecked;
      toggle2.checked = isChecked;
      toggle3.checked = isChecked;
      
      updateLampu(toggle1, lampu1);
      updateLampu(toggle2, lampu2);
      updateLampu(toggle3, lampu3);
    });

    toggleAllRT.addEventListener("change", function() {
      let isCheckedRT = toggleAllRT.checked;
      toggleRT1.checked = isCheckedRT;
      toggleRT2.checked = isCheckedRT;
  
      
      updateLampu(toggleRT1, lampuRT1);
      updateLampu(toggleRT2, lampuRT2);
  
    });

    toggleAllRTM.addEventListener("change", function() {
      let isCheckedRTM = toggleAllRTM.checked;
      toggleRTM1.checked = isCheckedRTM;
      toggleRTM2.checked = isCheckedRTM;
      toggleRTM3.checked = isCheckedRTM;
      toggleRTM4.checked = isCheckedRTM;
  
      
      updateLampu(toggleRTM1, lampuRTM1);
      updateLampu(toggleRTM2, lampuRTM2); 
      updateLampu(toggleRTM3, lampuRTM3);
      updateLampu(toggleRTM4, lampuRTM4);
  
    });
}
  
