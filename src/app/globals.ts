@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .glass {
    @apply backdrop-blur-xl bg-white/10 border border-white/20;
  }

  .glass-dark {
    @apply backdrop-blur-xl bg-black/20 border border-white/10;
  }

  .text-gradient {
    @apply bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent;
  }

  .aurora-gradient {
    @apply bg-aurora dark:bg-aurora-dark;
  }

  .premium-shadow {
    @apply shadow-premium;
  }

  .premium-card {
    @apply rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl transition-all duration-300 hover:shadow-lg;
  }

  .premium-button {
    @apply inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2;
  }

  .premium-button-primary {
    @apply premium-button bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95;
  }

  .premium-button-secondary {
    @apply premium-button border border-border bg-card/50 hover:bg-card active:scale-95;
  }

  .premium-input {
    @apply w-full rounded-lg border border-border bg-card px-3 py-2 text-foreground placeholder-muted-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring;
  }
}
