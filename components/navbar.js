function navbar(){
     return ` <nav>
     <div class="left_nav">
        
     </div>
     <div>
         <input oninput=" debounce(main,1000)" id="nav_search" type="search" placeholder="Search">
     </div>
     <div>
         <button id="searchBtn">Search</button>
     </div>

     <ul class="right_nav">
         <li><a id="home" href="home.html">Home</a></li>
         <li><button id="signUp_btn">Sign Up</button></li>

     </ul>
 </nav>`
}

export default navbar;