(function(){
  'use strict';

  /* ─── Supplied branding package ─── */
  if(!document.querySelector('link[href="branding.css"]')){
    var brandCss=document.createElement('link');
    brandCss.rel='stylesheet';
    brandCss.href='branding.css?v=20260816-brand1';
    document.head.appendChild(brandCss);
  }

  document.querySelectorAll('link[rel="icon"],link[rel="apple-touch-icon"],link[rel="manifest"]').forEach(function(el){el.remove();});
  [
    ['icon','favicon.ico','48x48',''],
    ['icon','favicon-32x32.png','32x32','image/png'],
    ['icon','favicon-src.svg','','image/svg+xml'],
    ['apple-touch-icon','apple-touch-icon.png','',''],
    ['manifest','site.webmanifest','','']
  ].forEach(function(item){
    var link=document.createElement('link');
    link.rel=item[0]; link.href=item[1]+'?v=20260816-brand1';
    if(item[2]) link.sizes=item[2];
    if(item[3]) link.type=item[3];
    document.head.appendChild(link);
  });

  var ms=document.querySelector('meta[name="msapplication-config"]');
  if(!ms){ms=document.createElement('meta');ms.name='msapplication-config';document.head.appendChild(ms);} ms.content='browserconfig.xml';
  var tile=document.querySelector('meta[name="msapplication-TileColor"]');
  if(!tile){tile=document.createElement('meta');tile.name='msapplication-TileColor';document.head.appendChild(tile);} tile.content='#4e7350';

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

  /* ─── Dashboard bar animation ─── */
  var bars=document.querySelectorAll('[data-width]');
  var barObs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        e.target.style.width=e.target.dataset.width+'%';
        barObs.unobserve(e.target);
      }
    });
  },{threshold:0.3});
  bars.forEach(function(b){barObs.observe(b)});

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
    a.addEventListener('click',function(e){var selector=a.getAttribute('href');if(!selector||selector==='#')return;var t=document.querySelector(selector);if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'})}})
  });
})();