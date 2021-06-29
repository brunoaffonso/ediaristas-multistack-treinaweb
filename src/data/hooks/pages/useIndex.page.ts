import { useState, useMemo } from 'react';
import { UserShortinterface } from 'data/@types/userInterface';
import { ValidationService } from 'data/services/ValidationService';
import { ApiService } from 'data/services/apiService';

export default function useIndex() {
  const [cep, setCep] = useState(''),
    cepValido = useMemo(() => {
      return ValidationService.cep(cep);
    }, [cep]),
    [erro, setErro] = useState(''),
    [buscaFeita, setBuscafeita] = useState(false),
    [carregando, setCarregando] = useState(false),
    [diaristas, setDiaristas] = useState([] as UserShortinterface[]),
    [diaristasRestantes, setDiaristasRestantes] = useState(0);

  async function buscarProfissionais(cep: string) {
    setBuscafeita(false);
    setCarregando(true);
    setErro('');

    try {
      const { data } = await ApiService.get<{
        diaristas: UserShortinterface[];
        quantidade_diaristas: number;
      }>('/api/diaristas-cidade?cep=' + cep.replace(/\D/g, ''));
      setDiaristas(data.diaristas);
      setDiaristasRestantes(data.quantidade_diaristas);
      setBuscafeita(true);
      setCarregando(false);
    } catch (erro) {
      setErro('CEP não encontrado');
      setCarregando(false);
    }

    setBuscafeita(true);
  }

  return {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes,
  };
}
