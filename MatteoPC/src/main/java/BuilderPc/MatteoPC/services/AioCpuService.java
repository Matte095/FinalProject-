package BuilderPc.MatteoPC.services;

import BuilderPc.MatteoPC.persistance.entities.AioCpu;
import BuilderPc.MatteoPC.persistance.repositories.AioCpuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service //indica che la classe è un componente di servizio che può essere gestito dal framework e può essere iniettato in altre classi che ne dipendono.
public class AioCpuService {
    @Autowired  //Quando viene applicata a un campo, un costruttore o un metodo setter, Spring cerca un bean compatibile con il tipo richiesto e lo inietta automaticamente nella classe.
    private AioCpuRepository aioCpuRepository;

    // Ottiene tutti gli oggetti AioCpu presenti nel repository
    public List<AioCpu> getAll() {
        return aioCpuRepository.findAll();
    }

    // Ottiene un oggetto AioCpu dal repository tramite l'ID specificato
    public AioCpu getById(long id) {
        Optional<AioCpu> optionalAioCpu = aioCpuRepository.findById(id);

        // Se l'oggetto AioCpu non viene trovato, viene sollevata un'eccezione
        if (optionalAioCpu.isEmpty()) {
            throw new IllegalStateException("AioCpu not found");
        }

        return optionalAioCpu.get();
    }

    // Crea un nuovo oggetto AioCpu nel repository
    public AioCpu create(AioCpu newAioCpu) {
        newAioCpu = aioCpuRepository.save(newAioCpu);
        return newAioCpu;
    }

    // Aggiorna un oggetto AioCpu nel repository tramite l'ID specificato
    public AioCpu update(long id, AioCpu updateAioCpu) {
        Optional<AioCpu> aioCpu = aioCpuRepository.findById(id);

        // Se l'oggetto AioCpu non viene trovato, viene sollevata un'eccezione
        if (aioCpu.isEmpty()) {
            throw new IllegalStateException("Aiocpu not found");
        }

        AioCpu entityToUpdate = aioCpu.get();

        // Imposta l'ID dell'oggetto da aggiornare con l'ID corrente
        updateAioCpu.setId(entityToUpdate.getId());
        updateAioCpu = aioCpuRepository.save(updateAioCpu);

        return updateAioCpu;
    }

    // Elimina un oggetto AioCpu dal repository tramite l'ID specificato
    public AioCpu delete(long id) {
        Optional<AioCpu> aioCpu = aioCpuRepository.findById(id);

        // Se l'oggetto AioCpu non viene trovato, viene sollevata un'eccezione
        if (aioCpu.isEmpty()) {
            throw new IllegalStateException("aiocpu not found");
        }

        AioCpu entityToDelete = aioCpu.get();
        aioCpuRepository.delete(entityToDelete);

        return entityToDelete;
    }
}

