import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask';
import {
  Button,
  Typography,
  Container,
  CircularProgress,
} from '@material-ui/core';
import {
  FormElementsContainer,
  ProfissionaisContainer,
  ProfissionaisPaper,
} from 'ui/styles/pages/index.style';
import useIndex from 'data/hooks/pages/useIndex.page';

export default function Home() {
  const {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes,
  } = useIndex();

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

          {erro && <Typography color={'error'}>{erro}</Typography>}

          <Button
            variant={'contained'}
            color={'secondary'}
            sx={{ width: '220px' }}
            disabled={!cepValido || carregando}
            onClick={() => buscarProfissionais(cep)}
          >
            {carregando ? <CircularProgress size={20} /> : 'Buscar'}
          </Button>
        </FormElementsContainer>

        {buscaFeita &&
          (diaristas.length > 0 ? (
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
          ) : (
            <Typography align={'center'} color={'textPrimary'}>
              Ainda não temos nenhuma diarista disponível na sua região
            </Typography>
          ))}
      </Container>
    </div>
  );
}

//Continuar de 1:49:00 - Aula 2
