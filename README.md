# Scale With Search

The AI Operating System. 5 courses, 77 modules. From browser setup to production AI deployment.

## Stack

- React 18 + TypeScript
- Tailwind CSS (CDN)
- Framer Motion
- Vite

## Run Locally

```bash
npm install
npm run dev
```

## Deploy to Netlify

1. Push to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

## Structure

```
/components
  Hero.tsx          # Landing hero with boot sequence
  Courses.tsx       # 5 courses with Stripe links
  Pricing.tsx       # 3 tiers with Stripe payment links
  Proof.tsx         # Testimonials and stats
  FinalAction.tsx   # Final CTA
  Footer.tsx        # Site footer
  BootLoader.tsx    # Loading animation
  MarqueeTape.tsx   # Scrolling marquee
```

---

Built by [@b2bvic](https://linkedin.com/in/b2bvic)
