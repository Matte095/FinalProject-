package BuilderPc.MatteoPC.configurations;
import org.modelmapper.ModelMapper;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MatteoPcConfigurations {
    @Bean
    public ModelMapper modelMapper() {


        return new ModelMapper();
    }
}