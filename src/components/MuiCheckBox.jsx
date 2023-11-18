import { Box, FormControlLabel, Checkbox, Typography, Link } from '@mui/material'
import React, { useState } from 'react'

const MuiCheckBox = () => {
    const [acceptTnC, setAcceptTnC] = useState(false)
    console.log(acceptTnC);
    const handleChange = () => {
        setAcceptTnC(!acceptTnC)
    }
    const Term = () => {
        return (
            <>
                <Typography variant='subtitle1'>I agree with <Link>Privacy Policy</Link> and <Link>Terms of use</Link></Typography>
            </>
        )
    }
    return (
        <Box>
            <Box>
                <FormControlLabel
                    label={<Term />}
                    control={<Checkbox checked={acceptTnC} onChange={handleChange} />}
                />
            </Box>
        </Box>
    )
}

export default MuiCheckBox