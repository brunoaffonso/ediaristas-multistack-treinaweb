import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask';

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

      <TextFieldMask
        mask={'99.999-999'}
        label={'Digite seu CEP'}
        fullWidth
        variant={'outlined'}
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

//Continuar de 40:00 - Aula 2
