class Main {
    $ = document.querySelector.bind(document)
    $$ = document.querySelectorAll.bind(document)

    menuToggle () {
        const menubar = this.$('.menu-bars')
        const navbar = this.$('.header-small')

        menubar.addEventListener('click', () => {
            menubar.classList.toggle('fa-times')
            navbar.classList.toggle('active')
        })
    }

    clickSearch () {
        const iconSearch = this.$('.icon-search')
        const formSearch = this.$('.search-form')
        const iconSearchClose = this.$('.search-close')

        iconSearch.addEventListener('click', () => {
            formSearch.classList.add('active')
        })

        iconSearchClose.addEventListener('click', () => {
            formSearch.classList.remove('active')
        })
    }
}