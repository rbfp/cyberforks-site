// ============================================================
// Single source of truth for site-wide data.
// Nav, socials, contact email — edit here, every page updates.
// ============================================================

export const site = {
  name: 'Cyberforks',
  tagline: "Proving cybersecurity actually works, one byte at a time.",
  email: 'robert@cyberforks.com',
  blog: 'https://blog.cyberforks.com',
  github: 'https://github.com/rbfp',
  instagram: 'http://instagram.com/cyberforksofficial',
};

// Primary nav. `children` renders as a dropdown.
export const nav = [
  { label: 'Home', href: '/' },
  {
    label: 'Experience',
    children: [
      { label: 'Agentic AI', href: '/agentic-ai' },
      { label: 'Offensive Security', href: '/offsec' },
      { label: 'Audits', href: '/audits' },
    ],
  },
  {
    label: 'Projects',
    children: [
      { label: 'Agentic AI Assistant', href: 'https://github.com/rbfp/Gir-An-Agentic-AI-Assistant', external: true },
      { label: 'Agentic AI Security Guardrails', href: 'https://github.com/rbfp/agentic-ai-assistant-security-guide', external: true },
      { label: 'Blog: Automated Things My AI Does', href: 'https://blog.cyberforks.com', external: true },
      { label: 'Automating Red Team Infrastructure', href: '/automating-red-team-infrastructure' },
      { label: 'Rowdy Roddy Red Team Infrastructure', href: '/rowdy-roddy-red-team-infrastructure' },
    ],
  },
  { label: 'Contact', href: '/contact-me' },
];
