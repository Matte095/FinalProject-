package BuilderPc.MatteoPC.presentation.controllers;
import BuilderPc.MatteoPC.persistance.entities.AioCpu;
import BuilderPc.MatteoPC.presentation.dto.AioCpuDTO;
import BuilderPc.MatteoPC.services.AioCpuService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController  //Un controller REST è responsabile di gestire le richieste HTTP e di restituire le risposte corrispondenti nel formato appropriato (ad esempio, JSON, XML, ecc.).
@RequestMapping("/aiocpu") //definisce il percorso di base per l'URL che verrà mappato al metodo. Può essere utilizzata a livello di classe per specificare un percorso di base comune per tutti i metodi del controller.
@CrossOrigin(origins = "http://localhost:3000") // l'annotazione consente le richieste provenienti dal dominio "http://localhost:3000". Questo significa che il server consentirà alle richieste provenienti da "http://localhost:3000" di accedere alle risorse del controller, anche se il dominio del server è diverso.
    public class AioCpuController {
    @Autowired
    //L'utilizzo di @Autowired semplifica la gestione delle dipendenze in un'applicazione Spring, consentendo di creare oggetti con le dipendenze corrette senza dover preoccuparsi della loro creazione e configurazione esplicita.
    private AioCpuService aioCpuService;
    @Autowired
    private ModelMapper modelMapper;

    @GetMapping
    //è un'annotazione di Spring Framework utilizzata per mappare una richiesta HTTP GET a un metodo specifico di un controller.
    public List<AioCpuDTO> getAioCpu() {
        return aioCpuService.getAll()  // Recupera tutti gli oggetti AioCpu utilizzando il servizio AioCpuService
                .stream() // // Converte la lista di oggetti AioCpu in uno stream
                // e mappa ciascun oggetto AioCpu in un oggetto AioCpuDTO utilizzando il metodo convertToDTO
                .map(this::convertToDTO)   /// Converte lo stream di oggetti AioCpuDTO in una lista di AioCpuDTO
                .toList(); // // Restituisci la lista di AioCpuDTO come risultato della funzione
    }

    public AioCpuDTO getAioCpuById(@PathVariable long id) {
        // Utilizza il servizio aioCpuService per recuperare l'oggetto AioCpu corrispondente all'ID specificato
        AioCpu aioCpu = aioCpuService.getById(id);

        // Converte l'oggetto AioCpu in un oggetto AioCpuDTO utilizzando il metodo convertToDTO
        AioCpuDTO aioCpuDTO = convertToDTO(aioCpu);

        // Restituisce l'oggetto AioCpuDTO come risultato della funzione
        return aioCpuDTO;
    }

    @GetMapping("/{id}")
    public AioCpuDTO getById(@PathVariable long id) {
        // Utilizza il servizio aioCpuService per recuperare l'oggetto AioCpu corrispondente all'ID specificato
        AioCpu aioCpu = aioCpuService.getById(id);

        // Converte l'oggetto AioCpu in un oggetto AioCpuDTO utilizzando il metodo convertToDTO
        AioCpuDTO aioCpuDTO = convertToDTO(aioCpu);

        // Restituisce l'oggetto AioCpuDTO come risultato della funzione
        return aioCpuDTO;
    }

    @PostMapping
    public AioCpuDTO createAioCpu(@RequestBody AioCpuDTO newAioCpu) {
        // Converte l'oggetto AioCpuDTO in un oggetto AioCpu utilizzando il metodo convertToEntity
        AioCpu aiocpu = convertToEntity(newAioCpu);
        // Utilizza il servizio aioCpuService per creare un nuovo oggetto AioCpu
        aiocpu = aioCpuService.create(aiocpu);
        // Converte l'oggetto AioCpu in un oggetto AioCpuDTO utilizzando il metodo convertToDTO
        AioCpuDTO aiocpuDTO = convertToDTO(aiocpu);
        // Restituisce l'oggetto AioCpuDTO come risultato della funzione
        return aiocpuDTO;
    }

    @PutMapping("/{id}")
    public AioCpuDTO updateAioCpu(@PathVariable long id, @RequestBody AioCpuDTO updateAioCpu) {
        // Converte l'oggetto AioCpuDTO in un oggetto AioCpu utilizzando il metodo convertToEntity
        AioCpu aioCpu = convertToEntity(updateAioCpu);
        // Utilizza il servizio aioCpuService per aggiornare l'oggetto AioCpu corrispondente all'ID specificato
        aioCpu = aioCpuService.update(id, aioCpu);
        AioCpuDTO aioCpuDTO = convertToDTO(aioCpu);
        return aioCpuDTO;
    }

    @DeleteMapping("/{id}")
    public AioCpuDTO deleteAioCpu(@PathVariable long id) {
        return convertToDTO(aioCpuService.delete(id));
    }

    private AioCpuDTO convertToDTO(AioCpu aiocpu) {
        // Crea un nuovo oggetto AioCpuDTO utilizzando il modelMapper e mappa i valori dell'oggetto AioCpu corrispondente
        // nell'oggetto AioCpuDTO
        AioCpuDTO dto = modelMapper.map(aiocpu, AioCpuDTO.class);
        // Restituisce l'oggetto AioCpuDTO come risultato della funzione
        return dto;
    }

    private AioCpu convertToEntity(AioCpuDTO dto) {
        // Crea un nuovo oggetto AioCpu utilizzando il modelMapper e mappa i valori dell'oggetto AioCpuDTO corrispondente
        // nell'oggetto AioCpu
        AioCpu entity = modelMapper.map(dto, AioCpu.class);
        // Restituisce l'oggetto AioCpu come risultato della funzione
        return entity;
    }
}