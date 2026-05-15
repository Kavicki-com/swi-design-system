import * as react_jsx_runtime from 'react/jsx-runtime';
import React$1, { ReactNode } from 'react';
import * as react_native from 'react-native';
import { ViewStyle, View, PressableProps, TextInputProps, TextInput, StyleProp, ImageSourcePropType, Image as Image$1, TextProps as TextProps$1, Text as Text$1, GestureResponderEvent, ViewProps } from 'react-native';

/**
 * GENERATED FILE — do not edit by hand.
 * Source: references/figma-variables.json (collection ".primitive")
 * Regenerate with: npm run tokens:generate
 */
declare const primitive: {
    readonly size: {
        readonly empty: 0;
        readonly nano: 1;
        readonly micro: 2;
        readonly xs: 4;
        readonly s: 8;
        readonly sm: 12;
        readonly m: 16;
        readonly ml: 20;
        readonly l: 24;
        readonly xl: 28;
        readonly xxl: 32;
        readonly xxxl: 40;
        readonly x4: 48;
        readonly x5: 56;
        readonly x6: 64;
        readonly x7: 72;
        readonly x8: 80;
        readonly x9: 92;
        readonly x10: 104;
    };
    readonly lime: {
        readonly 50: "#EEFAE9";
        readonly 100: "#D4F2C8";
        readonly 200: "#B7E9A4";
        readonly 300: "#98DF7D";
        readonly 400: "#7ED85F";
        readonly 500: "#65D040";
        readonly 600: "#55BF38";
        readonly 700: "#3EAB2E";
        readonly 800: "#239623";
        readonly 900: "#00740E";
    };
    readonly yellow: {
        readonly 50: "#FDF2E0";
        readonly 100: "#FBDEB1";
        readonly 200: "#F9C87E";
        readonly 300: "#F6B24B";
        readonly 400: "#F5A125";
        readonly 500: "#F39200";
        readonly 600: "#EF8600";
        readonly 700: "#E97700";
        readonly 800: "#E36700";
        readonly 900: "#D94D00";
    };
    readonly neutral: {
        readonly 0: "#FAFAFA";
        readonly 50: "#F5F5F5";
        readonly 100: "#DADADA";
        readonly 200: "#BFBFBF";
        readonly 300: "#9F9F9F";
        readonly 400: "#7F7F7F";
        readonly 500: "#3F3F3F";
        readonly 600: "#303030";
        readonly 700: "#222222";
        readonly 800: "#1F1F1F";
        readonly 900: "#171717";
    };
    readonly orange: {
        readonly 50: "#FFF2DF";
        readonly 100: "#FFDEB1";
        readonly 200: "#FFC97E";
        readonly 300: "#FFB34A";
        readonly 400: "#FFA222";
        readonly 500: "#FF9200";
        readonly 600: "#FB8600";
        readonly 700: "#F57600";
        readonly 800: "#EF6500";
        readonly 900: "#E64900";
    };
    readonly red: {
        readonly 50: "#FEECEE";
        readonly 100: "#FEECEE";
        readonly 200: "#FAB3BD";
        readonly 300: "#F78C9C";
        readonly 400: "#F5667A";
        readonly 500: "#F2415A";
        readonly 600: "#E5102E";
        readonly 700: "#AC0C22";
        readonly 800: "#730817";
        readonly 900: "#39040B";
        readonly 950: "#080808";
    };
    readonly green: {
        readonly 50: "#E6F4EB";
        readonly 100: "#CAE8D4";
        readonly 200: "#98D2AC";
        readonly 300: "#62BB81";
        readonly 400: "#41955E";
        readonly 500: "#2A613D";
        readonly 600: "#224E31";
        readonly 700: "#193924";
        readonly 800: "#193924";
        readonly 900: "#193924";
        readonly 950: "#112719";
    };
    readonly blue: {
        readonly 50: "#E2F4F8";
        readonly 100: "#B6E4ED";
        readonly 200: "#8AD2E2";
        readonly 300: "#66C0D8";
        readonly 400: "#50B3D2";
        readonly 500: "#3FA6CD";
        readonly 600: "#3899BF";
        readonly 700: "#2E86AD";
        readonly 800: "#2B759A";
        readonly 900: "#205678";
    };
};

/**
 * GENERATED FILE — do not edit by hand.
 * Source: references/figma-variables.json (collection "tokens")
 * Regenerate with: npm run tokens:generate
 *
 * Components consume ONLY this file (or typography/effects).
 * Never import from primitive.ts inside a component.
 */
declare const semantic: {
    readonly background: "#171717";
    readonly surface: {
        readonly standard: "#1F1F1F";
        readonly medium: "#222222";
        readonly high: "#303030";
        readonly grey: "#9F9F9F";
        readonly disable: "#1F1F1F";
        readonly primary: "#62BB81";
        readonly primaryLight: "#E6F4EB";
        readonly secondary: "#50B3D2";
        readonly secondaryLight: "#E2F4F8";
        readonly accent: "#F5A125";
        readonly error: "#F5667A";
        readonly errorLight: "#FAB3BD";
        readonly errorExtraLight: "#FEECEE";
        readonly danger: "#c0152d";
        readonly success: "#3EAB2E";
        readonly successLight: "#B7E9A4";
        readonly successExtraLight: "#EEFAE9";
        readonly warning: "#EF8600";
        readonly warningLight: "#F9C87E";
        readonly warningExtraLight: "#FDF2E0";
        readonly info: "#3899BF";
        readonly infoLight: "#8AD2E2";
        readonly infoExtraLight: "#E2F4F8";
        readonly hover: "#FAFAFA14";
    };
    readonly content: {
        readonly dark: "#F5F5F5";
        readonly medium: "#9F9F9F";
        readonly light: "#222222";
        readonly primary: "#62BB81";
        readonly primaryLight: "#CAE8D4";
        readonly secondary: "#8AD2E2";
        readonly secondaryLight: "#B6E4ED";
        readonly error: "#F5667A";
        readonly errorLight: "#FAB3BD";
        readonly success: "#65D040";
        readonly successLight: "#B7E9A4";
        readonly warning: "#F39200";
        readonly warningLight: "#F9C87E";
        readonly info: "#3FA6CD";
        readonly infoLight: "#8AD2E2";
        readonly disable: "#303030";
        readonly lightGrey: "#303030";
        readonly hover: "#FAFAFA29";
    };
    readonly border: {
        readonly size: {
            readonly s: 1;
            readonly m: 2;
            readonly l: 4;
        };
        readonly radius: {
            readonly xs: 2;
            readonly s: 4;
            readonly m: 8;
            readonly l: 16;
            readonly pill: 999;
        };
    };
    readonly padding: {
        readonly empty: 0;
        readonly xs: 4;
        readonly s: 8;
        readonly sm: 12;
        readonly m: 16;
        readonly ml: 20;
        readonly l: 24;
        readonly xl: 32;
        readonly xxl: 40;
    };
    readonly gap: {
        readonly empty: 0;
        readonly xs: 4;
        readonly s: 8;
        readonly sm: 12;
        readonly m: 16;
        readonly l: 24;
        readonly xl: 28;
        readonly xxl: 32;
    };
    readonly margin: {
        readonly empty: 0;
        readonly xs: 4;
        readonly s: 8;
        readonly sm: 12;
        readonly m: 16;
        readonly ml: 20;
        readonly l: 24;
        readonly xl: 32;
    };
};

/**
 * GENERATED FILE — do not edit by hand.
 * Source: references/figma-variables.json (collections "typo" + "Typography")
 * Regenerate with: npm run tokens:generate
 */
declare const fontFamily: {
    readonly title: "Montserrat";
    readonly body: "Inter";
};
declare const fontWeight: {
    readonly light: "300";
    readonly regular: "400";
    readonly medium: "500";
    readonly bold: "700";
};
declare const fontSize: {
    readonly s: 8;
    readonly sm: 12;
    readonly m: 14;
    readonly ms: 16;
    readonly ml: 20;
    readonly l: 24;
    readonly xl: 28;
    readonly xxl: 32;
};
declare const typography: {
    readonly title: {
        readonly l: {
            readonly fontFamily: "Montserrat";
            readonly fontWeight: "700";
            readonly fontSize: 32;
        };
        readonly m: {
            readonly fontFamily: "Montserrat";
            readonly fontWeight: "700";
            readonly fontSize: 24;
        };
        readonly s: {
            readonly fontFamily: "Montserrat";
            readonly fontWeight: "700";
            readonly fontSize: 20;
        };
        readonly xs: {
            readonly fontFamily: "Montserrat";
            readonly fontWeight: "700";
            readonly fontSize: 16;
        };
    };
    readonly subtitle: {
        readonly l: {
            readonly fontFamily: "Inter";
            readonly fontWeight: "500";
            readonly fontSize: 24;
        };
        readonly m: {
            readonly fontFamily: "Inter";
            readonly fontWeight: "500";
            readonly fontSize: 16;
        };
        readonly s: {
            readonly fontFamily: "Inter";
            readonly fontWeight: "500";
            readonly fontSize: 12;
        };
    };
    readonly body: {
        readonly l: {
            readonly fontFamily: "Inter";
            readonly fontWeight: "500";
            readonly fontSize: 20;
        };
        readonly m: {
            readonly fontFamily: "Inter";
            readonly fontWeight: "400";
            readonly fontSize: 14;
        };
        readonly s: {
            readonly fontFamily: "Inter";
            readonly fontWeight: "500";
            readonly fontSize: 12;
        };
    };
    readonly caption: {
        readonly s: {
            readonly fontFamily: "Inter";
            readonly fontWeight: "500";
            readonly fontSize: 12;
        };
        readonly xs: {
            readonly fontFamily: "Inter";
            readonly fontWeight: "700";
            readonly fontSize: 8;
        };
    };
};
type TypographyVariant = `title.${keyof typeof typography.title}` | `subtitle.${keyof typeof typography.subtitle}` | `body.${keyof typeof typography.body}` | `caption.${keyof typeof typography.caption}`;

/**
 * GENERATED FILE — do not edit by hand.
 * Source: references/figma-variables.json (collection "Effects")
 * Regenerate with: npm run tokens:generate
 *
 * elevation.negative is INNER_SHADOW: works on web; skipped on mobile.
 */

declare const elevation: {
    readonly sm: ViewStyle;
    readonly md: ViewStyle;
    readonly lg: ViewStyle;
    readonly negative: ViewStyle;
};

declare const theme: {
    readonly typography: {
        readonly title: {
            readonly l: {
                readonly fontFamily: "Montserrat";
                readonly fontWeight: "700";
                readonly fontSize: 32;
            };
            readonly m: {
                readonly fontFamily: "Montserrat";
                readonly fontWeight: "700";
                readonly fontSize: 24;
            };
            readonly s: {
                readonly fontFamily: "Montserrat";
                readonly fontWeight: "700";
                readonly fontSize: 20;
            };
            readonly xs: {
                readonly fontFamily: "Montserrat";
                readonly fontWeight: "700";
                readonly fontSize: 16;
            };
        };
        readonly subtitle: {
            readonly l: {
                readonly fontFamily: "Inter";
                readonly fontWeight: "500";
                readonly fontSize: 24;
            };
            readonly m: {
                readonly fontFamily: "Inter";
                readonly fontWeight: "500";
                readonly fontSize: 16;
            };
            readonly s: {
                readonly fontFamily: "Inter";
                readonly fontWeight: "500";
                readonly fontSize: 12;
            };
        };
        readonly body: {
            readonly l: {
                readonly fontFamily: "Inter";
                readonly fontWeight: "500";
                readonly fontSize: 20;
            };
            readonly m: {
                readonly fontFamily: "Inter";
                readonly fontWeight: "400";
                readonly fontSize: 14;
            };
            readonly s: {
                readonly fontFamily: "Inter";
                readonly fontWeight: "500";
                readonly fontSize: 12;
            };
        };
        readonly caption: {
            readonly s: {
                readonly fontFamily: "Inter";
                readonly fontWeight: "500";
                readonly fontSize: 12;
            };
            readonly xs: {
                readonly fontFamily: "Inter";
                readonly fontWeight: "700";
                readonly fontSize: 8;
            };
        };
    };
    readonly fontFamily: {
        readonly title: "Montserrat";
        readonly body: "Inter";
    };
    readonly fontWeight: {
        readonly light: "300";
        readonly regular: "400";
        readonly medium: "500";
        readonly bold: "700";
    };
    readonly fontSize: {
        readonly s: 8;
        readonly sm: 12;
        readonly m: 14;
        readonly ms: 16;
        readonly ml: 20;
        readonly l: 24;
        readonly xl: 28;
        readonly xxl: 32;
    };
    readonly elevation: {
        readonly sm: react_native.ViewStyle;
        readonly md: react_native.ViewStyle;
        readonly lg: react_native.ViewStyle;
        readonly negative: react_native.ViewStyle;
    };
    readonly background: "#171717";
    readonly surface: {
        readonly standard: "#1F1F1F";
        readonly medium: "#222222";
        readonly high: "#303030";
        readonly grey: "#9F9F9F";
        readonly disable: "#1F1F1F";
        readonly primary: "#62BB81";
        readonly primaryLight: "#E6F4EB";
        readonly secondary: "#50B3D2";
        readonly secondaryLight: "#E2F4F8";
        readonly accent: "#F5A125";
        readonly error: "#F5667A";
        readonly errorLight: "#FAB3BD";
        readonly errorExtraLight: "#FEECEE";
        readonly danger: "#c0152d";
        readonly success: "#3EAB2E";
        readonly successLight: "#B7E9A4";
        readonly successExtraLight: "#EEFAE9";
        readonly warning: "#EF8600";
        readonly warningLight: "#F9C87E";
        readonly warningExtraLight: "#FDF2E0";
        readonly info: "#3899BF";
        readonly infoLight: "#8AD2E2";
        readonly infoExtraLight: "#E2F4F8";
        readonly hover: "#FAFAFA14";
    };
    readonly content: {
        readonly dark: "#F5F5F5";
        readonly medium: "#9F9F9F";
        readonly light: "#222222";
        readonly primary: "#62BB81";
        readonly primaryLight: "#CAE8D4";
        readonly secondary: "#8AD2E2";
        readonly secondaryLight: "#B6E4ED";
        readonly error: "#F5667A";
        readonly errorLight: "#FAB3BD";
        readonly success: "#65D040";
        readonly successLight: "#B7E9A4";
        readonly warning: "#F39200";
        readonly warningLight: "#F9C87E";
        readonly info: "#3FA6CD";
        readonly infoLight: "#8AD2E2";
        readonly disable: "#303030";
        readonly lightGrey: "#303030";
        readonly hover: "#FAFAFA29";
    };
    readonly border: {
        readonly size: {
            readonly s: 1;
            readonly m: 2;
            readonly l: 4;
        };
        readonly radius: {
            readonly xs: 2;
            readonly s: 4;
            readonly m: 8;
            readonly l: 16;
            readonly pill: 999;
        };
    };
    readonly padding: {
        readonly empty: 0;
        readonly xs: 4;
        readonly s: 8;
        readonly sm: 12;
        readonly m: 16;
        readonly ml: 20;
        readonly l: 24;
        readonly xl: 32;
        readonly xxl: 40;
    };
    readonly gap: {
        readonly empty: 0;
        readonly xs: 4;
        readonly s: 8;
        readonly sm: 12;
        readonly m: 16;
        readonly l: 24;
        readonly xl: 28;
        readonly xxl: 32;
    };
    readonly margin: {
        readonly empty: 0;
        readonly xs: 4;
        readonly s: 8;
        readonly sm: 12;
        readonly m: 16;
        readonly ml: 20;
        readonly l: 24;
        readonly xl: 32;
    };
};
type Theme = typeof theme;

interface SwiThemeProviderProps {
    children: React$1.ReactNode;
    theme?: Theme;
}
declare const SwiThemeProvider: ({ children, theme: override }: SwiThemeProviderProps) => react_jsx_runtime.JSX.Element;
declare const useTheme: () => Theme;

interface AccordionProps {
    title: string;
    children?: ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    showIconLeft?: boolean;
    showIconRight?: boolean;
    fullWidth?: boolean;
    disabled?: boolean;
    accessibilityLabel?: string;
    testID?: string;
}

declare const Accordion: React$1.ForwardRefExoticComponent<AccordionProps & React$1.RefAttributes<View>>;

