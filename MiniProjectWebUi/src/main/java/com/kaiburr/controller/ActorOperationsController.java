///ActorOperationsController.java
package com.kaiburr.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kaiburr.document.Actor;
import com.kaiburr.service.IActorMgmtService;

@RestController
@RequestMapping("/actor/api")
@CrossOrigin
public class ActorOperationsController {
	@Autowired
	private IActorMgmtService service;

	@PostMapping("/save")
	public ResponseEntity<String> saveActor(@RequestBody Actor actor) {
		// use service
		String msg = service.registerActor(actor);
		return new ResponseEntity<String>(msg, HttpStatus.CREATED);
	}

	@GetMapping("/report")
	public ResponseEntity<?> fetchAllActors() {
		// use service
		Iterable<Actor> list = service.getAllActors();
		// return ResponseEntity object
		return new ResponseEntity<Iterable<Actor>>(list, HttpStatus.OK);
	}

	@GetMapping("/get/{id}")
	public ResponseEntity<?> fetchActorId(@PathVariable String id) {
		Actor actor = service.getActorById(id);
		return new ResponseEntity<Actor>(actor, HttpStatus.OK);
	}

	@GetMapping("/actorsinfo/{category1}/{category2}")
	public ResponseEntity<?> showActorsByCategories(@PathVariable String category1, @PathVariable String category2) {
		List<Actor> list = service.fetchActorsByCategory(category1, category2);
		return new ResponseEntity<List<Actor>>(list, HttpStatus.OK);
	}// method

//	@PutMapping("/modify")
//	public ResponseEntity<String> modifyActor(@RequestBody Actor actor) {
//
//		String msg = service.updateActor(actor);
//		return new ResponseEntity<String>(msg, HttpStatus.OK);
//	}// method

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteActor(@PathVariable("id") String id) {

		String msg = service.deleteActorById(id);
		return new ResponseEntity<String>(msg, HttpStatus.OK);
	}// method

	@PatchMapping("/updateMobileNo/{id}/{newNo}") // partial update
	public ResponseEntity<String> changeActorMobileNo(@PathVariable("id") String id,
			@PathVariable("newNo") long newMobileNo) {
		String msg = service.updateActorMobileNo(id, newMobileNo);
		return new ResponseEntity<String>(msg, HttpStatus.OK);
	}// method
	
	
	
	@PutMapping("/{id}")
    public ResponseEntity < Actor > updateCourse(@PathVariable String  id, @RequestBody Actor actor) {
        actor.setId(id);
        return ResponseEntity.ok().body(this.service.updateActor(actor));
    }

}// class
