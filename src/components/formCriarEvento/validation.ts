import * as Yup from "yup";

const validateFields = Yup.object().shape({
  name: Yup.string().required("Nome do evento é obrigatorio"),
  eventDate: Yup.string().required("Data do evento é obrigatoria"),
  price: Yup.number()
    .positive("Preço do evento ser um valor acima de 0")
    .required("Preço do evento é obrigatorio"),
  rating: Yup.number()
    .positive("Nota do evento ser um valor acima de 0")
    .required("Nota do evento é obrigatorio"),
  //image_url: Yup.string().required("Imagem do evento é obrigatoria"),
  location: Yup.string().required("Localizacao do evento é obrigatoria"),
});

export default validateFields;
