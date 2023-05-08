import { Box, InputBase, Typography, styled, alpha, Button } from '@mui/material';

/* This is the virtual address space size input box.
*/
function VirtualAddressSpaceSize(params) {
    const { vasSize, setVasSize, pasSize } = params;

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
        console.log("handleInput, ")
        console.log(+document.getElementById('VASSizeInput').value <= pasSize) 
        console.log(+document.getElementById('VASSizeInput').value > 0)
        console.log(+document.getElementById('VASSizeInput') < 2048);
        if (+document.getElementById('VASSizeInput').value <= pasSize && +document.getElementById('VASSizeInput').value > 0 && +document.getElementById('VASSizeInput').value < 2048) {
            console.log("if statement");
            setVasSize(+document.getElementById('VASSizeInput').value);
        }
    };

    return (
        <Box sx={{ flexGrow: 1, width: "25vh" }}>
            <Typography>Virtual Address Space Size:</Typography>
            <BootstrapInput
                id="VASSizeInput"
                defaultValue={vasSize}
            />
            <Button onClick={ handleInput }>Confirm</Button>
        </Box>
    );
}

export default VirtualAddressSpaceSize;
