export const liquidGlassFilters = `
<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Clean Glass Base Filter -->
    <filter id="glassBase" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur"/>
      <feColorMatrix in="blur" type="matrix" 
        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.85 0"/>
      <feOffset in="blur" dx="0" dy="4" result="shadow"/>
      <feMerge>
        <feMergeNode in="shadow"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <!-- Clean Button Glass Effect -->
    <filter id="buttonGlass" x="-25%" y="-25%" width="150%" height="150%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="buttonBlur"/>
      <feColorMatrix in="buttonBlur" type="matrix" 
        values="1.02 0 0 0 0  0 1.02 0 0 0  0 0 1.05 0 0  0 0 0 0.88 0"/>
      <feOffset in="buttonBlur" dx="0" dy="3" result="buttonShadow"/>
      <feMerge>
        <feMergeNode in="buttonShadow"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <!-- Clean Card Glass Effect -->
    <filter id="cardGlass" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="cardBlur"/>
      <feColorMatrix in="cardBlur" type="matrix" 
        values="1.05 0 0 0 0  0 1.05 0 0 0  0 0 1.1 0 0  0 0 0 0.8 0"/>
      <feOffset in="cardBlur" dx="0" dy="6" result="cardShadow"/>
      <feMerge>
        <feMergeNode in="cardShadow"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <!-- Clean Glow Effect -->
    <filter id="cleanGlow" x="-100%" y="-100%" width="300%" height="300%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="coloredBlur"/>
      <feColorMatrix in="coloredBlur" type="matrix" 
        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.6 0"/>
      <feOffset in="coloredBlur" dx="0" dy="2" result="glowShadow"/>
      <feMerge> 
        <feMergeNode in="glowShadow"/>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <!-- Clean Subtle Enhancement -->
    <filter id="subtleEnhancement" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" result="subtleBlur"/>
      <feColorMatrix in="subtleBlur" type="matrix" 
        values="1.01 0 0 0 0  0 1.01 0 0 0  0 0 1.02 0 0  0 0 0 0.92 0"/>
      <feOffset in="subtleBlur" dx="0" dy="1" result="subtleOffset"/>
      <feMerge>
        <feMergeNode in="subtleOffset"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <!-- Clean Shimmer Effect -->
    <filter id="shimmerEffect" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="shimmerBlur"/>
      <feColorMatrix in="shimmerBlur" type="matrix" 
        values="1.2 0 0 0 0  0 1.2 0 0 0  0 0 1.3 0 0  0 0 0 0.7 0"/>
      <feOffset in="shimmerBlur" dx="0" dy="1" result="shimmerOffset"/>
      <feMerge>
        <feMergeNode in="shimmerOffset"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <!-- Clean Navbar Glass Effect -->
    <filter id="navbarGlass" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="navBlur"/>
      <feColorMatrix in="navBlur" type="matrix" 
        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.9 0"/>
      <feOffset in="navBlur" dx="0" dy="2" result="navShadow"/>
      <feMerge>
        <feMergeNode in="navShadow"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <!-- Clean Profile Glass Effect -->
    <filter id="profileGlass" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="profileBlur"/>
      <feColorMatrix in="profileBlur" type="matrix" 
        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.7 0"/>
      <feOffset in="profileBlur" dx="0" dy="8" result="profileShadow"/>
      <feMerge>
        <feMergeNode in="profileShadow"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <!-- Clean Avatar Glow Effect -->
    <filter id="avatarGlow" x="-100%" y="-100%" width="300%" height="300%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="avatarBlur"/>
      <feColorMatrix in="avatarBlur" type="matrix" 
        values="1.1 0 0 0 0  0 1.1 0 0 0  0 0 1.2 0 0  0 0 0 0.6 0"/>
      <feMerge> 
        <feMergeNode in="avatarBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <!-- Clean Comment Glass Effect -->
    <filter id="commentGlass" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="commentBlur"/>
      <feColorMatrix in="commentBlur" type="matrix" 
        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.8 0"/>
      <feOffset in="commentBlur" dx="0" dy="6" result="commentShadow"/>
      <feMerge>
        <feMergeNode in="commentShadow"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
</svg>
`;

export function injectLiquidGlassFilters(): void {
  if (typeof window !== 'undefined' && !document.querySelector('#glasnost-filters')) {
    const filtersContainer = document.createElement('div');
    filtersContainer.id = 'glasnost-filters';
    filtersContainer.innerHTML = liquidGlassFilters;
    document.body.appendChild(filtersContainer);
  }
} 