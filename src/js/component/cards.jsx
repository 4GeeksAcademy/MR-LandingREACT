import React from 'react';
import rigoImage from "../../img/rigo-baby.jpg";
const cards = () => {
  return (
    <div class="container">
        <div className="text-center">
<div class="row row-cols-1 row-cols-md-4 g-5">

<div class="col">
    <div class="card">
      <img src={rigoImage}class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
      <a href="#" class="btn btn-primary">Find out more</a>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card">
      <img src={rigoImage}class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
      <a href="#" class="btn btn-primary">Find out more</a>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card">
      <img src={rigoImage}class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
      <a href="#" class="btn btn-primary">Find out more</a>
      </div>
    </div>
  </div>
  
  <div class="col">
    <div class="card">
      <img src={rigoImage}class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
      <a href="#" class="btn btn-primary">Find out more</a>
      </div>
    </div>
  </div>
  
</div>
</div>
</div>
  );
};

export default cards;