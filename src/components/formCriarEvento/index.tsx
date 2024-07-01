"use state";

import { useState } from "react";
import InputComponent from "../input";
import { CreateEventData } from "@/types/type";

export default function FromCriarEvento() {
  const [newEvent, setNewEvent] = useState<CreateEventData>({
    name: "",
    description: "",
    eventDate: "",
    price: 0,
    rating: 0,
    image_url: "",
    location: "",
  });

  return (
    <div className="bg-secondary rounded-2xl w-96 h-96">
      <div className="p-4">
        <InputComponent
          label="Nome do evento"
          type="text"
          value={newEvent.name}
          onChange={(e) =>
            setNewEvent((event) => ({ ...event, name: e.target.value }))
          }
        />
        <InputComponent
          label="Descricao do evento"
          type="text"
          value={newEvent.description}
          onChange={(e) =>
            setNewEvent((event) => ({ ...event, description: e.target.value }))
          }
        />
        <InputComponent
          label="Data do evento"
          type="text"
          value={newEvent.eventDate}
          onChange={(e) =>
            setNewEvent((event) => ({ ...event, eventDate: e.target.value }))
          }
        />
        <InputComponent
          label="Rating do evento"
          type="number"
          value={newEvent.rating}
          className="no-arrows"
          onChange={(e) =>
            setNewEvent((event) => ({
              ...event,
              rating: e.target.valueAsNumber,
            }))
          }
        />{" "}
        <InputComponent
          label="Localizacao do evento"
          type="text"
          value={newEvent.location}
          onChange={(e) =>
            setNewEvent((event) => ({
              ...event,
              location: e.target.value,
            }))
          }
        />
        <button
          className="bg-btn-primary uppercase text-secondary font-bold px-2 py-2 rounded-md 
                hover:bg-[#c1c1c1] disabled:cursor-not-allowed disabled:bg-[#c1c1c1]"
        >
          CRIAR EVENTO
        </button>
      </div>
    </div>
  );
}
