gsap.from(".hero h1", {
  y: -50,
  opacity: 0,
  duration: 1
});

gsap.from(".hero p", {
  y: 30,
  opacity: 0,
  delay: 0.5
});

gsap.from("section h2", {
  scrollTrigger: {
    trigger: "section h2",
    start: "top 80%"
  },
  opacity: 0,
  y: 40,
  stagger: 0.3
});