declare const iconPaths: {
    readonly add: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z";
    };
    readonly priority_high: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M480-240q-25 0-42.5-17.5T420-300q0-25 17.5-42.5T480-360q25 0 42.5 17.5T540-300q0 25-17.5 42.5T480-240Zm0-200q-17 0-28.5-11.5T440-480v-200q0-17 11.5-28.5T480-720q17 0 28.5 11.5T520-680v200q0 17-11.5 28.5T480-440Z";
    };
    readonly check_circle: {
        readonly viewBox: "0 0 40 40";
        readonly d: "M17.6666 22.9999L14.0833 19.4166C13.7777 19.111 13.3888 18.9583 12.9166 18.9583C12.4444 18.9583 12.0555 19.111 11.7499 19.4166C11.4444 19.7221 11.2916 20.111 11.2916 20.5833C11.2916 21.0555 11.4444 21.4444 11.7499 21.7499L16.4999 26.4999C16.8333 26.8333 17.2221 26.9999 17.6666 26.9999C18.111 26.9999 18.4999 26.8333 18.8333 26.4999L28.2499 17.0833C28.5555 16.7777 28.7083 16.3888 28.7083 15.9166C28.7083 15.4444 28.5555 15.0555 28.2499 14.7499C27.9444 14.4444 27.5555 14.2916 27.0833 14.2916C26.611 14.2916 26.2221 14.4444 25.9166 14.7499L17.6666 22.9999ZM19.9999 36.6666C17.6944 36.6666 15.5277 36.2288 13.4999 35.3533C11.4721 34.4777 9.70825 33.2905 8.20825 31.7916C6.70825 30.2927 5.52103 28.5288 4.64659 26.4999C3.77214 24.471 3.33437 22.3044 3.33325 19.9999C3.33214 17.6955 3.76992 15.5288 4.64659 13.4999C5.52325 11.471 6.71048 9.70714 8.20825 8.20825C9.70603 6.70936 11.4699 5.52214 13.4999 4.64659C15.5299 3.77103 17.6966 3.33325 19.9999 3.33325C22.3033 3.33325 24.4699 3.77103 26.4999 4.64659C28.5299 5.52214 30.2938 6.70936 31.7916 8.20825C33.2894 9.70714 34.4771 11.471 35.3549 13.4999C36.2327 15.5288 36.6699 17.6955 36.6666 19.9999C36.6633 22.3044 36.2255 24.471 35.3533 26.4999C34.481 28.5288 33.2938 30.2927 31.7916 31.7916C30.2894 33.2905 28.5255 34.4783 26.4999 35.3549C24.4744 36.2316 22.3077 36.6688 19.9999 36.6666ZM19.9999 33.3333C23.7221 33.3333 26.8749 32.0416 29.4583 29.4583C32.0416 26.8749 33.3333 23.7221 33.3333 19.9999C33.3333 16.2777 32.0416 13.1249 29.4583 10.5416C26.8749 7.95825 23.7221 6.66659 19.9999 6.66659C16.2777 6.66659 13.1249 7.95825 10.5416 10.5416C7.95825 13.1249 6.66659 16.2777 6.66659 19.9999C6.66659 23.7221 7.95825 26.8749 10.5416 29.4583C13.1249 32.0416 16.2777 33.3333 19.9999 33.3333Z";
    };
    readonly error: {
        readonly viewBox: "0 0 40 40";
        readonly d: "M19.9999 28.3333C20.4721 28.3333 20.8683 28.1733 21.1883 27.8533C21.5083 27.5333 21.6677 27.1377 21.6666 26.6666C21.6655 26.1955 21.5055 25.7999 21.1866 25.4799C20.8677 25.1599 20.4721 24.9999 19.9999 24.9999C19.5277 24.9999 19.1321 25.1599 18.8133 25.4799C18.4944 25.7999 18.3344 26.1955 18.3333 26.6666C18.3321 27.1377 18.4921 27.5338 18.8133 27.8549C19.1344 28.176 19.5299 28.3355 19.9999 28.3333ZM19.9999 21.6666C20.4721 21.6666 20.8683 21.5066 21.1883 21.1866C21.5083 20.8666 21.6677 20.471 21.6666 19.9999V13.3333C21.6666 12.861 21.5066 12.4655 21.1866 12.1466C20.8666 11.8277 20.471 11.6677 19.9999 11.6666C19.5288 11.6655 19.1333 11.8255 18.8133 12.1466C18.4933 12.4677 18.3333 12.8633 18.3333 13.3333V19.9999C18.3333 20.4721 18.4933 20.8683 18.8133 21.1883C19.1333 21.5083 19.5288 21.6677 19.9999 21.6666ZM19.9999 36.6666C17.6944 36.6666 15.5277 36.2288 13.4999 35.3533C11.4721 34.4777 9.70825 33.2905 8.20825 31.7916C6.70825 30.2927 5.52103 28.5288 4.64659 26.4999C3.77214 24.471 3.33437 22.3044 3.33325 19.9999C3.33214 17.6955 3.76992 15.5288 4.64659 13.4999C5.52325 11.471 6.71048 9.70714 8.20825 8.20825C9.70603 6.70936 11.4699 5.52214 13.4999 4.64659C15.5299 3.77103 17.6966 3.33325 19.9999 3.33325C22.3033 3.33325 24.4699 3.77103 26.4999 4.64659C28.5299 5.52214 30.2938 6.70936 31.7916 8.20825C33.2894 9.70714 34.4771 11.471 35.3549 13.4999C36.2327 15.5288 36.6699 17.6955 36.6666 19.9999C36.6633 22.3044 36.2255 24.471 35.3533 26.4999C34.481 28.5288 33.2938 30.2927 31.7916 31.7916C30.2894 33.2905 28.5255 34.4783 26.4999 35.3549C24.4744 36.2316 22.3077 36.6688 19.9999 36.6666ZM19.9999 33.3333C23.7221 33.3333 26.8749 32.0416 29.4583 29.4583C32.0416 26.8749 33.3333 23.7221 33.3333 19.9999C33.3333 16.2777 32.0416 13.1249 29.4583 10.5416C26.8749 7.95825 23.7221 6.66659 19.9999 6.66659C16.2777 6.66659 13.1249 7.95825 10.5416 10.5416C7.95825 13.1249 6.66659 16.2777 6.66659 19.9999C6.66659 23.7221 7.95825 26.8749 10.5416 29.4583C13.1249 32.0416 16.2777 33.3333 19.9999 33.3333Z";
    };
    readonly mode_heat: {
        readonly viewBox: "0 0 16 18";
        readonly d: "M0 11C0 9.25 0.416667 7.69167 1.25 6.325C2.08333 4.95833 3 3.80833 4 2.875C5 1.94167 5.91667 1.22917 6.75 0.7375L8 0V3.3C8 3.91667 8.20833 4.40417 8.625 4.7625C9.04167 5.12083 9.50833 5.3 10.025 5.3C10.3083 5.3 10.5792 5.24167 10.8375 5.125C11.0958 5.00833 11.3333 4.81667 11.55 4.55L12 4C13.2 4.7 14.1667 5.67083 14.9 6.9125C15.6333 8.15417 16 9.51667 16 11C16 12.4667 15.6417 13.8042 14.925 15.0125C14.2083 16.2208 13.2667 17.175 12.1 17.875C12.3833 17.475 12.6042 17.0375 12.7625 16.5625C12.9208 16.0875 13 15.5833 13 15.05C13 14.3833 12.875 13.7542 12.625 13.1625C12.375 12.5708 12.0167 12.0417 11.55 11.575L8 8.1L4.475 11.575C3.99167 12.0583 3.625 12.5917 3.375 13.175C3.125 13.7583 3 14.3833 3 15.05C3 15.5833 3.07917 16.0875 3.2375 16.5625C3.39583 17.0375 3.61667 17.475 3.9 17.875C2.73333 17.175 1.79167 16.2208 1.075 15.0125C0.358333 13.8042 0 12.4667 0 11ZM8 10.9L10.125 12.975C10.4083 13.2583 10.625 13.575 10.775 13.925C10.925 14.275 11 14.65 11 15.05C11 15.8667 10.7083 16.5625 10.125 17.1375C9.54167 17.7125 8.83333 18 8 18C7.16667 18 6.45833 17.7125 5.875 17.1375C5.29167 16.5625 5 15.8667 5 15.05C5 14.6667 5.075 14.2958 5.225 13.9375C5.375 13.5792 5.59167 13.2583 5.875 12.975L8 10.9Z";
    };
    readonly wb_twilight: {
        readonly viewBox: "0 0 20 16";
        readonly d: "M16.35 6.1L14.95 4.65L17.1 2.55L18.5 3.95L16.35 6.1ZM0 16V14H20V16H0ZM9 3V0H11V3H9ZM3.65 6.05L1.55 3.9L2.95 2.5L5.1 4.65L3.65 6.05ZM5.425 10H14.575C14.1917 9.1 13.5917 8.375 12.775 7.825C11.9583 7.275 11.0333 7 10 7C8.96667 7 8.04167 7.275 7.225 7.825C6.40833 8.375 5.80833 9.1 5.425 10ZM3 12C3 10.05 3.67917 8.39583 5.0375 7.0375C6.39583 5.67917 8.05 5 10 5C11.95 5 13.6042 5.67917 14.9625 7.0375C16.3208 8.39583 17 10.05 17 12H3Z";
    };
    readonly turn_right: {
        readonly viewBox: "0 0 14 14";
        readonly d: "M0 14V5C0 4.45 0.195833 3.97917 0.5875 3.5875C0.979167 3.19583 1.45 3 2 3H10.2L8.6 1.4L10 0L14 4L10 8L8.6 6.6L10.2 5H2V14H0Z";
    };
    readonly add_a_photo: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M440-440ZM120-120q-33 0-56.5-23.5T40-200v-480q0-33 23.5-56.5T120-760h126l74-80h240v80H355l-73 80H120v480h640v-360h80v360q0 33-23.5 56.5T760-120H120Zm640-560v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM440-260q75 0 127.5-52.5T620-440q0-75-52.5-127.5T440-620q-75 0-127.5 52.5T260-440q0 75 52.5 127.5T440-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Z";
    };
    readonly assignment: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560h-80v120H280v-120h-80v560Zm280-560q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760ZM360-280h240v-80H360v80Zm0-160h240v-80H360v80Zm0-160h240v-80H360v80Zm120 320Z";
    };
    readonly build: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M686-132 444-376q-20 8-40.5 12t-43.5 4q-100 0-170-70t-70-170q0-36 10-68.5t28-61.5l146 146 72-72-146-146q29-18 61.5-28t68.5-10q100 0 170 70t70 170q0 23-4 43.5T584-516l244 242q12 12 12 29t-12 29l-84 84q-12 12-29 12t-29-12Zm29-85 27-27-256-256q18-20 26-46.5t8-53.5q0-60-38.5-104.5T386-758l74 74q12 12 12 28t-12 28L332-500q-12 12-28 12t-28-12l-74-74q9 57 53.5 95.5T360-440q26 0 52-8t47-25l256 256ZM472-488Z";
    };
    readonly business_center: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm240-600h160v-80H400v80Zm400 360H600v80H360v-80H160v160h640v-160Zm-360 0h80v-80h-80v80Zm-280-80h200v-80h240v80h200v-200H160v200Zm320 40Z";
    };
    /**
     * Filled briefcase variant. Custom path exported from Figma (Dashboard
     * 245:23280, work-action button 304:2685). Proportions differ from the
     * Material Symbols `business_center` outline above — keep both available.
     */
    readonly business_center_filled: {
        readonly viewBox: "0 0 20 19";
        readonly d: "M2 19C1.45 19 0.979167 18.8042 0.5875 18.4125C0.195833 18.0208 0 17.55 0 17V13H7V15H13V13H20V17C20 17.55 19.8042 18.0208 19.4125 18.4125C19.0208 18.8042 18.55 19 18 19H2ZM9 13V11H11V13H9ZM0 11V6C0 5.45 0.195833 4.97917 0.5875 4.5875C0.979167 4.19583 1.45 4 2 4H6V2C6 1.45 6.19583 0.979167 6.5875 0.5875C6.97917 0.195833 7.45 0 8 0H12C12.55 0 13.0208 0.195833 13.4125 0.5875C13.8042 0.979167 14 1.45 14 2V4H18C18.55 4 19.0208 4.19583 19.4125 4.5875C19.8042 4.97917 20 5.45 20 6V11H13V9H7V11H0ZM8 4H12V2H8V4Z";
    };
    readonly vital_signs: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M360-160q-19 0-34-11t-22-28l-92-241H40v-80h228l92 244 184-485q7-17 22-28t34-11q19 0 34 11t22 28l92 241h172v80H692l-92-244-184 485q-7 17-22 28t-34 11Z";
    };
    readonly cloud_upload: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H520q-33 0-56.5-23.5T440-240v-206l-64 62-56-56 160-160 160 160-56 56-64-62v206h220q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h100v80H260Zm220-280Z";
    };
    readonly close: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z";
    };
    readonly keyboard_arrow_down: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z";
    };
    readonly more_vert: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z";
    };
    readonly search: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z";
    };
    readonly favorite: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z";
    };
    /**
     * Two-footprint pictogram (steps tracking) — Figma export from the mobile
     * my-stats screen (`I342:9860;262:28129;262:28199`). Drawn by the
     * designer; the original SVG fill is a linear gradient (#EF8600 → #F9C87E)
     * which the Icon primitive flattens to a single themable color.
     * Source: src/icons/raw/figma/footprint.svg.
     */
    /**
     * Two-footprint pictogram (steps tracking) — Figma export from the mobile
     * my-stats screen (`I342:9860;262:28129;262:28199`). Drawn by the
     * designer; the original SVG fill is a linear gradient (#EF8600 → #F9C87E)
     * which the Icon primitive flattens to a single themable color.
     * Source: src/icons/raw/figma/footprint.svg.
     */
    readonly footprint: {
        readonly viewBox: "0 0 20 22";
        readonly d: "M4.5 2C3.75 2 3.14583 2.41667 2.6875 3.25C2.22917 4.08333 2 5 2 6C2 7.05 2.14583 7.97917 2.4375 8.7875C2.72917 9.59583 3 10.2 3.25 10.6L6 10.05C6.21667 9.51667 6.4375 8.90833 6.6625 8.225C6.8875 7.54167 7 6.8 7 6C7 5 6.77083 4.08333 6.3125 3.25C5.85417 2.41667 5.25 2 4.5 2ZM5.875 15C6.19167 15 6.45833 14.8833 6.675 14.65C6.89167 14.4167 7 14.0917 7 13.675C7 13.3917 6.93333 13.1 6.8 12.8C6.66667 12.5 6.53333 12.2333 6.4 12L4 12.5C4 13.1667 4.14583 13.75 4.4375 14.25C4.72917 14.75 5.20833 15 5.875 15ZM15.5 7C14.75 7 14.1458 7.41667 13.6875 8.25C13.2292 9.08333 13 10 13 11C13 11.8 13.1125 12.5375 13.3375 13.2125C13.5625 13.8875 13.7833 14.5 14 15.05L16.75 15.6C17 15.2 17.2708 14.6 17.5625 13.8C17.8542 13 18 12.0667 18 11C18 10 17.7708 9.08333 17.3125 8.25C16.8542 7.41667 16.25 7 15.5 7ZM14.125 20C14.7917 20 15.2708 19.75 15.5625 19.25C15.8542 18.75 16 18.1667 16 17.5L13.6 17C13.4667 17.2333 13.3333 17.5 13.2 17.8C13.0667 18.1 13 18.3917 13 18.675C13 19.0083 13.1042 19.3125 13.3125 19.5875C13.5208 19.8625 13.7917 20 14.125 20ZM5.875 17C4.59167 17 3.61667 16.525 2.95 15.575C2.28333 14.625 1.96667 13.5583 2 12.375L1.55 11.7C1.36667 11.4167 1.0625 10.775 0.6375 9.775C0.2125 8.775 0 7.51667 0 6C0 4.28333 0.425 2.85417 1.275 1.7125C2.125 0.570833 3.2 0 4.5 0C5.91667 0 7.02083 0.629167 7.8125 1.8875C8.60417 3.14583 9 4.51667 9 6C9 6.96667 8.86667 7.85833 8.6 8.675C8.33333 9.49167 8.1 10.15 7.9 10.65L8.1 10.975C8.23333 11.2083 8.41667 11.5792 8.65 12.0875C8.88333 12.5958 9 13.125 9 13.675C9 14.625 8.70417 15.4167 8.1125 16.05C7.52083 16.6833 6.775 17 5.875 17ZM14.125 22C13.225 22 12.4792 21.6833 11.8875 21.05C11.2958 20.4167 11 19.625 11 18.675C11 18.125 11.1167 17.5958 11.35 17.0875C11.5833 16.5792 11.7667 16.2083 11.9 15.975L12.1 15.65C11.9 15.15 11.6667 14.4917 11.4 13.675C11.1333 12.8583 11 11.9667 11 11C11 9.51667 11.3958 8.14583 12.1875 6.8875C12.9792 5.62917 14.0833 5 15.5 5C16.8 5 17.875 5.57083 18.725 6.7125C19.575 7.85417 20 9.28333 20 11C20 12.5167 19.7875 13.7708 19.3625 14.7625C18.9375 15.7542 18.6333 16.3917 18.45 16.675L18 17.375C18.0167 18.5583 17.6958 19.625 17.0375 20.575C16.3792 21.525 15.4083 22 14.125 22Z";
    };
    readonly monitor_heart: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M80-600v-120q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v120h-80v-120H160v120H80Zm80 440q-33 0-56.5-23.5T80-240v-120h80v120h640v-120h80v120q0 33-23.5 56.5T800-160H160Zm240-120q11 0 21-5.5t15-16.5l124-248 44 88q5 11 15 16.5t21 5.5h240v-80H665l-69-138q-5-11-15-15.5t-21-4.5q-11 0-21 4.5T524-658L400-410l-44-88q-5-11-15-16.5t-21-5.5H80v80h215l69 138q5 11 15 16.5t21 5.5Zm80-200Z";
    };
    readonly sunny: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M440-760v-160h80v160h-80Zm266 110-55-55 112-115 56 57-113 113Zm54 210v-80h160v80H760ZM440-40v-160h80v160h-80ZM254-652 140-763l57-56 113 113-56 54Zm508 512L651-255l54-54 114 110-57 59ZM40-440v-80h160v80H40Zm157 300-56-57 112-112 29 27 29 28-114 114Zm283-100q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z";
    };
    readonly rainy: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M558-84q-15 8-30.5 2.5T504-102l-60-120q-8-15-2.5-30.5T462-276q15-8 30.5-2.5T516-258l60 120q8 15 2.5 30.5T558-84Zm240 0q-15 8-30.5 2.5T744-102l-60-120q-8-15-2.5-30.5T702-276q15-8 30.5-2.5T756-258l60 120q8 15 2.5 30.5T798-84Zm-480 0q-15 8-30.5 2.5T264-102l-60-120q-8-15-2.5-30.5T222-276q15-8 30.5-2.5T276-258l60 120q8 15 2.5 30.5T318-84Zm-18-236q-91 0-155.5-64.5T80-540q0-83 55-145t136-73q32-57 87.5-89.5T480-880q90 0 156.5 57.5T717-679q69 6 116 57t47 122q0 75-52.5 127.5T700-320H300Zm0-80h400q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-40q0-66-47-113t-113-47q-48 0-87.5 26T333-704l-10 24h-25q-57 2-97.5 42.5T160-540q0 58 41 99t99 41Zm180-200Z";
    };
    readonly partly_cloudy_day: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M440-760v-160h80v160h-80Zm266 110-56-56 113-114 56 57-113 113Zm54 210v-80h160v80H760Zm3 299L650-254l56-56 114 112-57 57ZM254-650 141-763l57-57 112 114-56 56Zm-14 450h180q25 0 42.5-17.5T480-260q0-25-17-42.5T421-320h-51l-20-48q-14-33-44-52.5T240-440q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T40-320q0-83 58.5-141.5T240-520q60 0 109.5 32.5T423-400q58 0 97.5 43T560-254q-2 57-42.5 95.5T420-120H240Zm320-134q-5-20-10-39t-10-39q45-19 72.5-59t27.5-89q0-66-47-113t-113-47q-60 0-105 39t-53 99q-20-5-41-9t-41-9q14-88 82.5-144T480-720q100 0 170 70t70 170q0 77-44 138.5T560-254Zm-79-226Z";
    };
    readonly account_circle: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z";
    };
    readonly location_on: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z";
    };
    readonly av_timer: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M480-120q-74 0-139.5-28.5T226-226q-49-49-77.5-114.5T120-480q0-44 10-85.5t29-78q19-36.5 45.5-68T264-768l272 272-56 56-216-216q-30 36-47 80.5T200-480q0 116 82 198t198 82q116 0 198-82t82-198q0-107-68.5-184.5T520-756v76h-80v-160h40q74 0 139.5 28.5T734-734q49 49 77.5 114.5T840-480q0 74-28.5 139.5T734-226q-49 49-114.5 77.5T480-120ZM280-440q-17 0-28.5-11.5T240-480q0-17 11.5-28.5T280-520q17 0 28.5 11.5T320-480q0 17-11.5 28.5T280-440Zm200 200q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm200-200q-17 0-28.5-11.5T640-480q0-17 11.5-28.5T680-520q17 0 28.5 11.5T720-480q0 17-11.5 28.5T680-440Z";
    };
    readonly cognition: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M491-339q70 0 119-45t49-109q0-57-36.5-96.5T534-629q-47 0-79.5 30T422-525q0 19 7.5 37t21.5 33l57-57q-3-2-4.5-5t-1.5-7q0-11 9-17.5t23-6.5q20 0 33 16.5t13 39.5q0 31-25.5 52.5T492-418q-47 0-79.5-38T380-549q0-29 11-55.5t31-46.5l-57-57q-32 31-49 72t-17 86q0 88 56 149.5T491-339ZM240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l52 205q5 19-7 34.5T840-360h-80v120q0 33-23.5 56.5T680-160h-80v80h-80v-160h160v-200h108l-38-155q-23-91-98-148t-172-57q-116 0-198 81t-82 197q0 60 24.5 114t69.5 96l26 24v208h-80Zm254-360Z";
    };
    readonly chat_bubble: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z";
    };
    readonly delete_icon: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z";
    };
    readonly directions_walk: {
        readonly viewBox: "0 0 13 22";
        readonly d: "M1 21.5L3.8 7.4L2 8.1V11.5H0V6.8L5.05 4.65C5.28333 4.55 5.52917 4.49167 5.7875 4.475C6.04583 4.45833 6.29167 4.49167 6.525 4.575C6.75833 4.65833 6.97917 4.775 7.1875 4.925C7.39583 5.075 7.56667 5.26667 7.7 5.5L8.7 7.1C9.13333 7.8 9.72083 8.375 10.4625 8.825C11.2042 9.275 12.05 9.5 13 9.5V11.5C11.8333 11.5 10.7917 11.2583 9.875 10.775C8.95833 10.2917 8.175 9.675 7.525 8.925L6.9 12L9 14V21.5H7V15L4.9 13.4L3.1 21.5H1ZM6.0875 3.4125C5.69583 3.02083 5.5 2.55 5.5 2C5.5 1.45 5.69583 0.979167 6.0875 0.5875C6.47917 0.195833 6.95 0 7.5 0C8.05 0 8.52083 0.195833 8.9125 0.5875C9.30417 0.979167 9.5 1.45 9.5 2C9.5 2.55 9.30417 3.02083 8.9125 3.4125C8.52083 3.80417 8.05 4 7.5 4C6.95 4 6.47917 3.80417 6.0875 3.4125Z";
    };
    readonly warning: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M40-120l440-760 440 760H40Zm440-120q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Z";
    };
    readonly humidity_mid: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100ZM240-416h480q0-47-18-89.5T650-580L480-748 310-580q-34 32-52 74.5T240-416Z";
    };
    readonly keyboard_arrow_up: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z";
    };
    readonly person_apron: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17-62.5t47-43.5q60-30 124.5-46T480-440q67 0 131.5 16T736-378q30 15 47 43.5t17 62.5v112H160Zm320-400q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm160 228v92h80v-32q0-11-5-20t-15-14q-14-8-29.5-14.5T640-332Zm-240-21v53h160v-53q-20-4-40-5.5t-40-1.5q-20 0-40 1.5t-40 5.5ZM240-240h80v-92q-15 5-30.5 11.5T260-306q-10 5-15 14t-5 20v32Zm400 0H320h320ZM480-640Z";
    };
    readonly video_camera_back: {
        readonly viewBox: "0 0 20 16";
        readonly d: "M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H14C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2V6.5L20 2.5V13.5L16 9.5V14C16 14.55 15.8042 15.0208 15.4125 15.4125C15.0208 15.8042 14.55 16 14 16H2Z";
    };
    readonly home: {
        readonly viewBox: "0 0 29 26";
        readonly d: "M14.1429 0C14.1429 0 5.39359 7.55284 0.504641 11.6429C0.349221 11.7784 0.223992 11.945 0.137061 12.132C0.0501303 12.319 0.0034356 12.5221 0 12.7283C0 13.1048 0.149576 13.466 0.415823 13.7322C0.682069 13.9984 1.04318 14.148 1.41971 14.148H4.24234V24.0485C4.24234 24.4251 4.39192 24.7862 4.65816 25.0524C4.92441 25.3187 5.28552 25.4682 5.66205 25.4682H9.90052C10.277 25.4682 10.6382 25.3187 10.9044 25.0524C11.1706 24.7862 11.3202 24.4251 11.3202 24.0485V18.3865H16.9719V24.0434C16.9719 24.4199 17.1215 24.781 17.3878 25.0473C17.654 25.3135 18.0151 25.4631 18.3917 25.4631H22.634C23.0105 25.4631 23.3716 25.3135 23.6379 25.0473C23.9041 24.781 24.0537 24.4199 24.0537 24.0434V14.1429H26.8712C27.2477 14.1429 27.6088 13.9933 27.8751 13.727C28.1413 13.4608 28.2909 13.0997 28.2909 12.7232C28.2889 12.5127 28.2391 12.3056 28.1452 12.1173C28.0513 11.929 27.9157 11.7645 27.7488 11.6364C22.8895 7.55284 14.1429 0 14.1429 0Z";
    };
    readonly manage_accounts: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-8 18-13.5 37.5T404-360h-4q-71 0-127.5 18T180-306q-9 5-14.5 14t-5.5 20v32h252q6 21 16 41.5t22 38.5H80Zm560 40-12-60q-12-5-22.5-10.5T584-204l-58 18-40-68 46-40q-2-14-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T628-460l12-60h80l12 60q12 5 22.5 11t21.5 15l58-20 40 70-46 40q2 12 2 25t-2 25l46 40-40 68-58-18q-11 8-21.5 13.5T732-180l-12 60h-80Zm40-120q33 0 56.5-23.5T760-320q0-33-23.5-56.5T680-400q-33 0-56.5 23.5T600-320q0 33 23.5 56.5T680-240ZM400-560q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm12 400Z";
    };
    readonly badge: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M160-80q-33 0-56.5-23.5T80-160v-440q0-33 23.5-56.5T160-680h200v-120q0-33 23.5-56.5T440-880h80q33 0 56.5 23.5T600-800v120h200q33 0 56.5 23.5T880-600v440q0 33-23.5 56.5T800-80H160Zm0-80h640v-440H600q0 33-23.5 56.5T520-520h-80q-33 0-56.5-23.5T360-600H160v440Zm80-80h240v-18q0-17-9.5-31.5T444-312q-20-9-40.5-13.5T360-330q-23 0-43.5 4.5T276-312q-17 8-26.5 22.5T240-258v18Zm320-60h160v-60H560v60Zm-200-60q25 0 42.5-17.5T420-420q0-25-17.5-42.5T360-480q-25 0-42.5 17.5T300-420q0 25 17.5 42.5T360-360Zm200-60h160v-60H560v60ZM440-600h80v-200h-80v200Zm40 220Z";
    };
    readonly desktop_windows: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M320-120v-80h80v-80H160q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280H560v80h80v80H320ZM160-360h640v-400H160v400Zm0 0v-400 400Z";
    };
    readonly monitoring: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z";
    };
    readonly notifications: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z";
    };
    readonly settings: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z";
    };
    readonly health_activity: {
        readonly viewBox: "0 0 37 33";
        readonly d: "M22.7711 32.8551C21.8436 32.8551 21.0202 32.2617 20.727 31.3818L13.2558 8.96842L10.5423 17.1089C10.249 17.9888 9.42563 18.5823 8.49819 18.5823H2.15469C0.964681 18.5823 0 17.6176 0 16.4276C0 15.2376 0.964681 14.2729 2.15469 14.2729H6.94518L11.2117 1.47332C11.505 0.593468 12.3284 0 13.2558 0C14.1833 0 15.0066 0.593468 15.2999 1.47332L22.7711 23.8867L25.4846 15.7462C25.7779 14.8663 26.6013 14.2729 27.5287 14.2729H33.8722C35.0622 14.2729 36.0269 15.2376 36.0269 16.4276C36.0269 17.6176 35.0622 18.5823 33.8722 18.5823H29.0817L24.8152 31.3818C24.5219 32.2617 23.6985 32.8551 22.7711 32.8551Z";
    };
    readonly local_fire_department: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M240-400q0 52 21 98.5t60 81.5q-1-5-1-9v-9q0-32 12-60t35-51l113-111 113 111q23 23 35 51t12 60v9q0 4-1 9 39-35 60-81.5t21-98.5q0-50-18.5-94.5T648-574q-20 13-42 19.5t-45 6.5q-62 0-107.5-41T401-690q-39 33-69 68.5t-50.5 72Q261-513 250.5-475T240-400Zm240 52-57 56q-11 11-17 25t-6 29q0 32 23.5 55t56.5 23q33 0 56.5-23t23.5-55q0-16-6-29.5T537-292l-57-56Zm0-492v132q0 34 23.5 57t57.5 23q18 0 33.5-7.5T622-658l18-22q74 42 117 117t43 163q0 134-93 227T480-80q-134 0-227-93t-93-227q0-129 86.5-245T480-840Z";
    };
    readonly hand: {
        readonly viewBox: "0 0 18.1307 22";
        readonly d: "M17.7199 10.7783C17.1829 10.2412 16.1983 10.4797 15.5419 11.4694C12.827 14.627 12.6581 15.5343 12.652 11.8562C12.6506 11.0368 12.7224 10.2151 12.8094 9.40019C13.0236 7.39834 13.2395 6.62392 13.4945 4.62616C13.5827 3.93487 14.294 0.439407 12.6265 1.47518C12.0255 1.84843 11.7069 2.57055 11.4907 3.2129C11.0929 4.39402 10.6159 8.14163 10.13 9.24825C9.89279 9.78907 9.58103 9.77447 9.53063 9.10187C9.418 7.59848 9.18747 3.87862 9.05614 2.4582C8.70918 -1.2935 6.90367 0.0633752 6.90367 1.23486C6.90367 2.29283 6.91404 3.36892 6.98782 4.41842C7.07766 5.69553 7.17203 6.98563 7.09183 8.26581C7.07883 8.47384 7.04786 9.82092 6.61967 9.5641C6.43414 9.45278 5.77981 4.40425 5.64395 2.83263C5.52445 1.44859 3.71499 1.09345 3.79783 3.81142C3.87993 6.50836 4.5344 10.6013 4.22864 10.6488C3.76379 10.721 3.32961 9.51574 2.86111 8.6563C2.37901 7.77144 1.92395 6.63371 0.885843 6.26878C-0.527418 5.77208 0.0949197 7.71374 0.422304 8.30715C0.815867 9.02036 1.71431 11.363 2.43614 13.6566C3.00559 15.4664 2.29852 15.6253 3.16176 18.2606C3.49645 19.2819 4.53557 21.2021 5.52284 21.6561C7.03062 22.3498 8.81422 21.7907 10.4015 21.7238C11.1776 21.6909 12.0144 21.6892 12.7212 21.3226C13.4163 20.9621 13.8132 20.2901 14.1257 19.5997C14.4464 18.891 14.8558 16.0886 17.332 13.6566C18.2867 12.5981 18.3459 11.166 17.7199 10.7783Z";
    };
    readonly attach_file: {
        readonly viewBox: "0 0 12.5 20";
        readonly d: "M12.5 13.75C12.5 15.4833 11.8917 16.9583 10.675 18.175C9.45833 19.3917 7.98333 20 6.25 20C4.51667 20 3.04167 19.3917 1.825 18.175C0.608333 16.9583 0 15.4833 0 13.75V4.5C0 3.25 0.4375 2.1875 1.3125 1.3125C2.1875 0.4375 3.25 0 4.5 0C5.75 0 6.8125 0.4375 7.6875 1.3125C8.5625 2.1875 9 3.25 9 4.5V13.25C9 14.0167 8.73333 14.6667 8.2 15.2C7.66667 15.7333 7.01667 16 6.25 16C5.48333 16 4.83333 15.7333 4.3 15.2C3.76667 14.6667 3.5 14.0167 3.5 13.25V4H5.5V13.25C5.5 13.4667 5.57083 13.6458 5.7125 13.7875C5.85417 13.9292 6.03333 14 6.25 14C6.46667 14 6.64583 13.9292 6.7875 13.7875C6.92917 13.6458 7 13.4667 7 13.25V4.5C6.98333 3.8 6.7375 3.20833 6.2625 2.725C5.7875 2.24167 5.2 2 4.5 2C3.8 2 3.20833 2.24167 2.725 2.725C2.24167 3.20833 2 3.8 2 4.5V13.75C1.98333 14.9333 2.39167 15.9375 3.225 16.7625C4.05833 17.5875 5.06667 18 6.25 18C7.41667 18 8.40833 17.5875 9.225 16.7625C10.0417 15.9375 10.4667 14.9333 10.5 13.75V4H12.5V13.75Z";
    };
    readonly send: {
        readonly viewBox: "0 0 19 16";
        readonly d: "M0 16V0L19 8L0 16ZM2 13L13.85 8L2 3V6.5L8 8L2 9.5V13Z";
    };
    readonly swi_logo_complete: {
        readonly viewBox: "0 0 200 61";
        readonly fillRule: "evenodd";
        readonly d: "M96.1733 17.3752C97.3168 17.3782 98.4126 17.8338 99.2212 18.6424C100.03 19.451 100.485 20.5468 100.488 21.6903V45.4786C100.485 46.6221 100.03 47.7179 99.2212 48.5264C98.4126 49.335 97.3168 49.7906 96.1733 49.7937C95.0298 49.7906 93.934 49.335 93.1254 48.5264C92.3169 47.7179 91.8613 46.6221 91.8582 45.4786V21.6903C91.8613 20.5468 92.3169 19.451 93.1254 18.6424C93.934 17.8338 95.0298 17.3782 96.1733 17.3752ZM108.544 21.8971C108.28 21.8984 108.017 21.8598 107.764 21.7825C107.518 21.7071 107.288 21.5902 107.082 21.4369C106.873 21.2799 106.692 21.09 106.544 20.8745C106.383 20.6368 106.26 20.3751 106.181 20.0991L107.306 19.6514C107.378 19.9498 107.528 20.2238 107.741 20.4447C107.848 20.5503 107.975 20.6326 108.115 20.6867C108.256 20.7408 108.405 20.7654 108.555 20.759C108.677 20.7595 108.797 20.7432 108.914 20.7107C109.024 20.6804 109.128 20.6326 109.223 20.5692C109.313 20.5091 109.387 20.4287 109.44 20.3346C109.495 20.2341 109.522 20.1212 109.52 20.0069C109.522 19.8975 109.5 19.7889 109.458 19.6881C109.41 19.5836 109.339 19.4917 109.249 19.4194C109.133 19.3244 109.004 19.2441 108.868 19.1804C108.679 19.0902 108.485 19.0103 108.288 18.9413L107.898 18.7998C107.718 18.7368 107.545 18.6568 107.38 18.5607C107.207 18.461 107.047 18.3387 106.906 18.1972C106.761 18.0517 106.643 17.8823 106.556 17.6966C106.462 17.4927 106.415 17.2702 106.419 17.0456C106.417 16.8059 106.467 16.5686 106.565 16.3499C106.663 16.134 106.805 15.9409 106.981 15.7831C107.17 15.6153 107.39 15.4857 107.628 15.4016C107.897 15.3072 108.18 15.2608 108.465 15.2646C108.747 15.2587 109.027 15.3024 109.293 15.3935C109.508 15.4689 109.709 15.5797 109.887 15.7213C110.041 15.8452 110.174 15.9934 110.281 16.16C110.372 16.3 110.447 16.4503 110.503 16.6078L109.448 17.051C109.384 16.8661 109.273 16.7013 109.125 16.5728C108.945 16.4231 108.716 16.3472 108.482 16.3606C108.253 16.351 108.027 16.4137 107.836 16.5397C107.756 16.5904 107.691 16.6605 107.646 16.7433C107.601 16.8262 107.578 16.9191 107.579 17.0134C107.579 17.1077 107.602 17.2005 107.645 17.2843C107.688 17.3682 107.75 17.4407 107.827 17.496C108.067 17.6665 108.333 17.7965 108.615 17.8811L109.014 18.0136C109.254 18.0961 109.487 18.1986 109.71 18.3198C109.909 18.4282 110.09 18.5672 110.247 18.7317C110.396 18.8894 110.514 19.0746 110.593 19.2771C110.676 19.5024 110.717 19.7414 110.713 19.9818C110.721 20.2792 110.652 20.5738 110.513 20.8369C110.387 21.0677 110.214 21.2687 110.003 21.4261C109.792 21.5818 109.555 21.6989 109.303 21.7718C109.056 21.8464 108.799 21.885 108.541 21.8864L108.544 21.8971ZM116.483 15.4106H117.847L120.231 21.7556H118.91L118.387 20.2406H115.942L115.419 21.7556H114.099L116.483 15.4106ZM117.998 19.141L117.431 17.5551L117.201 16.7842H117.13L116.9 17.5551L116.332 19.141H117.998ZM123.997 15.4106H128.021V16.5451H125.194V18.087H127.737V19.2215H125.194V21.7556H123.997V15.4106ZM133.16 16.5451V18.0163H135.703V19.1508H133.16V20.6211H135.986V21.7556H131.963V15.4132H135.986V16.5478L133.16 16.5451ZM141.452 21.7556V16.5478H139.68V15.4132H144.421V16.5478H142.648V21.7583L141.452 21.7556ZM149.896 18.8007L147.761 15.407H149.187L150.454 17.5068H150.525L151.747 15.407H153.191L151.092 18.8007V21.7556H149.895L149.896 18.8007ZM106.109 26.6806H107.376L108.361 30.385L108.503 31.0673H108.573L108.76 30.385L109.672 27.5312H110.789L111.71 30.385L111.889 31.0584H111.96L112.093 30.385L113.015 26.6806H114.282L112.598 33.0257H111.446L110.447 29.9731L110.26 29.2729H110.19L110.003 29.9731L109.014 33.0301H107.862L106.109 26.6806ZM118.079 26.6806H119.276V33.0257H118.079V26.6806ZM124.92 33.0257V27.8196H123.148V26.6851H127.888V27.8196H126.117V33.0301L124.92 33.0257ZM131.759 26.6806H132.955V29.2147H135.623V26.6806H136.819V33.0257H135.623V30.3537H132.955V33.0301H131.758L131.759 26.6806ZM106.603 37.9569H107.8V44.302H106.603V37.9569ZM112.096 37.9569H113.491L116.043 42.2102H116.114L116.043 40.987V37.9569H117.231V44.302H115.972L113.275 39.806H113.205L113.275 41.0291V44.2993H112.097L112.096 37.9569ZM122.871 44.302V39.0896H121.102V37.9569H125.843V39.0896H124.071V44.3002L122.871 44.302ZM130.907 39.0896V40.5608H133.451V41.6953H130.907V43.1665H133.734V44.3011H129.711V37.9569H133.734V39.0896H130.907ZM137.853 37.9551H139.05V43.1656H141.736V44.3002H137.854V37.9569L137.853 37.9551ZM145.606 37.9551H146.802V43.1656H149.488V44.3002H145.606V37.9551ZM153.359 37.9551H154.555V44.3002H153.359V37.9551ZM161.776 40.8205H164.889C164.91 40.9051 164.925 40.991 164.934 41.0775C164.946 41.1773 164.952 41.2778 164.952 41.3783C164.955 41.7702 164.892 42.1597 164.766 42.5308C164.642 42.8909 164.443 43.2203 164.181 43.497C163.895 43.8001 163.548 44.0388 163.162 44.1972C162.731 44.3691 162.27 44.4534 161.806 44.4452C161.359 44.4471 160.916 44.3616 160.502 44.1936C160.105 44.0353 159.744 43.8004 159.439 43.5023C159.135 43.2017 158.891 42.845 158.723 42.452C158.547 42.0323 158.457 41.582 158.457 41.1272C158.457 40.6723 158.547 40.222 158.723 39.8024C158.891 39.4093 159.135 39.0526 159.439 38.752C159.744 38.4539 160.105 38.219 160.502 38.0607C161.365 37.7239 162.324 37.7303 163.183 38.0786C163.577 38.2487 163.932 38.499 164.224 38.8138L163.4 39.6197C163.091 39.305 162.696 39.0882 162.264 38.996C161.833 38.9038 161.384 38.9404 160.973 39.1012C160.719 39.2009 160.487 39.3501 160.29 39.54C160.091 39.7356 159.933 39.9691 159.826 40.2268C159.595 40.8043 159.595 41.4482 159.826 42.0257C159.934 42.2842 160.093 42.5179 160.295 42.7126C160.493 42.9018 160.727 43.0508 160.982 43.1513C161.525 43.355 162.124 43.3582 162.67 43.1603C162.89 43.0713 163.092 42.9439 163.268 42.7842C163.393 42.669 163.496 42.5326 163.573 42.3812C163.663 42.2087 163.73 42.0254 163.773 41.8359H161.779V40.8196L161.776 40.8205ZM170.158 39.0923V40.5635H172.701V41.698H170.158V43.1692H172.985V44.3037H168.962V37.9569H172.985V39.0896L170.158 39.0923ZM177.104 37.9578H178.5L181.052 42.2111H181.123L181.052 40.9879V37.9569H182.24V44.302H180.981L178.283 39.806H178.213L178.283 41.0291V44.2993H177.105L177.104 37.9578ZM191.99 43.2838C191.69 43.6515 191.312 43.9469 190.882 44.1479C190.451 44.3368 189.986 44.4375 189.515 44.4443C189.044 44.451 188.576 44.3637 188.14 44.1873C187.747 44.0258 187.39 43.7879 187.089 43.4876C186.789 43.1873 186.551 42.8305 186.389 42.4377C186.047 41.6 186.047 40.6615 186.389 39.8239C186.551 39.4309 186.789 39.0739 187.089 38.7734C187.39 38.473 187.747 38.235 188.14 38.0733C188.556 37.8995 189.004 37.8121 189.456 37.8163C189.918 37.8076 190.376 37.8993 190.799 38.0849C191.193 38.2674 191.545 38.53 191.831 38.8559L190.99 39.6716C190.808 39.458 190.587 39.2806 190.339 39.1487C190.068 39.0128 189.768 38.9457 189.466 38.9535C189.181 38.9515 188.898 39.0041 188.633 39.1084C188.38 39.2075 188.149 39.3567 187.955 39.5472C187.759 39.7433 187.603 39.9768 187.498 40.234C187.274 40.8126 187.274 41.4543 187.498 42.0329C187.603 42.2901 187.758 42.5236 187.955 42.7197C188.149 42.9101 188.38 43.0593 188.633 43.1585C188.898 43.2626 189.181 43.3152 189.466 43.3134C189.793 43.3198 190.118 43.2454 190.41 43.0967C190.694 42.9444 190.943 42.7346 191.141 42.4806L191.992 43.2865L191.99 43.2838ZM197.165 39.0923V40.5635H199.708V41.698H197.165V43.1692H199.991V44.3037H195.968V37.9569H199.991V39.0896L197.165 39.0923ZM27.0882 15.9487C29.9214 15.9487 31.3863 17.3957 31.9657 20.0355L33.2193 25.7887C33.0749 25.6156 32.9256 25.452 32.7716 25.298C30.9903 23.5167 28.2019 22.626 24.4064 22.626H12.4943C10.1707 22.626 9.00838 22.9188 9.00838 20.5969V19.4329C9.00838 17.1101 10.1704 15.9484 12.4943 15.9478H27.09L27.0882 15.9487ZM96.1733 5.1864C97.2993 5.18658 98.4 5.52062 99.3363 6.14628C100.272 6.77195 101.002 7.66115 101.433 8.70147C101.864 9.7418 101.977 10.8865 101.757 11.9909C101.538 13.0954 100.995 14.1099 100.199 14.9062C99.4033 15.7026 98.3889 16.245 97.2846 16.465C96.1802 16.6849 95.0355 16.5725 93.995 16.1419C92.9546 15.7113 92.0651 14.9819 91.4392 14.0459C90.8132 13.1098 90.4788 12.0092 90.4783 10.8832C90.478 10.1351 90.625 9.39434 90.9111 8.70313C91.1971 8.01192 91.6166 7.38385 92.1454 6.8548C92.6743 6.32576 93.3022 5.90611 93.9934 5.61984C94.6845 5.33357 95.4252 5.18629 96.1733 5.1864ZM63.967 4.41722L70.6326 36.8689L76.1611 15.2324C76.9598 12.426 77.9806 7.77333 86.4237 7.81542C90.3503 7.81542 90.5947 14.8482 87.6908 15.8511C85.873 16.4779 84.6991 17.7593 83.9031 20.6865L76.3572 48.4801C76.0105 49.6756 75.2849 50.7261 74.2896 51.4737C73.2944 52.2213 72.0833 52.6255 70.8386 52.6255C69.5938 52.6255 68.3828 52.2213 67.3875 51.4737C66.3923 50.7261 65.6667 49.6756 65.32 48.4801L59.3169 19.8116L50.8926 56.248C48.9728 62.8743 41.5165 61.9905 39.8554 56.248L35.7364 37.3292C34.8929 42.1305 31.6854 46.4179 24.8944 46.6238V46.6382H23.493C23.188 46.6382 22.8826 46.6423 22.577 46.6507V46.6382H9.02181C7.88275 46.6353 6.79116 46.1816 5.98572 45.3761C5.18028 44.5707 4.72653 43.4791 4.72369 42.34C4.72606 41.2008 5.17966 40.109 5.9852 39.3034C6.79074 38.4979 7.88261 38.0443 9.02181 38.0419H21.9923C30.4837 38.0419 28.3553 31.3324 24.0169 31.3324H11.6267C7.56135 31.3324 4.60848 30.4128 2.76805 28.5735C0.928814 26.7406 0.00830078 25.2434 0.00830078 21.1808V19.4347C0.00830078 15.3682 0.928217 12.4153 2.76805 10.5761C4.60788 8.73683 7.56075 7.81691 11.6267 7.81632H29.5964V7.82169C32.8988 7.90496 38.4227 8.96606 39.4668 15.0649C43.1542 32.8036 45.7815 44.2079 45.785 44.1936L54.6714 4.41812C56.0405 -0.707389 62.2262 -2.19024 63.9661 4.41812L63.967 4.41722Z";
    };
    readonly swi_logo_symbol: {
        readonly viewBox: "0 0 102 61";
        readonly fillRule: "evenodd";
        readonly d: "M96.165 17.3747C97.3085 17.3777 98.4043 17.8334 99.2129 18.6419C100.021 19.4505 100.477 20.5463 100.48 21.6898V45.4781C100.477 46.6216 100.021 47.7174 99.2129 48.526C98.4043 49.3345 97.3085 49.7901 96.165 49.7932C95.0215 49.7901 93.9257 49.3345 93.1171 48.526C92.3086 47.7174 91.853 46.6216 91.8499 45.4781V21.6898C91.853 20.5463 92.3086 19.4505 93.1171 18.6419C93.9257 17.8334 95.0215 17.3777 96.165 17.3747ZM27.0799 15.9482C29.9131 15.9482 31.378 17.3953 31.9574 20.035L33.211 25.7882C33.0666 25.6151 32.9173 25.4515 32.7633 25.2975C30.982 23.5162 28.1936 22.6255 24.3981 22.6255H12.486C10.1624 22.6255 9.00008 22.9183 9.00008 20.5965V19.4324C9.00008 17.1096 10.1621 15.9479 12.486 15.9473H27.0817L27.0799 15.9482ZM96.165 5.18592C97.291 5.18609 98.3917 5.52013 99.328 6.1458C100.264 6.77146 100.994 7.66067 101.425 8.70099C101.856 9.74131 101.968 10.886 101.749 11.9905C101.529 13.0949 100.987 14.1094 100.191 14.9057C99.395 15.7021 98.3806 16.2445 97.2763 16.4645C96.172 16.6844 95.0272 16.572 93.9867 16.1414C92.9463 15.7108 92.0568 14.9814 91.4309 14.0454C90.8049 13.1094 90.4705 12.0088 90.47 10.8827C90.4697 10.1347 90.6167 9.39385 90.9028 8.70264C91.1888 8.01143 91.6083 7.38336 92.1371 6.85432C92.666 6.32527 93.294 5.90563 93.9851 5.61936C94.6762 5.33308 95.4169 5.1858 96.165 5.18592ZM63.9587 4.41673L70.6243 36.8684L76.1528 15.2319C76.9515 12.4256 77.9723 7.77285 86.4154 7.81493C90.3419 7.81493 90.5864 14.8477 87.6825 15.8506C85.8647 16.4774 84.6908 17.7588 83.8948 20.686L76.3489 48.4796C76.0022 49.6751 75.2766 50.7256 74.2813 51.4732C73.2861 52.2208 72.075 52.625 70.8303 52.625C69.5855 52.625 68.3745 52.2208 67.3792 51.4732C66.384 50.7256 65.6584 49.6751 65.3117 48.4796L59.3086 19.8112L50.8843 56.2476C48.9645 62.8738 41.5082 61.99 39.8471 56.2476L35.7281 37.3287C34.8846 42.13 31.6771 46.4174 24.8861 46.6234V46.6377H23.4847C23.1797 46.6377 22.8743 46.6419 22.5687 46.6502V46.6377H9.01351C7.87445 46.6348 6.78286 46.1811 5.97742 45.3757C5.17198 44.5702 4.71823 43.4786 4.71539 42.3396C4.71776 41.2004 5.17136 40.1085 5.9769 39.3029C6.78244 38.4974 7.87431 38.0438 9.01351 38.0414H21.984C30.4754 38.0414 28.347 31.3319 24.0086 31.3319H11.6184C7.55305 31.3319 4.60018 30.4123 2.75975 28.5731C0.920514 26.7401 0 25.2429 0 21.1803V19.4342C0 15.3677 0.919916 12.4148 2.75975 10.5756C4.59958 8.73634 7.55245 7.81643 11.6184 7.81583H29.5881V7.8212C32.8904 7.90448 38.4144 8.96558 39.4585 15.0644C43.1459 32.8031 45.7732 44.2075 45.7767 44.1931L54.6631 4.41763C56.0322 -0.707877 62.2179 -2.19073 63.9578 4.41763L63.9587 4.41722Z";
    };
    readonly heart_filled: {
        readonly viewBox: "0 0 24 24";
        readonly d: "M12 21.175L10.55 19.875C8.86667 18.3583 7.475 17.05 6.375 15.95C5.275 14.85 4.4 13.8625 3.75 12.9875C3.1 12.1125 2.64583 11.3083 2.3875 10.575C2.12917 9.84167 2 9.09167 2 8.325C2 6.75833 2.525 5.45 3.575 4.4C4.625 3.35 5.93333 2.825 7.5 2.825C8.36667 2.825 9.19167 3.00833 9.975 3.375C10.7583 3.74167 11.4333 4.25833 12 4.925C12.5667 4.25833 13.2417 3.74167 14.025 3.375C14.8083 3.00833 15.6333 2.825 16.5 2.825C18.0667 2.825 19.375 3.35 20.425 4.4C21.475 5.45 22 6.75833 22 8.325C22 9.09167 21.8708 9.84167 21.6125 10.575C21.3542 11.3083 20.9 12.1125 20.25 12.9875C19.6 13.8625 18.725 14.85 17.625 15.95C16.525 17.05 15.1333 18.3583 13.45 19.875L12 21.175Z";
    };
    readonly heartbeat: {
        readonly viewBox: "0 0 34.7738 28";
        readonly d: "M12.331 0.00524994C13.1124 0.0649449 13.7661 0.621942 13.9496 1.38389L18.1993 19.0381L20.3894 11.2531L20.4362 11.1093C20.6977 10.4083 21.3701 9.93534 22.1288 9.93534H32.9674C33.9651 9.93534 34.7738 10.7441 34.7738 11.7418C34.7738 12.7394 33.9651 13.5482 32.9674 13.5482H23.4977L19.8037 26.6819C19.5812 27.4732 18.8518 28.0153 18.0299 27.9997C17.2081 27.984 16.5006 27.4149 16.3082 26.6157L11.7462 7.66848L9.80131 12.4254C9.52358 13.1043 8.86246 13.5482 8.12895 13.5482H1.80643C0.808768 13.5482 0 12.7394 0 11.7418C0 10.7441 0.808768 9.93534 1.80643 9.93534H6.91613L10.5211 1.1228C10.8179 0.397319 11.5494 -0.0542936 12.331 0.00524994Z";
    };
    readonly vitals_pulse: {
        readonly viewBox: "0 0 24 24";
        readonly d: "M11.4685 2H12.5317C12.6236 2.03291 12.8405 2.03601 12.9424 2.04246C13.0692 2.05112 13.1959 2.06362 13.322 2.07992C13.7548 2.14013 14.1834 2.22791 14.605 2.34274C17.3231 3.08887 19.6055 4.93755 20.8997 7.44147C21.3749 8.36544 21.7044 9.35727 21.8767 10.3819C21.9103 10.5879 21.9288 10.7879 21.9554 10.9937C21.9684 11.0951 21.9674 11.3684 22 11.4484V12.5627C21.9639 12.667 21.9702 12.852 21.9587 12.965C21.9474 13.0752 21.9372 13.1834 21.9229 13.2937C21.8638 13.7405 21.7743 14.1829 21.6553 14.6177C20.9216 17.2757 19.1309 19.5169 16.7005 20.8193C15.7617 21.326 14.7469 21.677 13.6956 21.8583C13.4838 21.8967 13.2706 21.9272 13.0566 21.9501C12.9613 21.9604 12.6781 21.9753 12.6034 22H11.3689C11.2856 21.9718 11.0591 21.9618 10.959 21.9501C10.7295 21.923 10.5007 21.8897 10.2729 21.8502C9.30339 21.68 8.36477 21.3656 7.48824 20.9177C4.95816 19.6328 3.08906 17.3383 2.34233 14.6007C2.22929 14.1854 2.14302 13.7632 2.08404 13.3368C2.06735 13.2116 2.0551 13.0876 2.04176 12.9628C2.03038 12.8564 2.03613 12.6281 2 12.5352V11.475C2.03084 11.3966 2.03691 11.0681 2.04624 10.9662C2.06424 10.7876 2.08743 10.6096 2.11579 10.4324C2.28856 9.35797 2.63646 8.31921 3.14562 7.35748C4.43274 4.9094 6.67218 3.10024 9.3361 2.35641C9.78393 2.23476 10.2391 2.14205 10.6988 2.07884C10.8167 2.06335 10.9349 2.05143 11.0535 2.0431C11.1566 2.03635 11.3762 2.03275 11.4685 2ZM8.58396 4.41905C8.7194 4.63911 8.85128 4.86136 8.97953 5.08568C9.08913 5.2759 9.25322 5.48425 9.19618 5.71552C9.15769 5.87157 9.08458 5.96163 8.94568 6.04128C8.53397 6.27737 8.2815 5.57339 8.13292 5.31096C8.03559 5.13905 7.90422 4.91622 7.8315 4.7456C7.73952 4.8277 7.60455 4.90842 7.50024 4.98098C7.31895 5.10767 7.14087 5.23887 6.96613 5.37445C6.4752 5.75188 6.02763 6.18261 5.63165 6.65872C5.49213 6.82832 5.37956 6.99688 5.24697 7.16635C5.48103 7.28957 5.7273 7.44358 5.95912 7.57458C6.06654 7.63528 6.33797 7.7832 6.42052 7.85276C6.46531 7.89062 6.49821 7.94063 6.51523 7.99675C6.53463 8.05897 6.54545 8.17507 6.51048 8.2342C6.42118 8.38554 6.21717 8.51215 6.0386 8.46042C5.94279 8.43267 5.85531 8.38943 5.76805 8.34169C5.47146 8.17944 5.17311 8.02037 4.87679 7.85763C4.86218 7.8496 4.84685 7.83871 4.8331 7.8293C4.71496 8.06092 4.61123 8.25575 4.50512 8.49456C4.23624 9.11353 4.02809 9.75712 3.88358 10.4163C3.84173 10.6068 3.76921 10.9669 3.75442 11.1614L4.52785 11.1624C4.86009 11.1623 5.35246 11.1023 5.33957 11.6001C5.33593 11.7124 5.28832 11.8188 5.20701 11.8963C5.05229 12.0411 4.73042 12.0022 4.5258 12.0021L3.66698 12.0012C3.67734 12.1733 3.6797 12.3443 3.68479 12.5161C3.71073 13.3911 3.84101 14.2755 4.21447 15.0749C4.25424 15.16 4.29255 15.2461 4.32981 15.3325C4.65352 15.3196 5.03319 15.3285 5.36166 15.3286L7.19655 15.3289H9.2497C9.59593 15.3289 9.9917 15.3197 10.3348 15.3309C10.3164 15.0719 10.3296 14.8155 10.3413 14.5564C10.3651 14.0469 10.4082 13.5383 10.4705 13.0319C10.7257 10.8781 11.1818 8.75562 11.6729 6.64516C11.712 6.47705 11.9357 5.47588 11.9909 5.40755L12.0075 5.40646C12.035 5.46358 12.0359 5.49308 12.0565 5.54707C12.5338 7.41254 12.9369 9.2962 13.2649 11.1936C13.4448 12.275 13.5971 13.3751 13.6533 14.4706C13.6611 14.6228 13.6913 15.2146 13.6622 15.3293C15.0127 15.3141 16.3933 15.329 17.7457 15.3289L19.0219 15.3286C19.1622 15.3285 19.5382 15.3201 19.6648 15.3378C19.761 15.1264 19.8579 14.9163 19.9381 14.6998C20.2311 13.9083 20.3144 13.0568 20.3221 12.2182C20.3228 12.1458 20.3249 12.0727 20.3317 12.0002L19.5429 12.0021C19.3794 12.0025 19.2316 12.0087 19.0707 11.9884C18.6238 11.9322 18.6443 11.2027 19.084 11.173C19.493 11.1453 19.9242 11.1683 20.3356 11.1596C20.3081 11.0596 20.2945 10.9202 20.2778 10.8151C20.2533 10.6599 20.2235 10.5055 20.1884 10.3524C20.0576 9.76235 19.8606 9.1651 19.629 8.60732C19.5851 8.50159 19.305 7.88623 19.2458 7.84601C19.1562 7.87861 18.9988 7.96931 18.911 8.01742C18.7436 8.10969 18.5755 8.20093 18.4068 8.29113C18.1867 8.4094 17.9902 8.5235 17.735 8.40229C17.4584 8.27104 17.4972 7.80274 17.7503 7.66082C18.0822 7.47471 18.4151 7.25402 18.7526 7.08027C18.5846 6.88819 18.4301 6.66926 18.2504 6.46683C17.6105 5.74586 16.9715 5.25447 16.1626 4.74559C16.1239 4.84794 16.067 4.94702 16.014 5.04293C15.9145 5.22316 15.8177 5.40394 15.7219 5.58628C15.6079 5.8012 15.4278 6.18599 15.1193 6.06711C14.8661 5.9695 14.6923 5.70516 14.8226 5.43831C14.9934 5.08806 15.2319 4.76053 15.4084 4.415C14.4386 3.94189 13.4523 3.71833 12.3742 3.67729C12.2438 3.67233 11.8931 3.65633 11.7712 3.67406C11.518 3.68867 11.296 3.69466 11.0388 3.72165C10.1859 3.80802 9.35488 4.0441 8.58396 4.41905ZM11.9992 7.90375C11.9896 7.97542 11.9803 8.06267 11.9665 8.13245C11.9209 8.42728 11.8916 8.77648 11.8537 9.07919L11.5697 11.381C11.4713 12.1781 11.3785 12.9758 11.2913 13.7742C11.254 14.1343 11.2105 14.5051 11.1891 14.8661C11.1862 15.1043 11.1469 15.3771 11.2095 15.6095C11.4232 16.4025 12.7189 16.3251 12.8092 15.5007C12.8544 15.0885 12.7953 14.6126 12.7528 14.1972C12.7189 13.8402 12.6804 13.4837 12.637 13.1277C12.5077 11.9974 12.3721 10.8676 12.2302 9.73874L12.0814 8.57669C12.0687 8.4745 12.0448 8.15176 12.0187 8.06681C12.0183 7.99647 12.0128 7.97229 11.9992 7.90375ZM13.3383 16.1593C13.2469 16.4604 13.1143 16.7035 12.8289 16.8576C12.7308 16.91 12.6249 16.9466 12.5154 16.9662C12.2889 17.009 12.1256 16.9941 11.9057 17.0012C11.2271 17.0229 10.706 16.9021 10.5029 16.1771C10.4846 16.1646 10.4922 16.1646 10.4758 16.1653C10.281 16.1775 9.9988 16.1689 9.79874 16.1688L8.58228 16.1685L4.76835 16.1726C4.7714 16.2106 4.92626 16.4404 4.95714 16.4865C5.14347 16.7693 5.3455 17.0414 5.56229 17.3016C6.75456 18.7271 8.44319 19.7767 10.27 20.1471C11.1907 20.3407 12.1373 20.3793 13.0706 20.261C13.3222 20.2269 13.5658 20.1859 13.8134 20.1294C13.8598 20.1187 13.9132 20.106 13.9597 20.0987C14.3456 19.9909 14.6421 19.9096 15.0196 19.7615C16.3791 19.2243 17.5642 18.3226 18.4441 17.1553C18.5983 16.9481 18.7429 16.7339 18.8773 16.5134C18.935 16.4188 19.0308 16.2403 19.0887 16.1592C18.9865 16.1756 18.8323 16.1698 18.7256 16.1696L18.1625 16.1688L16.1469 16.1685L14.2156 16.1683L13.6778 16.1693C13.5809 16.1696 13.4287 16.1749 13.3383 16.1593Z M11.9993 7.90375C12.0128 7.97229 12.0183 7.99647 12.0187 8.0668C11.9996 8.09558 12.01 8.08728 12.0132 8.13721C11.9843 8.14225 11.9958 8.14241 11.9666 8.13245C11.9803 8.06266 11.9897 7.97542 11.9993 7.90375Z";
    };
    readonly home_filled: {
        readonly viewBox: "0 0 22 22";
        readonly d: "M11 1.0997C11 1.0997 4.19502 6.97413 0.392499 10.1553C0.271617 10.2607 0.174216 10.3903 0.106603 10.5357C0.0389902 10.6811 0.00267213 10.8391 0 10.9995C0 11.2924 0.116337 11.5732 0.323418 11.7803C0.530498 11.9874 0.81136 12.1037 1.10422 12.1037H3.2996V19.8041C3.2996 20.097 3.41594 20.3778 3.62302 20.5849C3.8301 20.792 4.11096 20.9083 4.40381 20.9083H7.7004C7.99326 20.9083 8.27412 20.792 8.4812 20.5849C8.68828 20.3778 8.80462 20.097 8.80462 19.8041V15.4003H13.2004V19.8001C13.2004 20.093 13.3167 20.3738 13.5238 20.5809C13.7309 20.788 14.0118 20.9043 14.3046 20.9043H17.6042C17.8971 20.9043 18.1779 20.788 18.385 20.5809C18.5921 20.3738 18.7084 20.093 18.7084 19.8001V12.0997H20.8998C21.1927 12.0997 21.4735 11.9834 21.6806 11.7763C21.8877 11.5692 22.004 11.2883 22.004 10.9955C22.0025 10.8318 21.9637 10.6707 21.8907 10.5242C21.8177 10.3778 21.7122 10.2499 21.5824 10.1503C17.803 6.97413 11 1.0997 11 1.0997Z";
    };
    readonly admin_filled: {
        readonly viewBox: "0 0 22 22";
        readonly d: "M8.42665 3.67582C9.03824 3.67632 9.63596 3.8581 10.1443 4.19819C10.6526 4.53828 11.0487 5.02141 11.2825 5.58654C11.5163 6.15167 11.5774 6.77343 11.4579 7.37325C11.3385 7.97306 11.0439 8.52401 10.6115 8.95647C10.179 9.38893 9.62806 9.68349 9.02824 9.80293C8.42843 9.92237 7.80667 9.86132 7.24154 9.6275C6.67641 9.39368 6.19327 8.99759 5.85318 8.48928C5.51309 7.98097 5.33131 7.38325 5.33082 6.77166C5.33049 6.36501 5.41034 5.9623 5.56581 5.58654C5.72127 5.21079 5.94929 4.86938 6.23683 4.58184C6.52437 4.2943 6.86579 4.06627 7.24154 3.91081C7.61729 3.75535 8.02001 3.6755 8.42665 3.67582ZM8.42665 2.43832C7.5696 2.43832 6.73179 2.69247 6.01918 3.16862C5.30657 3.64478 4.75115 4.32155 4.42317 5.11336C4.09519 5.90518 4.00938 6.77646 4.17658 7.61705C4.34379 8.45763 4.7565 9.22976 5.36252 9.83579C5.96855 10.4418 6.74068 10.8545 7.58126 11.0217C8.42185 11.1889 9.29313 11.1031 10.0849 10.7751C10.8768 10.4472 11.5535 9.89174 12.0297 9.17913C12.5058 8.46652 12.76 7.62871 12.76 6.77166C12.76 5.62239 12.3034 4.52019 11.4908 3.70753C10.6781 2.89487 9.57592 2.43832 8.42665 2.43832Z M14.6125 19.7633H13.375V16.6717C13.375 15.8513 13.0491 15.0645 12.4689 14.4843C11.8888 13.9042 11.102 13.5783 10.2816 13.5783H6.57079C6.16436 13.578 5.76185 13.6578 5.38626 13.8131C5.01067 13.9684 4.66937 14.1962 4.38186 14.4835C4.09435 14.7707 3.86627 15.1119 3.71066 15.4873C3.55505 15.8628 3.47496 16.2652 3.47496 16.6717V19.7633H2.23746V16.6717C2.23746 15.5224 2.69401 14.4202 3.50666 13.6075C4.31932 12.7949 5.42152 12.3383 6.57079 12.3383H10.2833C11.4326 12.3383 12.5348 12.7949 13.3474 13.6075C14.1601 14.4202 14.6166 15.5224 14.6166 16.6717L14.6125 19.7633Z M16.4683 11.2116L14.8658 9.60914L13.9933 10.4816L16.4683 12.9566L20.8017 8.62331L19.9267 7.75331L16.4683 11.2116Z";
    };
    readonly worker_filled: {
        readonly viewBox: "0 0 22 22";
        readonly d: "M1.63385 20.9991H20.3596C20.4528 20.9991 20.5449 20.9787 20.6294 20.9393C20.7139 20.9 20.7887 20.8426 20.8487 20.7712C20.9086 20.6998 20.9522 20.6162 20.9764 20.5262C21.0006 20.4362 21.0048 20.3419 20.9887 20.2501C20.9887 20.2501 20.7708 19.0116 20.584 17.7108C20.2586 15.4272 17.4714 14.7481 17.1536 14.6783L16.7763 14.5943C16.1396 14.4547 14.953 14.1944 14.3946 14.0227C14.1219 13.9381 13.8695 13.7983 13.653 13.612C13.4366 13.4257 13.2607 13.1969 13.1364 12.9398C15.1171 11.9852 16.1603 9.71198 16.332 7.42268V7.25195H17.0206C17.1899 7.25195 17.3523 7.18467 17.4721 7.06491C17.5918 6.94515 17.6591 6.78272 17.6591 6.61336C17.6591 6.44399 17.5918 6.28157 17.4721 6.16181C17.3523 6.04205 17.1899 5.97477 17.0206 5.97477H16.5895L16.5395 5.47012C16.4644 4.68163 16.1546 3.93376 15.6502 3.32307C15.1458 2.71239 14.4699 2.26692 13.7099 2.04419L12.9779 1.82724V1.63859C12.9779 1.46923 12.9107 1.3068 12.7909 1.18704C12.6711 1.06728 12.5087 1 12.3394 1H9.67573C9.592 0.999877 9.50906 1.01625 9.43165 1.04818C9.35424 1.08011 9.28388 1.12697 9.22459 1.1861C9.16529 1.24522 9.11822 1.31544 9.08606 1.39276C9.0539 1.47008 9.03729 1.55297 9.03717 1.6367V1.82536L8.28259 2.04797C7.52543 2.27068 6.85183 2.71403 6.34781 3.3214C5.8438 3.92877 5.53225 4.67259 5.45294 5.45786L5.40012 5.97571H4.98038C4.89652 5.97571 4.81348 5.99223 4.73601 6.02432C4.65854 6.05641 4.58816 6.10345 4.52886 6.16275C4.46957 6.22205 4.42253 6.29245 4.39044 6.36992C4.35835 6.4474 4.34182 6.53044 4.34182 6.6143C4.34182 6.69816 4.35835 6.7812 4.39044 6.85868C4.42253 6.93615 4.46957 7.00655 4.52886 7.06585C4.58816 7.12515 4.65854 7.17219 4.73601 7.20428C4.81348 7.23637 4.89652 7.25289 4.98038 7.25289H5.69156V7.47267C5.8604 9.71858 6.90267 11.9767 8.86645 12.9342C8.74268 13.193 8.56677 13.4234 8.34976 13.6111C8.13275 13.7987 7.87932 13.9395 7.60536 14.0246C7.04697 14.1962 5.86135 14.4566 5.22467 14.5952L4.84267 14.6801C4.51349 14.7528 1.74043 15.4347 1.41597 17.7118C1.22732 19.0125 1.01227 20.2482 1.01132 20.2511C0.995215 20.3429 0.999398 20.4371 1.02359 20.5271C1.04778 20.6171 1.09138 20.7008 1.15133 20.7722C1.21129 20.8435 1.28615 20.9009 1.37064 20.9403C1.45514 20.9796 1.54723 21 1.64044 21L1.63385 20.9991ZM19.3201 17.8919C19.4144 18.5749 19.5239 19.2389 19.6031 19.7228H18.3288V16.5384C18.5826 16.6789 18.8029 16.8726 18.9748 17.1062C19.1468 17.3399 19.2661 17.6079 19.3248 17.8919H19.3201ZM13.3411 3.27138C13.8574 3.42312 14.3165 3.72592 14.6592 4.1408C15.002 4.55569 15.2127 5.06367 15.2643 5.59935L15.302 5.97666H12.9732V3.15913L13.3411 3.27138ZM11.6961 2.27624V5.9776H10.2992L10.3067 2.27624H11.6961ZM6.72722 5.58709C6.78102 5.05358 6.99264 4.54821 7.33504 4.13556C7.67744 3.72291 8.13508 3.42171 8.6495 3.27044L9.03528 3.1563L9.02868 5.97477H6.6876L6.72722 5.58709ZM6.97057 7.42268V7.251H15.0577V7.37363C14.8795 9.7431 13.5599 12.1343 11.0132 12.1343C8.46652 12.1343 7.14507 9.74405 6.96868 7.42268H6.97057ZM11.0132 13.4115C11.3118 13.4094 11.6097 13.3817 11.9036 13.3284C12.0545 13.6875 12.2667 14.0176 12.5308 14.3038L11.0217 15.53L9.48237 14.2868C9.737 14.0028 9.94288 13.6787 10.0917 13.3275C10.3951 13.3827 10.7029 13.4108 11.0113 13.4115H11.0132ZM7.98548 15.2423C8.13672 15.195 8.28452 15.1373 8.42784 15.0697L10.6255 16.844C10.7392 16.9362 10.881 16.9865 11.0274 16.9865C11.1737 16.9865 11.3156 16.9362 11.4292 16.844L13.5986 15.082C13.7348 15.1448 13.875 15.1986 14.0183 15.2433C14.6286 15.4319 15.8019 15.6875 16.5037 15.8413C16.5037 15.8413 16.9517 15.9413 17.0517 15.9705V19.7228H4.95115V15.9705C5.05113 15.9422 5.5001 15.8413 5.5001 15.8413C6.20091 15.6875 7.37426 15.4272 7.98453 15.2386L7.98548 15.2423ZM2.67799 17.8919C2.73673 17.6077 2.85623 17.3394 3.02831 17.1056C3.2004 16.8718 3.42099 16.678 3.67498 16.5374V19.7219H2.39409C2.47332 19.2389 2.57706 18.5749 2.67704 17.8919H2.67799Z";
    };
    readonly monitor_filled: {
        readonly viewBox: "0 0 22 22";
        readonly d: "M6.04138 1C4.94608 1.00184 3.89625 1.3787 3.12176 2.04807C2.34727 2.71744 1.91122 3.62477 1.90909 4.57139H3.56178C3.5636 4.00351 3.82542 3.45933 4.29004 3.05778C4.75467 2.65622 5.38431 2.42993 6.04138 2.42836V1Z M6.04136 4.57136V3.14301C5.60341 3.14405 5.18375 3.29488 4.87407 3.56252C4.5644 3.83016 4.38989 4.19286 4.38867 4.57136H6.04136Z M20.091 9.57114H19.0789C18.7372 8.27328 17.9355 7.09987 16.7856 6.21445V2.42836C16.7844 2.04986 16.6099 1.68716 16.3002 1.41952C15.9905 1.15187 15.5709 1.00105 15.1329 1H8.52103C8.08309 1.00105 7.66343 1.15187 7.35375 1.41952C7.04408 1.68716 6.86956 2.04986 6.86835 2.42836V6.21445C6.08843 6.81623 5.46441 7.55361 5.03714 8.37831C4.60987 9.203 4.38901 10.0964 4.38901 11C4.38901 11.9036 4.60987 12.797 5.03714 13.6217C5.46441 14.4464 6.08843 15.1838 6.86835 15.7855V19.5716C6.86956 19.9501 7.04408 20.3128 7.35375 20.5805C7.66343 20.8481 8.08309 20.999 8.52103 21H15.1329C15.5709 20.999 15.9905 20.8481 16.3002 20.5805C16.6099 20.3128 16.7844 19.9501 16.7856 19.5716V15.7855C17.9351 14.9007 18.7367 13.728 19.0789 12.4308H20.091V9.57114ZM8.52103 2.42836H15.1329V5.24929C14.1074 4.80311 12.9751 4.57071 11.827 4.57071C10.6788 4.57071 9.54659 4.80311 8.52103 5.24929V2.42836ZM15.1329 19.5706H8.52103V16.7497C9.54659 17.1959 10.6788 17.4283 11.827 17.4283C12.9751 17.4283 14.1074 17.1959 15.1329 16.7497V19.5706ZM11.8275 15.9993C10.4361 16.0009 9.0908 15.5682 8.03925 14.7806C6.9877 13.9931 6.30069 12.9038 6.10469 11.7132H8.1093C8.43764 11.7121 8.75216 11.5989 8.98423 11.3981C9.21629 11.1974 9.34704 10.9254 9.34795 10.6417V9.92699C9.34795 9.83222 9.39151 9.74133 9.46905 9.67432C9.54659 9.6073 9.65175 9.56965 9.76141 9.56965C9.87107 9.56965 9.97623 9.6073 10.0538 9.67432C10.1313 9.74133 10.1749 9.83222 10.1749 9.92699V12.7837C10.2077 13.238 10.4397 13.6645 10.8235 13.9762C11.2074 14.2879 11.7143 14.4614 12.241 14.4614C12.7677 14.4614 13.2746 14.2879 13.6585 13.9762C14.0424 13.6645 14.2743 13.238 14.3072 12.7837V11.7142H15.9587V10.2858H13.8885C13.56 10.2866 13.2452 10.3998 13.0129 10.6005C12.7805 10.8013 12.6496 11.0734 12.6487 11.3573V12.7857C12.6487 12.8805 12.6052 12.9714 12.5276 13.0384C12.4501 13.1054 12.3449 13.143 12.2353 13.143C12.1256 13.143 12.0204 13.1054 11.9429 13.0384C11.8654 12.9714 11.8218 12.8805 11.8218 12.7857V9.92898C11.8394 9.6851 11.7991 9.44069 11.7032 9.21081C11.6073 8.98094 11.458 8.77047 11.2644 8.59238C11.0708 8.4143 10.8371 8.27237 10.5776 8.17535C10.3181 8.07834 10.0384 8.02828 9.75566 8.02828C9.47293 8.02828 9.1932 8.07834 8.93372 8.17535C8.67423 8.27237 8.44049 8.4143 8.2469 8.59238C8.05331 8.77047 7.90398 8.98094 7.80812 9.21081C7.71226 9.44069 7.67189 9.6851 7.68952 9.92898V10.2858H6.10354C6.26226 9.33754 6.73298 8.44866 7.45963 7.72503C8.18629 7.00141 9.13826 6.47352 10.2022 6.20422C11.2661 5.93493 12.3972 5.93558 13.4607 6.2061C14.5243 6.47662 15.4754 7.00561 16.201 7.73008C16.9265 8.45455 17.3959 9.34397 17.5531 10.2924C17.7104 11.2409 17.5489 12.2084 17.088 13.0798C16.627 13.9512 15.886 14.6898 14.9532 15.2076C14.0204 15.7253 12.935 16.0005 11.8264 16.0002L11.8275 15.9993Z";
    };
    readonly reports_filled: {
        readonly viewBox: "0 0 22 22";
        readonly d: "M6.59966 1H19.8007C20.1188 1 20.4238 1.10358 20.6487 1.28794C20.8736 1.47231 21 1.72236 21 1.98309V20.0169C21 20.2776 20.8736 20.5277 20.6487 20.7121C20.4238 20.8964 20.1188 21 19.8007 21H2.19933C1.88125 21 1.57619 20.8964 1.35128 20.7121C1.12636 20.5277 1 20.2776 1 20.0169V5.59005C1.00007 5.32934 1.12647 5.07933 1.3514 4.89501L5.75174 1.28805C5.9766 1.10367 6.28161 1.00006 6.59966 1ZM18.6013 2.96618H7.09619L3.39866 5.99705V19.0338H18.6013V2.96618Z M6.59968 6.57317H2.19934V4.60699H5.40035V1.98312H7.799V5.59008C7.799 5.71919 7.76798 5.84702 7.70771 5.9663C7.64744 6.08557 7.5591 6.19395 7.44773 6.28523C7.33636 6.37652 7.20415 6.44894 7.05864 6.49834C6.91313 6.54775 6.75717 6.57317 6.59968 6.57317Z M16.8659 17.9947H5.86565C5.54757 17.9947 5.24252 17.8911 5.0176 17.7067C4.79268 17.5224 4.66633 17.2723 4.66633 17.0116V8.59534H7.06498V16.0285H16.8659V17.9947Z M6.71357 17.7067L5.01772 16.3205L10.1508 12.1129C10.3758 11.9286 10.6808 11.825 10.9988 11.825C11.3168 11.825 11.6218 11.9286 11.8467 12.1129L13.1983 13.2208L16.0168 10.9106L17.7126 12.3006L14.0463 15.306C13.8214 15.4903 13.5164 15.5938 13.1983 15.5938C12.8803 15.5938 12.5753 15.4903 12.3504 15.306L10.9988 14.1941L6.71357 17.7067Z";
    };
    readonly bell_filled: {
        readonly viewBox: "0 0 24 24";
        readonly d: "M5 19C4.71667 19 4.47934 18.904 4.288 18.712C4.09667 18.52 4.00067 18.2827 4 18C3.99934 17.7173 4.09534 17.48 4.288 17.288C4.48067 17.096 4.718 17 5 17H6V10C6 8.61667 6.41667 7.38767 7.25 6.313C8.08334 5.23834 9.16667 4.534 10.5 4.2V3.5C10.5 3.08334 10.646 2.72934 10.938 2.438C11.23 2.14667 11.584 2.00067 12 2C12.416 1.99934 12.7703 2.14534 13.063 2.438C13.3557 2.73067 13.5013 3.08467 13.5 3.5V4.2C14.8333 4.53334 15.9167 5.23767 16.75 6.313C17.5833 7.38834 18 8.61734 18 10V17H19C19.2833 17 19.521 17.096 19.713 17.288C19.905 17.48 20.0007 17.7173 20 18C19.9993 18.2827 19.9033 18.5203 19.712 18.713C19.5207 18.9057 19.2833 19.0013 19 19H5ZM12 22C11.45 22 10.9793 21.8043 10.588 21.413C10.1967 21.0217 10.0007 20.5507 10 20H14C14 20.55 13.8043 21.021 13.413 21.413C13.0217 21.805 12.5507 22.0007 12 22Z";
    };
    readonly settings_filled: {
        readonly viewBox: "0 0 22 22";
        readonly d: "M9.92292 20.1666C9.51042 20.1666 9.15536 20.0291 8.85775 19.7541C8.56014 19.4791 8.38047 19.143 8.31875 18.7458L8.1125 17.2333C7.91389 17.1569 7.72689 17.0653 7.5515 16.9583C7.37611 16.8514 7.20408 16.7368 7.03542 16.6146L5.61458 17.2104C5.23264 17.3785 4.85069 17.3937 4.46875 17.2562C4.0868 17.1187 3.78889 16.8743 3.575 16.5229L2.49792 14.6437C2.28403 14.2923 2.22292 13.918 2.31458 13.5208C2.40625 13.1236 2.6125 12.7951 2.93333 12.5354L4.14792 11.6187C4.13264 11.5118 4.125 11.4085 4.125 11.3089V10.6901C4.125 10.5911 4.13264 10.4882 4.14792 10.3812L2.93333 9.46456C2.6125 9.20484 2.40625 8.87637 2.31458 8.47915C2.22292 8.08192 2.28403 7.70762 2.49792 7.35623L3.575 5.47706C3.78889 5.12567 4.0868 4.88123 4.46875 4.74373C4.85069 4.60623 5.23264 4.62151 5.61458 4.78956L7.03542 5.3854C7.20347 5.26317 7.37917 5.14859 7.5625 5.04165C7.74583 4.9347 7.92917 4.84304 8.1125 4.76665L8.31875 3.25415C8.37986 2.85692 8.55953 2.52081 8.85775 2.24581C9.15597 1.97081 9.51103 1.83331 9.92292 1.83331H12.0771C12.4896 1.83331 12.8449 1.97081 13.1432 2.24581C13.4414 2.52081 13.6207 2.85692 13.6812 3.25415L13.8875 4.76665C14.0861 4.84304 14.2734 4.9347 14.4494 5.04165C14.6254 5.14859 14.7971 5.26317 14.9646 5.3854L16.3854 4.78956C16.7674 4.62151 17.1493 4.60623 17.5312 4.74373C17.9132 4.88123 18.2111 5.12567 18.425 5.47706L19.5021 7.35623C19.716 7.70762 19.7771 8.08192 19.6854 8.47915C19.5938 8.87637 19.3875 9.20484 19.0667 9.46456L17.8521 10.3812C17.8674 10.4882 17.875 10.5915 17.875 10.6911V11.3089C17.875 11.4085 17.8597 11.5118 17.8292 11.6187L19.0437 12.5354C19.3646 12.7951 19.5708 13.1236 19.6625 13.5208C19.7542 13.918 19.6931 14.2923 19.4792 14.6437L18.3792 16.5229C18.1653 16.8743 17.8674 17.1187 17.4854 17.2562C17.1035 17.3937 16.7215 17.3785 16.3396 17.2104L14.9646 16.6146C14.7965 16.7368 14.6208 16.8514 14.4375 16.9583C14.2542 17.0653 14.0708 17.1569 13.8875 17.2333L13.6812 18.7458C13.6201 19.143 13.4408 19.4791 13.1432 19.7541C12.8456 20.0291 12.4902 20.1666 12.0771 20.1666H9.92292ZM10.0833 18.3333H11.8937L12.2146 15.9041C12.6882 15.7819 13.1276 15.6026 13.5327 15.3661C13.9379 15.1296 14.3082 14.843 14.6437 14.5062L16.9125 15.4458L17.8062 13.8875L15.8354 12.3979C15.9118 12.184 15.9653 11.9588 15.9958 11.7223C16.0264 11.4858 16.0417 11.245 16.0417 11C16.0417 10.7549 16.0264 10.5145 15.9958 10.2786C15.9653 10.0427 15.9118 9.81717 15.8354 9.60206L17.8062 8.11248L16.9125 6.55415L14.6437 7.51665C14.3076 7.16526 13.9373 6.87131 13.5327 6.63481C13.1282 6.39831 12.6888 6.21865 12.2146 6.09581L11.9167 3.66665H10.1062L9.78542 6.09581C9.3118 6.21804 8.87272 6.3977 8.46817 6.63481C8.06361 6.87192 7.69297 7.15823 7.35625 7.49373L5.0875 6.55415L4.19375 8.11248L6.16458 9.57915C6.08819 9.80831 6.03472 10.0375 6.00417 10.2666C5.97361 10.4958 5.95833 10.7403 5.95833 11C5.95833 11.2444 5.97361 11.4812 6.00417 11.7104C6.03472 11.9396 6.08819 12.1687 6.16458 12.3979L4.19375 13.8875L5.0875 15.4458L7.35625 14.4833C7.69236 14.8347 8.063 15.129 8.46817 15.3661C8.87333 15.6032 9.31242 15.7825 9.78542 15.9041L10.0833 18.3333ZM11.0458 14.2083C11.9319 14.2083 12.6882 13.8951 13.3146 13.2687C13.941 12.6423 14.2542 11.8861 14.2542 11C14.2542 10.1139 13.941 9.35762 13.3146 8.73123C12.6882 8.10484 11.9319 7.79165 11.0458 7.79165C10.1444 7.79165 9.38453 8.10484 8.76608 8.73123C8.14764 9.35762 7.83811 10.1139 7.8375 11C7.83689 11.8861 8.14642 12.6423 8.76608 13.2687C9.38575 13.8951 10.1457 14.2083 11.0458 14.2083Z";
    };
    readonly account_circle_filled: {
        readonly viewBox: "0 0 20 20";
        readonly d: "M3.85 15.1C4.7 14.45 5.65 13.9375 6.7 13.5625C7.75 13.1875 8.85 13 10 13C11.15 13 12.25 13.1875 13.3 13.5625C14.35 13.9375 15.3 14.45 16.15 15.1C16.7333 14.4167 17.1875 13.6417 17.5125 12.775C17.8375 11.9083 18 10.9833 18 10C18 7.78333 17.2208 5.89583 15.6625 4.3375C14.1042 2.77917 12.2167 2 10 2C7.78333 2 5.89583 2.77917 4.3375 4.3375C2.77917 5.89583 2 7.78333 2 10C2 10.9833 2.1625 11.9083 2.4875 12.775C2.8125 13.6417 3.26667 14.4167 3.85 15.1ZM7.5125 9.9875C6.8375 9.3125 6.5 8.48333 6.5 7.5C6.5 6.51667 6.8375 5.6875 7.5125 5.0125C8.1875 4.3375 9.01667 4 10 4C10.9833 4 11.8125 4.3375 12.4875 5.0125C13.1625 5.6875 13.5 6.51667 13.5 7.5C13.5 8.48333 13.1625 9.3125 12.4875 9.9875C11.8125 10.6625 10.9833 11 10 11C9.01667 11 8.1875 10.6625 7.5125 9.9875ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20Z";
    };
    readonly employee_filled: {
        readonly viewBox: "0 0 24 24";
        readonly d: "M9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12C10.9 12 9.95833 11.6083 9.175 10.825ZM16 20V13.6C16.4167 13.7333 16.825 13.875 17.225 14.025C17.625 14.175 18.0167 14.35 18.4 14.55C18.9 14.8 19.2917 15.1625 19.575 15.6375C19.8583 16.1125 20 16.6333 20 17.2V20H16ZM10 16.5V13.15C10.3333 13.1 10.6667 13.0625 11 13.0375C11.3333 13.0125 11.6667 13 12 13C12.3333 13 12.6667 13.0125 13 13.0375C13.3333 13.0625 13.6667 13.1 14 13.15V16.5H10ZM4 20V17.2C4 16.6333 4.14167 16.1125 4.425 15.6375C4.70833 15.1625 5.1 14.8 5.6 14.55C5.98333 14.35 6.375 14.175 6.775 14.025C7.175 13.875 7.58333 13.7333 8 13.6V20H4Z";
    };
    readonly person_apron_filled: {
        readonly viewBox: "0 0 16 16";
        readonly d: "M5.175 6.825C4.39167 6.04167 4 5.1 4 4C4 2.9 4.39167 1.95833 5.175 1.175C5.95833 0.391667 6.9 0 8 0C9.1 0 10.0417 0.391667 10.825 1.175C11.6083 1.95833 12 2.9 12 4C12 5.1 11.6083 6.04167 10.825 6.825C10.0417 7.60833 9.1 8 8 8C6.9 8 5.95833 7.60833 5.175 6.825ZM12 16V9.6C12.4167 9.73333 12.825 9.875 13.225 10.025C13.625 10.175 14.0167 10.35 14.4 10.55C14.9 10.8 15.2917 11.1625 15.575 11.6375C15.8583 12.1125 16 12.6333 16 13.2V16H12ZM6 12.5V9.15C6.33333 9.1 6.66667 9.0625 7 9.0375C7.33333 9.0125 7.66667 9 8 9C8.33333 9 8.66667 9.0125 9 9.0375C9.33333 9.0625 9.66667 9.1 10 9.15V12.5H6ZM0 16V13.2C0 12.6333 0.141667 12.1125 0.425 11.6375C0.708333 11.1625 1.1 10.8 1.6 10.55C1.98333 10.35 2.375 10.175 2.775 10.025C3.175 9.875 3.58333 9.73333 4 9.6V16H0Z";
    };
    readonly report_filled: {
        readonly viewBox: "0 0 18 20";
        readonly d: "M2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4C0 3.45 0.195833 2.97917 0.5875 2.5875C0.979167 2.19583 1.45 2 2 2H6.2C6.41667 1.4 6.77917 0.916667 7.2875 0.55C7.79583 0.183333 8.36667 0 9 0C9.63333 0 10.2042 0.183333 10.7125 0.55C11.2208 0.916667 11.5833 1.4 11.8 2H16C16.55 2 17.0208 2.19583 17.4125 2.5875C17.8042 2.97917 18 3.45 18 4V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H2ZM4 16H11V14H4V16ZM4 12H14V10H4V12ZM4 8H14V6H4V8ZM9.5375 3.0375C9.67917 2.89583 9.75 2.71667 9.75 2.5C9.75 2.28333 9.67917 2.10417 9.5375 1.9625C9.39583 1.82083 9.21667 1.75 9 1.75C8.78333 1.75 8.60417 1.82083 8.4625 1.9625C8.32083 2.10417 8.25 2.28333 8.25 2.5C8.25 2.71667 8.32083 2.89583 8.4625 3.0375C8.60417 3.17917 8.78333 3.25 9 3.25C9.21667 3.25 9.39583 3.17917 9.5375 3.0375Z";
    };
    readonly video_camera_filled: {
        readonly viewBox: "0 0 20 16";
        readonly d: "M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H14C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2V6.5L20 2.5V13.5L16 9.5V14C16 14.55 15.8042 15.0208 15.4125 15.4125C15.0208 15.8042 14.55 16 14 16H2Z";
    };
    readonly favorite_filled: {
        readonly viewBox: "0 0 20 19";
        readonly d: "M10 18.35L8.55 17.05C6.86667 15.5333 5.475 14.225 4.375 13.125C3.275 12.025 2.4 11.0375 1.75 10.1625C1.1 9.2875 0.645833 8.48333 0.3875 7.75C0.129167 7.01667 0 6.26667 0 5.5C0 3.93333 0.525 2.625 1.575 1.575C2.625 0.525 3.93333 0 5.5 0C6.36667 0 7.19167 0.183333 7.975 0.55C8.75833 0.916667 9.43333 1.43333 10 2.1C10.5667 1.43333 11.2417 0.916667 12.025 0.55C12.8083 0.183333 13.6333 0 14.5 0C16.0667 0 17.375 0.525 18.425 1.575C19.475 2.625 20 3.93333 20 5.5C20 6.26667 19.8708 7.01667 19.6125 7.75C19.3542 8.48333 18.9 9.2875 18.25 10.1625C17.6 11.0375 16.725 12.025 15.625 13.125C14.525 14.225 13.1333 15.5333 11.45 17.05L10 18.35Z";
    };
    readonly pressure_wheel_filled: {
        readonly viewBox: "0 0 20 20";
        readonly d: "M6.125 19.2125C4.90833 18.6875 3.84583 17.9708 2.9375 17.0625C2.02917 16.1542 1.3125 15.0917 0.7875 13.875C0.2625 12.6583 0 11.3625 0 9.9875C0 8.6125 0.2625 7.32083 0.7875 6.1125C1.3125 4.90417 2.02917 3.84583 2.9375 2.9375C3.84583 2.02917 4.90833 1.3125 6.125 0.7875C7.34167 0.2625 8.6375 0 10.0125 0C11.3875 0 12.6792 0.2625 13.8875 0.7875C15.0958 1.3125 16.1542 2.02917 17.0625 2.9375C17.9708 3.84583 18.6875 4.90417 19.2125 6.1125C19.7375 7.32083 20 8.6125 20 9.9875C20 11.3625 19.7375 12.6583 19.2125 13.875C18.6875 15.0917 17.9708 16.1542 17.0625 17.0625C16.1542 17.9708 15.0958 18.6875 13.8875 19.2125C12.6792 19.7375 11.3875 20 10.0125 20C8.6375 20 7.34167 19.7375 6.125 19.2125ZM5.7125 8.7125C5.90417 8.52083 6 8.28333 6 8C6 7.71667 5.90417 7.47917 5.7125 7.2875C5.52083 7.09583 5.28333 7 5 7C4.71667 7 4.47917 7.09583 4.2875 7.2875C4.09583 7.47917 4 7.71667 4 8C4 8.28333 4.09583 8.52083 4.2875 8.7125C4.47917 8.90417 4.71667 9 5 9C5.28333 9 5.52083 8.90417 5.7125 8.7125ZM8.7125 5.7125C8.90417 5.52083 9 5.28333 9 5C9 4.71667 8.90417 4.47917 8.7125 4.2875C8.52083 4.09583 8.28333 4 8 4C7.71667 4 7.47917 4.09583 7.2875 4.2875C7.09583 4.47917 7 4.71667 7 5C7 5.28333 7.09583 5.52083 7.2875 5.7125C7.47917 5.90417 7.71667 6 8 6C8.28333 6 8.52083 5.90417 8.7125 5.7125ZM15.7125 8.7125C15.9042 8.52083 16 8.28333 16 8C16 7.71667 15.9042 7.47917 15.7125 7.2875C15.5208 7.09583 15.2833 7 15 7C14.7167 7 14.4792 7.09583 14.2875 7.2875C14.0958 7.47917 14 7.71667 14 8C14 8.28333 14.0958 8.52083 14.2875 8.7125C14.4792 8.90417 14.7167 9 15 9C15.2833 9 15.5208 8.90417 15.7125 8.7125ZM11.4125 11.4125C11.8042 11.0208 12 10.55 12 10C12 9.78333 11.9667 9.57083 11.9 9.3625C11.8333 9.15417 11.7333 8.96667 11.6 8.8L12.95 5.4C13.0667 5.13333 13.0708 4.87083 12.9625 4.6125C12.8542 4.35417 12.6667 4.16667 12.4 4.05C12.15 3.93333 11.8958 3.92917 11.6375 4.0375C11.3792 4.14583 11.2 4.33333 11.1 4.6L9.75 8C9.25 8.08333 8.83333 8.3125 8.5 8.6875C8.16667 9.0625 8 9.5 8 10C8 10.55 8.19583 11.0208 8.5875 11.4125C8.97917 11.8042 9.45 12 10 12C10.55 12 11.0208 11.8042 11.4125 11.4125ZM6.15 17C6.73333 16.6667 7.35 16.4167 8 16.25C8.65 16.0833 9.31667 16 10 16C10.6833 16 11.35 16.0833 12 16.25C12.65 16.4167 13.2667 16.6667 13.85 17L15.6 15.7C14.7667 15.15 13.875 14.7292 12.925 14.4375C11.975 14.1458 11 14 10 14C9 14 8.025 14.1458 7.075 14.4375C6.125 14.7292 5.23333 15.15 4.4 15.7L6.15 17Z";
    };
    readonly build_filled: {
        readonly viewBox: "0 0 24 24";
        readonly d: "M17.15 20.7L11.1 14.6C10.7667 14.7333 10.4292 14.8333 10.0875 14.9C9.74583 14.9667 9.38333 15 9 15C7.33333 15 5.91667 14.4167 4.75 13.25C3.58333 12.0833 3 10.6667 3 9C3 8.4 3.08333 7.82917 3.25 7.2875C3.41667 6.74583 3.65 6.23333 3.95 5.75L7.6 9.4L9.4 7.6L5.75 3.95C6.23333 3.65 6.74583 3.41667 7.2875 3.25C7.82917 3.08333 8.4 3 9 3C10.6667 3 12.0833 3.58333 13.25 4.75C14.4167 5.91667 15 7.33333 15 9C15 9.38333 14.9667 9.74583 14.9 10.0875C14.8333 10.4292 14.7333 10.7667 14.6 11.1L20.7 17.15C20.9 17.35 21 17.5917 21 17.875C21 18.1583 20.9 18.4 20.7 18.6L18.6 20.7C18.4 20.9 18.1583 21 17.875 21C17.5917 21 17.35 20.9 17.15 20.7Z";
    };
    readonly location_on_filled: {
        readonly viewBox: "0 0 24 24";
        readonly d: "M13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12C12.55 12 13.0208 11.8042 13.4125 11.4125ZM12 22C9.31667 19.7167 7.3125 17.5958 5.9875 15.6375C4.6625 13.6792 4 11.8667 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11.8667 19.3375 13.6792 18.0125 15.6375C16.6875 17.5958 14.6833 19.7167 12 22Z";
    };
    /**
     * Pin/drop shape used for the Dashboard location action button (Figma
     * 245:23280, location-action 304:2637). Tighter 16x20 proportions vs
     * the 24x24 `location_on_filled` above — keep both available.
     */
    readonly location_pin: {
        readonly viewBox: "0 0 16 20";
        readonly d: "M9.4125 9.4125C9.80417 9.02083 10 8.55 10 8C10 7.45 9.80417 6.97917 9.4125 6.5875C9.02083 6.19583 8.55 6 8 6C7.45 6 6.97917 6.19583 6.5875 6.5875C6.19583 6.97917 6 7.45 6 8C6 8.55 6.19583 9.02083 6.5875 9.4125C6.97917 9.80417 7.45 10 8 10C8.55 10 9.02083 9.80417 9.4125 9.4125ZM8 20C5.31667 17.7167 3.3125 15.5958 1.9875 13.6375C0.6625 11.6792 0 9.86667 0 8.2C0 5.7 0.804167 3.70833 2.4125 2.225C4.02083 0.741667 5.88333 0 8 0C10.1167 0 11.9792 0.741667 13.5875 2.225C15.1958 3.70833 16 5.7 16 8.2C16 9.86667 15.3375 11.6792 14.0125 13.6375C12.6875 15.5958 10.6833 17.7167 8 20Z";
    };
    readonly heartbeat_filled: {
        readonly viewBox: "0 0 39 31";
        readonly d: "M13.6522 0.00581244C14.5173 0.0719033 15.2411 0.688579 15.4442 1.53216L20.1492 21.0779L22.574 12.4588L22.6258 12.2996C22.9154 11.5234 23.6597 10.9998 24.4998 10.9998H36.4996C37.6042 10.9998 38.4996 11.8953 38.4996 12.9998C38.4996 14.1044 37.6042 14.9998 36.4996 14.9998H26.0154L21.9256 29.5407C21.6792 30.4168 20.8717 31.0169 19.9617 30.9996C19.0518 30.9823 18.2685 30.3522 18.0555 29.4674L13.0048 8.4901L10.8515 13.7567C10.544 14.5083 9.81202 14.9998 8.99991 14.9998H1.99998C0.895422 14.9998 0 14.1044 0 12.9998C0 11.8953 0.895422 10.9998 1.99998 10.9998H7.65715L11.6483 1.2431C11.9769 0.43989 12.7869 -0.0601108 13.6522 0.00581244Z";
    };
    readonly check: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z";
    };
    readonly mail: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-760h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z";
    };
    readonly female: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M440-120v-80h-80v-80h80v-87q-79-14-129.5-75.5T260-585q0-92 64-156t156-64q92 0 156 64t64 156q0 81-50.5 142.5T520-367v87h80v80h-80v80h-80Zm40-327q57 0 98.5-41.5T620-585q0-57-41.5-98.5T480-725q-57 0-98.5 41.5T340-585q0 57 41.5 98.5T480-447Z";
    };
    readonly blood_pressure: {
        readonly viewBox: "0 0 46.6667 46.6667";
        readonly fillRule: "evenodd";
        readonly d: "M22.0933 0H24.5741C24.7885 0.0767897 25.2946 0.084033 25.5322 0.0990655C25.8282 0.11929 26.1238 0.148444 26.4179 0.186487C27.4278 0.326963 28.4279 0.531795 29.4116 0.79973C35.754 2.54069 41.0794 6.85428 44.0993 12.6968C45.2081 14.8527 45.9769 17.167 46.3789 19.5577C46.4573 20.0384 46.5006 20.505 46.5625 20.9852C46.5928 21.2219 46.5906 21.8596 46.6667 22.0462V24.6463C46.5824 24.8897 46.5972 25.3212 46.5703 25.5851C46.5439 25.8421 46.5202 26.0946 46.4869 26.3519C46.3488 27.3946 46.1401 28.4268 45.8623 29.4412C44.1504 35.6433 39.972 40.8728 34.3011 43.9118C32.1107 45.0939 29.7427 45.9129 27.2897 46.336C26.7955 46.4256 26.2981 46.4969 25.7988 46.5502C25.5764 46.5742 24.9156 46.609 24.7413 46.6667H21.8607C21.6665 46.6008 21.1379 46.5776 20.9044 46.5502C20.3687 46.4871 19.8349 46.4094 19.3035 46.3171C17.0412 45.92 14.8511 45.1865 12.8059 44.1412C6.90238 41.1432 2.54115 35.7893 0.798763 29.4016C0.53501 28.4325 0.333708 27.4474 0.196097 26.4526C0.157155 26.1605 0.128561 25.8711 0.0974372 25.5799C0.0708971 25.3317 0.0842962 24.799 0 24.582V22.1083C0.0719542 21.9253 0.0861303 21.1588 0.107883 20.9212C0.149891 20.5045 0.204011 20.0891 0.270175 19.6755C0.673317 17.1686 1.48508 14.7448 2.67313 12.5008C5.6764 6.78861 10.9017 2.56724 17.1176 0.831626C18.1625 0.547775 19.2246 0.33144 20.2973 0.183965C20.5722 0.147808 20.8482 0.119997 21.1248 0.100571C21.3654 0.0848262 21.8779 0.0764117 22.0933 0ZM15.3626 5.64446C15.6786 6.15793 15.9863 6.6765 16.2856 7.19993C16.5413 7.64376 16.9242 8.12991 16.7911 8.66954C16.7013 9.03367 16.5307 9.24381 16.2066 9.42965C15.2459 9.98054 14.6568 8.33791 14.3101 7.72557C14.083 7.32446 13.7765 6.80452 13.6068 6.40639C13.3922 6.59798 13.0773 6.78631 12.8339 6.95561C12.4109 7.25122 11.9954 7.55736 11.5876 7.87372C10.4421 8.7544 9.3978 9.75942 8.47385 10.8703C8.1483 11.2661 7.88564 11.6594 7.57627 12.0548C8.12242 12.3423 8.69705 12.7017 9.23795 13.0074C9.4886 13.149 10.1219 13.4941 10.3145 13.6565C10.4191 13.7448 10.4958 13.8615 10.5355 13.9924C10.5808 14.1376 10.606 14.4085 10.5245 14.5465C10.3161 14.8996 9.84006 15.195 9.42341 15.0743C9.19985 15.0096 8.99573 14.9087 8.79211 14.7973C8.10009 14.4187 7.40391 14.0475 6.7125 13.6678C6.67842 13.6491 6.64264 13.6237 6.61056 13.6017C6.33491 14.1421 6.09287 14.5968 5.84527 15.154C5.21789 16.5982 4.7322 18.0999 4.39503 19.6381C4.29737 20.0825 4.12815 20.9228 4.09366 21.3766L5.89832 21.3789C6.67354 21.3786 7.82241 21.2386 7.79233 22.4003C7.78383 22.6623 7.67275 22.9104 7.48303 23.0913C7.12202 23.4293 6.37098 23.3386 5.89354 23.3381L3.88963 23.3361C3.9138 23.7378 3.91929 24.1368 3.93119 24.5376C3.99171 26.5793 4.29568 28.6428 5.1671 30.5081C5.25989 30.7066 5.34928 30.9076 5.43623 31.1092C6.19154 31.0791 7.07745 31.0999 7.84387 31.1001L12.1253 31.1008H16.916C17.7238 31.1008 18.6473 31.0794 19.4479 31.1053C19.4049 30.501 19.4358 29.9029 19.463 29.2984C19.5185 28.1094 19.6191 26.9227 19.7646 25.7412C20.3599 20.7156 21.4242 15.7631 22.57 10.8387C22.6613 10.4465 23.1834 8.11039 23.3121 7.95095L23.3509 7.9484C23.4149 8.0817 23.4172 8.15051 23.4653 8.2765C24.5788 12.6293 25.5195 17.0245 26.2849 21.4517C26.7046 23.975 27.0598 26.5419 27.1911 29.0981C27.2093 29.4531 27.2797 30.8342 27.2118 31.1017C30.363 31.0662 33.5843 31.101 36.74 31.1008L39.7177 31.1001C40.0452 31.0999 40.9224 31.0803 41.218 31.1215C41.4424 30.6282 41.6685 30.1381 41.8555 29.6329C42.5391 27.786 42.7335 25.7993 42.7515 23.8424C42.7531 23.6735 42.7581 23.5029 42.7741 23.3338L40.9334 23.3383C40.5519 23.3393 40.2072 23.3536 39.8316 23.3062C38.7889 23.1752 38.8368 21.473 39.8626 21.4036C40.8169 21.339 41.8232 21.3927 42.7832 21.3723C42.7189 21.1391 42.6872 20.8137 42.6483 20.5687C42.5911 20.2064 42.5216 19.8463 42.4396 19.4889C42.1344 18.1122 41.6748 16.7186 41.1343 15.4171C41.0318 15.1704 40.3783 13.7345 40.2402 13.6407C40.031 13.7168 39.6639 13.9284 39.4591 14.0407C39.0683 14.2559 38.6761 14.4688 38.2826 14.6793C37.769 14.9553 37.3106 15.2215 36.7149 14.9387C36.0696 14.6324 36.1601 13.5397 36.7507 13.2086C37.5252 12.7743 38.302 12.2594 39.0895 11.854C38.6973 11.4058 38.3369 10.8949 37.9176 10.4226C36.4246 8.74034 34.9335 7.59377 33.0461 6.40637C32.9558 6.64519 32.823 6.87638 32.6993 7.10017C32.4671 7.52072 32.2412 7.94252 32.0177 8.36799C31.7518 8.86947 31.3316 9.7673 30.6118 9.48992C30.0209 9.26217 29.6153 8.64537 29.9193 8.02273C30.3178 7.20547 30.8745 6.44123 31.2863 5.635C29.0233 4.53109 26.7221 4.00944 24.2065 3.91369C23.9023 3.90211 23.0838 3.86477 22.7994 3.90615C22.2086 3.94023 21.6906 3.9542 21.0905 4.01718C19.1004 4.21871 17.1614 4.76957 15.3626 5.64446ZM23.3315 13.7754C23.3092 13.9426 23.2873 14.1462 23.2552 14.3091C23.1488 14.997 23.0804 15.8118 22.992 16.5181L22.3294 21.8891C22.0997 23.749 21.8831 25.6102 21.6797 27.4732C21.5926 28.3133 21.4913 29.1785 21.4412 30.0209C21.4346 30.5767 21.3427 31.2131 21.4888 31.7554C21.9875 33.6059 25.0109 33.4252 25.2214 31.5016C25.3269 30.5398 25.1891 29.4294 25.0899 28.4601C25.0109 27.6272 24.9209 26.7953 24.8197 25.9647C24.518 23.3272 24.2015 20.6912 23.8704 18.0571L23.5234 15.3456C23.4938 15.1072 23.4379 14.3541 23.3769 14.1559C23.3759 13.9918 23.3632 13.9354 23.3315 13.7754ZM26.456 33.0383C26.2427 33.7408 25.9333 34.3082 25.2675 34.6678C25.0384 34.7899 24.7914 34.8754 24.536 34.9212C24.0074 35.021 23.6264 34.9863 23.1132 35.0027C21.53 35.0533 20.3141 34.7715 19.8401 33.0798C19.7974 33.0508 19.8152 33.0509 19.777 33.0524C19.3223 33.0809 18.6639 33.0609 18.1971 33.0606L15.3586 33.0597L6.45948 33.0693C6.46659 33.1582 6.82794 33.6943 6.89999 33.8019C7.33476 34.4618 7.80616 35.0966 8.312 35.7036C11.094 39.03 15.0341 41.4789 19.2967 42.3432C21.445 42.795 23.6537 42.885 25.8314 42.6091C26.4184 42.5293 26.9869 42.4339 27.5646 42.3019C27.6728 42.2771 27.7974 42.2472 27.9059 42.2304C28.8064 41.9788 29.4982 41.789 30.3791 41.4436C33.5512 40.1901 36.3164 38.086 38.3697 35.3623C38.7295 34.879 39.0667 34.3791 39.3805 33.8646C39.5149 33.644 39.7384 33.2274 39.8736 33.0381C39.6352 33.0764 39.2754 33.0629 39.0264 33.0625L37.7125 33.0606L33.0094 33.0597L28.5031 33.0593L27.2483 33.0618C27.022 33.0625 26.667 33.0748 26.456 33.0383Z";
    };
    readonly male: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M520-440q-79 0-134.5-55.5T330-630q0-79 55.5-134.5T520-820q66 0 117 39t68 101l122-122-30-30q-9-9-9-21.5t9-21.5q9-9 21.5-9t21.5 9l141 141q9 9 9 21.5t-9 21.5q-9 9-21.5 9t-21.5-9l-29-29-122 122q19 27 29.5 58.5T855-490q3 24-12 42t-39 18q-19 0-32-12.5T753-475q-7-55-46-94.5T613-617q-23-9-46-12-9 28-13 56.5t-4 57.5q0 79-55.5 134.5T520-440Zm0-80q46 0 78-32t32-78q0-46-32-78t-78-32q-46 0-78 32t-32 78q0 46 32 78t78 32ZM320-40q-17 0-28.5-11.5T280-80v-160H140q-25 0-42.5-17.5T80-300v-100h80v100h120v-160q0-25 17.5-42.5T340-520h80v80h-60v160h220q33 0 56.5 23.5T660-200v80q0 33-23.5 56.5T580-40H320Zm20-80h200v-40H340v40Z";
    };
    readonly info: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M480-280q17 0 28.5-11.5T520-320v-160q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480v160q0 17 11.5 28.5T480-280Zm0-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z";
    };
    readonly visibility: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T48-500q46-137 166-218.5T480-800q146 0 266 81.5T912-500q-46 137-166 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z";
    };
    readonly visibility_off: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M644-428 532-540q12-7 24.5-9.5T580-552q42 0 71 29t29 71q0 12-2.5 24.5T668-403L644-428Zm114 114L646-426q11-19 17.5-41t6.5-45q0-79-55.5-134.5T480-702q-23 0-44.5 5.5T393-680l-86-86q42-18 86-26t87-8q146 0 263 81.5T912-510q-21 56-58 102.5T758-314Zm46 258L658-202q-37 14-79.5 22T480-172q-148 0-264.5-82T48-462q21-50 56.5-94.5T184-642L60-768l44-46 740 740-40 18ZM240-580q-30 25-55.5 56.5T144-462q34 80 132 138t204 58q31 0 60-3.5t60-12.5l-39-37q-19 5-37.5 7.5T480-308q-79 0-134.5-55.5T290-498q0-12 1.5-24t6.5-24l-58-34Zm285 116Zm-99-44Z";
    };
    readonly pin_tail: {
        readonly viewBox: "0 0 16 14";
        readonly d: "M0 0 L16 0 L8 14 Z";
    };
    readonly download: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z";
    };
    readonly keyboard_arrow_left: {
        readonly viewBox: "0 0 24 24";
        readonly d: "M14.3 18L8.30005 12L14.3 6L15.7 7.4L11.1 12L15.7 16.6L14.3 18Z";
    };
    readonly keyboard_arrow_right: {
        readonly viewBox: "0 0 8 12";
        readonly d: "M4.6 6L0 1.4L1.4 0L7.4 6L1.4 12L0 10.6L4.6 6Z";
    };
    readonly edit: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z";
    };
    readonly border_color: {
        readonly viewBox: "0 0 19 20";
        readonly d: "M0 20V16.3636H18.1818V20H0ZM3.63636 12.7273H4.90909L12 5.65909L10.7045 4.36364L3.63636 11.4545V12.7273ZM1.81818 14.5455V10.6818L12 0.522727C12.1667 0.356061 12.3598 0.227273 12.5795 0.136364C12.7992 0.0454546 13.0303 0 13.2727 0C13.5152 0 13.75 0.0454546 13.9773 0.136364C14.2045 0.227273 14.4091 0.363636 14.5909 0.545455L15.8409 1.81818C16.0227 1.98485 16.1553 2.18182 16.2386 2.40909C16.322 2.63636 16.3636 2.87121 16.3636 3.11364C16.3636 3.34091 16.322 3.56439 16.2386 3.78409C16.1553 4.00379 16.0227 4.20455 15.8409 4.38636L5.68182 14.5455H1.81818Z";
    };
};
type IconName = keyof typeof iconPaths;

