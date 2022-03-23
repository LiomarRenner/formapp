import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { Input, InputProps } from '../Input';

type Props = InputProps & {
  name: string;
  control: Control<any>;
}
export function ControlledInput({ control, name, ...rest }: Props) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
            {...rest}
          />
        )}
      />
    </>
  );
};

