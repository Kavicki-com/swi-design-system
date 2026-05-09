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
    readonly add_a_photo: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M440-440ZM120-120q-33 0-56.5-23.5T40-200v-480q0-33 23.5-56.5T120-760h126l74-80h240v80H355l-73 80H120v480h640v-360h80v360q0 33-23.5 56.5T760-120H120Zm640-560v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM440-260q75 0 127.5-52.5T620-440q0-75-52.5-127.5T440-620q-75 0-127.5 52.5T260-440q0 75 52.5 127.5T440-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Z";
    };
    readonly build: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M686-132 444-376q-20 8-40.5 12t-43.5 4q-100 0-170-70t-70-170q0-36 10-68.5t28-61.5l146 146 72-72-146-146q29-18 61.5-28t68.5-10q100 0 170 70t70 170q0 23-4 43.5T584-516l244 242q12 12 12 29t-12 29l-84 84q-12 12-29 12t-29-12Zm29-85 27-27-256-256q18-20 26-46.5t8-53.5q0-60-38.5-104.5T386-758l74 74q12 12 12 28t-12 28L332-500q-12 12-28 12t-28-12l-74-74q9 57 53.5 95.5T360-440q26 0 52-8t47-25l256 256ZM472-488Z";
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
    readonly mode_heat: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M240-400q0 52 21 98.5t60 81.5q-1-5-1-9v-9q0-32 12-60t35-51l113-111 113 111q23 23 35 51t12 60v9q0 4-1 9 39-35 60-81.5t21-98.5q0-50-18.5-94.5T648-574q-20 13-42 19.5t-45 6.5q-62 0-107.5-41T401-690q-39 33-69 68.5t-50.5 72Q261-513 250.5-475T240-400Zm240 52-57 56q-11 11-17 25t-6 29q0 32 23.5 55t56.5 23q33 0 56.5-23t23.5-55q0-16-6-29.5T537-292l-57-56Zm0-492v132q0 34 23.5 57t57.5 23q18 0 33.5-7.5T622-658l18-22q74 42 117 117t43 163q0 134-93 227T480-80q-134 0-227-93t-93-227q0-129 86.5-245T480-840Z";
    };
    readonly video_camera_back: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M200-320h400L462-500l-92 120-62-80-108 140Zm-40 160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Zm0-80h480v-480H160v480Zm0 0v-480 480Z";
    };
    readonly home: {
        readonly viewBox: "0 -960 960 960";
        readonly d: "M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z";
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
        readonly viewBox: "0 0 22 22";
        readonly d: "M12.4289 2.25012V2.95027C14.0226 3.17395 15.4732 3.88706 16.5206 4.96175C17.5679 6.03643 18.1434 7.4024 18.144 8.81472V10.1185C18.1455 11.8931 18.835 13.6147 20.0999 15.0019L20.7686 15.7284C20.8951 15.8661 20.9745 16.0324 20.9977 16.2079C21.0209 16.3834 20.9869 16.5611 20.8996 16.7204C20.8123 16.8798 20.6754 17.0143 20.5045 17.1084C20.3336 17.2026 20.1358 17.2525 19.9338 17.2526H2.06965C1.867 17.2529 1.66839 17.2031 1.49682 17.1087C1.32525 17.0144 1.18776 16.8794 1.10027 16.7195C1.01279 16.5595 0.978894 16.3812 1.00252 16.2051C1.02615 16.029 1.10633 15.8624 1.23378 15.7245L1.90247 14.998C3.16683 13.6122 3.85569 11.8917 3.85618 10.1185V8.81375C3.857 7.40159 4.43265 6.03586 5.47995 4.96138C6.52724 3.8869 7.97769 3.17392 9.5713 2.95027V2.25012C9.5713 1.91857 9.72183 1.6006 9.98978 1.36615C10.2577 1.13171 10.6211 1 11.0001 1C11.379 1 11.7424 1.13171 12.0104 1.36615C12.2783 1.6006 12.4289 1.91857 12.4289 2.25012ZM10.6457 4.75036C9.41377 4.75036 8.2323 5.17841 7.36101 5.94038C6.48972 6.70236 5.99994 7.73589 5.99935 8.81375V10.1185C5.99997 11.9838 5.38587 13.8097 4.23065 15.3774H17.774C16.6173 13.81 16.0017 11.9841 16.0008 10.1185V8.81375C16.0002 7.7364 15.5109 6.70331 14.6403 5.94142C13.7698 5.17952 12.5891 4.75114 11.3578 4.75036H10.6457ZM13.861 18.4997C13.8619 18.8283 13.7885 19.1538 13.6453 19.4575C13.502 19.7612 13.2915 20.0371 13.026 20.2694C12.7605 20.5017 12.4451 20.6859 12.098 20.8112C11.7509 20.9366 11.3789 21.0008 11.0034 21C10.628 21.0004 10.2561 20.9362 9.90898 20.8109C9.5619 20.6855 9.24644 20.5016 8.98062 20.2696C8.45157 19.7961 8.15243 19.1619 8.14586 18.4997H13.861Z";
    };
    readonly settings_filled: {
        readonly viewBox: "0 0 22 22";
        readonly d: "M9.92292 20.1666C9.51042 20.1666 9.15536 20.0291 8.85775 19.7541C8.56014 19.4791 8.38047 19.143 8.31875 18.7458L8.1125 17.2333C7.91389 17.1569 7.72689 17.0653 7.5515 16.9583C7.37611 16.8514 7.20408 16.7368 7.03542 16.6146L5.61458 17.2104C5.23264 17.3785 4.85069 17.3937 4.46875 17.2562C4.0868 17.1187 3.78889 16.8743 3.575 16.5229L2.49792 14.6437C2.28403 14.2923 2.22292 13.918 2.31458 13.5208C2.40625 13.1236 2.6125 12.7951 2.93333 12.5354L4.14792 11.6187C4.13264 11.5118 4.125 11.4085 4.125 11.3089V10.6901C4.125 10.5911 4.13264 10.4882 4.14792 10.3812L2.93333 9.46456C2.6125 9.20484 2.40625 8.87637 2.31458 8.47915C2.22292 8.08192 2.28403 7.70762 2.49792 7.35623L3.575 5.47706C3.78889 5.12567 4.0868 4.88123 4.46875 4.74373C4.85069 4.60623 5.23264 4.62151 5.61458 4.78956L7.03542 5.3854C7.20347 5.26317 7.37917 5.14859 7.5625 5.04165C7.74583 4.9347 7.92917 4.84304 8.1125 4.76665L8.31875 3.25415C8.37986 2.85692 8.55953 2.52081 8.85775 2.24581C9.15597 1.97081 9.51103 1.83331 9.92292 1.83331H12.0771C12.4896 1.83331 12.8449 1.97081 13.1432 2.24581C13.4414 2.52081 13.6207 2.85692 13.6812 3.25415L13.8875 4.76665C14.0861 4.84304 14.2734 4.9347 14.4494 5.04165C14.6254 5.14859 14.7971 5.26317 14.9646 5.3854L16.3854 4.78956C16.7674 4.62151 17.1493 4.60623 17.5312 4.74373C17.9132 4.88123 18.2111 5.12567 18.425 5.47706L19.5021 7.35623C19.716 7.70762 19.7771 8.08192 19.6854 8.47915C19.5938 8.87637 19.3875 9.20484 19.0667 9.46456L17.8521 10.3812C17.8674 10.4882 17.875 10.5915 17.875 10.6911V11.3089C17.875 11.4085 17.8597 11.5118 17.8292 11.6187L19.0437 12.5354C19.3646 12.7951 19.5708 13.1236 19.6625 13.5208C19.7542 13.918 19.6931 14.2923 19.4792 14.6437L18.3792 16.5229C18.1653 16.8743 17.8674 17.1187 17.4854 17.2562C17.1035 17.3937 16.7215 17.3785 16.3396 17.2104L14.9646 16.6146C14.7965 16.7368 14.6208 16.8514 14.4375 16.9583C14.2542 17.0653 14.0708 17.1569 13.8875 17.2333L13.6812 18.7458C13.6201 19.143 13.4408 19.4791 13.1432 19.7541C12.8456 20.0291 12.4902 20.1666 12.0771 20.1666H9.92292ZM10.0833 18.3333H11.8937L12.2146 15.9041C12.6882 15.7819 13.1276 15.6026 13.5327 15.3661C13.9379 15.1296 14.3082 14.843 14.6437 14.5062L16.9125 15.4458L17.8062 13.8875L15.8354 12.3979C15.9118 12.184 15.9653 11.9588 15.9958 11.7223C16.0264 11.4858 16.0417 11.245 16.0417 11C16.0417 10.7549 16.0264 10.5145 15.9958 10.2786C15.9653 10.0427 15.9118 9.81717 15.8354 9.60206L17.8062 8.11248L16.9125 6.55415L14.6437 7.51665C14.3076 7.16526 13.9373 6.87131 13.5327 6.63481C13.1282 6.39831 12.6888 6.21865 12.2146 6.09581L11.9167 3.66665H10.1062L9.78542 6.09581C9.3118 6.21804 8.87272 6.3977 8.46817 6.63481C8.06361 6.87192 7.69297 7.15823 7.35625 7.49373L5.0875 6.55415L4.19375 8.11248L6.16458 9.57915C6.08819 9.80831 6.03472 10.0375 6.00417 10.2666C5.97361 10.4958 5.95833 10.7403 5.95833 11C5.95833 11.2444 5.97361 11.4812 6.00417 11.7104C6.03472 11.9396 6.08819 12.1687 6.16458 12.3979L4.19375 13.8875L5.0875 15.4458L7.35625 14.4833C7.69236 14.8347 8.063 15.129 8.46817 15.3661C8.87333 15.6032 9.31242 15.7825 9.78542 15.9041L10.0833 18.3333ZM11.0458 14.2083C11.9319 14.2083 12.6882 13.8951 13.3146 13.2687C13.941 12.6423 14.2542 11.8861 14.2542 11C14.2542 10.1139 13.941 9.35762 13.3146 8.73123C12.6882 8.10484 11.9319 7.79165 11.0458 7.79165C10.1444 7.79165 9.38453 8.10484 8.76608 8.73123C8.14764 9.35762 7.83811 10.1139 7.8375 11C7.83689 11.8861 8.14642 12.6423 8.76608 13.2687C9.38575 13.8951 10.1457 14.2083 11.0458 14.2083Z";
    };
};
type IconName = keyof typeof iconPaths;