type AvatarSize = 's' | 'm' | 'l';
interface AvatarProps {
    uri?: string;
    size?: AvatarSize;
    customSize?: number;
    bordered?: boolean;
    /**
     * Border thickness in px. Defaults to 2. Only applied when `bordered: true`.
     * Used by Dashboard avatar which Figma renders with ~4px ring.
     */
    borderWidth?: number;
    borderColor?: string;
    fallbackBackgroundColor?: string;
    testID?: string;
    accessibilityLabel?: string;
}

declare const Avatar: React$1.ForwardRefExoticComponent<AvatarProps & React$1.RefAttributes<View>>;

interface AvatarGroupItem {
    uri?: string;
    alt?: string;
}
interface AvatarGroupProps {
    avatars: AvatarGroupItem[];
    totalCount?: number;
    maxVisible?: number;
    size?: AvatarSize;
    bordered?: boolean;
    borderColor?: string;
    testID?: string;
    accessibilityLabel?: string;
}

declare const AvatarGroup: React$1.ForwardRefExoticComponent<AvatarGroupProps & React$1.RefAttributes<View>>;

interface ActivitiesOverviewCardProps {
    title: string;
    subtitle?: string;
    progress: number;
    progressColor?: string;
    progressTrackColor?: string;
    icon?: IconName;
    iconColor?: string;
    avatars: AvatarGroupItem[];
    totalAvatarsCount?: number;
    maxVisibleAvatars?: number;
    locationIcon?: IconName | null;
    onPress?: () => void;
    onLocationPress?: () => void;
    fullWidth?: boolean;
    accessibilityLabel?: string;
    testID?: string;
}

