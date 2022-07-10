import React, { useState } from 'react'

import { Container } from './styles'
import InputDefault from '../../components/InputDefault'
import SelectDefault from '../../components/SelectDefault'
import ButtonDefault from '../../components/ButtonDefault'

export default function Login() {
  const [nome, setNome] = useState('')
  const [senha, setSenha] = useState('')
  const [user, setUser] = useState('')

  return (
    <Container>
      <div className="areaInput">
        <h3>Digite o seu Nome</h3>
        <InputDefault
          placeholder={'ex: Gabrielle'}
          type={'text'}
          changeText={value => {
            setNome(value.target.value)
          }}
          value={nome}
        />
        <h3>Digite a sua senha</h3>
        <InputDefault
          placeholder={'************'}
          type={'password'}
          changeText={value => {
            setSenha(value.target.value)
          }}
          value={senha}
        />
        <h3>Selecione sua Categoria</h3>
        <SelectDefault
          change={value => {
            setUser(value)
          }}
        />
        <div style={{ marginTop: '22px' }}>
          <ButtonDefault text={'Entrar'} />
        </div>
        <div className="cadastro">
          <a>Não tem Login? Cadastre-se</a>
        </div>
      </div>
    </Container>
  )
}
