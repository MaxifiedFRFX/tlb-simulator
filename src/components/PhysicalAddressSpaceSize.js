import { Box, InputBase, Typography, styled, alpha, Button } from '@mui/material';

/* This is the physical address space size input box.
*/
function PhysicalAddressSpaceSize(params) {
    const { pasSize, setPasSize, vasSize } = params;

    const BootstrapInput = styled(InputBase)(({ theme }) => ({
        '& .MuiInputBase-input': {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
            border: '1px solid #ced4da',
            fontSize: 16,
            width: 'auto',
            padding: '10px 12px',
            transition: theme.transitions.create([
                'border-color',
                'background-color',
                'box-shadow',
            ]),
            // Use the system font instead of the default Roboto font.
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            '&:focus': {
                boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
                borderColor: theme.palette.primary.main,
            },
        },
    }));

    const handleInput = () => {
        if (+document.getElementById('PASSizeInput').value >= vasSize && +document.getElementById('PASSizeInput').value > 0 && +document.getElementById('PASSizeInput').value < 2048) {
            setPasSize(+document.getElementById('PASSizeInput').value);
        }
    };

    return (
        <Box sx={{ flexGrow: 1, width: "25vh" }}>
            <Typography>Physical Address Space Size:</Typography>
            <BootstrapInput
                id="PASSizeInput"
                defaultValue={pasSize}
            />
            <Button onClick={ handleInput }>Confirm</Button>
        </Box>
    );
}

export default PhysicalAddressSpaceSize;
