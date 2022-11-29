import * as React from 'react';
import axios from "axios";
import {useState, useEffect} from "react"
import './modal.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {AddCircleOutline}  from '@mui/icons-material';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));;


function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState();
  const [preview, setPreview] = React.useState();


  const IMAGE_API_POST_URL = "http://localhost:8080/api/images";

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
  }
    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)
    return () => {
      URL.revokeObjectURL(objectUrl)
    }
  }, [selectedFile])
  
  const uploadImages = e =>{
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }
    setSelectedFile(e.target.files[0])
  }

  return (
    <div className="modal-main">
      <Button variant="outlined" onClick={handleClickOpen} className="add">
      <AddCircleOutline/> Upload new image
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Upload new images
        </BootstrapDialogTitle>
      <form action={IMAGE_API_POST_URL} method="POST" encType="multipart/form-data">
        {
          setSelectedFile.length ?
        (
        <DialogContent dividers>
            <div className="upload-body">
                <p>Drop File here <br/> or</p>
                <div className='upload-file'>
                  Browse 
                  <div className="form-group">
                      <input type="file" onChange={uploadImages} required name="form-images" id="form-images" multiple/>
                  </div>
                </div>
                {/* <input type="submit" value="uploadimages" /> */}
            </div>
        </DialogContent>
        ): setSelectedFile (
        <>
            <DialogContent dividers>
            <div className="upload-body">
                <p>Drop File here <br/> or</p>
                
                  {selectedFile && 
                  <img src={preview} alt="" id='preview-mage'/> 
                  }

                <div className='upload-file'>
                  Browse 
                  <div className="form-group">
                      <input type="file" onChange={uploadImages} required name="form-images" id="form-images" multiple/>
                  </div>
                </div>
                {/* <input type="submit" value="uploadimages" /> */}
            </div>
          </DialogContent>

          <DialogActions>
            <Button id="add-more-btn">Add more</Button>
            <Button type="submit" value="uploadimages" id="upload-btn">Upload</Button>
          </DialogActions>
        </>
        )}
      </form>
      </BootstrapDialog>
    </div>
  );
}
