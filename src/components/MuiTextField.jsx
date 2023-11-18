import { Stack, TextField } from '@mui/material'
import React from 'react'

const MuiTextField = () => {
    return (
        <Stack spacing={4}>

            <Stack direction='row'>
                <TextField
                    label='Name'
                    variant='outlined'
                />
                <TextField
                    label='Name'
                    variant='filled'
                />
                <TextField
                    label='Name'
                    variant='standard'
                />
            </Stack>


            <Stack direction='row' spacing={2}>
                <TextField variant='standard' label='Small Secondary' size='small' color='secondary' />

            </Stack>

            <Stack direction='row' spacing={2}>
                <TextField variant='standard' label='name' required />
                <TextField variant='standard' label='password' helperText='Do Not Share Your Password' required />

            </Stack>



        </Stack>
    )
}

export default MuiTextField