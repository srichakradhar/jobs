let jobs = {
  "1" : {
    "title" : "Android Dev",
    "company" : "50K Ventures",
    "salary" : "~30K - 60K",
    "time" : "2 months",
    "description" : "We're looking for an Android Developer to build our app with in the next two months."
  },
  "2" : {
    "title" : "Full Stack Developer",
    "company" : "Unknown",
    "salary" : "~65K",
    "time" : "2 months",
    "description" : "We're looking for an Full Stack Remote Developer to build the MVP of our start with in the next two months."
  }
}
let list = document.getElementById("jobs-list");
for (item in jobs) {
  let job = jobs[item];
  list.insertAdjacentHTML('beforeend', `<li>
    <h3> ${JSON.stringify(job.title)} </h3> <br>
    <h5> Company : ${JSON.stringify(job.company)} </h5> <br>
    <span class="saley-range">${JSON.stringify(job.salary)}</span> <br>
    <span class="estimated-time">${JSON.stringify(job.time)}</span> <br>
    <p class="description">${JSON.stringify(job.description)}</p>
  </li>`);
}
