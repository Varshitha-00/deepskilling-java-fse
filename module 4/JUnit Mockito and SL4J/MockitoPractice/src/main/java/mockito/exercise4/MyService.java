package com.mockito.exercise4;

public class MyService {

    private ExternalApi api;

    public MyService(ExternalApi api) {
        this.api = api;
    }

    public void sendMessage(String message) {
        api.sendData(message);
    }
}