import { Lato, Open_Sans } from "next/font/google";
import localFont from "next/font/local";

const open_sans = Open_Sans({ subsets: ["latin"] });
const lato_font = Lato({ subsets: ['latin'], weight: ["100" , "300" , "400" , "700" , "900"] });

const manual = localFont({
    src: '../fonts/Manual/manual-condensed-medium.otf',
    variable: "--font-manual",
})

export { open_sans, manual, lato_font };