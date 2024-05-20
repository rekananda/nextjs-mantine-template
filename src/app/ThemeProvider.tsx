'use client'

import mainTheme from "@/config/mantineTheme";
import { MantineProvider } from '@mantine/core';
import { Toaster } from "react-hot-toast";
import { ToastContainer } from 'react-toastify';

type ProviderProps = {
  children: React.ReactNode
}

const ThemeProvider = ({ children }: ProviderProps) => {
  return (
    <MantineProvider theme={mainTheme}>
      {children}
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <ToastContainer />
    </MantineProvider>
  )
}

export default ThemeProvider