declare const ActivitiesOverviewCard: React$1.ForwardRefExoticComponent<ActivitiesOverviewCardProps & React$1.RefAttributes<View>>;

interface BigNumbersCardProps {
    value: number | string;
    label: string;
    icon?: IconName;
    iconColor?: string;
    fullWidth?: boolean;
    testID?: string;
    accessibilityLabel?: string;
}

declare const BigNumbersCard: React$1.ForwardRefExoticComponent<BigNumbersCardProps & React$1.RefAttributes<View>>;

/**
 * Button variants:
 * - `contained`: primary CTA — green `surface.primary` bg, dark text. The
 *   default attention-grabber.
 * - `outline`: secondary action — transparent bg, primary-light border.
 * - `ghost`: tertiary action — fully transparent until hover, no border.
 * - `surface`: dark CTA for overlay contexts (maps, images, modals) — dark
 *   `surface.standard` bg, light text, elevation md. Used when the button
 *   must read against unpredictable backgrounds (e.g. "Voltar ao dashboard"
 *   floating over a satellite map per Figma `32:2502`).
 */
type ButtonVariant = 'contained' | 'outline' | 'ghost' | 'surface';
/**
 * Button size:
 * - `default`: 12px padding all sides; full-size CTA.
 * - `small`: 8px vertical, 12px horizontal padding (~32px tall) — pairs
 *   visually with `Tabs` in compact filter rows.
 * - `large`: 16px padding all sides. Used for round icon-only action buttons
 *   on the Dashboard (Figma `245:23280` — location, camera, work, etc.).
 * - `xlarge`: 20px padding all sides. Used for the prominent Chat action
 *   on the Dashboard (Figma `304:2742`).
 */
