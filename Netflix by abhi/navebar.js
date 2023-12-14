function navbar() {
    return `
    <a href="./main.html" class="logo">
    <img src="./assets//images//logo.png" width="140" height="32" alt="Flixnet">
</a>

<div class="search-box" search-box>
    <div class="search-wrapper" search-wrapper>
        <input type="text" name="search" aria-label="search movies" placeholder="Search any movies..." class="search-field" autocomplete="off" >

        <img src="./assets/images/search.png" width="24" height="24" alt="search" class="leading-icon">
    </div>

    <button class="search-btn" search-toggler>
        <img src="./assets/images/close.png" width="24" height="24" alt="close search box">
    </button>
</div>

<button class="search-btn" search-toggler menu-close>
    <img src="./assets/images/search.png" width="24" height="24" alt="open search box">
</button>

<button class="menu-btn" menu-btn menu-toggler>
    <img src="./assets/images/menu.png" width="30"
    height="30" alt="open menu" class="menu">
    
    <img src="./assets/images/menu-close.png" width="30" height="30" alt="close menu" class="close">
</button>

<span id="User_Watching" >${localStorage.getItem('UserWatching')}</span>
       `
}
export default navbar();