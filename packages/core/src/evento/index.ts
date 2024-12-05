import Evento from "./model/Evento";
import Convidado from "./model/Convidado";

import ComplementarEvento from "./functions/complementarEvento";
import complementarConvidado from "./functions/complementarConvidado";
import criarEventoVazio from "./functions/criarEventoVazio";
import criarConvidadoVazio from "./functions/criarConvidadoVazio";

export type { Evento, Convidado };
export {
  complementarConvidado,
  ComplementarEvento,
  criarConvidadoVazio,
  criarEventoVazio,
};
