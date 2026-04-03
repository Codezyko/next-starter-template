<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>College Soccer – Explore Programs Across North America</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Syne:wght@600;700;800&display=swap" rel="stylesheet"/>
<style>
  :root {
    --navy: #0f172a;
    --charcoal: #1e293b;
    --blue: #1d4ed8;
    --blue-light: #3b82f6;
    --blue-bg: #eff6ff;
    --orange: #f97316;
    --orange-light: #fed7aa;
    --gray-50: #f8fafc;
    --gray-100: #f1f5f9;
    --gray-200: #e2e8f0;
    --gray-400: #94a3b8;
    --gray-600: #475569;
    --white: #ffffff;
    --radius: 14px;
    --radius-sm: 8px;
    --shadow: 0 1px 3px rgba(0,0,0,0.07), 0 4px 16px rgba(0,0,0,0.05);
    --shadow-md: 0 4px 24px rgba(0,0,0,0.09);
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--white);
    color: var(--charcoal);
    font-size: 16px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }
  .container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
  h1,h2,h3,h4 { font-family: 'Syne', sans-serif; color: var(--navy); }
  a { color: inherit; text-decoration: none; }

  /* ─── NAV ─── */
  .nav {
    position: sticky; top: 0; z-index: 100;
    background: rgba(255,255,255,0.96);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--gray-200);
  }
  .nav-inner {
    display: flex; align-items: center; justify-content: space-between;
    height: 64px;
  }
  .nav-logo img { height: 38px; display: block; }
  .nav-links { display: flex; gap: 32px; align-items: center; }
  .nav-links a {
    font-size: 14px; font-weight: 500; color: var(--gray-600);
    transition: color .2s;
  }
  .nav-links a:hover { color: var(--blue); }
  .nav-right { display: flex; gap: 10px; align-items: center; }
  .btn {
    display: inline-flex; align-items: center; justify-content: center;
    gap: 6px; border-radius: var(--radius-sm);
    font-family: 'DM Sans', sans-serif;
    font-size: 14px; font-weight: 600; cursor: pointer;
    transition: all .2s; border: none;
  }
  .btn-primary { background: var(--blue); color: #fff; padding: 10px 20px; }
  .btn-primary:hover { background: #1e40af; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(29,78,216,.3); }
  .btn-secondary {
    background: #fff; color: var(--blue);
    border: 1.5px solid var(--blue); padding: 10px 20px;
  }
  .btn-secondary:hover { background: var(--blue-bg); }
  .btn-ghost { background: transparent; color: var(--gray-600); padding: 8px 14px; }
  .btn-ghost:hover { color: var(--blue); background: var(--blue-bg); }
  .btn-sm { font-size: 13px; padding: 7px 16px; }
  .btn-icon { width: 38px; height: 38px; padding: 0; border-radius: 50%; background: var(--gray-100); color: var(--charcoal); }
  .btn-icon:hover { background: var(--blue-bg); color: var(--blue); }

  /* ─── HERO ─── */
  .hero {
    padding: 80px 0 64px;
    background: var(--white);
  }
  .hero-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center;
  }
  .hero-badge {
    display: inline-flex; align-items: center; gap: 6px;
    background: var(--orange-light); color: #9a3412;
    font-size: 12px; font-weight: 700; letter-spacing: .06em;
    text-transform: uppercase; border-radius: 100px; padding: 4px 12px;
    margin-bottom: 20px;
  }
  .hero-badge::before { content: '⚽'; font-size: 13px; }
  .hero h1 {
    font-size: clamp(32px, 4vw, 52px);
    font-weight: 800; line-height: 1.1;
    letter-spacing: -.02em;
    margin-bottom: 20px;
  }
  .hero h1 span { color: var(--blue); }
  .hero p {
    font-size: 17px; color: var(--gray-600);
    line-height: 1.7; margin-bottom: 36px; max-width: 480px;
  }
  .hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }
  .hero-btns .btn { padding: 13px 26px; font-size: 15px; }

  /* Hero preview mock */
  .hero-visual {
    position: relative;
    background: var(--gray-50);
    border-radius: 20px;
    border: 1px solid var(--gray-200);
    padding: 20px;
    overflow: hidden;
    box-shadow: var(--shadow-md);
  }
  .hero-visual::before {
    content: '';
    position: absolute; top: -60px; right: -60px;
    width: 200px; height: 200px;
    background: radial-gradient(circle, rgba(29,78,216,.08) 0%, transparent 70%);
    pointer-events: none;
  }
  .map-mock {
    background: #e8f0fe;
    border-radius: 12px;
    height: 160px;
    position: relative;
    overflow: hidden;
    margin-bottom: 12px;
    display: flex; align-items: center; justify-content: center;
  }
  .map-mock svg { opacity: .18; width: 100%; height: 100%; position: absolute; }
  .map-pin {
    width: 26px; height: 26px; border-radius: 50% 50% 50% 0;
    transform: rotate(-45deg);
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; position: absolute; cursor: pointer;
    transition: transform .2s;
    box-shadow: 0 2px 8px rgba(0,0,0,.2);
  }
  .map-pin:hover { transform: rotate(-45deg) scale(1.15); }
  .map-pin.blue { background: var(--blue); }
  .map-pin.orange { background: var(--orange); }
  .map-pin.teal { background: #0d9488; }
  .map-pin-label { transform: rotate(45deg); color: #fff; font-size: 9px; font-weight: 700; }
  .filter-chips { display: flex; gap: 6px; margin-bottom: 14px; flex-wrap: wrap; }
  .chip {
    background: #fff; border: 1px solid var(--gray-200);
    border-radius: 100px; padding: 4px 12px;
    font-size: 12px; font-weight: 500; color: var(--gray-600);
    cursor: pointer; transition: all .15s;
  }
  .chip.active { background: var(--blue); border-color: var(--blue); color: #fff; }
  .chip:hover:not(.active) { border-color: var(--blue); color: var(--blue); }
  .mini-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
  .mini-card {
    background: #fff; border: 1px solid var(--gray-200);
    border-radius: 10px; padding: 12px;
    display: flex; align-items: center; gap: 10px;
    box-shadow: var(--shadow);
  }
  .mini-card-logo {
    width: 36px; height: 36px; border-radius: 8px;
    background: var(--blue-bg); display: flex; align-items: center;
    justify-content: center; font-size: 16px; flex-shrink: 0;
  }
  .mini-card-info h4 { font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 700; color: var(--navy); }
  .mini-card-info p { font-size: 11px; color: var(--gray-400); }
  .badge {
    display: inline-block; font-size: 10px; font-weight: 700;
    letter-spacing: .05em; text-transform: uppercase;
    border-radius: 4px; padding: 2px 6px;
  }
  .badge-orange { background: var(--orange-light); color: #9a3412; }
  .badge-blue { background: var(--blue-bg); color: var(--blue); }
  .badge-gray { background: var(--gray-100); color: var(--gray-600); }

  /* ─── SEARCH BAR ─── */
  .search-section {
    padding: 0 0 72px;
  }
  .search-box {
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius);
    box-shadow: var(--shadow-md);
    padding: 24px 28px;
  }
  .search-box label { display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; color: var(--gray-400); margin-bottom: 6px; }
  .search-fields {
    display: grid;
    grid-template-columns: 1.8fr 1fr 1fr 1fr 1fr 1fr auto;
    gap: 12px; align-items: end;
  }
  .field input, .field select {
    width: 100%; height: 44px;
    border: 1px solid var(--gray-200); border-radius: var(--radius-sm);
    padding: 0 14px; font-family: 'DM Sans', sans-serif; font-size: 14px;
    color: var(--charcoal); background: var(--gray-50);
    outline: none; transition: border-color .2s, box-shadow .2s;
    appearance: none;
  }
  .field input:focus, .field select:focus {
    border-color: var(--blue); box-shadow: 0 0 0 3px rgba(29,78,216,.1);
  }
  .search-btn { height: 44px; padding: 0 22px; font-size: 14px; border-radius: var(--radius-sm); white-space: nowrap; }

  /* ─── ASSOCIATIONS ─── */
  .associations { padding: 72px 0; background: var(--gray-50); border-top: 1px solid var(--gray-200); border-bottom: 1px solid var(--gray-200); }
  .section-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .1em; color: var(--gray-400); margin-bottom: 24px; }
  .assoc-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 12px; }
  .assoc-card {
    background: #fff; border: 1px solid var(--gray-200);
    border-radius: 12px; padding: 24px 16px;
    text-align: center; cursor: pointer;
    transition: all .2s; box-shadow: var(--shadow);
  }
  .assoc-card:hover { border-color: var(--blue); box-shadow: 0 4px 20px rgba(29,78,216,.1); transform: translateY(-2px); }
  .assoc-icon { font-size: 28px; margin-bottom: 10px; }
  .assoc-card h3 { font-family: 'Syne', sans-serif; font-size: 16px; font-weight: 700; color: var(--navy); margin-bottom: 4px; }
  .assoc-card p { font-size: 11px; color: var(--gray-400); }

  /* ─── FEATURED COLLEGES ─── */
  .featured { padding: 80px 0; }
  .section-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 32px; }
  .section-header h2 { font-size: 28px; font-weight: 800; }
  .colleges-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
  .college-card {
    background: #fff; border: 1px solid var(--gray-200);
    border-radius: var(--radius); padding: 20px;
    cursor: pointer; transition: all .2s;
    box-shadow: var(--shadow);
  }
  .college-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
  .college-logo {
    width: 52px; height: 52px; border-radius: 10px;
    background: var(--blue-bg); display: flex; align-items: center;
    justify-content: center; font-size: 22px;
    margin-bottom: 14px; border: 1px solid var(--gray-200);
  }
  .college-card h3 { font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700; margin-bottom: 8px; }
  .college-meta { display: flex; flex-direction: column; gap: 4px; margin-bottom: 14px; }
  .college-meta span { font-size: 12px; color: var(--gray-600); display: flex; align-items: center; gap: 5px; }
  .college-meta span svg { opacity: .5; }
  .college-card .btn { width: 100%; justify-content: center; margin-top: 4px; }

  /* ─── MAP PREVIEW ─── */
  .map-section { padding: 80px 0; background: var(--gray-50); }
  .map-split { display: grid; grid-template-columns: 1fr 1.4fr; gap: 64px; align-items: center; }
  .map-split h2 { font-size: 32px; font-weight: 800; margin-bottom: 16px; }
  .map-split p { font-size: 16px; color: var(--gray-600); margin-bottom: 28px; line-height: 1.7; }
  .map-preview-large {
    background: #dbeafe;
    border-radius: 16px; height: 320px;
    border: 1px solid #bfdbfe;
    position: relative; overflow: hidden;
    box-shadow: var(--shadow-md);
    display: flex; align-items: center; justify-content: center;
  }
  .map-preview-large .map-label {
    position: absolute; bottom: 16px; left: 16px;
    background: rgba(255,255,255,.95); backdrop-filter: blur(8px);
    border: 1px solid var(--gray-200); border-radius: 10px;
    padding: 10px 14px; font-size: 13px; font-weight: 600;
    color: var(--navy); box-shadow: var(--shadow);
  }
  .map-grid-pattern {
    position: absolute; inset: 0; opacity: .12;
    background-image: linear-gradient(var(--blue) 1px, transparent 1px),
                      linear-gradient(90deg, var(--blue) 1px, transparent 1px);
    background-size: 40px 40px;
  }
  .map-big-pins { position: absolute; inset: 0; }
  .map-big-pin {
    width: 32px; height: 32px; border-radius: 50% 50% 50% 0;
    transform: rotate(-45deg); position: absolute;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 2px 10px rgba(0,0,0,.25);
    transition: transform .2s; cursor: pointer;
  }
  .map-big-pin:hover { transform: rotate(-45deg) scale(1.15); }
  .map-big-pin .icon { transform: rotate(45deg); color: #fff; font-size: 12px; }

  /* ─── HOW IT WORKS ─── */
  .how { padding: 80px 0; }
  .how-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .how-card {
    background: #fff; border: 1px solid var(--gray-200);
    border-radius: var(--radius); padding: 28px;
    box-shadow: var(--shadow);
  }
  .how-num {
    width: 40px; height: 40px; border-radius: 10px;
    background: var(--blue); color: #fff;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Syne', sans-serif; font-weight: 800; font-size: 18px;
    margin-bottom: 16px;
  }
  .how-card h3 { font-size: 17px; font-weight: 700; margin-bottom: 8px; }
  .how-card p { font-size: 14px; color: var(--gray-600); line-height: 1.6; }

  /* ─── MEN'S / WOMEN'S ─── */
  .programs { padding: 80px 0; background: var(--gray-50); }
  .programs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .program-card {
    background: #fff; border: 1px solid var(--gray-200);
    border-radius: var(--radius); overflow: hidden;
    box-shadow: var(--shadow);
  }
  .program-header {
    padding: 20px 24px;
    border-bottom: 1px solid var(--gray-200);
    display: flex; align-items: center; gap: 12px;
  }
  .program-icon {
    width: 44px; height: 44px; border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    font-size: 20px;
  }
  .program-icon.mens { background: #dbeafe; }
  .program-icon.womens { background: #fce7f3; }
  .program-header h3 { font-size: 17px; font-weight: 700; }
  .program-header p { font-size: 13px; color: var(--gray-400); }
  .program-body { padding: 20px 24px; }
  .program-stat {
    display: flex; justify-content: space-between; align-items: center;
    padding: 10px 0; border-bottom: 1px solid var(--gray-100);
    font-size: 14px;
  }
  .program-stat:last-child { border-bottom: none; }
  .program-stat .label { color: var(--gray-600); }
  .program-stat .value { font-weight: 600; color: var(--navy); }

  /* ─── CONFERENCES ─── */
  .conferences { padding: 80px 0; }
  .conf-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
  .conf-card {
    background: #fff; border: 1px solid var(--gray-200);
    border-radius: 12px; padding: 18px 20px;
    cursor: pointer; transition: all .2s;
    display: flex; justify-content: space-between; align-items: center;
  }
  .conf-card:hover { border-color: var(--blue); background: var(--blue-bg); }
  .conf-card:hover .conf-arrow { color: var(--blue); }
  .conf-name { font-weight: 600; font-size: 14px; margin-bottom: 3px; }
  .conf-arrow { color: var(--gray-400); transition: color .2s; }

  /* ─── SCHOOL PREVIEW ─── */
  .school-preview { padding: 80px 0; background: var(--gray-50); }
  .school-preview-inner { max-width: 900px; margin: 0 auto; }
  .school-card-big {
    background: #fff; border: 1px solid var(--gray-200);
    border-radius: var(--radius); overflow: hidden;
    box-shadow: var(--shadow-md);
  }
  .school-card-top {
    padding: 28px; border-bottom: 1px solid var(--gray-200);
    display: flex; gap: 20px; align-items: flex-start;
  }
  .school-logo-big {
    width: 72px; height: 72px; border-radius: 14px;
    background: var(--blue-bg); display: flex; align-items: center;
    justify-content: center; font-size: 32px;
    border: 1px solid var(--gray-200); flex-shrink: 0;
  }
  .school-info h2 { font-size: 22px; font-weight: 800; margin-bottom: 6px; }
  .school-info .meta-row { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 10px; }
  .school-info .meta-item { font-size: 13px; color: var(--gray-600); display: flex; align-items: center; gap: 4px; }
  .school-links { display: flex; gap: 8px; flex-wrap: wrap; }
  .school-links a {
    font-size: 12px; font-weight: 600; color: var(--blue);
    background: var(--blue-bg); border-radius: 6px; padding: 4px 10px;
    transition: background .15s;
  }
  .school-links a:hover { background: #dbeafe; }
  .school-tabs {
    display: flex; border-bottom: 1px solid var(--gray-200);
    padding: 0 28px; overflow-x: auto;
  }
  .school-tab {
    padding: 14px 18px; font-size: 14px; font-weight: 600;
    color: var(--gray-400); border-bottom: 2px solid transparent;
    cursor: pointer; white-space: nowrap; transition: all .15s;
  }
  .school-tab.active { color: var(--blue); border-bottom-color: var(--blue); }
  .school-tab:hover:not(.active) { color: var(--charcoal); }
  .school-card-body { padding: 28px; display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .info-block h4 { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; color: var(--gray-400); margin-bottom: 8px; }
  .info-block p { font-size: 14px; font-weight: 600; color: var(--navy); }
  .info-block a { font-size: 14px; color: var(--blue); }

  /* ─── CTA ─── */
  .cta-section {
    padding: 80px 0;
    background: var(--navy);
    text-align: center;
  }
  .cta-section h2 { font-size: 36px; font-weight: 800; color: #fff; margin-bottom: 16px; }
  .cta-section p { color: #94a3b8; font-size: 17px; margin-bottom: 32px; }
  .cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
  .cta-btns .btn-primary { background: var(--blue-light); }
  .cta-btns .btn-secondary { border-color: #475569; color: #cbd5e1; }
  .cta-btns .btn-secondary:hover { background: #1e293b; color: #fff; }

  /* ─── FOOTER ─── */
  .footer { background: var(--charcoal); color: #94a3b8; padding: 56px 0 28px; }
  .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr 1fr; gap: 40px; margin-bottom: 48px; }
  .footer-brand img { height: 32px; margin-bottom: 12px; filter: brightness(0) invert(1) opacity(.7); }
  .footer-brand p { font-size: 13px; line-height: 1.7; }
  .footer-col h4 { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; color: #e2e8f0; margin-bottom: 14px; }
  .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 8px; }
  .footer-col ul li a { font-size: 13px; color: #94a3b8; transition: color .15s; }
  .footer-col ul li a:hover { color: #fff; }
  .footer-bottom {
    border-top: 1px solid #334155; padding-top: 24px;
    display: flex; justify-content: space-between; align-items: center;
    font-size: 12px; color: #64748b; flex-wrap: wrap; gap: 12px;
  }
  .footer-bottom-links { display: flex; gap: 16px; }
  .footer-bottom-links a { color: #64748b; }
  .footer-bottom-links a:hover { color: #94a3b8; }

  /* ─── RESPONSIVE ─── */
  @media (max-width: 1024px) {
    .hero-grid { grid-template-columns: 1fr; gap: 40px; }
    .hero-visual { display: none; }
    .search-fields { grid-template-columns: 1fr 1fr 1fr; }
    .colleges-grid { grid-template-columns: repeat(2, 1fr); }
    .assoc-grid { grid-template-columns: repeat(3, 1fr); }
    .conf-grid { grid-template-columns: repeat(2, 1fr); }
    .footer-grid { grid-template-columns: 1fr 1fr 1fr; }
    .map-split { grid-template-columns: 1fr; }
    .programs-grid { grid-template-columns: 1fr; }
    .school-card-body { grid-template-columns: 1fr; }
  }
  @media (max-width: 768px) {
    .nav-links { display: none; }
    .hero { padding: 48px 0 40px; }
    .hero h1 { font-size: 28px; }
    .how-grid { grid-template-columns: 1fr; }
    .search-fields { grid-template-columns: 1fr 1fr; }
    .colleges-grid { grid-template-columns: 1fr; }
    .assoc-grid { grid-template-columns: repeat(2, 1fr); }
    .footer-grid { grid-template-columns: 1fr 1fr; }
    .section-header { flex-direction: column; align-items: flex-start; gap: 12px; }
    .school-card-top { flex-direction: column; }
    .school-card-body { grid-template-columns: 1fr; }
  }
  @media (max-width: 480px) {
    .container { padding: 0 16px; }
    .search-fields { grid-template-columns: 1fr; }
    .hero-btns { flex-direction: column; }
    .hero-btns .btn { width: 100%; }
  }

  /* ─── Animations ─── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .hero-badge { animation: fadeUp .5s ease both; }
  .hero h1 { animation: fadeUp .5s .1s ease both; }
  .hero p { animation: fadeUp .5s .2s ease both; }
  .hero-btns { animation: fadeUp .5s .3s ease both; }
</style>
</head>
<body>

<!-- ═══ NAV ═══ -->
<nav class="nav">
  <div class="container nav-inner">
    <a href="#" class="nav-logo">
      <img src="https://imagedelivery.net/bg025PqypkYj-ZKM0mCOdA/0b73d1a4-e6e7-448c-32d1-e9ffb088b900/public" alt="College Soccer" />
    </a>
    <div class="nav-links">
      <a href="#">Colleges</a>
      <a href="#">Map</a>
      <a href="#">Conferences</a>
      <a href="#">About</a>
    </div>
    <div class="nav-right">
      <button class="btn btn-icon" title="Search">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      </button>
      <button class="btn btn-ghost">Sign In</button>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</nav>

<!-- ═══ HERO ═══ -->
<section class="hero">
  <div class="container">
    <div class="hero-grid">
      <div class="hero-left">
        <div class="hero-badge">North America's College Soccer Directory</div>
        <h1>Explore college soccer programs across <span>North America</span></h1>
        <p>Search colleges by division, conference, state, city, and association. Compare schools, discover stadiums, and browse men's and women's soccer programs in one place.</p>
        <div class="hero-btns">
          <button class="btn btn-primary">Browse Colleges</button>
          <button class="btn btn-secondary">View Map</button>
        </div>
      </div>
      <div class="hero-right">
        <div class="hero-visual">
          <div class="map-mock">
            <!-- US outline SVG suggestion pattern -->
            <svg viewBox="0 0 600 350" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M80 180 L120 120 L200 100 L280 110 L360 90 L440 110 L520 140 L540 200 L500 260 L400 280 L300 290 L180 270 L80 240 Z" stroke="#1d4ed8" stroke-width="2" fill="none"/>
            </svg>
            <!-- pins -->
            <div class="map-pin blue" style="top:38%;left:36%;"><span class="map-pin-label">UCLA</span></div>
            <div class="map-pin orange" style="top:28%;left:60%;"><span class="map-pin-label">OSU</span></div>
            <div class="map-pin teal" style="top:50%;left:72%;"><span class="map-pin-label">Duke</span></div>
            <div class="map-pin blue" style="top:22%;left:48%;"><span class="map-pin-label">UM</span></div>
            <div class="map-pin orange" style="top:60%;left:44%;"><span class="map-pin-label">UT</span></div>
          </div>
          <div class="filter-chips">
            <div class="chip active">NCAA D1</div>
            <div class="chip">NCAA D2</div>
            <div class="chip">NAIA</div>
            <div class="chip">All States</div>
          </div>
          <div class="mini-cards">
            <div class="mini-card">
              <div class="mini-card-logo">🐝</div>
              <div class="mini-card-info">
                <h4>Georgia Tech</h4>
                <p>ACC · Atlanta, GA</p>
              </div>
            </div>
            <div class="mini-card">
              <div class="mini-card-logo">🐻</div>
              <div class="mini-card-info">
                <h4>UC Berkeley</h4>
                <p>Pac-12 · Berkeley, CA</p>
              </div>
            </div>
            <div class="mini-card">
              <div class="mini-card-logo">🦅</div>
              <div class="mini-card-info">
                <h4>Boston College</h4>
                <p>ACC · Chestnut Hill, MA</p>
              </div>
            </div>
            <div class="mini-card">
              <div class="mini-card-logo">🐬</div>
              <div class="mini-card-info">
                <h4>Florida Atlantic</h4>
                <p>Sun Belt · Boca Raton, FL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ SEARCH ═══ -->
<section class="search-section">
  <div class="container">
    <div class="search-box">
      <div class="search-fields">
        <div class="field">
          <label>School Name</label>
          <input type="text" placeholder="e.g. University of Michigan…" />
        </div>
        <div class="field">
          <label>Division</label>
          <select>
            <option>All Divisions</option>
            <option>NCAA D1</option>
            <option>NCAA D2</option>
            <option>NCAA D3</option>
            <option>NAIA</option>
            <option>NJCAA</option>
          </select>
        </div>
        <div class="field">
          <label>Conference</label>
          <select>
            <option>All Conferences</option>
            <option>ACC</option>
            <option>Big Ten</option>
            <option>SEC</option>
            <option>Pac-12</option>
          </select>
        </div>
        <div class="field">
          <label>Nation</label>
          <select>
            <option>All Nations</option>
            <option>USA</option>
            <option>Canada</option>
          </select>
        </div>
        <div class="field">
          <label>State</label>
          <select>
            <option>All States</option>
            <option>California</option>
            <option>New York</option>
            <option>Texas</option>
            <option>Florida</option>
          </select>
        </div>
        <div class="field">
          <label>City</label>
          <input type="text" placeholder="e.g. Los Angeles…" />
        </div>
        <button class="btn btn-primary search-btn">Search Colleges</button>
      </div>
    </div>
  </div>
</section>

<!-- ═══ ASSOCIATIONS ═══ -->
<section class="associations">
  <div class="container">
    <p class="section-label">Browse by Association</p>
    <div class="assoc-grid">
      <div class="assoc-card">
        <div class="assoc-icon">🏆</div>
        <h3>NCAA</h3>
        <p>Divisions I, II & III</p>
      </div>
      <div class="assoc-card">
        <div class="assoc-icon">⚡</div>
        <h3>NAIA</h3>
        <p>National Association</p>
      </div>
      <div class="assoc-card">
        <div class="assoc-icon">🎓</div>
        <h3>NJCAA</h3>
        <p>Junior College</p>
      </div>
      <div class="assoc-card">
        <div class="assoc-icon">🍁</div>
        <h3>U Sports</h3>
        <p>Canadian University</p>
      </div>
      <div class="assoc-card">
        <div class="assoc-icon">✝️</div>
        <h3>NCCAA</h3>
        <p>Christian Colleges</p>
      </div>
      <div class="assoc-card">
        <div class="assoc-icon">🏫</div>
        <h3>USCAA</h3>
        <p>Small Colleges</p>
      </div>
    </div>
  </div>
</section>

<!-- ═══ FEATURED COLLEGES ═══ -->
<section class="featured">
  <div class="container">
    <div class="section-header">
      <h2>Featured Colleges</h2>
      <a href="#" class="btn btn-ghost">View All →</a>
    </div>
    <div class="colleges-grid">
      <!-- Card 1 -->
      <div class="college-card">
        <div class="college-logo">🐻</div>
        <span class="badge badge-orange">NCAA D1</span>
        <h3 style="margin-top:10px;">UC Los Angeles</h3>
        <div class="college-meta">
          <span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
            Pac-12 Conference
          </span>
          <span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/></svg>
            Los Angeles, CA
          </span>
        </div>
        <button class="btn btn-secondary btn-sm">View Overview</button>
      </div>
      <!-- Card 2 -->
      <div class="college-card">
        <div class="college-logo">🐦</div>
        <span class="badge badge-blue">NCAA D1</span>
        <h3 style="margin-top:10px;">Duke University</h3>
        <div class="college-meta">
          <span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
            ACC Conference
          </span>
          <span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/></svg>
            Durham, NC
          </span>
        </div>
        <button class="btn btn-secondary btn-sm">View Overview</button>
      </div>
      <!-- Card 3 -->
      <div class="college-card">
        <div class="college-logo">🌲</div>
        <span class="badge badge-orange">NCAA D1</span>
        <h3 style="margin-top:10px;">Stanford University</h3>
        <div class="college-meta">
          <span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
            Pac-12 Conference
          </span>
          <span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/></svg>
            Stanford, CA
          </span>
        </div>
        <button class="btn btn-secondary btn-sm">View Overview</button>
      </div>
      <!-- Card 4 -->
      <div class="college-card">
        <div class="college-logo">🐯</div>
        <span class="badge badge-blue">NCAA D1</span>
        <h3 style="margin-top:10px;">Clemson University</h3>
        <div class="college-meta">
          <span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
            ACC Conference
          </span>
          <span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/></svg>
            Clemson, SC
          </span>
        </div>
        <button class="btn btn-secondary btn-sm">View Overview</button>
      </div>
      <!-- Card 5 -->
      <div class="college-card">
        <div class="college-logo">🦅</div>
        <span class="badge badge-gray">NAIA</span>
        <h3 style="margin-top:10px;">Lindsey Wilson College</h3>
        <div class="college-meta">
          <span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
            Mid-South Conference
          </span>
          <span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/></svg>
            Columbia, KY
          </span>
        </div>
        <button class="btn btn-secondary btn-sm">View Overview</button>
      </div>
      <!-- Card 6 -->
      <div class="college-card">
        <div class="college-logo">🏔️</div>
        <span class="badge badge-orange">NCAA D2</span>
        <h3 style="margin-top:10px;">Colorado School of Mines</h3>
        <div class="college-meta">
          <span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
            RMAC
          </span>
          <span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/></svg>
            Golden, CO
          </span>
        </div>
        <button class="btn btn-secondary btn-sm">View Overview</button>
      </div>
      <!-- Card 7 -->
      <div class="college-card">
        <div class="college-logo">🐺</div>
        <span class="badge badge-blue">NCAA D1</span>
        <h3 style="margin-top:10px;">North Carolina</h3>
        <div class="college-meta">
          <span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
            ACC Conference
          </span>
          <span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/></svg>
            Chapel Hill, NC
          </span>
        </div>
        <button class="btn btn-secondary btn-sm">View Overview</button>
      </div>
      <!-- Card 8 -->
      <div class="college-card">
        <div class="college-logo">🍁</div>
        <span class="badge badge-gray">U Sports</span>
        <h3 style="margin-top:10px;">Univ. of Toronto</h3>
        <div class="college-meta">
          <span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
            OUA Conference
          </span>
          <span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/></svg>
            Toronto, ON
          </span>
        </div>
        <button class="btn btn-secondary btn-sm">View Overview</button>
      </div>
    </div>
  </div>
</section>

<!-- ═══ MAP PREVIEW ═══ -->
<section class="map-section">
  <div class="container">
    <div class="map-split">
      <div>
        <p class="section-label">Interactive Map</p>
        <h2>Browse programs by location</h2>
        <p>See colleges plotted on a map and narrow your results by conference, division, nation, state, or city. Discover programs near you or in your target area.</p>
        <button class="btn btn-primary">Open Full Map →</button>
      </div>
      <div>
        <div class="map-preview-large">
          <div class="map-grid-pattern"></div>
          <div class="map-big-pins">
            <div class="map-big-pin" style="background:var(--blue);top:32%;left:28%;"><span class="icon">📍</span></div>
            <div class="map-big-pin" style="background:var(--orange);top:22%;left:55%;"><span class="icon">📍</span></div>
            <div class="map-big-pin" style="background:#0d9488;top:44%;left:70%;"><span class="icon">📍</span></div>
            <div class="map-big-pin" style="background:var(--blue);top:55%;left:42%;"><span class="icon">📍</span></div>
            <div class="map-big-pin" style="background:var(--orange);top:38%;left:62%;"><span class="icon">📍</span></div>
            <div class="map-big-pin" style="background:#7c3aed;top:28%;left:38%;"><span class="icon">📍</span></div>
          </div>
          <div class="map-label">⚽ 1,200+ College Programs</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ HOW IT WORKS ═══ -->
<section class="how">
  <div class="container">
    <div style="text-align:center;margin-bottom:40px;">
      <p class="section-label" style="justify-content:center;display:flex;">How It Works</p>
      <h2 style="font-size:32px;">Everything you need in one place</h2>
    </div>
    <div class="how-grid">
      <div class="how-card">
        <div class="how-num">1</div>
        <h3>Search Schools</h3>
        <p>Filter colleges by division, conference, state, and more. Find programs that match your criteria in seconds.</p>
      </div>
      <div class="how-card">
        <div class="how-num">2</div>
        <h3>Explore Program Pages</h3>
        <p>View school details, stadiums, coaches, and program information for both men's and women's soccer.</p>
      </div>
      <div class="how-card">
        <div class="how-num">3</div>
        <h3>Compare Conferences</h3>
        <p>Browse leagues across NCAA, NAIA, NJCAA, U Sports, and more. Understand the competitive landscape.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═══ MEN'S / WOMEN'S ═══ -->
<section class="programs">
  <div class="container">
    <div class="section-header" style="margin-bottom:24px;">
      <h2>Men's &amp; Women's Programs</h2>
      <a href="#" class="btn btn-ghost">View All Programs →</a>
    </div>
    <div class="programs-grid">
      <div class="program-card">
        <div class="program-header">
          <div class="program-icon mens">⚽</div>
          <div>
            <h3>Men's Programs</h3>
            <p>Division overview &amp; highlights</p>
          </div>
        </div>
        <div class="program-body">
          <div class="program-stat">
            <span class="label">Head Coach</span>
            <span class="value">View per school</span>
          </div>
          <div class="program-stat">
            <span class="label">Fixtures</span>
            <span class="value">Season schedule</span>
          </div>
          <div class="program-stat">
            <span class="label">Honours</span>
            <span class="value">Championship history</span>
          </div>
          <div class="program-stat">
            <span class="label">Table Position</span>
            <span class="value">Conference standings</span>
          </div>
          <div class="program-stat">
            <span class="label">Drafted Players</span>
            <span class="value badge badge-orange">MLS Draft tracked</span>
          </div>
        </div>
      </div>
      <div class="program-card">
        <div class="program-header">
          <div class="program-icon womens">⚽</div>
          <div>
            <h3>Women's Programs</h3>
            <p>Division overview &amp; highlights</p>
          </div>
        </div>
        <div class="program-body">
          <div class="program-stat">
            <span class="label">Head Coach</span>
            <span class="value">View per school</span>
          </div>
          <div class="program-stat">
            <span class="label">Fixtures</span>
            <span class="value">Season schedule</span>
          </div>
          <div class="program-stat">
            <span class="label">Honours</span>
            <span class="value">Championship history</span>
          </div>
          <div class="program-stat">
            <span class="label">Table Position</span>
            <span class="value">Conference standings</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ CONFERENCES ═══ -->
<section class="conferences">
  <div class="container">
    <div class="section-header">
      <h2>Browse by Conference</h2>
      <a href="#" class="btn btn-ghost">All Conferences →</a>
    </div>
    <div class="conf-grid">
      <div class="conf-card">
        <div><div class="conf-name">ACC</div><div><span class="badge badge-blue">NCAA D1</span></div></div>
        <span class="conf-arrow">›</span>
      </div>
      <div class="conf-card">
        <div><div class="conf-name">Big Ten</div><div><span class="badge badge-blue">NCAA D1</span></div></div>
        <span class="conf-arrow">›</span>
      </div>
      <div class="conf-card">
        <div><div class="conf-name">Big 12</div><div><span class="badge badge-blue">NCAA D1</span></div></div>
        <span class="conf-arrow">›</span>
      </div>
      <div class="conf-card">
        <div><div class="conf-name">SEC</div><div><span class="badge badge-blue">NCAA D1</span></div></div>
        <span class="conf-arrow">›</span>
      </div>
      <div class="conf-card">
        <div><div class="conf-name">Pac-12</div><div><span class="badge badge-blue">NCAA D1</span></div></div>
        <span class="conf-arrow">›</span>
      </div>
      <div class="conf-card">
        <div><div class="conf-name">Mountain West</div><div><span class="badge badge-blue">NCAA D1</span></div></div>
        <span class="conf-arrow">›</span>
      </div>
      <div class="conf-card">
        <div><div class="conf-name">Mid-South</div><div><span class="badge badge-orange">NAIA</span></div></div>
        <span class="conf-arrow">›</span>
      </div>
      <div class="conf-card">
        <div><div class="conf-name">OUA</div><div><span class="badge badge-gray">U Sports</span></div></div>
        <span class="conf-arrow">›</span>
      </div>
      <div class="conf-card">
        <div><div class="conf-name">Sun Belt</div><div><span class="badge badge-blue">NCAA D1</span></div></div>
        <span class="conf-arrow">›</span>
      </div>
      <div class="conf-card">
        <div><div class="conf-name">RMAC</div><div><span class="badge badge-blue">NCAA D2</span></div></div>
        <span class="conf-arrow">›</span>
      </div>
      <div class="conf-card">
        <div><div class="conf-name">NSAA</div><div><span class="badge badge-gray">NJCAA</span></div></div>
        <span class="conf-arrow">›</span>
      </div>
      <div class="conf-card">
        <div><div class="conf-name">GLIAC</div><div><span class="badge badge-blue">NCAA D2</span></div></div>
        <span class="conf-arrow">›</span>
      </div>
    </div>
  </div>
</section>

<!-- ═══ SCHOOL PAGE PREVIEW ═══ -->
<section class="school-preview">
  <div class="container">
    <div style="text-align:center;margin-bottom:32px;">
      <p class="section-label" style="justify-content:center;display:flex;">Sample School Page</p>
      <h2>Rich, detailed program profiles</h2>
    </div>
    <div class="school-preview-inner">
      <div class="school-card-big">
        <div class="school-card-top">
          <div class="school-logo-big">🐻</div>
          <div class="school-info">
            <h2>University of California, Los Angeles</h2>
            <div class="meta-row">
              <span class="meta-item">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                Pac-12 Conference
              </span>
              <span class="meta-item">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/></svg>
                Los Angeles, CA
              </span>
              <span class="badge badge-orange">NCAA D1</span>
            </div>
            <div class="school-links">
              <a href="#">🔗 Official Site</a>
              <a href="#">📖 Wikipedia</a>
              <a href="#">📧 Athletics</a>
            </div>
          </div>
        </div>
        <div class="school-tabs">
          <div class="school-tab active">Overview</div>
          <div class="school-tab">Men's</div>
          <div class="school-tab">Women's</div>
          <div class="school-tab">Stadium</div>
          <div class="school-tab">Conference</div>
        </div>
        <div class="school-card-body">
          <div class="info-block">
            <h4>Stadium</h4>
            <p>Drake Stadium</p>
          </div>
          <div class="info-block">
            <h4>Capacity</h4>
            <p>2,500 seats</p>
          </div>
          <div class="info-block">
            <h4>Athletics Director</h4>
            <p>Martin Jarmond</p>
            <a href="#">m.jarmond@athletics.ucla.edu</a>
          </div>
          <div class="info-block">
            <h4>Association</h4>
            <p>NCAA Division I</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ CTA ═══ -->
<section class="cta-section">
  <div class="container">
    <h2>Start exploring college soccer programs</h2>
    <p>Thousands of schools, conferences, and programs — all in one place.</p>
    <div class="cta-btns">
      <button class="btn btn-primary" style="padding:14px 28px;font-size:15px;">Browse Colleges</button>
      <button class="btn btn-secondary" style="padding:14px 28px;font-size:15px;">Explore Conferences</button>
    </div>
  </div>
</section>

<!-- ═══ FOOTER ═══ -->
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="https://imagedelivery.net/bg025PqypkYj-ZKM0mCOdA/0b73d1a4-e6e7-448c-32d1-e9ffb088b900/public" alt="College Soccer" />
        <p>The most comprehensive directory of college soccer programs across North America. Search, filter, and explore schools, conferences, and programs.</p>
      </div>
      <div class="footer-col">
        <h4>Explore</h4>
        <ul>
          <li><a href="#">Colleges</a></li>
          <li><a href="#">Map</a></li>
          <li><a href="#">Conferences</a></li>
          <li><a href="#">Associations</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Programs</h4>
        <ul>
          <li><a href="#">Men's Soccer</a></li>
          <li><a href="#">Women's Soccer</a></li>
          <li><a href="#">NCAA D1</a></li>
          <li><a href="#">NAIA</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Data Policy</a></li>
          <li><a href="#">Privacy</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Resources</h4>
        <ul>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">API</a></li>
          <li><a href="#">Status</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 College Soccer. All rights reserved.</span>
      <div class="footer-bottom-links">
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
        <a href="#">Data Policy</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </div>
</footer>

<script>
  // Tab interactivity
  document.querySelectorAll('.school-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.school-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // Chip interactivity
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('active');
    });
  });

  // Conference card hover pulse
  document.querySelectorAll('.assoc-card').forEach(card => {
    card.addEventListener('click', () => {
      card.style.transform = 'scale(0.97)';
      setTimeout(() => card.style.transform = '', 120);
    });
  });
</script>
</body>
</html>
