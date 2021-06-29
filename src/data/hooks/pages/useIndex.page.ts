import { useState, useMemo } from 'react';
import { UserShortinterface } from 'data/@types/userInterface';
import { ValidationService } from 'data/services/ValidationService';

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

  return {
    cep,
    setCep,
    cepValido,
  };
}
