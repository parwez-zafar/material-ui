import React from 'react'
import { Button, Stack, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
const MuiBotton = () => {
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant='text' href='#'>Text</Button>
                <Button variant='contained'>contained</Button>
                <Button variant='outlined'>outlined</Button>


            </Stack>

            <Stack spacing={2} direction='row'>
                <Button variant='contained' color='primary'>primary</Button>
                <Button variant='contained' color='secondary'>secondary</Button>
                <Button variant='contained' color='error'>error</Button>
                <Button variant='contained' color='warning'>warning</Button>
                <Button variant='contained' color='success'>success</Button>
                <Button variant='contained' color='info'>info</Button>

            </Stack>

            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' size="small"> small</Button>
                <Button variant='contained' size="medium"> medium</Button>
                <Button variant='contained' size="large"> large</Button>

            </Stack>

            <Stack spacing={2} direction='row'>
                <Button variant='contained' startIcon={<SendIcon />}> Send</Button>
                <Button variant='contained' startIcon={<SendIcon />} disableElevation={true} > Send</Button>
                <IconButton>
                    <SendIcon />
                </IconButton>
            </Stack>

            <Stack direction='row'>
                <ButtonGroup variant='contained' orientation='vertical'>

                    <Button >left</Button>
                    <Button >center</Button>
                    <Button >right</Button>

                </ButtonGroup>

            </Stack>
        </Stack >
    )
}

export default MuiBotton