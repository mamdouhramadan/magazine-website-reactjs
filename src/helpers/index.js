export const getColWidth = (size) => {
    switch (size) {
        case 'full':
            return 'grid-12'
        case 'half':
            return 'grid-6'
        case 'third':
            return 'grid-4'
        case 'quarter':
            return 'grid-3'
        default:
            return 'grid-12'
    }

}



export const enableDarkMode = () => {
    localStorage.setItem('theme', 'dark');
    document.body.classList.add('dark-mode');
}

export const disableDarkMode = () => {
    localStorage.setItem('theme', 'light');
    document.body.classList.remove('dark-mode');
}
