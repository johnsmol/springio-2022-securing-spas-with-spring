package springio;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfiguration {

    private final String jwksUri = "http://auth-server:9000/oauth2/jwks";

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http.oauth2ResourceServer(
                r -> r.jwt().jwkSetUri(jwksUri)
        );

        http.authorizeHttpRequests(requests -> requests.anyRequest().authenticated());

        return http.build();
    }

}
