export const GradientTop = () => {
  return (
    <aside
      aria-hidden="true"
      className="absolute flex transform -translate-x-1/2 -top-96 start-1/2 dark:opacity-50"
    >
      <div className="bg-gradient-to-r c-beige:from-background/30 from-background/50 to-background blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" />
      <div className="bg-gradient-to-tl blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-primary-foreground c-beige:from-background/80 via-primary-foreground to-background" />
    </aside>
  );
};
