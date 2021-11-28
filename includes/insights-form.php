<div class="form">
  <div class="form-title">
    <p>Leave a reply</p>
    <span class="h4 fw-bold g-title fc-black revealMe">Your email address will not be published.</span>
  </div>

  <form id="insights-form" method="post" action="" role="form">
      <div class="messages"></div>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group revealMe">
            <label for="form_comments">Comments</label>
            <textarea id="form_comments" name="comments" class="form-control shadow-none" rows="4" style="resize: none;"></textarea>
            <div class="help-block with-errors"></div>
          </div>
        </div>
      </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group revealMe">
              <label for="form_name">Name *</label>
              <input id="form_name" type="text" name="name" class="form-control shadow-none" required="required" data-error="Firstname is required.">
              <div class="help-block with-errors"></div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group revealMe">
              <label for="form_email">Email *</label>
              <input id="form_email" type="email" name="email" class="form-control shadow-none" required="required" data-error="Valid email is required.">
              <div class="help-block with-errors"></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group revealMe">
              <label for="form_website">Website *</label>
              <input id="form_website" type="tel" name="website" class="form-control shadow-none" required="required" data-error="Website is required">
              <div class="help-block with-errors"></div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group revealMe form-check d-flex align-items-center">
              <input class="form-check-input larger" type="checkbox" class="form-control shadow-none" value="" id="form_check">
              <label class="form-check-label" for="form_check">
                 Save my name, email, and website in this browser for the next time I comm
              </label>
            </div>
          </div>
          <div class="col-md-12 d-flex align-items-center justify-content-center">
            <button class="form-control btn btn-red revealMe" type="submit"><div class="button__bg"></div><span class="btnText">Submit Comments</span></button>
            <!-- <button class="form-control" type="submit">Submit Comments</button> -->
          </div>
      </div>

    </form>
</div>