type ButtonSize = 'default' | 'small' | 'large' | 'xlarge';
/**
 * Button shape:
 * - `rounded`: 8px corner radius (default; matches form/CTA buttons).
 * - `pill`: full pill radius (999px). Used for round icon-only action
 *   buttons (Dashboard map controls, etc.).
 */
type ButtonShape = 'rounded' | 'pill';
interface ButtonProps extends Pick<PressableProps, 'onPress' | 'onLongPress' | 'disabled' | 'accessibilityLabel' | 'accessibilityHint' | 'testID'> {
    /**
     * Button label. Optional — omit for icon-only buttons (pass `iconLeft`
     * and/or `iconRight`). When omitted, the label slot is not rendered.
     */
    label?: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    shape?: ButtonShape;
    /**
     * Drop-shadow elevation token. Defaults to `'sm'` for `variant === 'contained'`
     * (current behavior). Use `'lg'` for prominent CTAs (Dashboard Location/Chat/Help)
     * or `'none'` to disable. Outline/ghost variants ignore this.
     */
    elevation?: 'sm' | 'md' | 'lg' | 'none';
    /**
     * Override the container background color. Most useful with
     * `variant === 'contained'`, where the default is `theme.surface.primary`.
     * Used by Dashboard's Chat (surface.success) and Help (surface.danger)
     * buttons per Figma `245:23280`.
     */
    backgroundColor?: string;
    /**
     * Override the border color. Applies to any variant — for non-outline
     * variants the default border is transparent, so setting this opts in to a
     * visible border on `contained`/`ghost`/`surface` (e.g. the two-tone
     * mobile my-stats Home FAB, Figma `348:10334`: light bg + thick dark
     * border + pill shape). For `variant === 'outline'`, defaults to
     * `theme.content.primaryLight`.
     */
    borderColor?: string;
    /**
     * Override the label color. Overrides the variant default. Useful when an
     * outline button needs a fully-saturated `content.primary` label instead of
     * the default `content.primaryLight` (e.g. Mobile my-stats "Enviar novo
     * exame" CTA, Figma `342:9907`). When `disabled` the disabled tone wins.
     */
    labelColor?: string;
    /**
     * Border thickness. Token-based or arbitrary pixel value.
     * - `'s'`: 1px (matches `border.size.s`).
     * - `'m'`: 2px (default; matches `border.size.m`). Used for emphasized
     *   outline buttons like the Dashboard "Work" CTA (Figma `304:2685`).
     * - `number`: explicit width in pixels — required for non-token thicknesses
     *   like the my-stats Home FAB's 10.286px (Figma `348:10334`).
     *
     * Pair with `borderColor` to make the border visible on non-outline
     * variants (default border color is transparent off-outline).
     */
    borderWidth?: 's' | 'm' | number;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    fullWidth?: boolean;
    /**
     * Render the label with an underline. Primarily intended for `variant="ghost"`
     * link-style buttons (e.g. "Política de privacidade & Termos de uso" on the
     * Mobile sign-up screen, Figma `213:13784`). Default `false`.
     */
    underline?: boolean;
}

declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<View>>;

type ChatBubblePosition = 'left' | 'right';
interface ChatBubbleProps {
    message: string;
    time: string;
    position?: ChatBubblePosition;
    avatarUri?: string;
    onMenuPress?: () => void;
    fullWidth?: boolean;
    accessibilityLabel?: string;
    testID?: string;
}

declare const ChatBubble: React$1.ForwardRefExoticComponent<ChatBubbleProps & React$1.RefAttributes<View>>;

interface ChatSectionUser {
    id: string;
    name: string;
    subtitle?: string;
    avatarUri?: string;
    unreadCount?: number;
}
interface ChatSectionProps {
    users: ChatSectionUser[];
    searchValue?: string;
    onSearchChange?: (text: string) => void;
    searchPlaceholder?: string;
    onUserPress?: (id: string) => void;
    onExpand?: () => void;
    expandLabel?: string;
    fullWidth?: boolean;
    accessibilityLabel?: string;
    testID?: string;
}

declare const ChatSection: React$1.ForwardRefExoticComponent<ChatSectionProps & React$1.RefAttributes<View>>;

interface ChatUserCardProps {
    name: string;
    subtitle?: string;
    avatarUri?: string;
    unreadCount?: number;
    onPress?: () => void;
    fullWidth?: boolean;
    accessibilityLabel?: string;
    testID?: string;
}

