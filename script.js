const res = fetch("https://jsonplaceholder.typicode.com/users")
res.then((data)=>data.json()).then((data1)=>{
   for(var i =0; i<data1.length;i++){
    console.log(data1[i]);
    const div = document.createElement("div")
    div.innerHTML=`<div class="row row-col-1 row-cols-md-4 g-4">
    <div class="col">
      <div class="card">  
        <div class="card-body">
          <h5 class="card-text">Name:${data1[0].name}</h5>
          <p class="card-text">Email:${data1[0].email}</p>
          <p class="card-text">Street:${data1[0].street}</p>
          <p class="card-text">City:${data1[0].city}</p>
        </div>
      </div>
    </div>`
    document.body.append(div);
   }
})