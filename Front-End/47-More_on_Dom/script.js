const users = [
  {
    id: 1,
    fullName: "Priya Sharma",
    image: "https://plus.unsplash.com/premium_photo-1747851576159-8d483776648d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4MHx8fGVufDB8fHx8fA%3D%3D",
    profession: "UX Designer",
    description: "Passionate about crafting intuitive digital experiences. 5+ years designing for fintech and healthcare products across India and Europe.",
    tags: ["Figma", "Design Systems", "Research"]
  },
  {
    id: 2,
    fullName: "James Okafor",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    profession: "Backend Engineer",
    description: "Builds scalable server-side systems with a focus on performance and reliability. Open-source contributor and coffee enthusiast.",
    tags: ["Node.js", "PostgreSQL", "REST APIs"]
  },
  {
    id: 3,
    fullName: "Sofia Mendes",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    profession: "Data Scientist",
    description: "Turns raw data into actionable insights. Specializes in predictive modelling and NLP with a background in applied mathematics.",
    tags: ["Python", "ML", "Pandas"]
  },
  {
    id: 4,
    fullName: "Liam Chen",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    profession: "Frontend Developer",
    description: "Obsessed with pixel-perfect UIs and smooth animations. Loves bridging the gap between design and engineering in fast-paced teams.",
    tags: ["React", "TypeScript", "CSS"]
  },
  {
    id: 5,
    fullName: "Amara Nwosu",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    profession: "DevOps Engineer",
    description: "Automates everything from deployments to monitoring. Advocates for developer experience and zero-downtime release pipelines.",
    tags: ["Docker", "CI/CD", "AWS"]
  }
];

function loadCards(){
    var clutter = "";
    var clutter1 = "";

    users.forEach(function(obj){
        obj.tags.forEach(function(tag){
            clutter1 += `<div class="tag">${tag}</div>`;
        })
        
        clutter += `<div class="card">
            <div class="profile">
                <img src="${obj.image}" alt="">
                <h2>${obj.fullName} <span>${obj.profession}</span></h2>
            </div>
            <div class="br"></div>
            <h3 class="dis">${obj.description}</h3>
            <div class="tags">
                ${clutter1}
            </div>
        </div>`;
    })

    document.querySelector(".main")
    .innerHTML = clutter;
}

loadCards();