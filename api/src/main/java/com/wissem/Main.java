package com.wissem;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.*;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.net.http.HttpResponse;
import java.util.Base64;
import java.util.Collections;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
class Controller {
	
	@Value("${spotify.client_id}")
	String CLIENT_ID;
	
	@Value("${spotify.client_secret}")
	String CLIENT_SECRET;
	
	String uri = "https://accounts.spotify.com/api/token";
	
	
	@GetMapping("/api/v1/token")
	public ResponseEntity<String> getToken() {
		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();
		String originalInput = CLIENT_ID + ":" + CLIENT_SECRET;
		String encodedString = Base64.getEncoder().encodeToString(originalInput.getBytes());
		headers.add("Authorization", "Basic " + encodedString);
		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
		headers.add("Accept", "application/json");
		MultiValueMap<String, String> body= new LinkedMultiValueMap<String, String>();
		body.add("grant_type", "client_credentials");
		HttpEntity<MultiValueMap<String, String>> entity =new HttpEntity<MultiValueMap<String, String>>(body, headers);
		ResponseEntity<?> response = restTemplate.postForEntity(uri, entity , String.class);
		return new ResponseEntity<>(response.getBody().toString(), HttpStatus.OK);
	}
	
}

@SpringBootApplication
public class Main {

	public static void main(String[] args) {
		SpringApplication.run(Main.class, args);
	}

}
