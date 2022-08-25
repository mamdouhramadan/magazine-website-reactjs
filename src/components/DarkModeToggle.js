import React from "react";
import { disableDarkMode, enableDarkMode } from "../helpers";

let theme = localStorage.getItem('theme');

if (theme === 'dark') enableDarkMode();

export const toggleTheme = () => {
    theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

window
    .matchMedia('(prefers-color-scheme: dark)')
    .addListener((e) => (e.matches ? enableDarkMode() : disableDarkMode()));

const DarkMode = () => {

    return (
        <>
            <button className="toggle-theme-wrapper" onClick={toggleTheme}>
                <ion-icon name="moon" />
            </button>
        </>
    );
};

export default DarkMode;
