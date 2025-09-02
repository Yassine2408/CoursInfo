(function(){
	const $ = (sel, root=document) => root.querySelector(sel);
	const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

	const state = {
		courses: [],
		program: [],
		progress: JSON.parse(localStorage.getItem('bi:progress') || '{}'),
	};

	function setYear(){
		const y = new Date().getFullYear();
		$$('#year').forEach(n=>n.textContent=y);
	}

	function toggleNav(){
		const btn = $('.nav-toggle');
		const nav = $('#site-nav');
		if(!btn || !nav) return;
		btn.addEventListener('click', ()=>{
			const expanded = btn.getAttribute('aria-expanded') === 'true';
			btn.setAttribute('aria-expanded', String(!expanded));
			nav.style.display = expanded ? 'none' : 'flex';
		});
	}

	function glassOnScroll(){
		const header = $('.site-header');
		if(!header) return;
		function apply(){
			if(window.scrollY > 8){ header.classList.add('is-scrolled'); }
			else { header.classList.remove('is-scrolled'); }
		}
		apply();
		window.addEventListener('scroll', apply, { passive: true });
	}

	function updateScrollProgress(){
		const bar = $('#scrollProgress');
		if(!bar) return;
		function onScroll(){
			const h = document.documentElement;
			const max = h.scrollHeight - h.clientHeight;
			const p = max <= 0 ? 0 : (h.scrollTop / max) * 100;
			bar.style.width = p + '%';
		}
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
	}

	function loadData(){
		if(window.__BI_CONTENT__){
			state.courses = window.__BI_CONTENT__.courses;
			state.program = window.__BI_CONTENT__.program;
		}
	}

	function createCourseButton(course, idx){
		const a = document.createElement('a');
		a.href = `course.html?id=${encodeURIComponent(course.id)}`;
		const variant = `variant-${(idx % 6) + 1}`;
		a.className = `course-btn ${variant} reveal`;
		a.innerHTML = `
			<div class="title">${course.title}</div>
			<div class="sub">${course.category} · ${course.level} · ${course.duration}</div>
		`;
		return a;
	}

	function renderHome(){
		const root = $('#home-courses-list');
		if(!root) return;
		const top = state.courses.slice(0, 6);
		root.innerHTML = '';
		top.forEach((c,i)=>root.appendChild(createCourseButton(c,i)));
	}

	function renderCoursesList(){
		const list = $('#courses-list');
		if(!list) return;
		const search = $('#search');
		const filterCategory = $('#filter-category');
		const filterLevel = $('#filter-level');

		function apply(){
			let q = (search?.value || '').toLowerCase().trim();
			let cat = filterCategory?.value || '';
			let lvl = filterLevel?.value || '';
			let filtered = state.courses.filter(c=>{
				const matchQ = !q || c.title.toLowerCase().includes(q) || c.summary.toLowerCase().includes(q) || c.tags.join(' ').toLowerCase().includes(q);
				const matchC = !cat || c.category === cat;
				const matchL = !lvl || c.level === lvl;
				return matchQ && matchC && matchL;
			});
			list.innerHTML = '';
			filtered.forEach((c,i)=>list.appendChild(createCourseButton(c,i)));
			observeReveals();
		}

		[search, filterCategory, filterLevel].forEach(el=> el && el.addEventListener('input', apply));
		apply();
	}

	function renderCourseDetail(){
		const root = $('#course-root');
		if(!root) return;
		const params = new URLSearchParams(location.search);
		const id = params.get('id');
		const course = state.courses.find(c=>String(c.id) === String(id)) || state.courses[0];
		$('#course-title').textContent = course.title;
		$('#course-summary').textContent = course.summary;
		$('#course-tags').innerHTML = course.tags.map(t=>`<span class="tag">${t}</span>`).join('');

		const progress = state.progress[id] || 0;
		const headerProgress = document.createElement('div');
		headerProgress.className = 'progress-wrap';
		headerProgress.innerHTML = `<div class="progress-bar"><span style="width:${progress}%"></span></div><div class="progress-text">${progress}%</div>`;
		$('#course-summary').after(headerProgress);

		root.innerHTML = '';
		course.content.forEach((section, idx)=>{
			const wrap = document.createElement('section');
			wrap.className = 'module reveal';
			wrap.innerHTML = `
				<h3>${section.title}</h3>
				<div class="module-body">
					<p>${section.explanation}</p>
					${section.examples && section.examples.length ? `<ul>${section.examples.map(e=>`<li>${e}</li>`).join('')}</ul>` : ''}
					${section.exercises && section.exercises.length ? `<div class="exercise"><strong>Exercices</strong><ul>${section.exercises.map(e=>`<li>${e}</li>`).join('')}</ul></div>` : ''}
					<button class="btn" data-complete="${idx}">Marquer comme fait</button>
				</div>
			`;
			root.appendChild(wrap);
		});

		root.addEventListener('click',(e)=>{
			const btn = e.target.closest('button[data-complete]');
			if(!btn) return;
			const total = course.content.length;
			const done = Number(state.progress[id] || 0);
			const inc = Math.round(100/total);
			const next = Math.min(100, done + inc);
			state.progress[id] = next;
			localStorage.setItem('bi:progress', JSON.stringify(state.progress));
			$('.progress-bar > span').style.width = next+'%';
			$('.progress-text').textContent = next+'%';
		});
	}

	function renderProgram(){
		const root = $('#timeline-root');
		if(!root) return;
		root.innerHTML = '';
		state.program.forEach((week, i)=>{
			const item = document.createElement('div');
			item.className = 'step-card reveal';
			item.innerHTML = `
				<div class="step-header">
					<div class="step-circle">${i+1}</div>
					<h3>${week.title}</h3>
				</div>
				<p>${week.objectives}</p>
				<ul>${week.activities.map(a=>`<li>${a}</li>`).join('')}</ul>
			`;
			root.appendChild(item);
		});
	}

	function animateCounters(){
		const counters = $$('.num[data-count]');
		if(counters.length===0) return;
		const io = new IntersectionObserver((entries)=>{
			entries.forEach(e=>{
				if(!e.isIntersecting) return;
				const el = e.target; io.unobserve(el);
				const target = Number(String(el.getAttribute('data-count')).replace(/[^0-9]/g,''));
				let start = 0; const dur = 900; const t0 = performance.now();
				function step(t){
					const k = Math.min(1,(t-t0)/dur);
					const val = Math.round(target * k);
					el.textContent = el.getAttribute('data-count').includes('%') ? val+'%' : val.toLocaleString('fr-FR')+(el.getAttribute('data-count').endsWith('+')?'+' :'');
					if(k<1) requestAnimationFrame(step);
				}
				requestAnimationFrame(step);
			});
		},{threshold:0.4});
		counters.forEach(c=> io.observe(c));
	}

	function backToTop(){
		const btn = $('#backToTop');
		if(!btn) return;
		function vis(){ btn.classList.toggle('show', window.scrollY > 400); }
		vis();
		window.addEventListener('scroll', vis, { passive: true });
		btn.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));
	}

	function observeReveals(){
		const els = $$('.reveal');
		if(!('IntersectionObserver' in window) || els.length===0){
			els.forEach(el=> el.classList.add('in'));
			return;
		}
		const io = new IntersectionObserver((entries)=>{
			entries.forEach(e=>{
				if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
			});
		},{ rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
		els.forEach(el=> io.observe(el));
	}

	function init(){
		setYear();
		toggleNav();
		glassOnScroll();
		updateScrollProgress();
		loadData();
		renderHome();
		renderCoursesList();
		renderCourseDetail();
		renderProgram();
		observeReveals();
		animateCounters();
		backToTop();
	}

	document.addEventListener('DOMContentLoaded', init);
})();