type AvatarSize = 's' | 'm' | 'l';
interface AvatarProps {
    uri?: string;
    size?: AvatarSize;
    customSize?: number;
    bordered?: boolean;
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

type ButtonVariant = 'contained' | 'outline' | 'ghost';
interface ButtonProps extends Pick<PressableProps, 'onPress' | 'onLongPress' | 'disabled' | 'accessibilityLabel' | 'accessibilityHint' | 'testID'> {
    label: string;
    variant?: ButtonVariant;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    fullWidth?: boolean;
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

interface InputProps extends Omit<TextInputProps, 'editable' | 'style' | 'placeholderTextColor'> {
    label?: string;
    description?: string;
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
    accessibilityLabel?: string;
    testID?: string;
}

declare const ProgressBar: React$1.ForwardRefExoticComponent<ProgressBarProps & React$1.RefAttributes<View>>;

type ChipState = 'default' | 'active' | 'disable';
interface ChipProps extends Pick<PressableProps, 'accessibilityLabel' | 'accessibilityHint' | 'testID'> {
    label: string;
    state?: ChipState;
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
    style?: StyleProp<ViewStyle>;
}

declare const ChipGroup: ({ options, mode, maxSelections, initialValue, value, onChange, style, }: ChipGroupProps) => react_jsx_runtime.JSX.Element;

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

type MenuItemVariant = 'default' | 'compact';
interface MenuItemProps {
    label: string;
    icon?: IconName;
    active?: boolean;
    disabled?: boolean;
    variant?: MenuItemVariant;
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
    accessibilityLabel?: string;
    testID?: string;
}

declare const SideMenu: React$1.ForwardRefExoticComponent<SideMenuProps & React$1.RefAttributes<View>>;

type SilhouetteGender = 'male' | 'female';
interface SilhouetteProps {
    gender?: SilhouetteGender;
    height?: number;
    showHeart?: boolean;
    testID?: string;
    accessibilityLabel?: string;
}

declare const Silhouette: {
    ({ gender, height, showHeart, testID, accessibilityLabel, }: SilhouetteProps): react_jsx_runtime.JSX.Element;
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

type StatusTagStatus = 'canceled' | 'pending' | 'accept';
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
interface WeatherTimelineProps {
    events: WeatherTimelineEvent[];
    intensitySegments?: IntensitySegment[];
    nowLabel?: string;
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
     * Optional press handler for the heart-rate action button (bottom-right).
     * If omitted, the button is rendered non-interactive.
     */
    onPressHeartRate?: (event: GestureResponderEvent) => void;
    testID?: string;
    accessibilityLabel?: string;
}

declare const StatusChart: {
    ({ condition, progress, onPressHeartRate, testID, accessibilityLabel, }: StatusChartProps): react_jsx_runtime.JSX.Element;
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

interface TabItem {
    value: string;
    label: string;
    disabled?: boolean;
}
interface TabsProps {
    tabs: TabItem[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    fullWidth?: boolean;
    disabled?: boolean;
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

export { Accordion, type AccordionProps, ActivitiesOverviewCard, type ActivitiesOverviewCardProps, Avatar, AvatarGroup, type AvatarGroupItem, type AvatarGroupProps, type AvatarProps, type AvatarSize, BigNumbersCard, type BigNumbersCardProps, Button, type ButtonProps, CaloriesTag, type CaloriesTagProps, ChatBubble, type ChatBubblePosition, type ChatBubbleProps, ChatSection, type ChatSectionProps, type ChatSectionUser, ChatUserCard, type ChatUserCardProps, Checkbox, type CheckboxProps, type CheckboxSize, Chip, ChipGroup, type ChipGroupMode, type ChipGroupProps, type ChipProps, type ChipState, Combobox, type ComboboxOption, type ComboboxProps, DonutChart, type DonutChartProps, type DonutChartSize, type DonutGradient, EmployeeOverviewCard, type EmployeeOverviewCardEmployee, type EmployeeOverviewCardProps, ExamInfoCard, type ExamInfoCardProps, Header, type HeaderProps, HeaderUserInfo, type HeaderUserInfoProps, HeartStatus, type HeartStatusCondition, type HeartStatusProps, HeartrateStatus, type HeartrateStatusCondition, type HeartrateStatusProps, Icon, type IconName, type IconProps, Image, type ImageProps, type ImageResizeMode, ImageUploader, type ImageUploaderProps, type ImageUploaderValue, Input, type InputProps, type IntensityColor, type IntensitySegment, LineCaloriesChart, type LineCaloriesChartProps, type LineCaloriesPoint, Logo, type LogoProps, type LogoSize, type LogoType, MapControl, type MapControlOption, type MapControlProps, type MapControlVariant, MenuItem, type MenuItemProps, NowMarker, type NowMarkerProps, ProgressBar, type ProgressBarProps, Radio, type RadioProps, type RadioSize, ReportCard, type ReportCardAuthor, type ReportCardProps, SearchInput, type SearchInputProps, SideMenu, type SideMenuItem, type SideMenuProps, Silhouette, type SilhouetteGender, type SilhouetteProps, StatusChart, type StatusChartCondition, type StatusChartProps, StatusTag, type StatusTagProps, type StatusTagStatus, Surface, type SurfacePadding, type SurfaceProps, type SurfaceRadius, type SurfaceVariant, SwiThemeProvider, type SwiThemeProviderProps, type TabItem, Tabs, type TabsProps, Text, type TextProps, type TextVariant, type Theme, TimeStamp, type TimeStampProps, Title, type TitleProps, type TitleVariant, Toast, type ToastProps, type ToastVariant, Toggle, type ToggleProps, type TypographyVariant, type WeatherCondition, WeatherEventChip, type WeatherEventChipProps, WeatherIcon, type WeatherIconProps, type WeatherIconSize, WeatherTimeline, WeatherTimelineEntry, type WeatherTimelineEntryProps, type WeatherTimelineEvent, type WeatherTimelineProps, WorkersInfoCard, type WorkersInfoCardAlert, type WorkersInfoCardEmployee, type WorkersInfoCardProps, elevation, fontFamily, fontSize, fontWeight, isLightBgVariant, primitive, semantic, theme, typography, useSurfaceTone, useTheme };
