package com.appio.backend.Services.Advert;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.appio.backend.Controllers.Advert.AdvertResponse;
import com.appio.backend.Persistence.Advert.AdvertRepository;

@Service
public class AdvertService {

    @Autowired
    private AdvertRepository advertRepository;

    public List<AdvertResponse> showAdverts() {
        return advertRepository.findAll().stream()
            .map(AdvertResponse::from)
            .collect(Collectors.toList());
    }

    public AdvertResponse showAdvertById(Integer id) {
        return AdvertResponse.from(advertRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("Anuncio no encontrado con ID: " + id)));
    }
}
