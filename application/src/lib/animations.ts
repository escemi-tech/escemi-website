import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

type Cleanup = () => void;

const isBrowser = () => typeof window !== 'undefined';

const prefersReducedMotion = () =>
	isBrowser() && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initAnimations() {
	if (!isBrowser()) {
		return;
	}

	const cleanups: Cleanup[] = [];
	const motionReduced = prefersReducedMotion();

	if (motionReduced) {
		cleanups.push(initSmoothNav());
		cleanups.push(initHeaderScroll());
		cleanups.push(initSectionObserver());
		cleanups.push(initStatObserver());
		return () => cleanups.forEach((fn) => fn?.());
	}

	gsap.registerPlugin(ScrollTrigger);

	const lenisHandle = initLenis();
	if (lenisHandle) {
		cleanups.push(lenisHandle.cleanup);
	}

	cleanups.push(initSmoothNav(lenisHandle?.instance));
	cleanups.push(initHeaderScroll());
	cleanups.push(initSectionObserver());
	cleanups.push(initStatObserver());
	cleanups.push(initParallax());
	cleanups.push(initRevealAnimations());
	cleanups.push(initPinnedSections());

	return () => cleanups.forEach((fn) => fn?.());
}

function initLenis() {
	try {
		const instance = new Lenis({
			duration: 1.1,
			smoothWheel: true,
			syncTouch: false,
			gestureOrientation: 'vertical',
			easing: (t: number) => 1 - Math.pow(1 - t, 3),
		});

		let rafId = 0;
		const raf = (time: number) => {
			instance.raf(time);
			ScrollTrigger.update();
			rafId = requestAnimationFrame(raf);
		};
		rafId = requestAnimationFrame(raf);

		const onScroll = () => ScrollTrigger.update();
		instance.on('scroll', onScroll);

		return {
			instance,
			cleanup: () => {
				cancelAnimationFrame(rafId);
				if (typeof instance.off === 'function') {
					instance.off('scroll', onScroll);
				}
				instance.destroy();
			},
		};
	} catch (error) {
		console.warn('[animations] Failed to initialize Lenis', error);
		return null;
	}
}

function initSmoothNav(lenisInstance?: Lenis | null) {
	const links = document.querySelectorAll<HTMLAnchorElement>('[data-scroll-link]');
	const handlers: Array<() => void> = [];

	links.forEach((link) => {
		const handler = (event: Event) => {
			const href = link.getAttribute('href');
			if (!href || !href.startsWith('#') || href.length === 1) {
				return;
			}

			const target = document.querySelector<HTMLElement>(href);
			if (!target) {
				return;
			}

			event.preventDefault();
			if (lenisInstance) {
				lenisInstance.scrollTo(target, { offset: -140 });
			} else {
				target.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		};

		link.addEventListener('click', handler);
		handlers.push(() => link.removeEventListener('click', handler));
	});

	return () => handlers.forEach((teardown) => teardown());
}

function initHeaderScroll() {
	const header = document.querySelector<HTMLElement>('[data-scroll-header]');
	if (!header) {
		return () => undefined;
	}

	let lastScrollY = window.scrollY;
	let ticking = false;
	const threshold = 14;
	const revealOffset = 96;

	const update = () => {
		const currentY = window.scrollY;
		const scrollingDown = currentY > lastScrollY + threshold;
		const nearTop = currentY <= revealOffset;

		if (scrollingDown && !nearTop) {
			header.setAttribute('data-header-hidden', 'true');
		} else if (currentY < lastScrollY - threshold || nearTop) {
			header.removeAttribute('data-header-hidden');
		}

		lastScrollY = currentY;
		ticking = false;
	};

	const onScroll = () => {
		if (ticking) {
			return;
		}
		ticking = true;
		requestAnimationFrame(update);
	};

	window.addEventListener('scroll', onScroll, { passive: true });
	return () => window.removeEventListener('scroll', onScroll);
}

function initSectionObserver() {
	const sections = document.querySelectorAll<HTMLElement>('[data-scroll-section]');
	if (!sections.length) {
		return () => undefined;
	}

	const links = new Map<string, HTMLAnchorElement>();
	document.querySelectorAll<HTMLAnchorElement>('[data-scroll-link]').forEach((link) => {
		const href = normalizeHash(link.getAttribute('href'));
		if (href) {
			links.set(href, link);
		}
	});

	let activeLink: HTMLAnchorElement | null = null;
	const observer = new IntersectionObserver(
		(entries) => {
			const visible = entries
				.filter((entry) => entry.isIntersecting)
				.sort((a, b) => b.intersectionRatio - a.intersectionRatio);

			const top = visible[0];
			if (!top) {
				return;
			}

			const targetHash = normalizeHash(top.target.getAttribute('data-scroll-section'));
			if (!targetHash) {
				return;
			}

			const nextActive = links.get(targetHash);
			if (!nextActive || nextActive === activeLink) {
				return;
			}

			if (activeLink) {
				activeLink.removeAttribute('aria-current');
			}
			nextActive.setAttribute('aria-current', 'true');
			activeLink = nextActive;
		},
		{ threshold: 0.45 }
	);

	sections.forEach((section) => observer.observe(section));
	return () => observer.disconnect();
}

function initStatObserver() {
	const cards = document.querySelectorAll<HTMLElement>('.signature-stat-card');
	if (!cards.length) {
		return () => undefined;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
				}
			});
		},
		{ threshold: 0.55 }
	);

	cards.forEach((card) => observer.observe(card));
	return () => observer.disconnect();
}

