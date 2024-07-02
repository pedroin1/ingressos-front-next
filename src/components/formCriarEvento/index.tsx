"use client";

import InputComponent from "../input";
import { CreateEventData } from "@/types/type";
import { CreateEvent } from "@/actions/create-event";
import toast from "react-hot-toast";
import { navigate } from "@/actions/navigate";
import { Formik } from "formik";
import validateFields from "./validation";

export default function FromCriarEvento() {
  const handleClickCreateEvent = async (event: CreateEventData) => {
    try {
      const createdEvent = await CreateEvent(event);
      toast.success(`Evento: ${createdEvent.name} foi criado com sucesso!`);
      navigate("/");
    } catch (err: unknown) {
      toast.error(`${(err as Error).message}`);
    }
  };

  return (
    <div className="bg-secondary rounded-2xl w-[450px] h-fit">
      <Formik
        initialValues={{
          name: "",
          description: "",
          eventDate: "",
          price: 0,
          rating: 0,
          image_url: "https://example.com/images/guardians-of-the-galaxy.jpg",
          location: "",
        }}
        validateOnBlur={true}
        validateOnChange={false}
        validationSchema={validateFields}
        onSubmit={(values) => handleClickCreateEvent(values)}
      >
        {({
          values,
          errors,
          isValid,
          touched,
          handleChange,
          handleSubmit,
          handleBlur,
        }) => (
          <form className="flex flex-col p-4 gap-2" onSubmit={handleSubmit}>
            <InputComponent
              label="Nome do evento"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              hasError={touched.name && errors.name}
              messageError={errors.name}
            />
            <InputComponent
              label="Descricao do evento"
              type="text"
              name="description"
              value={values.description}
              onChange={handleChange}
            />
            <InputComponent
              label="Data do evento"
              type="datetime-local"
              name="eventDate"
              className="color"
              value={values.eventDate}
              onChange={handleChange}
              onBlur={handleBlur}
              hasError={touched.eventDate && errors.eventDate}
              messageError={errors.eventDate}
            />
            <InputComponent
              label="Rating do evento"
              type="number"
              name="rating"
              className="no-arrows"
              min={0}
              value={values.rating}
              onChange={handleChange}
              onBlur={handleBlur}
              hasError={touched.rating && errors.rating}
              messageError={errors.rating}
            />
            <InputComponent
              label="Preco do evento"
              type="number"
              name="price"
              className="no-arrows"
              min={0}
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
              hasError={touched.price && errors.price}
              messageError={errors.price}
            />
            <InputComponent
              label="Localizacao do evento"
              type="text"
              name="location"
              value={values.location}
              onChange={handleChange}
              onBlur={handleBlur}
              hasError={touched.location && errors.location}
              messageError={errors.location}
            />
            <button
              disabled={!isValid}
              className="mt-2 bg-btn-primary uppercase text-secondary font-bold px-2 py-2 rounded-md 
                hover:bg-[#c1c1c1] disabled:cursor-not-allowed disabled:bg-[#c1c1c1]"
            >
              Criar Evento
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
