(function(){
  'use strict';

  /* ─── Supplied branding package ─── */
  if(!document.querySelector('link[href^="branding.css"]')){
    var brandCss=document.createElement('link');
    brandCss.rel='stylesheet';
    brandCss.href='branding.css?v=20260816-brand3';
    document.head.appendChild(brandCss);
  }

  /* ─── Shared wordmark: text only, no logo badge ─── */
  document.querySelectorAll('.nav-logo').forEach(function(logo){
    if(!logo.querySelector('.nav-logo-text')){
      logo.innerHTML='<span class="nav-logo-text">Asmita G V</span><span class="nav-logo-bar" aria-hidden="true"></span>';
    }
  });

  document.querySelectorAll('link[rel="icon"],link[rel="apple-touch-icon"],link[rel="manifest"]').forEach(function(el){el.remove();});
  [
    ['icon','favicon.ico','48x48',''],
    ['icon','favicon-32x32.png','32x32','image/png'],
    ['icon','favicon-16x16.png','16x16','image/png'],
    ['icon','favicon-src.svg','','image/svg+xml'],
    ['apple-touch-icon','apple-touch-icon.png','',''],
    ['manifest','site.webmanifest','','']
  ].forEach(function(item){
    var link=document.createElement('link');
    link.rel=item[0];
    link.href=item[1]+'?v=20260816-brand3';
    if(item[2]) link.sizes=item[2];
    if(item[3]) link.type=item[3];
    document.head.appendChild(link);
  });

  var ms=document.querySelector('meta[name="msapplication-config"]');
  if(!ms){ms=document.createElement('meta');ms.name='msapplication-config';document.head.appendChild(ms);}
  ms.content='browserconfig.xml';
  var tile=document.querySelector('meta[name="msapplication-TileColor"]');
  if(!tile){tile=document.createElement('meta');tile.name='msapplication-TileColor';document.head.appendChild(tile);}
  tile.content='#4e7350';

  /* ─── Browser chrome / theme color ─── */
  var themeColor='#f6f4ef';
  var themeMetas=document.querySelectorAll('meta[name="theme-color"]');
  if(themeMetas.length){
    themeMetas.forEach(function(meta){meta.setAttribute('content',themeColor)});
  }else{
    var themeMeta=document.createElement('meta');
    themeMeta.name='theme-color';
    themeMeta.content=themeColor;
    document.head.appendChild(themeMeta);
  }

  /* ─── Source-backed homepage positioning ─── */
  var heroHeading=document.querySelector('.hero h1');
  if(heroHeading){heroHeading.innerHTML='Building backend systems,<br>AI-powered applications,<br><em>and cloud-ready products.</em>';}
  var heroSub=document.querySelector('.hero-sub');
  if(heroSub){heroSub.textContent='Computer Science & Engineering graduate with internship and project experience across full-stack development, AI workflows, cloud deployment, and cybersecurity.';}

  /* ─── Internship copy: source of truth = latest final resume ─── */
  var experience=document.querySelector('#experience');
  if(experience){
    var expHeading=experience.querySelector('.sec-h');
    if(expHeading){expHeading.innerHTML='Five months contributing to<br>Django backend &amp; full-stack development.';}
    var expBullets=experience.querySelectorAll('.exp .pcard-ul li');
    if(expBullets.length>=2){
      expBullets[0].textContent='Contributed to backend modules and REST API development using Python, Django and MySQL.';
      expBullets[1].textContent='Supported debugging, testing and feature implementation in collaboration with the development team.';
    }
  }

  /* ─── Keep opportunity wording aligned with LinkedIn ─── */
  document.querySelectorAll('.about-detail').forEach(function(detail){
    var label=detail.querySelector('.about-detail-l');
    var value=detail.querySelector('.about-detail-v');
    if(label&&value&&label.textContent.trim()==='Open to'){
      value.textContent='Entry-level Backend · Full-stack · Software Engineering';
    }
  });

  /* ─── Contact/link consistency ─── */
  function icon(type){
    if(type==='linkedin') return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>';
    if(type==='github') return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>';
    if(type==='email') return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>';
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>';
  }

  var contactRow=document.querySelector('.contact-row');
  if(contactRow){
    var resumeLink=contactRow.querySelector('a[href*="Asmita_GV_Resume"]');
    if(!contactRow.querySelector('a[href^="mailto:"]')){
      var emailLink=document.createElement('a');
      emailLink.className='clink';
      emailLink.href='mailto:gujjarasmita@gmail.com';
      emailLink.innerHTML=icon('email')+'Email';
      contactRow.insertBefore(emailLink,resumeLink||null);
    }
    contactRow.querySelectorAll('.clink').forEach(function(link){
      if(link.querySelector('svg')) return;
      var href=link.getAttribute('href')||'';
      var kind=href.indexOf('linkedin.com')>=0?'linkedin':href.indexOf('github.com')>=0?'github':href.indexOf('mailto:')===0?'email':'resume';
      link.insertAdjacentHTML('afterbegin',icon(kind));
    });
  }

  var footerLinks=document.querySelector('.footer-r');
  if(footerLinks && !footerLinks.querySelector('a[href^="mailto:"]')){
    var footerEmail=document.createElement('a');
    footerEmail.href='mailto:gujjarasmita@gmail.com';
    footerEmail.textContent='Email';
    var footerResume=footerLinks.querySelector('a[href*="Asmita_GV_Resume"]');
    footerLinks.insertBefore(footerEmail,footerResume||null);
  }

  /* ─── Reveals ─── */
  var els=document.querySelectorAll('.rv,.rv-clip,.rv-left,.rv-right,.rv-scale');
  if('IntersectionObserver' in window){
    var obs=new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){
          e.target.classList.add('on');
          obs.unobserve(e.target);
        }
      });
    },{threshold:0.1,rootMargin:'0px 0px -30px 0px'});
    els.forEach(function(el){obs.observe(el)});
  }else{els.forEach(function(el){el.classList.add('on')})}

  /* ─── Animated counters ─── */
  var counters=document.querySelectorAll('[data-count]');
  if('IntersectionObserver' in window){
    var countObs=new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){
          var el=e.target;
          var target=parseFloat(el.dataset.count);
          var suffix=el.dataset.suffix||'';
          var decimals=(el.dataset.count||'').indexOf('.')>=0?2:0;
          var dur=1200;
          var start=performance.now();
          function tick(now){
            var p=Math.min((now-start)/dur,1);
            var eased=1-Math.pow(1-p,3);
            var value=eased*target;
            el.textContent=(decimals?value.toFixed(decimals):Math.round(value))+suffix;
            if(p<1)requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          countObs.unobserve(el);
        }
      });
    },{threshold:0.5});
    counters.forEach(function(c){countObs.observe(c)});
  }

  /* ─── Dashboard bar animation ─── */
  var bars=document.querySelectorAll('[data-width]');
  if('IntersectionObserver' in window){
    var barObs=new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){
          e.target.style.width=e.target.dataset.width+'%';
          barObs.unobserve(e.target);
        }
      });
    },{threshold:0.3});
    bars.forEach(function(b){barObs.observe(b)});
  }

  /* ─── Nav ─── */
  var nav=document.getElementById('nav');
  if(nav){window.addEventListener('scroll',function(){nav.classList.toggle('scrolled',window.scrollY>40)},{passive:true});}

  /* ─── Scroll progress ─── */
  var sp=document.getElementById('sp');
  if(sp){window.addEventListener('scroll',function(){var h=document.documentElement.scrollHeight-window.innerHeight;sp.style.width=(h>0?window.scrollY/h*100:0)+'%'},{passive:true});}

  /* ─── Mobile menu ─── */
  var ham=document.getElementById('ham'),nl=document.getElementById('nl');
  if(ham&&nl){
    ham.addEventListener('click',function(){
      var open=nl.classList.toggle('open');
      ham.classList.toggle('on',open);
      ham.setAttribute('aria-expanded',open?'true':'false');
    });
    nl.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){ham.classList.remove('on');nl.classList.remove('open');ham.setAttribute('aria-expanded','false')})});
  }

  /* ─── Smooth scroll ─── */
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click',function(e){
      var selector=a.getAttribute('href');
      if(!selector||selector==='#') return;
      var t=document.querySelector(selector);
      if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'});}
    });
  });
})();