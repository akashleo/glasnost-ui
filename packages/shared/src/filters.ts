export const liquidGlassFilters = `
<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Liquid displacement filter -->
    <filter id="liquidDisplacement" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence 
        type="turbulence" 
        baseFrequency="0.02 0.01" 
        numOctaves="3" 
        result="turbulence"
      />
      <feDisplacementMap 
        in="SourceGraphic" 
        in2="turbulence" 
        scale="8" 
        xChannelSelector="R" 
        yChannelSelector="G"
      />
    </filter>

    <!-- Flowing glass filter -->
    <filter id="flowingGlass" x="-50%" y="-50%" width="200%" height="200%">
      <feTurbulence 
        type="fractalNoise" 
        baseFrequency="0.008 0.012" 
        numOctaves="4" 
        result="noise"
      />
      <feDisplacementMap 
        in="SourceGraphic" 
        in2="noise" 
        scale="15" 
        xChannelSelector="R" 
        yChannelSelector="G" 
        result="displaced"
      />
      <feGaussianBlur in="displaced" stdDeviation="0.8" result="blurred"/>
      <feColorMatrix 
        in="blurred" 
        type="matrix" 
        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.95 0"
      />
    </filter>

    <!-- Ripple effect -->
    <filter id="rippleEffect" x="-30%" y="-30%" width="160%" height="160%">
      <feTurbulence 
        type="turbulence" 
        baseFrequency="0.015" 
        numOctaves="2" 
        result="ripple"
      />
      <feDisplacementMap 
        in="SourceGraphic" 
        in2="ripple" 
        scale="12" 
        xChannelSelector="R" 
        yChannelSelector="B"
      />
    </filter>

    <!-- Glass distortion for buttons -->
    <filter id="buttonDistortion" x="-10%" y="-10%" width="120%" height="120%">
      <feTurbulence 
        type="fractalNoise" 
        baseFrequency="0.05 0.03" 
        numOctaves="2" 
        result="buttonNoise"
      />
      <feDisplacementMap 
        in="SourceGraphic" 
        in2="buttonNoise" 
        scale="3" 
        xChannelSelector="R" 
        yChannelSelector="G"
      />
    </filter>

    <!-- Enhanced liquid effect -->
    <filter id="enhancedLiquid" x="-40%" y="-40%" width="180%" height="180%">
      <feTurbulence 
        type="turbulence" 
        baseFrequency="0.01 0.015" 
        numOctaves="4" 
        result="liquid"
      />
      <feDisplacementMap 
        in="SourceGraphic" 
        in2="liquid" 
        scale="20" 
        xChannelSelector="R" 
        yChannelSelector="G" 
        result="liquidDisplaced"
      />
      <feGaussianBlur in="liquidDisplaced" stdDeviation="1.2" result="liquidBlur"/>
      <feColorMatrix 
        in="liquidBlur" 
        type="matrix" 
        values="1.1 0 0 0 0  0 1.1 0 0 0  0 0 1.2 0 0  0 0 0 0.9 0"
      />
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