const sidebar = document.getElementById('sidebar');
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('navbarNav').addEventListener('click', function () {
        sidebar.classList.toggle('show');
    });
});