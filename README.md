# Exsealoop Website

A static site (HTML/CSS/JS, no build step) built to your brand spec:
Manrope font, colors `#061426 / #536A88 / #A8B8CC / #F8F7F3 / #647A62 / #C7AD78 / #344254 / #E3E7EC`.

Files:
- `index.html` — page content
- `styles.css` — all styling / brand tokens
- `script.js` — mobile menu + scroll behaviour
- `CNAME` — put your GoDaddy domain here for GitHub Pages (see Part 2)

**Note on images:** the hero and product visuals are custom vector illustrations (with a subtle grain texture layered in for a more organic, less "flat-design" feel) rather than real photography. I didn't hotlink stock photos from the web on purpose — random web images are copyrighted and unreliable to host long-term. When you have real product photography, swap it in like this:

In `index.html`, each product card has a comment right above it, e.g.:
```html
<!-- Turmeric Powder — swap to a real photo by replacing the div's contents with:
     <img src="assets/images/turmeric-powder.jpg" alt="Turmeric powder"> -->
<div class="product-card__img" style="background:radial-gradient(...)">
  <svg>...</svg>
</div>
```
Just delete the `style="..."` attribute and the `<svg>` inside, and put an `<img>` tag in its place — drop the actual photo file into `assets/images/` first. Suggested filenames: `turmeric-powder.jpg`, `red-chilli-powder.jpg`, `green-cardamom.jpg`, `millets.jpg`, `moringa-powder.jpg`, `stevia-powder.jpg`. The card sizing/shadow/hover effects (`.product-card__img` in `styles.css`) already work with `<img>` tags — no CSS changes needed.

For the hero, replace the `<svg class="hero__svg">...</svg>` block with an `<img>` (e.g. a photo of your cargo ship or a product shot) sized to fill `.hero__art`.

---

## Part 1 — Push to GitHub and turn on Pages

1. Create a new repo on GitHub (e.g. `exsealoop-website`). Public repo if you're on a free GitHub plan.
2. From this folder, run:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/exsealoop-website.git
   git push -u origin main
   ```
3. In the repo on GitHub: **Settings → Pages**.
4. Under "Build and deployment", set **Source: Deploy from a branch**, **Branch: main / (root)**. Save.
5. GitHub gives you a URL like `https://<your-username>.github.io/exsealoop-website/` — wait a minute or two and confirm it loads.

## Part 2 — Point your GoDaddy domain at it

You have two options. **Option A (recommended)** uses your root domain (`exsealoop.com`); **Option B** uses a `www` subdomain only.

### Option A — root domain (exsealoop.com)
1. In the GitHub repo, add a file named exactly `CNAME` (no extension) at the root containing just your domain, e.g.:
   ```
   exsealoop.com
   ```
   (I've included a placeholder `CNAME` file — edit it with your real domain before pushing, or add it via GitHub's web UI.)
2. In GitHub: **Settings → Pages → Custom domain**, enter `exsealoop.com`, click Save. GitHub will re-check DNS automatically once it's set up.
3. In GoDaddy: **My Products → DNS → Manage DNS** for the domain, and add these four **A records** for `@`, replacing/removing any existing `@` A record or parked-page record:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
4. Add a **CNAME record** for `www` pointing to `<your-username>.github.io`.
5. DNS changes can take anywhere from a few minutes to ~24 hours to propagate. Once it does, back in GitHub Pages settings, tick **Enforce HTTPS** so the padlock shows.

### Option B — www subdomain only (www.exsealoop.com)
1. `CNAME` file in the repo contains `www.exsealoop.com`.
2. In GitHub Pages settings, custom domain = `www.exsealoop.com`.
3. In GoDaddy DNS, add a **CNAME record**: host `www`, points to `<your-username>.github.io`.
4. Optionally set GoDaddy's domain **Forwarding** (Domain settings → Forwarding) to redirect the bare `exsealoop.com` to `https://www.exsealoop.com`.

That's it — GitHub hosts it for free, GoDaddy just handles DNS. No hosting plan needed on the GoDaddy side.
