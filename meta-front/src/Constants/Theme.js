import { createTheme } from '@mui/material'
import { primaryColor, neutralColorP, secondaryColor, neutralColorS, neutralColorN, neutralColor } from './Colors'

const Theme = createTheme ({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: neutralColorP
        },
        neutral: {
            main: neutralColorN,
            contrastText: neutralColor
        },
        secondary: {
            main: secondaryColor,
            contrastText: neutralColorS
        }
    }
})

export default Theme
