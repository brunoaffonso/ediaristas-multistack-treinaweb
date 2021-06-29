import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask';
import { Button, Typography, Container } from '@material-ui/core';
import {
  FormElementsContainer,
  ProfissionaisContainer,
  ProfissionaisPaper,
} from 'ui/styles/pages/index.style';
import useIndex from 'data/hooks/pages/useIndex.page';

export default function Home() {
  const { cep, setCep } = useIndex();

  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça os Profissionais'}
        subtitle={
          'Preencha seu endereço e veja todos os profissionais da sua localidade'
        }
      />

      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={'99.999-999'}
            label={'Digite seu CEP'}
            fullWidth
            variant={'outlined'}
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />

          <Typography color={'error'}>CEP Inválido</Typography>

          <Button
            variant={'contained'}
            color={'secondary'}
            sx={{ width: '220px' }}
          >
            Buscar
          </Button>
        </FormElementsContainer>

        <ProfissionaisPaper>
          <ProfissionaisContainer>
            <UserInformation
              name={'Bruno Affonso'}
              picture={'https://github.com/brunoaffonso.png'}
              rating={4}
              description={'Rio de janeiro'}
            />
            <UserInformation
              name={'Bruno Affonso'}
              picture={'https://github.com/brunoaffonso.png'}
              rating={4}
              description={'Rio de janeiro'}
            />
            <UserInformation
              name={'Bruno Affonso'}
              picture={'https://github.com/brunoaffonso.png'}
              rating={4}
              description={'Rio de janeiro'}
            />
            <UserInformation
              name={'Bruno Affonso'}
              picture={'https://github.com/brunoaffonso.png'}
              rating={4}
              description={'Rio de janeiro'}
            />
            <UserInformation
              name={'Bruno Affonso'}
              picture={'https://github.com/brunoaffonso.png'}
              rating={4}
              description={'Rio de janeiro'}
            />
            <UserInformation
              name={'Bruno Affonso'}
              picture={'https://github.com/brunoaffonso.png'}
              rating={4}
              description={'Rio de janeiro'}
            />
          </ProfissionaisContainer>
        </ProfissionaisPaper>
      </Container>
    </div>
  );
}

//Continuar de 1:27:00 - Aula 2
