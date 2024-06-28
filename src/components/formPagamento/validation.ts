import * as Yup from "yup";

const validateFields = Yup.object().shape({
  email: Yup.string().email("Email Inválido").required("Email é obrigatorio"),
  nomeCartao: Yup.string().required("O nome do comprador é obrigatorio."),
  numeroCartao: Yup.string()
    .matches(/^(?:\d{4} ){3}\d{4}$/, "Numero do cartão inválido.")
    .required("O numero do cartão do comprador é obrigatorio."),
  vencimento: Yup.string()
    .matches(
      /^(0[1-9]|1[0-2])\/\d{2}$/,
      "Data de vencimento deve estar no formato mes/ano"
    )
    .required("A data de vencimento do cartão é obrigatorio."),
  ccv: Yup.string()
    .matches(/^[0-9]\d{2}$/, "O CCV deve apenas conter numeros")
    .required("O CCV do cartão é obrigatorio."),
});

export default validateFields;
