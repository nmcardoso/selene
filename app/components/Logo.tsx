/* eslint-disable @next/next/no-img-element */
import { Box, useTheme } from "@mui/material";
import Link from "next/link";

type LogoComponentType = {
  width?: number;
  colorMode?: string;
  sx?: object;
}

export default function Logo({
  width,
  colorMode,
  sx,
}: LogoComponentType = {width: 350, sx: {}}) {
  const theme = useTheme()
  if (!colorMode) {
    colorMode = theme.palette.mode
  }
  return (
    <Box sx={sx}>
      <Link href={'/'}>
        <img src={`/logo-${colorMode}.png`} width={width} alt="Selene" />
      </Link>
    </Box>
  )
}