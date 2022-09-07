import { Button } from '@mui/material';
import * as React from 'react';

export type Props = {
  variant?:
  | 'text'
  | 'contained'
  | 'outlined'
  | undefined;
  children: React.ReactNode;
};

const ButtonMain = (props: Props) => {
  return <Button variant={props.variant}>{props.children}</Button>;
};

export default ButtonMain;
