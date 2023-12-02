import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Button, Grid, TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius:1,
  p: 4,
};

function ModalComponent({User}) {

  const [open, setOpen] = React.useState(true);
  const [name,setName] = React.useState('');

  const handleClose = () => setOpen(false);

  return (
    <div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <Grid
            container
            spacing={1}>

            <Grid
                item
                xs={10}>
                <TextField 
                id="chatInput" 
                variant="outlined"
                placeholder='Enter Your name'
                size='small'
                fullWidth
                value={name}
                onKeyDown={(e)=>{
                    if(e.key==="Enter"){
                      setName(e.target.value);
                      User(e.target.value)
                      setOpen(false)
                    }
                }}
                onChange={(e)=>{
                    setName(e.target.value)
                }}/> 
            </Grid>
            
            <Grid
                item
                xs={2}>
                <Button 
                variant='outlined'
                fullWidth
                style={{height:"40px"}}
                onClick={(e)=>{
                    User(name);
                    setOpen(false)
                }}
                >
                    Join
            </Button>         
            </Grid>
                
          </Grid>
        </Box>
      </Modal>
    </div>
  )
}

export default ModalComponent