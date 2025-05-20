package daw.dwes._6.cors;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**") // o "/**" para todo
                        .allowedOrigins("http://localhost") // el origen usado en frontend
                        .allowedMethods("GET", "POST", "PUT", "DELETE") // métodos HTTP permitidos
                        .allowCredentials(true);
            }
        };
    }
}