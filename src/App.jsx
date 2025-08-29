import { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

function App() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React HW16 - Material UI
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Добро пожаловать!
        </Typography>
        <Button variant="contained" onClick={handleClickOpen}>
          Открыть диалог
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Простое диалоговое окно</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Это простое диалоговое окно. Вы можете закрыть его, нажав одну из
              кнопок ниже.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Отмена</Button>
            <Button onClick={handleClose} autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
}

export default App;
