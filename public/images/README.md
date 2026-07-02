# Image slots

Drop files in here using these exact names and the site will pick them up
automatically, no code changes needed.

## /public/images/gallery/
Used on the Gallery page. Add up to 6, named 1.jpg through 6.jpg (or .png/.webp,
just update the extension in lib/gallery.ts to match).
Recommended size: at least 1200x900px, landscape.

## /public/images/hero-floor.jpg
Optional: a wide, high-quality shot used behind the About page stats band.
Recommended size: at least 1920x1080px, landscape.

## /public/images/before.jpg and /public/images/after.jpg
If you have a real before/after pair from an actual repair job, drop them here
and flip USE_REAL_PHOTOS to true in components/BeforeAfterSlider.tsx to
replace the illustrative graphics with the real thing.
Recommended: same dimensions for both, shot from the same angle if possible.
