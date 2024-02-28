import {useState} from 'react'

export const useDataForm = (initialForm = {}) => {

  const [dataForm, setDataForm] = useState(initialForm);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
            setDataForm({
                ...dataForm,
                [name]: value,
            });
    };

    const onResetForm = () => {
        setDataForm(initialForm);
    };

    // const onSubmit = () => {
    //     alert('Enviando Formulario');
    //     console.log('click btn form');
    // }

    return { 
        onInputChange, 
        onResetForm, 
        ...dataForm, 
        dataForm
    };
};
