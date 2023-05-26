package BuilderPc.MatteoPC.persistance.repositories;

import BuilderPc.MatteoPC.persistance.entities.AioCpu;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AioCpuRepository extends JpaRepository  <AioCpu , Long> {



}

//L'interfaccia JPA Repository fornisce metodi predefiniti per eseguire operazioni comuni di persistenza dei dati, come l'inserimento,
// l'aggiornamento, la ricerca e l'eliminazione di entità nel database. Questi metodi sono generati automaticamente da Spring Data JPA sulla base delle convenzioni di nomenclatura dei metodi.