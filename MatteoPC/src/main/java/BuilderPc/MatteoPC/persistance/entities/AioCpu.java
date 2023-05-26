package BuilderPc.MatteoPC.persistance.entities;

import jakarta.persistence.*;

@Entity  //gli oggetti di questa classe possono essere salvati, caricati e gestiti dal database.
@Table (name ="aiocpu")
public class AioCpu {
    @Id //Questa annotazione indica che l'attributo id è la chiave primaria dell'entità. La chiave primaria viene utilizzata per identificare univocamente ogni record nella tabella.
    @GeneratedValue (strategy = GenerationType.IDENTITY)  //viene utilizzata la strategia di generazione automatica tramite un'identità unica fornita dal database.
    private long id;
    @Column (name = "name")
    private String name;

    @Column (name = "price")
    private double price;
    @Column (name ="description")
    private String description;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setPrice(double price) {
        this.price = price;


    }
}
