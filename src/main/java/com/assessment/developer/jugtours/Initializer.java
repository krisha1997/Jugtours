package com.assessment.developer;

import java.time.Instant;
import java.util.Collections;
import java.util.stream.Stream;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.assessment.developer.model.Event;
import com.assessment.developer.model.Group;
import com.assessment.developer.model.GroupRepository;

@Component
class Initializer implements CommandLineRunner {

    private final GroupRepository repository;

    public Initializer(GroupRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) {
        Stream.of("Digboi JUG", "Guwahati JUG", "Jorhat JUG",
                "Ranchi JUG").forEach(name ->
                repository.save(new Group(name))
        );

        Group djug = repository.findByName("Digboi JUG");
        Event e = Event.builder().title("Full Stack Reactive")
                .description("Reactive with Spring Boot + React")
                .date(Instant.parse("2018-12-12T18:00:00.000Z"))
                .build();
        djug.setEvents(Collections.singleton(e));
        repository.save(djug);

        repository.findAll().forEach(System.out::println);
    }
}