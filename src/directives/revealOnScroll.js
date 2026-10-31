export default {
  mounted(element) {
    if (!('IntersectionObserver' in window)) {
      return
    }

    element.classList.add('scroll-reveal')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('scroll-revealed')
          observer.unobserve(element)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(element)
    element._scrollRevealObserver = observer
  },
  unmounted(element) {
    element._scrollRevealObserver?.disconnect()
    delete element._scrollRevealObserver
  },
}
