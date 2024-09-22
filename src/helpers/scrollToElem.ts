export const scrollToElement = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition =
      elementPosition - window.innerHeight / 2 + element.offsetHeight / 2;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};
