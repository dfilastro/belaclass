import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled from '@emotion/styled';

import { useInfo } from '../../../hooks/useInformation';

export function ContactForm() {
  const { information } = useInfo();

  const Container = styled.form`
    display: flex;
    flex-direction: column;
  `;

  const Title = styled.label`
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    color: ${information.primaryColor};
    letter-spacing: 0.06em;
  `;

  const Input = styled.input`
    height: 3.6875rem; //59px
    padding: 1rem 1.1875rem;
    border: none;
    background: ${information.secondaryColor};
    border-radius: 0.3rem;

    transition: background 0.3s;

    &:focus {
      background: var(--white);
      outline: none;
      border: 1px solid ${information.secondaryColor};
      border-radius: 0.3rem;
    }
  `;

  const TextInput = styled.textarea`
    min-height: 10rem; //160px
    max-height: 20rem;
    padding: 1rem 1.1875rem;
    resize: vertical;
    border: none;
    background: ${information.secondaryColor};
    border-radius: 0.3rem;

    transition: background 0.3s;

    &:focus {
      background: var(--white);
      outline: none;
      border: 1px solid ${information.secondaryColor};
      border-radius: 0.3rem;
    }
  `;

  const CustomButton = styled.button`
    margin-top: 2.5rem;
    padding: 1rem 2.5rem;
    font-size: 87.5%; //14px

    display: inline-block;
    width: auto;
    max-width: 20%;
    border: 1px solid ${information.primaryColor};
    border-radius: 3px;
    font-weight: 400;
    letter-spacing: 0.06rem;
    transition: 0.33s all ease;
    white-space: normal;
    text-transform: uppercase;
    cursor: pointer;
    text-align: center;
    background-color: ${information.primaryColor};
    color: var(--white);

    &:hover {
      background-color: ${information.secondaryColor};
      border-color: ${information.secondaryColor};
    }
  `;

  const UserMessage = styled.p`
    margin-top: 2rem;
    font-size: 1.125rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;

    color: ${information.primaryColor};
  `;

  const [state, handleSubmit] = useForm('xzboapyy');

  if (state.succeeded) {
    return <UserMessage>Mensagem Enviada!</UserMessage>;
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Title htmlFor='name'>Nome</Title>
      <Input id='name' type='name' name='name' />
      <ValidationError prefix='Email' field='email' errors={state.errors} />

      <Title htmlFor='email'>E-mail</Title>
      <Input id='email' type='email' name='email' />
      <ValidationError prefix='Email' field='email' errors={state.errors} />

      <Title htmlFor='message'>Mensagem</Title>
      <TextInput id='message' name='message' />
      <ValidationError prefix='Message' field='message' errors={state.errors} />
      <CustomButton type='submit' disabled={state.submitting}>
        Enviar
      </CustomButton>
    </Container>
  );
}
