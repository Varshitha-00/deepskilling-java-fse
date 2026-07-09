package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.exception.CountryNotFoundException;
import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.service.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CountryController {

    private static final Logger logger = LoggerFactory.getLogger(CountryController.class);

    private final CountryService countryService;

    public CountryController(CountryService countryService) {
        this.countryService = countryService;
        logger.info("CountryController initialized");
    }

    @RequestMapping("/country")
    public Country getCountryIndia() {
        logger.info("Handling /country request");
        return countryService.getCountry("IN");
    }

    @GetMapping("/countries")
    public List<Country> getAllCountries() {
        logger.info("Handling /countries request");
        return countryService.getAllCountries();
    }

    @GetMapping({"/country/{code}", "/countries/{code}"})
    public Country getCountry(@PathVariable String code) {
        logger.info("Handling /country or /countries request for code={}", code);
        return countryService.getCountry(code);
    }
}
