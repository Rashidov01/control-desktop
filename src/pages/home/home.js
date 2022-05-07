import React from "react";
import "./home.scss";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Home() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  )
}