declare const ChatUserCard: React$1.ForwardRefExoticComponent<ChatUserCardProps & React$1.RefAttributes<View>>;

type DonutChartSize = 'default' | 'small';
/**
 * Visual treatment of the donut.
 * - `bevel` (default): dark 3D ring with bezel + inner well + tracked arc.
 *   Use on dashboards where the donut sits over an unrelated background.
 * - `flat`: minimal arc on transparent background — no bezel, no inner
 *   well, very subtle track. Use on screens that already have their own
 *   container (e.g. admin profile right column, Figma `159:14140`).
 */
type DonutChartAppearance = 'bevel' | 'flat';
type DonutGradient = readonly [from: string, to: string];
interface DonutChartProps {
    title: string;
    value: string | number;
    label: string;
    caption?: string;
    progress: number;
    /** Two-stop gradient applied to the arc. Top → bottom along the arc. */
    progressGradient?: DonutGradient;
    trackColor?: string;
    icon?: IconName;
    iconColor?: string;
    size?: DonutChartSize;
    appearance?: DonutChartAppearance;
    onLocationPress?: () => void;
    locationIcon?: IconName;
    accessibilityLabel?: string;
    testID?: string;
}

declare const DonutChart: React$1.ForwardRefExoticComponent<DonutChartProps & React$1.RefAttributes<View>>;

interface EmployeeOverviewCardEmployee {
    name: string;
    sector: string;
    avatarUri?: string;
}
interface EmployeeOverviewCardProps {
    employee: EmployeeOverviewCardEmployee;
    progress?: number;
    bpm: number;
    pressure: string;
    bpmUnit?: string;
    onLocationPress?: () => void;
    onPress?: () => void;
    fullWidth?: boolean;
    /** Override the default LocationButton on the right side with a custom
     *  element (e.g. a contained `Button` for the alerts-rescue-route card,
     *  Figma 101:7209). When provided, `onLocationPress` is ignored. */
    actionElement?: ReactNode;
    /** Override the card's border color. Used to highlight the card when an
     *  employee is in an alerting state (Figma 101:7209 uses content.error). */
    borderColor?: string;
    testID?: string;
    accessibilityLabel?: string;
}

declare const EmployeeOverviewCard: React$1.ForwardRefExoticComponent<EmployeeOverviewCardProps & React$1.RefAttributes<View>>;

interface ExamInfoCardProps {
    year: string | number;
    date: string;
    examName: string;
    onExamPress?: () => void;
    actionLabel?: string;
    onActionPress?: () => void;
    actionDisabled?: boolean;
    fullWidth?: boolean;
    /**
     * Compact layout for sidebar lists (e.g. admin profile exam history,
     * Figma `159:15646`): tight single-row, no fixed inner widths, no
     * underline on examName, action button rendered as an icon-only
     * download button instead of a labelled `Button`. Default `false`.
     */
    compact?: boolean;
    /**
     * Mute the year/date/exam-name text colors to indicate a past or
     * inactive exam. Action button styling is unaffected. Used on mobile
     * my-stats to dim out-of-window history entries (Figma `342:9907`).
     */
    past?: boolean;
    /**
     * Switch the `compact` row to the mobile metric spec instead of the
     * default admin/sidebar spec. Affects card padding (8 all-sides),
     * gap (12), year text (Inter Bold 14 instead of Montserrat Bold 16),
     * date text (Inter Medium 12 instead of Regular 14), action button
     * (4px all-sides padding + drop shadow). Required for mobile
     * `my-stats` (Figma `342:9907`) and `settings/health-data`
     * (Figma `353:12057`). No effect when `compact` is false.
     */
    mobile?: boolean;
    /**
     * Render the year text in regular weight (instead of bold) to
     * indicate an upcoming / future exam. Per Figma the last exam in a
     * history list (e.g. `342:9911`, `361:12380`) renders this way. Only
     * meaningful in `mobile compact` mode.
     */
    future?: boolean;
    accessibilityLabel?: string;
    testID?: string;
}

declare const ExamInfoCard: React$1.ForwardRefExoticComponent<ExamInfoCardProps & React$1.RefAttributes<View>>;

interface HeaderUserInfoProps {
    bpm: number;
    pressure: string;
    progress?: number;
    avatarUri?: string;
    bpmUnit?: string;
    accessibilityLabel?: string;
    testID?: string;
    heartIconName?: IconName;
    pressureIconName?: IconName;
    bordered?: boolean;
    borderColor?: string;
}

declare const HeaderUserInfo: React$1.ForwardRefExoticComponent<HeaderUserInfoProps & React$1.RefAttributes<View>>;

type LogoType = 'complete' | 'symbol';
type LogoSize = 's' | 'm' | 'l';
interface LogoProps {
    type?: LogoType;
    size?: LogoSize;
    color?: string;
    testID?: string;
    accessibilityLabel?: string;
}

