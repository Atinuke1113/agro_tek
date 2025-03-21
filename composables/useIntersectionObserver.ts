export const useIntersectionObserver = () => {
  const observe = (element: HTMLElement, callback: () => void) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback();
          observer.unobserve(element);
        }
      });
    }, {
      threshold: 0.1
    });

    observer.observe(element);
  };

  return {
    observe
  };
};