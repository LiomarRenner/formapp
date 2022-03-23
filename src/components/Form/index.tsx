import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import { Button } from '../Button';
import { ControlledInput } from '../ControlledInput';
import { Container } from './styles';

const VALID_EMAIL_EXPRESSION = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

type FormData = {
  email: string;
  password: string;
  passwordConfirmation: string;
  name: string;
}
export function Form() {
  const { control, handleSubmit } = useForm<FormData>();

  function handleUserRegister(data: FormData) {
    console.log(data)
  }

  return (
    <Container>
      <ControlledInput
        control={control}
        name="name"
        icon="user"
        placeholder="Nome"
      />
      <ControlledInput
        control={control}
        name="email"
        icon="mail"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize='none'
      />
      <ControlledInput
        name='password'
        control={control}
        icon="lock"
        placeholder="Senha"
        secureTextEntry
      />
      <ControlledInput
        name='confirmPassword'
        control={control}
        icon="lock"
        placeholder="Confirme a senha"
        secureTextEntry
      />

      <Button
        title="Cadastrar"
        onPress={handleSubmit(handleUserRegister)}
      />
    </Container>
  )
}