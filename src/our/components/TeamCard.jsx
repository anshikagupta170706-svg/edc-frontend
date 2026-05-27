import React, { useState } from 'react';
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoInstagram,
} from 'react-icons/io5';
import { FiArrowUpRight, FiArrowLeft } from 'react-icons/fi';

// ============================================================
// TEAM CARD COMPONENT — with 3D FLIP ANIMATION
// ============================================================
// Yeh card 2 sides ka hota hai:
//   FRONT: Photo + name + role + social icons + arrow (flip trigger)
//   BACK:  Mini photo + name + event tag + quote + return arrow
//
// Props (Team.jsx se aate hain):
//   - name:       Member ka naam
//   - role:       Role like 'Technical Team Head', 'Marketing Team Member'
//   - image:      Cloudinary photo URL
//   - linkedin:   LinkedIn URL (optional)
//   - github:     GitHub URL (optional)
//   - instagram:  Instagram URL (optional)
//   - quote:      Quote text jo back face pe dikhega
//   - year:       1 (1st year/Associate) ya 2 (2nd year/Executive)
// ============================================================
const TeamCard = ({ name, role, image, linkedin, github, instagram, quote, year }) => {
  // ──────────────────────────────────────────────────────
  // STATE: flip karne ke liye boolean
  // true = back side dikh rahi hai, false = front side
  // ──────────────────────────────────────────────────────
  const [isFlipped, setIsFlipped] = useState(false);

  // ──────────────────────────────────────────────────────
  // Card flip karne ka handler
  // event.stopPropagation() use kiya so it doesn't bubble up
  // (e.g., if card is inside another clickable wrapper)
  // ──────────────────────────────────────────────────────
  const handleFlip = (e) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  // ──────────────────────────────────────────────────────
  // Role ke basis pe tag ka colour aur label decide karte hain
  // Head waale tags purple, members waale tags subtle white
  // Core team (President/Secretary) bhi alag colour
  // ──────────────────────────────────────────────────────
  const getRoleTag = () => {
    const lower = role.toLowerCase();
    if (lower.includes('secretary') || lower.includes('president') || lower.includes('ctc')) {
      // Core leadership — distinct cyan tag
      return {
        label: role.replace(' Team', '').replace(' Head', ''),
        className: 'bg-[#05B1DE]/20 border-[#05B1DE]/40 text-[#7EE4F5]',
      };
    }
    if (lower.includes('co-head')) {
      // Department co-heads — purple tag
      return {
        label: 'Co-Head',
        className: 'bg-purple-500/20 border-purple-400/40 text-purple-200',
      };
    }
    if (lower.includes('head')) {
      // Department heads — purple tag
      return {
        label: 'Head',
        className: 'bg-purple-500/20 border-purple-400/40 text-purple-200',
      };
    }
    // Regular members — subtle white tag
    return {
      label: 'Member',
      className: 'bg-white/10 border-white/20 text-white/90',
    };
  };

  const roleTag = getRoleTag();

  // ──────────────────────────────────────────────────────
  // Year tag — '27 for 2nd year (graduates 2027), '28 for 1st year
  // ──────────────────────────────────────────────────────
  const yearLabel = year === 2 ? "'27" : "'28";

  return (
    // ──────────────────────────────────────────────────────
    // OUTER CARD WRAPPER
    // perspective property 3D effect ke liye zaroori hai
    // aspect-ratio se card ka height auto adjust hota hai
    // w-full lets it fill the grid column completely
    // (No max-width — grid columns decide actual size)
    // ──────────────────────────────────────────────────────
    <div
      className="w-full [perspective:1200px] group"
      style={{ aspectRatio: '1 / 1.55' }}
    >
      {/* ────────────────────────────────────────────────
          INNER CARD — yeh actually flip hota hai
          transform-style: preserve-3d zaroori hai for 3D
          Tailwind v4 me bracket notation use kar rahe hain
          ──────────────────────────────────────────────── */}
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* ════════════════════════════════════════════════
            FRONT FACE
            backface-visibility:hidden — when flipped, yeh hide ho jata hai
            ════════════════════════════════════════════════ */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] flex flex-col transition-all duration-300 group-hover:border-[#05B1DE]/40 group-hover:shadow-[0_20px_60px_-20px_rgba(5,177,222,0.25)]">

          {/* PHOTO SECTION */}
          <div className="relative aspect-square overflow-hidden bg-neutral-900">
            <img
              src={image}
              alt={name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              style={{ filter: 'saturate(0.95) contrast(1.02)' }}
            />

            {/* Gradient overlay — top aur bottom dono pe so tags readable rahein */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 pointer-events-none" />

            {/* Role tag — top-left corner */}
            <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider font-mono border backdrop-blur-md ${roleTag.className}`}>
              {roleTag.label}
            </div>

            {/* Year tag — bottom-right corner */}
            <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md text-[10px] font-semibold font-mono bg-black/60 backdrop-blur-md text-white/85">
              {yearLabel}
            </div>
          </div>

          {/* INFO SECTION — name, role, socials, flip arrow */}
          <div className="flex-1 flex flex-col p-3.5 sm:p-4">
            {/* Name */}
            <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-tight">
              {name}
            </h3>
            {/* Role (smaller, muted) */}
            <p className="text-xs sm:text-[13px] text-white/65 mt-1 leading-snug">
              {role}
            </p>

            {/* Thin divider line */}
            <div className="h-px bg-white/10 my-3" />

            {/* Footer: socials on left, flip arrow on right */}
            <div className="flex items-center justify-between mt-auto">
              {/* ────────────────────────────────────────────────
                  SOCIAL ICONS — Instagram, LinkedIn, GitHub
                  Teeno HAMESHA dikhte hain (consistency ke liye).
                  Agar link nahi hai to icon disabled/faded dikhega
                  aur click karne pe kuch nahi hoga.
                  ──────────────────────────────────────────────── */}
              <div className="flex gap-1.5">
                {/* Instagram */}
                {instagram ? (
                  <a
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-7 h-7 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-white/65 hover:bg-[#05B1DE] hover:text-black hover:border-[#05B1DE] transition-all"
                    aria-label="Instagram"
                  >
                    <IoLogoInstagram size={13} />
                  </a>
                ) : (
                  // Disabled state — faded, cursor-not-allowed, no hover effect
                  <span
                    className="w-7 h-7 rounded-md bg-white/[0.02] border border-white/5 flex items-center justify-center text-white/20 cursor-not-allowed"
                    aria-label="Instagram (not available)"
                    title="Not available"
                  >
                    <IoLogoInstagram size={13} />
                  </span>
                )}

                {/* LinkedIn */}
                {linkedin ? (
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-7 h-7 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-white/65 hover:bg-[#05B1DE] hover:text-black hover:border-[#05B1DE] transition-all"
                    aria-label="LinkedIn"
                  >
                    <IoLogoLinkedin size={13} />
                  </a>
                ) : (
                  <span
                    className="w-7 h-7 rounded-md bg-white/[0.02] border border-white/5 flex items-center justify-center text-white/20 cursor-not-allowed"
                    aria-label="LinkedIn (not available)"
                    title="Not available"
                  >
                    <IoLogoLinkedin size={13} />
                  </span>
                )}

                {/* GitHub */}
                {github ? (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-7 h-7 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-white/65 hover:bg-[#05B1DE] hover:text-black hover:border-[#05B1DE] transition-all"
                    aria-label="GitHub"
                  >
                    <IoLogoGithub size={13} />
                  </a>
                ) : (
                  <span
                    className="w-7 h-7 rounded-md bg-white/[0.02] border border-white/5 flex items-center justify-center text-white/20 cursor-not-allowed"
                    aria-label="GitHub (not available)"
                    title="Not available"
                  >
                    <IoLogoGithub size={13} />
                  </span>
                )}
              </div>

              {/* Flip arrow button */}
              <button
                onClick={handleFlip}
                aria-label="Read quote"
                className="w-7 h-7 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-white/65 hover:bg-[#05B1DE] hover:text-black hover:border-[#05B1DE] transition-all"
              >
                <FiArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════
            BACK FACE
            Yeh initially 180deg rotated hai so jab parent flip
            karega tab yeh seedha dikhega
            ════════════════════════════════════════════════ */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl overflow-hidden border border-white/10 flex flex-col bg-[#0a0a0a] transition-all duration-300 group-hover:border-[#05B1DE]/40">

          {/* Decorative background — radial gradients + base */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                radial-gradient(circle at 100% 0%, rgba(5, 177, 222, 0.08), transparent 50%),
                radial-gradient(circle at 0% 100%, rgba(181, 133, 240, 0.06), transparent 50%),
                linear-gradient(165deg, #0c0c0c 0%, #161616 100%)
              `,
            }}
          />
          {/* Subtle grid overlay — fades from top */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
              `,
              backgroundSize: '24px 24px',
              maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 70%)',
              WebkitMaskImage: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 70%)',
            }}
          />

          {/* Back HEADER — mini photo + name + year tag */}
          <div className="relative z-10 flex items-center gap-2.5 px-4 py-3 border-b border-white/10 bg-black/25">
            <img
              src={image}
              alt={name}
              loading="lazy"
              className="w-9 h-9 rounded-full object-cover border-[1.5px] border-[#05B1DE]/50 p-[2px] bg-black flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-bold text-white tracking-tight leading-tight truncate">
                {name}
              </div>
              <div className="flex items-center gap-1.5 mt-0.5 text-[9.5px] text-[#05B1DE] font-mono uppercase tracking-widest font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#05B1DE] shadow-[0_0_6px_#05B1DE] flex-shrink-0" />
                <span className="truncate">EDC Member · {year === 2 ? '2nd Year' : '1st Year'}</span>
              </div>
            </div>
          </div>

          {/* Back BODY — quote text with decorative quote mark */}
          <div className="relative z-10 flex-1 flex flex-col px-4 py-4 min-h-0">
            {/* Decorative quote mark — subtle, large */}
            <div
              className="text-[#05B1DE]/35 font-bold leading-none select-none mb-1"
              style={{ fontSize: '52px', height: '20px' }}
            >
              &ldquo;
            </div>
            {/* Actual quote — clamped to 6 lines so overflow shows ellipsis */}
            <p
              className="text-[13px] leading-[1.55] text-white italic font-normal flex-1 overflow-hidden"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 6,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {quote}
            </p>
          </div>

          {/* Back FOOTER — label + return arrow */}
          <div className="relative z-10 flex items-center justify-between gap-2 px-4 py-3 border-t border-white/10 bg-black/25">
            <span className="text-[9.5px] text-white/45 font-mono uppercase tracking-widest font-semibold">
              In their words
            </span>
            <button
              onClick={handleFlip}
              aria-label="Back to profile"
              className="w-7 h-7 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-white/65 hover:bg-[#05B1DE] hover:text-black hover:border-[#05B1DE] transition-all"
            >
              <FiArrowLeft size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
