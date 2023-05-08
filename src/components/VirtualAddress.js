import { Box, InputBase, Typography, styled, alpha, Button } from '@mui/material';

function VirtualAddress(params) {
    const { setVpn, virtualAddressSpace } = params;

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
        if (virtualAddressSpace.find(page => page.page === +document.getElementById('virtualAddressInput').value)) {
            setVpn(+document.getElementById('virtualAddressInput').value);
        }
    };

    return (
        <Box sx={{ flexGrow: 1, width: "25vh" }}>
            <Typography>Virtual Page Number:</Typography>
            <BootstrapInput
                id="virtualAddressInput"
            />
            <Button onClick={ handleInput }>Translate</Button>
        </Box>
    );
}

export default VirtualAddress;
