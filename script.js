const pct=document.getElementById("lpct");const bar=document.getElementById("lbar");const lptext=document.querySelector(".lp-text");let n=0;const iv=setInterval(()=>{n++;if(pct)pct.textContent=n+"%";if(bar)bar.style.width=n+"%";if(n>=100){clearInterval(iv);if(lptext)lptext.textContent="WELCOME";if(pct)pct.style.display="none";setTimeout(()=>{const loader=document.getElementById("loader");const pg=document.getElementById("pg");if(loader){loader.style.transition="opacity 1s";loader.style.opacity="0";setTimeout(()=>loader.style.display="none",1000);}if(pg){pg.style.display="block";gsap.from("header",{y:-60,opacity:0,duration:1});gsap.from(".hero-left",{x:-80,opacity:0,duration:1,delay:.3});gsap.from(".char",{y:100,opacity:0,duration:1.2,delay:.5});gsap.from(".hero-right",{x:80,opacity:0,duration:1,delay:.3});}},800);}},15);

document.addEventListener("mousemove", (e) => {
    const eyes = document.querySelectorAll(".pupil");
    eyes.forEach(eye => {
        const rect = eye.parentElement.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);
        const distance = Math.min(rect.width / 4, Math.hypot(e.clientX - eyeX, e.clientY - eyeY) / 10);
        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;
        eye.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
    });
});
