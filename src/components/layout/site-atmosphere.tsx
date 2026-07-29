import React from "react";

/**
 * Fixed ambient red glow — stays pinned while sections scroll over glass layers.
 * Matches the soft hero-image halo the client wants site-wide.
 */
export function SiteAtmosphere() {
  return (
    <div className="site-atmosphere" aria-hidden="true">
      <div className="site-atmosphere__glow site-atmosphere__glow--primary" />
      <div className="site-atmosphere__glow site-atmosphere__glow--secondary" />
      <div className="site-atmosphere__glow site-atmosphere__glow--soft" />
    </div>
  );
}
