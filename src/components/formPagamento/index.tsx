"use client";

import { navigate } from "@/actions/navigate";
import { ReserveSpotsByEvent } from "@/actions/reserve-spots";
import { clearSportsAction } from "@/actions/spots-mark-action";
import { Formik } from "formik";
import toast from "react-hot-toast";
import InputComponent from "../input";
import validateFields from "./validation";
import ButtonComponent from "../button";

export default function FormPagamento({ eventId, spots, ticketKind }: Props) {
  const handleClickFinalzarPagamento = async (email: string) => {
    if (eventId && spots && ticketKind) {
      try {
        await ReserveSpotsByEvent(eventId, spots, ticketKind, email);
        clearSportsAction();
        toast.success("Pagamento finalizado");
        navigate("/");
      } catch (err) {
        toast.error((err as Error).message);
      }
    } else {
      throw new Error("Erro ao realizar pagamento");
    }
  };

  return (
    <div className="w-full flex-1 min-w-[320px] flex-col py-8 px-4 bg-secondary rounded-xl">
      <h1 className="text-2xl font-bold">Informações do pagamento</h1>
      <Formik
        initialValues={{
          email: "",
          nomeCartao: "",
          numeroCartao: "",
          vencimento: "",
          ccv: "",
        }}
        validateOnChange={false}
        validateOnBlur={true}
        validationSchema={validateFields}
        onSubmit={(values) => {
          handleClickFinalzarPagamento(values.email);
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          errors,
          handleSubmit,
          isValid,
          touched,
        }) => (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="flex gap-4 mb-4 items-end medium:flex-wrap">
              <InputComponent
                label="E-mail"
                name="email"
                type="email"
                width="w-full"
                placeholder="ex: eventemail@email.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                hasError={touched.email && errors.email}
                messageError={errors.email}
              />
              <InputComponent
                label="Nome no cartão"
                name="nomeCartao"
                type="text"
                width="w-full"
                placeholder="ex: Pedro Luiz"
                value={values.nomeCartao}
                onChange={handleChange}
                onBlur={handleBlur}
                hasError={touched.nomeCartao && errors.nomeCartao}
                messageError={errors.nomeCartao}
              />
            </div>
            <div className="flex gap-4 mb-4 items-end flex-wrap">
              <InputComponent
                label="Numero do cartão"
                name="numeroCartao"
                type="text"
                maxLength={19}
                placeholder="ex: 1111 2222 3333 4444"
                width="flex-1"
                className="no-arrows"
                value={values.numeroCartao}
                onChange={handleChange}
                onBlur={handleBlur}
                hasError={touched.numeroCartao && errors.numeroCartao}
                messageError={errors.numeroCartao}
              />
              <InputComponent
                label="Vencimento do cartão"
                name="vencimento"
                type="text"
                placeholder="ex: 02/28"
                width="flex-1"
                value={values.vencimento}
                onChange={handleChange}
                onBlur={handleBlur}
                hasError={touched.vencimento && errors.vencimento}
                messageError={errors.vencimento}
              />
              <InputComponent
                label="CCV"
                type="text"
                name="ccv"
                placeholder="ex: 111"
                maxLength={3}
                width="flex-none"
                value={values.ccv}
                onChange={handleChange}
                onBlur={handleBlur}
                hasError={touched.ccv && errors.ccv}
                messageError={errors.ccv}
              />
            </div>
            <ButtonComponent label="Finalizar pagamento" disabled={!isValid} />
          </form>
        )}
      </Formik>
    </div>
  );
}

export interface Props {
  eventId?: string;
  spots: [];
  ticketKind?: string;
}
