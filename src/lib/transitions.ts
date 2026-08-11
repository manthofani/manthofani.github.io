export interface TransitionPreset {
  id: string;
  name: string;
  code: string;
  tagline: string;
  variants: {
    initial: (custom: { direction: number }) => any;
    animate: any;
    exit: (custom: { direction: number }) => any;
  };
  transition: any;
}

export const ANIMATION_PRESETS: TransitionPreset[] = [
  {
    id: 'slide-horizontal',
    name: 'HORIZONTAL LATERAL SLIDE',
    code: 'FX_SLIDE_X',
    tagline: 'Directional X-axis vector displacement with spring dampening',
    variants: {
      initial: ({ direction }) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
        scale: 0.98,
      }),
      animate: {
        x: '0%',
        opacity: 1,
        scale: 1,
      },
      exit: ({ direction }) => ({
        x: direction > 0 ? '-100%' : '100%',
        opacity: 0,
        scale: 0.98,
      }),
    },
    transition: { type: 'spring', stiffness: 260, damping: 28 },
  },
  {
    id: 'slide-vertical',
    name: 'ELEVATOR Y PUSH',
    code: 'FX_PUSH_Y',
    tagline: 'Vertical column transit with linear momentum curve',
    variants: {
      initial: ({ direction }) => ({
        y: direction > 0 ? '100%' : '-100%',
        opacity: 0,
      }),
      animate: {
        y: '0%',
        opacity: 1,
      },
      exit: ({ direction }) => ({
        y: direction > 0 ? '-100%' : '100%',
        opacity: 0,
      }),
    },
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
  {
    id: 'flip-3d',
    name: '3D PERSPECTIVE MATRIX FLIP',
    code: 'FX_FLIP_3D',
    tagline: '3D spatial card rotation around vertical Y axis',
    variants: {
      initial: ({ direction }) => ({
        rotateY: direction > 0 ? 75 : -75,
        opacity: 0,
        scale: 0.85,
      }),
      animate: {
        rotateY: 0,
        opacity: 1,
        scale: 1,
      },
      exit: ({ direction }) => ({
        rotateY: direction > 0 ? -75 : 75,
        opacity: 0,
        scale: 0.85,
      }),
    },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  {
    id: 'skew-drift',
    name: 'KINETIC SKEW DRIFT',
    code: 'FX_SKEW_SHIFT',
    tagline: 'Angled shear matrix displacement with high momentum',
    variants: {
      initial: ({ direction }) => ({
        x: direction > 0 ? '90%' : '-90%',
        skewX: direction > 0 ? -12 : 12,
        opacity: 0,
      }),
      animate: {
        x: '0%',
        skewX: 0,
        opacity: 1,
      },
      exit: ({ direction }) => ({
        x: direction > 0 ? '-90%' : '90%',
        skewX: direction > 0 ? 12 : -12,
        opacity: 0,
      }),
    },
    transition: { duration: 0.55, ease: [0.25, 1, 0.5, 1] },
  },
  {
    id: 'zoom-pulse',
    name: 'FOCAL ZOOM & DEPTH BLUR',
    code: 'FX_ZOOM_BLUR',
    tagline: 'Depth-of-field focal expansion with subtle blur decay',
    variants: {
      initial: ({ direction }) => ({
        scale: direction > 0 ? 0.72 : 1.25,
        filter: 'blur(8px)',
        opacity: 0,
      }),
      animate: {
        scale: 1,
        filter: 'blur(0px)',
        opacity: 1,
      },
      exit: ({ direction }) => ({
        scale: direction > 0 ? 1.25 : 0.72,
        filter: 'blur(8px)',
        opacity: 0,
      }),
    },
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  {
    id: 'vortex-rotate',
    name: 'CYBER VORTEX SPIN',
    code: 'FX_VORTEX_SPIN',
    tagline: 'Centripetal angular velocity sweep around origin',
    variants: {
      initial: ({ direction }) => ({
        rotate: direction > 0 ? -12 : 12,
        scale: 0.82,
        opacity: 0,
      }),
      animate: {
        rotate: 0,
        scale: 1,
        opacity: 1,
      },
      exit: ({ direction }) => ({
        rotate: direction > 0 ? 12 : -12,
        scale: 0.82,
        opacity: 0,
      }),
    },
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
  },
  {
    id: 'elastic-spring',
    name: 'ELASTIC PHYSICAL SPRING',
    code: 'FX_SPRING_PHYSICS',
    tagline: 'Dynamic spring coefficient physics curve with overshoot',
    variants: {
      initial: ({ direction }) => ({
        x: direction > 0 ? '100%' : '-100%',
        scale: 0.9,
        opacity: 0,
      }),
      animate: {
        x: '0%',
        scale: 1,
        opacity: 1,
      },
      exit: ({ direction }) => ({
        x: direction > 0 ? '-100%' : '100%',
        scale: 0.9,
        opacity: 0,
      }),
    },
    transition: { type: 'spring', stiffness: 300, damping: 22 },
  },
  {
    id: 'glitch-diagonal',
    name: 'BRUTALIST DIAGONAL STEP',
    code: 'FX_STEP_SHIFT',
    tagline: 'Multi-axis step displacement with high contrast exit',
    variants: {
      initial: ({ direction }) => ({
        x: direction > 0 ? '100%' : '-100%',
        y: direction > 0 ? '-15%' : '15%',
        opacity: 0,
      }),
      animate: {
        x: '0%',
        y: '0%',
        opacity: 1,
      },
      exit: ({ direction }) => ({
        x: direction > 0 ? '-100%' : '100%',
        y: direction > 0 ? '15%' : '-15%',
        opacity: 0,
      }),
    },
    transition: { duration: 0.45, ease: 'circOut' },
  },
];

export function getRandomPreset(excludeId?: string): TransitionPreset {
  const filtered = ANIMATION_PRESETS.filter((p) => p.id !== excludeId);
  const randomIndex = Math.floor(Math.random() * filtered.length);
  return filtered[randomIndex] || ANIMATION_PRESETS[0];
}
