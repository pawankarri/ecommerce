import { Button, Grid, Link, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <Grid className='bg-black text-white text-center mt-10'
      container
      sx={{bgcolor:'black',color:'white',py:3}} >
<Grid item xs={12} sm={6} md={3}>
<Typography className='pb-5' variant='h6'>Company</Typography>
<div>
<Button className='pb-5' variant='h6' gutterButton>About</Button>
</div>
<div>
<Button className='pb-5' variant='h6' gutterButton>Blog</Button>
</div>
<div>
<Button className='pb-5' variant='h6' gutterButton>press</Button>
</div>
<div>
<Button className='pb-5' variant='h6' gutterButton>Jobs</Button>
</div>
<div>
<Button className='pb-5' variant='h6' gutterButton>Partners</Button>
</div>
</Grid>
<Grid item xs={12} sm={6} md={3}>
<Typography className='pb-5' variant='h6'>Solutions</Typography>
<div>
<Button className='pb-5' variant='h6' gutterButton>Marketing</Button>
</div>
<div>
<Button className='pb-5' variant='h6' gutterButton>Analytics</Button>
</div>
<div>
<Button className='pb-5' variant='h6' gutterButton>commerce</Button>
</div>
<div>
<Button className='pb-5' variant='h6' gutterButton>Insights</Button>
</div>
<div>
<Button className='pb-5' variant='h6' gutterButton>Support</Button>
</div>
</Grid>
<Grid item xs={12} sm={6} md={3}>
<Typography className='pb-5' variant='h6'>Documentation</Typography>
<div>
<Button className='pb-5' variant='h6' gutterButton>Guides</Button>
</div>

</Grid>
<Grid item xs={12} sm={6} md={3}>
<Typography className='pb-5' variant='h6'>Legal</Typography>
<div>
<Button className='pb-5' variant='h6' gutterButton>calm</Button>
</div>
<div>
<Button className='pb-5' variant='h6' gutterButton>Privacy</Button>
</div>
<div>
<Button className='pb-5' variant='h6' gutterButton>terms</Button>
</div>

</Grid>
<Grid className='pt-20' item xs={12}>
    <Typography variant='body2' component='p' align='center'>
        &copy; 2023 My Company. All rights reserved
    </Typography>
    <Typography variant='body2' component='p' align='center'>
        Made with love by me
    </Typography>
    <Typography variant='body2' component='p' align='center'>
        Icons made by {' '}
        <Link href='https://www/freepik.com' color="inherit" underline='always'>
            Freepik
        </Link>{' '}
        <Link href='https://www/flaticon.com' color="inherit" underline='always'>
            www.flaticon.com
        </Link>{' '}
    </Typography>

</Grid>
      </Grid>
    </div>
  )
}

export default Footer