declare const Logo: {
    ({ type, size, color, testID, accessibilityLabel, }: LogoProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface HeaderProps extends HeaderUserInfoProps {
    logoSize?: LogoSize;
    logoType?: LogoType;
    fullWidth?: boolean;
}

declare const Header: React$1.ForwardRefExoticComponent<HeaderProps & React$1.RefAttributes<View>>;

type HeartrateStatusCondition = 'check' | 'low' | 'alert';
interface HeartrateStatusProps {
    condition?: HeartrateStatusCondition;
    size?: number;
    testID?: string;
    accessibilityLabel?: string;
}

declare const HeartrateStatus: {
    ({ condition, size, testID, accessibilityLabel, }: HeartrateStatusProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type HeartStatusCondition = HeartrateStatusCondition;
interface HeartStatusProps {
    condition?: HeartStatusCondition;
    size?: number;
    testID?: string;
    accessibilityLabel?: string;
}

declare const HeartStatus: {
    ({ condition, size, testID, accessibilityLabel, }: HeartStatusProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface HorizontalCardProps {
    label: string;
    leftIcon?: IconName;
    /** Defaults to `'keyboard_arrow_right'` (chevron) inside the component. */
    rightIcon?: IconName;
    onPress?: () => void;
    disabled?: boolean;
    accessibilityLabel?: string;
    testID?: string;
}

/**
 * HorizontalCard — full-width list-item card with a bold label and a
 * chevron-right. Used for the mobile Settings list (Figma 348:10615).
 *
 * Distinct from `MenuItem` (side-menu entry; no chevron, different
 * padding/height rules and per-state bg swaps). Keep both — they
 * solve different layout problems.
 */
declare const HorizontalCard: React$1.ForwardRefExoticComponent<HorizontalCardProps & React$1.RefAttributes<View>>;

type RadioSize = 's' | 'm';
interface RadioProps extends Pick<PressableProps, 'disabled' | 'accessibilityLabel' | 'accessibilityHint' | 'testID'> {
    label: string;
    checked: boolean;
    onChange?: (checked: boolean) => void;
    size?: RadioSize;
    value?: string;
}

declare const Radio: React$1.ForwardRefExoticComponent<RadioProps & React$1.RefAttributes<View>>;

type CheckboxSize = 's' | 'm';
interface CheckboxProps extends Pick<PressableProps, 'disabled' | 'accessibilityLabel' | 'accessibilityHint' | 'testID'> {
    checked: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
    size?: CheckboxSize;
}

declare const Checkbox: React$1.ForwardRefExoticComponent<CheckboxProps & React$1.RefAttributes<View>>;

/**
 * Color variant for the description slot below the input.
 * - `default`: neutral content.dark (default behavior — backwards-compatible)
 * - `success`: content.success — used for confirmation messages ("As senhas são iguais ✓")
 * - `error`: content.error — used for validation errors
 * - `warning`: content.warning — used for non-blocking warnings
 */
type InputDescriptionVariant = 'default' | 'success' | 'error' | 'warning';
interface InputProps extends Omit<TextInputProps, 'editable' | 'style' | 'placeholderTextColor'> {
    label?: string;
    description?: string;
    descriptionVariant?: InputDescriptionVariant;
    iconRight?: ReactNode;
    disabled?: boolean;
}

declare const Input: React$1.ForwardRefExoticComponent<InputProps & React$1.RefAttributes<TextInput>>;

interface ComboboxOption {
    label: string;
    value: string;
}
interface ComboboxProps {
    label?: string;
    description?: string;
    placeholder?: string;
    options: ComboboxOption[];
    value?: string;
    onChange?: (value: string) => void;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    disabled?: boolean;
    accessibilityLabel?: string;
    accessibilityHint?: string;
    testID?: string;
}

declare const Combobox: React$1.ForwardRefExoticComponent<ComboboxProps & React$1.RefAttributes<View>>;

interface SearchInputProps extends Omit<TextInputProps, 'editable' | 'style' | 'placeholderTextColor'> {
    disabled?: boolean;
    onClear?: () => void;
}

declare const SearchInput: React$1.ForwardRefExoticComponent<SearchInputProps & React$1.RefAttributes<TextInput>>;

interface ProgressBarProps {
    value: number;
    disabled?: boolean;
    color?: string;
    trackColor?: string;
    /**
     * Optional horizontal color stops. When provided (2+ colors), the fill
     * renders an SVG linear gradient instead of a solid color; `color` is
     * ignored. Order is along the gradient axis (left→right by default; pass
     * `gradientDirection="rtl"` to flip).
     * Example: `['#3eab2e', '#ef8600', '#f5667a']` for success → warning → error.
     */
    gradient?: string[];
    /**
     * Explicit gradient stop positions in percent (0-100), aligned by index
     * with `gradient`. When omitted, stops are auto-distributed evenly across
     * the array length. Use this for Figma designs with non-uniform stops
     * (e.g. mobile my-stats fadigue ProgressBar — `[43.75, 79.253, 100]`,
     * Figma `342:9447`).
     */
    gradientStops?: number[];
    /**
     * Gradient orientation along the bar's main axis. `'ltr'` (default) places
     * the first color on the left, the last on the right. `'rtl'` reverses
     * the axis (first color on the right) — matches Tailwind's
     * `bg-gradient-to-l` used in the mobile my-stats fadigue bar.
     */
    gradientDirection?: 'ltr' | 'rtl';
    /**
     * Wrap the fill in a visible track frame: 1px solid `content.medium`
     * border, `background`-colored interior, pill shape. The fill sits inside
     * with symmetric padding so the rounded fill ends are inset from the
     * frame edges. Used for the my-stats fadigue ProgressBar
     * (Figma `342:9447` — 22px tall frame around a 6px gradient fill).
     * Default `false`.
     */
    bordered?: boolean;
    /**
     * Outer track height in pixels when `bordered`. Only meaningful with
     * `bordered`; defaults to 22 (matches Figma `342:9447`). The fill itself
     * stays at 6px; padding = (trackHeight - 6) / 2 keeps the fill visually
     * centered.
     */
    trackHeight?: number;
    accessibilityLabel?: string;
    testID?: string;
}

declare const ProgressBar: React$1.ForwardRefExoticComponent<ProgressBarProps & React$1.RefAttributes<View>>;

type ChipState = 'default' | 'active' | 'disable';
/**
 * Chip visual variant.
 * - `outline` (default): filter-style chip with primary-colored border and
 *   text on a transparent background. Used in filter rows where the chip
 *   acts as a toggle.
 * - `filled`: solid badge with `surface.primary` background and dark text,
 *   small radius. Used for read-only tag lists (e.g. allergies on the
 *   admin profile, Figma `159:14138`).
 */
type ChipVariant = 'outline' | 'filled';
/**
 * Chip accent / color scheme.
 * - `primary` (default): green family — `surface.primary` fill and
 *   `content.primary` border/text.
 * - `secondary`: blue family — `surface.secondaryLight` fill and
 *   `content.secondary` border/text. Used for the allergies tag list on the
 *   mobile my-stats screen (Figma `342:9892`).
 */
type ChipColorScheme = 'primary' | 'secondary';
interface ChipProps extends Pick<PressableProps, 'accessibilityLabel' | 'accessibilityHint' | 'testID'> {
    label: string;
    state?: ChipState;
    variant?: ChipVariant;
    colorScheme?: ChipColorScheme;
    onPress?: () => void;
}

declare const Chip: React$1.ForwardRefExoticComponent<ChipProps & React$1.RefAttributes<View>>;

type ChipGroupMode = 'single' | 'multiple';
interface ChipGroupProps {
    options: string[];
    mode?: ChipGroupMode;
    maxSelections?: number;
    initialValue?: string | string[];
    value?: string | string[];
    onChange?: (value: string | string[]) => void;
    /**
     * Forwarded to each `Chip`. Defaults to `outline`.
     */
    variant?: ChipVariant;
    /**
     * Forwarded to each `Chip`. Defaults to `primary` (green family).
     * Use `secondary` for blue tag lists (e.g. mobile my-stats allergies,
     * Figma `342:9892`).
     */
    colorScheme?: ChipColorScheme;
    style?: StyleProp<ViewStyle>;
}

declare const ChipGroup: ({ options, mode, maxSelections, initialValue, value, onChange, variant, colorScheme, style, }: ChipGroupProps) => react_jsx_runtime.JSX.Element;

interface IconProps {
    name: IconName;
    size?: number;
    width?: number;
    height?: number;
    color?: string;
    testID?: string;
    accessibilityLabel?: string;
}

declare const Icon: ({ name, size, width, height, color, testID, accessibilityLabel, }: IconProps) => react_jsx_runtime.JSX.Element | null;

type ImageResizeMode = 'cover' | 'fill' | 'contain' | 'repeat' | 'stretch' | 'center';
interface ImageProps {
    source: ImageSourcePropType | string;
    width: number;
    height: number;
    resizeMode?: ImageResizeMode;
    accessibilityLabel?: string;
    accessibilityHint?: string;
    testID?: string;
    onLoad?: () => void;
    onError?: () => void;
}

declare const Image: React$1.ForwardRefExoticComponent<ImageProps & React$1.RefAttributes<Image$1>>;

interface ImageUploaderValue {
    uri: string;
}
interface ImageUploaderProps {
    value?: ImageUploaderValue | null;
    progress?: number;
    onTakePhoto?: () => void;
    onPickFile?: () => void;
    onRemove?: () => void;
    helperText?: string;
    takePhotoLabel?: string;
    pickFileLabel?: string;
    showTakePhoto?: boolean;
    /**
     * Accent color applied to the icon and label of the inner CTA buttons
     * ("Tirar Foto" / "Enviar arquivo"). Defaults to `theme.content.primary`
     * for icons and the Button outline default (`content.primaryLight`) for
     * labels. Set this to `theme.content.primary` to get the fully-saturated
     * green look the mobile my-stats screen uses (Figma `342:9907`).
     */
    accentColor?: string;
    disabled?: boolean;
    accessibilityLabel?: string;
    removeAccessibilityLabel?: string;
    testID?: string;
}

declare const ImageUploader: React$1.ForwardRefExoticComponent<ImageUploaderProps & React$1.RefAttributes<View>>;

type MapControlVariant = 'operators' | 'heatmap' | 'cameras';
interface MapControlOption {
    id: string;
    label: string;
    checked: boolean;
}
interface MapControlProps {
    variant: MapControlVariant;
    expanded?: boolean;
    defaultExpanded?: boolean;
    onExpandedChange?: (expanded: boolean) => void;
    title?: string;
    searchPlaceholder?: string;
    searchValue?: string;
    onSearchChange?: (text: string) => void;
    options?: MapControlOption[];
    onOptionChange?: (id: string, checked: boolean) => void;
    testID?: string;
    accessibilityLabel?: string;
}

declare const MapControl: React$1.ForwardRefExoticComponent<MapControlProps & React$1.RefAttributes<View>>;

type LocationPinStatus = 'good' | 'alert' | 'low' | 'offline';
type LocationPinVariant = 'avatar' | 'camera' | 'badge';
type LocationPinProps = {
    /** Visual variant. 'avatar' renders an Avatar circle (worker pin);
     *  'camera' renders a green square card with a camera icon;
     *  'badge' renders a solid status-colored circle with an inner glyph
     *  (check for 'good', exclamation for 'alert'/'low'). Default 'avatar'. */
    variant?: LocationPinVariant;
    /** Avatar image URI. Required when variant='avatar'; ignored otherwise. */
    avatarUri?: string;
    /** Status color preset. Default 'good'. Drives avatar border (avatar variant)
     *  and body fill + inner glyph (badge variant). Ignored for variant='camera'. */
    status?: LocationPinStatus;
    /** Override the status-derived border color (avatar) or body fill (badge). */
    borderColor?: string;
    /** Body diameter (avatar/badge) or side length (camera) in px. Default 40. */
    size?: number;
    /** Accessible label, typically the operator or camera name. */
    name?: string;
    /** Tail color. Defaults: theme.background (avatar), theme.surface.primary
     *  (camera), or the body fill (badge). */
    tailColor?: string;
    testID?: string;
};

declare const LocationPin: React$1.ForwardRefExoticComponent<LocationPinProps & React$1.RefAttributes<View>>;

type MenuItemVariant = 'default' | 'compact' | 'minimal';
interface MenuItemProps {
    label: string;
    icon?: IconName;
    active?: boolean;
    disabled?: boolean;
    variant?: MenuItemVariant;
    /** Optional unread/count badge rendered as a red pill overlaid on the
     *  top-left of the item. Use for navigation entries that carry pending
     *  counts (alerts, reports, messages). Stringified for display. */
    badge?: string | number;
    /** Override the rendered icon size (in px). Defaults to 18 for `compact`
     *  and 22 for all other variants. Use this when a tight Figma spec wants
     *  a smaller glyph inside the standard MenuItem chrome (e.g. compact map
     *  side-menus where the design calls for 20px icons). */
    iconSize?: number;
    /** Where the badge sits relative to the item bbox.
     *  - `overlay` (default): badge anchored to top-left INSIDE the item (the
     *    classic notification chip overlapping the icon's top-left corner).
     *  - `outside-left`: badge half-overlaps the LEFT EDGE of the item (Figma
     *    165:21150 — map side menus where the +9 chip pops out beyond the
     *    icon column). Half-overlap = left:-14 with badge width 28. */
    badgePosition?: 'overlay' | 'outside-left';
    onPress?: () => void;
    fullWidth?: boolean;
    accessibilityLabel?: string;
    testID?: string;
}

declare const MenuItem: React$1.ForwardRefExoticComponent<MenuItemProps & React$1.RefAttributes<View>>;

interface SideMenuItem {
    value: string;
    label: string;
    icon?: IconName;
    /** Optional badge (count/status) overlaid on the top-left of the item — e.g.
     *  unread message counts. Forwarded as-is to MenuItem.badge. */
    badge?: string | number;
    disabled?: boolean;
    variant?: MenuItemVariant;
}
interface SideMenuProps {
    items: SideMenuItem[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    variant?: MenuItemVariant;
    fullWidth?: boolean;
    /** Override the icon size (in px) for every item in this menu. Forwarded
     *  to each MenuItem via its `iconSize` prop. Defaults to MenuItem default
     *  (18 for compact, 22 otherwise). */
    iconSize?: number;
    /** Where badges sit relative to each item bbox. Forwarded to MenuItem.
     *  Defaults to `overlay` (inside top-left). Use `outside-left` for map
     *  side menus where Figma pops the +9 chip out to the left of the column. */
    badgePosition?: 'overlay' | 'outside-left';
    accessibilityLabel?: string;
    testID?: string;
}

declare const SideMenu: React$1.ForwardRefExoticComponent<SideMenuProps & React$1.RefAttributes<View>>;

type SilhouetteGender = 'male' | 'female';
interface SilhouetteProps {
    gender?: SilhouetteGender;
    height?: number;
    showHeart?: boolean;
    /**
     * When true, fills the body with a 4-stop thermal gradient
     * (red → orange → yellow → green from head to feet). Used in the
     * AdminDetails / WorkerDetails screens (Figma 53:6344, 159:15651)
     * to indicate heat / heart-rate distribution across the body.
     * Default false keeps the original primary-green gradient.
     */
    heatGradient?: boolean;
    testID?: string;
    accessibilityLabel?: string;
}

declare const Silhouette: {
    ({ gender, height, showHeart, heatGradient, testID, accessibilityLabel, }: SilhouetteProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface TimeStampProps {
    time: string;
    testID?: string;
    accessibilityLabel?: string;
}

declare const TimeStamp: React$1.ForwardRefExoticComponent<TimeStampProps & React$1.RefAttributes<View>>;

interface CaloriesTagProps {
    value: number | string;
    unit?: string;
    testID?: string;
    accessibilityLabel?: string;
}

declare const CaloriesTag: React$1.ForwardRefExoticComponent<CaloriesTagProps & React$1.RefAttributes<View>>;

interface LineCaloriesPoint {
    time: string;
    kcal: number;
}
interface LineCaloriesChartProps {
    points: LineCaloriesPoint[];
    unit?: string;
    width?: number;
    height?: number;
    fullWidth?: boolean;
    testID?: string;
    accessibilityLabel?: string;
}

/**
 * Native LineCaloriesChart implementation. Web build picks the .web.tsx variant.
 */

declare const LineCaloriesChart: React$1.ForwardRefExoticComponent<LineCaloriesChartProps & React$1.RefAttributes<View>>;

type TitleVariant = `title.${keyof typeof typography.title}`;
interface TitleProps extends TextProps$1 {
    variant?: TitleVariant;
    color?: string;
    children: React.ReactNode;
}

declare const Title: React$1.ForwardRefExoticComponent<TitleProps & React$1.RefAttributes<Text$1>>;

interface ToggleProps {
    value?: boolean;
    defaultValue?: boolean;
    onChange?: (value: boolean) => void;
    disabled?: boolean;
    leftLabel?: string;
    rightLabel?: string;
    accessibilityLabel?: string;
    testID?: string;
}

declare const Toggle: React$1.ForwardRefExoticComponent<ToggleProps & React$1.RefAttributes<View>>;

type WeatherCondition = 'sunny' | 'rainy' | 'partly-cloudy';
type WeatherIconSize = 's' | 'm' | 'l';
interface WeatherIconProps {
    condition: WeatherCondition;
    size?: WeatherIconSize;
    testID?: string;
    accessibilityLabel?: string;
}

declare const WeatherIcon: {
    ({ condition, size, testID, accessibilityLabel, }: WeatherIconProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface WeatherEventChipProps {
    time: string;
    label: string;
    testID?: string;
    accessibilityLabel?: string;
}

declare const WeatherEventChip: React$1.ForwardRefExoticComponent<WeatherEventChipProps & React$1.RefAttributes<View>>;

interface WeatherTimelineEntryProps {
    condition: WeatherCondition;
    time: string;
    label: string;
    testID?: string;
    accessibilityLabel?: string;
}

declare const WeatherTimelineEntry: React$1.ForwardRefExoticComponent<WeatherTimelineEntryProps & React$1.RefAttributes<View>>;

interface NowMarkerProps {
    label?: string;
    height?: number;
    testID?: string;
    accessibilityLabel?: string;
}

declare const NowMarker: React$1.ForwardRefExoticComponent<NowMarkerProps & React$1.RefAttributes<View>>;

type StatusTagStatus = 'canceled' | 'pending' | 'accept' | 'info';
interface StatusTagProps {
    status?: StatusTagStatus;
    label?: string;
    fullWidth?: boolean;
    accessibilityLabel?: string;
    testID?: string;
}

declare const StatusTag: React$1.ForwardRefExoticComponent<StatusTagProps & React$1.RefAttributes<View>>;

interface ReportCardAuthor {
    name: string;
    avatarUri?: string;
}
interface ReportCardProps {
    status: StatusTagStatus;
    statusLabel?: string;
    title: string;
    summary: string;
    summaryLabel?: string;
    creationDate: string;
    creationDateLabel?: string;
    author: ReportCardAuthor;
    authorLabel?: string;
    location?: string;
    responsibles?: string;
    responsiblesLabel?: string;
    onPress?: () => void;
    fullWidth?: boolean;
    testID?: string;
    accessibilityLabel?: string;
}

declare const ReportCard: React$1.ForwardRefExoticComponent<ReportCardProps & React$1.RefAttributes<View>>;

interface WeatherTimelineEvent {
    id: string;
    condition: WeatherCondition;
    time: string;
    label: string;
    isNow?: boolean;
}
type IntensityColor = 'rain' | 'sun' | 'mild' | 'cloudy';
interface IntensitySegment {
    id: string;
    flex: number;
    color: IntensityColor | string;
}
interface WeatherTimelineScrollbar {
    /** Width of the visible thumb as a percentage of the track (0-100). */
    thumbPercent: number;
    /** Starting offset of the thumb as a percentage from the left of the track (0-100). Defaults to 0. */
    thumbStartPercent?: number;
}
interface WeatherTimelineProps {
    events: WeatherTimelineEvent[];
    intensitySegments?: IntensitySegment[];
    nowLabel?: string;
    /**
     * Horizontal position of the AGORA marker as a percentage of the timeline width (0-100).
     * The pole is rendered centered on this point. Takes priority over `event.isNow`.
     */
    nowAtPercent?: number;
    /**
     * Optional scrollbar/scrubber rendered below the timeline (Figma frame 21:1501).
     * Pass `false` or omit to hide.
     */
    scrollbar?: WeatherTimelineScrollbar | false;
    fullWidth?: boolean;
    testID?: string;
    accessibilityLabel?: string;
}

declare const WeatherTimeline: React$1.ForwardRefExoticComponent<WeatherTimelineProps & React$1.RefAttributes<View>>;

interface WorkersInfoCardEmployee {
    name: string;
    age: number | string;
    bloodType: string;
    role: string;
    secondaryRole?: string;
    avatarUri?: string;
}
interface WorkersInfoCardAlert {
    icon: IconName;
    title: string;
    description: string;
}
interface WorkersInfoCardProps {
    employee: WorkersInfoCardEmployee;
    enabled?: boolean;
    onEnabledChange?: (enabled: boolean) => void;
    expanded?: boolean;
    defaultExpanded?: boolean;
    onExpandedChange?: (expanded: boolean) => void;
    alerts?: WorkersInfoCardAlert[];
    onDelete?: () => void;
    onChat?: () => void;
    onLocation?: () => void;
    onExamHistory?: () => void;
    onCallEmployee?: () => void;
    onSendBreakAlert?: () => void;
    examHistoryLabel?: string;
    callEmployeeLabel?: string;
    sendBreakAlertLabel?: string;
    fullWidth?: boolean;
    testID?: string;
    accessibilityLabel?: string;
}

declare const WorkersInfoCard: React$1.ForwardRefExoticComponent<WorkersInfoCardProps & React$1.RefAttributes<View>>;

type TextVariant = `subtitle.${keyof typeof typography.subtitle}` | `body.${keyof typeof typography.body}` | `caption.${keyof typeof typography.caption}`;
interface TextProps extends TextProps$1 {
    variant?: TextVariant;
    color?: string;
    children: React.ReactNode;
}

declare const Text: React$1.ForwardRefExoticComponent<TextProps & React$1.RefAttributes<Text$1>>;

type StatusChartCondition = 'good' | 'alert' | 'low';
/**
 * StatusChart size preset:
 * - `default`: 360×374 canvas — the dashboard size, matches the original
 *   Figma source.
 * - `compact`: 289.733×301 canvas (0.80481× scale) — used by the mobile
 *   my-stats profile screen (Figma `342:9420`). The internal geometry is
 *   uniformly scaled via a `transform: scale` so all sub-elements (rings,
 *   buttons, silhouette, settings badge) shrink proportionally.
 */
type StatusChartSize = 'default' | 'compact';
interface StatusChartProps {
    condition?: StatusChartCondition;
    /**
     * Status condition bar fill, expressed as a value in [0, 1]. The bar
     * sweeps clockwise from 12 o'clock; `progress = 1` is the full ring,
     * `progress = 0` is empty. Use it as a "decreasing" progress indicator —
     * lower values shrink the visible arc back from its end. Defaults to 1.
     */
    progress?: number;
    /**
     * Outer canvas preset. Defaults to `default` (360×374, dashboard size).
     * Use `compact` for the my-stats screen (289.733×301, Figma `342:9420`).
     */
    size?: StatusChartSize;
    /**
     * Render the bottom-right heart-rate action button (with its nested
     * settings sub-badge). Defaults to `true` — matches the dashboard variant
     * (Figma `245:23280`). Pass `false` on screens that omit the button,
     * e.g. the mobile my-stats StatusChart (Figma `342:9420`).
     */
    showActionButton?: boolean;
    /**
     * Optional press handler for the heart-rate action button (bottom-right).
     * If omitted, the button is rendered non-interactive. Ignored when
     * `showActionButton` is `false`.
     */
    onPressHeartRate?: (event: GestureResponderEvent) => void;
    testID?: string;
    accessibilityLabel?: string;
}

declare const StatusChart: {
    ({ condition, progress, size, showActionButton, onPressHeartRate, testID, accessibilityLabel, }: StatusChartProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type StepState = 'default' | 'current' | 'done';
interface StepProps {
    /** Visual state of the step. */
    state: StepState;
    /**
     * 1-based step number displayed when `state === 'default'`. Required for
     * default state; ignored for `current` (renders ●) and `done` (renders ✓).
     */
    number?: number;
    testID?: string;
    accessibilityLabel?: string;
}

declare const Step: {
    ({ state, number, testID, accessibilityLabel }: StepProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface StepBarProps {
    /** Total number of steps in the flow. */
    total: number;
    /**
     * 1-based current step index. Steps before `current` render as `done`,
     * the step at `current` renders as `current`, and steps after render as
     * `default` with their number.
     */
    current: number;
    testID?: string;
    accessibilityLabel?: string;
}

declare const StepBar: {
    ({ total, current, testID, accessibilityLabel }: StepBarProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type GenderValue = 'female' | 'male';
interface GenderSelectionCardProps {
    /** Which gender this card represents — drives icon + accessibility. */
    gender: GenderValue;
    /** Display label below the icon (e.g. "Feminino", "Masculino"). */
    label: string;
    /** Whether the card is the selected one in its group. */
    selected: boolean;
    onPress: () => void;
    /**
     * Override the icon shown inside the card. Defaults to `female` / `male`
     * from the DS registry based on `gender`.
     */
    iconName?: IconName;
    testID?: string;
    accessibilityLabel?: string;
}

declare const GenderSelectionCard: {
    ({ gender, label, selected, onPress, iconName, testID, accessibilityLabel, }: GenderSelectionCardProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface GenderSelectorProps {
    /** Currently selected gender, or `null` if nothing is selected yet. */
    value: GenderValue | null;
    onChange: (value: GenderValue) => void;
    /** Custom labels for each card. Defaults match Figma. */
    femaleLabel?: string;
    maleLabel?: string;
    testID?: string;
}

declare const GenderSelector: {
    ({ value, onChange, femaleLabel, maleLabel, testID, }: GenderSelectorProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type SurfaceVariant = keyof typeof semantic.surface;
type SurfacePadding = keyof typeof semantic.padding;
type SurfaceRadius = keyof typeof semantic.border.radius;
interface SurfaceProps extends ViewProps {
    variant?: SurfaceVariant;
    padding?: SurfacePadding;
    radius?: SurfaceRadius;
    children: ReactNode;
}

declare const Surface: React$1.ForwardRefExoticComponent<SurfaceProps & React$1.RefAttributes<View>>;

type SurfaceTone = 'dark' | 'light' | 'disabled';
declare const isLightBgVariant: (variant: SurfaceVariant) => boolean;
interface SurfaceContextValue {
    tone: SurfaceTone;
}
declare const useSurfaceTone: () => SurfaceContextValue;

interface SmartbandStatusProps {
    /**
     * Sync progress 0..1 (drives the ProgressBar). 0 at start, 1 when sync
     * completes.
     */
    progress: number;
    /**
     * Heart rate value (bpm). `null` renders the `/` placeholder used while
     * sync is in progress; a number renders the value (e.g. 88).
     */
    heartRate?: number | null;
    /**
     * Blood pressure label (e.g. "12/8"). `null` renders the `/` placeholder.
     */
    bloodPressure?: string | null;
    /** Status message rendered below the sync rows. */
    message: string;
    testID?: string;
    accessibilityLabel?: string;
}

declare const SmartbandStatus: {
    ({ progress, heartRate, bloodPressure, message, testID, accessibilityLabel, }: SmartbandStatusProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface SuccessBadgeProps {
    /** Diameter of the circular badge in pixels. Default 96 (Figma `211:12997`). */
    size?: number;
    /**
     * Icon name from the DS registry to render centered inside the badge.
     * Default `'check'`. Use any registered IconName when reusing this component
     * for non-success contexts.
     */
    iconName?: IconName;
    /**
     * Icon size in pixels. Default ~58% of `size` (≈56 when size=96, per Figma).
     * Override when a different icon needs a different inner ratio.
     */
    iconSize?: number;
    /**
     * Gradient color stops `[from, to]` (top → bottom).
     * Default `[theme.surface.primary, theme.surface.secondary]` per Figma.
     */
    colors?: [string, string];
    /** Color of the inner icon. Default `theme.content.dark`. */
    iconColor?: string;
    testID?: string;
    accessibilityLabel?: string;
}

declare const SuccessBadge: {
    ({ size, iconName, iconSize, colors, iconColor, testID, accessibilityLabel, }: SuccessBadgeProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface TabItem {
    value: string;
    label: string;
    disabled?: boolean;
}
/**
 * Tabs variant:
 * - `segmented`: classic 3-up button group (shared borders, only outer
 *   corners rounded). Default for backwards compatibility.
 * - `separated`: each tab is an independent pill with all 4 corners
 *   rounded and a fixed gap between siblings. Used in Figma 69:14770
 *   monitoring-alerts where the tabs read as 3 distinct buttons.
 */
type TabsVariant = 'segmented' | 'separated';
interface TabsProps {
    tabs: TabItem[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    fullWidth?: boolean;
    disabled?: boolean;
    variant?: TabsVariant;
    accessibilityLabel?: string;
    testID?: string;
}

declare const Tabs: React$1.ForwardRefExoticComponent<TabsProps & React$1.RefAttributes<View>>;

type ToastVariant = 'error' | 'success' | 'warning' | 'info';
interface ToastProps {
    variant?: ToastVariant;
    title: string;
    message?: string;
    onClose?: () => void;
    accessibilityLabel?: string;
    testID?: string;
}

declare const Toast: React$1.ForwardRefExoticComponent<ToastProps & React$1.RefAttributes<View>>;

interface TopBarProps {
    /** Page title shown right-aligned, content.dark. Required. */
    title: string;
    /** Back-button press handler. When provided, the chevron+label
     *  renders and is interactive; when omitted, the back slot is hidden. */
    onBack?: () => void;
    /** Override the back-button label. Defaults to "Voltar". */
    backLabel?: string;
    accessibilityLabel?: string;
    testID?: string;
}

/**
 * TopBar — drill-down navigation primitive. Left back-slot (optional)
 * with chevron-left + label, right title slot. Montserrat Bold 14 in
 * both slots; back slot uses content.primaryLight (#CAE8D4), title uses
 * content.dark. Figma 353:11629; first consumer: settings/personal-data.
 */
declare const TopBar: React$1.ForwardRefExoticComponent<TopBarProps & React$1.RefAttributes<View>>;

export { Accordion, type AccordionProps, ActivitiesOverviewCard, type ActivitiesOverviewCardProps, Avatar, AvatarGroup, type AvatarGroupItem, type AvatarGroupProps, type AvatarProps, type AvatarSize, BigNumbersCard, type BigNumbersCardProps, Button, type ButtonProps, CaloriesTag, type CaloriesTagProps, ChatBubble, type ChatBubblePosition, type ChatBubbleProps, ChatSection, type ChatSectionProps, type ChatSectionUser, ChatUserCard, type ChatUserCardProps, Checkbox, type CheckboxProps, type CheckboxSize, Chip, ChipGroup, type ChipGroupMode, type ChipGroupProps, type ChipProps, type ChipState, Combobox, type ComboboxOption, type ComboboxProps, DonutChart, type DonutChartProps, type DonutChartSize, type DonutGradient, EmployeeOverviewCard, type EmployeeOverviewCardEmployee, type EmployeeOverviewCardProps, ExamInfoCard, type ExamInfoCardProps, GenderSelectionCard, type GenderSelectionCardProps, GenderSelector, type GenderSelectorProps, type GenderValue, Header, type HeaderProps, HeaderUserInfo, type HeaderUserInfoProps, HeartStatus, type HeartStatusCondition, type HeartStatusProps, HeartrateStatus, type HeartrateStatusCondition, type HeartrateStatusProps, HorizontalCard, type HorizontalCardProps, Icon, type IconName, type IconProps, Image, type ImageProps, type ImageResizeMode, ImageUploader, type ImageUploaderProps, type ImageUploaderValue, Input, type InputProps, type IntensityColor, type IntensitySegment, LineCaloriesChart, type LineCaloriesChartProps, type LineCaloriesPoint, LocationPin, type LocationPinProps, type LocationPinStatus, Logo, type LogoProps, type LogoSize, type LogoType, MapControl, type MapControlOption, type MapControlProps, type MapControlVariant, MenuItem, type MenuItemProps, NowMarker, type NowMarkerProps, ProgressBar, type ProgressBarProps, Radio, type RadioProps, type RadioSize, ReportCard, type ReportCardAuthor, type ReportCardProps, SearchInput, type SearchInputProps, SideMenu, type SideMenuItem, type SideMenuProps, Silhouette, type SilhouetteGender, type SilhouetteProps, SmartbandStatus, type SmartbandStatusProps, StatusChart, type StatusChartCondition, type StatusChartProps, StatusTag, type StatusTagProps, type StatusTagStatus, Step, StepBar, type StepBarProps, type StepProps, type StepState, SuccessBadge, type SuccessBadgeProps, Surface, type SurfacePadding, type SurfaceProps, type SurfaceRadius, type SurfaceVariant, SwiThemeProvider, type SwiThemeProviderProps, type TabItem, Tabs, type TabsProps, Text, type TextProps, type TextVariant, type Theme, TimeStamp, type TimeStampProps, Title, type TitleProps, type TitleVariant, Toast, type ToastProps, type ToastVariant, Toggle, type ToggleProps, TopBar, type TopBarProps, type TypographyVariant, type WeatherCondition, WeatherEventChip, type WeatherEventChipProps, WeatherIcon, type WeatherIconProps, type WeatherIconSize, WeatherTimeline, WeatherTimelineEntry, type WeatherTimelineEntryProps, type WeatherTimelineEvent, type WeatherTimelineProps, WorkersInfoCard, type WorkersInfoCardAlert, type WorkersInfoCardEmployee, type WorkersInfoCardProps, elevation, fontFamily, fontSize, fontWeight, isLightBgVariant, primitive, semantic, theme, typography, useSurfaceTone, useTheme };
