package com.wissem;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Base64;

public class Helpers {
  private static final String POSSIBLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  private static final SecureRandom RANDOM = new SecureRandom();
  
  public static String generateRandomString(int length) {
    StringBuilder sb = new StringBuilder(length);
    for (int i = 0; i < length; i++) {
      sb.append(POSSIBLE.charAt(RANDOM.nextInt(POSSIBLE.length())));
    }
    return sb.toString();
  }
  
  public static byte[] sha256(String plain) throws NoSuchAlgorithmException {
    MessageDigest digest = MessageDigest.getInstance("SHA-256");
    return digest.digest(plain.getBytes(StandardCharsets.UTF_8));
  }
  
  public static String base64encode(byte[] input) {
    return Base64.getUrlEncoder().withoutPadding().encodeToString(input);
  }
  
}