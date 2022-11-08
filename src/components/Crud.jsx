import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import Demo from '../assets/web.webp'

const Header = styled(Box)`
    margin: 10px;
    & > div {
        margin-top: 10px;
    }
`;

const Image = styled('img')({
    width: '100%',
    height: '600px'
});

const Crud = () => {

    return (
        <Header>
            {/* <Typography variant="h4">CRUD</Typography> */}
            <Box >
                <Image src={Demo} />
            </Box>
        </Header>
    )
}

export default Crud
