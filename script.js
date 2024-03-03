const fetchdata = () => {
  fetch(" https://openapi.programming-hero.com/api/retro-forum/posts")
    .then((res) => res.json())
    .then((data) => {
      const newsContainer = document.getElementById("showData");

      data.posts.forEach((post) => {
        const newdiv = document.createElement("div");

        newdiv.innerHTML = `<div class="  bg-[#f1f2ff] gap-5 py-4 px-2 md:w-[700px] rounded-xl flex flex-col md:flex-row mt-5"> 
        <div class="indicator">
  <span class="indicator-item badge  ${
    post.isActive ? "badge-success " : "badge-error "
  } w-5 h-5
   "></span>
  <div class="grid w-32 h-32 bg-base-300 place-items-center"><img src=${
    post.image
  } class="rounded-xl" /></div>
</div>
       <div class = 
       
       >  
    
       <div class="">
           <div class=" flex">
               <p class="mr-4">#${post.category}</p>
               <p class="font-semibold">Author : ${post.author.name}</p>
           </div>
       <p class=" text-2xl font-bold">${post.title}</p>
       <p>${post.description}</p>
       <img src="./assets/Line.png" alt="" class=" my-3">
       <div class=" flex justify-between my-2">
           <div class=" flex gap-5">
           <div class=" flex gap-1">
            <img src="./assets/mess.png" alt="">
            <p>${post.comment_count}</p>
           </div>
           <div class=" flex  gap-1">
            <img src="./assets/eye.png" alt="">
            <p>${post.view_count}</p>
           </div>
            <div class=" flex gap-1">
                <img src="./assets/clock.png" alt="">
                <p class=" flex  gap-1">${post.posted_time} <span>min</span></p>
            </div>
           
           </div>
           <div onclick="showNewstitle('${post.title.replace(/'/g, ' ')}' , '${
          post.view_count
        }')" class="hover:cursor-pointer">
           <img src="./assets/Vector.png" alt="">
           </div>
           

        </div>
       </div>
      
   </div>`;

        newsContainer.appendChild(newdiv);
      });
    }
    );
};
fetchdata();

const fetchlatestdata = () => {
  fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts")
    .then((res) => res.json())
    .then((data) => {
      const latestnewsContainer = document.getElementById("latest");

      data.forEach((latestpost) => {
        const latestdiv = document.createElement("div");

        latestdiv.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl h-[570px] border-2 border-gray-200">
        <figure ><img src=${latestpost.cover_image} alt=""  class="rounded-[20px] my-5 mt-10 py-2 px-2  h-[250px] w-[350px]"/></figure>
        <div class="card-body">
          <h2 class="card-title flex">
           <img src="./assets/Date.png" alt="">
           <p>${latestpost.author.posted_date}</p>
          </h2>
          <p class=" font-bold text-2xl">${latestpost.title}</p>
          <p>${latestpost.description}</p>
         
          <div class="card-actions  flex gap-5">
           <img src=${latestpost.profile_image} alt="" class="w-16 rounded-full">
           <div class=" ">
             <p class=" font-bold text-2xl">
                ${latestpost.author.name}
             </p>
             <p>
                ${latestpost.author.designation}
             </p>
           </div>
          </div>
        </div>
      </div>
        `;

        latestnewsContainer.appendChild(latestdiv);
      });
    });
};


let co = 0;
const showNewstitle = (c, d) => {
  co++;
  document.getElementById("count").innerText = co;
  const newsContainer2 = document.getElementById("showData2");
  const newdiv2 = document.createElement("div");
  newdiv2.innerHTML = `
   <div class=" bg-white rounded-xl px-2 mx-5 flex justify-between py-5 mb-2">
      <p>${c}</p>
         <div class=" flex gap-2">
          <img src="./assets/eye.png" alt="" class="w-5 h-3 mt-2">
          <p>${d}</p>
         </div>
     </div>
`;
  newsContainer2.appendChild(newdiv2);
};

const handleSearchCatagory = (searchcategory) => {
  handleLoadigSpinner("block")
  fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchcategory}`
  )
    .then((res) => res.json())
    .then((data) => displayNewsBySearchCatagory(data.posts));
};

const displayNewsBySearchCatagory = (newscat)=>{
  handleLoadigSpinner("none")
  const showSearchnewsContainer = document.getElementById("showSearchData");

      newscat.forEach((post) => {
        const showSearchDatadiv = document.createElement("div");

        showSearchDatadiv.innerHTML = ` <div class=" mt-5 bg-[#f1f2ff] gap-5 py-4 px-2 md:w-[700px] rounded-xl flex flex-col md:flex-row ">
        <div class="indicator">
            <span class="indicator-item badge  ${
    post.isActive ? " badge-success " : " badge-error "
  } w-5 h-5
   "></span>
            <div class="grid w-32 h-32 bg-base-300 place-items-center"><img src=${ post.image }
                    class="rounded-xl" /></div>
        </div>
        <div class=>

            <div class="">
                <div class=" flex">
                    <p class="mr-4">#${post.category}</p>
                    <p class="font-semibold">Author : ${post.author.name}</p>
                </div>
                <p class=" text-2xl font-bold">${post.title}</p>
                <p>${post.description}</p>
                <img src="./assets/Line.png" alt="" class=" my-3">
                <div class=" flex justify-between my-2">
                    <div class=" flex gap-5">
                        <div class=" flex gap-1">
                            <img src="./assets/mess.png" alt="">
                            <p>${post.comment_count}</p>
                        </div>
                        <div class=" flex  gap-1">
                            <img src="./assets/eye.png" alt="">
                            <p>${post.view_count}</p>
                        </div>
                        <div class=" flex gap-1">
                            <img src="./assets/clock.png" alt="">
                            <p class=" flex  gap-1">${post.posted_time} <span>min</span></p>
                        </div>

                    </div>
                    <div onclick="showNewstitle('${post.title.replace(/'/g, ' ')}' , '${
                          post.view_count
                          }')" class="hover:cursor-pointer">
                        <img src="./assets/Vector.png" alt="">
                    </div>


                </div>
            </div>

        </div>
`;

        showSearchnewsContainer.appendChild(showSearchDatadiv);
      });
}

const handleSearch = () => {
  const searchValue = document.getElementById("search").value;
  if (searchValue) {
   handleSearchCatagory(searchValue);
  }
};

const handleLoadigSpinner = (text) => {
document.getElementById("loading-spiner").style.display=text
}

fetchlatestdata();