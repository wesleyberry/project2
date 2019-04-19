{/* <h2>Update a Plan</h2>
<form id="updateplan" class="button-size">
  <select name="id">
		{{#each plans}}
			<option value="{{this.id}}">{{this.plan}}</option>
		{{/each}}
	</select>
  <textarea type="text" name="plan" placeholder="plan"></textarea>
  <button type="submit">Update Plan!</button>
</form>
//above can be deleted. it's just an example for eric
//theirs above

//mine below
<div class="input-group mb-3">
<div class="input-group-prepend">
  <button id="filter" class="btn btn-outline-secondary" type="button">Filter</button>
</div>
<select class="custom-select" id="inputGroupSelect03">
  <option selected>Filter by Venue</option>
  {{#each gig}}
  <option value="{{this.id}}">{{this.gigName}}</option>
  {{/each}}
</select>
</div>


// eslint-disable-next-line no-unused-vars
$("#filter").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    // event.preventDefault();

    // Get the ID by finding an element with a "name" attribute equal to the string "id"
    var id = $("[name=id]").val().trim();

    var filterGigs = {
      plan: $("#filter [name=plan]").val().trim()
    };

    // Send the PUT request.
    $.ajax("/todos/" + id, {
      type: "PUT",
      data: updatedPlan
    }).then(
      function() {
        console.log("updated id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  }); */}