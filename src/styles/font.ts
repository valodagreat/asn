import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";

const open_sans = Open_Sans({ subsets: ["latin"] });

const manual = localFont({
    src: '../fonts/Manual/manual-condensed-medium.otf',
    variable: "--font-manual",
})

export { open_sans, manual };