import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça os Profissionais'}
        subtitle={
          'Preencha seu endereço e veja todos os profissionais da sua localidade'
        }
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
    </div>
  );
}

//Continuar de 16:00 - Aula 2
