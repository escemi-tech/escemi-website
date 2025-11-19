// Parallax effect for hero background
export function initParallaxEffect() {
	const handleScroll = () => {
		const scrolled = window.pageYOffset;
		const heroBg = document.getElementById('hero-bg');
		if (heroBg) {
			heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
		}
	};

	window.addEventListener('scroll', handleScroll);
	
	return () => window.removeEventListener('scroll', handleScroll);
}

// Intersection Observer for scroll-triggered animations
export function initScrollAnimations() {
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -100px 0px'
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('animate-fade-in-up');
			}
		});
	}, observerOptions);

	// Observe all sections
	document.querySelectorAll('section').forEach(section => {
		observer.observe(section);
	});

	return () => observer.disconnect();
}

// Initialize all animations
export function initAnimations() {
	const cleanup = [
		initParallaxEffect(),
		initScrollAnimations()
	];

	return () => cleanup.forEach(fn => fn?.());
}
