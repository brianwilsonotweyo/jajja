import React from "react";

function Search() {
  return (
    <div>
      <div class="box-collapse">
        <div class="title-box-d">
          <h3 class="title-d">Search Property</h3>
        </div>
        <span class="close-box-collapse right-boxed ion-ios-close"></span>
        <div class="box-collapse-wrap form">
          <form class="form-a">
            <div class="row">
              <div class="col-md-12 mb-2">
                <div class="form-group">
                  <label for="Type">Search For a Spell</label>
                  <input
                    type="text"
                    class="form-control form-control-lg form-control-a"
                    placeholder="Search For a Spell..."
                  />
                </div>
              </div>

              <div class="col-md-12">
                <button type="submit" class="btn btn-b">
                  Search Now ???
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
