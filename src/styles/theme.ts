export type TextColorType = {
  primary: string;
  second: string;
  tertiary: string;
  quaternary: string;
  error: string;
  special: string;
  white: string;
};

export type TitleSizeType = {
  h1: number;
  h2: number;
  h3: number;
  h4: number;
};

export type TextSizeType = {
  mainText: number;
  cardText: number;
  descriptionText: number;
};

export type TextWeightType = {
  bold: number;
  semiBold: number;
};

export type BgColorType = {
  primary: string;
  secondary: string;
  tertiary: string;
  primaryHover: string;
  secondaryDark: string;
};

export type ContainerSizeType = {
  max: number;
  min: number;
};

export type MediaQuaryType = {
  xl: string;
  lg: string;
  md: string;
  sm: string;
  xs: string;
};

export type BorderRadiusType = {
  default: number;
  circle: number;
  round: number;
};

type ThemeType = {
  font: {
    color: TextColorType;
    size: {
      title: TitleSizeType;
      text: TextSizeType;
    };
    weight: TextWeightType;
  };
  bg: {
    color: BgColorType;
  };
  size: {
    container: ContainerSizeType;
    media: MediaQuaryType;
  };
  border: { radius: BorderRadiusType };
};

export const baseTheme: ThemeType = {
  font: {
    color: {
      primary: 'hsl(0, 0%, 75%)',
      second: 'hsl(257, 7%, 63%)',
      tertiary: 'hsl(255, 11%, 22%)',
      quaternary: 'hsl(260, 8%, 14%)',
      error: 'hsl(0, 87%, 67%)',
      special: 'hsl(180, 66%, 49%)',
      white: 'white',
    },
    size: {
      title: {
        h1: 60,
        h2: 30,
        h3: 20,
        h4: 16,
      },
      text: {
        mainText: 18,
        cardText: 14,
        descriptionText: 12,
      },
    },
    weight: {
      bold: 700,
      semiBold: 600,
    },
  },
  bg: {
    color: {
      primary: 'hsl(180, 66%, 49%)',
      primaryHover: 'hsl(179, 56%, 75%)',
      tertiary: 'rgb(240, 241, 246)',
      secondary: 'hsl(257, 27%, 26%)',
      secondaryDark: 'rgb(35, 32, 39)',
    },
  },
  size: {
    container: {
      max: 1440,
      min: 375,
    },
    media: {
      xl: '(max-width: 1600px)',
      lg: '(max-width: 1200px)',
      md: '(max-width: 992px)',
      sm: '(max-width: 768px)',
      xs: '(max-width: 576px)',
    },
  },
  border: {
    radius: {
      default: 5,
      circle: 50,
      round: 10,
    },
  },
};
