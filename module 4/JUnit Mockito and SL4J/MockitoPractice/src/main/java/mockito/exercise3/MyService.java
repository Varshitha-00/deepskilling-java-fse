package com.mockito.exercise3;

public class MyService {

    private ExternalApi api;

    public MyService(ExternalApi api) {
        this.api = api;
    }

    public String fetchData(String id) {
        return api.getData(id);
    }
}