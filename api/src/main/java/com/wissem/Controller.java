package com.wissem;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.security.NoSuchAlgorithmException;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class Controller {
  
  @Value("${spotify.client_id}") String CLIENT_ID;
  @Value("${spotify.client_secret}") String CLIENT_SECRET;
  @Value("${spotify.code_verifier}") String CODE_VERIFIER;
  
  String redirectUri = "http://localhost:4200/login";
  String scope = "user-read-private user-read-email user-read-recently-played user-top-read user-follow-read user-follow-modify playlist-read-private playlist-read-collaborative playlist-modify-public";
  String authUrl = "https://accounts.spotify.com/authorize";
  String uri = "https://accounts.spotify.com/api/token";
  
  
  @GetMapping("/api/v1/auth-url")
  public ResponseEntity<Map<String, String>> buildAuthUrl()
    throws NoSuchAlgorithmException {
    String codeChallenge = Helpers.base64encode(Helpers.sha256(CODE_VERIFIER));
    String authUrlWithParams = UriComponentsBuilder
      .fromHttpUrl(authUrl)
      .queryParam("response_type", "code")
      .queryParam("client_id", CLIENT_ID)
      .queryParam("scope", scope)
      .queryParam("code_challenge_method", "S256")
      .queryParam("code_challenge", codeChallenge)
      .queryParam("redirect_uri", redirectUri)
      .toUriString();
    // send the code verifier to the frontend
    
    return new ResponseEntity<>(
      Map.of("url", authUrlWithParams, "code_verifier", CODE_VERIFIER), HttpStatus.OK);
  }
  
  @GetMapping("/api/v1/token")
  public ResponseEntity<TokenResponse> getToken(@RequestParam String code) {
    RestTemplate restTemplate = new RestTemplate();
    // setting the headers
    HttpHeaders headers = new HttpHeaders();
    headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
    // setting the body
    MultiValueMap<String, String> body= new LinkedMultiValueMap<String, String>();
    body.add("client_id", CLIENT_ID);
    body.add("grant_type", "authorization_code");
    body.add("code", code);
    body.add("redirect_uri", redirectUri);
    body.add("code_verifier", CODE_VERIFIER);
    
    return getTokenResponseResponseEntity(restTemplate, headers, body);
  }
  
  @PostMapping("/api/v1/refresh/token")
  public ResponseEntity<TokenResponse> getRefreshToken(@RequestBody RefreshTokenBody request) {
    RestTemplate restTemplate = new RestTemplate();
    // setting the headers
    HttpHeaders headers = new HttpHeaders();
    headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
    // setting the body
    MultiValueMap<String, String> body = new LinkedMultiValueMap<String, String>();
    body.add("client_id", CLIENT_ID);
    body.add("grant_type", "refresh_token");
    body.add("refresh_token", request.refreshToken());
    
    return getTokenResponseResponseEntity(restTemplate, headers, body);
  }
  
  private ResponseEntity<TokenResponse> getTokenResponseResponseEntity(
    RestTemplate restTemplate, HttpHeaders headers, MultiValueMap<String, String> body) {
    HttpEntity<MultiValueMap<String, String>>
      entity =new HttpEntity<MultiValueMap<String, String>>(body, headers);
    ResponseEntity<TokenResponse> response = restTemplate.postForEntity(uri, entity , TokenResponse.class);
    return new ResponseEntity<TokenResponse>(response.getBody(), response.getStatusCode());
  }
  
  
}

record TokenResponse(String access_token, String token_type, int expires_in, String refresh_token, String scope) {
}

record RefreshTokenBody(String refreshToken) {
}
