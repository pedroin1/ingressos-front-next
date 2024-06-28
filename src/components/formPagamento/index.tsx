"use client";

import { navigate } from "@/actions/navigate";
import { ReserveSpotsByEvent } from "@/actions/reserve-spots";
import { clearSportsAction } from "@/actions/spots-mark-action";
import { Formik } from "formik";
import toast from "react-hot-toast";
import InputComponent from "../input";
import validateFields from "./validation";

export default function FormPagamento({ eventId, spots, ticketKind }: Props) {
  const handleClickFinalzarPagamento = async (email: string) => {
    if (eventId && spots && ticketKind) {
      try {
        await ReserveSpotsByEvent(
          eventId,
          spots,
          parseTicketKind(ticketKind),
          email
        );
        clearSportsAction();
        toast.success("Pagamento finalizado");
        navigate("/");
      } catch (err) {
        toast.error((err as Error).message);
      }
    }
  };

  function parseTicketKind(ticketKind: string) {
    if (ticketKind === "meia") {
      return "half";
    } else return "full";
  }

  return (
    <div className="w-full flex-1 min-w-[320px] flex-col py-8 px-4 bg-secondary rounded-xl">
      <h1 className="text-2xl font-bold">Informacoes do pagamento</h1>
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
          <form className="flex gap-2 flex-col mt-6" onSubmit={handleSubmit}>
            <InputComponent
              label="E-mail"
              name="email"
              type="email"
              placeholder="ex: eventemail@email.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && (
              <div className="text-red-500">{errors.email}</div>
            )}
            <InputComponent
              label="Nome no cartão"
              name="nomeCartao"
              type="text"
              placeholder="ex: Pedro Luiz"
              value={values.nomeCartao}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.nomeCartao && errors.nomeCartao && (
              <div className="text-red-500">{errors.nomeCartao}</div>
            )}
            <InputComponent
              label="Numero do cartão"
              name="numeroCartao"
              type="text"
              maxLength={19}
              placeholder="ex: 1111 2222 3333 4444"
              className="no-arrows"
              value={values.numeroCartao}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.numeroCartao && errors.numeroCartao && (
              <div className="text-red-500">{errors.numeroCartao}</div>
            )}
            <div className="flex justify-between mb-4 gap-4 flex-shrink-1 small:flex-col">
              <div className="max-w-52">
                <InputComponent
                  label="Vencimento do cartão"
                  name="vencimento"
                  type="text"
                  placeholder="ex: 02/28"
                  className="min-w-[100px] max-w-[200px]"
                  value={values.vencimento}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.vencimento && errors.vencimento && (
                  <div className="text-red-500">{errors.vencimento}</div>
                )}
              </div>
              <div className="max-w-52">
                <InputComponent
                  label="CCV"
                  type="text"
                  name="ccv"
                  placeholder="ex: 111"
                  maxLength={3}
                  className="min-w-[100px] max-w-[200px] no-arrows"
                  value={values.ccv}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.ccv && errors.ccv && (
                  <div className="text-red-500">{errors.ccv}</div>
                )}
              </div>
            </div>
            <button
              disabled={!isValid}
              className="bg-btn-primary uppercase text-secondary font-bold px-2 py-2 rounded-md 
                hover:bg-[#c1c1c1] disabled:cursor-not-allowed disabled:bg-[#c1c1c1]"
            >
              finalizar pagamento
            </button>
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
