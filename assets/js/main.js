

const iconToggleMobileNav = document.getElementById("toggleMobileNav")
const iconToggleCart = document.getElementById("openCart")

const closeMobileNavs = [].slice.call(document.getElementsByClassName("mobile-close"))




const toggleNav = (event) => {

    const element = event.target
    const className = element.dataset.mobile
    //console.log(className);
    const mobileNav = document.getElementsByClassName(className)[0];
    console.log(mobileNav);

    if (!mobileNav.classList.contains("none")) {

        //add none
        mobileNav.classList.toggle("close")
        setTimeout(() => {
            mobileNav.classList.toggle("none")
            mobileNav.classList.toggle("close")
            document.body.style.overflow = ""
        }, 2000)

    } else {
        //remove none

        mobileNav.classList.toggle("none")
        document.body.style.overflow = "hidden"
    }

}


iconToggleMobileNav.addEventListener("click", toggleNav)
iconToggleCart.addEventListener("click", toggleNav)

closeMobileNavs.forEach(item => {

    item.addEventListener("click", toggleNav)

})

