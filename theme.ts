import { buildLegacyTheme } from 'sanity'

const colors = {
    '--protienGolden': '#DCCA87',
    '--protienBlack': '#0C0C0C',
    '--protienGray': '#545454',
    '--protienCrimson': '#F5EFDB',
    '--protienGrey': '#AAAAAA',
    '--protienWhite': '#FFFFFF',
    '--protienGreen': '#0f9d58',
    '--protienRed': '#db4437',
}


export const proteinAdminTheme = buildLegacyTheme({
    /*Base Colors */

    "--black": colors["--protienBlack"],
    "--white": colors["--protienWhite"],
    "--gray": colors["--protienGray"],
    "--gray-base": colors["--protienGray"],

    "--component-bg": colors["--protienBlack"],
    "--component-text-color": colors["--protienWhite"],

    /* Brand Color */

    "--brand-primary": colors["--protienGolden"],

    /*Default Buttons Colors*/

    "--default-button-color": colors["--protienGrey"],
    "--default-button-primary-color": colors["--protienGolden"],
    "--default-button-success-color": colors["--protienGreen"],
    "--default-button-warning-color": colors["--protienCrimson"],
    "--default-button-danger-color": colors["--protienRed"],


    /*Default State Colors*/
    "--state-info-color": colors["--protienGolden"],
    "--state-success-color": colors["--protienGreen"],
    "--state-warning-color": colors["--protienCrimson"],
    "--state-danger-color": colors["--protienRed"],

    /*Navigation Bar Color*/
    "--main-navigation-color": colors["--protienBlack"],
    "--main-navigation-color--inverted": colors["--protienWhite"],

    "--focus-color": colors["--protienGolden"]
})