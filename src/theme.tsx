import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
    interface Palette {
        primaryButton: Palette['primary'];
        secondaryButton: Palette['secondary'];
        white: Palette['primary'];
    }
  
    interface PaletteOptions {
        primaryButton?: PaletteOptions['primary'];
        secondaryButton?: PaletteOptions['secondary'];
        white: PaletteOptions['primary'];
    }
  }
  
  declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        primaryButton: true;
        secondaryButton: true;
    }
  }

const theme = createTheme({
    palette: {
        primary: {
            main: '#ED217C',
        },
        secondary: {
            main: '#252422',
        },
        white: {
            main: '#FFF',
        },
        primaryButton: {
            main: '#ED217C',
            light: '#FFF',
            dark: '#E2C402',
            contrastText: '#2D3047',
        },
        secondaryButton: {
            main: '#FDFFFC',
            light: '#FCA1A1',
            dark: '#F76F72',
            contrastText: '#F76F72',
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#FFF',
                    color: '#ED217C',
                },
            },
        },
        MuiButton: {
          styleOverrides: {
            root: {
                borderRadius: '0px',
                boxShadow: 'none',
            },
            contained: {
                boxShadow: 'none',
                "&:hover": {
                    backgroundColor: '#FFF',
                    color: '#ED217C',
                },
            },
            // outlined: {
            //   borderColor: '#F1D302',
            //   ":hover" : { 
            //     boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
            //     backgroundColor: "#FDFFFC", }
            // },
          },
        },
        MuiCardActions: { 
          styleOverrides: {
            root: {
              "& > :not(:first-of-type)": {
                  marginLeft: "0px",
              },
            },
          },
        },
      },
});

export default theme;