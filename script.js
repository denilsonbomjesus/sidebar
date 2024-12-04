const sidebar = document.getElementById('sidebar');
const toggleSidebar = document.getElementById('toggle-sidebar');

toggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('minimized');
});
