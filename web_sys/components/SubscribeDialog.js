import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Snackbar, Alert } from '@mui/material';
import { useTheme } from '@mui/material/styles';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const SubscribeDialog = ({ subscribeDialogText }) => {
    const theme = useTheme();
    const [open, setOpen] = useState(true); 
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
  
    const [title, body] = subscribeDialogText.split('---').map(text => text.trim());

    const handleSubscribe = async () => {
      try {
        const response = await fetch('/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
    
        if (response.ok) {
          const data = await response.json();
          setSuccessMessage('Thank you for subscribing!');
          setOpen(false); 
        } else {
          if (response.headers.get('Content-Type')?.includes('application/json')) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'An error occurred while subscribing. Please try again.');
          } else {
            throw new Error('An unexpected error occurred.');
          }
        }
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setSnackbarOpen(true); 
      }
    };
    
  
    const handleCloseSnackbar = () => {
      setSnackbarOpen(false);
    };
  
    return (
      <>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>
          <Typography>{body}</Typography>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)} sx={{color: theme.palette.primary.blk}}>Cancel</Button>
            <Button onClick={handleSubscribe} sx={{color: theme.palette.primary.blk}}>Subscribe</Button>
          </DialogActions>
        </Dialog>
        <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
          {successMessage ? (
            <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
              {successMessage}
            </Alert>
          ) : (
            <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
              {errorMessage}
            </Alert>
          )}
        </Snackbar>
      </>
    );
  };
  
  export default SubscribeDialog;