function initParallax() {
	const elements = gsap.utils.toArray<HTMLElement>('[data-parallax-speed]');
	if (!elements.length) {
		return () => undefined;
	}

	const animations = elements.map((element) => {
		const raw = element.dataset.parallaxSpeed ?? '0.4';
		const speed = Number.parseFloat(raw);
		const normalized = Number.isNaN(speed) ? 0.4 : speed;
		const distance = Math.min(120, Math.max(12, normalized * 60));

		const tween = gsap.fromTo(
			element,
			{ yPercent: -distance },
			{
				yPercent: distance,
				ease: 'none',
				scrollTrigger: {
					trigger: element,
					start: 'top bottom',
					end: 'bottom top',
					scrub: true,
				},
			}
		);

		return tween;
	});

	return () => animations.forEach((tween) => tween.kill());
}

function initRevealAnimations() {
	const targets = gsap.utils.toArray<HTMLElement>('[data-animate]');
	if (!targets.length) {
		return () => undefined;
	}

	const tweens = targets.map((element) => {
		const type = element.dataset.animate ?? 'fade-up';
		const delay = Number.parseFloat(element.dataset.animateDelay ?? '0') || 0;
		const config = getAnimationConfig(type);
		const resetStyles = () => {
			requestAnimationFrame(() => {
				element.style.removeProperty('transform');
				element.style.removeProperty('opacity');
				element.style.removeProperty('filter');
			});
		};

		return gsap.fromTo(
			element,
			config.from,
			{
				...config.to,
				delay,
				onComplete: resetStyles,
				scrollTrigger: {
					trigger: element,
					start: 'top 80%',
					toggleActions: 'play none none none',
					onLeave: resetStyles,
				},
			}
		);
	});

	return () => tweens.forEach((tween) => tween.kill());
}

function initPinnedSections() {
	const pinTargets = document.querySelectorAll<HTMLElement>('[data-pin]');
	if (!pinTargets.length) {
		return () => undefined;
	}

	const mm = gsap.matchMedia();
	mm.add('(min-width: 1024px)', () => {
		pinTargets.forEach((target) => {
			const sibling = target.nextElementSibling as HTMLElement | null;
			const extraDistance = sibling ? Math.max(300, sibling.offsetHeight - target.offsetHeight) : 400;
			ScrollTrigger.create({
				trigger: target,
				start: 'top top+=140',
				end: () => `+=${extraDistance}`,
				pin: true,
				pinSpacing: true,
				invalidateOnRefresh: true,
			});
		});
	});

	return () => mm.revert();
}

function getAnimationConfig(type: string) {
	switch (type) {
		case 'scale-in':
			return {
				from: { autoAlpha: 0, scale: 0.9, y: 30 },
				to: { autoAlpha: 1, scale: 1, y: 0, duration: 0.8, ease: 'power3.out' },
			};
		case 'slide-up':
			return {
				from: { autoAlpha: 0, y: 90, scale: 0.96 },
				to: { autoAlpha: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' },
			};
		case 'fade-up':
		default:
			return {
				from: { autoAlpha: 0, y: 40 },
				to: { autoAlpha: 1, y: 0, duration: 0.9, ease: 'power2.out' },
			};
	}
}

function normalizeHash(value: string | null) {
	if (!value) {
		return null;
	}
	return value.startsWith('#') ? value : `#${value}`;
}
