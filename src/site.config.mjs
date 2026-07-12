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
    href: '/experience',
    children: [
      { label: 'Agentic AI', href: '/agentic-ai' },
      { label: 'Offensive Security', href: '/offsec' },
      { label: 'Audits', href: '/audits' },
    ],
  },
  {
    label: 'Projects',
    href: '/projects',
    // Order: AI repos → red-team infra repos → blog (bottom). Red-team items
    // point at their GitHub repos, not the on-site writeups.
    children: [
      { label: 'GH: Agentic AI Assistant', href: 'https://github.com/rbfp/Gir-An-Agentic-AI-Assistant', external: true },
      { label: 'GH: Agentic AI Security Guardrails', href: 'https://github.com/rbfp/agentic-ai-assistant-security-guide', external: true },
      { label: 'GH: Manual Red Team Infrastructure', href: 'https://github.com/rbfp/manual-red-team-infrastructure', external: true },
      { label: 'GH: Automating Red Team Infrastructure', href: 'https://github.com/rbfp/redteam-infra', external: true },
      { label: 'Automated Actions, Autonomously Authored', href: 'https://blog.cyberforks.com', external: true },
    ],
  },
];
